
// "use client";
// import React, { useState, useEffect } from 'react';
// import './style.css';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { Trainings, MasterClass, Internship, Consultancy } from '../../public/servicesData'; // Adjust as necessary
// import Image from "next/image";
// export default function Service() {
//   const router = useRouter();
//   const searchParams:any = useSearchParams();
//   const message = searchParams.get('message');
  
//   const [selectedCourse, setSelectedCourse] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false); // Add loading state

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true); // Start loading

//       if (message) {
//         let courseData: any = [];
//         switch (message) {
//           case 'Trainings':
//             courseData = Trainings;
//             break;
//           case 'MasterClass':
//             courseData = MasterClass;
//             break;
//           case 'Internship':
//             courseData = Internship;
//             break;
//           case 'Consultancy':
//             courseData = Consultancy;
//             break;
//           default:
//             break;
//         }
//         // Enforce a minimum loading duration of 1 second
//         const loadDuration = 200;
//         const start = Date.now();

//         // Simulate fetching data with a delay
//         setSelectedCourse(courseData);

//         const duration = Date.now() - start;
//         const remainingTime = Math.max(loadDuration - duration, 0);
//         setTimeout(() => {
//           setLoading(false); // Stop loading after minimum 1 second
//         }, remainingTime);
//       }
//     };

//     fetchData();

//     // Cleanup function to clear timeout if the component unmounts
//     return () => {
//       setLoading(false); // Ensure loading is stopped if the component unmounts
//     };
//   }, [message]);

//   const handleNavigate = (courseName: string) => {
//     const encodedText = encodeURIComponent(courseName);
//     router.push(`/coursecontent?message=${encodedText}`);
//   };

//   return (
//     <div className="dark:bg-clip-bg pl-8 dark:bg-transparent dark:bg-logo-gradient dark:text-white body-font">
//       {loading ? (
//         <div className="flex items-center justify-center min-h-screen">  
//        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
//        <Image alt='loading_img' src="/devopsfarm.png" width={40} height={40}  className=" w-28"/>
//         </div>
//       ) : (
//         <>
//           {/* Hero Section */}
//           <section className="bg-animated cyber-grid min-h-screen flex items-center justify-center p-4">
//             <div id="particles"></div>
//             <div className="text-center z-10">
//               <h1 className="text-6xl font-bold mb-4 text-dark neon-text glitch-effect hover-3d" data-text={message}>{message}</h1>
//               <a href="#" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full hover:from-cyan-600 mt-8 hover:to-blue-600 transition-all duration-300 hover:scale-110 inline-block">
//                 <i className="fas fa-rocket mr-2"></i>Connect On WhatsApp
//               </a>
//               <p className="text-xl text-cyan-300 mt-8 animate-bounce">VVVV</p>
//             </div>
//           </section>
        
//           {/* Testimonials Section */}
//           <section className="bg-animated cyber-grid py-20">
//             <div className="container mx-auto px-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {selectedCourse.map((testimonial, index) => (
//                   <div 
//                     key={testimonial.title} 
//                     onClick={() => handleNavigate(testimonial.title)} 
//                     className="testimonial-card rounded-lg p-6 floating" 
//                     style={{ animationDelay: `${index * 1}s` }}
//                   >
//                     <div className="flex items-center mb-4">
//                       <Image
//                         src={testimonial.imgSrc} 
//                         width={64} 
//                         height={64} 
//                         className="mr-4 w-16 object-cover" 
//                         alt={`${testimonial.title} image`} // Added alt for accessibility
//                       />
//                       <div>
//                         <h4 className="font-bold">{testimonial.title}</h4>
//                         <p className="text-cyan-400">{testimonial.role}</p>
//                       </div>
//                     </div>
//                     <p className="text-gray-300">&quot;{testimonial.testimonial}&quot;</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         </>
//       )}
//     </div>
//   );
// }
