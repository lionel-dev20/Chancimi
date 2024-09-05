import Image from 'next/image'
import React from 'react'

function LogoFree() {
  return (
    <div>
        <Image src="./free.png" width={24} height={24} alt='free course' priority />
    </div>
  )
}

export default LogoFree