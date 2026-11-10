import type { Metadata } from "next";
import Image from "next/image";
import { ContactButton } from "../_components/contact";
import { PageIntro } from "../_components/page-parts";

export const metadata: Metadata = { title: "Parcerias" };

const EMPRESAS: { inicial: string; nome: string; descricao: string; logo?: string }[] = [
  { inicial: "A", nome: "Aliança Jurídica", descricao: "Assessoria jurídica e societária" },
  { inicial: "C", nome: "Conta Prisma", descricao: "Contabilidade e fiscal" },
  { inicial: "V", nome: "Vitalis Saúde", descricao: "Gestão de saúde corporativa" },
  { inicial: "A", nome: "Áurea Peoples", descricao: "RH e desenvolvimento de pessoas" },
  { inicial: "M", nome: "Mérito Marketing", descricao: "Branding e comunicação" },
];

const PROFISSIONAIS = [
  {
    inicial: "H",
    nome: "Helena Duarte",
    area: "Advocacia empresarial",
    descricao: "Estruturação societária",
  },
  {
    inicial: "R",
    nome: "Rafael Moreira",
    area: "Gestão hospitalar",
    descricao: "Requisições médicas",
  },
  {
    inicial: "L",
    nome: "Luiza Campos",
    area: "Psicologia organizacional",
    descricao: "Desenvolvimento de líderes",
  },
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
        A SORAIA acredita que grandes entregas nascem de grandes alianças. Este espaço é dedicado às
        empresas, organizações e profissionais que caminham como parceiros em cada projeto.
      </p>

      <h3 className="partner-section-title">Empresas e organizações</h3>
      <div className="partner-grid">
        {EMPRESAS.map((empresa) => (
          <div key={empresa.nome} className="partner-card">
            <div className="partner-badge">
              {empresa.logo ? (
                <Image src={empresa.logo} alt="" width={80} height={80} />
              ) : (
                empresa.inicial
              )}
            </div>
            <h4 className="partner-name">{empresa.nome}</h4>
            <p className="partner-desc">{empresa.descricao}</p>
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
        {PROFISSIONAIS.map((profissional) => (
          <div key={profissional.nome} className="partner-card">
            <div className="partner-badge">{profissional.inicial}</div>
            <h4 className="partner-name">{profissional.nome}</h4>
            <p className="partner-area">{profissional.area}</p>
            <p className="partner-desc">{profissional.descricao}</p>
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
