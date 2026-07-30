import {
  Star, CheckIcon,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import { profileNav } from "@/data/profile"

import Reviews  from "@/components/providers/Reviews"

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

                <Reviews />

                <Button size="lg" className="self-start" >
                  Write a review
                </Button>
                  
              </div>
            </div>
  );
}

export default Overview;