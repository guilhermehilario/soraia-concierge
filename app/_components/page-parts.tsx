import Link from "next/link";
import type { Service } from "../_content/services";
import type { AboutTopic } from "../_content/about";
import { ContactButton } from "./contact";

export function PageIntro({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <>
      <Link href="/" className="back-link">
        ← Voltar à página inicial
      </Link>
      <p className="eyebrow">Soraia · Concierge Empresarial</p>
      <h2 className="page-title gold-text">{title}</h2>
      <p className="page-subtitle">{subtitle}</p>
      <div className="gold-rule left" />
    </>
  );
}

export function PanelCard({
  href,
  number,
  icon,
  title,
  text,
  cta,
}: {
  href: string;
  number?: string;
  icon: React.ReactNode;
  title: string;
  text: string;
  cta: string;
}) {
  return (
    <Link href={href} className="panel-card">
      <div className="card-art">
        {number && <span className="card-number">{number}</span>}
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

export function AboutTopicDetail({ topic }: { topic: AboutTopic }) {
  return (
    <div className="page-shell narrow">
      <Link href="/sobre" className="back-link">
        ← Voltar à página Conheça a Concierge
      </Link>

      <div className="content-card" style={{ marginTop: "2rem" }}>
        <p className="eyebrow" style={{ marginTop: 0 }}>
          Conheça a Concierge · {topic.number}
        </p>
        <h2 className="detail-title gold-text" style={{ marginTop: "0.6rem" }}>
          {topic.title}
        </h2>
        <div className="gold-rule left detail-rule" />
        {topic.content}
      </div>
    </div>
  );
}

export function ServiceDetail({ service }: { service: Service }) {
  const hasDocuments = service.documents.length > 0;

  return (
    <div className="page-shell narrow">
      <Link href="/atuacao" className="back-link">
        ← Voltar às áreas de atuação
      </Link>
      <div className="detail-banner">
        <span className="banner-label">Serviço {service.number}</span>
        <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true">
          {service.detailIcon}
        </svg>
      </div>
      <h2 className="detail-title gold-text">{service.detailTitle}</h2>
      <div className="gold-rule left detail-rule" />

      <div className="content-card">
        <h3>1 · Definição</h3>
        <p>{service.definition}</p>
      </div>

      <div className="content-card">
        <h3>2 · O que está incluído</h3>
        <ul className="gold-list">
          {service.included.map((item) => (
            <li key={item}>
              <span className="mark">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {hasDocuments && (
        <div className="content-card">
          <h3>3 · Documentos necessários</h3>
          <ul className="gold-list">
            {service.documents.map((item) => (
              <li key={item}>
                <span className="mark">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="content-card">
        <h3>{hasDocuments ? 4 : 3} · Orientações</h3>
        <p>{service.guidelines}</p>
      </div>

      <div className="btn-row">
        <ContactButton className="btn btn-gold">Falar com a Concierge</ContactButton>
        <Link href="/atuacao" className="btn btn-outline">
          Ver outros serviços
        </Link>
      </div>
    </div>
  );
}
