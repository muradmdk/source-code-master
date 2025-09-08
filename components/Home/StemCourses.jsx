"use client";
import React from 'react'
import CourseCard from '@/components/Cards/CourseCard';

const courses = [
  {
    id: 1,
    title: "Biology",
    level: "Beginner",
    duration: "48 Months",
    category: "STEM Courses",
    categoryIcon:"/category-icon3.webp",
    price: "PKR. 8,900.00/Month",
    image:"/arabic-for-adults.webp",
    link: "https://sourcecode.academy/courses-detail/arabic-for-adults",
  },
  {
    id: 2,
    title: "Chemistry",
    level: "Beginner",
    duration: "48 Months",
    category: "STEM Courses",
    categoryIcon:"/category-icon3.webp",
    price: "PKR. 8,900.00/Month",
    image:"/arabic-for-kids.webp",
    link: "https://sourcecode.academy/courses-detail/arabic-for-kids-age-4-to-12",
  },
  {
    id: 3,
    title: "Physics",
    level: "Beginner",
    duration: "48 Months",
    category: "STEM Courses",
    categoryIcon:"/category-icon3.webp",
    price: "PKR. 8,900.00/Month",
    image:"/critical-thinking.webp",
    link: "https://sourcecode.academy/courses-detail/critical-thinking-learning-how-to-think",
  },
  {
    id: 4,
    title: "Mathematics",
    level: "Beginner",
    duration: "48 Months",
    category: "STEM Courses",
    categoryIcon:"/category-icon3.webp",
    price: "PKR. 8,900.00/Month",
    image:"/emotional-intelligence.webp",
    link: "https://sourcecode.academy/courses-detail/emotional-intelligence",
  },
  {
    id: 5,
    title: "Teen Mentorship Program (14-19 Yrs)",
    level: "Beginner",
    duration: "48 Months",
    category: "STEM Courses",
    categoryIcon:"/category-icon3.webp",
    price: "PKR. 15,000.00/Month",
    image:"/emotional-intelligence.webp",
    link: "https://sourcecode.academy/courses-detail/emotional-intelligence",
  },
];

export default function StemCourses() {
    return (
     <div className=" py-12 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-black">STEM Courses</h2>
          <p className="text-[20px] mt-10 text-center w-4/5 mx-auto mb-8 font-medium">
            All of these STEM courses, accredited and aligned with modern standards of education, 
            will be starting this summer, allowing students to excel in commercial certifications 
            within just 3 to 4 years.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))} 
        </div>
      </div>
    </div>
    )
}
