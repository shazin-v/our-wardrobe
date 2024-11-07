"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

const Otp = () => {
  const router = useRouter();

  const handleClick = () => {
    // Add OTP verification logic here
    console.log("OTP verified");
    router.push("/success"); // Redirect to success page after verification
  };

  return (
    <div className="flex h-screen">
      {/* Left container with background image */}
      <div className="relative w-1/2">
        <Image src="/images/OTP_IMG.svg" alt="OTP Image" layout="fill" objectFit="cover" />
      </div>

      {/* Right container with OTP form */}
      <div className="w-1/2 flex justify-center items-center bg-white p-6">
        <div className="w-full max-w-md">
          <div className="flex items-center mb-6 cursor-pointer"
            onClick={() => router.back()}
          >
            <IoIosArrowBack size={25} className="mr-2" />
            <h6
              className="text-lg cursor-pointer"
            >
              Back
            </h6>
          </div>
          <h2 className="text-3xl font-bold mb-6">Enter OTP</h2>
          <p className="text-gray-400 mb-6">
            We have sent a code to your registered email address:{" "}
            <strong>robertfox@example.com</strong>
          </p>

          <div className="flex gap-4 m-10 mx-auto">
            {[...Array(4)].map((_, idx) => (
              <input
                key={idx}
                type="text"
                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                maxLength={1}
                pattern="\d*"
              />
            ))}
          </div>

          <button
            onClick={handleClick}
            className="bg-black text-white p-3 rounded-md w-full"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
