"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "@/store/userSlice";
import SummaryApi from "../api";
import { toast } from "react-toastify";

const Navbar = () => {
  const dispatch = useDispatch();

  interface RootState {
    user: {
      user: {
        _id: string;
        // add other user properties here
      };
    };
  }

  const user = useSelector((state: RootState) => state?.user?.user);
  console.log("user:-", user);
  const router = useRouter();

  const handleCartNavigation = () => {
    router.push("/checkout");
  };

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      router.push("/");
    }

    if (data.error) {
      toast.error(data.message);
    }
  };

  return (
    <>
      {/* TODO : Make repsonsive  & Functional each button,  Hamburger Menu*/}

      <div className="flex justify-around items-center h-28 ">
        <h4 className="text-5xl cursor-pointer">Krist</h4>
        <div className="">
          <ul className="flex items-center gap-8 cursor-pointer">
            <li>
              <Link href="/">Home</Link>
            </li>
            <div className="flex items-center gap-2">
              <li>Shop</li>
              <IoIosArrowDown />
            </div>
            <li>Our Story</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex gap-5 items-center cursor-pointer">
          <CiSearch size={25} />
          <CiHeart size={25} />
          <IoBagHandleOutline size={25} onClick={handleCartNavigation} />

          {/* <button
            onClick={() => router.push("/login")}
            className="bg-black text-white px-5 py-2 text-xs rounded-lg "
          >
            Login
          </button> */}

          {user?._id ? (
            <button
              onClick={handleLogout}
              className="bg-black text-white px-5 py-2 text-xs rounded-lg "
            >
              Logout
            </button>
          ) : (
            <Link
              href={"/login"}
              className="bg-black text-white px-5 py-2 text-xs rounded-lg "
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
