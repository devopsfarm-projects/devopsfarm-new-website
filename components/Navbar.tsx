"use client";
import React, { useState, useEffect } from "react";
import { IconMail, IconPhone, IconNews } from "@tabler/icons-react";
import { FaBlog } from "react-icons/fa";
import Header from "./Header/Header";
import Link from "next/link";
import Image from "next/image";
import {
  IconAddressBook,
  IconBrandGooglePlay,
  IconHome,
  IconTerminal2,
} from "@tabler/icons-react";
import Sidebar from "./sidebar";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuTimeout, setMenuTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const indianTime = new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(indianTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  // Function to handle mouse enter (clears any closing timeout)
  const handleMouseEnter = () => {
    if (menuTimeout) {
      clearTimeout(menuTimeout);
    }
    setMenuOpen(true);
  };

  // Function to handle mouse leave (delays closing)
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setMenuOpen(false);
    }, 100); // Adjust delay in milliseconds (e.g., 300ms)

    setMenuTimeout(timeout);
  };

  return (
    <>
      {/* Dropdown Menu */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`fixed opacity-90 top-0 mt-28 left-0 w-full  h-1/2 bg-black text-white transform transition-transform duration-500 ease-in-out z-50 ${
          menuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <Header setMenuOpen={setMenuOpen} />
      </div>

      {/* Navbar */}
      <div className="fixed bg-black opacity-90 border-solid border-b-2 border-gray-700 text-white flex flex-col w-full z-50">
        <div className="bg-black bg-gradient-to-r md:flex hidden w-full h-4 mt-1.5 items-center justify-between px-4 fixed top-0 z-50">
          <div className="navbar-links flex items-center gap-4 text-gray-300">
            <h1 className="flex items-center text-xs">
              <IconMail className="h-4" /> query@devopsfarm.in
            </h1>
            <span className="text-xs">|</span>
            <h1 className="flex items-center text-xs">
              <IconPhone className="h-4" />
              +918769511173
            </h1>
            <span className="text-xs">|</span>
            <h1 className="flex items-center text-xs">
              <IconPhone className="h-4" />
              +919971566583
            </h1>
          </div>

          <div className="navbar-user flex items-center gap-4 text-gray-100">
            <h1 className="flex items-center text-xs">
              <FaBlog className="h-4" /> Blog
            </h1>
            <span className="text-xs">|</span>
            <h1 className="flex items-center text-xs">
              <IconNews className="h-4" /> News & Events
            </h1>
          </div>
        </div>

        <header className="flex justify-between md:pt-10 items-center p-4">
          <div className="flex items-center space-x-2">
            <Image
              width={40}
              height={40}
              src="/devopsfarm-logo.png"
              alt="Logo"
              className="w-10 md:w-20 h-auto"
            />
            <h1 className="md:text-2xl text-lg font-bold bg-clip-text text-white">
              <Link href="/">DevopsFarm</Link>
            </h1>
          </div>

          <ul className="md:flex  items-center hidden gap-6">
            <li className="transform transition-all duration-200 ease-in-out hover:scale-125 relative flex flex-col items-center justify-center">
              <Link href="/" className="flex flex-col items-center">
                <IconHome className="h-6" />
                <p className="text-center text-sm mt-1">Home</p>
              </Link>
            </li>

            <li
              className="transform transition-all px-6 duration-200 ease-in-out hover:scale-125 relative flex flex-col items-center justify-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <IconTerminal2 className="h-6" />
              <a className="text-center text-sm flex flex-col items-center mt-1">
                Courses
              </a>
            </li>

            <li className="transform transition-all pr-6 duration-200 ease-in-out hover:scale-125 relative flex flex-col items-center justify-center">
              <Link href="/about" className="flex flex-col items-center">
                <IconAddressBook className="h-6" />
                <p className="text-center text-sm mt-1">About</p>
              </Link>
            </li>

            <li className="transform transition-all duration-200 ease-in-out hover:scale-125 relative flex flex-col items-center justify-center">
              <Link href="/blogs" className="flex flex-col items-center">
                <IconBrandGooglePlay className="h-6" />
                <p className="text-center text-sm mt-1">Blog</p>
              </Link>
            </li>
          </ul>


          <div className="relative flex items-center space-x-4">
        
          
            <Image
              width={40}
              height={40}
              src="/whatsapp.png"
              alt="Profile"
              className="w-10 h-10"
            />
            <div className="inline-flex md:hidden ">
              <Sidebar />
            </div>
            <div className="md:flex hidden items-center space-x-1">
              <Image width={40} height={40} src="/image3.png" alt="Weather" className="w-6 h-auto" />
              <span className="text-sm">{time}</span>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
