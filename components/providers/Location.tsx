import { MapPinIcon } from "lucide-react";
import Text from "@/components/ui/Text";

function Location() {
  return (
    
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
  )
}

export default Location;