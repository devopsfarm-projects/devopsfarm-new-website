"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false); // Separate state for Course dropdown
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Separate state for Services dropdown
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleNavigate = async (courseName: string) => {
    setLoading(true); // Start loading

    // Navigate based on specific labels
    if (courseName === "Internship") {
      router.push("/Internship");
    } else {
      const encodedText = encodeURIComponent(courseName);
      router.push(`/services?message=${encodedText}`);
    }

    setLoading(false); // Stop loading after navigation
  };

  const CourseNavigate = async (courseName: string) => {
    setLoading(true); // Start loading
    const encodedText = encodeURIComponent(courseName);
    router.push(`/coursecontent?message=${encodedText}`);
    setLoading(false); // Stop loading after navigation
  };

  const items = [
    { icon: "/path-to-Image1.png", label: "Trainings" },
    { icon: "/path-to-Image2.png", label: "Internship" },
    { icon: "/path-to-Image3.png", label: "Consultancy" },
    { icon: "/path-to-Image3.png", label: "MasterClass" },
  ];

  const Course = [
    { icon: "/images/linux1.png", label: "Linux" },
    { icon: "/images/docker.webp", label: "Docker" },
    { icon: "/images/Python.webp", label: "Python" },
    { icon: "/images/Github.png", label: "GitHub" },
    { icon: "/images/Terraform.png", label: "Terraform" },
    { icon: "/images/Kubernetes.webp", label: "Kubernetes" },
    { icon: "/images/Java.png", label: "Java" },
    { icon: "/images/ChatGPT.webp", label: "ChatGPT" },
    { icon: "/images/Ansible.png", label: "Ansible" },
    { icon: "/images/AWS.webp", label: "AWS" },
    { icon: "/images/Jenkins.png", label: "Jenkins" },
    { icon: "/images/MySQL.png", label: "MySQL" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleCourseDropdown = () => {
    setIsCourseOpen(!isCourseOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <div>
      {/* Menu Icon for small screens (positioned on the right side) */}
      <div className="inline-flex lg:hidden justify-end">
        <FiMenu
          className="text-3xl text-white cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 bottom-0 right-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-600 to-white">
                <Link href="/">DevOpsFarm</Link>
              </h1>
            </div>
            <FiX
              className="text-2xl text-gray-200 cursor-pointer lg:hidden"
              onClick={toggleSidebar}
            />
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>

        <div className="mt-3">
          <div
            className="p-2.5 flex items-center rounded-md px-4 cursor-pointer hover:bg-blue-600 text-white"
            onClick={toggleCourseDropdown}
          >
            <i className="bi bi-chat-left-text-fill"></i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Course
              </span>
              <span
                className={`text-sm transform transition-transform duration-300 ${
                  isCourseOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <i className="bi bi-chevron-down"></i>
              </span>
            </div>
          </div>

          {isCourseOpen && (
            <div ref={dropdownRef} className="pl-6">
              {loading ? (
                <p className="text-center text-white">Loading...</p>
              ) : (
                Course.map(({ icon, label }, key) => (
                  <div
                    key={key}
                    className="cursor-pointer flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-white"
                    onClick={() => CourseNavigate(label)}
                  >
                    <img src={icon} alt={label} className="w-6 h-6 mr-2" />
                    {label}
                  </div>
                ))
              )}
            </div>
          )}

          <div
            className="p-2.5 flex items-center rounded-md px-4 cursor-pointer hover:bg-blue-600 text-white"
            onClick={toggleServicesDropdown}
          >
            <i className="bi bi-chat-left-text-fill"></i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                SERVICES
              </span>
              <span
                className={`text-sm transform transition-transform duration-300 ${
                  isServicesOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <i className="bi bi-chevron-down"></i>
              </span>
            </div>
          </div>

          {isServicesOpen && (
            <div ref={dropdownRef} className="pl-6">
              {loading ? (
                <p className="text-center text-white">Loading...</p>
              ) : (
                items.map(({  label }, key) => (
                  <div
                    key={key}
                    className="cursor-pointer flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-white"
                    onClick={() => handleNavigate(label)}
                  >
                    {/* <img src={icon} alt={label} className="w-6 h-6 mr-2" /> */}
                    {label}
                  </div>
                ))
              )}
              <Link
                href="/Certificate"
                className="dropdown-item flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-white"
              >
                Get Certificate
              </Link>
            </div>
          )}

          <Link href="/about">
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-bookmark-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                About
              </span>
            </div>
          </Link>
          <Link href="/contact">
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-bookmark-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Contact
              </span>
            </div>
          </Link>
          <Link href="/blogs">
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-bookmark-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Blog
              </span>
            </div>
          </Link>

          <Link
            href="https://api.whatsapp.com/send?phone=9971566583&text=Welcome%20to%20our%20DevOps%20Tool%20Stack%20Suggester%2C%20your%20go-to%20solution%20for%20choosing%20the%20perfect%20tools%20to%20optimize%20your%20DevOps%20workflow.%20%20How%20can%20I%20assist%20you%20today%3F"
            className="p-2.5 mt-3 flex items-center rounded-md px-4 cursor-pointer hover:bg-blue-600 text-white"
          >
            <i className="bi bi-bookmark-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Chat on WhatsApp
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
