// import { Mail, MapPin, Phone } from 'lucide-react'
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md"
import React from 'react'

const page = () => {
    return (
        <div className='w-screen h-screen bg-[#101010] pt-4'>
            <div className="mx-30  bg-amber-300 flex">
                <div className='bg-[#222422] w-[700px] p-10'>
                    <h1 className='text-[#a2c95c] text-2xl font-bold'>Send us a Message</h1>
                    <h1 className='text-gray-400 pt-2 w-full text-[14px]'>Please complete the details below and then click on Submit and we’ll be in contact</h1>
                    <div className='grid grid-cols-2 pt-4'>
                        <div className=''>
                            <p className='text-gray-400'>Name*</p>
                            <input type="text" className="bg-[#1a1a1a] text-white px-2.5 border-b border-[#a2c95c] w-3xs py-2 mt-2 outline-none focus:outline-none focus:ring-1 focus:ring-[#a2c95c] focus:border-[#a2c95c]" />
                        </div>
                        <div className=''>
                            <p className='text-gray-400'>Email*</p>
                            <input type="text" className='bg-[#1a1a1a] text-white px-2.5 border-b border-[#a2c95c] w-3xs py-2 mt-2 outline-none focus:outline-none focus:ring-1 focus:ring-[#a2c95c] focus:border-[#a2c95c]' />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 pt-2'>
                        <div className=''>
                            <p className='text-gray-400'>Phone*</p>
                            <input type="text" className='bg-[#1a1a1a] text-white px-2.5 border-b border-[#a2c95c] w-3xs py-2 mt-2 outline-none focus:outline-none focus:ring-1 focus:ring-[#a2c95c] focus:border-[#a2c95c]' />
                        </div>
                        <div className=''>
                            <p className='text-gray-400'>Subject*</p>
                            <input type="text" className='bg-[#1a1a1a] text-white px-2.5 border-b border-[#a2c95c] w-3xs py-2 mt-2 outline-none focus:outline-none focus:ring-1 focus:ring-[#a2c95c] focus:border-[#a2c95c]' />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 pt-2'>
                        <div className='pt-2'>
                            <p className='text-gray-400'>Message*</p>
                            <textarea rows="5" className="bg-[#1a1a1a] text-white px-2.5 border-b border-[#a2c95c] w-[545px] p-3 mt-2 outline-none focus:outline-none focus:ring-1 focus:ring-[#a2c95c] focus:border-[#a2c95c] text-left align-top resize-none"
                            />
                        </div>
                    </div>
                    <button className='bg-black text-white font-bold w-[94%] py-2 mt-4 cursor-pointer hover:bg-[#a2c95c] hover:text-black'>Submit</button>
                </div>
                <div className='bg-white w-[500px] p-2'>
                    <h1 className='relative text-gray-100 text-center opacity-73 text-7xl font-bold tracking-wider'>Contact Us</h1>
                    <div className='absolute top-15 px-10'>
                        <div>
                            <h1 className='text-2xl font-bold' >Contact Information</h1>
                        </div>
                        <div>
                            <h1 className='text-lg font-bold mt-2'>Head Office</h1>
                        </div>
                        <div className='flex gap-2 mt-3'>
                            <MdLocationOn className="w-4 h-4 text-[#a2c95c] self-center" />
                            <p>Crawley, United Kingdom</p>
                        </div>
                        <div>
                            <h2 className='mt-1 font-bold'>For all international queries:</h2>
                        </div>
                        <div className='flex gap-2 mt-1'>
                            <MdEmail className="w-6 h-5 text-[#a2c95c]" />
                            <a className='underline' href="info@sourcecodeacademy.co.uk">info@sourcecodeacademy.co.uk</a>
                        </div>
                        <div className='flex gap-2 mt-1'>
                            <MdPhone className="w-4 h-4 text-[#a2c95c] self-center" />
                            <a className='underline' href="+442031500010">+442031500010</a>
                        </div>
                        <div className=''>
                            <h1 className='text-lg font-bold mt-7'>Pakistan Office</h1>
                        </div>
                        <div className="flex gap-2 mt-1">
                            <MdLocationOn className="w-4 h-4 text-[#a2c95c] self-center" />
                            <p> Islamabad, Pakistan</p>
                        </div>
                        <div>
                            <h2 className='mt-1 font-bold'>For all Pakistan-based queries:</h2>
                        </div>
                        <div className="flex gap-2 mt-1">
                            <MdEmail className="w-4 h-4 text-[#a2c95c] self-center" />
                            <a className='underline' href="info@sourcecode.com.pk">info@sourcecode.com.pk</a>
                        </div>
                        <div className="flex gap-2 mt-1">
                            <MdPhone className="w-4 h-4 text-[#a2c95c] self-center" />
                            <a className='underline' href="+92 317 1119981">+92 317 1119981</a>
                        </div>
                        <div className="flex align-middle gap-2 mt-1">
                            <BsWhatsapp className='w-4 h-4 text-[#a2c95c] self-center' />
                            <a className='underline' href="+92 317 1119981">+92 317 1119981</a>
                        </div>
                        <div className="flex gap-2 mt-1">
                            <MdPhone className="w-4 h-4 text-[#a2c95c] self-center" />
                            <a className='underline' href="+92 311 1177739">+92 311 1177739</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page
