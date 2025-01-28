
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
    return (
        <>
        <footer className="bg-black border-solid border-t border-gray-400/30 ">
    <div className="container mx-auto p-0 md:p-8 xl:px-0">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                <div className="space-y-4">
                    <div>
                        <a href="/">
                            <div className="flex items-center space-x-2 text-2xl font-medium">
                                <span>
                                    <img src="/devopsfarm-logo.png" alt="AI Logo"
                                        width="64" height="64" className="w-16"/>
                                </span>
                                <span className="text-white">DevopsFarm</span>
                            </div>

                        </a>
                    </div>
                    <div className="max-w-md pr-16 text-md text-gray-200">Transform your business with expert DevOps consultancy and training. From automation to seamless deployments, we help you build, scale, and optimize your development and operations for a future-ready enterprise.
                    </div>
                    <div className="flex space-x-2">
                        <a href="" target="_blank" className="text-gray-200 hover:text-gray-200">
                            <span className="sr-only">Linkedin</span><svg fill="currentColor" viewBox="0 0 24 24"
                                className="h-6 w-6" aria-hidden="true">
                                <path fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="" target="_blank" className="text-gray-200 hover:text-gray-200">
                            <span className="sr-only">Twitter</span><svg fill="currentColor" viewBox="0 0 24 24"
                                className="h-6 w-6" aria-hidden="true">
                                <path
                                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 className="text-md font-semibold leading-6 text-white">Our Solutions</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li>
                                    <a href="/aiplatform"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">AI Platform
                                    </a>
                                </li>
                                <li>
                                    <a href="/aialgorithms"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">AI Algorithms
                                    </a>
                                </li>
                                <li>
                                    <a href="/industryapplications"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Industry
                                        Applications
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10 md:mt-0">
                            <h3 className="text-md font-semibold leading-6 text-white">Use Cases</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li>
                                    <a href="/predictiveanalysis"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Predictive
                                        Analysis
                                    </a>
                                </li>
                                <li>
                                    <a href="/customerexperience"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Customer
                                        Experience
                                    </a>
                                </li>
                                <li>
                                    <a href="/automation"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Automation
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 className="text-md font-semibold leading-6 text-white">Resources</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li>
                                    <a href="/pricing"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="/blog" className="text-md leading-6 text-gray-300 hover:text-gray-50">Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="/casestudies"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Case Studies
                                    </a>
                                </li>
                                <li>
                                    <a href="/terms" className="text-md leading-6 text-gray-300 hover:text-gray-50">Terms
                                        of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="/privacy"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10 md:mt-0">
                            <h3 className="text-md font-semibold leading-6 text-white">Company</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li>
                                    <a href="/aboutus"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="/careers"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="/contactus"
                                        className="text-md leading-6 text-gray-300 hover:text-gray-50">Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
                <div className="text-md text-center text-white">
                    Copyright © 2024 . Crafted with
                    <span className="text-gray-50">♥</span> by Devops enthusiasts at
                    <a rel="noopener" href="/"> DevopsFarm.
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>
            {/* <div className="w-full bg-center border-t-[1px] border-gray-500 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/assets/Website-Backgrounds-For-Desktop.jpg')" }}>
                <div className="w-full opacity-80 text-white  bg-transparent bg-logo-gradient">
                   
                    <div className="w-full">
                        
                        <div className="container flex flex-col mx-auto">
                            
                            <div className="flex flex-col items-center w-full my-20">
                            <div className="flex justify-center items-center py-4">
                            <Link href="/" className="flex items-center">
                                {/* <Image src="/devopsfarm.png" className="w-14 mr-2" alt="Logo" /> 
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r    from-blue-800 via-blue-600 to-white">
                                    DevOpsFarm
                                </h1>
                            </Link>

                    </div>
                                <span className="mb-8">
                                    <svg
                                        width="140"
                                        viewBox="0 0 419 95"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        
                                    </svg>
                                </span>
                                <div className="flex flex-col items-center gap-6 mb-8">
                                   
                        
                                    <div className="flex items-center gap-8">
                                        <a
                                            href="https://www.instagram.com/devopsfarm/"
                                            className="text-grey-700 hover:text-grey-900"
                                            target="_blank"
                                        >
                                           < IoLogoInstagram />
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            className="text-grey-700 hover:text-grey-900"
                                        >
                                          <FaLinkedinIn />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-4 text-center border-t-[1px] border-gray-500">
                            <p className=" text-gray-100">
                                &copy; 2023 DevOpsFarm. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}