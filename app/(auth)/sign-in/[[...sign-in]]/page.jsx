"use client"


import { SignIn, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Page() {
  const { isLoaded, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Redirige l'utilisateur connecté vers une autre page (par exemple, dashboard)
    if (isLoaded && user) {
      router.push('/dashboard'); // Ou toute autre page appropriée
    }
  }, [isLoaded, user, router]);

  // Affiche un écran de chargement ou rien si l'utilisateur est déjà connecté
  if (!isLoaded || user) {
    return null; // Ou un spinner/loading indicator
  }

  // Affiche le composant SignIn si l'utilisateur n'est pas connecté
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt="Auto ecole chancimi"
            width={800}
            height={1000}
            src="/Autoecolechancimidriving.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
              <svg
                className="h-8 sm:h-10"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG path */}
              </svg>
            </a>

            {/* <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Squid 🦑
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum
              aliquam, quibusdam aperiam voluptatum.
            </p> */}
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#"
              >
                <span className="sr-only">Home</span>
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG path */}
                </svg>
              </a>
            </div>

            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}
