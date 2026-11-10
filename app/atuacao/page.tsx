import type { Metadata } from "next";
import { PageIntro } from "../_components/page-intro";
import { PanelCard } from "../_components/panel-card";
import { SERVICES } from "../_content/services";

export const metadata: Metadata = { title: "Atuação estratégica e projetos" };

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <PageIntro title="Atuação estratégica e projetos" subtitle="Conheça nossas áreas de atuação." />

      <div className="card-grid cols-2">
        {SERVICES.map((service, index) => (
          <PanelCard
            key={service.slug}
            href={`/atuacao/${service.slug}`}
            art={index + 1}
            icon={service.icon}
            title={service.title}
            text={service.summary}
            cta="Saiba mais"
          />
        ))}
      </div>
    </div>
  );
}
