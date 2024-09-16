import React from 'react'
import HomeHearder from './_components/HomeHearder'
import CardCourseHome from './_components/CardCourseHome'
import SliderCaroussel from './_components/SliderCaroussel'
import { Testimonial } from './_components/Testimonial'
import PriceCourse from './_components/PriceCourse'
import CtaFooter from './_components/CtaFooter'
import Newsletter from './_components/Newsletter'
import Footer from './_components/Footer'
import { BentoPermis } from './_components/BentoPermis'
import { ScrollDashboard } from './_components/ScrollDashboard'
import Faq from './_components/Faq'
import TcfCanada from './_components/TcfCanada'

function page() {
  return (
    <div className='bg-[#fff]'>
      {/* <HomeHearder /> */}
        {/* <HeroSection/> */}
        <SliderCaroussel />
        <div className='max-w-7xl p-4 mx-auto my-16'>
         <CardCourseHome />
         <BentoPermis />
         {/* <DashbordCourse /> */}
         <ScrollDashboard/>
         <Testimonial /> 
         <TcfCanada />
         <PriceCourse />
         <Faq/>
         <CtaFooter />
         <Newsletter />
        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default page