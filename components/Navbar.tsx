"use client";
import React, { useState, useEffect } from "react";
import "./Header/Header.css";
import FloatingDockDemo from "./Header/Header.jsx";
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
      setTime(indianTime); // Debug here if error persists
    };
  
    updateTime();
    const interval = setInterval(updateTime, 60000);
  
    return () => clearInterval(interval);
  }, []);
  

  return (
    <>
      <div className="bg-black text-white flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/devopsfarm-logo.png" alt="Logo" className="w-20 h-auto" />
            
          </div>

          


      <FloatingDockDemo/>
          {/* Menu */}
          <div className="relative flex items-center space-x-4">
            <img
              src="/whatsapp.png"
              alt="Profile"
              className="w-10 h-10 "
            />
           
            <div className="flex items-center space-x-1">
             
              <img
                src="/image3.png"
                alt="Weather"
                className="w-6 h-auto"
              />
               <span className="text-sm">{time}</span>
            </div>
          </div>
        </header>

       {/* Dropdown Menu */}
<div
  className={`absolute top-0 left-0 w-full h-1/2 bg-black text-white flex flex-col justify-between items-center transform transition-transform duration-500 ${
    menuOpen ? "translate-y-0" : "-translate-y-full"
  }`}
>
  {/* Close Icon at Top Right */}
  <div className="w-full bg-black ">
    <button
      className="absolute top-4 right-4 text-white hover:text-gray-400"
      onClick={() => setMenuOpen(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>

 </div>
      </div>
    </>
  );
}
