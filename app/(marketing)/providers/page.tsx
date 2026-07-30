import BackLink from "@/components/ui/BackLink";
import ProfileSection from "@/components/providers/profile-section/ProfileSection";
import Overview from "@/components/providers/overview/Overview";
import Location from "@/components/providers/location/Location";

function profile() {
  return (
      <section className="my-8 mx-6">

        <BackLink href="/services">
          Back to services
        </BackLink>

        <ProfileSection />

        <div className="grid grid-cols-1 gap-8 my-8 lg:grid-cols-[2fr_1fr]">
            <Overview />

            <Location />
        </div>
      </section>
  );
}

export default profile;