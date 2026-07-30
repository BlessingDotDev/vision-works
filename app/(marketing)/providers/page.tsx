
import BackLink from "@/components/ui/BackLink";
import ProfileSection from "@/components/providers/ProfileSection";
import Overview from "@/components/providers/Overview";
import Location from "@/components/providers/Location";
import Testimonial from "@/components/providers/Testimonial"

function profile() {
  return (
      <main className="my-8 mx-6">

        <BackLink href="/services">
          Back to services
        </BackLink>

        <ProfileSection />

        <section className="grid grid-cols-1 gap-8 my-8 lg:grid-cols-[2fr_1fr]">
            <Overview />

            <Location />
        </section>
      </main>
  );
}

export default profile;