import {
  ChevronLeft, Star, MapPinIcon,
  Heart, Share, Phone, CheckIcon,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import { profileNav } from "@/data/profile"
import Image from "next/image"
import Link from "next/link"

function profile() {
  return (
      <main className="my-8 mx-6">

        <Link href="/services" className="flex items-center justify-start gap-2 mb-6">
          <ChevronLeft className="h-6" strokeWidth={1}/>
          <p className="text-[12px] text-purple-500">Back to services</p>
        </Link>

        <section>
          <div className="bg-green-900/20 p-4 rounded-2xl 
            flex flex-col gap-12 md:flex-row justify-between">
            <div className="flex items-center gap-6 ">
              <Image
                alt="profile image"
                src="/hero.png"
                width={500}
                height={500}
                className="object-cover h-24 md:h-32 w-24 md:w-32 ring-2 
                ring-gray-300 rounded-full "
              />

              <div className="flex flex-col gap-0 md:gap-2">
                <div className="flex justify-between">
                  <h2 >Dave the Plumber</h2>
                  <Button
                    size="round"
                    variant="rounded"
                    className="md:hidden self-start"
                  >
                    <Heart className="h-4 w-4 " />
                  </Button>
                </div>

                <p className="text-sm">Professional Plumbing Services</p>

                <div className="flex gap-4 md:items-center md:gap-8">
                  <div className="flex items-center gap-2">
                    <Star className="text-yellow-500 h-3 w-3" fill="currentColor" />
                    <p className="font-semibold text-[12px]">4.5</p>
                    <p className="text-[12px]">(124 reviews)</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPinIcon className="text-gray-400 h-3 w-3" />
                    <p className="text-gray-400 text-[12px]">Acarde Pretoria</p>
                  </div>
                </div>

                <p className="text-sm  md:block">
                  10+ years experience
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className=" hidden md:flex justify-end gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  className="flex gap-2"
                >
                  <Share className="h-4 w-4" />
                  Share
                </Button>

                <Button variant="rounded" size="round">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex gap-2">
                <Button className="w-1/2">
                  Chat on Whatsapp
                </Button>

                <Button
                  className="flex gap-2 w-1/2 flexcenter"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>

          <ul className="flex items-center justify-between 
            md:justify-start md:gap-12 rounded-2xl overflow-hidden">
            {profileNav.map((link) => (
              <li
                key={link.id}
                className="text-sm p-4 border-b-2 border-green-500"
              >
                {link.name}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div className="grid grid-cols-[2fr_1fr] gap-8 my-8">
            <div className="flex flex-col gap-8">
              <div className="container">
                <h2>About</h2>

                <Text className="max-w-124">
                  I am a qualified plumber with over 10 years of
                  experience in residential and commeercial plumbing.
                  I take pride in delivering quality work and customer service.
                </Text>

                <div>
                  {profileNav[4].qualities?.map((quality, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckIcon className="text-green-500" />
                      <Text>
                        {quality}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>

              <div className="container">
                <h2>Services</h2>

                <div className="flex flex-col gap-2">
                  <h3>General Plumbing</h3>
                  <Text>Leaks, pipes, fixtures, etc</Text>
                </div>
                <div className="flex flex-col gap-2">
                  <h3>General Plumbing</h3>
                  <Text>Leaks, pipes, fixtures, etc</Text>
                </div>
                <div className="flex flex-col gap-2">
                  <h3>General Plumbing</h3>
                  <Text>Leaks, pipes, fixtures, etc</Text>
                </div>
                <div className="flex flex-col gap-2">
                  <h3>General Plumbing</h3>
                  <Text>Leaks, pipes, fixtures, etc</Text>
                </div>
              </div>

              <div className="container">
                <h2>Reviews</h2>

                <div className="flex justify-between">
                  <div className="flex flex-col gap-3">
                    <Text variant="title">4.8</Text>

                    <div className="flex gap-2">
                      <Star className="text-yellow-500" fill="currentColor" />
                      <Star className="text-yellow-500" fill="currentColor" />
                      <Star className="text-yellow-500" fill="currentColor" />
                      <Star className="text-yellow-500" fill="currentColor" />
                      <Star className="text-yellow-500" fill="currentColor" />
                    </div>

                    <Text>(124 reviews)</Text>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <p>5</p>
                      <Star className="h-4 text-green-700" fill="currentColor" />

                      <div className="relative w-64 h-2 bg-gray-400 rounded-lg overflow-hidden">
                        <div className="absolute bg-green-700 inset-0" />
                      </div>

                      <p className="text-gray-500">98</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p>4</p>
                      <Star className="h-4 text-green-700" fill="currentColor" />

                      <div className="relative w-64 h-2 bg-gray-400 rounded-lg overflow-hidden">
                        <div className="absolute bg-green-700 inset-0" />
                      </div>

                      <p className="text-gray-500">98</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p>3</p>
                      <Star className="h-4 text-yellow-500" fill="currentColor" />

                      <div className="relative w-64 h-2 bg-gray-400 rounded-lg overflow-hidden">
                        <div className="absolute bg-yellow-500 inset-0" />
                      </div>

                      <p className="text-gray-500">98</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <p>2</p>
                      <Star className="h-4 text-yellow-500" fill="currentColor" />

                      <div className="relative w-64 h-2 bg-gray-400 rounded-lg overflow-hidden">
                        <div className="absolute bg-yellow-800 inset-0" />
                      </div>

                      <p className="text-gray-500">98</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <p>1</p>
                      <Star className="h-4 text-yellow-500" fill="currentColor" />

                      <div className="relative w-64 h-2 bg-gray-400 rounded-lg overflow-hidden">
                        <div className="absolute bg-red-500 inset-0" />
                      </div>

                      <p className="text-gray-500">98</p>
                    </div>
                  </div>

                  <Button size="lg" className="self-start" >
                    Write a review
                  </Button>

                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="container">
                <h2>Location</h2>

                <div className="flex items-center gap-2 ">
                  <MapPinIcon className="h-4" />
                  <h3>Sunnyside Pretoria</h3>
                </div>

                <Text className="text-green-500 ml-7">Open in Maps</Text>

                {/* <img
                  alt="map of the location"
                  src="/src/assets/map.jpg"
                  className="w-full h-34 object-cover rounded-xl"
                /> */}
              </div>

              <div className="container">
                <h2>Availability</h2>

                {[1, 2, 3].map((value) => (
                  <div key={value} className="flex justify-between items-center">
                    <Text>Mon - Fri</Text>
                    <Text>07:00 - 18:00</Text>
                  </div>
                ))}
              </div>

              <div className="container">
                <h2>Business info</h2>

                {[1, 2, 3].map(value => (
                  <div key={value} className="flex justify-between items-center">
                    <Text>Trading name</Text>
                    <Text>John the plumber</Text>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-2 container">

            </div>
          </div>
        </section>
      </main>
  );
}

export default profile;