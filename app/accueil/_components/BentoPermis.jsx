"use client"



import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function BentoPermis() {
  return (
    <div className="mt-32">
      <div className="flex flex-col justify-between items-center">
        <h2 className="dark:text-white sm:w-[46rem] items-center justify-center mx-auto text-neutral-800 text-3xl font-bold mb-2 text-center">
          Type de permis à préparer avec notre auto école Chancimi en toute 
          <span className="text-primary">sécurité et assurance</span>
        </h2>

        <p className="max-w-[890px] mb-12 mt-6 text-lg leading-8 text-gray-600">
        Au Cameroun, chaque catégorie de permis de conduire a des exigences spécifiques, 
        en fonction du type de véhicule que vous souhaitez conduire. Voici un récapitulatif 
        détaillé des conditions pour chaque catégorie de permis
        </p>
      </div>

      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial" 
      whileHover="animate"
      className="flex flex-1 w-full  bg-dot-black/[0.2] flex-col space-y-6"
    > 
      <Image src="/permisa.png" alt="image" width={390} height={290} loading="lazy" className="rounded-t-lg mb-4"/>
  
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
    initial="initial"
    whileHover="animate"
    className="flex flex-1 w-full h-full max-h-96 pb-4  bg-dot-black/[0.2] flex-col space-y-6"
  > 
    <Image src="/permisb.png" alt="image" width={390} height={390} loading="lazy" className="rounded-t-lg"/>

  </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
    initial="initial"
    whileHover="animate"
    className="flex flex-1 w-full pb-4  bg-dot-black/[0.2] flex-col space-y-6"
  > 
    <Image src="/permisc.png" alt="image" width={390} height={390} loading="lazy" className="rounded-t-lg"/>

  </motion.div>
  );
};


const SkeletonFour = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
    initial="initial"
    whileHover="animate"
    className="flex flex-1 w-full pb-4  bg-dot-black/[0.2] flex-col space-y-6"
  > 
    <Image src="/permisd.png" alt="image" width={390} height={390} loading="lazy" className="rounded-t-lg"/>

  </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
    initial="initial"
    whileHover="animate"
    className="flex flex-1 w-full pb-4  bg-dot-black/[0.2] flex-col space-y-6"
  > 
    <Image src="/permise.png" alt="image" width={390} height={390} loading="lazy" className="rounded-t-lg"/>

  </motion.div>
  );
};


const SkeletonSix = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
    initial="initial"
    whileHover="animate"
    className="flex flex-1 w-full pb-4  bg-dot-black/[0.2] flex-col space-y-6"
  > 
    <Image src="/permisf.png" alt="image" width={390} height={390} loading="lazy" className="rounded-t-lg"/>

  </motion.div>
  );
};

const SkeletonSeven = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
    initial="initial"
    whileHover="animate"
    className="flex flex-1 w-full pb-4  bg-dot-black/[0.2] flex-col space-y-6"
  > 
    <Image src="/permisg.png" alt="image" width={390} height={390} loading="lazy" className="rounded-t-lg"/>

  </motion.div>
  );
};
const SkeletonNeight = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
    initial="initial"
    whileHover="animate"
    className="flex flex-1 w-full pb-4  bg-dot-black/[0.2] flex-col space-y-6"
  > 
    <Image src="/T.png" alt="image" width={390} height={390} loading="lazy" className="rounded-t-lg"/>

  </motion.div>
  );
};

const Skeletonheit = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
    initial="initial"
    whileHover="animate"
    className="flex flex-1 w-full pb-4  bg-dot-black/[0.2] flex-col space-y-6"
  > 
    <Image src="/Recyclage.png" alt="image" width={390} height={390} loading="lazy" className="rounded-t-lg"/>

  </motion.div>
  );
};

const items = [
  {
    title: "Permis A",
    description: (
      <span className="text-sm">
Permis pour les motocyclettes <br/>

</span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Permis B",
    description: (
      <span className="text-sm">
 Permis pour véhicules légers <br/>

 </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Permis C",
    description: (
      <span className="text-sm">
Permis pour véhicules de transport de marchandises <br/>

</span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Permis D",
    description: (
      <span className="text-sm">
Permis pour Bus <br/>

</span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Permis E",
    description: (
      <span className="text-sm">
Permis pour camions <br/>

</span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Permis f",
    description: (
      <span className="text-sm">
Permis pour engin lourd <br/>

</span>
    ),
    header: <SkeletonSix/>,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Permis G",
    description: (
      <span className="text-sm">
véhicules agricoles et forestiers <br/>

</span>
    ),
    header: <SkeletonSeven/>,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Permis T",
    description: (
      <span className="text-sm">
Permis pour les Taxi <br/>

</span>
    ),
    header: <SkeletonNeight />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Recyclage",
    description: (
      <span className="text-sm">
        Réviser les bons reflex du code de la route
      </span>
    ),
    header: <Skeletonheit />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
