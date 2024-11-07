import React from "react";
import Image from "next/image";

const Featured = () => {
  return (
    <>
      <div className="relative bg-gray-100 py-20">
        {/* Background text */}
        <h1 className="absolute text-[8vw] font-bold opacity-10 top-1/2 transform -translate-y-1/2 right-20 lg:right-36 pointer-events-none whitespace-nowrap">
          BEST SELLER
        </h1>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center justify-around px-10 lg:px-20 space-y-10 lg:space-y-0">
          {/* Left text content */}
          <div className="text-center lg:text-left space-y-5">
            <p className="text-3xl lg:text-4xl">Classic Exclusive</p>
            <h1 className="text-5xl font-bold">Women&apos;s Collection</h1>
            <p className="text-3xl lg:text-4xl">UP TO 40% OFF</p>
            <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
              Shop Now
            </button>
          </div>

          {/* Right image content */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
            width={500}
            height={500}
              src="/images/raamin-ka-Xki9hTNvJGo-unsplash-removebg-preview.png"
              alt="Women's Collection"
              className="object-contain w-full max-w-md lg:max-w-lg h-auto mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
