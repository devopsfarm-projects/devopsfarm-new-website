import { MetadataRoute } from "next";
import { courses } from "./courses/[slugs]/CourseDetail";
export default function sitemap(): MetadataRoute.Sitemap {
  const courseUrls = courses.map((course) => ({
    url: `https://training.devopsfarm.in/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: "https://training.devopsfarm.in",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: "https://training.devopsfarm.in/courses",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...courseUrls,
  ];
}