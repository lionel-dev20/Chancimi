"use client"

import GlobalApi from '/app/_utils/GlobalApi'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function SideBanners() {
  const [sideBannerList, setSideBannerList] = useState([]); // Initialise avec un tableau vide

  useEffect(() => {
    getSideBanner();
  }, [])

  const getSideBanner = () => {
    GlobalApi.getSideBanner().then(resp => {
      setSideBannerList(resp.sideBanners || []); // Assure que c'est toujours un tableau
    })
  }

  return (
    <div>
      {sideBannerList.length > 0 ? ( // Vérifie si la liste n'est pas vide
        sideBannerList.map((item, index) => (
          <div key={index} className='rounded-[8px] mb-4 cursor-pointer p-3 bg-white'>
            <Image src={item.banner.url} width={500} height={300} alt='Banner' className='rounded-[8px] cursor-pointer'  onClick={()=>window.open(item?.url)}/>
          </div>
        ))
      ) :(
        [1,2].map((item, index) =>(
         <div key={index} className='w-full h-[210px] rounded-[8px] m-2 bg-slate-300 animate-pulse'>

         </div>
        ))
       )}
    </div>
  )
}

export default SideBanners
