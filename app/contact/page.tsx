"use client";
import Link from "next/link";
import Image from "next/image";
import WorldMap from "@/components/ui/world-map";
 
export default function Contact() {
  return (
    <div className="py-4 bg-clip-bg bg-transparent bg-logo-gradient text-white">
       <div className=" bg-black  w-full">
      {/* <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl text-white ">
        Contact our team{" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own studio apartment. Perfect for Nomads and
          Travellers.
        </p>
      </div> */}
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
    </div>
      <div className="container mx-auto flex flex-col md:flex-row my-12">
        <div className="flex flex-col w-full lg:w-2/5 p-8">
          <p className="text-3xl md:text-5xl text-yellow-500 my-4 leading-relaxed md:leading-snug">
            Contact our team
          </p>
          <p className="font-sans text-sm md:text-lg my-2 md:my-4 text-white ">
            <svg className="inline-block fill-current mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
            </svg>
            <a href="https://maps.app.goo.gl/4FGLNvVRb8e2BV7z6" target="_blank" rel="noopener noreferrer" title="click on">
              DEVOPS FARM, BHASKAR CIRCLE, RATANADA, JODHPUR (RAJ.)
            </a>
          </p>
          <p className="font-sans text-sm md:text-lg my-2 md:my-4 text-white ">
            <svg className="inline-block fill-current mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/>
            </svg>
            <a href="mailto:query@devopsfarm.in " title="click on">query@devopsfarm.in </a>
          </p>
          <p className="font-sans text-sm md:text-lg my-2 md:my-4 text-white ">
            <svg className="inline-block fill-current mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
            </svg>
            +918769511173
          </p>
          <p className="font-sans text-sm md:text-lg my-2 md:my-4 text-white  flex items-center">
            <Link
              href="https://api.whatsapp.com/send?phone=+919971566583&text=Welcome%20to%20our%20DevOps%20Tool%20Stack%20Suggester%2C%20your%20go-to%20solution%20for%20finding%20the%20perfect%20DevOps%20tool%20stack%20for%20your%20projects.%20We're%20a%20team%20passionate%20about%20streamlining%20the%20DevOps%20process%20and%20helping%20developers%20like%20you%20maximize%20efficiency%20in%20your%20workflows."
              target="_blank"
              rel="noopener noreferrer"
              title="click on"
              className="flex items-center"
            >
              <Image
                src="/icons/WhatsApp.png"
                alt="WhatsApp"
                width={40}
                height={40}
                className="w-5 h-5 mr-2"
              />
              +919971566583
            </Link>
          </p>

          <br /><br />
        </div>

      
               <div className=" md:w-1/2 p-4 flex justify-center">
                  <div className=" rounded-3xl overflow-hidden w-[50rem] h-[30rem]">
                    <iframe
                      className="w-[50rem] h-[30rem]"
                      src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=devops%20fram+(DevOps%20Farm%20)&amp;t=h&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                     
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
               </div>
      </div>
    </div>
  );
}
