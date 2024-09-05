import React from 'react'
import Image from 'next/image'


function LogoPaid() {
  return (
    <div>
   <Image src="/paid.png" width={24} height={24} alt='free course' priority />
    </div>
  )
}

export default LogoPaid