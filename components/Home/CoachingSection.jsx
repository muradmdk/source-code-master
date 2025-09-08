"use client";
import React from 'react'
import Image from "next/image"

const CoachingSection = () => {
    const coachingOptions = [
        {
            title: "Personal Coaching",
            desc: "Personalized one-on-one coaching to improve skills and perspective.",
            link: "https://sourcecode.academy/courses-detail/personal-counseling-coaching-online",
        },
        {
            title: "Business Coaching",
            desc: "Expert business coaching to drive growth and success.",
            link: "https://sourcecode.academy/courses-detail/business-coaching",
        },
        {
            title: "Personal Counseling & Coaching with Sadia Khan",
            desc: "Empathetic support and personalized strategies for emotional well-being and personal growth.",
            link: "https://sourcecode.academy/courses-detail/personal-counseling-coaching-with-sadia-khan-for-females-only",
        },
    ]
    return (
        <div className=" bg-[#f8f8f8]">
            <div className="container mx-auto pr-4 ml-0 grid lg:grid-cols-12 gap-8 items-center">
                {/* Left Image */}
                <div className="lg:col-span-4 h-full">
                    <div className="relative w-full h-full">
                        <Image
                            src="/Sahil-Adeem.webp"
                            alt="Sahil Adeem Image"
                            fill
                            className="object-fit object-left"
                            priority
                        />
                    </div>
                </div>


                {/* Right Content */}
                <div className="lg:col-span-8 pb-5 pl-10">
                    <h2 className="text-3xl font-extrabold mb-2">Elevate Your Potential with</h2>
                    <h2 className="text-5xl font-extrabold mb-4">
                        <span className="text-[#aac86b]">Expert Coaching</span>
                    </h2>

                    <div className="h-0.5 w-10 bg-black mb-6"></div>

                    <p className="text-md text-[#212529] opacity-80 mb-8">
                        Take your personal and professional development to the next level with expert
                        coaching from our team of domain experts. Our one-on-one coaching sessions are
                        tailored to your specific needs and goals, providing you with the support and
                        guidance you need to succeed.
                    </p>

                    {/* Coaching Cards */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {coachingOptions.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.link}
                                className="border p-6 bg-white hover:shadow-xl transition"
                            >
                                <h3 className="text-3xl text-[#a2c95c] font-extrabold text-left mb-3">{item.title}</h3>
                                <p className="text-md mb-4 h-[4.5rem]">{item.desc}</p>
                                <span className="flex items-center text-[#101010] font-bold">
                                    Book Now
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18.961 18.961"
                                        className="ml-2"
                                    >
                                        <path
                                            d="M1.185,9.481a8.3,8.3,0,1,0,8.3-8.3,8.3,8.3,0,0,0-8.3,8.3Zm17.776,0A9.481,9.481,0,1,1,9.481,0a9.481,9.481,0,0,1,9.481,9.481Zm-7-3.382a.593.593,0,0,1,.838.839L7.948,11.791h3.28a.593.593,0,0,1,0,1.185H6.518a.593.593,0,0,1-.593-.593V7.673a.593.593,0,0,1,1.185,0v3.28Z"
                                            transform="translate(18.961 18.961) rotate(180)"
                                            fill="#a2c95c"
                                            fillRule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoachingSection