import React from 'react'

const page = () => {
    return (
        <>
            <div>

                <div className='mb-9'>
                    <div>
                        <h1 className='text-[20px] font-bold'>
                            Invoice Info
                        </h1>
                        <div className='bg-[#a2c95c] w-[50px] h-0.5 mt-1'></div>
                    </div>
                </div>

                <div>

                    <table className='w-full'>

                        <thead>
                            <tr>
                                <th className='border-b-2 border-[#a2c95c] py-[5px] px-2'>Invoice Number</th>
                                <th className='border-b-2 border-[#a2c95c] py-[5px] px-2'>Course Name</th>
                                <th className='border-b-2 border-[#a2c95c] py-[5px] px-2'>Invoice Date</th>
                                <th className='border-b-2 border-[#a2c95c] py-[5px] px-2'>Amount</th>
                                <th className='border-b-2 border-[#a2c95c] py-[5px] px-2'>Status</th>
                                <th className='border-b-2 border-[#a2c95c] py-[5px] px-2'>Payment Date</th>
                                <th className='border-b-2 border-[#a2c95c] py-[5px] px-2'>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th>No invoices found</th>
                            </tr>
                        </tbody>

                    </table>
                    
                </div>



            </div>
        </>
    )
}

export default page
