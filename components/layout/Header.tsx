import Link from "next/link"
import Button from "../ui/Button";
import { Bars3Icon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <div className=" bg-green-950 w-full flex justify-between items-center py-2 px-6">

      <Link  href="/" className="logo flex items-center">
       
        <p className="pl-2 text-white font-light tracking-widest">
          VISION
          <sup> (Works)</sup>
        </p>
      </Link>

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