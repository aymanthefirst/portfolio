"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import SiteBackdrop from "@/components/SiteBackdrop";
import SectionHeader from "@/components/SectionHeader";

const emailSubject = encodeURIComponent("Portfolio enquiry");
const gmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${emailSubject}`;
const mailtoHref = `mailto:${profile.email}?subject=${emailSubject}`;

const coreStack = ["Java", "Spring Boot", "Kafka", "Docker", "Playwright", "Python"];
const sectionIds = ["experience", "projects", "skills", "contact"] as const;
const bulletPreviewCount = 3;

type SectionId = (typeof sectionIds)[number];

function navClass(active: boolean) {
  return active ? "nav-link nav-link-active" : "nav-link";
}

export default function PortfolioHome({ year }: { year: number }) {
  const [activeProject, setActiveProject] = useState(0);
  const [activeSection, setActiveSection] = useState<SectionId | "">("");
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [expandedJobs, setExpandedJobs] = useState<Record<string, boolean>>({});
  const project = profile.projects[activeProject];

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id as SectionId);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteBackdrop />

      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4 text-sm">
          <a href="#top" className="text-sm font-medium tracking-tight text-zinc-400">
            Ayman
          </a>
          <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2">
            <a href="#experience" className={navClass(activeSection === "experience")}>
              Experience
            </a>
            <a href="#projects" className={navClass(activeSection === "projects")}>
              Projects
            </a>
            <a href="#skills" className={navClass(activeSection === "skills")}>
              Skills
            </a>
            <a href="#contact" className={navClass(activeSection === "contact")}>
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

      <main className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-6 pb-24">
        <section id="top" className="pb-12 pt-10 md:pb-16 md:pt-14">
          <div className="glass-panel hero-enter">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <p className="text-sm font-medium text-zinc-400">{profile.title}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/90" aria-hidden />
                    Available
                  </span>
                </div>
                <h1 className="mt-5 max-w-xl text-[1.75rem] font-medium leading-[1.15] tracking-[-0.025em] text-zinc-50 md:text-[2.25rem] lg:text-[2.5rem]">
                  {profile.name}
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-[1.05rem]">
                  {profile.tagline}
                </p>
                <div className="mt-4 max-w-2xl">
                  {summaryOpen ? (
                    <p className="text-base leading-relaxed text-zinc-500">{profile.summary}</p>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => setSummaryOpen((open) => !open)}
                    className="mt-2 text-sm font-medium text-zinc-400 underline decoration-zinc-600 underline-offset-4 transition hover:text-zinc-200"
                  >
                    {summaryOpen ? "Show less" : "More about my background"}
                  </button>
                </div>
              </div>
              <div className="headshot-frame relative mx-auto shrink-0 lg:mx-0">
                <Image
                  src="/portfolio/ayman-headshot.jpg"
                  alt="Ayman El Harake"
                  width={192}
                  height={192}
                  priority
                  className="h-40 w-40 object-cover object-top md:h-44 md:w-44"
                />
                <span
                  className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-zinc-950/50"
                  aria-hidden
                />
              </div>
            </div>

            <div className="mt-6 border-t border-zinc-800/70 pt-6">
              <p className="text-sm text-zinc-500">
                <span className="text-zinc-300">7+ years</span>
                <span className="mx-2 text-zinc-700">·</span>
                <span className="text-zinc-300">{profile.projects.length} public demos</span>
                <span className="mx-2 text-zinc-700">·</span>
                <span className="text-zinc-300">ESG Global & Alfresco</span>
              </p>
              <p className="mt-3 text-xs leading-relaxed text-zinc-600">{coreStack.join(" · ")}</p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
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
            <p className="mt-6 text-xs leading-relaxed text-zinc-600">
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
          <ol className="mt-10 space-y-5">
            {profile.experience.map((job) => {
              const jobKey = `${job.company}-${job.role}-${job.dates}`;
              const expanded = expandedJobs[jobKey] ?? false;
              const visibleBullets = expanded
                ? job.bullets
                : job.bullets.slice(0, bulletPreviewCount);
              const hiddenCount = job.bullets.length - bulletPreviewCount;

              return (
                <li
                  key={jobKey}
                  className="card-interactive experience-accent py-5 pl-6 pr-5 md:py-6 md:pl-7 md:pr-7"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100">
                        {job.role}
                        <span className="font-normal text-zinc-500"> · {job.company}</span>
                      </h3>
                      {"note" in job && job.note ? (
                        <span className="mt-2 inline-block rounded-md border border-zinc-700 px-2 py-0.5 text-xs font-medium text-zinc-400">
                          {job.note}
                        </span>
                      ) : null}
                    </div>
                    <time className="shrink-0 font-mono text-xs text-zinc-500">{job.dates}</time>
                  </div>
                  <ul className="mt-4 space-y-2.5 leading-relaxed text-zinc-400">
                    {visibleBullets.map((b) => (
                      <li key={b} className="flex gap-2.5">
                        <span className="mt-0.5 shrink-0 text-zinc-600">▹</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {hiddenCount > 0 ? (
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedJobs((prev) => ({ ...prev, [jobKey]: !expanded }))
                      }
                      className="mt-3 text-sm font-medium text-zinc-400 underline decoration-zinc-600 underline-offset-4 transition hover:text-zinc-200"
                    >
                      {expanded ? "Show fewer highlights" : `Show ${hiddenCount} more`}
                    </button>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </section>

        <section id="projects" className="section-shell scroll-mt-24">
          <SectionHeader
            eyebrow="Demos"
            title="Projects"
            description="Side projects with public demos — select a project to watch."
          />
          <div
            className="card mt-8 grid grid-cols-1 gap-2 p-2 sm:grid-cols-3"
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
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                  i === activeProject
                    ? "project-tab-active"
                    : "text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-100"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
          <article className="card video-frame mt-4 overflow-hidden">
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
              <h3 className="text-lg font-medium text-zinc-50">{project.name}</h3>
              <p className="mt-2 font-mono text-xs text-zinc-500">{project.stack}</p>
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
          <ul className="card mt-10 divide-y divide-zinc-800/80 px-6 py-1">
            {profile.education.map((line) => (
              <li
                key={line}
                className="flex gap-3 py-4 text-sm leading-relaxed text-zinc-300"
              >
                <span className="mt-0.5 shrink-0 text-zinc-600" aria-hidden>
                  ◆
                </span>
                <span>{line}</span>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
              Let&apos;s talk
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-tight text-zinc-50 md:text-3xl">
              Open to Java backend and platform roles
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
              {profile.availability} · {profile.location}
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              <a
                href={gmailComposeHref}
                className="text-zinc-400 transition hover:text-zinc-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.email}
              </a>
              <span className="mx-2 text-zinc-700">·</span>
              <a href={mailtoHref} className="transition hover:text-zinc-200">
                Open in mail app
              </a>
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
          <a href={profile.linkedin} className="text-zinc-500 transition-colors hover:text-zinc-300">
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
