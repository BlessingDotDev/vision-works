import {
  House,
  Wrench,
  User,
  CalendarDays ,
  CircleUser,
} from "lucide-react"
import Link from "next/link"

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
  return (
    <div className="md:hidden fixed bottom-0 right-0 left-0 flex items-center justify-between py-4 px-8 bg-black">
      {Links.map((link) => (
        <Link href={link.route} key={link.id} className="flex flex-col justify-center items-center gap-2  ">
       
          <link.icon className="w-6 text-white" strokeWidth={1}/>
          <p className="text-xs font-extralight tracking-wide">{link.title}</p>
 
        
        </Link>
      ))}
    </div>
  )
}

export default MobileHeader