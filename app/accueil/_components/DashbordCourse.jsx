import Image from 'next/image'
import React from 'react'

function DashbordCourse() {
  return (
    <div className='flex flex-col my-32 justify-between items-center'>
        <h2 className='dark:text-white text-neutral-800 text-3xl font-bold mb-20 text-center'>
            Une plateforme d&apos;apprentissage faite sur mésure pour<br />  t&apos;aider à préparer ton examen de <span className="text-primary"> permis de conduire .</span> 
          </h2>
          <p className="max-w-[890px] -mt-10 mb-20 leading-6 text-gray-700 text-center text-[17px]">Chancimi t&apos;accompagne tout au long de ta formation, suit tes progrès, et t&apos;apporte un calendrier regulier de cours pratique.
        Notre plateforme de cours vous propose des enseignements de conduite dispensés par des instructeurs diplomés et des experts de la pédagogie en ligne de le cadre de la conduite.
      </p>
        <Image src='/Google.jpg' width={1200} height={800}  alt=''/>
    </div> 
  )
}

export default DashbordCourse