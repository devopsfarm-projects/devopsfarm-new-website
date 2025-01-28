"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleNavigate = async (courseName: string) => {
    setLoading(true); // Start loading

    // Navigate based on specific labels
    if (courseName === "Internship") {
      router.push("/internship");
    } else {
      const encodedText = encodeURIComponent(courseName);
      router.push(`/services?message=${encodedText}`);
    }

    setLoading(false); // Stop loading after navigation
    setIsOpen(false); // Close dropdown after navigating
  };

  const items = [
    { icon: "/path-to-Image1.png", label: "Trainings" },
    { icon: "/path-to-Image2.png", label: "Internship" },
    { icon: "/path-to-Image3.png", label: "MasterClass" },
  ];

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false); // Close dropdown if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <li className="navbarLi cursor-pointer flex items-center" onClick={handleToggle}>
        Services
        {/* Icon with rotation based on isOpen */}
        <h1 className={`ml-2 transform transition-transform ${isOpen ? "rotate-180" : "rotate-90"}`}>
          {"▲"}
        </h1>
      </li>
      <div
        className={`transition-all duration-300 dropdown-content absolute ${
          isOpen ? "block" : "hidden"
        }  text-white  bg-gray-900 shadow-lg rounded-lg mt-2 py-2`}
      >
        <div className="p-4">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            items.map(({ icon, label }, key) => (
              <div
                key={key}
                className="dropdown-item cursor-pointer flex items-center p-2  hover:bg-gray-700 rounded"
                onClick={() => handleNavigate(label)}
              >
                {label}
              </div>
            ))
          )}
          <Link
            href="/consultancy"
            className="dropdown-item flex items-center p-2  hover:bg-gray-700 rounded"
            onClick={() => setIsOpen(false)} // Close dropdown after navigation
          >
            consultancy
          </Link>
          <Link
            href="/certificate"
            className="dropdown-item flex items-center p-2  hover:bg-gray-700 rounded"
            onClick={() => setIsOpen(false)} // Close dropdown after navigation
          >
            Get Certificate
          </Link>
        </div>
      </div>
    </div>
  );
}
