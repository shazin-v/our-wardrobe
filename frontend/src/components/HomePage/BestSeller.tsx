import React from "react";
import { bestSellerItems } from "@/components/sampleData/SampleData";
import { CiStar } from "react-icons/ci";

type Props = {};

const BestSeller = (props: Props) => {
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold">Our Best Seller</h1>

      <div className="grid grid-cols-2 gap-6 my-10 lg:mt-16 lg:gap-4 lg:grid-cols-4 mx-10">
        {bestSellerItems.map((item, key) => (
          <div key={key} className="relative group">
            {/* img */}
            <div className="overflow-hidden h-80">
              <img
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                src={item.img}
                alt={item.title}
              />
                 {/* <Image
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                src={item.img} // Assuming item.img is a valid image path
                alt={item.title}
                layout="fill" // Fill the parent container
                objectFit="cover" // Cover the container
              /> */}

              {/* Star Icon */}
              <div className="absolute top-2 right-2 bg-white p-1 rounded-full ">
                <CiStar className="text-yellow-500" size={20} />
              </div>

              {/* Add to Cart Button */}
              <div className="absolute inset-0 flex items-end justify-center bg-black/20 h-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white p-2 w-3/4 m-3 rounded-lg">
                  Add to cart
                </button>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute left-3 top-3 space-y-1">
              {item.labels?.map((label, index) => (
                <p
                  key={index}
                  className={`sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-${
                    label === "Sale" ? "white" : "gray-900"
                  } uppercase bg-${
                    label === "Sale" ? "gray-900" : "white"
                  } rounded-full`}
                >
                  {label}
                </p>
              ))}
            </div>

            {/* Product Info */}
            <div className="flex items-start justify-between mt-4 space-x-4">
              <div>
                {/* title */}
                <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                  <a href="#" title="">
                    {item.title}
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                  </a>
                </h3>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
