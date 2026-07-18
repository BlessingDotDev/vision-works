import SearchInput from "@/components/services/SearchInput";
import Image from "next/image"

function HeroSection() {
  return (
    <section className=" relative min-h-[40vh] ">

      <div className=" absolute inset-0">
        <Image
          src="/hero.png"
          alt="A plumber fixing a sink"
          fill
          className="object-cover"/>
      </div>

      <div className="absolute inset-0 bg-gradient-to-l from-black/0 to-black"/>

      <div className="absolute z-10 flex justify-center flex-col w-full h-full p-6">
        <h1 className="text-3xl bold tracking-wide ">Find trusted services
          <br/><span className="text-green-500"> near you</span>
        </h1>

        <p className="text-sm my-3 text-gray-400 leading-relaxed tracking-normal">
          Connect with reliable professionals in your area
        </p>

        <SearchInput />
      </div>
    </section>
  )
}

export default HeroSection;