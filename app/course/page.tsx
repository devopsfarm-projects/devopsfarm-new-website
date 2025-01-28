// "use client";
// import './learning.css';
// import React, { useState, useEffect } from "react";
// import { useRouter } from 'next/navigation';
// import Image from "next/image"; // Import the Image component
// export default function Course() {
//   const [courses, setCourses] = useState([]);
//   const router = useRouter();
//   const [showMore, setShowMore] = useState(false);

//   // Handle toggle for showing more items
//   const handleToggleShowMore = () => {
//     setShowMore(!showMore);
//   };

//   // Number of initial items to show
//   const initialItems = 9;

//   // Fetch courses from JSON
//   useEffect(() => {
//     fetch('/courses.json') // Assuming the correct JSON file name
//       .then(response => response.json())
//       .then(data => setCourses(data))
//       .catch(error => console.error('Error fetching courses:', error));
//   }, []);

//   const handleNavigate = (courseName: string) => {
//     const encodedText = encodeURIComponent(courseName);
//     router.push(`/coursecontent?message=${encodedText}`);
//   };

//   // Logic for determining items to display
//   const displayedCourses = showMore ? courses : courses.slice(0, initialItems);

//   return (
//     <>
//       <div id="team" className="section relative pt-20 pb-8 md:pt-16 dark:text-white bg-white dark:bg-clip-bg dark:bg-transparent dark:bg-logo-gradient">
//         <div className="container xl:max-w-6xl mx-auto px-4">
//           <div className="flex flex-wrap flex-row -mx-4 justify-center">
//             {displayedCourses.map((course: any, index) => (
//               <div
//                 key={course.name}
//                 className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6"
//               >
//                 <div
//                   onClick={() => handleNavigate(course.name)}
//                   className="relative overflow-hidden bg-white rounded-2xl text-black mb-12 hover:grayscale-0 wow fadeInUp"
//                   data-wow-duration="1s"
//                   data-wow-delay={`${index * 0.1}s`}
//                   style={{
//                     visibility: "visible",
//                     animationDuration: "1s",
//                     animationName: "fadeInUp",
//                     animationDelay: `${index * 0.1}s`,
                  
//                   }}
//                 >
//                   <div className="relative overflow-hidden px-6 mt-3">
//                     <Image
//                       src={course.src}
//                       className="w-32 h-32 object-contain max-w-full mx-auto cursor-pointer image-hover"
//                       alt={course.alt}
//                       width={128} // Specify width
//                       height={128} // Specify height
//                     />
                    
//                   </div>
//                   <div className="pt-6 text-center">
//                     <p className="text-lg leading-normal font-bold mb-1 cursor-pointer">
//                       {course.name}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {courses.length > initialItems && (
//             <div className="text-center mt-8">
//               <button onClick={handleToggleShowMore} className="btn btn-primary">
//                 {showMore ? 'Show Less' : 'Show More'}
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }
