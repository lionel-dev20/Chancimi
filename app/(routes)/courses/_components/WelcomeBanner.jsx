import Image from 'next/image'
import React from 'react'

const WelcomeBanner = () => {
  return (
    <div className='flex gap-5 items-center bg-white rounded-[4px] p-5'>
        <Image src="/car.gif" alt='Chancimi draving school' width={150} height={150} property/>
        <div>
          <h2 className='font-bold text-[32px]'>Welcome to <span className='text-primary'>Chancimi Driving School</span> Online</h2>
          <p className='text-gray-700'>Explore, Learn and Build All Real Life Projects</p>
        </div>
    </div>
  )
}

export default WelcomeBanner