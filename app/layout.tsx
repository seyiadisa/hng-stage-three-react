import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { HeaderWrapper } from "../components/layout/header";
import AppFooter from "@/components/layout/footer";
import { CartProvider } from "@/providers/cart-provider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Get your audio equipment at affordable rates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} text-[15px] antialiased`}>
        <CartProvider>
          <div className="body">
            <HeaderWrapper />
            {children}
            <AppFooter />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
