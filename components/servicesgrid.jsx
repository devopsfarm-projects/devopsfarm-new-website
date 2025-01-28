"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ServicesGrid = () => {
  const [services, setServices] = useState([]);
  const router = useRouter();
  const [showMore, setShowMore] = useState(false);
  const contentRef = useRef(null); // Reference to the container for smooth height transition

  // Handle toggle for showing more items
  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Number of initial items to show
  const initialItems = 8;

  // Fetch services from JSON
  useEffect(() => {
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  const handleNavigate = (courseName, title) => {
    const encodedText = encodeURIComponent(courseName);

    // Check if the service title is "Consultancy"
    if (title === "Consultancy") {
      router.push(`/consultancy?message=${encodedText}`);
    } else if (title === "Internship") {
      router.push(`/internship`);
    } else {
      router.push(`/coursecontent?message=${encodedText}`);
    }
    
  };

  // Dynamic height based on whether to show more items
  const containerHeight = showMore ? "auto" : `${initialItems * 50}px`; // Adjust the `50px` based on item height

  return (
    <div className="w-full p-4 dark:text-white bg-white dark:bg-clip-bg dark:bg-transparent dark:bg-logo-gradient text-white">
      {services.map((service, index) => {
        // Determine the number of items to display
        const itemsToShow = showMore ? service.courseOptions.length : initialItems;

        return (
          <div
            key={index}
            className={`relative group mb-4 opacity-80 border-dotted border-2 border-sky-500 rounded-lg overflow-hidden cursor-pointer flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className={`p-4 flex-shrink-0 ${index % 2 === 0 ? "md:mr-4" : "md:ml-4"}`}>
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full rounded-lg shadow-lg"
              />
            </div>
            <div className="p-4 w-full flex flex-col items-center text-center relative">
              <div className="p-4 text-black dark:text-white w-full flex flex-col items-center text-center">
                <p className="text-2xl md:text-3xl font-bold mb-2">{service.title}</p>
              </div>

              <div
                className={`relative flex flex-col transition-all duration-500 overflow-hidden`}
                style={{ maxHeight: containerHeight }}
                ref={contentRef}
              >
                <ul className="flex flex-wrap justify-center list-none p-0 relative">
                  {service.courseOptions.slice(0, itemsToShow).map((text, i) => (
                    <li
                      key={i}
                      onClick={() => handleNavigate(text, service.title)} // Pass the title along with the text
                      className="bg-gray-700 text-white py-2 px-4 rounded-lg shadow-md cursor-pointer w-fit mr-4 text-center mb-2 hover:bg-cyan-600 transition-colors duration-300 relative"
                    >
                      {text}
                    </li>
                  ))}
                </ul>
                {service.courseOptions.length > initialItems && (
                  <div className="text-center mt-4">
                    <button
                      onClick={handleToggleShowMore}
                      className="text-black dark:text-white text-lg md:text-xl font-semibold cursor-pointer underline hover:text-cyan-500 transition-colors duration-300"
                    >
                      {showMore ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesGrid;
