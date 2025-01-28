

"use client"

import { useState, useEffect } from "react";
import Services from "./services";
import Link from "next/link";
import Sidebar from './sidebar';
import Course from "./course";
import Image from "next/image";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="w-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/assets/Website-Backgrounds-For-Desktop.jpg')" }}>
      <div className="w-full opacity-80 dark:text-white bg-gray-200 dark:bg-clip-bg dark:bg-transparent dark:bg-logo-gradient text-white">
        <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 lg:text-white dark:bg-clip-bg dark:bg-transparent dark:bg-logo-gradient text-white">
          <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r dark:from-blue-800 dark:via-blue-600 dark:to-white from-blue-800 via-blue-600 to-black">
            <Link href="/">
              DevOpsFarm
            </Link>
            </h1>

            <ul className="hidden text-black dark:text-white lg:inline-flex items-center gap-8 uppercase text-sm font-semibold">
              {/* <li className="navbarLi hover:text-blue-400">
                <Link href="/course">Course</Link>
              </li> */}
              <Course/>
              <Services />
              <li className="navbarLi hover:text-blue-400">
                <Link href="/about">About</Link>
              </li>
              <li className="navbarLi hover:text-blue-400">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="navbarLi hover:text-blue-400">
                <Link href="/blogs">Blog</Link>
              </li>
            </ul>
            <div className="hidden lg:inline-flex gap-8 items-center">
              <Link href="https://api.whatsapp.com/send?phone=+919971566583&text=Welcome%20to%20our%20DevOps%20Tool%20Stack%20Suggester%2C%20your%20go-to%20solution%20for%20finding%20the%20perfect%20DevOps%20tool%20stack%20for%20your%20projects.%20We're%20a%20team%20passionate%20about%20streamlining%20the%20DevOps%20process%20and%20helping%20developers%20like%20you%20maximize%20efficiency%20in%20your%20workflows."
                target="_blank">
                <button className="w-60 h-14 border-2 border-gray-400 text-black dark:text-white uppercase hover:border-blue-400 hover:text-blue-900 text-sm font-semibold rounded-full hover:bg-green-500 duration-300">
                  Connect On WhatsApp
                </button>
              </Link>
            </div>
            <div className="inline-flex lg:hidden">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Navbar;
