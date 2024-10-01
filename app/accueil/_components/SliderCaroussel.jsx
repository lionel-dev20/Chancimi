"use client";

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

const data = [
  {
    id: 5,
    title: "",
    tagline: "",
    image: "/Slide4.png", // Image pour desktop
    mobileImage: "/mobilechancimiinscriptio.png", // Image pour mobile
    link: "/dashboard",
    buttons: [
      {
        id: 1,
        text: "Démarrer la formation",
        link: "/dashboard",
        type: "btn-dark btn-circle",
      },
    ],
  },
  {
    id: 1,
    title: "",
    tagline: "",
    image: "/Slidereutoecolechancimi.png", // Image pour desktop
    mobileImage: "/grandepromotion.png", // Image pour mobile
    link: "/dashboard",
    buttons: [
      {
        id: 1,
        text: "Démarrer la formation",
        link: "/dashboard",
        type: "btn-dark btn-circle",
      },
    ],
  },
  {
    id: 2,
    title: "",
    tagline: "",
    image: "/coursdelanguechancimi.png", // Image pour desktop
    mobileImage: "/coursdelangue2.png", // Image pour mobile
    link: "/tcfregister",
    buttons: [
      {
        id: 1,
        text: "Démarrer la formation",
        link: "/tcfregisterf",
        type: "btn-dark btn-circle",
      },
    ],
  },
  {
    id: 3,
    title: "",
    tagline: "",
    image: "/promotionchancimi.png", // Image pour desktop
    mobileImage: "/promotionautoecole.png", // Image pour mobile
    link: "/accueil/pricing",
    buttons: [
      {
        id: 1,
        text: "Démarrer la formation",
        link: "/tcfregisterf",
        type: "btn-dark btn-circle",
      },
    ],
  },
  {
    id: 4,
    title: "",
    tagline: "",
    image: "/permifacile.png", // Image pour desktop
    mobileImage: "/formulaireentreprise.png", // Image pour mobile
    link: "/dashboard",
    buttons: [
      {
        id: 1,
        text: "Démarrer la formation",
        link: "/dashboard",
        type: "btn-dark btn-circle",
      },
    ],
  },
  {
    id: 6,
    title: "",
    tagline: "",
    image: "/Slidelangue.png", // Image pour desktop
    mobileImage: "/langue.png", // Image pour mobile
    link: "/dashboard",
    buttons: [
      {
        id: 1,
        text: "Démarrer la formation",
        link: "/dashboard",
        type: "btn-dark btn-circle",
      },
    ],
  },
  // Ajoute d'autres slides si nécessaire
];

function SliderCaroussel() {
  return (
    <section className="w-full">
      <div className="sm:h-full relative">
        <Swiper
          navigation
          pagination={{ type: "bullets", clickable: true }}
          autoplay={true}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
        >
          {data.map(({ id, image, mobileImage, tagline, title, link, buttons }) => (
            <SwiperSlide key={id}>
              {/* Image background (desktop) */}
              <Link href={link}>
                <Image
                width={1920}
                height={840}
                  src={image}
                  alt={title}
                  className="hidden sm:block w-full h-full sm:mt-24 "
                />
              </Link>

              {/* Image mobile */}
              <Link href={link}>
                <Image
                width={600}
                height={600}
                  src={mobileImage}
                  alt={title}
                  className="block sm:hidden w-full h-full mt-[6.5rem]"
                />
              </Link>

              {/* Overlay with increased opacity for better text visibility */}
              <div className="relative  flex items-end justify-center pb-4">
                <div className="text-center px-4">
                  {tagline && (
                    <p className="text-md sm:text-xl lg:text-xl font-semibold text-white mb-3">
                      {tagline}
                    </p>
                  )}
                  <p className="text-3xl sm:text-6xl lg:text-5xl font-bold text-white">
                    {title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default SliderCaroussel;
