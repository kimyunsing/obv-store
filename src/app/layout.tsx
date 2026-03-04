import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OBV — Obvious Objects",
  description: "Obvious objects. Essential living.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}