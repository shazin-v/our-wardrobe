import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Cards from "./Cards";
import BestSeller from "./BestSeller";

type Props = {};

const ShopByCategory = (props: Props) => {
  return (
    <>
      <div className="">
        <div className="flex justify-around">
          <div>Shop By Categories</div>
          <div className="flex gap-2">
            <IoIosArrowRoundBack size={25} className="bg-[#f6f6f6] " />
            <IoIosArrowRoundForward
              size={25}
              className="bg-[#131118] text-white"
            />
          </div>
        </div>

        <div className="flex gap-5 mt-16 mb-16">
          <Cards />
        </div>
        <div>
          <BestSeller />
        </div>
      </div>
    </>
  );
};

export default ShopByCategory;