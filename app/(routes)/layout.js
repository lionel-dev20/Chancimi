import React from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'

function layout({children}) {
  return (
    <div>
        <div className='sm:w-64 sm:block fixed'>
            <SideNav />
        </div>

        {/* header section */}
        <div className='sm:ml-64'>
          <Header/>
        </div>
        <div className='sm:ml-64'>
        {children}
        </div>
    </div>
  )
}

export default layout