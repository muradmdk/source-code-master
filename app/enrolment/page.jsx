import Header from '@/components/Header'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
    return (
        <>
            <Header />
            <div className='pt-[120px]'>

                <div className='mb-[30px]'>
                    <h2 className='text-[36px] font-bold text-center uppercase'>Enrolment</h2>
                </div>

                {/* Conatiner */}
                <div className='w-full max-w-[1024px] px-[15px] mx-auto'>

                    <div className=''>

                        <div className='p-2.5 bg-[#f9f9f9] border-2 border-[#f1f1f1] flex items-center gap-4'>
                            <div>
                                <Image
                                    src="/images/All-Courses/1.webp"
                                    width={585}
                                    height={405}
                                    alt='arabi-for-adults'
                                    className='!w-[100px] !h-auto'
                                />
                            </div>

                            <div>
                                <h2 className='text-[16px] font-bold'>
                                    Arabic for Adults
                                </h2>
                                <span className='text-[18px] font-bold'>
                                    PKR. 6,900.00
                                </span>
                            </div>
                        </div>


                        {/* Enrolment Card */}
                        <div className='bg-white shadow-all mt-6 pb-8'>

                            <div>
                                <ul className='table table-fixed w-full'>

                                    <li className='float-none table-cell'>
                                        <Link href="" className='block text-center border-b-[3px] border-[#a2c95c] font-bold text-[16px] p-5 pb-6 relative'>
                                            <span>Student Detail</span>
                                            <span className='absolute top-[50%] mt-[20px] left-[50%] translate-x-[-50%] size-[35px] bg-[#a2c95c] rounded-[50%] grid place-content-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"></path>
                                                </svg>
                                            </span>
                                        </Link>
                                    </li>

                                    <li className='float-none table-cell'>
                                        <Link href="" className='block text-center border-b-[3px] border-[#eeeeee] font-bold text-[16px] p-5 pb-6  relative'>
                                            <span  className='text-[#9e9e9e]'>Batch & Time</span>
                                            <span className='absolute top-[50%] mt-[20px] left-[50%] translate-x-[-50%] size-[35px] bg-[#eeeeee] rounded-[50%] grid place-content-center '>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-history" viewBox="0 0 16 16">
                                                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"></path>
                                                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"></path>
                                                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"></path>
                                                </svg>
                                            </span>
                                        </Link>
                                    </li>

                                    <li className='float-none table-cell'>
                                        <Link href="" className='block text-center border-b-[3px] border-[#eeeeee] font-bold text-[16px] p-5 relative pb-6'>
                                            <span  className='text-[#9e9e9e]'>Payment</span>
                                            <span className='absolute top-[50%] mt-[20px] left-[50%] translate-x-[-50%] size-[35px] bg-[#eeeeee] rounded-[50%] grid place-content-center '>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card-2-back-fill" viewBox="0 0 16 16">
                                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0V4zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H0z"></path>
                                                </svg>
                                            </span>
                                        </Link>
                                    </li>

                                </ul>
                            </div>


                        </div>


                    </div>

                </div>

            </div>
        </>
    )
}

export default page
