import Image from 'next/image'
import React from 'react'

function TcfCanada() {
  return (
    <div>
        <section>
  <div className="mx-auto max-w-screen-4xl mt-10 px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="bg-primary p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Cours de langue TCF Canada
          </h2>

          <p className="hidden text-white/90 sm:mt-4 sm:block">
          Inscrivez-vous à notre cours de préparation TCF Canada chez Chancimi. Profitez d'une formation complète, de professeurs qualifiés, et d'un suivi personnalisé pour maximiser vos chances de réussite. Améliorez vos compétences linguistiques avec des cours interactifs et des ressources exclusives, tout en bénéficiant d&apos;une ambiance d'apprentissage motivante.
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
            >
              S&apos;inscrire maintenant
            </a>
          </div>
          <Image src='/canada.webp' width={120} height={120} alt='Canada' className='flex items-center mx-auto my-4 justify-center'/>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <Image
        width={284}
        height={500}
          alt="Inscription cours de lange TFC"
          src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        />

        <Image
         width={284}
         height={500}
          alt=""
          src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        />
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default TcfCanada