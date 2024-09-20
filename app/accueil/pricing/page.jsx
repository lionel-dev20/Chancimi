import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
       
        <div className="bg-gradient-to-b h-screen from-pink-100 to-purple-200">
            <div className="container m-auto px-6  md:px-12 lg:px-20">
                <div className="m-auto text-center mt-44 lg:w-8/12 xl:w-7/12">
                    <h2 className="text-2xl text-gray-700 font-bold md:text-4xl mb-10">C&apos;est le choc des prix chez <span className='text-primary'>Chancimi</span> jusqu&apos;au 26 Septembre.</h2>
                    <p>Nos tarrif sont claire et sans frais cachés. Profitez de notre méga promotion sur les frais de formations dans un cadre VIP avec des moniteur dédiés à votre apprentissage.</p>
                </div>
                <div className=" mt-10 mb-44 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
                    <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-6/12">
                        <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                        <div className="relative p-6 space-y-6 lg:p-8">
                            <h3 className="text-3xl text-gray-700 font-semibold text-center">Economise jusqu&apos;</h3>
                            <div>
                                <div className="relative flex justify-around">
                                    <div className="flex items-end">
                                        <span className="text-8xl text-gray-800 font-bold leading-0">35</span>
                                        <div className="pb-2">
                                            <span className="block text-2xl text-gray-700 font-bold">%</span>
                                            <span className="block text-xl text-purple-500 font-bold"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul role="list" className="w-max space-y-4 py-6 m-auto text-gray-600">
                            <li className="space-x-2 flex gap-4">
                            <CheckCircle className='w-5 h-5' />
                                    <span>Inscription uniquement en ligne </span>
                                </li>
                                <li className="space-x-2 flex gap-4">
                                <CheckCircle className='w-5 h-5' />
                                <span>Constitution et dépot du dossier</span>
                                </li>
                                <li className="space-x-2 flex gap-4">
                                <CheckCircle className='w-5 h-5' />
                                    <span>Praparation théorique et pratique</span>
                                </li>
                            </ul>
                            <p className="flex items-center justify-center space-x-4 text-lg text-gray-600 text-center">
                                <span>Appelez-nous</span>
                                <a href="tel:+237675745918" className="flex space-x-2 items-center text-purple-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg>
                                    <span className="font-semibold">+237 675 745  918</span>
                                </a>
                                <span>ou</span>
                            </p>
                            <Link href='/register'>
                            <button type="button" title="Inscription" className="mt-5 block w-full py-3 px-6 text-center rounded-[4px] transition bg-primary hover:bg-red-700 active:bg-primary focus:bg-primary">
                                <span className="text-white font-semibold">
                                   S&apos;inscrire maintenant 
                                </span>
                            </button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative group md:w-6/12 lg:w-7/12">
                        <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"></div>
                        <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
                            <ul role="list" className="space-y-4 py-6 text-gray-600">
                                <li className="space-x-2 gap-4 flex mb-3">
                                    <CheckCircle />
                                    <span>Paiement en une tranche <span className='font-black'>49,900FCFA + 29,900 FCFA</span>  frais de doissier</span>
                                </li>
                                <li className="space-x-2 gap-4 flex mb-3">
                                    <CheckCircle className='w-10 h-10' />
                                    <span>Paiement en deux tranches <span className='font-black'>26,000FCFA + 29,900 FCFA</span> frais de doissier + <span className='font-black'>26,000 FCFA</span> 30 jours plutard</span>
                                </li>
                                <li className="space-x-2 gap-4 flex mb-3">
                                    <CheckCircle className='w-10 h-10' />
                                    <span>Paiement en trois tranches <span className='font-black'>18,000FCFA + 29,900 FCFA</span> frais de doissier + <span className='font-black'>18,000 FCFA</span> aprés chaque 30 jours</span>
                                </li>
                                <li className="space-x-2 gap-4 flex mb-3">
                                    <CheckCircle  className='' />
                                    Autre payement contactez-nous<span className='font-black'>+237 675 745  918</span>
                                </li>
                                
                               
                            </ul>
                            <p className="text-gray-700 text-sm">Vous pouvez si vous le souhaiter consultez nos termes et conditions de formation sur Chancimi en cliquant <Link href=''>ici</Link></p>
                            {/* <div className="mt-6 flex justify-between gap-6">
                                <Image width={100} height={100} className="w-16 lg:w-24" src="https://tailus.io/sources/blocks/organization/preview/images/clients/airbnb.svg" loading="lazy" alt="airbnb" />
                                    <Image width={100} height={100} className="w-8 lg:w-16" src="https://tailus.io/sources/blocks/organization/preview/images/clients/bissell.svg" loading="lazy" alt="bissell" />
                                        <Image width={100} height={100} className="w-6 lg:w-12" src="https://tailus.io/sources/blocks/organization/preview/images/clients/ge.svg" loading="lazy" alt="ge" />
                                            <Image width={100} height={100} className="w-20 lg:w-28" src="https://tailus.io/sources/blocks/organization/preview/images/clients/microsoft.svg" loading="lazy" alt="microsoft" />
                                            </div> */}
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    )
}

                    export default page