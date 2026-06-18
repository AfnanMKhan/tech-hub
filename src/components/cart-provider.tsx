"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { CartLine } from "@/lib/types";

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
    const stored = window.localStorage.getItem("comparecart-lines");
    if (stored) setLines(JSON.parse(stored) as CartLine[]);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("comparecart-lines", JSON.stringify(lines));
  }, [lines]);

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      addLine: (line) =>
        setLines((current) => {
          const existing = current.find((item) => item.productId === line.productId && item.sellerId === line.sellerId);
          if (!existing) return [...current, line];
          return current.map((item) =>
            item.productId === line.productId && item.sellerId === line.sellerId
              ? { ...item, quantity: item.quantity + line.quantity }
              : item
          );
        }),
      removeLine: (productId, sellerId) =>
        setLines((current) => current.filter((item) => item.productId !== productId || item.sellerId !== sellerId)),
      clearCart: () => setLines([])
    }),
    [lines]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
