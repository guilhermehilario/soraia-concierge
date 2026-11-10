import type { Metadata } from "next";
import { PageIntro, PanelCard } from "../_components/page-parts";
import { SERVICOS } from "../_content/servicos";

export const metadata: Metadata = { title: "Atuação estratégica e projetos" };

export default function AtuacaoPage() {
  return (
    <div className="page-shell">
      <PageIntro title="Atuação estratégica e projetos" subtitle="Conheça nossas áreas de atuação." />

      <div className="card-grid cols-2">
        {SERVICOS.map((servico) => (
          <PanelCard
            key={servico.slug}
            href={`/atuacao/${servico.slug}`}
            numero={servico.numero}
            icone={servico.icone}
            titulo={servico.titulo}
            texto={servico.resumo}
            cta="Saiba mais"
          />
        ))}
      </div>
    </div>
  );
}
