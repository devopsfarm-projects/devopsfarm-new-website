import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevOps & Cloud Engineering Course Jodhpur | DevOpsFarm",
  description: "Best DevOps training in Jodhpur. Learn Docker, Kubernetes, AWS, Azure with live projects. Enroll now at DevOpsFarm!",
  keywords: "DevOps course Jodhpur, Cloud Engineering, Docker Kubernetes training Jodhpur, AWS Azure course",
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}