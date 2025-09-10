import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div>

                <div className='mb-9'>
                    <div>
                        <h1 className='text-[20px] font-bold'>
                            Invite Friends & Family Members
                        </h1>
                        <div className='bg-[#a2c95c] w-[50px] h-0.5 mt-1'></div>
                    </div>

                    <p className='mt-3'>
                        Are you looking to share the benefits of our online learning platform with your friends and family? Look no further! Here you can easily invite your loved ones to join our courses and have their monthly payment billed to your account. Simply enter their name, gender, date of birth, relationship, username, password and click “Save”. After adding their account, they can log in using their username and password and begin accessing the courses you have enrolled them in.

                        Please be aware that as the primary user, you will be responsible for paying the monthly fees for any friends or family members you invite to join your account. If you have any questions or need assistance, don’t hesitate to contact our support team. We are happy to help!
                    </p>
                </div>

                <div className='bg-white py-[30px] px-5'>

                    <div className='flex items-center justify-between mb-7'>
                        <div>
                            <h1 className='text-[20px] font-bold'>
                                Friends & Family
                            </h1>
                            <div className='bg-[#a2c95c] w-[50px] h-0.5 mt-1'></div>
                        </div>
                        <Link href="" className='text-[14px] text-[#101010] bg-[#a2c95c] border border-[#a2c95c] py-2 px-3 font-bold flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person-plus mr-2" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z">
                                </path>
                                <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z">
                                </path>
                            </svg>
                            Add
                        </Link>
                    </div>

                    <div className='p-[30] border-2 border-[#efefef] h-[250px] text-center flex items-center justify-center'>
                        <p className='font-bold'>
                            Currently there is no Friends & Family added
                        </p>
                    </div>

                </div>



            </div>
        </>
    )
}

export default page
