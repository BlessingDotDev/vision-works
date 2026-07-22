import {
  Star, CheckIcon,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import { profileNav } from "@/data/profile"

function Overview() {
  return (
    
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
  );
}

export default Overview;