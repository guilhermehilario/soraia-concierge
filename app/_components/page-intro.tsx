import Link from "next/link";

export function PageIntro({
  title,
  subtitle,
  eyebrow = "Soraia · Concierge Empresarial",
  back = { href: "/", label: "Voltar à página inicial" },
}: {
  title: string;
  subtitle: string;
  eyebrow?: string;
  back?: { href: string; label: string };
}) {
  return (
    <>
      <Link href={back.href} className="back-link">
        ← {back.label}
      </Link>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="page-title">{title}</h2>
      <p className="page-subtitle">{subtitle}</p>
      <div className="gold-rule left" />
    </>
  );
}
