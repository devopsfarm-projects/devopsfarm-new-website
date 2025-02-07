import Link from "next/link";
import Image from "next/image";
import { IconBrandLinkedin, IconBrandX, IconBrandInstagram, IconBrandYoutube    } from '@tabler/icons-react';
export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-400/30">
      <div className="container mx-auto px-6 md:px-8 xl:px-0 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid xl:grid-cols-3 gap-8">
            {/* Brand & Socials */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-white">
                <Image src="/devopsfarm-logo.png" alt="DevOpsFarm Logo" width={64} height={64} className="w-16" />
                <span>DevOpsFarm</span>
              </Link>
              <p className="text-gray-400 max-w-md text-sm">
                DEVOPS FARM, BHASKAR CIRCLE, RATANADA, JODHPUR (RAJ.)<br/>
                query@devopsfarm.in<br/>
                +918769511173,
                +919971566583,
              </p>
              <div className="flex space-x-3">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <IconBrandLinkedin className="h-6 w-6 text-gray-300 hover:text-gray-50" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <IconBrandX className="h-6 w-6 text-gray-300 hover:text-gray-50" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <IconBrandInstagram className="h-6 w-6 text-gray-300 hover:text-gray-50" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <IconBrandYoutube className="h-6 w-6 text-gray-300 hover:text-gray-50" />
                </a>
              </div>
            </div>

            {/* Links Sections */}
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              {/* Solutions & Use Cases */}
              <div className="grid md:grid-cols-2 gap-8">
                <FooterSection title="Our Solutions">
                  <FooterLink href="#">AI Platform</FooterLink>
                  <FooterLink href="#">AI Algorithms</FooterLink>
                  <FooterLink href="#">Industry Applications</FooterLink>
                </FooterSection>
                <FooterSection title="Services">
                  <FooterLink href="#">Trainings</FooterLink>
                  <FooterLink href="#">Consultancy</FooterLink>
                  <FooterLink href="#">Internship</FooterLink>
                  <FooterLink href="#">Master Class</FooterLink>
                </FooterSection>
              </div>

              {/* Resources & Company */}
              <div className="grid md:grid-cols-2 gap-8">
                <FooterSection title="Courses">
                  <FooterLink href="#">System Administrator</FooterLink>
                  <FooterLink href="#">Kubernetes Administrator</FooterLink>
                  <FooterLink href="#">Site Reliability Engineer</FooterLink>
                  <FooterLink href="#">Kubernetes Developer</FooterLink>
                  <FooterLink href="#">Platform Engineer</FooterLink>
                  <FooterLink href="#">DevOps Engineer</FooterLink>
                  <FooterLink href="#">Cloud Engineer</FooterLink>
                </FooterSection>
                {/* <FooterSection title="Company">
                  <FooterLink href="#">DEVOPS FARM, BHASKAR CIRCLE, RATANADA, JODHPUR (RAJ.)</FooterLink>
                  <FooterLink href="#">query@devopsfarm.in</FooterLink>
                  <FooterLink href="#">+918769511173</FooterLink>
                  <FooterLink href="#">+919971566583</FooterLink>
                </FooterSection> */}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 border-t border-gray-400/30 pt-6 text-center text-white">
            <p>
              © 2025 DevOpsFarm. Crafted with{" "}
              <span className="text-2xl text-red-900 animate-pulse">♥</span> by DevOps enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Reusable Components
const FooterSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div>
        <h3 className="text-md font-semibold text-white">{title}</h3>
        <ul className="mt-4 space-y-3">{children}</ul>
    </div>
);

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <li>
        <Link href={href} className="text-gray-300 hover:text-gray-50 text-md leading-6">
            {children}
        </Link>
    </li>
);
