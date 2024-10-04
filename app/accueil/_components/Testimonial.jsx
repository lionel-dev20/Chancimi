"use client";

import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Julie Esso",
    username: "@jack",
    body: "Trés bon de centre de formation je recommande vivement.",
    img: "/profil1.webp",
  },
  {
    name: "Marie Thérèse",
    username: "@jill",
    body: "Les cours pratique sont trés cool merci encore Chancimi",
    img: "/profil2.webp",
  },
  {
    name: "John Alain",
    username: "@john",
    body: "Bon suivit des apprenant merci Chancimi",
    img: "/profil4.webp",
  },
  {
    name: "Vanessa Annie",
    username: "@jane",
    body: "Bonne plateforme pour reviser son examen de permis",
    img: "/profil3.webp",
  },
  {
    name: "Francis Paul",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/profil5.webp",
  },
  {
    name: "Jean-jacque",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/profil6.webp",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonial() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden  bg-background">
        <h2 className="text-3xl font-bold flex items-center mb-6">Ils nous ont fait confiance pour leur <span className="text-primary ml-2"> formation</span></h2>
        <p className="max-w-[44rem] mb-10 mt-6 text-lg leading-8 text-gray-600">Vous aussi vous pouvez le faire, comme tous nos autres édutiants l&apos;ont fait, laisse vous guider et accompagner tout au long de votre apprentissage de conduire avec notre école Chancimi .</p>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
