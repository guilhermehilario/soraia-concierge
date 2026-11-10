import type { Metadata } from "next";
import { PageIntro, PanelCard } from "../_components/page-parts";
import { SERVICES } from "../_content/services";

export const metadata: Metadata = { title: "Atuação estratégica e projetos" };

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <PageIntro title="Atuação estratégica e projetos" subtitle="Conheça nossas áreas de atuação." />

      <div className="card-grid cols-2">
        {SERVICES.map((service) => (
          <PanelCard
            key={service.slug}
            href={`/atuacao/${service.slug}`}
            number={service.number}
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
