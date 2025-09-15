import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BlogCard from './BlogCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const page = () => {
    return (
        <>
            <Header/>
            <div className='pt-[122px] pb-[40px]'>

                {/* Blog Header */}
                <div className='relative bg-[#101010]'>
                    <Image
                        src="/images/blog/blog-header-lg.jpg"
                        width={280}
                        height={187}
                        alt="About-card-pic"
                        className='!w-full !h-auto opacity-[0.3] grayscale-[1]'
                    />

                    <div className='blog-header'>
                        <h2 className='text-[60px] leading-[1] text-white font-bold'>
                            OUR BLOGS
                        </h2>
                        <h4 className='text-[20px] text-white w-[65%]'>
                            Check out our blog for a collection of informative articles and insights on a variety of topics.
                        </h4>
                    </div>

                </div>

                <div className='my-[30px]'>

                    {/* Container */}
                    <div className='w-full max-w-[1230px] px-[15px] mx-auto'>

                        {/* Column 1 */}
                        <div className='grid grid-cols-3 gap-[30px]'>
                            {[
                                {
                                    title: "The Higher Purpose - PART 2",
                                    avatar: "/images/blog/1.jpg",
                                    badge: "General",
                                    date: " 26 May, 2017"
                                },
                                {
                                    title: "The Higher Purpose! (Part 1) Uncensored!",
                                    avatar: "/images/blog/2.jpg",
                                    badge: "General",
                                    date: " 26 May, 2017"
                                }
                            ].map((item, index) => (
                                <div key={index} className=''>
                                    <BlogCard data={item} />
                                </div>
                            ))}
                        </div>

                    </div>

                </div>

            </div>

            <Footer/>
        </>
    )
}

export default page
