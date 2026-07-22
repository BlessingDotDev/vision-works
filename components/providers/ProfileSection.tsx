import Image from "next/image"
import {
  Star, MapPinIcon,
  Heart, Share, Phone,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { profileNav } from "@/data/profile"

function ProfileSection() {
  return (
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
  )}
        export default ProfileSection;