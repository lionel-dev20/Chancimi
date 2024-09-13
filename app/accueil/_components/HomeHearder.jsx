import MenuNav from '@/components/MenuNav'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HomeHearder() {
  return (
    <div>
 <header className=" bg-white relative z-20">
  <div className="fixed top-0 left-0 right-0 backdrop-blur-sm bg-white/20">
    <div className="flex mx-auto max-w-7xl items-center justify-between px-1">

      <div className="flex gap-6 items-center justify-around">
        <Link href='/'>
          <Image src='./Chancimi.svg' width={86} height={80} alt='logo' className='my-2' />
        </Link>
        <MenuNav />
      </div>


      <div className="">
          <div className="flex items-center md:gap-4">
            <Link className="bg-primary rounded-[4px] px-5 py-2.5 text-sm font-normal text-white shadow"
              href="/sign-in"
            >
              Se connecter
            </Link>

            <div className="hidden sm:flex rouded-[4px]">
              <Link className="rounded-[4px] bg-gray-100 px-5 py-2.5 text-sm font-normal text-teal-900"
                href="sign-up"
              >
               Créer un compte
              </Link>
            </div>
          </div>

          {/* <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div> */}
      </div>
    </div>
  </div>
</header>

    </div>
  )
}

export default HomeHearder