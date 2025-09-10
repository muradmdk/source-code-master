import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div>

                <div className='mb-9'>
                    <div>
                        <h1 className='text-[20px] font-bold'>
                            Update Password
                        </h1>
                        <div className='bg-[#a2c95c] w-[50px] h-0.5 mt-1'></div>
                    </div>
                </div>

                <div>

                    <h3 className='[18px] text-[#444444] font-semibold border-b-2 border-[#e9e9e9] pb-2.5 mb-5'>Change Password</h3>

                    <form action="">

                        <div className='flex flex-col mb-5'>
                            <span className='text-[13px] mb-2 font-medium'>Current Password</span>
                            <input type="password" className='border-2 border-[#e5e5e5] text-[#212121] h-[35px] text-[14px] outline-0 w-1/3 px-3 ' />
                        </div>

                        <div className='flex items-center gap-7'>
                            <div className='flex flex-col w-1/3'>
                                <span className='text-[13px] mb-2 font-medium'>New Password</span>
                                <input type="password" className='border-2 border-[#e5e5e5] text-[#212121] h-[35px] text-[14px] outline-0 w-full px-3 ' />
                            </div>

                            <div className='flex flex-col w-1/3'>
                                <span className='text-[13px] mb-2 font-medium'>Confirm Password</span>
                                <input type="password" className='border-2 border-[#e5e5e5] text-[#212121] h-[35px] text-[14px] outline-0 w-full px-3 ' />
                            </div>
                        </div>

                        <Link href="" className='inline-block text-[14px] text-[#101010] bg-[#a2c95c] border border-[#a2c95c] py-2 px-3 font-bold  mt-7'>
                            Save
                        </Link>

                    </form>

                </div>



            </div>
        </>
    )
}

export default page
