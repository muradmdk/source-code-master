import React from 'react'

const page = () => {
  return (
    <>
      <div>

        <div>
          <h1 className='text-[20px] font-bold'>
            My Bookmarks
          </h1>
          <div className='bg-[#a2c95c] w-[50px] h-0.5 mt-1'></div>
        </div>

        <div className='min-h-[80vh] flex items-center justify-center'>
          <p className='text-center font-semibold'>
            No courses added to the wish list.
          </p>
        </div>

      </div>
    </>
  )
}

export default page
