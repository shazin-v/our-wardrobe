import React from "react";

type Props = {};

const Featured = (props: Props) => {
  return (
    <>
      {/* <div className="h-4/5 bg-[#f3f3f3]">Featured</div> */}
      <div className="relative bg-gray-100">
        {/* Background text */}
        <h1 className="absolute  text-[140px] w-full font-bold opacity-10 top-2/4 text-end right-36  pointer-events-none">
          BEST SELLER
        </h1>

        {/* Main content */}
        <div className="flex justify-around">
          {/* Left text content */}
          <div className=" space-y-5 my-auto">
            <p className="text-3xl">Classic Exclusive</p>
            <h1 className="text-5xl font-bold">Women&apos;s Collection</h1>
            <p className="text-3xl">UPTO 40% OFF</p>
            <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
              Shop Now
            </button>
          </div>

          {/* Right image content */}
          <div className="h-1/2">
            <img
              src="/images/raamin-ka-Xki9hTNvJGo-unsplash-removebg-preview.png"
              alt="Women's Collection"
              className="object-contain w-full h-1/2 mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
