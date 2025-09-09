import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Coaching = () => {
    return (
        <>
            <div className='bg-[#f8f8f8] pb-5'>

                {/* container */}
                <div className=''>

                    {/* Row */}
                    <div className='flex items-center flex-wrap'>

                        {/* Column 1 */}
                        <div className='w-[100%] max-w-[33.333333%] flex-[33.333333%] min-h-[1px] pr-[15px]'>
                            <div className=''>
                                <Image
                                    src="/images/coaching/Sahil-Adeem.webp"
                                    width={850}
                                    height={720}
                                    alt="About-card-pic"
                                    className='!w-auto !h-[720px]'
                                />
                            </div>
                        </div>
                        {/* Column 2 */}
                        <div className='w-[100%] max-w-[66.666666%] flex-[66.666666%] min-h-[1px] pl-[15px] pr-[200px]'>

                            <div>
                                <h2 className='text-[28px] mb-2.5 tracking-normal leading-[1] font-extrabold'>Elevate Your Potential with</h2>
                                <h2 className='text-[44px] text-[#aac86b] mb-2.5 tracking-normal leading-[1] font-extrabold'>Expert Coaching</h2>
                                <div className='w-[40px] h-[1.5px] bg-[#282828] border border-[#282828] my-5'></div>
                                <p className='text-[18px] opacity-[0.7] font-normal mb-[30px]'>
                                    Take your personal and professional development to the next level with expert coaching from our team of domain experts. Our one-on-one coaching sessions are tailored to your specific needs and goals, providing you with the support and guidance you need to succeed.
                                </p>
                            </div>


                            {/* Casching Cards */}
                            <div className='flex items-center flex-wrap mx-[-15]'>

                                {/* Column 1 */}
                                <div className='w-[100%] max-w-[50%] flex-[50%] min-h-[1px] px-[15px]'>
                                    <Link href="" className='border-[2px] border-[#DEDEDE] bg-white relative p-[25px] block text-[15px] mt-2.5 mb-[30px] about-link'>
                                        <h2 className='text-[28px] text-[#a2c95c] font-black leading-[1] mb-4'>
                                            Personal Coaching
                                        </h2>
                                        <p className='text-[14px] text-[#101010] font-normal mb-[25px]'>
                                            Personalized one-on-one coaching to improve skills and perspective.
                                        </p>
                                        <span className='flex items-center text-[#101010] font-bold'>
                                            Book Now
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18.961" height="18.961" viewBox="0 0 18.961 18.961" className='ml-1.5 w-5 h-5 mt-[-4px]'>
                                                <path id="arrow-down-left-circle" d="M1.185,9.481a8.3,8.3,0,1,0,8.3-8.3,8.3,8.3,0,0,0-8.3,8.3Zm17.776,0A9.481,9.481,0,1,1,9.481,0a9.481,9.481,0,0,1,9.481,9.481Zm-7-3.382a.593.593,0,0,1,.838.839L7.948,11.791h3.28a.593.593,0,0,1,0,1.185H6.518a.593.593,0,0,1-.593-.593V7.673a.593.593,0,0,1,1.185,0v3.28Z" transform="translate(18.961 18.961) rotate(180)" fill="#a2c95c" fillRule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>


                                {/* Column 2 */}
                                <div className='w-[100%] max-w-[50%] flex-[50%] min-h-[1px] px-[15px]'>
                                    <Link href="" className='border-[2px] border-[#DEDEDE] bg-white relative p-[25px] block text-[15px] mt-2.5 mb-[30px] about-link'>
                                        <h2 className='text-[28px] text-[#a2c95c] font-black leading-[1] mb-4'>
                                            Business Coaching
                                        </h2>
                                        <p className='text-[14px] text-[#101010] font-normal mb-[25px]'>
                                            Expert business coaching to drive growth and success.
                                        </p>
                                        <span className='flex items-center text-[#101010] font-bold'>
                                            Book Now
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18.961" height="18.961" viewBox="0 0 18.961 18.961" className='ml-1.5 w-5 h-5 mt-[-4px]'>
                                                <path id="arrow-down-left-circle" d="M1.185,9.481a8.3,8.3,0,1,0,8.3-8.3,8.3,8.3,0,0,0-8.3,8.3Zm17.776,0A9.481,9.481,0,1,1,9.481,0a9.481,9.481,0,0,1,9.481,9.481Zm-7-3.382a.593.593,0,0,1,.838.839L7.948,11.791h3.28a.593.593,0,0,1,0,1.185H6.518a.593.593,0,0,1-.593-.593V7.673a.593.593,0,0,1,1.185,0v3.28Z" transform="translate(18.961 18.961) rotate(180)" fill="#a2c95c" fillRule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>


                                {/* Column 3 */}
                                <div className='w-[100%] max-w-[50%] flex-[50%] min-h-[1px] px-[15px]'>
                                    <Link href="" className='border-[2px] border-[#DEDEDE] bg-white relative p-[25px] block text-[15px] mt-2.5 about-link'>
                                        <h2 className='text-[28px] text-[#a2c95c] font-black leading-[1] mb-4'>
                                            Personal Counseling & Coaching with Sadia Khan
                                        </h2>
                                        <p className='text-[14px] text-[#101010] font-normal mb-[25px]'>
                                            Empathetic support and personalized strategies for emotional well-being and personal growth.
                                        </p>
                                        <span className='flex items-center text-[#101010] font-bold'>
                                            Book Now
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18.961" height="18.961" viewBox="0 0 18.961 18.961" className='ml-1.5 w-5 h-5 mt-[-4px]'>
                                                <path id="arrow-down-left-circle" d="M1.185,9.481a8.3,8.3,0,1,0,8.3-8.3,8.3,8.3,0,0,0-8.3,8.3Zm17.776,0A9.481,9.481,0,1,1,9.481,0a9.481,9.481,0,0,1,9.481,9.481Zm-7-3.382a.593.593,0,0,1,.838.839L7.948,11.791h3.28a.593.593,0,0,1,0,1.185H6.518a.593.593,0,0,1-.593-.593V7.673a.593.593,0,0,1,1.185,0v3.28Z" transform="translate(18.961 18.961) rotate(180)" fill="#a2c95c" fillRule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>

                            </div>


                        </div>



                    </div>

                </div>

            </div>
        </>
    )
}

export default Coaching
