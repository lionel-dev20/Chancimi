import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>

      <div className="sm:h-screen p-4 my-32 sm:my-16">
        <div className="max-w-5xl max-lg:max-w-3xl mx-auto sm:py-20">
          <div className="text-center my-10">
            <h2 className="text-gray-800 text-2xl sm:text-3xl font-bold mb-3">Choisseez votre méthode de paiement</h2>
            <p className="text-sm text-gray-700">Nous proposons des méthodes de paiements flexible et accéssible à tous </p>
          </div>

          {/* <div className="flex mx-auto mt-12 bg-gray-100 rounded-full max-w-[200px]">
            <button className="text-white w-full text-sm bg-blue-600 py-2.5 px-5 rounded-full">
              Regular</button>
            <button
              className="text-gray-500 w-full text-sm py-2.5 px-5 rounded-full">
              Premium</button>
          </div> */}

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-6 max-sm:max-w-sm max-sm:mx-auto">
            <div className="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-lg overflow-hidden transition-all bg-white duration-500 hover:scale-105">
              <div className="h-32 bg-gray-700 text-center p-4">
                <h3 className="text-2xl text-white mb-1">Plan Basic</h3>
                <p className="text-xs text-white">Paiement 3 tranches</p>
              </div>

              <div className="h-40 w-40 mx-auto -mt-12 shadow-xl rounded-full bg-gray-700 text-white border-[3px] flex flex-col items-center justify-center border-white">
                <h3 className="text-2xl">50,400 FCFA</h3>
              </div>

              <div className="px-6 py-4 mt-4">
                <ul className="space-y-4">
                  <li className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    2éme tranche 18,000 FCFA aprés 30 jours
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    3éme tranche 18,000 FCFA derniére
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Accés à vie au cours
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Séance pratique
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Exercices de préparations
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Support ( 1 mois )
                  </li>
                </ul>

                <Link href='https://me.lygosapp.com/WScU2mBg'>
                  <button type="button" className="w-full mt-8 px-5 py-2.5 text-sm text-white bg-gray-700 hover:bg-gray-800 rounded-full">S&lsquo;inscrire maintenant</button>
                </Link>
              </div>
            </div>

            <div className="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-lg overflow-hidden transition-all bg-white duration-500 hover:scale-105 relative">
              <span className="px-2 py-1 text-[10px] font-semibold text-white bg-orange-400 rounded-lg ml-3 absolute -left-4 top-0">Most popular</span>
              <div className="h-32 bg-blue-600 text-center p-4">
                <h3 className="text-2xl text-white mb-1">Plan standard </h3>
                <p className="text-xs text-white">Paiement en 2 tranches</p>
              </div>

              <div className="h-40 w-40 mx-auto -mt-12 shadow-xl rounded-full bg-blue-600 text-white border-[3px] flex flex-col items-center justify-center border-white">
                {/* <p className="text-[10px] font-bold">Save 29%</p> */}
                <h3 className="text-2xl">59,850 FCFA</h3>
              </div>

              <div className="px-6 py-4 mt-4">
                <ul className="space-y-4">
                  <li className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    2éme tranche 27,000 FCFA aprés 30 jours
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Accés à vie au cours
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Séance pratique
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Exercices de préparations
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Séance en présentielle           </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Support ( 3 mois )
                  </li>
                </ul>
                <Link href='https://me.lygosapp.com/DRFEmxUq'>
                <button type="button" className="w-full mt-8 px-5 py-2.5 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-full">Souscrire maintenant</button>
                </Link>
              </div>
            </div>

            <div className="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-lg overflow-hidden transition-all bg-white duration-500 hover:scale-105">
              <div className="h-32 bg-primary text-center p-4">
                <h3 className="text-2xl text-white mb-1">Plan VIP</h3>
                <p className="text-xs text-white">Paiement en 1 tranche</p>
              </div>

              <div className="h-40 w-40 mx-auto -mt-12 shadow-xl rounded-full bg-primary text-white border-[3px] flex flex-col items-center justify-center border-white">
                {/* <p className="text-[10px] font-bold">Save 33%</p> */}
                <h3 className="text-2xl">84,000 FCFA</h3>
              </div>

              <div className="px-6 py-4 mt-4">
                <ul className="space-y-4">
                  <li className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Accés à vie au cours                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Séance pratique
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Exercices de préparations
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Séance en présentielle                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Accompagnement personnalisé
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                    </svg>
                    Support ( 5 mois )
                  </li>
                </ul>
                
                <Link href='https://me.lygosapp.com/ZXPSeuqK'>
                <button type="button" className="w-full mt-8 px-5 py-2.5 text-sm text-white bg-primary hover:bg-red-500 rounded-full">Souscrire maintenant</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page