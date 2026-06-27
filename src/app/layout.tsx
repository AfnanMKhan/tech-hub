import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/layout/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
  <CartProvider>
    <Header />
    {children}
  </CartProvider>
</body>
    </html>
  );
}