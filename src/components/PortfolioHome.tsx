"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export default function PortfolioHome({ year }: { year: number }) {
  const [activeProject, setActiveProject] = useState(0);
  const project = profile.projects[activeProject];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 text-sm">
          <a href="#" className="font-semibold tracking-tight text-zinc-100">
            {profile.name.split(" ")[0]}
            <span className="text-teal-400">.</span>
          </a>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-zinc-400">
            <a href="#experience" className="transition-colors hover:text-teal-300">
              Experience
            </a>
            <a href="#builds" className="transition-colors hover:text-teal-300">
              Builds
            </a>
            <a href="#skills" className="transition-colors hover:text-teal-300">
              Skills
            </a>
            <a
              href={profile.linkedin}
              className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-200 transition-colors hover:border-teal-500/60 hover:text-teal-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-5 pb-20">
        <section className="pb-14 pt-16 md:pb-20 md:pt-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-400/90">
            {profile.title}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-50 md:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {profile.tagline}
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-500">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg bg-teal-500 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-teal-400"
            >
              Email me
            </a>
            <a
              href={profile.github}
              className="rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <p className="mt-6 text-sm text-zinc-600">
            {profile.location} · {profile.availability}
          </p>
        </section>

        <section id="experience" className="scroll-mt-20 border-t border-zinc-800/80 py-12">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Experience</h2>
          <p className="mt-2 max-w-xl text-zinc-500">
            End-to-end delivery from Alfresco platform work through ESG SaaS and automation
            engineering.
          </p>
          <ol className="mt-10 space-y-10">
            {profile.experience.map((job) => (
              <li
                key={`${job.company}-${job.role}-${job.start}`}
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
                  <time className="font-mono text-xs text-zinc-500">
                    {job.start} – {job.end}
                  </time>
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

        <section id="builds" className="scroll-mt-20 border-t border-zinc-800/80 py-12">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Builds</h2>
          <p className="mt-2 max-w-xl text-zinc-500">
            Side projects with public demos — pick a project to watch below.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.projects.map((p, i) => (
              <button
                key={p.name}
                type="button"
                onClick={() => setActiveProject(i)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  i === activeProject
                    ? "bg-teal-500 text-zinc-950"
                    : "border border-zinc-700 text-zinc-300 hover:border-zinc-500"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
          <article className="mt-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40">
            <div className="aspect-video w-full bg-zinc-900">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}`}
                title={project.name}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-zinc-100">{project.name}</h3>
              <p className="mt-1 font-mono text-xs text-teal-400/80">{project.stack}</p>
              <p className="mt-2 text-sm text-zinc-400">{project.description}</p>
            </div>
          </article>
        </section>

        <section id="skills" className="scroll-mt-20 border-t border-zinc-800/80 py-12">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Skills</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {profile.skillGroups.map((group) => (
              <div key={group.label} className="rounded-xl border border-zinc-800/80 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                  {group.label}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md bg-zinc-800/80 px-2.5 py-1 text-sm text-zinc-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-800/80 py-12">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
            Education & languages
          </h2>
          <ul className="mt-6 space-y-2 text-zinc-400">
            {profile.education.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-zinc-500">
            Languages: {profile.languages.join(", ")}
          </p>
        </section>
      </main>

      <footer className="border-t border-zinc-800/80 py-8 text-center text-sm text-zinc-600">
        <p>
          © {year} {profile.name} ·{" "}
          <a href={profile.linkedin} className="text-zinc-500 hover:text-teal-400">
            LinkedIn
          </a>
        </p>
        <p className="mt-2 font-mono text-xs text-zinc-700">
          React · TypeScript · Next.js · Tailwind CSS
        </p>
      </footer>
    </>
  );
}
