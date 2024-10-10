import React from "react";
import Link from "next/link";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <>
      <div className="flex h-screen">
        {/* Left container with background image */}
        <div
          className="w-1/2 bg-gray-200 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Signup_IMG.svg')",
          }}
        ></div>

        {/* Right container with login form */}
        <div className="w-1/2 bg-white flex justify-center items-center">
          <div className="w-3/4">
            <h2 className="text-3xl font-bold mb-6">Create Ne Account 👋</h2>
            <p className="text-gray-400 mb-10">Please enter details</p>
            <form className="flex flex-col gap-2">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="p-3 border border-gray-300 rounded-md"
              />
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="p-3 border border-gray-300 rounded-md"
              />
              <label htmlFor="">Email address</label>
              <input
                type="text"
                placeholder="Email"
                className="p-3 border border-gray-300 rounded-md"
              />
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="p-3 border border-gray-300 rounded-md"
              />
              <div className="flex justify-between">
                <div>
                  <input type="checkbox" id="remember" name="remember" />
                  <label htmlFor="remember" className="ml-2">
                    I agree to <b>Terms & Conditions</b>
                  </label>
                </div>
              </div>

              <div>
                <p>
                  Already have an account?
                  <Link href={"/login"} className="text-blue-500">
                    {" "}
                    Sign In
                  </Link>
                </p>
              </div>
              <button className="bg-black text-white p-3 rounded-md">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
