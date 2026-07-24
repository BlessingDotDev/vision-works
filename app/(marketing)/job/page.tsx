"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Search } from "lucide-react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  image: string;
  link: string;
  postedAt: string;
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Junior Software Developer",
    company: "TechNova Solutions",
    location: "Johannesburg, Gauteng",
    type: "Full-time",
    image: "/images/jobs/software-developer.jpg",
    link: "https://example.com",
    postedAt: "Today",
  },
  {
    id: 2,
    title: "Laboratory Assistant",
    company: "BioCore Laboratories",
    location: "Pretoria, Gauteng",
    type: "Full-time",
    image: "/images/jobs/laboratory.jpg",
    link: "https://example.com",
    postedAt: "Today",
  },
  {
    id: 3,
    title: "Data Capturer",
    company: "BrightPoint Group",
    location: "Mbombela, Mpumalanga",
    type: "Contract",
    image: "/images/jobs/data-capturer.jpg",
    link: "https://example.com",
    postedAt: "Yesterday",
  },
  {
    id: 4,
    title: "Marketing Coordinator",
    company: "Creative Edge Agency",
    location: "Cape Town, Western Cape",
    type: "Full-time",
    image: "/images/jobs/marketing.jpg",
    link: "https://example.com",
    postedAt: "2 days ago",
  },
];

export default function JobsPage() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter((job) =>
    `${job.title} ${job.company} ${job.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Vision Works Jobs
            </p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Discover your next
              <span className="block text-zinc-500">
                opportunity.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Explore the latest job opportunities and find your next career
              move.
            </p>
          </div>

          {/* Search */}
          <div className="mt-10 max-w-2xl">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                type="text"
                placeholder="Search jobs, companies or locations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-14 w-full rounded-xl border border-white/10 bg-zinc-950 pl-14 pr-5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm text-zinc-500">
              {filteredJobs.length} opportunities
            </p>

            <h2 className="mt-1 text-2xl font-semibold">
              Latest jobs
            </h2>
          </div>

          <p className="hidden text-sm text-zinc-600 sm:block">
            Updated regularly
          </p>
        </div>

        {/* Job Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {filteredJobs.map((job) => (
            <article
              key={job.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-white/20"
            >

              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <Image
                  src={job.image}
                  alt={job.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Posted */}
                <span className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur-md">
                  {job.postedAt}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">

                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-400">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-xl font-semibold leading-tight text-white">
                  {job.title}
                </h3>

                <p className="mt-3 text-sm font-medium text-zinc-400">
                  {job.company}
                </p>

                <p className="mt-1 text-sm text-zinc-600">
                  {job.location}
                </p>

                {/* Link */}
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-sm font-medium text-white transition hover:text-zinc-400"
                >
                  Read more about this job

                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="text-xl font-semibold">
              No jobs found
            </h3>

            <p className="mt-2 text-zinc-500">
              Try searching for another job, company or location.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}