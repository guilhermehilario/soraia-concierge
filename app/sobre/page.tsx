import type { Metadata } from "next";
import { PageIntro, PanelCard } from "../_components/page-parts";
import { TOPICOS_SOBRE } from "../_content/sobre";

export const metadata: Metadata = { title: "Conheça a Concierge" };

export default function SobrePage() {
  return (
    <div className="page-shell">
      <PageIntro title="Conheça a Concierge" subtitle="O que é uma Concierge?" />

      <div className="card-grid cols-3">
        {TOPICOS_SOBRE.map((topico) => (
          <PanelCard
            key={topico.slug}
            href={`/sobre/${topico.slug}`}
            icone={topico.icone}
            titulo={topico.titulo}
            texto={topico.resumo}
            cta="Explorar"
          />
        ))}
      </div>
    </div>
  );
}
