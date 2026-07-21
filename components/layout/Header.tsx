import Link from "next/link"
import Image from "next/image"
import { navlink } from "@/lib/styles";
import { User } from "lucide-react"
import Button from '@/components/ui/Button'
import { Bars3Icon } from "@heroicons/react/24/outline"

function Header() {
  return (
    <div className=" bg-green-950 w-full flex justify-between items-center py-2 px-6">

      <Link  href="/" className="logo flex items-center">
       <Image 
        src="/vision-logo.png"
        alt="logo"
        width={28}
        height={28}
       />
        <p className="pl-2 text-white font-light tracking-widest">
          VISION
          <sup> (Works)</sup>
        </p>
      </Link> 

      <nav className="hidden md:flex items-center justify-between w-full max-w-lg mx-16">
        <Link className={navlink} href="/">Home</Link> 
        <Link className={navlink} href="/services">Services</Link> 
        <Link className={navlink} href="/providers">Providers</Link> 
        <Link className={navlink} href="/how-it-works">How it works</Link> 
        <Link className={navlink} href="/about">About us</Link> 
      </nav>

      {/* <div className="flex items-center justify-center gap-2">
        <Button variant="secondary">sign in</Button>
        <Button className="hidden lg:block">Sign up</Button>
      </div> */}
      <div className="flex justify-between items-center gap-4">
        <div className="relative h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
          <User />
          {/* <Image 
            src="/vision-logo.png"
            alt="logo"
            fill
            className="object-cover"
        /> */}
        </div>

        <Link href="/auth/sign-up">
          <Button variant="header" size="sm">
            <Bars3Icon className="text-white w-4 h-4 md:hidden" />
            <p className="hidden md:block font-semibold">
              Sign-up
            </p>
          </Button>
        </Link>

      </div>
    </div>
  );
}

export default Header;