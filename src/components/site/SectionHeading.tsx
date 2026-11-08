interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div>
      <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-xl text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}