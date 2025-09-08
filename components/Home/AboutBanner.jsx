"use client";
import React from 'react'

const AboutBanner = () => {
    return (
        <div>
            <div className="about-sec bg-[#f8f8f8] p-16">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Heading */}
                    <div className="text-left mb-10">
                        <h2 className="text-[2.75rem] font-bold mb-6 mt-6 leading-tight">
                            Nurture the <span className="text-[#a2c95c]">Next Generation</span> of Excellence
                        </h2>
                        <h3 className="text-[1.75rem] leading-none font-medium text-gray-700 mb-6">
                            Identifying and developing the right skills in the current generation is crucial for
                            meeting the needs of the next generation and achieving excellence over the long-term.
                        </h3>
                        <p className="text-gray-800 text-[1.125rem] font-normal mx-auto">
                            In order to meet the needs of the next generation and achieve excellence over the next
                            hundred years, it is essential that we identify and cultivate the right skills in the
                            current youth and adults. We have divided these skills into three categories:
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                id: "01",
                                title: "The Thought",
                                link: "https://sourcecode.academy/get-category/the-thought",
                                img: "https://admin.sourcecode.academy/storage/category/KO0JdeHJ3lvCE9KXv3K2ucwziVaZpXOc6i1Kppsw.png",
                            },
                            {
                                id: "02",
                                title: "The Eloquence",
                                link: "https://sourcecode.academy/get-category/the-eloquence",
                                img: "https://admin.sourcecode.academy/storage/category/O0WUEYMo3z8QetLQAcgWuK7woyOYnUr4rRJ4yHc1.png",
                            },
                            {
                                id: "03",
                                title: "The Expertise",
                                link: "https://sourcecode.academy/get-category/the-expertise",
                                img: "https://admin.sourcecode.academy/storage/category/G9PKMftKL6te6RSWKmczuyus4rpkccCFaelN7lvq.png",
                            },
                        ].map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                className="relative block border border-gray-300 bg-white p-6  hover:shadow-lg shadow-gray-400 transition"
                            >
                                <span className="text-[#3D3D3D] text-5xl font-extrabold">{item.id}</span>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="absolute top-4 right-6 h-14 w-auto"
                                />
                                <h3 className="text-3xl font-semibold text-[#a2c95c] mt-12 mb-4">{item.title}</h3>
                                <span className="flex items-center text-gray-800 font-bold">
                                    View Detail
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-2 h-5 w-5 text-[#a2c95c]"
                                        viewBox="0 0 18.961 18.961"
                                    >
                                        <path
                                            d="M1.185,9.481a8.3,8.3,0,1,0,8.3-8.3,8.3,8.3,0,0,0-8.3,8.3Zm17.776,0A9.481,9.481,0,1,1,9.481,0a9.481,9.481,0,0,1,9.481,9.481Zm-7-3.382a.593.593,0,0,1,.838.839L7.948,11.791h3.28a.593.593,0,0,1,0,1.185H6.518a.593.593,0,0,1-.593-.593V7.673a.593.593,0,0,1,1.185,0v3.28Z"
                                            transform="translate(18.961 18.961) rotate(180)"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* Footer text */}
                    <div className="mt-10">
                        <p className="text-gray-800 text-[1.125rem] font-normal mx-auto">
                            Some skills may take multiple generations to fully develop, so it is important that we
                            act quickly to identify the skills that are most necessary and begin working to enhance
                            them. Without this focus on skill development, we may not be able to reach the milestones
                            that are necessary for the future.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBanner