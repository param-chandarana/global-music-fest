"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "@/img/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black relative">
      {/* Logo Section */}
      <div>
        <h1 className="text-2xl font-signature ml-2">
          <Link href="/">
            <Image src={logo} alt="Global Music Fest" width={70} height={70} />
          </Link>
        </h1>
      </div>

      {/* Desktop Navbar */}
      <ul className="hidden md:flex">
        <li className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 hover:text-white duration-200 link-underline">
          <Link href="/about">about</Link>
        </li>
        <li className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 hover:text-white duration-200 link-underline">
          <Link href="/tickets">tickets</Link>
        </li>
        <li className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 hover:text-white duration-200 link-underline">
          <Link href="/schedule">schedule</Link>
        </li>
        <li className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 hover:text-white duration-200 link-underline">
          <Link href="/gallery">gallery</Link>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          nav ? "flex" : "hidden"
        } flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 z-40`}
      >
        <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
          <Link onClick={() => setNav(!nav)} href="/about">
            about
          </Link>
        </li>
        <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
          <Link onClick={() => setNav(!nav)} href="/tickets">
            tickets
          </Link>
        </li>
        <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
          <Link onClick={() => setNav(!nav)} href="/schedule">
            schedule
          </Link>
        </li>
        <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
          <Link onClick={() => setNav(!nav)} href="/gallery">
            gallery
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
