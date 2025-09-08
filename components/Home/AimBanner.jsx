"use client";
import React from 'react'

const AimBanner = () => {
    return (
        <div className="w-full bg-white text-[#212529] p-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-center px-10">

                {/* Left Column (4/12) */}
                <div className="w-full lg:w-4/12 flex justify-start mb-8 lg:mb-0">
                    <div>
                        {/* Small Text */}
                        <span className="block text-left text-[2.8125rem] font-extrabold leading-none">
                            THE
                        </span>

                        {/* Large Number */}
                        <div className="text-[8.75rem] text-left font-black leading-none">
                            100
                        </div>

                        {/* Year Plan */}
                        <div className="inline-block bg-[#a2c95c] px-8 py-1 text-[1.75rem] tracking-[0.3125rem] font-extrabold leading-none uppercase">
                            YEAR PLAN
                        </div>
                    </div>
                </div>

                {/* Right Column (8/12) */}
                <div className="w-full lg:w-8/12 lg:pl-2 text-left">
                    <h2 className="text-3xl font-extrabold leading-snug mb-6">
                        <span className="text-neutral-600">
                            Our aim is to build the network of all our students and connect them
                            into an{" "}
                        </span>
                        ecosystem of building knowledge, skills, and attributes{" "}
                        <span className="text-neutral-600">
                            required to solve the global problems for the next{" "}
                        </span>
                        century!
                    </h2>

                    <p className="leading-relaxed mb-6 text-gray-700">
                        Source Code introduces the platform for networking and building a sense
                        of community for all its students, serving as a community center with a
                        deeper purpose of preparing them to clarify their identity and purpose.
                    </p>

                    <a
                        href="https://sourcecode.academy/about-us"
                        className="inline-block text-black font-semibold px-6 py-1 border border-[#a2c95c] hover:bg-black hover:text-white transition"
                        aria-label="Learn more about Source Code"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AimBanner