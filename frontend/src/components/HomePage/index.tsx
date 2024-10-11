import React from "react";
import Featured from "./Featured";
import ShopByCategory from "./ShopByCategory";
import Deals from "./Deals";
import Testimonial from "./Testimonial";
import SocialMediaPost from "./SocialMediaPost";
import Footer from "../common/Footer";


const index = () => {
  return (
    <>
      <div className="h-screen">
        <Featured />
        <ShopByCategory />
        <Deals />
        <Testimonial />
        <SocialMediaPost />
        {/* TODO:  remove this and make fooer appear on homepage*/}
        <Footer />
      </div>
    </>
  );
};

export default index;
