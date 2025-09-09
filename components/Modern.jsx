import React from 'react'
import Link from 'next/link'

const Modern = () => {
    return (
        <>
            <div className='py-[120px] bg-white'>

                {/* Container */}
                <div className='w-full max-w-[1230px] px-[15px] mx-auto'>

                    {/* Row */}
                    <div className='flex items-center flex-wrap mx-[-15]'>

                        {/* Column 1 */}
                        <div className='w-[100%] max-w-[33.333333%] flex-[33.333333%] min-h-[1px] px-[15px]'>
                            <div>
                                <span className='text-[45px] font-extrabold leading-[1]'>THE</span>
                                <div className='text-[140px] font-black leading-[1]'>100</div>
                                <div className='bg-[#aac86b] py-[5px] px-[30px] text-[28px] inline-block tracking-[5px] font-extrabold leading-[1]'>YEAR PLAN</div>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className='w-[100%] max-w-[66.666666%] flex-[66.666666%] min-h-[1px] px-[15px]'>
                            <div>
                                <h2 className='font-extrabold text-[32px] tracking-normal leading-[1.2]'>
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
