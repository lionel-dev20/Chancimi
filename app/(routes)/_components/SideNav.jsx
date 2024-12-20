"use client"

import { useUser } from "@clerk/nextjs";
import { BadgeIcon, BookOpen, GraduationCap, LayoutDashboard, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SideNav = () => {
  const { user } = useUser();
  const path = usePathname();

  const [openMenu, setOpenMenu] = useState(false);

  const menu = [
    {
      id: 7,
      name: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard',
      auth: user,
    },
    {
      id: 1,
      name: 'Les cours',
      icon: BookOpen,
      path: '/courses',
      auth: true,
    },
    {
      id: 2,
      name: 'Séances pratique',
      icon: BadgeIcon,
      path: '/booking-car',
      auth: true,
    },
    {
      id: 3,
      name: 'Devenir Ambassadeur',
      icon: GraduationCap,
      path: '/beinstructor',
      auth: true,
    },
  ];

  const toggleSidebar = () => setOpenMenu(!openMenu);
  const closeSidebar = () => setOpenMenu(false);

  return (
    <div className="relative">
    <div className="absolute bg-white h-screen z-50 border border-t-0 border-r-[1px] border-opacity-25 shadow-sm">
      {/* Bouton pour ouvrir le menu sur mobile */}
      <button
        onClick={toggleSidebar}
        className="sm:hidden fixed top-4 left-4 z-50 bg-primary p-2 rounded-full text-white"
      >
        <Menu size={24} />
      </button>

      {/* Menu latéral */}
      <div
        className={`fixed top-0 left-0 h-full bg-white p-5 shadow-sm border z-50 transition-transform duration-300 sm:translate-x-0 ${
          openMenu ? 'translate-x-0' : '-translate-x-full'
        } sm:block sm:relative sm:top-auto sm:left-auto sm:h-auto sm:bg-transparent sm:shadow-none sm:border-none`}
      >
        {/* Bouton de fermeture sur mobile */}
        {openMenu && (
          <button
            onClick={closeSidebar}
            className="sm:hidden absolute top-4 right-4 z-50 bg-red-600 p-2 rounded-full text-white"
          >
            <X size={24} />
          </button>
        )}

        <Link href={'/'}>
          <Image src="/Chancimi.png" width={80} height={80} alt="Chancimi" />
        </Link>

        <hr className="mt-5" />

        <div className="mt-8">
          {menu.map((item, index) =>
            item.auth && (
              <Link href={item.path} key={index} onClick={closeSidebar}>
                <div
                  className={`group flex gap-3 mt-2 p-3 text-gray-700 items-center hover:bg-primary cursor-pointer hover:text-white rounded-[4px] transition-all ease-in-out duration-200 ${
                    path.includes(item.path) && 'bg-primary text-white'
                  }`}
                >
                  <item.icon className="group-hover:animate-bounce" />
                  <h2>{item.name}</h2>
                </div>
              </Link>
            )
          )}
        </div>
      </div>

      {/* Overlay pour fermer le menu en cliquant à l'extérieur sur mobile */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
    </div>
  );
};

export default SideNav;
