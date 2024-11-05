// app/layout.tsx
"use client"; // Add this line

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderFooter from "@/components/HeaderFooter";
import { ContextProvider } from "@/context";
import { Provider } from "react-redux"; // Import the Provider
import { store } from "@/store/store"; // Ensure this path is correct
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

// export const metadata: Metadata = {
//   title: "Krist - Our Wardrobe",
//   description:
//     "Shop over 1300 top high waisted white jeans and earn Cash Back all in one place. Also set Sale Alerts and shop Exclusive Offers only on ShopStyIe.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <ToastContainer position="top-center" />

          <ContextProvider>
            <HeaderFooter>{children}</HeaderFooter>
          </ContextProvider>
        </Provider>
      </body>
    </html>
  );
}
