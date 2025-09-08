"use client";
import React from 'react'
import CourseCard from '@/components/Cards/CourseCard';

const courses = [
  {
    id: 1,
    title: "Arabic for Adults",
    level: "Beginner",
    duration: "18 Months",
    category: "Arabic Language",
    categoryIcon:"/category-icon.png",
    price: "PKR. 6,900.00/Month",
    image:"/arabic-for-adults.webp",
    link: "https://sourcecode.academy/courses-detail/arabic-for-adults",
  },
  {
    id: 2,
    title: "Arabic For Kids (age 4 to 12)",
    level: "Beginner",
    duration: "24 Months",
    category: "Arabic Language",
    categoryIcon:"/category-icon.png",
    price: "PKR. 6,900.00/Month",
    image:"/arabic-for-kids.webp",
    link: "https://sourcecode.academy/courses-detail/arabic-for-kids-age-4-to-12",
  },
  {
    id: 3,
    title: "Critical thinking – Learning how to think",
    level: "Beginner",
    duration: "12 Months",
    category: "Skills & Development",
    categoryIcon:"/category-icon2.png",
    price: "PKR. 8,900.00/Month",
    image:"/critical-thinking.webp",
    link: "https://sourcecode.academy/courses-detail/critical-thinking-learning-how-to-think",
  },
  {
    id: 4,
    title: "Emotional Intelligence",
    level: "Beginner",
    duration: "12 Months",
    category: "Skills & Development",
    categoryIcon:"/category-icon2.png",
    price: "PKR. 8,900.00/Month",
    image:"/emotional-intelligence.webp",
    link: "https://sourcecode.academy/courses-detail/emotional-intelligence",
  },
];

export default function FeaturedCourses() {
    return (
     <div className=" py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="text-4xl font-semibold text-gray-900">Featured Courses</h2>
          <a
            href="https://sourcecode.academy/courses"
            className="px-6 py-1 bg-white text-black text-md font-bold  border border-[#a2c95c] hover:bg-black hover:text-[#a2c95c] hover:border-black transition"
          >
            View All Courses
          </a>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
    )
}
