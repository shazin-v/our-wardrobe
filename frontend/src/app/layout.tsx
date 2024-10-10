import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderFooter from "@/components/HeaderFooter";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Krist - Our Wardrobe",
  description:
    "Shop over 1300 top high waisted white jeans and earn Cash Back all in one place.Also set Sale Alerts and shop Exclusive Offers only on ShopStyIe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderFooter>{children}</HeaderFooter>
      </body>
    </html>
  );
}
