import { Book, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function HeroSection() {
  return (
    <section className="relative bg-[url('https://www.freepik.com/free-photo/close-up-woman-posing-out-window_10298689.htm#fromView=search&page=1&position=0&uuid=ba53e830-3b02-4d44-8574-5e23de28ffb3')] bg-cover bg-center bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Content */}
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Permettez-vous d&apos;avoir
            <strong className="block font-extrabold text-rose-500">
              votre permis en 3 mois.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Chancimi site n°1 en ligne de formation de conduite, et accompagnement jusqu&apos;à l&apos;obtention du permis au Cameroun.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href="/courses"
              className="flex items-center gap-2 rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              <Book />
              Commencer mon permis
            </Link>

            <Link
              href="/"
              className="flex items-center gap-2 rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              <MessageCircle />
              Message WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
