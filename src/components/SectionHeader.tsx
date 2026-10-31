type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header className="max-w-2xl">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-teal-400/80 to-transparent" aria-hidden />
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal-400/95">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-zinc-50 md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-zinc-400">{description}</p>
      ) : null}
    </header>
  );
}
