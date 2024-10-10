import React from "react";
import { FiHome } from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";

type Props = {};

const Chain = (props: Props) => {
  return (
    // TODO: use logic for each page icon bg-black and make -- instead of -
    <div>
      <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
        <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
          <span className=" items-center after:mx-2 after:text-gray-200 after:content-['y'] dark:after:text-gray-500 sm:after:hidden ">
            <FiHome size={40}  className="bg-black text-white p-2"/>
            Address
          </span>
        </li>

        <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
          <span className=" items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
            <MdOutlinePayment size={40}  className="bg-[#f6f6f6] text-black p-2" />
            Payment Methode
          </span>
        </li>

        <li className=" shrink-0 items-center justify-center mx-auto">
          <span className=" items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
            <TiDocumentText size={40}  className="bg-[#f6f6f6] text-black p-2"/>
            Review
          </span>
        </li>
      </ol>
    </div>
  );
};

export default Chain;
