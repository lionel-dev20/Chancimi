"use client"

import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import { BellDot, Menu, Search } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  const {user,isLoaded} = useUser();
  return (
    <div className='p-4 bg-white flex justify-between'>
      {/* Search bar */}
      <Menu className='mt-2 text-gray-500 sm:hidden'/>
        <div className='gap-2 border p-2 rounded-[4px] w-[350px]  sm:flex hidden'>
            <Search  className=' text-gray-500'/>
            <input type="text" placeholder="Quelque cours recherchez-vous ?" className='outline-none' />
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