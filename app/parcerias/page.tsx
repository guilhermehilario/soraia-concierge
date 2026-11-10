import type { Metadata } from "next";
import { ContactButton } from "../_components/contact";
import { PageIntro } from "../_components/page-parts";

export const metadata: Metadata = { title: "Parcerias" };

const PARCEIROS = [
  { inicial: "A", nome: "Aliança Jurídica", descricao: "Assessoria jurídica e societária" },
  { inicial: "C", nome: "Conta Prisma", descricao: "Contabilidade e fiscal" },
  { inicial: "V", nome: "Vitalis Saúde", descricao: "Gestão de saúde corporativa" },
  { inicial: "A", nome: "Áurea Peoples", descricao: "RH e desenvolvimento de pessoas" },
  { inicial: "M", nome: "Mérito Marketing", descricao: "Branding e comunicação" },
];

export default function ParceriasPage() {
  return (
    <div className="page-shell">
      <PageIntro title="Parcerias" subtitle="Conexões e parcerias profissionais." />

      <p
        style={{
          maxWidth: "42rem",
          margin: "0 0 2.5rem",
          fontSize: "0.95rem",
          fontWeight: 300,
          lineHeight: 1.8,
          color: "rgba(255,255,255,0.72)",
        }}
      >
        A SORAIA acredita que grandes entregas nascem de grandes alianças. Este espaço é dedicado às empresas,
        organizações e profissionais que caminham como parceiros em cada projeto.
      </p>

      <div className="partner-grid">
        {PARCEIROS.map((parceiro) => (
          <div key={parceiro.nome} className="partner-card">
            <div className="partner-badge">{parceiro.inicial}</div>
            <h3 className="partner-name">{parceiro.nome}</h3>
            <p className="partner-desc">{parceiro.descricao}</p>
          </div>
        ))}
        <div className="partner-card placeholder">
          <div className="partner-badge">+</div>
          <h3 className="partner-name">Sua empresa aqui</h3>
          <p className="partner-desc">Espaço reservado às novas parcerias</p>
        </div>
      </div>

      <div className="partner-cta">
        <h3>Quer fazer parte?</h3>
        <p>Trocamos conexões com profissionais e empresas que valorizam excelência e ética.</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <ContactButton className="btn btn-gold">Entrar em contato</ContactButton>
        </div>
      </div>
    </div>
  );
}
