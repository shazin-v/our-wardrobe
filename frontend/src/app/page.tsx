"use client";
import React, { useEffect } from "react";
import Featured from "@/components/HomePage/Featured";
import ShopByCategory from "@/components/HomePage/ShopByCategory";
import Deals from "@/components/HomePage/Deals";
import Testimonial from "@/components/HomePage/Testimonial";
import SocialMediaPost from "@/components/HomePage/SocialMediaPost";
import { useGeneralContext } from "@/context";

import { Provider } from "react-redux";
import { store } from "@/store/store"; // Ensure this path is correct

export default function Page() {
  const { fetchUserDetails } = useGeneralContext();

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div className="">
      <Provider store={store}>
        <Featured />
        <ShopByCategory />
        <Deals />
        <Testimonial />
        <SocialMediaPost />
      </Provider>
    </div>
  );
}
