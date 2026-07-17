import Link from "next/link"
import Image from "next/image"
import Button from "../ui/Button";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { navlink } from "@/lib/styles";

function Header() {
  return (
    <div className=" bg-green-950 w-full flex justify-between items-center py-2 px-6">

      <Link  href="/" className="logo flex items-center">
       <Image 
        src="/vision-logo.png"
        alt="logo"
        width={32}
        height={32}
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
        <Link className={navlink} href="/guidline">How it works</Link> 
        <Link className={navlink} href="/about">About us</Link> 
      </nav>


      <Button variant="header" size="sm">
        <Bars3Icon className="text-white w-6 h-6 md:hidden" />
        <p className="hidden md:block font-semibold">
          Menu
        </p>
      </Button>

    </div>
  );
}

export default Header;