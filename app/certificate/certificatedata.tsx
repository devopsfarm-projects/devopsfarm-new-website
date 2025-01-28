"use client";
import React, { useRef, MouseEventHandler } from "react";
import { useReactToPrint } from 'react-to-print';
import { UseReactToPrintOptions } from 'react-to-print';
interface CertificateProps {
  name: string;
  certifier1: string;
  certifier2: string;
  date: string; // Add this line
}

const Certificate: React.FC<CertificateProps> = ({ name, certifier1, certifier2 }) => {
 

  const certificateRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => certificateRef.current,
    documentTitle: `${name}_certificate`,
  } as UseReactToPrintOptions);

  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).replace(/\//g, '-');

  return (
    <>
      <div ref={certificateRef} className="w-full h-auto bg-white dark:bg-clip-bg dark:bg-transparent dark:bg-logo-gradient font-bold flex flex-col items-center justify-center">
        <div className="border-2 border-gray-300 rounded-lg max-w-3xl shadow-xl bg-gradient-to-r from-blue-50 to-purple-100 flex">
          {/* const currentDate = "2022-10-01"; 

                    const currentDate = "2022-10-01";  */}
                    <div className="relative w-1/3">
                      <img src='/Image/2025.png' alt="Logo" className="w-auto full object-cover rounded-md" />
                      <div className="absolute text-center top-0 left-0 text-white px-4 py-2 mt-24 ml-10 border mr-10">
                        <h2 className="text-sm">DevopsFarm</h2>
                        <p className="text-xs">grants and certifies this certificate on</p>
                        <p className="text-xs text-center font-bold mt-2 border-t-2 border-b-2">{currentDate}</p>
                      </div>
                    </div>
          <div className="w-2/3">
            <div className="py-20 px-8">
              <h1 className="text-6xl font-extrabold text-blue-700 text-center uppercase" style={{ fontFamily: 'serif' }}>Certificate</h1>
              <h2 className="text-3xl text-gray-700 font-bold text-black-700 text-center uppercase" style={{ fontFamily: 'serif' }}>Of Training</h2>
              <p className="mt-4 font-semibold text-center text-gray-600 uppercase">This Certificate is Presented to</p>
              <h3 className="text-3xl font-bold text-blue-700 mt-2 border-b-4 border-blue-600 text-center">{name}</h3>
              <p className="mt-4 text-md font-semibold text-center text-gray-600">
                <p className="mt-4 text-lg font-semibold text-center text-gray-600 uppercase">For the successful completion of</p>
                <br />
                <p className="text-xl font-bold text-center text-gray-600">Full Stack Developer</p>
                <br />
                {name} was part of the Training from <strong>10-06-2024</strong> to <strong>{currentDate}</strong> and has performed well as a Student.
              </p>
            </div>
            <div className="pb-10 flex justify-between px-8">
              <div className="text-center">
                <p className="text-md font-bold">
                  <img src='/Image/Omparkash.png' className="w-36 h-12" alt="Signature of OMparkash" />
                </p>
                <p className="text-sm">{certifier1}</p>
              </div>
              <img src='/Image/2025at.png' className="w-24" alt="Center Image" />
              <div className="text-center">
                <p className="text-md font-bold">
                  <img src='/Image/Dinesh.png' className="w-36 h-12" alt="Signature of Dinesh" />
                </p>
                <p className="text-sm">{certifier2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

   

            <div className="p-10">
              <div className="mt-6 flex justify-center space-x-4">
                <button
                  onClick={handlePrint as unknown as MouseEventHandler<HTMLButtonElement>} // Change the type of handlePrint to unknown first, then to MouseEventHandler<HTMLButtonElement>
                  className="px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
                >
                  Print Certificate
                </button>
              </div>
            </div>
    </>
  );
};

export default Certificate;
