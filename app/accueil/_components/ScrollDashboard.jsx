"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { Link } from "lucide-react";

export function ScrollDashboard() {
  return (
    (<div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              <span className="text-primary">Prépare ton examen du </span><br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Permis de conduire
              </span>
            </h1>
          </>
        }>
        <Image
          src={`/Google.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top mt-4"
          draggable={false} />
      </ContainerScroll>
      <p className="max-w-[890px] -mt-32 text-lg leading-8 text-gray-600 flex items-center mx-auto mb-20 text-center text-[17px]">Chancimi t&apos;accompagne tout au long de ta formation, suit tes progrès, et t&apos;apporte un calendrier regulier de cours pratique.
        Notre plateforme de cours vous propose des enseignements de conduite dispensés par des instructeurs diplomés et des experts de la pédagogie en ligne de le cadre de la conduite.
      </p>
      <div className="flex items-center justify-center mx-auto -mb-[2rem]">
      <Link href="/register" className="block w-full rounded-[4px] bg-primary px-3 py-4 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                S&apos;inscire maintenant
            </Link>
      </div>
    </div>)
  );
}
