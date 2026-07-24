"use client";

import { useMemo, useState } from "react";
import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ChevronDown,
  Clock3,
  MapPin,
  Search,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  posted: string;
  category: string;
  featured?: boolean;
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Junior Software Developer",
    company: "TechNova Solutions",
    location: "Johannesburg, Gauteng",
    type: "Full-time",
    experience: "Junior",
    salary: "R18,000 - R25,000",
    posted: "Today",
    category: "Technology",
    featured: true,
  },
  {
    id: 2,
    title: "Laboratory Assistant",
    company: "BioCore Laboratories",
    location: "Pretoria, Gauteng",
    type: "Full-time",
    experience: "Entry-level",
    salary: "R12,000 - R16,000",
    posted: "Today",
    category: "Science",
  },
  {
    id: 3,
    title: "Marketing Coordinator",
    company: "Creative Edge Agency",
    location: "Cape Town, Western Cape",
    type: "Full-time",
    experience: "Mid-level",
    salary: "R20,000 - R28,000",
    posted: "1 day ago",
    category: "Marketing",
  },
  {
    id: 4,
    title: "Data Capturer",
    company: "BrightPoint Group",
    location: "Mbombela, Mpumalanga",
    type: "Contract",
    experience: "Entry-level",
    salary: "R9,000 - R13,000",
    posted: "2 days ago",
    category: "Administration",
  },
  {
    id: 5,
    title: "Quality Control Analyst",
    company: "Advanced Manufacturing",
    location: "Durban, KwaZulu-Natal",
    type: "Full-time",
    experience: "Mid-level",
    salary: "R22,000 - R32,000",
    posted: "3 days ago",
    category: "Quality Control",
  },
];

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All locations");
  const [jobType, setJobType] = useState("All job types");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.category.toLowerCase().includes(search.toLowerCase());

      const matchesLocation =
        location === "All locations" ||
        job.location.includes(location);

      const matchesType =
        jobType === "All job types" ||
        job.type === jobType;

      return matchesSearch && matchesLocation && matchesType;
    });
  }, [search, location, jobType]);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-400">
              <Sparkles size={16} />
              Find your next opportunity
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find work that moves
              <span className="block text-zinc-500">
                your future forward.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Discover opportunities from companies looking for talented
              people like you. Search thousands of jobs and take the next
              step in your career.
            </p>
          </div>

          {/* Search Box */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-950 p-3 shadow-2xl shadow-black">
            <div className="grid gap-3 lg:grid-cols-[1.5fr_1fr_1fr_auto]">

              {/* Search */}
              <div className="relative">
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                />

                <input
                  type="text"
                  placeholder="Job title, keyword or company"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-14 w-full rounded-xl border border-white/5 bg-white/[0.04] pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white/20 focus:bg-white/[0.06]"
                />
              </div>

              {/* Location */}
              <div className="relative">
                <MapPin
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                />

                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="h-14 w-full appearance-none rounded-xl border border-white/5 bg-white/[0.04] pl-12 pr-10 text-sm text-zinc-300 outline-none focus:border-white/20 focus:bg-white/[0.06]"
                >
                  <option className="bg-zinc-900">
                    All locations
                  </option>

                  <option className="bg-zinc-900">
                    Gauteng
                  </option>

                  <option className="bg-zinc-900">
                    Mpumalanga
                  </option>

                  <option className="bg-zinc-900">
                    Western Cape
                  </option>

                  <option className="bg-zinc-900">
                    KwaZulu-Natal
                  </option>
                </select>

                <ChevronDown
                  size={17}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
                />
              </div>

              {/* Job Type */}
              <div className="relative">
                <BriefcaseBusiness
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                />

                <select
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  className="h-14 w-full appearance-none rounded-xl border border-white/5 bg-white/[0.04] pl-12 pr-10 text-sm text-zinc-300 outline-none focus:border-white/20 focus:bg-white/[0.06]"
                >
                  <option className="bg-zinc-900">
                    All job types
                  </option>

                  <option className="bg-zinc-900">
                    Full-time
                  </option>

                  <option className="bg-zinc-900">
                    Part-time
                  </option>

                  <option className="bg-zinc-900">
                    Contract
                  </option>

                  <option className="bg-zinc-900">
                    Internship
                  </option>
                </select>

                <ChevronDown
                  size={17}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
                />
              </div>

              <button className="h-14 rounded-xl bg-white px-8 font-semibold text-black transition hover:bg-zinc-200">
                Search jobs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* Top Bar */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-zinc-500">
              {filteredJobs.length} opportunities available
            </p>

            <h2 className="mt-1 text-2xl font-bold text-white">
              Latest job opportunities
            </h2>
          </div>

          <button className="flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.08]">
            <SlidersHorizontal size={17} />
            More filters
          </button>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

          {/* Job Listings */}
          <div className="space-y-4">

            {filteredJobs.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-zinc-950 p-12 text-center">
                <BriefcaseBusiness
                  size={40}
                  className="mx-auto text-zinc-700"
                />

                <h3 className="mt-5 text-lg font-semibold text-white">
                  No jobs found
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  Try changing your search or filters.
                </p>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <article
                  key={job.id}
                  className="group cursor-pointer rounded-2xl border border-white/10 bg-zinc-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-black"
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

                    <div className="flex gap-4">

                      {/* Company Logo */}
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-lg font-bold text-white">
                        {job.company.charAt(0)}
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-lg font-bold text-white transition group-hover:text-zinc-300">
                            {job.title}
                          </h3>

                          {job.featured && (
                            <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-1 text-xs font-semibold text-amber-400">
                              Featured
                            </span>
                          )}
                        </div>

                        <div className="mt-2 flex items-center gap-2 text-sm font-medium text-zinc-400">
                          <Building2 size={15} />
                          {job.company}
                        </div>
                      </div>
                    </div>

                    <button className="hidden rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-300 transition hover:bg-white hover:text-black sm:block">
                      View job
                    </button>
                  </div>

                  {/* Job Information */}
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-5 text-sm text-zinc-500">

                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {job.location}
                    </div>

                    <div className="flex items-center gap-2">
                      <BriefcaseBusiness size={16} />
                      {job.type}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock3 size={16} />
                      {job.experience}
                    </div>

                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      {job.posted}
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <p className="text-sm text-zinc-500">
                        Salary range
                      </p>

                      <p className="mt-1 font-semibold text-white">
                        {job.salary}
                      </p>
                    </div>

                    <span className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-400">
                      {job.category}
                    </span>
                  </div>
                </article>
              ))
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">

            {/* Profile Card */}
            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-7">
              <h3 className="text-xl font-bold text-white">
                Let opportunities find you.
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Create your Vision Works profile and let employers discover
                your skills and experience.
              </p>

              <button className="mt-6 w-full rounded-xl bg-white py-3 font-semibold text-black transition hover:bg-zinc-200">
                Create your profile
              </button>
            </div>

            {/* Categories */}
            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <h3 className="font-bold text-white">
                Explore categories
              </h3>

              <div className="mt-5 space-y-1">
                {[
                  ["Technology", "124 jobs"],
                  ["Science & Laboratory", "86 jobs"],
                  ["Administration", "143 jobs"],
                  ["Marketing", "72 jobs"],
                  ["Finance", "98 jobs"],
                ].map(([category, count]) => (
                  <button
                    key={category}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm transition hover:bg-white/[0.05]"
                  >
                    <span className="font-medium text-zinc-300">
                      {category}
                    </span>

                    <span className="text-xs text-zinc-600">
                      {count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}