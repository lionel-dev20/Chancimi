import Image from 'next/image'
import React from 'react'

function WelcomeBannerDashboard({user}) {
    return (
        <div className='flex gap-5 items-center bg-white rounded-[4px] p-5'>
            <Image src="/car.gif" alt='Chancimi draving school' width={150} height={150} property/>
            <div>
              <h2 className='font-bold text-[32px] text-primary'>Welcome Back 
                <span className='text-gray-700'> {user?.fullName}</span></h2>
              <h2 className='text-[16px] font-light text-slate-500'>Lets Begin llearning where you left off,<br />
                Keep it up improve your progress
              </h2>
            </div>
        </div>
      )
}

export default WelcomeBannerDashboard