"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";


const ForgotPassword = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex h-screen">
        {/* Left container with background image */}
        <div
          className="w-1/2 bg-gray-200 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/forgot_IMG.svg')",
          }}
        ></div>

        {/* Right container with login form */}
        <div className="w-1/2 bg-white flex justify-center items-center">
          <div className="w-3/4">
            <div className="flex">
              <IoIosArrowBack size={25} />
              <h6 className="text-lg">Back</h6>
            </div>
            <h2 className="text-3xl font-bold mb-6">Forgot Password</h2>
            <p className="text-gray-400">
              Enter your registered email address. we’ll send you a code to
              reset your password.
            </p>
            {/* <form className="flex flex-col gap-4"> */}
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Email"
                className="p-3 border border-gray-300 rounded-md"
              />

              <button
                onClick={() => router.push("/otp")}
                className="bg-black text-white p-3 rounded-md"
              >
                Send OTP
              </button>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
