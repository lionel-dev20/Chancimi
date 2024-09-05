import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HomeHearder() {
  return (
    <div>
 <header className=" bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-[90px]">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <Link href='/'>
          <Image src='./Chancimi.svg' width={86} height={80} alt='logo' className='mt-8' />
        </Link>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        
        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <Link className="bg-primary rounded-[4px] px-5 py-2.5 text-sm font-medium text-white shadow"
              href="/sign-in"
            >
              Se connecter
            </Link>

            <div className="hidden sm:flex rouded-[4px]">
              <Link className="rounded-[4px] bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                href="sign-up"
              >
               Créer un compte
              </Link>
            </div>
          </div>

          <div className="block md:hidden">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

    </div>
  )
}

export default HomeHearder