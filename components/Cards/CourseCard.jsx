"use client";
import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function CourseCard({ course }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition">
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>

      <CardHeader className="p-4">
        {/* Level & Duration */}
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="text-[#a2c95c]"
            >
              <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
            </svg>
            {course.level}
          </span>

          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="text-[#a2c95c]"
            >
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
              <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
            </svg>
            {course.duration}
          </span>
        </div>

        {/* Title */}
        <CardTitle className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2 h-14">
          {course.title}
        </CardTitle>

        {/* Category */}
        <div className="flex items-center text-sm text-gray-700">
          <Image
            src={course.categoryIcon}
            alt={course.category}
            width={20}
            height={20}
            className="mr-2"
          />
          {course.category}
        </div>
      </CardHeader>

      <CardContent className="px-4 pt-0">
        <p className="text-sm text-gray-600 border-t pt-4">Starting From:</p>
        <p className="text-[#a2c95c] text-xl font-bold mb-2">{course.price}</p>
      </CardContent>

      <CardFooter className="px-4 pb-4">
        <a
          href={course.link}
          className="block w-full text-center bg-[#a2c95c] text-black py-2 text-lg font-medium hover:bg-black hover:text-white transition"
        >
          Reserve Your Spot
        </a>
      </CardFooter>
    </Card>
  );
}
