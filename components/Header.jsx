import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <>
            <div className='w-full fixed top-0 left-0  z-50 bg-[#101010] shadow-all-3 text-[#fff] py-2.5'>
                {/* Container */}
                <div className='w-full max-w-[1230px] px-[15px] mx-auto'>
                    <header>
                        <div className='flex items-center justify-between'>

                            <div className='flex items-center'>

                                <Link href="/" className='py-3 pr-[35px]'>
                                    <Image
                                        src="/images/logo.png"
                                        width={196}
                                        height={50}
                                        alt="About-card-pic"
                                    />
                                </Link>

                                <nav>
                                    <ul className='flex items-center'>

                                        <li>
                                            <Link href="/courses" className='flex items-center gap-1.5 py-2 px-5'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid" viewBox="0 0 16 16">
                                                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"></path>
                                                </svg>
                                                Courses
                                            </Link>

                                        </li>

                                        <li>
                                            <Link href="/arabic-advance" className='py-2 px-5'>
                                                Coaching
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/about-us" className='py-2 px-5'>
                                                About Us
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/faculity" className='py-2 px-5'>
                                                Our Faculty
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/blog" className='py-2 px-5'>
                                                Blogs
                                            </Link>
                                        </li>

                                    </ul>
                                </nav>

                            </div>

                            <Link href="/courses" className='inline-block py-2 px-[25px] leading-[1] bg-[#101010] text-[#ffff] text-[15px] border-[2px] border-[#a2c95c] w-auto h-auto font-semibold duration-400 ease-linear hover:bg-[#a2c95c] hover:border-[#a2c95c] hover:text-[#101010 ]  '>
                                Teach with Us
                            </Link>

                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}

export default Header
