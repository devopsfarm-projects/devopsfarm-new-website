"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getCourseData, CourseName, CourseData } from "./learningSection.server";
import { IconCircleDashedCheck } from "@tabler/icons-react";
import { Suspense } from 'react'

// interface CourseContent {
//   chapter: string;
//   details: string[];
//   subpoints?: string[];
// }

const LearningSection = () => {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");

  const [selectedCourse, setSelectedCourse] = useState<CourseData>({
    learnings: [],
    courseContent: [],
  });

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [, setActiveSubIndex] = useState<number | null>(null);
  const [, setSrc] = useState<string>(`/image/${message}.gif`);

  // const handleImageError = () => {
  //   setSrc(`/images/${message}.png`);
  // };

  useEffect(() => {
    if (message) {
      setSrc(`/image/${message}.gif`);
    }
  }, [message]);

  useEffect(() => {
    const fetchData = async () => {
      if (message) {
        const courseName = message as CourseName;
        const courseData = await getCourseData(courseName);
        const formattedData = {
          ...courseData,
          courseContent: courseData.courseContent.map((content) => ({
            ...content,
            details: Array.isArray(content.details) ? content.details : [content.details],
          })),
        };
        setSelectedCourse(formattedData);
      }
    };

    fetchData();
  }, [message]);

  if (!selectedCourse) {
    return (
      <div className="h-96 max-w-screen-2xl pl-8 mx-auto flex flex-col justify-center border-b-[1px] border-gray-500 text-white items-center bg-white bg-clip-bg bg-transparent bg-logo-gradient">
        <h1 className="text-2xl md:text-6xl uppercase font-bold">Loading...</h1>
      </div>
    );
  }

  const toggleDropdown = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
    setActiveSubIndex(null);
  };

  // const toggleSubDropdown = (subIndex: number) => {
  //   setActiveSubIndex(subIndex === activeSubIndex ? null : subIndex);
  // };

  return (
    <Suspense>
    <div className="grid pt-32 grid-cols-1 lg:grid-cols-3 bg-black gap-4 p-4 bg-clip-bg bg-transparent bg-logo-gradient">
      <div className="lg:col-span-2 p-4 w-fit h-fit">
        <h2 className="text-2xl font-bold mb-4 bg-black text-white">What You’ll Learn</h2>
        <ul className="list-none grid grid-cols-1 text-white md:grid-cols-2 bg-gray-900 opacity-70 rounded-lg p-8 gap-2">
          {selectedCourse.learnings.map((item: string, index: number) => (
            <li key={index} className="flex items-center space-x-2">
              <IconCircleDashedCheck width={20} height={20} className="w-8" stroke={2} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 p-4">
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Course Content</h2>
          <div className="space-y-2 text-white p-8 bg-gray-900 opacity-80 rounded-lg">
            {selectedCourse.courseContent.map((content, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full text-left p-4 hover:bg-gray-700 rounded-lg flex justify-between items-center"
                >
                  <span>{content.chapter}</span>
                  <span>{activeIndex === index ? "▲" : "▼"}</span>
                </button>
                {activeIndex === index && (
                  <div className="p-4 bg-gray-500 text-gray-100 space-y-2">
                    {content.subpoints?.map((point: string, pointIndex: number) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </Suspense>
  );
};

export default LearningSection;
