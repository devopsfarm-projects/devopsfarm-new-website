"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleNavigate = async (courseName: string) => {
    setLoading(true);

    if (courseName === "Internship") {
      router.push("/internship");
    } else {
      const encodedText = encodeURIComponent(courseName);
      router.push(`/coursecontent?message=${encodedText}`);
    }

    setLoading(false);
    setIsOpen(false);
  };

  const items = [
    { icon: "/images/linux1.png", label: "Linux", details: "Linux details" },
    { icon: "/images/docker.webp", label: "Docker", details: "Docker details" },
    { icon: "/images/Python.webp", label: "Python", details: "Python details" },
    { icon: "/images/Github.png", label: "GitHub", details: "GitHub details" },
    { icon: "/images/Terraform.png", label: "Terraform", details: "Terraform details" },
    { icon: "/images/Kubernetes.webp", label: "Kubernetes", details: "Kubernetes details" },
    { icon: "/images/Java.png", label: "Java", details: "Java details" },
    { icon: "/images/ChatGPT.webp", label: "ChatGPT", details: "ChatGPT details" },
    { icon: "/images/Ansible.png", label: "Ansible", details: "Ansible details" },
    { icon: "/images/AWS.webp", label: "AWS", details: "AWS details" },
    { icon: "/images/Jenkins.png", label: "Jenkins", details: "Jenkins details" },
    { icon: "/images/MySQL.png", label: "MySQL", details: "MySQL details" },
  ];

  const handleToggle = () => {
    console.log("Toggle clicked!");
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      console.log("Clicked outside!");
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <li className="navbarLi cursor-pointer flex items-center" onClick={handleToggle}>
          COURSE
          <h1 className={`ml-2 transform transition-transform ${isOpen ? "rotate-180" : "rotate-90"}`}>
            {"▲"}
          </h1>
        </li>
      </div>
      <div
        className={`transition-all border-solid border-2 top-24 shadow-md shadow-gray-700 border-gray-800 bg-black w-10/12 duration-300 dropdown-content absolute z-50 ${
          isOpen ? "block" : "hidden"
        } text-white shadow-lg rounded-lg mt-2`}
      >
        <div className="p-4 grid grid-cols-2 gap-4">
          {loading ? (
            <p className="text-center col-span-2">Loading...</p>
          ) : (
            items.map(({ icon, label, details }, key) => (
              <div
                key={key}
                className="dropdown-item cursor-pointer flex items-center p-2 pr-6 hover:bg-gray-700 rounded relative"
                onClick={() => handleNavigate(label)}
              >
                <img src={icon} alt={label} className="w-6 h-6 mr-2" />
                {label}
                <div className="absolute left-full top-0 ml-2 p-2 bg-gray-800 text-white rounded hidden group-hover:block">
                  {details}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}