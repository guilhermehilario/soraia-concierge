import type { Metadata } from "next";
import { PageIntro, PanelCard } from "../_components/page-parts";
import { ABOUT_TOPICS } from "../_content/about";

export const metadata: Metadata = { title: "Conheça a Concierge" };

export default function AboutPage() {
  return (
    <div className="page-shell">
      <PageIntro title="Conheça a Concierge" subtitle="Escolha um tema para saber mais." />

      <div className="card-grid cols-3">
        {ABOUT_TOPICS.map((topic) => (
          <PanelCard
            key={topic.slug}
            href={`/sobre/${topic.slug}`}
            icon={topic.icon}
            title={topic.title}
            text={topic.summary}
            cta="Explorar"
          />
        ))}
      </div>
    </div>
  );
}
