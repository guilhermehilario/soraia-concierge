import type { Metadata } from "next";
import Image from "next/image";
import { ContactButton } from "../_components/contact";
import { PageIntro } from "../_components/page-parts";

export const metadata: Metadata = { title: "Parcerias" };

const COMPANIES: { initial: string; name: string; description: string; logo?: string }[] = [
  { initial: "A", name: "Aliança Jurídica", description: "Assessoria jurídica e societária" },
  { initial: "C", name: "Conta Prisma", description: "Contabilidade e fiscal" },
  { initial: "V", name: "Vitalis Saúde", description: "Gestão de saúde corporativa" },
  { initial: "A", name: "Áurea Peoples", description: "RH e desenvolvimento de pessoas" },
  { initial: "M", name: "Mérito Marketing", description: "Branding e comunicação" },
];

const PROFESSIONALS = [
  {
    initial: "H",
    name: "Helena Duarte",
    area: "Advocacia empresarial",
    description: "Estruturação societária",
  },
  {
    initial: "R",
    name: "Rafael Moreira",
    area: "Gestão hospitalar",
    description: "Requisições médicas",
  },
  {
    initial: "L",
    name: "Luiza Campos",
    area: "Psicologia organizacional",
    description: "Desenvolvimento de líderes",
  },
];

export default function PartnersPage() {
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
        A SORAIA acredita que grandes entregas nascem de grandes alianças. Este espaço é dedicado às
        empresas, organizações e profissionais que caminham como parceiros em cada projeto.
      </p>

      <h3 className="partner-section-title">Empresas e organizações</h3>
      <div className="partner-grid">
        {COMPANIES.map((company) => (
          <div key={company.name} className="partner-card">
            <div className="partner-badge">
              {company.logo ? (
                <Image src={company.logo} alt="" width={80} height={80} />
              ) : (
                company.initial
              )}
            </div>
            <h4 className="partner-name">{company.name}</h4>
            <p className="partner-desc">{company.description}</p>
          </div>
        ))}
        <div className="partner-card placeholder">
          <div className="partner-badge">+</div>
          <h4 className="partner-name">Sua empresa aqui</h4>
          <p className="partner-desc">Espaço reservado às novas parcerias</p>
        </div>
      </div>

      <h3 className="partner-section-title">Profissionais</h3>
      <div className="partner-grid">
        {PROFESSIONALS.map((professional) => (
          <div key={professional.name} className="partner-card">
            <div className="partner-badge">{professional.initial}</div>
            <h4 className="partner-name">{professional.name}</h4>
            <p className="partner-area">{professional.area}</p>
            <p className="partner-desc">{professional.description}</p>
          </div>
        ))}
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
