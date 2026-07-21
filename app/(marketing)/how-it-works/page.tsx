import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  MessageCircle,
  Search,
  UserPlus,
} from "lucide-react";

import Text from "@/components/ui/Text";
import BackLink from "@/components/ui/BackLink";

const customerSteps = [
  {
    number: "01",
    icon: Search,
    title: "Search for a service",
    description:
      "Tell us what kind of service you need and discover professionals who can help.",
  },
  {
    number: "02",
    icon: CheckCircle2,
    title: "Explore profiles",
    description:
      "Review a provider's services, experience, location, ratings, and other important information.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Connect directly",
    description:
      "Contact the service provider to discuss your needs, ask questions, and arrange the work.",
  },
];

const providerSteps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create your profile",
    description:
      "Create a professional profile that showcases your skills, experience, services, and location.",
  },
  {
    number: "02",
    icon: BriefcaseBusiness,
    title: "Showcase your services",
    description:
      "Help potential customers understand what you do and why they should choose you.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Connect with opportunities",
    description:
      "Receive interest from people looking for your services and connect directly with potential customers.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="my-8 mx-6">

      <BackLink href="/">
        Back to home
      </BackLink>

      {/* Hero */}
      <section className="container py-12 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm text-green-500 mb-4">
            How Vision Works works
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold">
            The right opportunity is just a connection away.
          </h1>

          <Text className="mt-6 max-w-2xl text-gray-500">
            Vision Works makes it easier for people to find professionals and
            for service providers to discover new opportunities.
          </Text>
        </div>
      </section>

      {/* For Customers */}
      <section className="my-8">

        <div className="mb-8">
          <p className="text-sm text-green-500 mb-3">
            For customers
          </p>

          <h2>Find the right professional for your job.</h2>

          <Text className="mt-4 max-w-2xl">
            Whether you need a quick repair or a professional for a larger
            project, Vision Works helps you discover and connect with the right
            service provider.
          </Text>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {customerSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="container relative">

                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm text-green-500">
                    {step.number}
                  </span>

                  <Icon className="h-6 w-6 text-green-500" />
                </div>

                <h3>{step.title}</h3>

                <Text className="mt-3">
                  {step.description}
                </Text>

              </div>
            );
          })}
        </div>

      </section>

      {/* Provider Section */}
      <section className="my-16">

        <div className="mb-8">
          <p className="text-sm text-green-500 mb-3">
            For service providers
          </p>

          <h2>Turn your skills into new opportunities.</h2>

          <Text className="mt-4 max-w-2xl">
            Build your professional presence, showcase your services, and
            connect with people who are looking for someone with your skills.
          </Text>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {providerSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="container">

                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm text-green-500">
                    {step.number}
                  </span>

                  <Icon className="h-6 w-6 text-green-500" />
                </div>

                <h3>{step.title}</h3>

                <Text className="mt-3">
                  {step.description}
                </Text>

              </div>
            );
          })}
        </div>

      </section>

      {/* Simple Process */}
      <section className="container my-8">

        <div className="max-w-3xl">
          <p className="text-sm text-green-500 mb-3">
            Simple by design
          </p>

          <h2>
            Discover. Connect. Get things done.
          </h2>

          <Text className="mt-4">
            Vision Works is designed to remove unnecessary barriers between
            people who need services and professionals who can provide them.
          </Text>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:items-center mt-12">

          <div className="flex items-center gap-3">
            <Search className="text-green-500" />
            <span>Discover</span>
          </div>

          <ArrowRight className="hidden md:block text-gray-400" />

          <div className="flex items-center gap-3">
            <MessageCircle className="text-green-500" />
            <span>Connect</span>
          </div>

          <ArrowRight className="hidden md:block text-gray-400" />

          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-green-500" />
            <span>Get it done</span>
          </div>

        </div>

      </section>

      {/* Trust Section */}
      <section className="container my-8">

        <h2>Built around better connections.</h2>

        <Text className="mt-4 max-w-2xl">
          Profiles, reviews, service information, and direct communication help
          both customers and providers make more informed decisions.
        </Text>

      </section>

    </main>
  );
}