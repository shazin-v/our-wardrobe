import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";


const Deals = () => {
  return (
    <>
      <div className=" h-96 flex flex-col lg:flex-row justify-between items-center mt-10 mx-auto max-w-7xl">
        {/* Left Section: Text */}
        <div className="flex flex-col justify-center lg:w-1/2 bg-gray-100 p-8 rounded-lg">
          <h3 className="text-3xl font-bold mb-4">Deals of the Month</h3>
          <p className="mb-8 text-gray-700">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>

          {/* Countdown */}
          <div className="flex gap-4 justify-start mb-8">
            <div className="bg-white shadow-md h-16 w-16 flex items-center justify-center rounded-lg">
              <p className="text-lg font-semibold">120 Days</p>
            </div>
            <div className="bg-white shadow-md h-16 w-16 flex items-center justify-center rounded-lg">
              <p className="text-lg font-semibold">10 Hours</p>
            </div>
            <div className="bg-white shadow-md h-16 w-16 flex items-center justify-center rounded-lg">
              <p className="text-lg font-semibold">30 Min</p>
            </div>
            <div className="bg-white shadow-md h-16 w-16 flex items-center justify-center rounded-lg">
              <p className="text-lg font-semibold">45 Sec</p>
            </div>
          </div>

          {/* View Products Button */}
          <div className="relative inline-flex items-center cursor-pointer">
            <button className="bg-black text-white px-8 py-3 rounded-lg text-lg font-medium">
              View all products
            </button>
            <IoIosArrowRoundForward
              className="absolute text-white right-3"
              size={25}
            />
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="h-96 lg:w-1/2 mt-10 lg:mt-0 lg:ml-8">
          <img
            src="/images/Login_IMG.svg"
            alt="Deals Image"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Deals;
