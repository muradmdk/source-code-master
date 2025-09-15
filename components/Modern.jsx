import React from 'react'
import Link from 'next/link'

const Modern = () => {
    return (
        <>
            <div className='py-[30px] md:py-[90px] xl:py-[120px] bg-white'>

                {/* Container */}
                <div className='w-full relative px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1230px]'>

                    {/* Row */}
                    <div className='flex flex-wrap mx-[-15] lg:items-center'>

                        {/* Column 1 */}
                        <div className='w-[100%] max-w-[100%%] flex-[100%] min-h-[1px] px-[15px] lg:max-w-[33.333333%] lg:flex-[33.333333%]'>
                            <div className='text-center mb-[30px] lg:text-start lg:mb-0'>
                                <span className='text-[28px] sm:text-[40px] xl:text-[45px] font-extrabold leading-[1]'>THE</span>
                                <div className='text-[85px] sm:text-[110px] xl:text-[140px] font-black leading-[1]'>100</div>
                                <div className='bg-[#aac86b] py-[5px] px-[30px] text-[16px] sm:text-[22px] xl:text-[28px] inline-block tracking-[5px] font-extrabold leading-[1]'>YEAR PLAN</div>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className='w-[100%] max-w-[100%] flex-[100%] min-h-[1px] px-[15px] lg:max-w-[66.666667%] lg:flex-[66.666667%]'>
                            <div>
                                <h2 className='font-extrabold text-[22px] sm:text-[28px] xl:text-[32px] tracking-normal leading-[1.2]'>
                                    <span className='text-[#595959]'>
                                        Our aim to build the network of all our students and connect them into an
                                    </span>
                                    ecosystem of building knowledge skills and attributes
                                    <span className='text-[#595959]'>
                                        required to solve the global problems for the next century!
                                    </span>
                                </h2>
                                <p className='tracking-[1.5008px] font-normal text-[1rem] mt-4 mb-9'>
                                    Source Code introduces the platform for networking and building a sense of community for all its students and behaves as a community center with a deeper purpose of preparing its students to clarify the identity and purpose for any and every one of its students.
                                </p>

                                <Link href=""  className='py-2 px-[25px] leading-[1] bg-white text-[#101010] text-[15px] border-[2px] border-[#a2c95c] w-auto h-auto font-semibold duration-400 ease-linear hover:bg-black hover:border-[#000] hover:text-[#a2c95c]  '>
                                    learn more
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Modern
