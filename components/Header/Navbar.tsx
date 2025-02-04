"use client";
import { useState} from "react";
import {
  IconDeviceIpadHorizontalCog,
  IconAddressBook,
  IconBrandGooglePlay,
  IconHome,
  IconTerminal2,
} from "@tabler/icons-react";
const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavigate = (label: string) => {
    console.log(`Navigating to ${label}`);
  };

  const links = [
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
    { icon: "/images/web.png", label: "MEAN & MERN", details: "MEAN & MERN details" },
    { icon: "/images/Azure.png", label: "Azure", details: "Azure details" },
    { icon: "/images/cloud.png", label: "Cloud Computring", details: "Cloud Computring details" },
    { icon: "/images/devops.png", label: "DevOps", details: "DevOps details" },
    { icon: "/images/GCP.png", label: "GCP", details: "GCP details" },
    { icon: "/images/CI/CD.png", label: "CI/CD", details: "CI/CD details" },
    { icon: "/images/backstage.png", label: "Backstage", details: "Backstage details" },
    { icon: "/images/AI/ML.png", label: "AI/ML", details: "AI/ML details" },
    { icon: "/images/AppSec.png", label: "AppSecurity", details: "AppSecurity details" },
    { icon: "/images/DS.png", label: "DS/ALGO", details: "DS/ALGO details" },
  ];

  const RoleBased = [
    { icon: "/images/image.png", label: "System Administrator", details: "Linux details" },
    { icon: "/images/image.png", label: "Kubernetes Administrator", details: "Linux details" },
    { icon: "/images/image.png", label: "Site Reliability Engineer", details: "Linux details" },
    { icon: "/images/image.png",  label: "Kubernetes Developer", details: "Linux details" },
    { icon: "/images/image.png", label: "Platform Engineer", details: "Linux details" },
    { icon: "/images/image.png", label: "DevOps Engineer", details: "Linux details" },
    { icon: "/images/image.png", label: "Cloud Engineer", details: "Linux details" },
  ];

  return (
    <>
      {/* Menu Dropdown */}
<div
  className={`absolute top-0 left-0 w-full h-1/2 bg-black text-white flex flex-col transform transition-transform duration-500 ease-in-out ${
    menuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
  }`}
>
  <div className="bg-black w-full justify-center px-40 border-b border-gray-400/30 flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-400/30">
    {/* Domain-based Section */}
    <div className="lg:w-2/3  p-4">
      <h1 className="text-lg font-bold mb-4 text-blue-300">Domain-based</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
        {links.map((link) => (
          <li
            key={link.label}
            className="flex items-center pl-4 pt-1 text-sm cursor-pointer hover:text-gray-300 transition-transform space-x-2"
            onClick={() => handleNavigate(link.label)}
          >
            <img src={link.icon} alt={link.label} className="w-8" />
            <span className="text-gray-400 pl-2">
              {link.label}
              <br />
              <span className="text-gray-600 text-sm">{link.details}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>

    {/* Role-based Section */}
    <div className="lg:w-4/3  p-4">
      <h1 className="text-lg font-bold mb-4 text-blue-300">Role-Based</h1>
      <ul className="">
        {RoleBased.map((link) => (
          <li
            key={link.label}
            className="flex items-center pl-4 pt-1 text-sm cursor-pointer hover:text-gray-300 transition-transform space-x-2"
            onClick={() => handleNavigate(link.label)}
          >
            <img src={link.icon} alt={link.label} className="w-8" />
            <span className="text-gray-400">
              {link.label}
              <br />
              <span className="text-gray-600 text-sm">{link.details}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

  <IconHome/>
 

      {/* Navbar Header */}
      <header className="bg-black flex flex-wrap justify-between items-center px-2">
       
        {/* Profile Image and Menu Button on the Right */}
        <div className="relative flex items-center space-x-4 ml-auto">
          <button
            className="flex text-white items-center space-x-1 text-lg font-bold hover:text-gray-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
           <IconTerminal2/>
          </button>
        </div>
      </header>
      <IconDeviceIpadHorizontalCog/>
  <IconAddressBook/>
  <IconBrandGooglePlay/>
    </>
  );
};

export default Navbar;
