"use client";
import React from "react";

export default function CoursesHeading({ title, highlight, children }) {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-md mb-2 p-4">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-gray-800">
        {highlight ? (
          <>
            <span className="text-[#a2c95c]">{highlight}</span> {title}
          </>
        ) : (
          title
        )}
      </h2>

      <div>{children}</div>
    </div>
  );
}
