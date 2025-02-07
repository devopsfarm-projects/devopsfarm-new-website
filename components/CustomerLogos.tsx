"use client";
import Image from "next/image";

const customerLogos = [
  { id: 1, src: "/nlm.png", alt: "Customer 1" },
  { id: 2, src: "/edubex.png", alt: "Customer 2" },
  { id: 3, src: "/kloudlab.png", alt: "Customer 3" },
  { id: 4, src: "/cybermedia.png", alt: "Customer 4" },
];

export default function CustomerLogos() {
  return (
    <div className="relative bg-black text-white   py-20">
        <div className="container mx-auto px-6  border-y pt-5 border-gray-400/30 text-center">
          <h1 className="text-4xl font-bold mb-6">Our  Customer</h1>
          <p className="text-lg font-light mb-12">
          </p>

    <div className="flex justify-center items-center space-x-6  py-6">
      {customerLogos.map((logo) => (
        <div key={logo.id} className="relative w-64 h-20 md:h-36">
          <Image
            src={logo.src}
            alt={logo.alt}
            layout="fill"
            objectFit="contain"
            className="hover:scale-110 transition-transform px-4 bg-white duration-300"
          />
        </div>
      ))}
    </div>
    </div>
      </div>
  );
}
