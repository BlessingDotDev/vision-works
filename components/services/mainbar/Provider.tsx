import { Star, MapPinIcon, Heart } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

function Provider() {
  return (
    <div className="h-32 flex justify-between items-center gap-4 
          rounded-2xl ring-1 ring-gray-800 p-4">
      <Image
        src="/hero.png"
        alt="profile picture"
        width={72}
        height={72}
        className="w-18 h-18 rounded-full"
      />

      <div className="flex-1 ">
        <p className="font-semibold tracking-wide leading-relaxed">John the Plumber</p>
        <p className="text-[12px] tracking-wider leading-relaxed">Plumbing</p>

        <div className="flex flex-col md:flex-row md:items-center md:gap-8">
          <div className="flex items-center gap-2">
            <Star className="text-amber-300 h-3 w-3" />
            <p className="font-thin text-[10px]">4.5</p>
            <p className="text-[10px] tracking-wide">(124 reviews)</p>
          </div>

          <div className="flex items-center gap-2">
            <MapPinIcon className="text-gray-400 h-3 w-3" />
            <p className="text-gray-400 text-[10px] tracking-wide leading-relaxed">
              Acarde Pretoria
            </p>
          </div>
        </div>

        <p className="text-[12px] text-gray-400 tracking-wide leading-loose hidden md:block">
          Professional plumbing services. 10+ years experience
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <Heart className="h-4" strokeWidth={1}/>
        <p className="text-sm">R350/hr</p>
        <p className="text-[12px] tracking-wide text-gray-400">Starting from</p>
        
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