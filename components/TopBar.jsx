'use client'
import { useEffect, useState } from "react";
import Link from 'next/link'
import React from 'react'

const TopBar = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000); // update every second

        return () => clearInterval(timer); // cleanup
    }, []);

    const formattedTime = time.toLocaleTimeString("en-GB", { hour12: false });
    // ⬆️ Example: 15:27:53 (24h format)

    return (
        <>
            <div className=''>

                <div className='w-full max-w-[1230px] px-[15px] mx-auto'>

                    <div className='flex items-center border-b border-[#555555] pb-[5px]'>

                        <div className='flex items-center max-w-[58.333333%] flex-[58.333333%] pr-[15px]'>
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

                        <div className='max-w-[41.666667%] flex-[41.666667%] pl-[15px] flex items-end justify-end '>

                            <div className='flex items-center text-[13px] mb-[4px]'>
                                Time Zone: <span className='mr-2.5'>Asia/Karachi</span>
                                <div className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock text-[#a2c95c] mr-1.5" viewBox="0 0 16 16">
                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                    </svg>
                                    <span>{formattedTime}</span>
                                </div>
                            </div>

                            <div className='ml-[60px] mb-[2px]'>
                                <Link href="" className='flex items-center text-[15px] text-white pr-2.5 pl-3 border-l border-[#dddddd] '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person mr-2.5 text-[#a2c95c]" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                                    </svg>
                                    Login/Register
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default TopBar
