"use client";
import { cn } from "@/lib/utils";
import { FloatingDock } from "../ui/floating-dock";
import React, { useState, useRef} from "react";
import { useRouter } from "next/navigation";
import {
  IconDeviceIpadHorizontalCog,
  IconAddressBook,
  IconBrandGooglePlay,
  IconHome,
  IconTerminal2,
} from "@tabler/icons-react";
import { link } from "fs";

export default function FloatingDockDemo({ className }: { className?: string }) {
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

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-300" />,
      href: "/",
    },
    {
      title: "Courses",
      icon: <IconTerminal2 className="h-full w-full text-neutral-300" />,
      href: "/contact",
      links: [
        { icon: "/images/linux1.png", label: "Linux", details: "Linux details", onClick: () => handleNavigate("Linux") },
        { icon: "/images/docker.webp", label: "Docker", details: "Docker details", onClick: () => handleNavigate("Docker") },
        { icon: "/images/Python.webp", label: "Python", details: "Python details", onClick: () => handleNavigate("Python") },
        { icon: "/images/Github.png", label: "GitHub", details: "GitHub details", onClick: () => handleNavigate("GitHub") },
        { icon: "/images/Terraform.png", label: "Terraform", details: "Terraform details", onClick: () => handleNavigate("Terraform") },
        { icon: "/images/Kubernetes.webp", label: "Kubernetes", details: "Kubernetes details", onClick: () => handleNavigate("Kubernetes") },
        { icon: "/images/Java.png", label: "Java", details: "Java details", onClick: () => handleNavigate("Java") },
        { icon: "/images/ChatGPT.webp", label: "ChatGPT", details: "ChatGPT details", onClick: () => handleNavigate("ChatGPT") },
        { icon: "/images/Ansible.png", label: "Ansible", details: "Ansible details", onClick: () => handleNavigate("Ansible") },
        { icon: "/images/AWS.webp", label: "AWS", details: "AWS details", onClick: () => handleNavigate("AWS") },
        { icon: "/images/Jenkins.png", label: "Jenkins", details: "Jenkins details", onClick: () => handleNavigate("Jenkins") },
        { icon: "/images/MySQL.png", label: "MySQL", details: "MySQL details", onClick: () => handleNavigate("MySQL") },
      ],
    },
    {
      title: "Services",
      icon: <IconDeviceIpadHorizontalCog className="h-full w-full text-neutral-300" />,
      href: "#",
      links: [
        { icon: "/images/Internship.png", label: "Internship", details: "Internship details", onClick: () => handleNavigate("Internship") },
        { icon: "/images/Trainings.png", label: "Trainings", details: "Trainings details", onClick: () => handleNavigate("Trainings") },
        { icon: "/images/MasterClass.png", label: "MasterClass", details: "MasterClass details", onClick: () => handleNavigate("MasterClass") },
      ],},
    {
      title: "About",
      icon: (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "/about",
    },
    {
      title: "Contact",
      icon: <IconAddressBook className="h-full w-full text-neutral-300" />,
      href: "/contact",
    },
    {
      title: "Blog",
      icon: <IconBrandGooglePlay className="h-full w-full text-neutral-300" />,
      href: "/blogs",
    },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-xl mx-auto rounded-2xl z-50", className, { "border border-gray-400/30 hidden md:block rounded-2xl transition-all": isScrolled })}>
      <FloatingDock
        mobileClassName="translate-y-20" 
        items={links}
      />
    </div>
  );
}