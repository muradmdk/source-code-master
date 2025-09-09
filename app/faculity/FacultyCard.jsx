import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FacultyCard = ({ data }) => {
    return (
        <div>
            <Link href="" className='block p-4 bg-white link-hover text-center'>
                <img src={data.avatar} alt={data.name} className="w-[240px] h-[240px] mb-[15px] mx-auto" />
                <h2 className="text-[16px] font-semibold text-[#101010] mb-2">{data.name}</h2>
            </Link>
        </div>
    )
}

export default FacultyCard
