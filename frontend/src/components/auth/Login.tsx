"use client"; // Ensure this is the very first line

import Link from "next/link";
import React, { useState } from "react";
import SummaryApi from "../api";
import { useRouter } from "next/navigation";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const router = useRouter(); // Call useRouter in a client-side context
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataResposne = await fetch(SummaryApi.signIn.url, {
      method: SummaryApi.signIn.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const data = await dataResposne.json();
    console.log(data, data);
    if (data.success === true) {
      console.log("User successfully logged in");
      alert(data.message);
      router.push("/"); // Correctly using router.push
      // Redirect to home page on success
    } else {
      console.log("else");
      alert(data.message);
    }
  };
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
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <label htmlFor="">Email address</label>
              <input
                type="text"
                name="email"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
                placeholder="Email"
                className="p-3 border border-gray-300 rounded-md"
              />
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={(e) => {
                  setCredentials({ ...credentials, password: e.target.value });
                }}
                placeholder="Password"
                className="p-3 border border-gray-300 rounded-md"
              />
              <div className="flex justify-between">
                <div>
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="accent-black"
                  />
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
