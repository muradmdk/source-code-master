"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

const Courses = () => {
    return (
        <>
            <div className='bg-[#f8f8f8] py-[40px] sm:py-[70px]'>

                {/* Container */}
                <div className='w-full relative px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1230px]'>


                    {/* Top-label */}
                    <div className='w-[100%] max-w-[100%] flex-[100%] min-h-[1px]'>
                        <div className='text-center'>
                            <h2 className='text-[30px] xl:text-[35px] text-[#101010] font-bold leading-[1] z-[2] relative'>
                                STEM Courses
                            </h2>
                            <p className='text-[16px] sm:text-[18px] lg:text-[20px] lg:w-[80%] lg:mx-auto pt-[40px] pb-[20px] md:pb-[30px]'>
                                All of these STEM courses, accredited and aligned with modern standards of education, will be starting this summer, allowing students to excel in commercial certifications within just 3 to 4 years.
                            </p>
                        </div>
                    </div>


                    {/* Feature Cards */}
                    {/* Row */}
                    <div className='flex items-center flex-wrap mx-[-15]'>

                        <Swiper
                            direction={"horizontal"} // can be "vertical" too
                            slidesPerView={1}      // show 4 slides at once
                            spaceBetween={0}
                            slidesPerGroup={1}     // move only 1 slide per scroll
                            mousewheel={true} // enable mousewheel
                            scrollbar={{
                                hide: false, // show scrollbar
                            }}
                            modules={[Mousewheel, Scrollbar]}

                            breakpoints={{
                                576: {
                                    slidesPerView: 2, // tablet
                                },
                                768: {
                                    slidesPerView: 2, // desktop
                                },

                                992: {
                                    slidesPerView: 3, // desktop
                                },
                                
                                1200: {
                                    slidesPerView: 4, // desktop
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className='w-[100%] max-w-[100%] flex-[100%] min-h-[1px] px-[15px] mb-9'>

                                    <div className='mb-2.5  bg-white featured-shadow featured-hover'>

                                        <div>
                                            <Image
                                                src="/images/courses/courses_1.webp"
                                                width={280}
                                                height={187}
                                                alt="About-card-pic"
                                                className='w-full h-full object-cover'
                                            />
                                        </div>

                                        <div className='h-1 w-full bg-[#a2c95c]'></div>

                                        <div className='p-5 text-[14px]'>

                                            <div className='flex items-center justify-between mb-2.5'>
                                                <span className='flex items-center font-normal text-[#5b5b5b]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bar-chart-line mr-[5px] text-[#a2c95c]" viewBox="0 0 16 16">
                                                        <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"></path>
                                                    </svg>
                                                    Beginner
                                                </span>
                                                <span className='flex items-center font-normal text-[#5b5b5b]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar2-week mr-[5px] text-[#a2c95c]" viewBox="0 0 16 16">
                                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                                                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"></path>
                                                    </svg>
                                                    18 Months
                                                </span>
                                            </div>

                                            <h3 className='text-[18px] text-[#101010] font-semibold mb-[30px]'>
                                                Mathematics
                                            </h3>

                                            <Link href="" className='flex items-center text-[16px] text-[#101010] font-semibold underline mb-2 pb-2 border-b-[1px] border-[#efefef]'>
                                                <Image
                                                    src="/images/courses/6.png"
                                                    width={20}
                                                    height={20}
                                                    alt="About-card-pic"
                                                    className='mr-2'
                                                />
                                                STEM Courses
                                            </Link>

                                            <div className='mt-3 mb-3 flex flex-col'>
                                                <span className='font-normal'>Starting From:</span>
                                                <span className='text-[#a2c95c] text-[18px] font-bold '>PKR. 8,900.00/Month</span>
                                            </div>

                                            <Link href="/arabic-for-adults" className='block text-center w-full py-2 px-[25px] leading-[1] text-[#101010] bg-[#a2c95c] text-[15px] border-[2px] border-[#a2c95c] font-bold  duration-400 ease-linear hover:bg-black hover:text-white hover:border-[#000]'>
                                                Reserve Your Spot
                                            </Link>

                                        </div>

                                    </div>

                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                                <div className='w-[100%] max-w-[100%] flex-[100%] min-h-[1px] px-[15px]'>

                                    <div className='mb-2.5  bg-white featured-shadow featured-hover'>

                                        <div>
                                            <Image
                                                src="/images/courses/courses_2.webp"
                                                width={280}
                                                height={187}
                                                alt="About-card-pic"
                                                className='w-full h-full object-cover'

                                            />
                                        </div>

                                        <div className='h-1 w-full bg-[#a2c95c]'></div>

                                        <div className='p-5 text-[14px]'>

                                            <div className='flex items-center justify-between mb-2.5'>
                                                <span className='flex items-center font-normal text-[#5b5b5b]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bar-chart-line mr-[5px] text-[#a2c95c]" viewBox="0 0 16 16">
                                                        <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"></path>
                                                    </svg>
                                                    Beginner
                                                </span>
                                                <span className='flex items-center font-normal text-[#5b5b5b]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar2-week mr-[5px] text-[#a2c95c]" viewBox="0 0 16 16">
                                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                                                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"></path>
                                                    </svg>
                                                    18 Months
                                                </span>
                                            </div>

                                            <h3 className='text-[18px] text-[#101010] font-semibold mb-[30px]'>
                                                Biology
                                            </h3>

                                            <Link href="" className='flex items-center text-[16px] text-[#101010] font-semibold underline mb-2 pb-2 border-b-[1px] border-[#efefef]'>
                                                <Image
                                                    src="/images/courses/6.png"
                                                    width={20}
                                                    height={20}
                                                    alt="About-card-pic"
                                                    className='mr-2'
                                                />
                                                STEM Courses
                                            </Link>

                                            <div className='mt-3 mb-3 flex flex-col'>
                                                <span className='font-normal'>Starting From:</span>
                                                <span className='text-[#a2c95c] text-[18px] font-bold '>PKR. 8,900.00/Month</span>
                                            </div>

                                            <Link href="/arabic-for-adults" className='block text-center w-full py-2 px-[25px] leading-[1] text-[#101010] bg-[#a2c95c] text-[15px] border-[2px] border-[#a2c95c] font-bold  duration-400 ease-linear hover:bg-black hover:text-white hover:border-[#000]'>
                                                Reserve Your Spot
                                            </Link>

                                        </div>

                                    </div>

                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='w-[100%] max-w-[100%] flex-[100%] min-h-[1px] px-[15px]'>

                                    <div className='mb-2.5  bg-white featured-shadow featured-hover'>

                                        <div>
                                            <Image
                                                src="/images/courses/courses_3.webp"
                                                width={280}
                                                height={187}
                                                alt="About-card-pic"
                                                className='w-full h-full object-cover'

                                            />
                                        </div>

                                        <div className='h-1 w-full bg-[#a2c95c]'></div>

                                        <div className='p-5 text-[14px]'>

                                            <div className='flex items-center justify-between mb-2.5'>
                                                <span className='flex items-center font-normal text-[#5b5b5b]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bar-chart-line mr-[5px] text-[#a2c95c]" viewBox="0 0 16 16">
                                                        <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"></path>
                                                    </svg>
                                                    Beginner
                                                </span>
                                                <span className='flex items-center font-normal text-[#5b5b5b]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar2-week mr-[5px] text-[#a2c95c]" viewBox="0 0 16 16">
                                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                                                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"></path>
                                                    </svg>
                                                    18 Months
                                                </span>
                                            </div>

                                            <h3 className='text-[18px] text-[#101010] font-semibold mb-[30px]'>
                                                Chemistry
                                            </h3>

                                            <Link href="" className='flex items-center text-[16px] text-[#101010] font-semibold underline mb-2 pb-2 border-b-[1px] border-[#efefef]'>
                                                <Image
                                                    src="/images/courses/6.png"
                                                    width={20}
                                                    height={20}
                                                    alt="About-card-pic"
                                                    className='mr-2'
                                                />
                                                STEM Courses
                                            </Link>

                                            <div className='mt-3 mb-3 flex flex-col'>
                                                <span className='font-normal'>Starting From:</span>
                                                <span className='text-[#a2c95c] text-[18px] font-bold '>PKR. 8,900.00/Month</span>
                                            </div>

                                            <Link href="/arabic-for-adults" className='block text-center w-full py-2 px-[25px] leading-[1] text-[#101010] bg-[#a2c95c] text-[15px] border-[2px] border-[#a2c95c] font-bold  duration-400 ease-linear hover:bg-black hover:text-white hover:border-[#000]'>
                                                Reserve Your Spot
                                            </Link>

                                        </div>

                                    </div>

                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='w-[100%] max-w-[100%] flex-[100%] min-h-[1px] px-[15px]'>

                                    <div className='mb-2.5  bg-white featured-shadow featured-hover'>

                                        <div>
                                            <Image
                                                src="/images/courses/courses_4.webp"
                                                width={280}
                                                height={187}
                                                alt="About-card-pic"
                                                className='w-full h-full object-cover'

                                            />
                                        </div>

                                        <div className='h-1 w-full bg-[#a2c95c]'></div>

                                        <div className='p-5 text-[14px]'>

                                            <div className='flex items-center justify-between mb-2.5'>
                                                <span className='flex items-center font-normal text-[#5b5b5b]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bar-chart-line mr-[5px] text-[#a2c95c]" viewBox="0 0 16 16">
                                                        <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"></path>
                                                    </svg>
                                                    Beginner
                                                </span>
                                                <span className='flex items-center font-normal text-[#5b5b5b]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar2-week mr-[5px] text-[#a2c95c]" viewBox="0 0 16 16">
                                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                                                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"></path>
                                                    </svg>
                                                    18 Months
                                                </span>
                                            </div>

                                            <h3 className='text-[18px] text-[#101010] font-semibold mb-[30px]'>
                                                Physics
                                            </h3>

                                            <Link href="" className='flex items-center text-[16px] text-[#101010] font-semibold underline mb-2 pb-2 border-b-[1px] border-[#efefef]'>
                                                <Image
                                                    src="/images/courses/6.png"
                                                    width={20}
                                                    height={20}
                                                    alt="About-card-pic"
                                                    className='mr-2'
                                                />
                                                STEM Courses
                                            </Link>

                                            <div className='mt-3 mb-3 flex flex-col'>
                                                <span className='font-normal'>Starting From:</span>
                                                <span className='text-[#a2c95c] text-[18px] font-bold '>PKR. 8,900.00/Month</span>
                                            </div>

                                            <Link href="/arabic-for-adults" className='block text-center w-full py-2 px-[25px] leading-[1] text-[#101010] bg-[#a2c95c] text-[15px] border-[2px] border-[#a2c95c] font-bold  duration-400 ease-linear hover:bg-black hover:text-white hover:border-[#000]'>
                                                Reserve Your Spot
                                            </Link>

                                        </div>

                                    </div>

                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='w-[100%] max-w-[100%] flex-[100%] min-h-[1px] px-[15px]'>

                                    <div className='mb-2.5  bg-white featured-shadow featured-hover'>

                                        <div>
                                            <Image
                                                src="/images/courses/courses_5.webp"
                                                width={280}
                                                height={187}
                                                alt="About-card-pic"
                                                className='w-full h-full object-cover'

                                            />
                                        </div>

                                        <div className='h-1 w-full bg-[#a2c95c]'></div>

                                        <div className='p-5 text-[14px]'>

                                            <div className='flex items-center justify-between mb-2.5'>
                                                <span className='flex items-center font-normal text-[#5b5b5b]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bar-chart-line mr-[5px] text-[#a2c95c]" viewBox="0 0 16 16">
                                                        <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"></path>
                                                    </svg>
                                                    Beginner
                                                </span>
                                                <span className='flex items-center font-normal text-[#5b5b5b]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar2-week mr-[5px] text-[#a2c95c]" viewBox="0 0 16 16">
                                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                                                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"></path>
                                                    </svg>
                                                    18 Months
                                                </span>
                                            </div>

                                            <h3 className='text-[18px] text-[#101010] font-semibold'>
                                                Teen Mentorship Program (14-19 Yrs)
                                            </h3>

                                            <Link href="" className='flex items-center text-[16px] text-[#101010] font-semibold underline mb-2 pb-2 border-b-[1px] border-[#efefef]'>
                                                <Image
                                                    src="/images/courses/6.png"
                                                    width={20}
                                                    height={20}
                                                    alt="About-card-pic"
                                                    className='mr-2'
                                                />
                                                STEM Courses
                                            </Link>

                                            <div className='mt-3 mb-3 flex flex-col'>
                                                <span className='font-normal'>Starting From:</span>
                                                <span className='text-[#a2c95c] text-[18px] font-bold '>PKR. 8,900.00/Month</span>
                                            </div>

                                            <Link href="/arabic-for-adults" className='block text-center w-full py-2 px-[25px] leading-[1] text-[#101010] bg-[#a2c95c] text-[15px] border-[2px] border-[#a2c95c] font-bold  duration-400 ease-linear hover:bg-black hover:text-white hover:border-[#000]'>
                                                Reserve Your Spot
                                            </Link>

                                        </div>

                                    </div>

                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                                <div className='w-[100%] max-w-[100%] flex-[100%] min-h-[1px] px-[15px]'>

                                    <div className='mb-2.5  bg-white featured-shadow featured-hover'>

                                        <div>
                                            <Image
                                                src="/images/courses/courses_1.webp"
                                                width={280}
                                                height={187}
                                                alt="About-card-pic"
                                                className='w-full h-full object-cover'

                                            />
                                        </div>

                                        <div className='h-1 w-full bg-[#a2c95c]'></div>

                                        <div className='p-5 text-[14px]'>

                                            <div className='flex items-center justify-between mb-2.5'>
                                                <span className='flex items-center font-normal text-[#5b5b5b]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bar-chart-line mr-[5px] text-[#a2c95c]" viewBox="0 0 16 16">
                                                        <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"></path>
                                                    </svg>
                                                    Beginner
                                                </span>
                                                <span className='flex items-center font-normal text-[#5b5b5b]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar2-week mr-[5px] text-[#a2c95c]" viewBox="0 0 16 16">
                                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                                                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"></path>
                                                    </svg>
                                                    18 Months
                                                </span>
                                            </div>

                                            <h3 className='text-[18px] text-[#101010] font-semibold'>
                                                Teen Mentorship Program (14-19 Yrs)
                                            </h3>

                                            <Link href="" className='flex items-center text-[16px] text-[#101010] font-semibold underline mb-2 pb-2 border-b-[1px] border-[#efefef]'>
                                                <Image
                                                    src="/images/courses/6.png"
                                                    width={20}
                                                    height={20}
                                                    alt="About-card-pic"
                                                    className='mr-2'
                                                />
                                                STEM Courses
                                            </Link>

                                            <div className='mt-3 mb-3 flex flex-col'>
                                                <span className='font-normal'>Starting From:</span>
                                                <span className='text-[#a2c95c] text-[18px] font-bold '>PKR. 8,900.00/Month</span>
                                            </div>

                                            <Link href="/arabic-for-adults" className='block text-center w-full py-2 px-[25px] leading-[1] text-[#101010] bg-[#a2c95c] text-[15px] border-[2px] border-[#a2c95c] font-bold  duration-400 ease-linear hover:bg-black hover:text-white hover:border-[#000]'>
                                                Reserve Your Spot
                                            </Link>

                                        </div>

                                    </div>

                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>


                </div>


            </div>
        </>
    )
}

export default Courses
