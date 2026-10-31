"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/data/profile";
import SectionHeader from "@/components/SectionHeader";

const emailSubject = encodeURIComponent("Portfolio enquiry");
const gmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${emailSubject}`;
const mailtoHref = `mailto:${profile.email}?subject=${emailSubject}`;

const heroHighlights = ["Java & Spring Boot", "APIs & microservices", "CI/CD & platform work"];

export default function PortfolioHome({ year }: { year: number }) {
  const [activeProject, setActiveProject] = useState(0);
  const project = profile.projects[activeProject];

  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="page-glow" aria-hidden />

      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-zinc-950/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-4 text-sm">
          <a href="#top" className="font-display text-base font-bold tracking-tight text-zinc-100">
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
            <a href="#contact" className="nav-link">
              Contact
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

      <main className="relative z-10 mx-auto w-full max-w-4xl flex-1 px-6 pb-24">
        <section id="top" className="pb-16 pt-12 md:pb-20 md:pt-16">
          <div className="glass-panel">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal-400/95">
                    {profile.title}
                  </p>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                    Available
                  </span>
                </div>
                <h1 className="font-display mt-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                  <span className="text-gradient">{profile.name}</span>
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-200">
                  {profile.tagline}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-500">
                  {profile.summary}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {heroHighlights.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-zinc-700/60 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="headshot-ring mx-auto shrink-0 lg:mx-0">
                <Image
                  src="/portfolio/ayman-headshot.jpg"
                  alt="Ayman El Harake"
                  width={192}
                  height={192}
                  priority
                  className="h-40 w-40 rounded-[14px] object-cover object-top md:h-48 md:w-48"
                />
              </div>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="stat-chip">
                <p className="font-display text-2xl font-bold text-zinc-50">7+</p>
                <p className="mt-1 text-xs text-zinc-500">Years in software</p>
              </div>
              <div className="stat-chip">
                <p className="font-display text-2xl font-bold text-zinc-50">
                  {profile.projects.length}
                </p>
                <p className="mt-1 text-xs text-zinc-500">Public demo builds</p>
              </div>
              <div className="stat-chip">
                <p className="font-display text-lg font-bold leading-tight text-zinc-50">
                  ESG · Alfresco
                </p>
                <p className="mt-1 text-xs text-zinc-500">Recent employers</p>
              </div>
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
              <a href={mailtoHref} className="text-zinc-500 transition-colors hover:text-teal-400">
                Open in mail app
              </a>
            </p>
            <p className="mt-6 font-mono text-xs text-zinc-600">
              {profile.location} · {profile.availability}
            </p>
          </div>
        </section>

        <section id="experience" className="section-shell scroll-mt-24">
          <SectionHeader
            eyebrow="Career"
            title="Experience"
            description="Backend and platform delivery at ESG Global and Alfresco, from academy placement through solution work."
          />
          <div className="relative mt-10">
            <span className="timeline-rail" aria-hidden />
            <ol className="space-y-6">
            {profile.experience.map((job) => (
              <li
                key={`${job.company}-${job.role}-${job.dates}`}
                className="card-interactive relative ml-0 py-5 pl-8 pr-5 md:py-6 md:pl-10 md:pr-7"
              >
                <span className="timeline-dot" aria-hidden />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {job.role}
                    <span className="font-normal text-zinc-500"> · {job.company}</span>
                    {"note" in job && job.note ? (
                      <span className="ml-2 rounded-md bg-teal-500/15 px-2 py-0.5 text-xs font-semibold text-teal-300">
                        {job.note}
                      </span>
                    ) : null}
                  </h3>
                  <time className="font-mono text-xs text-teal-400/80">{job.dates}</time>
                </div>
                <ul className="mt-4 space-y-2.5 leading-relaxed text-zinc-400">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5">
                      <span className="mt-0.5 shrink-0 text-teal-400">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            </ol>
          </div>
        </section>

        <section id="projects" className="section-shell scroll-mt-24">
          <SectionHeader
            eyebrow="Demos"
            title="Projects"
            description="Side projects with public demos — select a project to watch."
          />
          <div
            className="card mt-8 flex flex-wrap gap-2 p-2.5"
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
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  i === activeProject
                    ? "project-tab-active"
                    : "text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-100"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
          <article className="card mt-4 overflow-hidden ring-1 ring-white/[0.04]">
            <div className="relative aspect-video w-full bg-zinc-950">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent" />
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}`}
                title={project.name}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="border-t border-zinc-800/80 bg-zinc-900/30 p-6 md:p-7">
              <h3 className="font-display text-xl font-bold text-zinc-50">{project.name}</h3>
              <p className="mt-2 font-mono text-xs text-teal-400">{project.stack}</p>
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
              <div key={group.label} className="card-interactive p-5 md:p-6">
                <h3 className="font-mono text-[11px] uppercase tracking-wider text-teal-400/80">
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

        <section id="contact" className="section-shell scroll-mt-24 pb-8">
          <div className="cta-band">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal-300/90">
              Let&apos;s talk
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold text-zinc-50 md:text-3xl">
              Open to Java backend and platform roles
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
              {profile.availability}. Based in {profile.location.split("—")[0].trim()} — happy to
              discuss hybrid London or relocation.
            </p>
            <div className="relative mt-6 flex flex-wrap gap-3">
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
                Book a 30‑min call
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-zinc-800/70 py-10 text-center text-sm text-zinc-600">
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
