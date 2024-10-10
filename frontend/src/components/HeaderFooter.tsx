"use client"; // Mark this as a client component

import { usePathname } from "next/navigation";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";

const HeaderFooter = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname(); // Get the current pathname

  // Array of auth-related paths where Navbar and Footer should NOT be shown
  const authPages = ["/login", "/signup", "/forgot-password", "/otp"];

  // Check if the current route is one of the auth routes
  const isAuthPage = authPages.includes(pathname);

  return (
    <>
      {!isAuthPage && <Navbar />}
      {children}
      {/* TODO: */}
      {!isAuthPage && <Footer />}
    </>
  );
};

export default HeaderFooter;
