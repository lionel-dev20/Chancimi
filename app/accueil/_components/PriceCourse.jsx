import Link from 'next/link'
import React from 'react'

function PriceCourse() { 
  return (
    <div>
        <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl sm:text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Une tarification simple et sans <span className='ml-2 text-primary'>frais cachés</span></h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</p>
    </div>
    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-12 lg:mx-0 lg:flex lg:max-w-none">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Accès à vie au cours</h3>
        <p className="mt-6 text-base leading-7 text-gray-600">Bénéficies d&apos;un accés à vie au cours au quel tu souscris et reste à jours avec les derniéres mises à jours sur ces cours.</p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-blue-500">Qu&apos;inclut cette inscription</h4>
          <div className="h-px flex-auto bg-gray-100"></div>
        </div>
        <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            Accès au cours en ligne
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            Rendez-vous cours pratique
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            Constitution du dossier d&apos;examen
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
           Accompagnement personnalisé
          </li>
        </ul>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-base font-semibold text-gray-600">Payer une fois, être propriétaire pour toujours</p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">49,900</span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">FCFA</span>
            </p>
            <Link href="/register" className="mt-10 block w-full rounded-[4px] bg-primary px-3 py-4 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                S&apos;inscire maintenant
            </Link>
            <p className="mt-6 text-xs leading-5 text-gray-600">Après inscription notre équipe vérifira vos informations et les documents fournir avant activation de votre cours</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default PriceCourse