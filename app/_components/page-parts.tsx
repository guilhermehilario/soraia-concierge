import Link from "next/link";
import type { Servico } from "../_content/servicos";
import type { TopicoSobre } from "../_content/sobre";
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
  numero,
  icone,
  titulo,
  texto,
  cta,
}: {
  href: string;
  numero?: string;
  icone: React.ReactNode;
  titulo: string;
  texto: string;
  cta: string;
}) {
  return (
    <Link href={href} className="panel-card">
      <div className="card-art">
        {numero && <span className="card-number">{numero}</span>}
        <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true">
          {icone}
        </svg>
      </div>
      <div className="card-body">
        <h3 className="card-title">{titulo}</h3>
        <p className="card-text">{texto}</p>
        <span className="card-cta">
          {cta} <span className="arrow">→</span>
        </span>
      </div>
    </Link>
  );
}

export function TopicoSobreDetalhe({ topico }: { topico: TopicoSobre }) {
  return (
    <div className="page-shell narrow">
      <Link href="/sobre" className="back-link">
        ← Voltar à página Conheça a Concierge
      </Link>

      <div className="content-card" style={{ marginTop: "2rem" }}>
        <p className="eyebrow" style={{ marginTop: 0 }}>
          Conheça a Concierge · {topico.numero}
        </p>
        <h2 className="detail-title gold-text" style={{ marginTop: "0.6rem" }}>
          {topico.titulo}
        </h2>
        <div className="gold-rule left detail-rule" />
        {topico.conteudo}
      </div>
    </div>
  );
}

export function ServicoDetalhe({ servico }: { servico: Servico }) {
  const temDocumentos = servico.documentos.length > 0;

  return (
    <div className="page-shell narrow">
      <Link href="/atuacao" className="back-link">
        ← Voltar às áreas de atuação
      </Link>
      <div className="detail-banner">
        <span className="banner-label">Serviço {servico.numero}</span>
        <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true">
          {servico.iconeDetalhe}
        </svg>
      </div>
      <h2 className="detail-title gold-text">{servico.tituloDetalhe}</h2>
      <div className="gold-rule left detail-rule" />

      <div className="content-card">
        <h3>1 · Definição</h3>
        <p>{servico.definicao}</p>
      </div>

      <div className="content-card">
        <h3>2 · O que está incluído</h3>
        <ul className="gold-list">
          {servico.incluido.map((item) => (
            <li key={item}>
              <span className="mark">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {temDocumentos && (
        <div className="content-card">
          <h3>3 · Documentos necessários</h3>
          <ul className="gold-list">
            {servico.documentos.map((item) => (
              <li key={item}>
                <span className="mark">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="content-card">
        <h3>{temDocumentos ? 4 : 3} · Orientações</h3>
        <p>{servico.orientacoes}</p>
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
