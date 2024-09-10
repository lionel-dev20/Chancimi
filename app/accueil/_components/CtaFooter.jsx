import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CtaFooter() {
  return (
    <div>
<section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        Vous etes intéressé par un permis en particulier ou un recyclage ?
      </h2>

      <p className="hidden text-gray-500 md:mt-4 md:block text-left">
        Consultez notre catalogue de cours en ligne, il couvre pratiquement tous les types de permis,
        permi type A, type B, C, D et tous les autres également. Si vous etes intérré par une séance de recyclage des 
        cours sont également sur notre plateforme . Alors n&apos;hésitez plus consultez notre catalogue en cliquant juste le 
        bouton ci-dessous
      </p>
      <Image src='/Arrows.webp' width={200} height={200} alt="suivre la formation d'auto école"  className='flex items-center mx-auto my-6'/>
      

      <div className="mt-4 md:mt-8">
      <Link href="/register" className="mt-10 block w-full rounded-[4px] bg-primary px-3 py-4 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Consultez les formation maintenant
            </Link>
      </div>
    </div>
  </div>

  <Image
    alt=""
    src="/cta.png"
    width={800}
    height={640}
    className="h-56 w-full object-cover sm:h-full"
  />
</section>
    </div>
  )
}

export default CtaFooter