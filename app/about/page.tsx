import React from "react";
// import { BackgroundLines } from "@/components/ui/background-lines";
export default function About() {
  return (
    <>
     {/* <BackgroundLines > */}
    <div className="w-full  m-auto flex items-center justify-cetner py-20 bg-black">
    <div className=" flex flex-col justify-center items-center sm:px-4 px-2">
        <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
            <div className="relative">
               
                <img
            className=" relative object-cover"
            src="/devopsconsultancy.png" alt="About us" />
            </div>
            <div
                className="lg:w-[60%] p-4 w-full h-full shadow-xl  flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
                <h2 className="text-4xl text-center text-green-400 font-bold px-4 py-1 md:mt-0 mt-10">
                    About Us
                </h2>
                {/* <p className="md:text-3xl text-2xl text-center text-gray-800 dark:text-gray-200 font-bold my-5">We are
                    Petal Haven S.C.
                </p> */}
                <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-gray-300">Welcome to DevOpsFarm, where innovation meets expertise. We specialize in providing top-tier services in IT Training and Consultancy, Masterclass Programs, Internship Opportunities, and Website Design to help individuals and businesses thrive in the digital world.
                </p>

                {/* <button className="lg:mt-10 mt-6 lg:px-6 px-4 lg:py-4 py-2 bg-green-600 rounded-sm lg:text-xl text-lg text-white font-semibold">Read More</button> */}

            </div>

        </div>
    </div>
</div>
{/* </BackgroundLines> */}

{/* <BackgroundLines > */}
<div className="w-full  m-auto flex items-center justify-cetner py-20 bg-black">
    <div className=" flex flex-col justify-center items-center sm:px-4 px-2">
        <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
        <div
                className="lg:w-[60%] p-4 w-full h-full shadow-xl  flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
                <h2 className="text-4xl text-center text-green-400 font-bold px-4 py-1 md:mt-0 mt-10">
                Who We Are
                </h2>
                {/* <p className="md:text-3xl text-2xl text-center text-gray-800 dark:text-gray-200 font-bold my-5">We are
                    Petal Haven S.C.
                </p> */}
                <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-gray-300">Based in the heart of Jodhpur, India, at Bhaskar Circle, Ratanada, DevOpsFarm has grown into a global company serving clients and students from the USA, Canada, India, and beyond. With a strong foundation in DevOps, cloud technologies, web development, and AI/ML, we provide a full spectrum of IT services and professional training aimed at equipping individuals and organizations with the skills they need to succeed.
                </p>

                {/* <button className="lg:mt-10 mt-6 lg:px-6 px-4 lg:py-4 py-2 bg-green-600 rounded-sm lg:text-xl text-lg text-white font-semibold">Read More</button> */}

            </div>
            <div className="relative">
               
                <img
            className=" relative object-cover  "
            src="/redcap.png" alt="About us" />
            </div>
            

        </div>
    </div>
</div>
{/* </BackgroundLines > */}
    <div className=" bg-clip-bg bg-transparent bg-logo-gradient">
      <div className="container mx-auto px-4 md:px-12 xl:px-6  md:py-24">
        <div className="md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-1/2 lg:w-6/12">
           
          
            <ul className="list-disc ml-6 text-white">
              <li>
                <span className="font-bold text-violet-400">
                  IT Training and Consultancy:
                </span>{" "}
                We provide hands-on, expert-led training and consultancy
                services in areas like DevOps, Cloud Computing, and Full Stack
                Development. Our programs are designed for all skill levels,
                empowering individuals and organizations to stay competitive in
                the ever-evolving tech landscape.
              </li>
              <li>
                <span className="font-bold text-violet-400">
                  Masterclass Programs:
                </span>{" "}
                Our masterclasses offer in-depth knowledge on a wide range of
                cutting-edge technologies, such as:
                <ul className="list-disc ml-6">
                  <li>DevOps Tools (Docker, Kubernetes, Jenkins, Ansible, Git)</li>
                  <li>Cloud Platforms (AWS, Azure, Google Cloud)</li>
                  <li>Full Stack Development (MEAN, MERN)</li>
                  <li>AI/ML and Data Science</li>
                </ul>
                Each masterclass is structured to provide deep, practical
                insights, making you proficient in the technologies that are
                driving today&apos;s innovations.
              </li>
              <li>
                <span className="font-bold text-violet-400">
                  Internship Programs:
                </span>{" "}
                Our internships are designed to provide practical, hands-on
                experience in IT. We work on live projects, giving interns the
                opportunity to apply what they&apos;ve learned and build a solid
                foundation for their future careers.
              </li>
              <li>
                <span className="font-bold text-violet-400">Website Design:</span>{" "}
                Crafting visually compelling and user-friendly websites tailored
                to your business goals. Our design process combines creativity
                and technology to deliver digital experiences that engage and
                convert.
              </li>
            </ul>
            <p className="mt-4 md:mt-6 text-base md:text-lg  text-white">
              <span className="text-xl md:text-2xl font-bold text-violet-400">
                Our Vision
              </span>
              : At DevOpsFarm, our vision is to empower individuals and
              businesses with the tools and skills they need to succeed in a
              digital-first world. We aim to provide high-quality services and
              training that foster innovation, efficiency, and growth.
            </p>
          </div>
          {/* <div  className="h-96 w-2/4 rotate-90 rounded-full">
            <img
              src="https://www.codeguru.com/wp-content/uploads/2021/10/DevOps-Tutorials.png"
              alt="DevOps Tutorials"
            />
          </div> */}
        </div>
      </div>
    </div>


<div className="flex  justify-center min-h-screen bg-black py-4">
    <div className="flex flex-col">
       

        <div className="flex flex-col mt-8">
            <div className="container max-w-7xl px-4">
                <div className="flex flex-wrap justify-center text-center mb-24">
                    <div className="w-full lg:w-6/12 px-4">
                        <h1 className="text-gray-100 text-4xl font-bold mb-8">
                            Meet the Team
                        </h1>

                        <p className="text-gray-100 text-lg font-light">
                            With over 5 years of combined experience, weve got a well-seasoned team at the helm.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="omparkash.png"/>
                            </a>

                            <div className="text-center mt-6">
                                <h1 className="text-gray-100 text-xl font-bold mb-1">
                                Omprakash Paliwal
                                </h1>

                                <div className="text-gray-300 font-light mb-2">
                                    Founder & Specialist
                                </div>

                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                    <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                                    </a>

                                    <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                                    </a>

                                    <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="/dineshpaliwal.png"/>
                            </a>

                            <div className="text-center mt-6">
                                <h1 className="text-gray-100 text-xl font-bold mb-1">
                                 Dinesh Paliwal
                                </h1>

                                <div className="text-gray-300 font-light mb-2">
                                    Tired & M. Specialist
                                </div>

                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                    <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                                    </a>

                                    <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                                    </a>

                                    <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="nilkhil.png"/>
                            </a>

                            <div className="text-center mt-6">
                                <h1 className="text-gray-100 text-xl font-bold mb-1">
                                Nikhil Yadav
                                </h1>

                                <div className="text-gray-300 font-light mb-2">
                                    Team Memeber
                                </div>

                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                    <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                                    </a>

                                    <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                                    </a>

                                    <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="/sheryash.png"/>
                            </a>

                            <div className="text-center mt-6">
                                <h1 className="text-gray-100 text-xl font-bold mb-1">
                                    Doesnt matter
                                </h1>

                                <div className="text-gray-300 font-light mb-2">
                                    Will be fired
                                </div>

                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                    <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                                    </a>

                                    <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                                    </a>

                                    <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="/team.png"/>
        </div>
    </div>
</div>
    </>
  );
}
