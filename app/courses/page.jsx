import React from 'react'
import CourseCard from './CourseCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const page = () => {
    return (
        <>
            <Header/>
            {/* Container */}
            <div className='w-full max-w-[1230px] px-[15px] mx-auto'>

                {/* Skills */}
                <div className='pt-[120px]'>

                    <div className='bg-white p-5 my-[30px] shadow-all'>
                        <h2 className='text-[20px] text-[#101010] font-bold'>
                            <span className='text-[#aac86b]'>Skill Development</span> Courses
                        </h2>
                    </div>

                    <div className='grid grid-cols-3 gap-[30px]'>
                        {
                            [
                                {
                                    image: "/images/All-Courses/1.webp",
                                    title: "Arabic for Adults",
                                    subtitle: "Arabic Language",
                                    start: "Starting From:",
                                    pkr: "PKR. 6,900.00 / Month",
                                    sport: "Reserve Your Spot"
                                },
                                {
                                    image: "/images/All-Courses/2.webp",
                                    title: "Arabic for Kids",
                                    subtitle: "Beginner Arabic",
                                    start: "Starting From:",
                                    pkr: "PKR. 5,500.00 / Month",
                                    sport: "Reserve Your Spot"
                                },
                                {
                                    image: "/images/All-Courses/3.webp",
                                    title: "Quran with Tajweed",
                                    subtitle: "Quran Learning",
                                    start: "Starting From:",
                                    pkr: "PKR. 7,200.00 / Month",
                                    sport: "Reserve Your Spot"
                                },
                                {
                                    image: "/images/All-Courses/4.webp",
                                    title: "Spoken English",
                                    subtitle: "Language Skills",
                                    start: "Starting From:",
                                    pkr: "PKR. 8,000.00 / Month",
                                    sport: "Reserve Your Spot"
                                },
                                {
                                    image: "/images/All-Courses/5.webp",
                                    title: "French for Beginners",
                                    subtitle: "French Language",
                                    start: "Starting From:",
                                    pkr: "PKR. 9,500.00 / Month",
                                    sport: "Reserve Your Spot"
                                },
                                {
                                    image: "/images/All-Courses/6.webp",
                                    title: "German Language Course",
                                    subtitle: "German A1 Level",
                                    start: "Starting From:",
                                    pkr: "PKR. 11,000.00 / Month",
                                    sport: "Reserve Your Spot"
                                },
                                {
                                    image: "/images/All-Courses/7.webp",
                                    title: "IELTS Preparation",
                                    subtitle: "Exam Training",
                                    start: "Starting From:",
                                    pkr: "PKR. 12,500.00 / Month",
                                    sport: "Reserve Your Spot"
                                },
                                {
                                    image: "/images/All-Courses/8.webp",
                                    title: "Graphic Designing",
                                    subtitle: "Creative Skills",
                                    start: "Starting From:",
                                    pkr: "PKR. 14,000.00 / Month",
                                    sport: "Reserve Your Spot"
                                },
                                {
                                    image: "/images/All-Courses/9.webp",
                                    title: "Web Development",
                                    subtitle: "Frontend + Backend",
                                    start: "Starting From:",
                                    pkr: "PKR. 15,500.00 / Month",
                                    sport: "Reserve Your Spot"
                                },
                                {
                                    image: "/images/All-Courses/10.webp",
                                    title: "Mobile App Development",
                                    subtitle: "iOS + Android",
                                    start: "Starting From:",
                                    pkr: "PKR. 18,000.00 / Month",
                                    sport: "Reserve Your Spot"
                                },
                                {
                                    image: "/images/All-Courses/11.webp",
                                    title: "Digital Marketing",
                                    subtitle: "SEO + SMM",
                                    start: "Starting From:",
                                    pkr: "PKR. 13,500.00 / Month",
                                    sport: "Reserve Your Spot"
                                },
                                {
                                    image: "/images/All-Courses/12.webp",
                                    title: "Photography & Editing",
                                    subtitle: "Creative Arts",
                                    start: "Starting From:",
                                    pkr: "PKR. 10,000.00 / Month",
                                    sport: "Reserve Your Spot"
                                }
                            ].map((item, index) => (
                                <div key={index} className=''>
                                    <CourseCard data={item} />
                                </div>
                            ))
                        }

                    </div>

                </div>


                {/* Coasching */}
                <div>

                    <div className='bg-white p-5 mt-[50px] mb-[30px] shadow-all'>
                        <h2 className='text-[20px] text-[#101010] font-bold'>
                            <span className='text-[#aac86b]'>Coaching & Counseling</span> Sessions
                        </h2>
                    </div>

                    <div className='grid grid-cols-3 gap-[30px]'>
                        {
                            [
                                {
                                    image: "/images/All-Courses/13.png",
                                    title: "Personal Counseling & Coaching (Online)",
                                    subtitle: "Arabic Language",
                                    start: "Starting From:",
                                    pkr: "PKR. 6,900.00 / Month",
                                    sport: "Reserve Your Spot"
                                },
                                {
                                    image: "/images/All-Courses/14.jpg",
                                    title: "Business Coaching",
                                    subtitle: "Beginner Arabic",
                                    start: "Starting From:",
                                    pkr: "PKR. 5,500.00 / Month",
                                    sport: "Reserve Your Spot"
                                },
                                {
                                    image: "/images/All-Courses/13.png",
                                    title: "Personal Counseling & Coaching with Sadia Khan (For Females Only)",
                                    subtitle: "Quran Learning",
                                    start: "Starting From:",
                                    pkr: "PKR. 7,200.00 / Month",
                                    sport: "Reserve Your Spot"
                                },
                                {
                                    image: "/images/All-Courses/15.jpg",
                                    title: "Face-to-Face Personal Counseling & Coaching (UK Only)",
                                    subtitle: "Language Skills",
                                    start: "Starting From:",
                                    pkr: "PKR. 8,000.00 / Month",
                                    sport: "Reserve Your Spot"
                                }
                            ].map((item, index) => (
                                <div key={index} className=''>
                                    <CourseCard data={item} />
                                </div>
                            ))
                        }

                    </div>

                </div>


                {/* Upcoming */}
                <div className='pb-[30px]'>

                    <div className='bg-white p-5 mt-[50px] mb-[30px] shadow-all'>
                        <h2 className='text-[20px] text-[#101010] font-bold'>
                            <span className='text-[#aac86b]'>Upcoming</span> Courses
                        </h2>
                    </div>

                    <div className='grid grid-cols-3 gap-[30px] mb-[30px]'>
                        {
                            [
                                {
                                    image: "/images/All-Courses/16.webp",
                                    title: "Personal Counseling & Coaching (Online)",
                                    subtitle: "Arabic Language",
                                    start: "Starting From:",
                                    pkr: "PKR. 6,900.00 / Month",
                                    sport: "Reserve Your Spot",
                                    badge: "Launching Soon"
                                },
                                {
                                    image: "/images/All-Courses/17.webp",
                                    title: "Business Coaching",
                                    subtitle: "Beginner Arabic",
                                    start: "Starting From:",
                                    pkr: "PKR. 5,500.00 / Month",
                                    sport: "Reserve Your Spot",
                                    badge: "Launching Soon"
                                }
                            ].map((item, index) => (
                                <div key={index} className=''>
                                    <CourseCard data={item} />
                                </div>
                            ))
                        }

                    </div>

                </div>

            </div>

            <Footer/>
        </>
    )
}

export default page
