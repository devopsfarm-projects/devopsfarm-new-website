"use client";
import React, { useState, useEffect } from "react";
import  FloatingDockDemo  from "./Header/Header";
import { IconMail, IconPhone, IconNews } from '@tabler/icons-react';
import { FaBlog } from "react-icons/fa";
import Link from "next/link";
export default function Navbar() {
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);



  useEffect(() => {
    console.log("setTime reference:", setTime);
  
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
  

  return (
    <>
    <div className="bg-gray-800 bg-gradient-to-r md:flex hidden  w-full h-4 mt-1.5 items-center justify-between px-4">
      <div className="navbar-links flex items-center gap-4 text-gray-300 ">
        <h1 className="flex items-center text-xs "><IconMail className="h-4" /> query@devopsfarm.in</h1>
        <span className=" text-xs ">|</span>
        <h1 className="flex items-center text-xs"><IconPhone className="h-4" />+918769511173</h1>
        <span className=" text-xs ">|</span>
        <h1 className="flex items-center text-xs"><IconPhone className="h-4" />+919971566583</h1>
      </div>

      <div className="navbar-user flex items-center gap-4 text-gray-100">
        <h1 className="flex items-center text-xs"><FaBlog className="h-4" /> Blog</h1>
        <span className=" text-xs ">|</span>
        <h1 className="flex items-center text-xs"><IconNews className="h-4" /> News & Events</h1>
      </div>
    </div>

      <div className="  bg-black border-solid border-b-2 border-gray-700 text-white flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/devopsfarm-logo.png" alt="Logo" className="w-10 md:w-20 h-auto" />
            <h1 className="md:text-2xl text-lg font-bold bg-clip-text text-white ">
            <Link href="/">
              DevopsFarm
            </Link>
            </h1>
          </div>
      <FloatingDockDemo/>
          <div className="relative flex items-center space-x-4">
            <img
              src="/whatsapp.png"
              alt="Profile"
              className="w-10 h-10 "
            />
           
            <div className="md:flex hidden items-center space-x-1">
             
              <img
                src="/image3.png"
                alt="Weather"
                className="w-6 h-auto"
              />
               <span className="text-sm">{time}</span>
            </div>
          </div>
        </header>     
      </div>
    </>
  );
}
