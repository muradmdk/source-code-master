import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
    return (
        <>
            <div className='bg-[#f8f8f8] py-[40px] md:py-[60px]'>

                {/* Container */}
                <div className='w-full relative px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1230px]'>


                    {/* Column 1 */}
                    <div className='w-[100%] max-w-[100%] flex-[100%] min-h-[1px]'>
                        <h2 className='text-[44px] relative tracking-normal leading-[1] block ml-0 mt-[15px] sm:mt-[22px] lg:mt-[30px] xl:mt-[40px] mb-[25px] font-bold'>
                            Nurture the <span className='text-[#a2c95c]'>Next Generation</span> of Excellence
                        </h2>

                        <h2 className='text-[16px] sm:text-[20px] xl:text-[28px] mb-5 font-normal leading-[1.15]'>
                            Identifying and developing the right skills in the current generation is crucial for meeting the needs of the next generation and achieving excellence over the long-term.
                        </h2>

                        <p className='text-[14px] sm:text-[16px] xl:text-[18px] mb-4'>
                            In order to meet the needs of the next generation and achieve excellence over the next hundred years, it is essential that we identify and cultivate the right skills in the current youth and adults. We have divided these skills into three categories:
                        </p>
                    </div>


                    {/* About Cards */}
                    {/* Row */}
                    <div className='flex items-center justify-center flex-wrap mx-[-15]'>

                        {/* Column 1 */}
                        <div className='w-[100%] max-w-[100%] flex-[100%] min-h-[1px] px-[15px] md:max-w-[50%] md:flex-[50%] lg:max-w-[33.333333%] lg:flex-[33.333333%]'>
                            <Link href="" className='border-[2px] border-[#DEDEDE] bg-white relative p-[25px] block text-[15px] mt-2.5 mb-[15px] xl:mb-[25px] about-link'>
                                <span className='text-[40px] text-[#3D3D3D] font-black leading-[1]'>01</span>
                                <div className='absolute top-[15px] right-[20px]'>
                                    <Image
                                        src="/images/about/1.png"
                                        width={45}
                                        height={45}
                                        alt="About-card-pic"
                                        className='sm:w-[50px] sm:h-[50px] xl:w-[55px] xl:h-[55px]'
                                    />
                                </div>
                                <h2 className='text-[28px] text-[#a2c95c] mt-[15px] mb-[15px] font-bold'>
                                    The Thought
                                </h2>
                                <span className='flex items-center text-[#101010] font-bold'>
                                    View Detail
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18.961" height="18.961" viewBox="0 0 18.961 18.961" className='ml-1.5 w-5 h-5 mt-[-4px]'>
                                        <path id="arrow-down-left-circle" d="M1.185,9.481a8.3,8.3,0,1,0,8.3-8.3,8.3,8.3,0,0,0-8.3,8.3Zm17.776,0A9.481,9.481,0,1,1,9.481,0a9.481,9.481,0,0,1,9.481,9.481Zm-7-3.382a.593.593,0,0,1,.838.839L7.948,11.791h3.28a.593.593,0,0,1,0,1.185H6.518a.593.593,0,0,1-.593-.593V7.673a.593.593,0,0,1,1.185,0v3.28Z" transform="translate(18.961 18.961) rotate(180)" fill="#a2c95c" fillRule="evenodd"></path>
                                    </svg>
                                </span>
                            </Link>
                        </div>

                        {/* Column 2 */}
                        <div className='w-[100%] max-w-[100%] flex-[100%] min-h-[1px] px-[15px] md:max-w-[50%] md:flex-[50%] lg:max-w-[33.333333%] lg:flex-[33.333333%]'>
                            <Link href="" className='border-[2px] border-[#DEDEDE] bg-white relative p-[25px] block text-[15px] mt-2.5 mb-[15px] xl:mb-[25px] about-link'>
                                <span className='text-[40px] text-[#3D3D3D] font-black leading-[1]'>02</span>
                                <div className='absolute top-[15px] right-[20px]'>
                                    <Image
                                        src="/images/about/2.png"
                                        width={45}
                                        height={45}
                                        alt="About-card-pic"
                                        className='sm:w-[50px] sm:h-[50px] xl:w-[55px] xl:h-[55px]'
                                    />
                                </div>
                                <h2 className='text-[28px] text-[#a2c95c] mt-[15px] mb-[15px] font-bold'>
                                    The Eloquence
                                </h2>
                                <span className='flex items-center text-[#101010] font-bold'>
                                    View Detail
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18.961" height="18.961" viewBox="0 0 18.961 18.961" className='ml-1.5 w-5 h-5 mt-[-4px]'>
                                        <path id="arrow-down-left-circle" d="M1.185,9.481a8.3,8.3,0,1,0,8.3-8.3,8.3,8.3,0,0,0-8.3,8.3Zm17.776,0A9.481,9.481,0,1,1,9.481,0a9.481,9.481,0,0,1,9.481,9.481Zm-7-3.382a.593.593,0,0,1,.838.839L7.948,11.791h3.28a.593.593,0,0,1,0,1.185H6.518a.593.593,0,0,1-.593-.593V7.673a.593.593,0,0,1,1.185,0v3.28Z" transform="translate(18.961 18.961) rotate(180)" fill="#a2c95c" fillRule="evenodd"></path>
                                    </svg>
                                </span>
                            </Link>
                        </div>

                        {/* Column 3 */}
                        <div className='w-[100%] max-w-[100%] flex-[100%] min-h-[1px] px-[15px] md:max-w-[50%] md:flex-[50%] lg:max-w-[33.333333%] lg:flex-[33.333333%]'>
                            <Link href="" className='border-[2px] border-[#DEDEDE] bg-white relative p-[25px] block text-[15px] mt-2.5 mb-[15px] xl:mb-[25px] about-link'>
                                <span className='text-[40px] text-[#3D3D3D] font-black leading-[1]'>03</span>
                                <div className='absolute top-[15px] right-[20px]'>
                                    <Image
                                        src="/images/about/3.png"
                                        width={45}
                                        height={45}
                                        alt="About-card-pic"
                                        className='sm:w-[50px] sm:h-[50px] xl:w-[55px] xl:h-[55px]'
                                    />
                                </div>
                                <h2 className='text-[28px] text-[#a2c95c] mt-[15px] mb-[15px] font-bold'>
                                    The Expertise
                                </h2>
                                <span className='flex items-center text-[#101010] font-bold'>
                                    View Detail
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18.961" height="18.961" viewBox="0 0 18.961 18.961" className='ml-1.5 w-5 h-5 mt-[-4px]'>
                                        <path id="arrow-down-left-circle" d="M1.185,9.481a8.3,8.3,0,1,0,8.3-8.3,8.3,8.3,0,0,0-8.3,8.3Zm17.776,0A9.481,9.481,0,1,1,9.481,0a9.481,9.481,0,0,1,9.481,9.481Zm-7-3.382a.593.593,0,0,1,.838.839L7.948,11.791h3.28a.593.593,0,0,1,0,1.185H6.518a.593.593,0,0,1-.593-.593V7.673a.593.593,0,0,1,1.185,0v3.28Z" transform="translate(18.961 18.961) rotate(180)" fill="#a2c95c" fillRule="evenodd"></path>
                                    </svg>
                                </span>
                            </Link>
                        </div>

                    </div>

                    <p className='text-[14px] sm:text-[16px] xl:text-[18px]'>
                        In order to meet the needs of the next generation and achieve excellence over the next hundred years, it is essential that we identify and cultivate the right skills in the current youth and adults. We have divided these skills into three categories:
                    </p>

                </div>


            </div>
        </>
    )
}

export default About
