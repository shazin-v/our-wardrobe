"use client";
import React, { useState } from "react";
import Link from "next/link";
import SummaryApi from "@/components/api/index";

type Props = {};

const SignUp = (props: Props) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("setFname", fName);
  console.log("lName", lName);
  console.log("email", email);
  console.log("password", password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataResposne = await fetch(SummaryApi.signUp.url, {
      method: SummaryApi.signUp.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname: fName,
        lname: lName,
        email,
        password,
      }),
    });
    // TODO: Make logic for verify the email auth
    // TODO: Make eye icon and functionality for password

    // alert("Form Submitted");
    const data = await dataResposne.json();
    console.log("data", data);
    if (data.message == "User created successfully") {
      console.log("User successfully created");
      alert(data.message); // Show alert with the response message if unsuccessful
      window.location.href = "/login"; // Redirect to login page on success
    } else {
      alert(data.message); // Show alert with the response message if unsuccessful
    }
  };

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
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <label htmlFor="">First Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
                required
                className="p-3 border border-gray-300 rounded-md"
              />
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
                required
                className="p-3 border border-gray-300 rounded-md"
              />
              <label htmlFor="">Email address</label>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-3 border border-gray-300 rounded-md"
              />
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="p-3 border border-gray-300 rounded-md"
              />
              <div className="flex justify-between">
                <div>
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    required
                  />
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
