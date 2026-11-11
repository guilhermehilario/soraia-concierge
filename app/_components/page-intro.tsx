import Link from "next/link";

type Back = { href: string; label: string };

/** Parte fixa da introdução (voltar + eyebrow): não depende da URL, fica no App Shell. */
export function PageIntroTop({
  eyebrow = "Soraia · Concierge Empresarial",
  back = { href: "/", label: "Voltar à página inicial" },
}: {
  eyebrow?: string;
  back?: Back;
}) {
  return (
    <>
      <Link href={back.href} className="back-link">
        ← {back.label}
      </Link>
      <p className="eyebrow">{eyebrow}</p>
    </>
  );
}

/** Título, subtítulo e fio dourado. */
export function PageIntroHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <>
      <h2 className="page-title">{title}</h2>
      <p className="page-subtitle">{subtitle}</p>
      <div className="gold-rule left" />
    </>
  );
}

export function PageIntro({
  title,
  subtitle,
  eyebrow,
  back,
}: {
  title: string;
  subtitle: string;
  eyebrow?: string;
  back?: Back;
}) {
  return (
    <>
      <PageIntroTop eyebrow={eyebrow} back={back} />
      <PageIntroHeading title={title} subtitle={subtitle} />
    </>
  );
}
