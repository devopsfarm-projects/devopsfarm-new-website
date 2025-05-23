import React from "react";
import { Sections, teamMembers } from "./aboutdata";
import { IconBrandLinkedin, IconBrandX, IconBrandInstagram   } from '@tabler/icons-react';
import Image from "next/image";
import Link from "next/link";
export default function About() {
 
const TeamMember = ({ name, role, image, social }: { name: string, role: string, image: string, social: { linkedin: string, twitter: string, instagram: string } }) => (
    <div className="w-full md:w-6/12 lg:w-3/12 px-6 mb-6">
      <div className="flex flex-col items-center">
      <Image
        width={200}
        height={200}
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-80 rounded-2xl object-cover drop-shadow-md hover:drop-shadow-xl transition duration-200"
        src={image}
        alt={name}
        />

        <div className="text-center mt-4">
          <h2 className="text-gray-100 text-xl font-bold">{name}</h2>
          <p className="text-gray-300 font-light mb-2">{role}</p>
          <div className="flex space-x-3 opacity-50 hover:opacity-100 transition-opacity duration-300">
            <Link href={social.linkedin}  target="_blank" className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-indigo-50">
            <IconBrandLinkedin  />
            </Link>
            <Link href={social.twitter}  target="_blank" className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-blue-50">
              <IconBrandX />
            </Link>
            <Link href={social.instagram}  target="_blank" className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-orange-50">
              <IconBrandInstagram/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
 



  return (
    <>

<div className="relative pt-20 scroll-auto">
      {Sections.map((section, index) => (
        <div key={index} className="sticky top-0 min-h-screen flex items-center justify-center text-white bg-black">
          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 px-4 py-10 lg:py-20">
            {/* Image First */}
            {section.imageFirst && (
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative h-60 sm:h-80 md:h-96 w-full max-w-lg">
                  <Image 
                    src={section.imgSrc} 
                    alt={section.alt} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            )}

            {/* Content Section */}
            <div className="w-full lg:w-1/2 p-6 shadow-xl rounded-xl text-center ">
              <h2 className="text-3xl md:text-4xl text-green-400 font-bold mb-4">{section.title}</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 text-justify">{section.description}</p>
            </div>

            {/* Image Second */}
            {!section.imageFirst && (
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative h-60 sm:h-80 md:h-96 w-full max-w-lg">
                  <Image 
                    src={section.imgSrc} 
                    alt={section.alt} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
    <div className="relative bg-black text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">Meet the Team</h1>
          <p className="text-lg font-light mb-12">
            With over 5 years of combined experience, we’ve got a well-seasoned team at the helm.
          </p>
          <div className="flex flex-wrap justify-center">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}




