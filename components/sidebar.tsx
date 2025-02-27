"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { links } from "./Header/Navbardata";
import {
  IconAddressBook,
  IconBrandGooglePlay,
  IconMenu2,
  IconTerminal2,
  IconX,
} from "@tabler/icons-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const CourseNavigate = async (courseName: string) => {
    setLoading(true);
    const encodedText = encodeURIComponent(courseName);
    router.push(`/coursecontent?message=${encodedText}`);
    setLoading(false);
    setIsOpen(false); // Close sidebar on selection
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleCourseDropdown = () => {
    setIsCourseOpen(!isCourseOpen);
  };

  return (
    <div>
      {/* Menu Icon for small screens */}
      <div className="inline-flex lg:hidden justify-end">
        <IconMenu2 className="text-3xl text-white cursor-pointer" onClick={toggleSidebar} />
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 bottom-0 right-0 p-2 w-[300px] overflow-y-auto text-center bg-black transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-600 to-white">
              <Link href="/" onClick={() => setIsOpen(false)}>DevOpsFarm</Link>
            </h1>
            <IconX className="text-2xl text-gray-200 cursor-pointer lg:hidden" onClick={toggleSidebar} />
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>

        <div className="mt-3">
          {/* Course Dropdown */}
          <div
            className="p-2.5 flex items-center rounded-md px-4 cursor-pointer hover:bg-blue-600 text-white"
            onClick={toggleCourseDropdown}
          >
            <IconTerminal2 className="h-6" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Courses</span>
            <span className={`text-sm transform transition-transform duration-300 ${isCourseOpen ? "rotate-180" : "rotate-0"}`}>
              <i className="bi bi-chevron-down"></i>
            </span>
          </div>

          {isCourseOpen && (
            <div className="pl-6">
              {loading ? (
                <p className="text-center text-white">Loading...</p>
              ) : (
                links.map(({ icon, label }, key) => (
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

          {/* Other Links */}
          <Link href="/about" onClick={() => setIsOpen(false)}>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 cursor-pointer hover:bg-blue-600 text-white">
              <IconAddressBook className="h-6" />
              <span className="text-[15px] ml-4 text-gray-200 font-bold">About</span>
            </div>
          </Link>

          <Link href="/blogs" onClick={() => setIsOpen(false)}>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 cursor-pointer hover:bg-blue-600 text-white">
              <IconBrandGooglePlay className="h-6" />
              <span className="text-[15px] ml-4 text-gray-200 font-bold">Blog</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;



// "use client";
// import React, { useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { links } from "./Header/Navbardata";
// import {IconAddressBook, IconBrandGooglePlay, IconMenu2, IconTerminal2, IconX } from "@tabler/icons-react";
// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isCourseOpen, setIsCourseOpen] = useState(false); // Separate state for Course dropdown
//   const [loading, setLoading] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const router = useRouter();


//   const CourseNavigate = async (courseName: string) => {
//     setLoading(true); // Start loading
//     const encodedText = encodeURIComponent(courseName);
//     router.push(`/coursecontent?message=${encodedText}`);
//     setLoading(false); // Stop loading after navigation
//   };



//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleCourseDropdown = () => {
//     setIsCourseOpen(!isCourseOpen);
//   };



//   return (
//     <div>
//       {/* Menu Icon for small screens (positioned on the right side) */}
//       <div className="inline-flex lg:hidden justify-end">
//         <IconMenu2
//           className="text-3xl text-white cursor-pointer"
//           onClick={toggleSidebar}
//         />
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 bottom-0 right-0 p-2 w-[300px] overflow-y-auto text-center bg-black transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         } lg:translate-x-0`}
//       >
//         {/* Sidebar Header */}
//         <div className="text-gray-100 text-xl">
//           <div className="p-2.5 mt-1 flex items-center justify-between">
//             <div className="flex items-center">
//               <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-600 to-white">
//                 <Link href="/">DevOpsFarm</Link>
//               </h1>
//             </div>
//             <IconX
//               className="text-2xl text-gray-200 cursor-pointer  lg:hidden"
//               onClick={toggleSidebar}
//             />
//           </div>
//           <div className="my-2 bg-gray-600 h-[1px]"></div>
//         </div>

//         <div className="mt-3">
          
//           <div
//             className="p-2.5 flex items-center rounded-md px-4 cursor-pointer hover:bg-blue-600 text-white"
//             onClick={toggleCourseDropdown}
//           >
//             <i className="bi bi-chat-left-text-fill"></i>
//             <div className="flex  w-full ">
//             <IconTerminal2 className="h-6" /> 
//             <span className="text-[15px] ml-4 text-gray-200 font-bold">
//                 Courses
//               </span>
//               <span
//                 className={`text-sm transform transition-transform duration-300 ${
//                   isCourseOpen ? "rotate-180" : "rotate-0"
//                 }`}
//               >
//                 <i className="bi bi-chevron-down"></i>
//               </span>
//             </div>
//           </div>

//           {isCourseOpen && (
//             <div ref={dropdownRef} className="pl-6">
//               {loading ? (
//                 <p className="text-center text-white">Loading...</p>
//               ) : (
//                 links.map(({ icon, label }, key) => (
//                   <div
//                     key={key}
//                     className="cursor-pointer flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-white"
//                     onClick={() => CourseNavigate(label)}
//                   >
//                     <img src={icon} alt={label} className="w-6 h-6 mr-2" />
//                     {label}
//                   </div>
//                 ))
//               )}
//             </div>
//           )}

//           <Link href="/about">
//             <div className="p-2.5 mt-3 flex items-center rounded-md px-4 cursor-pointer hover:bg-blue-600 text-white">
//               <i className="bi bi-bookmark-fill"></i>
//               <IconAddressBook className="h-6" />
//               <span className="text-[15px] ml-4 text-gray-200 font-bold">
//                 About
//               </span>
//             </div>
//           </Link>
          
//           <Link href="/blogs">
//             <div className="p-2.5 mt-3 flex items-center rounded-md px-4 cursor-pointer hover:bg-blue-600 text-white">
//               <i className="bi bi-bookmark-fill"></i>
//               <IconBrandGooglePlay className="h-6" />
//               <span className="text-[15px] ml-4 text-gray-200 font-bold">
//                 Blog
//               </span>
//             </div>
//           </Link>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
