import React from 'react'
import Image from 'next/image'

const Requirements = ({data}) => {
    return (
        <div className='p-5 border border-[#eeeeee] bg-white shadow-all-2'>
            <Image
                src={data.image}
                width={65}
                height={65}
                alt='requiemts'
                className='ml-auto'
            />
            <h2 className='text-[20px] font-bold text-[#101010] underline underline-offset-5 decoration-[#a2c95c] mb-4'>{data.title}</h2>
            <p className='text-[14px] line-clamp-1'>{data.text}</p>
        </div>
    )
}

export default Requirements
