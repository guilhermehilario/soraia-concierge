import Link from "next/link";

export function PanelCard({
  href,
  art,
  icon,
  title,
  text,
  cta,
}: {
  href: string;
  /** Variação da arte abstrata do topo do card (1 a 4). */
  art: number;
  icon: React.ReactNode;
  title: string;
  text: string;
  cta: string;
}) {
  return (
    <Link href={href} className="panel-card">
      <div className="card-art" data-art={art}>
        <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true">
          {icon}
        </svg>
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <span className="card-cta">
          {cta} <span className="arrow">→</span>
        </span>
      </div>
    </Link>
  );
}
