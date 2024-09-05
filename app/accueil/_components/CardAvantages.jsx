import Image from 'next/image';
import React from 'react';

function CardAvantages() {
  return (
    <div className='grid md:grid-cols-3 gap-5'>
      <div className="product-card shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start rounded-[8px] shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
        <div className="absolute -left-[25%] top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
          <div className="flex gap-1">
            <svg
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1"
              fill="none"
              viewBox="0 0 24 24"
              className="fill-sky-500 rotate-[24deg]"
              height="210"
              width="210"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
        </div>
        <div className="absolute rounded-full bg-green-500 z-20 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"></div>
        <div className="para uppercase text-center leading-none z-40">
          <p className="text-black font-semibold text-xs">Vos cours sont</p>
          <p className="font-bold text-xl tracking-wider text-primary">Accésible partout</p>
        </div>
        <div className="bottom-0 z-40 rounded-md">
          <Image src='/courenligne.png' width={350} height={315} alt='cours disponible partout' className='-mb-12' />
        </div>
        <div className="btm-_container z-40 flex flex-row justify-between items-end gap-10">

        </div>
      </div>
      <div className="product-card shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start rounded-[8px] shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
        <div className="absolute -left-[25%] top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
          <div className="flex gap-1">
            <svg
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1"
              fill="none"
              viewBox="0 0 24 24"
              className="fill-orange-500 rotate-[24deg]"
              height="210"
              width="210"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
        </div>
        <div className="absolute rounded-full bg-primary z-20 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"></div>
        <div className="para uppercase text-center leading-none z-40">
          <p className="text-black font-semibold text-xs">Reservez une séance</p>
          <p className="font-bold text-xl tracking-wider text-primary">Cours 100% Pratique</p>
        </div>
        <div className=" bottom-0 z-40 rounded-md">
          <Image src='/courspratique.jpeg' width={250} height={345} alt='cours disponible partout' />
        </div>
        <div className="btm-_container z-40 flex flex-row justify-between items-end gap-10">

        </div>
      </div>





      <div className="product-card shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start rounded-[8px] shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
        <div className="absolute -left-[25%] top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
          <div className="flex gap-1">
            <svg
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1"
              fill="none"
              viewBox="0 0 24 24"
              className="fill-green-500 rotate-[24deg]"
              height="210"
              width="210"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
        </div>
        <div className="absolute rounded-full bg-sky-500 z-20 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"></div>
        <div className="para uppercase text-center leading-none z-40">
          <p className="text-black font-semibold text-xs">Vos cours sont</p>
          <p className="font-bold text-xl tracking-wider text-primary">Accésible partout</p>
        </div>
        <div className="w-28 bottom-0 z-40 rounded-md">
          <Image src='' width={250} height={345} alt='cours disponible partout' />
        </div>
        <div className="btm-_container z-40 flex flex-row justify-between items-end gap-10">

        </div>
      </div>
    </div>
  );
}

export default CardAvantages;
