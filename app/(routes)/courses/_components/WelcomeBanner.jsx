import Image from 'next/image'
import React from 'react'

const WelcomeBanner = () => {
  return (
    <div className='flex gap-5 items-center bg-white rounded-[4px] p-5'>
        <Image src="/car.gif" alt='Chancimi draving school' width={150} height={150} property/>
        <div>
          <h2 className='font-bold text-[32px]'>Bienvenue sur <span className='text-primary'>Chancimi l&apos;auto école</span> En ligne</h2>
          <p className='text-gray-700'>Explorer, apprendre et passer son permi sans stresse c&apos;est notre objectif pour vous 🫵</p>
        </div>
    </div>
  )
}

export default WelcomeBanner