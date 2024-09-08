import Image from 'next/image'
import React from 'react'

function WelcomeBannerDashboard({user}) {
    return (
        <div className='flex gap-5 items-center bg-white rounded-[4px] p-5'>
            <Image src="/car.gif" alt='Chancimi draving school' width={150} height={150} property/>
            <div>
              <h2 className='font-bold text-xl sm:text-[32px] text-primary'>Bon retour 
                <span className='text-gray-700'> {user?.fullName}</span></h2>
              <h2 className='text-sm mt-4 sm:text-[16px] text-slate-500'>Continuons là, où vous vous êtes arrêté dernièrement,<br />
              Continuez à améliorer vos progrès
              </h2>
            </div>
        </div>
      )
}

export default WelcomeBannerDashboard