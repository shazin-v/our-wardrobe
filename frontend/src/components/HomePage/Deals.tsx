import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";

const Deals: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mt-10 mx-auto max-w-7xl px-5 lg:px-0">
      {/* Left Section: Text */}
      <div className="flex flex-col justify-center lg:w-1/2  p-8 rounded-lg">
        <h3 className="text-3xl font-bold mb-4">Deals of the Month</h3>
        <p className="mb-8 text-gray-700">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>

        {/* Countdown */}
        <div className="flex gap-4 justify-start mb-8">
          {["120 Days", "10 Hours", "30 Min", "45 Sec"].map((time, index) => (
            <div
              key={index}
              className="bg-white shadow-md h-16 w-16 flex-col items-center justify-between rounded-lg p-2"
            >
              <p className="text-lg font-semibold text-center">{time}</p>
            </div>
          ))}
        </div>

        {/* View Products Button */}
        <div className="flex items-center">
          <button
            onClick={() => router.push("/product")}
            className="bg-black text-white flex items-center px-6 py-3 rounded-lg text-lg font-medium gap-2 hover:bg-gray-800 transition"
          >
            View all products
            <IoIosArrowRoundForward size={25} />
          </button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="h-full w-full lg:w-1/2 mt-10 lg:mt-0 lg:ml-8 flex justify-center">
        <Image
          src="/images/Login_IMG.svg"
          width={100}
          height={100}
          alt="Deals"
          className="object-contain w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default Deals;
