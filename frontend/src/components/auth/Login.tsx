import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex h-screen">
        {/* Left container with background image */}
        <div
          className="w-1/2 bg-gray-200 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Login_IMG.svg')",
          }}
        ></div>

        {/* Right container with login form */}
        <div className="w-1/2 bg-white flex justify-center items-center">
          <div className="w-3/4">
            <h2 className="text-3xl font-bold mb-6">Welcome 👋</h2>
            <p className="text-gray-400 mb-10">Please login here</p>
            <form className="flex flex-col gap-2">
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
                  <input type="checkbox" id="remember" name="remember" className="accent-black" />
                  <label htmlFor="remember" className="ml-2">
                    Remember me
                  </label>
                </div>
                <div>
                  <Link href={"/forgot-password"} className="text-blue-500">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <div>
                <p>
                  Don&apos;t have an account?
                  <Link href={"/signup"} className="text-blue-500">
                    {" "}
                    Sign Up
                  </Link>
                </p>
              </div>
              <button className="bg-black text-white p-3 rounded-md">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
