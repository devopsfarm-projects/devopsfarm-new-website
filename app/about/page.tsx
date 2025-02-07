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
 

  // const fadeInLeft = {
  //   hidden: { opacity: 0, x: -100 },
  //   visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  // };

  // const fadeInRight = {
  //   hidden: { opacity: 0, x: 100 },
  //   visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  // };

  return (
    <>
    <div className="relative pt-20 scroll-auto">
        {Sections.map((section, index) => (
            <div key={index} className="sticky top-0 h-screen flex items-center justify-center text-white bg-black">
                <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 px-4 py-20">
                    {section.imageFirst && 
                    <img className="object-cover h-96 " src={section.imgSrc} alt={section.alt} />
                  //   <div className="relative h-96  w-96">
                  //   <Image src={section.imgSrc} alt={section.alt} fill  className="object-cover" />
                  // </div>
                    }
                    <div className="lg:w-[60%] p-6 shadow-xl rounded-xl text-center">
                        <h2 className="text-4xl text-green-400 font-bold mb-4">{section.title}</h2>
                        <p className="md:text-xl text-lg text-gray-300 text-justify">{section.description}</p>
                    </div>
                    {!section.imageFirst && <img className="object-cover h-96 max-w-full " src={section.imgSrc} alt={section.alt} />}
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




