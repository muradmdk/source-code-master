'use client'
import { useEffect, useState } from "react";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TopBar from './TopBar'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {

    const [time, setTime] = useState(null);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formatted = now.toLocaleTimeString("en-GB", {
                timeZone: "Asia/Karachi", // ✅ Karachi timezone
                hour12: false,
            });
            setTime(formatted);
        };

        updateTime(); // run once immediately
        const timer = setInterval(updateTime, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <header>

                {/* Header-Top */}
                <div className="fixed w-full z-[100] bg-[#101010] text-white shadow-all-3 px-[15px] lg:px-0">
                    {/* container */}
                    <div className='w-full relative px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1230px]'>

                        <div className="lg:border-b border-[#555555] lg:py-[5px]">
                            {/* Row */}
                            <div className='flex flex-wrap items-center justify-between mx-[-15px]'>

                                {/* left-col */}
                                <div>

                                    <div>
                                        <Link href="/" className="inline-block my-2 lg:hidden">
                                            <Image
                                                src="/images/logo-1.svg"
                                                width={31.98}
                                                height={32}
                                                alt='logo-pic'
                                                className="md:w-[40px] md:h-[40px]"
                                            />
                                        </Link>

                                        <div className="hidden lg:inline-flex items-center">
                                            <div className='flex items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone mr-2.5 text-[#a2c95c]" viewBox="0 0 16 16">
                                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                                                </svg>
                                                <Link href='' className='text-[#dddddd] text-[15px] pr-[15px]'>
                                                    +92 317 1119981
                                                </Link>
                                            </div>

                                            <div className='flex items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope mr-2.5 text-[#a2c95c]" viewBox="0 0 16 16">
                                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                                                </svg>
                                                <Link href="" className='text-[#dddddd] text-[15px] pr-[15px]'>
                                                    info@sourcecode.com.pk
                                                </Link>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope mr-2.5 text-[#a2c95c]" viewBox="0 0 16 16">
                                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                                                </svg>
                                                <Link href="" className='text-[#dddddd] text-[15px]'>
                                                    info@sourcecodeacademy.co.uk
                                                </Link>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                {/* Right col */}
                                <div>

                                    <div className="flex items-center">

                                        <div className='text-[13px] pl-3 border-r border-[#dddddd] lg:border-r-0 xl:flex items-center xl:pr-[15px] '>
                                            Time Zone: <span className='mr-2.5'>Asia/Karachi</span>
                                            <div className='flex items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock text-[#a2c95c] mr-1.5" viewBox="0 0 16 16">
                                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                                </svg>
                                                <span>      {time ?? "Loading..."} </span>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <Link href="" className='flex items-center text-[15px] text-white lg:pl-3 lg:border-l border-[#dddddd]'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person mr-2.5 text-[#a2c95c] w-[24px] h-[24px] ml-2 lg:w-4 lg:h-4" viewBox="0 0 16 16">
                                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                                                </svg>
                                                <span className="hidden lg:block">Login/Register</span>
                                            </Link>
                                        </div>

                                        {/* Nav-Toggle */}

                                        <Sheet>

                                            <SheetTrigger>
                                                <div className="nav-toggle lg:hidden">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-[30px] h-[30px]">
                                                        <path d="M64 160C64 142.3 78.3 128 96 128L480 128C497.7 128 512 142.3 512 160C512 177.7 497.7 192 480 192L96 192C78.3 192 64 177.7 64 160zM128 320C128 302.3 142.3 288 160 288L544 288C561.7 288 576 302.3 576 320C576 337.7 561.7 352 544 352L160 352C142.3 352 128 337.7 128 320zM512 480C512 497.7 497.7 512 480 512L96 512C78.3 512 64 497.7 64 480C64 462.3 78.3 448 96 448L480 448C497.7 448 512 462.3 512 480z" />
                                                    </svg>
                                                </div>
                                            </SheetTrigger>

                                            <SheetContent className="z-[200] bg-[#101010]">
                                                <SheetHeader>
                                                    <SheetTitle>
                                                        <Link href="/" className='py-3 pr-[35px]'>
                                                            <Image
                                                                src="/images/logo.png"
                                                                width={196}
                                                                height={50}
                                                                alt="About-card-pic"
                                                            />
                                                        </Link>
                                                    </SheetTitle>
                                                    <SheetDescription className="flex flex-col gap-8">
                                                        <Link href="/courses" className="text-white text-[18px] font-bold">
                                                            Courses
                                                        </Link>

                                                        <Link href="/arabic-advance" className="text-white text-[18px] font-bold">
                                                            Coasching
                                                        </Link>

                                                        <Link href="/about-us" className="text-white text-[18px] font-bold">
                                                            About Us
                                                        </Link>

                                                        <Link href="/faculity" className="text-white text-[18px] font-bold">
                                                            Our Faculity
                                                        </Link>

                                                        <Link href="/blog" className="text-white text-[18px] font-bold">
                                                            Blogs
                                                        </Link>


                                                    </SheetDescription>
                                                </SheetHeader>
                                            </SheetContent>

                                        </Sheet>

                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Desktop-Header */}
                        <div className='items-center justify-between hidden lg:flex'>

                            <div className='flex flex-wrap items-center mx-[-15px] '>

                                <Link href="/" className='py-3 pr-[35px]'>
                                    <Image
                                        src="/images/logo.png"
                                        width={196}
                                        height={50}
                                        alt="About-card-pic"
                                    />
                                </Link>

                                <nav>
                                    <ul className='flex items-center'>

                                        <li>
                                            <Link href="/courses" className='flex items-center gap-1.5 py-2 px-5'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid" viewBox="0 0 16 16">
                                                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"></path>
                                                </svg>
                                                Courses
                                            </Link>

                                        </li>

                                        <li>
                                            <Link href="/arabic-advance" className='py-2 px-5'>
                                                Coaching
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/about-us" className='py-2 px-5'>
                                                About Us
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/faculity" className='py-2 px-5'>
                                                Our Faculty
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/blog" className='py-2 px-5'>
                                                Blogs
                                            </Link>
                                        </li>

                                    </ul>
                                </nav>

                            </div>

                            <Link href="/courses" className='inline-block py-2 px-[25px] leading-[1] bg-[#101010] text-[#ffff] text-[15px] border-[2px] border-[#a2c95c] w-auto h-auto font-semibold duration-400 ease-linear hover:bg-[#a2c95c] hover:border-[#a2c95c] hover:text-[#101010 ]  '>
                                Teach with Us
                            </Link>

                        </div>


                    </div>
                </div>

            </header>
        </>
    )
}

export default Header
