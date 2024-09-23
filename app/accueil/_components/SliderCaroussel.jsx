"use client";

import React from 'react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    title: "",
    tagline: "",
    image: "/autoecolechancimi.jpg",
    buttons: [
      {
        id: 1,
        text: "Démarrer la formation",
        link: "/dashboard",
        type: "btn-dark btn-circle"
      }
    ]
  },
  // {
  //   id: 2,
  //   title: "",
  //   tagline: "",
  //   image: "/Chancimi-Auto-Ecole1.jpg",
  //   buttons: [
  //     {
  //       id: 1,
  //       text: "Voir les tarifs",
  //       link: "/accueil/pricing",
  //       type: "btn-dark btn-circle"
  //     }
  //   ]
  // },
  // {
  //   id: 3,
  //   title: "",
  //   tagline: "",
  //   image: "/Chancimi-Auto-Ecole2.jpg",
  //   buttons: [
  //     {
  //       id: 1,
  //       text: "Voir les cours",
  //       link: "/dashboard",
  //       type: "btn-dark btn-circle"
  //     }
  //   ]
  // },
  // {
  //   id: 4,
  //   title: "",
  //   tagline: "",
  //   image: "/Chancimi-Auto-Ecole3.jpg",
  //   buttons: [
  //     {
  //       id: 1,
  //       text: "S'inscrire maintenant",
  //       link: "/sign-in",
  //       type: "btn-dark btn-circle"
  //     }
  //   ]
  // },
  // {
  //   id: 5,
  //   title: "",
  //   tagline: "",
  //   image: "/Chancimi-Auto-Ecole4.jpg",
  //   buttons: [
  //     {
  //       id: 1,
  //       text: "S'inscrire maintenant",
  //       link: "/sign-in",
  //       type: "btn-dark btn-circle"
  //     }
  //   ]
  // }
];

function SliderCaroussel() {
  return (
    <section className="w-full">
      <div className="h-[480] relative">
        <ul className="h-full w-full">
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {data.map(({ id, image, tagline, title, buttons }) => (
              <SwiperSlide key={id}>
                {/* Image background */}
                <div
                  className="h-full w-full absolute mt-24"
                  style={{
                    background: `url(${image}) center center / contain scroll no-repeat`,
                  }}
                ></div>
                {/* Overlay with increased opacity for better text visibility */}
                <div className="h-full w-full"></div>
                <div className="relative z-10 h-[50rem] flex items-end justify-center pb-16">
                  <div className="text-center px-4"> {/* Added padding for text responsiveness */}
                    {tagline && (
                      <p className="text-md sm:text-xl lg:text-xl font-semibold text-white mb-3">
                        {tagline}
                      </p>
                    )}
                    <p className="text-3xl sm:text-6xl lg:text-5xl font-bold text-white">
                      {title}
                    </p>
                    {buttons.length > 0 ? (
                      <a href={buttons[0].link} className="bg-primary rounded-[4px] inline-block px-9 py-4  text-white mt-4 lg:mt-8">
                        {buttons[0].text}
                      </a>
                    ) : null}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
}

export default SliderCaroussel;
