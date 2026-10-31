type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header className="max-w-2xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal-500/90">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-zinc-500">{description}</p>
      ) : null}
    </header>
  );
}
