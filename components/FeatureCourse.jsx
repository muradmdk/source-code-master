import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FeatureCourse = () => {
    return (
        <>
            <div className='py-[70px]'>

                {/* Container */}
                <div className='w-full max-w-[1230px] px-[15px] mx-auto'>


                    {/* Top-label */}
                    <div className='w-[100%] max-w-[100%] flex-[100%] min-h-[1px]'>
                        <div className='flex items-center justify-between mb-[30px]'>
                            <h2 className='text-[35px] text-[#101010] font-bold leading-[1] z-[2] relative'>
                                Featured Courses
                            </h2>
                            <Link href="" className='py-2 px-[25px] leading-[1] bg-white text-[#101010] text-[15px] border-[2px] border-[#a2c95c] w-auto h-auto font-semibold duration-400 ease-linear hover:bg-black hover:border-[#000] hover:text-[#a2c95c]  '>
                                View All Courses
                            </Link>
                        </div>
                    </div>


                    {/* Feature Cards */}
                    {/* Row */}
                    <div className='flex items-center flex-wrap mx-[-15]'>

                        {/* Column 1 */}
                        <div className='w-[100%] max-w-[25%] flex-[25%] min-h-[1px] px-[15px]'>

                            <div className='mb-2.5  bg-white featured-shadow featured-hover'>

                                <div>
                                    <Image
                                        src="/images/featured/1.webp"
                                        width={280}
                                        height={187}
                                        alt="About-card-pic"
                                    />
                                </div>

                                <div className='h-1 w-full bg-[#a2c95c]'></div>

                                <div className='p-5 text-[14px]'>

                                    <div className='flex items-center justify-between mb-2.5'>
                                        <span className='flex items-center font-normal'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bar-chart-line mr-[5px] text-[#a2c95c]" viewBox="0 0 16 16">
                                                <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"></path>
                                            </svg>
                                            Beginner
                                        </span>
                                        <span className='flex items-center font-normal'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar2-week mr-[5px] text-[#a2c95c]" viewBox="0 0 16 16">
                                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                                                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"></path>
                                            </svg>
                                            18 Months
                                        </span>
                                    </div>

                                    <h3 className='text-[18px] text-[#101010] font-semibold mb-[30px]'>
                                        Arabic for Adults
                                    </h3>

                                    <Link href="" className='flex items-center text-[16px] text-[#101010] font-semibold underline mb-2 pb-2 border-b-[1px] border-[#efefef]'>
                                        <Image
                                            src="/images/featured/6.png"
                                            width={20}
                                            height={20}
                                            alt="About-card-pic"
                                            className='mr-2'
                                        />
                                        Arabic Language
                                    </Link>

                                    <div className='mt-3 mb-3 flex flex-col'>
                                        <span>Starting From:</span>
                                        <span className='text-[#a2c95c] text-[18px] font-bold '>PKR. 6,900.00/Month</span>
                                    </div>

                                    <Link href="" className='block text-center w-full py-2 px-[25px] leading-[1] text-[#101010] bg-[#a2c95c] text-[15px] border-[2px] border-[#a2c95c] font-bold  duration-400 ease-linear hover:bg-black hover:text-white hover:border-[#000]'>
                                        Reserve Your Spot
                                    </Link>

                                </div>

                            </div>

                        </div>


                        {/* Column 2 */}
                        <div className='w-[100%] max-w-[25%] flex-[25%] min-h-[1px] px-[15px]'>

                            <div className='mb-2.5  bg-white featured-shadow featured-hover'>

                                <div>
                                    <Image
                                        src="/images/featured/2.webp"
                                        width={280}
                                        height={187}
                                        alt="About-card-pic"
                                    />
                                </div>

                                <div className='h-1 w-full bg-[#a2c95c]'></div>

                                <div className='p-5 text-[14px]'>

                                    <div className='flex items-center justify-between mb-2.5'>
                                        <span className='flex items-center font-normal'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bar-chart-line mr-[5px] text-[#a2c95c]" viewBox="0 0 16 16">
                                                <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"></path>
                                            </svg>
                                            Beginner
                                        </span>
                                        <span className='flex items-center font-normal'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar2-week mr-[5px] text-[#a2c95c]" viewBox="0 0 16 16">
                                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                                                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"></path>
                                            </svg>
                                            18 Months
                                        </span>
                                    </div>

                                    <h3 className='text-[18px] text-[#101010] font-semibold mb-[30px]'>
                                        Arabic For Kids (age 4 to 12)
                                    </h3>

                                    <Link href="" className='flex items-center text-[16px] text-[#101010] font-semibold underline mb-2 pb-2 border-b-[1px] border-[#efefef]'>
                                        <Image
                                            src="/images/featured/6.png"
                                            width={20}
                                            height={20}
                                            alt="About-card-pic"
                                            className='mr-2'
                                        />
                                        Arabic Language
                                    </Link>

                                    <div className='mt-3 mb-3 flex flex-col'>
                                        <span>Starting From:</span>
                                        <span className='text-[#a2c95c] text-[18px] font-bold '>PKR. 6,900.00/Month</span>
                                    </div>

                                    <Link href="" className='block text-center w-full py-2 px-[25px] leading-[1] text-[#101010] bg-[#a2c95c] text-[15px] border-[2px] border-[#a2c95c] font-bold  duration-400 ease-linear hover:bg-black hover:text-white hover:border-[#000]'>
                                        Reserve Your Spot
                                    </Link>

                                </div>

                            </div>

                        </div>


                        {/* Column 3 */}
                        <div className='w-[100%] max-w-[25%] flex-[25%] min-h-[1px] px-[15px]'>

                            <div className='mb-2.5  bg-white featured-shadow featured-hover'>

                                <div>
                                    <Image
                                        src="/images/featured/3.webp"
                                        width={280}
                                        height={187}
                                        alt="About-card-pic"
                                    />
                                </div>

                                <div className='h-1 w-full bg-[#a2c95c]'></div>

                                <div className='p-5 text-[14px]'>

                                    <div className='flex items-center justify-between mb-2.5'>
                                        <span className='flex items-center font-normal'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bar-chart-line mr-[5px] text-[#a2c95c]" viewBox="0 0 16 16">
                                                <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"></path>
                                            </svg>
                                            Beginner
                                        </span>
                                        <span className='flex items-center font-normal'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar2-week mr-[5px] text-[#a2c95c]" viewBox="0 0 16 16">
                                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                                                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"></path>
                                            </svg>
                                            18 Months
                                        </span>
                                    </div>

                                    <h3 className='text-[18px] text-[#101010] font-semibold'>
                                        Critical thinking – <br /> Learning how to think
                                    </h3>

                                    <Link href="" className='flex items-center text-[16px] text-[#101010] font-semibold underline mb-2 pb-2 border-b-[1px] border-[#efefef]'>
                                        <Image
                                            src="/images/featured/5.png"
                                            width={20}
                                            height={20}
                                            alt="About-card-pic"
                                            className='mr-2'
                                        />
                                        SKILLS & DEVELOPMENT
                                    </Link>

                                    <div className='mt-3 mb-3 flex flex-col'>
                                        <span>Starting From:</span>
                                        <span className='text-[#a2c95c] text-[18px] font-bold '>PKR. 6,900.00/Month</span>
                                    </div>

                                    <Link href="" className='block text-center w-full py-2 px-[25px] leading-[1] text-[#101010] bg-[#a2c95c] text-[15px] border-[2px] border-[#a2c95c] font-bold  duration-400 ease-linear hover:bg-black hover:text-white hover:border-[#000]'>
                                        Reserve Your Spot
                                    </Link>

                                </div>

                            </div>

                        </div>


                        {/* Column 4 */}
                        <div className='w-[100%] max-w-[25%] flex-[25%] min-h-[1px] px-[15px]'>

                            <div className='mb-2.5  bg-white featured-shadow featured-hover'>

                                <div>
                                    <Image
                                        src="/images/featured/4.webp"
                                        width={280}
                                        height={187}
                                        alt="About-card-pic"
                                    />
                                </div>

                                <div className='h-1 w-full bg-[#a2c95c]'></div>

                                <div className='p-5 text-[14px]'>

                                    <div className='flex items-center justify-between mb-2.5'>
                                        <span className='flex items-center font-normal'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bar-chart-line mr-[5px] text-[#a2c95c]" viewBox="0 0 16 16">
                                                <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"></path>
                                            </svg>
                                            Beginner
                                        </span>
                                        <span className='flex items-center font-normal'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar2-week mr-[5px] text-[#a2c95c]" viewBox="0 0 16 16">
                                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                                                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"></path>
                                            </svg>
                                            18 Months
                                        </span>
                                    </div>

                                    <h3 className='text-[18px] text-[#101010] font-semibold mb-[30px]'>
                                        Emotional Intelligence
                                    </h3>

                                    <Link href="" className='flex items-center text-[16px] text-[#101010] font-semibold underline mb-2 pb-2 border-b-[1px] border-[#efefef]'>
                                        <Image
                                            src="/images/featured/5.png"
                                            width={20}
                                            height={20}
                                            alt="About-card-pic"
                                            className='mr-2'
                                        />
                                        SKILLS & DEVELOPMENT
                                    </Link>

                                    <div className='mt-3 mb-3 flex flex-col'>
                                        <span>Starting From:</span>
                                        <span className='text-[#a2c95c] text-[18px] font-bold '>PKR. 6,900.00/Month</span>
                                    </div>

                                    <Link href="" className='block text-center w-full py-2 px-[25px] leading-[1] text-[#101010] bg-[#a2c95c] text-[15px] border-[2px] border-[#a2c95c] font-bold  duration-400 ease-linear hover:bg-black hover:text-white hover:border-[#000]'>
                                        Reserve Your Spot
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

export default FeatureCourse
