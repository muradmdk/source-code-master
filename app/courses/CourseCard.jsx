import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CourseCard = ({ data }) => {
    return (
        <div className='mb-2.5  bg-white featured-shadow featured-hover'>

            <div className='relative'>
                <Image
                    src={data.image}
                    width={380}
                    height={187}
                    alt="About-card-pic"
                />
                <p className='absolute top-0 left-0 py-[2px] px-[7px] bg-[#fed02a] text-[14px] font-medium text-[#101010]'>{data.badge}</p>
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

                <h3 className='text-[18px] text-[#101010] font-semibold mb-[30px] line-clamp-1'>
                    {data.title}
                </h3>

                <Link href="" className='flex items-center text-[16px] text-[#101010] font-semibold underline mb-2 pb-2 border-b-[1px] border-[#efefef]'>
                    <Image
                        src="/images/featured/6.png"
                        width={20}
                        height={20}
                        alt="About-card-pic"
                        className='mr-2'
                    />
                    {data.subtitle}
                </Link>

                <div className='mt-3 mb-3 flex flex-col'>
                    <span>{data.start}</span>
                    <span className='text-[#a2c95c] text-[18px] font-bold '>{data.pkr}</span>
                </div>

                <div className='flex items-center gap-[15px]'>
                    <Link href="/arabic-for-adults" className='block text-center w-full py-2 px-[25px] leading-[1] text-[#101010] bg-[#a2c95c] text-[15px] border-[2px] border-[#a2c95c] font-bold  duration-400 ease-linear hover:bg-black hover:text-white hover:border-[#000]'>
                        {data.sport}
                    </Link>

                    <Link href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bookmark-heart text-[#878787] duration-300 ease-linear hover:text-[#101010]" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path>
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
                        </svg>
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default CourseCard
