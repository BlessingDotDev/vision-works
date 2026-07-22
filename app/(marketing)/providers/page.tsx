
import BackLink from "@/components/ui/BackLink";
import ProfileSection from "@/components/providers/ProfileSection";
import Overview from "@/components/providers/Overview";
import Location from "@/components/providers/Location";

function profile() {
  return (
      <main className="my-8 mx-6">

        <BackLink href="/services">
          Back to services
        </BackLink>

        <ProfileSection />

        <section className="grid grid-cols-[2fr_1fr] gap-8 my-8">
            <Overview />

            <Location />
            
            <div className="col-span-2 container">

            </div>
        </section>
      </main>
  );
}

export default profile;