import React from 'react'

function Newsletter() {
  return (
    <div>

<section className="">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
      Ne manquez pas nos dernières informations et promotions
      </h2>

      <p className="hidden mt-6 text-base leading-7 text-gray-600 sm:mt-4 sm:block">
      Inscrivez-vous à notre lettre d&apos;information afin de recevoir toutes les dernières actualités du centre de formation. Nos promotions et les annonces importantes concernant la plateforme.
      </p>
    </div>

    <div className="mx-auto mt-8 max-w-xl">
      <form action="#" className="sm:flex sm:gap-4">
        <div className="sm:flex-1">
          <label htmlFor="email" className="sr-only">Email</label>

          <input
            type="email"
            placeholder="Adresse e-mail"
            className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="group bg-primary mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition sm:mt-0 sm:w-auto"
        >
          <span className="text-sm font-medium"> S&apos;inscrire maintenant </span>

          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </form>
    </div>
  </div>
</section>
    </div>
  )
}

export default Newsletter