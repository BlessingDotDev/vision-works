import { AppWindowIcon, ZoomIn } from "lucide-react"
import Text from "@/components/ui/Text"

function RightBar() {
  return (
    <div className="order-2 md:order-3 rounded-2xl">
      <div className="flex gap-3 ring-1 ring-gray-800 rounded-xl p-4">
        <h4>Sort by:</h4>
        <Text variant="subtitle">Recommended</Text>
      </div>

      <div className="relative flex flex-col gap-8 mt-6">
        <div className="h-64">
          {/* <img
            src="/src/assets/map.jpg"
            alt="location on the map"
            className="bg-green-900 w-full h-full object-cover rounded-2xl"
          /> */}
          <button className="absolute top-2 right-2 
            flexcenter bg-black/40 p-2 rounded-lg"
          >
            <ZoomIn />
          </button>
        </div>

        <div className="flex flex-col gap-4 ">
          <h3>Why choose Vision-works?</h3>

          <div className="flex items-center gap-2">
            <AppWindowIcon className="h-4 text-green-600" />
            <div>
              <Text variant="subtitle">Verified professionals</Text>
              <Text>All providers are background checked </Text>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <AppWindowIcon className="h-4 text-green-600" />
            <div>
              <Text variant="subtitle">24/7 customer support </Text>
              <Text>We re here to help anytime</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;