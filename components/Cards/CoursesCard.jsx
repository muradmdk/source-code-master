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

export default function CoursesCard({ course }) {
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
          <span>{course.level}</span>
          <span>{course.duration}</span>
        </div>

        {/* Title */}
        <CardTitle className="text-lg font-semibold text-gray-900 mb-1">
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
