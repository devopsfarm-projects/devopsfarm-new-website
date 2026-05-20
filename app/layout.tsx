import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "../components/footer";
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevOpsFarm - DevOps & Cloud Training Jodhpur",
  description: "Best DevOps training institute in Jodhpur. Learn Docker, Kubernetes, AWS, Azure with live projects. Enroll now!",
  keywords: "DevOps training Jodhpur, Cloud course, Docker Kubernetes, AWS Azure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Navbar/>
        {children}
        <Footer/>
        <GoogleAnalytics gaId="G-HGT1RQWREB" />
      </body>
    </html>
  );
}