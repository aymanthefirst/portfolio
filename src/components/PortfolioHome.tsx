"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/data/profile";
import SectionHeader from "@/components/SectionHeader";

const emailSubject = encodeURIComponent("Portfolio enquiry");
const gmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${emailSubject}`;
const mailtoHref = `mailto:${profile.email}?subject=${emailSubject}`;

export default function PortfolioHome({ year }: { year: number }) {
  const [activeProject, setActiveProject] = useState(0);
  const project = profile.projects[activeProject];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4 text-sm">
          <a href="#" className="font-semibold tracking-tight text-zinc-100">
            {profile.name.split(" ")[0]}
            <span className="text-teal-400">.</span>
          </a>
          <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2">
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a
              href={profile.linkedin}
              className="btn-secondary !px-4 !py-1.5 text-xs"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-24">
        <section className="pb-16 pt-14 md:pb-20 md:pt-20">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal-500/90">
                {profile.title}
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-50 md:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
                {profile.tagline}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-500">
                {profile.summary}
              </p>
            </div>
            <Image
              src="/portfolio/ayman-headshot.jpg"
              alt="Ayman El Harake"
              width={176}
              height={176}
              priority
              className="h-36 w-36 shrink-0 rounded-2xl border border-zinc-800/80 object-cover object-top shadow-lg shadow-black/30 md:h-44 md:w-44"
            />
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={gmailComposeHref}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email me
            </a>
            <a
              href={profile.calendly}
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meet with me
            </a>
            <a
              href={profile.github}
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <p className="mt-4 text-sm text-zinc-500">
            <a
              href={gmailComposeHref}
              className="text-zinc-400 transition-colors hover:text-teal-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.email}
            </a>
            <span className="mx-2 text-zinc-700">·</span>
            <a
              href={mailtoHref}
              className="text-zinc-500 transition-colors hover:text-teal-400"
            >
              Open in mail app
            </a>
          </p>
          <p className="mt-8 font-mono text-xs text-zinc-600">
            {profile.location} · {profile.availability}
          </p>
        </section>

        <section id="experience" className="section-shell scroll-mt-24">
          <SectionHeader
            eyebrow="Career"
            title="Experience"
            description="Backend and platform delivery at ESG Global and Alfresco, from academy placement through solution work."
          />
          <ol className="mt-10 space-y-10">
            {profile.experience.map((job) => (
              <li
                key={`${job.company}-${job.role}-${job.dates}`}
                className="relative border-l border-zinc-800 pl-6"
              >
                <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-teal-500" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {job.role}
                    <span className="font-normal text-zinc-500"> · {job.company}</span>
                    {"note" in job && job.note ? (
                      <span className="ml-2 text-sm font-medium text-teal-400/90">
                        ({job.note})
                      </span>
                    ) : null}
                  </h3>
                  <time className="font-mono text-xs text-zinc-500">{job.dates}</time>
                </div>
                <ul className="mt-3 space-y-2 leading-relaxed text-zinc-400">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="shrink-0 text-teal-600">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="projects" className="section-shell scroll-mt-24">
          <SectionHeader
            eyebrow="Demos"
            title="Projects"
            description="Side projects with public demos — select a project to watch."
          />
          <div
            className="card mt-8 flex flex-wrap gap-2 p-2"
            role="tablist"
            aria-label="Project demos"
          >
            {profile.projects.map((p, i) => (
              <button
                key={p.name}
                type="button"
                role="tab"
                aria-selected={i === activeProject}
                onClick={() => setActiveProject(i)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                  i === activeProject
                    ? "bg-teal-500 text-zinc-950 shadow-sm"
                    : "text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-200"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
          <article className="card mt-4 overflow-hidden">
            <div className="aspect-video w-full bg-zinc-950">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}`}
                title={project.name}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="border-t border-zinc-800/80 p-6">
              <h3 className="text-lg font-semibold text-zinc-100">{project.name}</h3>
              <p className="mt-2 font-mono text-xs text-teal-400/90">{project.stack}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>
            </div>
          </article>
        </section>

        <section id="skills" className="section-shell scroll-mt-24">
          <SectionHeader
            eyebrow="Toolkit"
            title="Skills"
            description="Technologies from my CV — backend, integration, platform, quality, and AI-assisted development."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {profile.skillGroups.map((group) => (
              <div key={group.label} className="card p-5">
                <h3 className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                  {group.label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li key={skill} className="pill">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <SectionHeader eyebrow="Background" title="Education & languages" />
          <ul className="card mt-10 divide-y divide-zinc-800/80 px-6 py-2">
            {profile.education.map((line) => (
              <li key={line} className="py-4 text-sm leading-relaxed text-zinc-300">
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-zinc-500">
            <span className="font-medium text-zinc-400">Languages:</span>{" "}
            {profile.languages.join(", ")}
          </p>
        </section>
      </main>

      <footer className="border-t border-zinc-800/70 py-10 text-center text-sm text-zinc-600">
        <p>
          © {year} {profile.name} ·{" "}
          <a href={profile.linkedin} className="text-zinc-500 transition-colors hover:text-teal-400">
            LinkedIn
          </a>
        </p>
        <p className="mt-2 font-mono text-[11px] text-zinc-700">
          React · TypeScript · Next.js · Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
