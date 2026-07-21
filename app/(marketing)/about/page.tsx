import {
  BriefcaseBusiness,
  CheckCircle2,
  Handshake,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

import Text from "@/components/ui/Text";
import BackLink from "@/components/ui/BackLink";

const values = [
  {
    icon: ShieldCheck,
    title: "Trust & Safety",
    description:
      "We help people find reliable professionals and create a safer, more transparent way to connect with service providers.",
  },
  {
    icon: Handshake,
    title: "Meaningful Connections",
    description:
      "We connect people who need help with skilled professionals who are ready to provide their services.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We believe local professionals and communities grow stronger when opportunities are easier to find.",
  },
];

const benefits = [
  "Discover professionals near you",
  "Find opportunities that match your skills",
  "Compare profiles and reviews",
  "Connect directly with service providers",
  "Build trust through transparent profiles",
];

export default function AboutPage() {
  return (
    <main className="my-8 mx-6">

      <BackLink href="/">
        Back to home
      </BackLink>

      {/* Hero */}
      <section className="container py-12 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm text-green-500 mb-4">
            About Vision Works
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Connecting people with the right opportunities.
          </h1>

          <Text className="mt-6 max-w-2xl text-gray-500">
            Vision Works is a platform designed to make it easier for people
            to find skilled service providers and for professionals to discover
            meaningful job opportunities.
          </Text>
        </div>
      </section>

      {/* What We Do */}
      <section className="grid md:grid-cols-2 gap-8 my-8">

        <div className="container">
          <Search className="text-green-500 h-8 w-8 mb-6" />

          <h2>Find the right person for the job</h2>

          <Text className="mt-4">
            Whether you need a plumber, electrician, cleaner, designer,
            technician, or another professional, Vision Works helps you
            discover service providers based on their skills, location,
            experience, and reviews.
          </Text>
        </div>

        <div className="container">
          <BriefcaseBusiness className="text-green-500 h-8 w-8 mb-6" />

          <h2>Find opportunities that fit your skills</h2>

          <Text className="mt-4">
            For service providers, Vision Works creates a simple way to
            showcase your skills, connect with potential customers, and
            discover new opportunities.
          </Text>
        </div>

      </section>

      {/* Mission */}
      <section className="container my-8">
        <div className="max-w-3xl">
          <p className="text-sm text-green-500 mb-3">
            Our mission
          </p>

          <h2>
            Making opportunities easier to find and easier to access.
          </h2>

          <Text className="mt-4">
            Finding the right person for a job should not be complicated.
            Likewise, skilled professionals should not have to rely only on
            word of mouth to find work.
          </Text>

          <Text className="mt-4">
            Vision Works brings both sides together in one platform. Our goal
            is to create a trusted marketplace where people can discover,
            connect, and work with professionals more easily.
          </Text>
        </div>
      </section>

      {/* How Vision Works Helps */}
      <section className="my-8">
        <div className="mb-6">
          <p className="text-sm text-green-500 mb-3">
            Why Vision Works
          </p>

          <h2>Built to make connections simpler.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="container">
            <h3>For customers</h3>

            <Text className="mt-3">
              Find qualified professionals, explore their profiles, and
              connect with the right person for your job.
            </Text>
          </div>

          <div className="container">
            <h3>For service providers</h3>

            <Text className="mt-3">
              Showcase your experience, skills, and services while connecting
              with people looking for help.
            </Text>
          </div>

          <div className="container">
            <h3>For communities</h3>

            <Text className="mt-3">
              Create more visibility for local talent and make it easier for
              opportunities to reach the people who need them.
            </Text>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="my-8">
        <div className="mb-6">
          <p className="text-sm text-green-500 mb-3">
            What we believe in
          </p>

          <h2>Our values</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div key={value.title} className="container">
                <Icon className="h-7 w-7 text-green-500 mb-6" />

                <h3>{value.title}</h3>

                <Text className="mt-3">
                  {value.description}
                </Text>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="container my-8">
        <h2>One platform. More possibilities.</h2>

        <Text className="mt-4 max-w-2xl">
          Vision Works helps simplify the process of discovering opportunities
          and connecting with the right people.
        </Text>

        <div className="mt-8 flex flex-col gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-3"
            >
              <CheckCircle2 className="h-5 w-5 text-green-500" />

              <Text>
                {benefit}
              </Text>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}