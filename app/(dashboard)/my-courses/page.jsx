import React from 'react'

const page = () => {
  return (
    <>
      <div>

        <div>
          <h1 className='text-[20px] font-bold'>
            My Course
          </h1>
          <div className='bg-[#a2c95c] w-[50px] h-0.5 mt-1'></div>
        </div>

        <div className='min-h-[80vh] flex items-center justify-center'>
          <p className='text-center font-semibold'>
            You are not enrolled in any Course
          </p>
        </div>

      </div>
    </>
  )
}

export default page
