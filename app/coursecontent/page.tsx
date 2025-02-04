import { Suspense } from "react";
import LearningSection from "./LearningSection"; // Adjust this path as needed

export const dynamic = "force-dynamic"; // Ensures the page is dynamic

export default function CourseContentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LearningSection />
    </Suspense>
  );
}
