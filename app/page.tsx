"use client";
import React from "react";
import Herosection from "../components/Herosection";
import CustomerLogos from "@/components/CustomerLogos";
import { internships, helpSections, expectations } from "../components/homePageData";
export default function Home() {

  const InternshipCard = ({ internship }: { internship: { title: string, description: string, skills: string, tools: string, projects: string } }) => (
    <div className="relative overflow-hidden rounded-lg border bg-black hover:shadow hover:shadow-teal-200 p-4">
      <div className="flex flex-col rounded-md p-4">
        <h3 className="font-bold text-white">{internship.title}</h3>
        <p className="text-sm text-gray-400 mt-2">{internship.description}</p>
        <p className="text-xs text-gray-500 mt-2"> <strong>Skills:</strong> {internship.skills}</p>
        <p className="text-xs text-gray-500 mt-2"> <strong>Tools:</strong> {internship.tools}</p>
        <p className="text-xs text-gray-500 mt-2"> <strong>Projects:</strong> {internship.projects}</p>
      </div>
    </div>
  );

  const HelpSectionCard = ({ title, description }: { title: string, description: string }) => (
    <div className="flex flex-col md:flex-row bg-gray-900 items-center py-4 px-4 md:px-10 lg:px-20 text-sm border-t-2 rounded-b shadow-sm border-green-500 hover:bg-gray-800 transition-colors duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 md:w-20 text-green-500 stroke-current" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
      <div className="ml-3 text-center md:text-left mt-3 md:mt-0">
        <div className="text-2xl md:text-3xl text-gray-50">{title}</div>
        <div className="text-lg md:text-xl text-gray-300 mt-1">{description}</div>
      </div>
    </div>
  );

  const ExpectationListItem = ({ text } : {text: string}) => (
    <li className="flex items-center">
      <svg
        className="w-5 h-5 text-green-500 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
      {text}
    </li>
  );


  return (
    <>
    <Herosection/>
    <main className="pt-16 bg-clip-bg bg-transparent bg-logo-gradient">
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
              Unlock Agility and <br /> Accelerate Innovation with DevOps
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              We bridge the gap between development and operations, crafting and implementing streamlined DevOps pipelines that mitigate delivery bottlenecks. Unlock agility, accelerate innovation, and effectively engage your users with software that moves at the speed of your business.
            </p>
            <a
              href="https://wa.link/manbm0"
              target="_blank"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Get in touch
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl text-gray-800 mb-4">
                “99% of organizations practicing DevOps report positive impacts, including 61% with higher quality deliverables and 49% with faster time-to-market.”
              </h3>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What You Can Expect</h2>
              <ul className="space-y-2 text-black mb-6">
                {expectations.map((text, index) => (
                  <ExpectationListItem key={index} text={text} />
                ))}
              </ul>
              <div className="space-y-4">
                <a
                  target="_blank"
                  href="https://wa.link/manbm0"
                  className="block text-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Get Started
                </a>
                <a
                  target="_blank"
                  href="https://wa.link/manbm0"
                  className="block text-center border border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-300"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    
    <div className="flex flex-col gap-3 pb-8 justify-center items-center px-4 sm:px-8 md:px-16 lg:px-40">
      <h1 className="text-4xl text-green-500 mb-4">HOW DEVOPSFARM CAN HELP</h1>
      <p className="text-xl md:text-xl text-center text-gray-400 mb-6">
        We Help Streamline your Development so you can meet the Demands of your Users
      </p>
      {helpSections.map((section, index) => (
        <HelpSectionCard key={index} title={section.title} description={section.description} />
      ))}
    </div>


    <div className="bg-clip-bg  bg-transparent bg-logo-gradient text-white body-font">
    
    <>
    <div className="">
    <section
id="features"
className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30"
>
<section className="w-full mx-auto py-10 text-white">
<div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
  <div className="lg:w-[50%] w-full">
    <img
      className="w-full h-auto lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
      src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8d2Vic2l0ZXxlbnwwfDB8fHwxNzIwMjI4OTA3fDA&ixlib=rb-4.0.3&q=80&w=1080"
      alt="billboard image"
    />
  </div>
  <div className="lg:w-[50%] w-full text-gray-400 p-4 rounded-md">
    <h2 className="text-3xl font-semibold text-white">
      Welcome to DevOpsFarm
    </h2>
    <p className="text-md mt-4 ">
      A leading technology training and consultancy firm specializing in
      cutting-edge solutions across various industries. Our focus areas
      include DevOps, AI, MLOps, MERN, and MEAN stack development, along
      with modern web design practices. At DevOpsFarm, we are committed to
      equipping individuals and businesses with the skills and knowledge
      needed to excel in the ever-evolving tech landscape.
    </p>
  </div>
</div>

<div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row gap-4 justify-center items-center mt-6">
  <div className="w-full block md:hidden">
    <img
      className="w-full h-auto rounded-md"
      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxNZW50b3J8ZW58MHwwfHx8MTcyMDIyNzU1Nnww&ixlib=rb-4.0.3&q=80&w=1080"
      alt="billboard image"
    />
  </div>

  <div className="lg:w-[50%] w-full text-gray-400 p-4 rounded-md">
    <h2 className="text-3xl font-semibold text-white">
      Our internship program is designed to provide hands-on experience,
    </h2>
    <p className="text-md mt-4 ">
      Enabling aspiring professionals to work on real-world projects using
      the latest technologies. Interns at DevOpsFarm have the opportunity to
      learn from industry experts, collaborate on innovative solutions, and
      gain invaluable insights into the dynamic fields of DevOps, AI, MLOps,
      and full-stack development.
    </p>
  </div>

  <div className="w-full hidden md:block lg:w-[50%]">
    <img
      className="w-full h-auto rounded-md"
      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxNZW50b3J8ZW58MHwwfHx8MTcyMDIyNzU1Nnww&ixlib=rb-4.0.3&q=80&w=1080"
      alt="billboard image"
    />
  </div>
</div>
</section>


      {/* Hero Section */}
      <section className="container mx-auto px-4 space-y-6 py-8 md:py-12 lg:py-20">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Available Internship Programs</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Each of these internship programs provides a unique opportunity to gain hands-on experience, work on impactful projects, and develop skills that are highly sought after in the tech industry.
        </p>
      </div>
      <div className="mx-auto grid justify-center  gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {internships.map((internship, index) => (
          <InternshipCard key={index} internship={internship} />
        ))}
      </div>
    </section>

<div
  className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
  style={{
    backgroundImage:
      "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
    borderColor: "rgba(92, 79, 240, 0.2)",
  }}
></div>
<div
  className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
  style={{
    backgroundImage:
      "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
    borderColor: "rgba(92, 79, 240, 0.2)",
  }}
></div>
<CustomerLogos/>
</section>

</div>
    </>

</div>
    </>
  );
}
