import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SALT by Sabine Alter — Energie-Kunst für Führungspersönlichkeiten",
  description:
    "Persönliche Energie-Bilder für Menschen, die an der Spitze stehen — und spüren, dass noch mehr möglich ist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable} suppressHydrationWarning>
      <body className="bg-salt-white font-sans text-salt-black antialiased">
        {children}
      </body>
    </html>
  );
}
