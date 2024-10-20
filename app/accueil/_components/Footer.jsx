import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='relative z-10'>
      <footer className="bg-gray-50 bottom-0 ">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex justify-center text-teal-600 sm:justify-start">
          <Image src='/Chancimi.svg' width={64} height={64} alt='Chancimi' />
        </div>
  
        <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
          Copyright &copy; 2022. All rights reserved Chancimi.
        </p>
      </div>
    </div>
  </footer></div>
  )
}

export default Footer