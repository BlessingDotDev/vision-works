"use client"

import {
  House,
  Wrench,
  User,
  CalendarDays ,
  CircleUser,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

import type { LucideIcon } from "lucide-react"

type Title = "Home" | "Services" | "Providers" | "Bookings" | "Profile"

interface NavLink {
  id: string,
  title: Title,
  icon: LucideIcon,
  route: string,
}

const Links: NavLink[] = [
  {
    id: crypto.randomUUID(),
    title: "Home",
    icon: House,
    route: "/",
  },
  {
    id: crypto.randomUUID(),
    title: "Services",
    icon: Wrench,
    route: "/services",
  },
  {
    id: crypto.randomUUID(),
    title: "Providers",
    icon: User,
    route: "/providers"
  },
  {
    id: crypto.randomUUID(),
    title: "Bookings",
    icon: CalendarDays,
    route: "bookings"
  },
  {
    id: crypto.randomUUID(),
    title: "Profile",
    icon: CircleUser,
    route: "profile"
  },
]

function MobileHeader() {

  const pathName = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 right-0 left-0 flex items-center justify-between py-2 px-8 bg-black">
      {Links.map((link) => {
        const isCorrect = pathName === link.route

        return (
        <Link 
          href={link.route}
          key={link.id} 
          className={clsx(
            "flex flex-col justify-center items-center gap-2 px-4 py-2 rounded-full",
            isCorrect && "bg-green-900/15"
          )}
        >
       
          <link.icon 
            className={clsx(
              "w-6",
              isCorrect ? "text-gray-100" : "text-gray-300"
            )} 
            strokeWidth={2}
          />
          <p className={clsx(
            "text-xs  tracking-wide",
            isCorrect ? "text-gray-100" : "text-gray-300"
            )}>
            {link.title}
          </p>
        
        </Link>

        )
      }
      )}
    </div>
  )
}

export default MobileHeader