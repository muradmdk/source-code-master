import React from 'react'
import Image from "next/image"

const JoinUs = () => {
    return (
        <div className="mt-0 bg-[#a2c95c]">
            <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Left side image */}
                <div className="md:col-span-5 relative z-10 flex justify-end">
                    <Image
                        src="/ins.webp"
                        alt="Instructor"
                        width={500}
                        height={440}
                        className="h-[27.5rem] mr-5 -mt-10 object-contain"
                        priority
                    />
                </div>

                {/* Right side content */}
                <div className="md:col-span-7 p-10 bg-white/10 relative w-[37.5rem]">
                    {/* Background Teach text */}
                    <h3 className="absolute top-6 -left-44 w-full text-center text-[9rem] font-extrabold uppercase opacity-20 tracking-[-0.3rem] text-white">
                        Teach
                    </h3>

                    <h2 className="relative text-5xl font-bold text-[#101010] mb-6 mt-10 inline-block">
                        Teach with Us
                        <span className="absolute bottom-[-1rem] left-0 w-7 h-[2px] bg-[#101010]"></span>
                    </h2>

                    <p className="text-[1.125rem] font-normal text-[#101010]">
                        Join the ranks of our esteemed instructors at Source Code Academia
                        and become a driving force in the global effort to enhance Muslim
                        competency. As a member of our community, you will have the
                        opportunity to make a real difference in the lives of students
                        around the world and be a part of a movement that is working towards
                        positive change. Together, we can create a brighter future for all.
                    </p>

                    <a
                        href="https://sourcecode.academy/become-instructor"
                        className="inline-block mt-6 border border-[#101010] bg-[#101010] text-white font-medium px-6 py-1 hover:bg-transparent hover:text-[#101010] transition"
                    >
                        Join Us!
                    </a>
                </div>
            </div>
        </div>
    )
}

export default JoinUs