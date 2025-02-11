
import React from 'react';
const HeroSection = () => {
  return (
    <main className="pt-16 dark:bg-clip-bg dark:bg-transparent dark:bg-logo-gradient ">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Company Info */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Unlock Agility and <br/>
            Accelerate Innovation
            with DevOps
            </h1>
            <p className="text-xl text-gray-400 mb-6">
            We bridge the gap between development and operations, crafting and implementing streamlined DevOps pipelines that mitigate delivery bottlenecks. Unlock agility, accelerate innovation, and effectively engage your users with software that moves at the speed of your business.
            </p>
            <a
             href="https://wa.link/manbm0"
            target='_blank'
             className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Get in touch
            </a>
          </div>

          {/* Right Side: Details and Buttons */}
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl  text-gray-800 mb-4">“99% of organizations practicing DevOps report positive impacts, including 61% with higher quality deliverables and 49% with faster time-to-market.”</h3>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              What You Can expect
              </h2>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Consulting and Advisory
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Assessment and Recommendations
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Solution Design and Architect
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Proof of Concepts
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Migration and Optimization
                </li>
              </ul>
              <div className="space-y-4">
                <a
                 target='_blank'
                href="https://wa.link/manbm0"
                  className="block text-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Get Started
                </a>
                <a
                 target='_blank'
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
      <img className='w-full h-96 pb-10' src='/images/Consulting.jpg'/>

      <div className="flex flex-col gap-3 pb-8 justify-center items-center px-4 sm:px-8 md:px-16 lg:px-40">
      <h1 className="text-xl md:text-xl text-green-500 mb-4">
      HOW DevOpsFarm CAN HELP
            </h1>
            <p className="text-4xl text-center text-gray-400 mb-6">
            We Help Streamline your Development so you can meet the Demands of your Users
            </p>
    <div
        className="flex flex-col md:flex-row bg-white dark:bg-gray-900 items-center py-4 px-4 md:px-10 lg:px-20 text-sm border-t-2 rounded-b shadow-sm border-green-500 hover:bg-green-100 dark:hover:bg-gray-800 transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 md:w-20 text-green-500 stroke-current" fill="none"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <div className="ml-3 text-center md:text-left mt-3 md:mt-0">
            <div className="text-2xl md:text-3xl text-black dark:text-gray-50">Overcoming Inefficient Software Deployment</div>
            <div className="text-lg md:text-xl text-gray-900 dark:text-gray-300 mt-1">
                We implement automation tools and CI/CD pipelines, enabling continuous integration and delivery of code, automating testing and deployment, and significantly reducing time-to-market. This frees up your team to focus on higher-value tasks and drive faster innovation.
            </div>
        </div>
    </div>

    <div
        className="flex flex-col md:flex-row bg-white dark:bg-gray-900 items-center py-4 px-4 md:px-10 lg:px-20 text-sm border-t-2 rounded-b shadow-sm border-green-500 hover:bg-green-100 dark:hover:bg-gray-800 transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 md:w-20 text-green-500 stroke-current" fill="none"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <div className="ml-3 text-center md:text-left mt-3 md:mt-0">
            <div className="text-2xl md:text-3xl text-black dark:text-gray-50">Inability to Meet User Demands</div>
            <div className="text-lg md:text-xl text-gray-900 dark:text-gray-300 mt-1">
                We help you adopt agile methodologies and DevOps practices that promote rapid iteration and frequent deployments. This allows you to respond quickly to changing customer demands, test new features efficiently, and deliver value to your users faster.
            </div>
        </div>
    </div>

    <div
        className="flex flex-col md:flex-row bg-white dark:bg-gray-900 items-center py-4 px-4 md:px-10 lg:px-20 text-sm border-t-2 rounded-b shadow-sm border-green-500 hover:bg-green-100 dark:hover:bg-gray-800 transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 md:w-20 text-green-500 stroke-current" fill="none"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <div className="ml-3 text-center md:text-left mt-3 md:mt-0">
            <div className="text-2xl md:text-3xl text-black dark:text-gray-50">Lack of Visibility and Control</div>
            <div className="text-lg md:text-xl text-gray-900 dark:text-gray-300 mt-1">
                We implement monitoring tools and dashboards to provide real-time insights into your software development process. This allows you to identify bottlenecks, track progress, ensure code quality, and optimize your DevOps practices for continuous improvement.
            </div>
        </div>
    </div>
</div>





    </main>
  );
};

export default HeroSection;