"use client";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";


const Otp = () => {
  const handleCLick = () => {
    return true;
  };
  return (
    <>
      <div className="flex h-screen">
        {/* Left container with background image */}
        <div
          className="w-1/2 bg-gray-200 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/OTP_IMG.svg')",
          }}
        ></div>

        {/* Right container with login form */}
        <div className="w-1/2 bg-white flex justify-center items-center">
          <div className="w-3/4">
            <div className="flex">
              <IoIosArrowBack size={25} />
              <h6 className="text-lg">Back</h6>
            </div>
            <h2 className="text-3xl font-bold mb-6">Enter OTP</h2>
            <p className="text-gray-400">
              We have share a code of your registered email address
              robertfox@example.com
            </p>
            <form className="flex flex-col gap-4">
                <div className="flex gap-4 m-10 mx-auto">

              <input
                type="text"
                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                pattern="\d*"
                maxLength={1}
                />
              <input
                type="text"
                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                maxLength={1}
                />
              <input
                type="text"
                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                maxLength={1}
                />
              <input
                type="text"
                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                maxLength={1}
                />
                </div>

              <button
                onClick={handleCLick}
                className="bg-black text-white p-3 rounded-md"
              >
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
