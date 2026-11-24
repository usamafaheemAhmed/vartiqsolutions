export function PageHero({
  tag,
  title,
  subtitle,
}: {
  tag: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="bg-hero relative overflow-hidden border-b border-border/60">
      <div
        className="bg-dots absolute right-10 top-10 hidden h-28 w-40 opacity-60 md:block"
        aria-hidden="true"
      />
      <div className="container-site relative py-20 text-center md:py-24">
        <span className="section-tag animate-fade-up">{tag}</span>
        <h1 className="mx-auto mt-5 max-w-3xl animate-fade-up text-4xl font-extrabold text-foreground [animation-delay:80ms] md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl animate-fade-up text-lg text-muted-foreground [animation-delay:160ms]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
