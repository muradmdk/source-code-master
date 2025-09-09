import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BlogCard = ({ data }) => {
    return (
        <>
            <div className='bg-white link-hover'>
                <div className='relative'>
                    <Link href="/blog-details">
                        <Image
                            src={data.avatar}
                            width={380}
                            height={234}
                            alt="About-card-pic"
                            className='!w-full !h-auto'
                        />
                    </Link>
                    <p className='text-[#101010] text-[14px] leading-[1] py-[8px] px-2.5 bg-[#a2c95c] inline-block absolute bottom-0 left-0'>{data.badge}</p>
                </div>

                <div className='p-5'>
                    <Link href="/blog-details" className='text-[#101010] font-bold mb-6 block'>
                        {data.title}
                    </Link>

                    <span className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-calendar2 text-[#a2c95c] mr-2" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"></path>
                        </svg>
                        <span className='text-[14px]'>{data.date}</span>
                    </span>
                </div>
            </div>
        </>
    )
}

export default BlogCard
