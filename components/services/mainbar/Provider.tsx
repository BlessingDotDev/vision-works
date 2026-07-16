import { Star, MapPinIcon, Heart } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

function Provider() {
  return (
    <div className="h-32 flex justify-between items-center gap-4 
          rounded-2xl ring-1 ring-gray-800 p-4">
      {/* <img
        src="/src/assets/hero.png"
        alt="profile picture"
        className="w-18 h-18 rounded-full"
      /> */}

      <div className="flex-1 ">
        <h3>John the Plumber</h3>
        <p className="text-[12px]">Plumbing</p>

        <div className="flex flex-col md:flex-row md:items-center md:gap-8">
          <div className="flex items-center gap-2">
            <Star className="text-amber-300 h-3 w-3" />
            <p className="font-semibold text-[12px]">4.5</p>
            <p className="text-[12px]">(124 reviews)</p>
          </div>

          <div className="flex items-center gap-2">
            <MapPinIcon className="text-gray-400 h-3 w-3" />
            <p className="text-gray-400 text-[12px]">Acarde Pretoria</p>
          </div>
        </div>

        <p className="text-[14px] hidden md:block">
          Professional plumbing services. 10+ years experience
        </p>
      </div>

      <div>
        <Heart className="h-4 w-4" />
        <p>R350/hr</p>
        <p className="text-[12px] text-gray-400">Starting from</p>
        
        <Link href="/provider">
          <Button size="xs" className="text-white">
            View Profile
          </Button>
        </Link>

      </div>
    </div>
  )
}

export default Provider;