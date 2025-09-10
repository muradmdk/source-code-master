import React from 'react'
import Link from 'next/link'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const page = () => {
  return (
    <>
      <div className='mt-5'>
        {/* Row */}
        <div className='flex justify-between flex-wrap mx-[-15px]'>

          {/* Column 1 */}
          <div className='w-[100%] max-w-[62%] flex-[62%] min-h-[1px] px-[15px]'>
            <div>

              <div className='mb-9'>
                <h1 className='text-[20px] font-bold'>
                  📢 Announcements
                </h1>
                <div className='bg-[#a2c95c] w-[50px] h-0.5 mt-1'></div>
              </div>

              <div className=' border-t-2 border-[#a2c95c] p-5 mb-7 bg-white'>

                <Dialog>

                  <DialogTrigger>
                    <div className='text-[#201f1f] text-[16px] leading-[1.4] cursor-pointer hover:underline'>
                      ❗ Important Fee Payment Update
                    </div>
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        ❗ Important Fee Payment Update
                      </DialogTitle>
                      <DialogDescription>
                        🛑 Bank transfers are no longer accepted for fee payments.
                        <br />
                        <br />
                        🔹 If you have a PKR invoice, please pay using card or the new QR code system.
                        <br />
                        <br />
                        🔹 If you have a USD invoice, you can pay using card only.
                        <br />
                        <br />
                        Thank you for your cooperation.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>

                </Dialog>

                <div className='flex items-center justify-between text-[#6c757d] text-[13px] mt-1.5'>
                  <span>from Management</span>
                  <span>1 month ago</span>
                </div>

              </div>

              <div>

                <div className='flex items-center justify-between mb-7'>
                  <div>
                    <h1 className='text-[20px] font-bold'>
                      My Quiz
                    </h1>
                    <div className='bg-[#a2c95c] w-[50px] h-0.5 mt-1'></div>
                  </div>
                  <Link href="" className='text-[#282822] text-[14px] flex items-center font-bold opacity-[0.5]'>
                    See All
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ml-2" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                    </svg>
                  </Link>
                </div>

                <div className='border-2 border-[#e7e7e7] py-4 bg-white'>
                  <p className='text-center'>
                    No Quiz Assigned
                  </p>
                </div>

              </div>


            </div>
          </div>

          {/* Column 2 */}
          <div className='w-[100%] max-w-[36%] flex-[36%] min-h-[1px] px-[15px]'>
            <div className='mb-9'>
              <h1 className='text-[20px] font-bold'>
                Upcoming Classes
              </h1>
              <div className='bg-[#a2c95c] w-[50px] h-0.5 mt-1'></div>
            </div>
            <div className='border-t-2 border-[#a2c95c] p-5 mb-7 bg-white'>
              <p className='text-center'>
                Upcoming classes not found
              </p>
            </div>
          </div>

        </div>


      </div>
    </>
  )
}

export default page
