"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartLine = {
  productId: string;
  sellerId: string;
  quantity: number;
};

type CartContextValue = {
  lines: CartLine[];
  addLine: (line: CartLine) => void;
  removeLine: (productId: string, sellerId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("comparecart-lines");
    if (stored) setLines(JSON.parse(stored));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    localStorage.setItem("comparecart-lines", JSON.stringify(lines));
  }, [lines]);

  const addLine = (line: CartLine) => {
    setLines((current) => {
      const existing = current.find(
        (item) =>
          item.productId === line.productId &&
          item.sellerId === line.sellerId
      );

      if (!existing) {
        return [...current, { ...line, quantity: 1 }];
      }

      return current.map((item) =>
        item.productId === line.productId &&
        item.sellerId === line.sellerId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  };

  const removeLine = (productId: string, sellerId: string) => {
    setLines((current) =>
      current.filter(
        (item) =>
          !(item.productId === productId && item.sellerId === sellerId)
      )
    );
  };

  const clearCart = () => setLines([]);

  const value = useMemo(
    () => ({
      lines,
      addLine,
      removeLine,
      clearCart,
    }),
    [lines]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}