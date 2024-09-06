"use client"

import { useUser } from "@clerk/nextjs";
import { BadgeIcon, BookOpen, GraduationCap, LayoutDashboard, LayoutGrid, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SideNav = () => {
  const {user} = useUser();
  const menu = [
    {
      id:7,
      name: 'Dashboard',
      icon: LayoutDashboard,
      path : '/dashboard',
      auth: user
    
    },

    {
      id:1,
      name: 'Les cours',
      icon: BookOpen,
      path : '/courses',
      auth: true
    },
    {
      id:2,
      name: 'Séances pratique',
      icon: BadgeIcon,
      path: '/booking-car',
      auth: true
    },
    {
      id:3,
      name: 'Devenir Instructeur',
      icon: GraduationCap,
      path: "/beinstructor",
      auth: true
    },
    // {
    //   id:4,
    //   name: 'Newsletter',
    //   icon: Mail,
    //   path: '/newsletter'
    // },
    // {
    //   id:5,
    //   name: 'Store',
    //   icon: LayoutGrid,
    //   path: '/store',
    //   auth: true
    // }
  ]

  const path = usePathname();
  useEffect(()=>{
  },[]);
  return (
    <div className="bg-white p-5 h-screen shadow-sm border">
      <Link href={'/'}>
      <Image src="/Chancimi.svg" width={80} height={80} alt="Chancimi" property="true" />
      </Link>
      {/* menu list  */}

      <hr className="mt-5"/>

      <div className="mt-8">
      {
        menu.map((item,index)=> item.auth&&(
          <Link href={item.path} key={index} >
          <div className={`group flex gap-3 mt-2 p-3 text-gray-500 items-center hover:bg-primary cursor-pointer hover:text-white rounded-[4px] transition-all ease-in-out duration-200 ${path.includes(item.path)&& 'bg-primary text-white'}`}>
            <item.icon className="group-hover:animate-bounce"/>
            <h2>{item.name}</h2>
          </div>
          </Link>
        ))
      }
      </div>
    </div>
  )
}

export default SideNav