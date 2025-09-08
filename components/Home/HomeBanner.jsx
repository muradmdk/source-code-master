"use client";
import React from 'react'

const HomeBanner = () => {
    return (
        <div
            className="relative w-full h-screen bg-black text-white bg-no-repeat bg-right-top"
            style={{
                backgroundImage: "url('/main-bg.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top right",
                backgroundSize: "auto 100%",
            }}
        >
            {/* Content */}
            <div className="absolute bottom-[20%] left-11 translate-y-1/5 z-10 text-left">
                <h1 className="font-extrabold leading-snug space-y-2">
                    <span className="block text-3xl lg:text-4xl">
                        Source Code <span className="text-[#a2c95c]">Academia</span>
                    </span>

                    <span className="block text-3xl md:text-4xl text-[#7f7f7f]">
                        is a global mission to build a
                    </span>

                    <span className="block text-3xl md:text-4xl">
                        Muslim thought &amp; identity…
                    </span>

                    <span className="block font-medium text-xl md:text-2xl">
                        Anchoring the purpose of setting the <br />
                        students on the path of a
                    </span>

                    <span className="block text-6xl md:text-7xl lg:text-7xl text-[#a2c95c]">
                        GLOBAL CHANGE.
                    </span>
                </h1>
            </div>

            {/* Scroll down indicator */}
            <div className="absolute bottom-10 right-10 h-[4.375rem] overflow-hidden">
                <div className="w-[1px] h-full a bg-gradient-to-b from-[#aac86b] to-transparent bg-[length:100%_200%]"></div>
            </div>
        </div>
    );
}

export default HomeBanner