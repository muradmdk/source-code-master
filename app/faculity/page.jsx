import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import FacultyCard from './FacultyCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const page = () => {
    return (
        <>
            <Header/>
            <div className='pt-[120px] pb-4'>

                {/* container */}
                <div className='w-full max-w-[1230px] px-[15px] mx-auto'>

                    <div className='flex items-center justify-between mb-[30px]'>
                        <h1 className='text-[#101010] text-[26px] font-bold'>
                            Our Faculty
                        </h1>

                        <form action="" className='relative'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-[#b5b5b5] absolute top-2 left-2" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                            </svg>
                            <input type="search" placeholder='Search' className='h-8 border border-[#dedede] pl-[34px] text-[13px] tracking-[1px] text-[#495057] w-full py-1.5 px-3 font-medium leading-[1.5] outline-0' />
                        </form>
                    </div>

                    {/* Faculty card */}
                    <div className='grid grid-cols-4 gap-[30px] mb-[60px]'>
                        {[
                            {
                                name: "Tayyabah Abdulsattar",
                                avatar: "/images/faculty/avatar-female.svg"
                            },
                            {
                                name: "Muhammad Ali",
                                avatar: "/images/faculty/avatar.png"

                            },
                            {
                                name: "Ayesha Khan",
                                avatar: "/images/faculty/avatar-female.svg"

                            },
                            {
                                name: "Ahmed Raza",
                                avatar: "/images/faculty/avatar.png"

                            },
                            {
                                name: "Hira Saeed",
                                avatar: "/images/faculty/avatar-female.svg"

                            },
                            {
                                name: "Usman Khalid",
                                avatar: "/images/faculty/avatar.png"

                            },
                            {
                                name: "Fatima Noor",
                                avatar: "/images/faculty/avatar-female.svg"

                            },
                            {
                                name: "Bilal Hussain",
                                avatar: "/images/faculty/avatar.png"

                            },
                            {
                                name: "Zainab Malik",
                                avatar: "/images/faculty/avatar-female.svg"

                            },
                            {
                                name: "Hamza Tariq",
                                avatar: "/images/faculty/avatar.png"

                            },
                            {
                                name: "Sana Javed",
                                avatar: "/images/faculty/avatar-female.svg"

                            },
                            {
                                name: "Imran Ahmed",
                                avatar: "/images/faculty/avatar.png"

                            }
                        ].map((item, index) => (
                            <div key={index} className=''>
                                <FacultyCard data={item} />
                            </div>
                        ))}
                    </div>

                </div>

            </div>

            <Footer/>
        </>
    )
}

export default page
