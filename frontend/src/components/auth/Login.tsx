"use client";
import React, { useState } from "react";
import { useGeneralContext } from "@/context";
import Link from "next/link";
import SummaryApi from "../api";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import Image from "next/image";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { fetchUserDetails } = useGeneralContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(SummaryApi.signIn.url, {
      method: SummaryApi.signIn.method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
      credentials: "include",
    });

    const data = await response.json();
    if (data.success) {
      Cookies.set("authToken", data.data, { expires: 1, secure: true });
      toast.success(data.message);
      router.push("/");
      fetchUserDetails();
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left container with background image */}
      <div className="w-1/2 relative">
        <Image
          src="/images/Login_IMG.svg"
          alt="Login background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Right container with login form */}
      <div className="w-1/2 bg-white flex justify-center items-center">
        <div className="w-3/4">
          <h2 className="text-3xl font-bold mb-6">Welcome 👋</h2>
          <p className="text-gray-400 mb-10">Please login here</p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label>Email address</label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
                placeholder="Email"
                className="p-3 border border-gray-300 rounded-md w-full"
              />
            </div>
            <label>Password</label>
            <div className="relative mb-3">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                placeholder="Password"
                className="p-3 border border-gray-300 rounded-md w-full"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input type="checkbox" id="remember" className="accent-black" />
                <span className="ml-2">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-blue-500">
                Forgot password?
              </Link>
            </div>
            <div className="mt-4">
              <p>
                Don&apos;t have an account?
                <Link href="/signup" className="text-blue-500 ml-1">
                  Sign Up
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="bg-black text-white p-3 rounded-md mt-4"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
