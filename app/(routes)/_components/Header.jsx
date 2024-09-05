"use client"

import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import { BellDot, Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const {user,isLoaded} = useUser();
  return (
    <div className='p-4 bg-white flex justify-between'>
      {/* Search bar */}
        <div className='flex gap-2 border p-2 rounded-[4px]'>
            <Search  className=' text-gray-500'/>
            <input type="text" placeholder="Search your courses..." className='outline-none' />
        </div>

        {/* Get start button  */}
        <div className='flex items-center gap-4'>
          <BellDot className=' text-gray-500'/>
          {
            isLoaded&&user ?<UserButton afterSignOutUrl='/courses' /> :
         
          <Link href={'/sign-in'}>
          <Button className="rounded-[4px]">Acceder aux cours</Button>
          </Link> }

        </div>
    </div>
  )
}

export default Header