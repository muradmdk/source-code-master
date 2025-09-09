import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Teach = () => {
    return (
        <>
            <div className='bg-[#a2c95c] w-full text-[#101010]'>

                {/* Container */}
                <div className='w-full px-[15px] mx-auto'>

                    {/* Row */}
                    <div className='flex items-center flex-wrap mx-[-15]'>

                        {/* Column1  */}
                        <div className='w-[100%] max-w-[41.666667%] flex-[41.666667%] min-h-[1px] relative z-[2]'>
                            <div>
                                <Image
                                    src="/images/Teach/ins.webp"
                                    width={423}
                                    height={440}
                                    alt="About-card-pic"
                                    className='mt-1.5 float-right mr-5'
                                />
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className='w-[100%] max-w-[58.333333%] flex-[58.333333%] min-h-[1px] relative'>
                            <div className='p-[40px] bg-[#FFFFFF1A] w-[600px] h-full relative'>
                                <h2 className='text-[#101010] text-[45px] leading-normal z-[2] relative block m-auto mt-[40px] font-bold'>
                                    Teach with Us
                                </h2>

                                <div className="w-[40px] h-[2.5px] bg-[#282828] border border-[#282828] my-5"></div>

                                <h3 className='text-white text-[145px] font-black absolute top-[30px] w-full uppercase m-auto text-center left-[-190px] opacity-[0.2] tracking-[-5px]'>
                                    Teach
                                </h3>
                                <p className='mt-[25px] text-[18px] font-normal mb-[30px]'>
                                    Join the ranks of our esteemed instructors at Source Code Academia and become a driving force in the global effort to enhance Muslim competency. As a member of our community, you will have the opportunity to make a real difference in the lives of students around the world and be a part of a movement that is working towards positive change. Together, we can create a brighter future for all.
                                </p>

                                <Link href="/courses" className='py-2 px-[25px] leading-[1] bg-[#101010] text-[#ffff] text-[15px] border-[2px] border-[#101010] w-auto h-auto font-semibold duration-400 ease-linear hover:bg-transparent hover:border-[#000] hover:text-[#101010]  '>
                                    View All Courses
                                </Link>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Teach
