import React from 'react'
import HeroSection from './_components/HeroSection'
import HomeHearder from './_components/HomeHearder'
import Avantages from './_components/Avantages'

function page() {
  return (
    <div className='bg-[#f0f0f0]'>
      <HomeHearder />
        <HeroSection/>
        <div className='max-w-7xl p-4 mx-auto my-24'>
         <Avantages/>
        </div>
    </div>
  )
}

export default page