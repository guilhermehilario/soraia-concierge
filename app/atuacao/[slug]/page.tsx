import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ContactButton } from "../../_components/contact";
import { GoldList, GoldListItem } from "../../_components/gold-list";
import { PageIntroHeading, PageIntroTop } from "../../_components/page-intro";
import { SERVICES, findService } from "../../_content/services";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/atuacao/[slug]">): Promise<Metadata> {
  const service = findService((await params).slug);
  return service ? { title: service.title } : {};
}

type Section = { title: string; body: React.ReactNode };

function ItemList({ items }: { items: readonly string[] }) {
  return (
    <GoldList>
      {items.map((item) => (
        <GoldListItem key={item}>{item}</GoldListItem>
      ))}
    </GoldList>
  );
}

// O que depende do slug fica dentro do Suspense; o resto entra no App Shell compartilhado.
async function ServiceDetail({ params }: Pick<PageProps<"/atuacao/[slug]">, "params">) {
  const service = findService((await params).slug);
  // Com Cache Components não há `dynamicParams = false`: slugs fora da lista caem aqui.
  if (!service) notFound();

  // Seções sem conteúdo saem da lista; a numeração acompanha a posição.
  const candidates: (Section | false)[] = [
    { title: "Definição", body: <p>{service.definition}</p> },
    { title: "O que está incluído", body: <ItemList items={service.included} /> },
    service.documents.length > 0 && {
      title: "Documentos necessários",
      body: <ItemList items={service.documents} />,
    },
    { title: "Orientações", body: <p>{service.guidelines}</p> },
  ];
  const sections = candidates.filter((section): section is Section => Boolean(section));

  return (
    <>
      <PageIntroHeading title={service.title} subtitle={service.summary} />

      <div className="detail-grid">
        {sections.map((section, index) => (
          <div key={section.title} className="content-card">
            <h3>
              {index + 1} · {section.title}
            </h3>
            {section.body}
          </div>
        ))}
      </div>
    </>
  );
}

export default function Page({ params }: PageProps<"/atuacao/[slug]">) {
  return (
    <div className="page-shell">
      <PageIntroTop
        eyebrow="Atuação estratégica e projetos"
        back={{ href: "/atuacao", label: "Voltar às áreas de atuação" }}
      />
      <Suspense fallback={<div className="gold-rule left" />}>
        <ServiceDetail params={params} />
      </Suspense>

      <div className="btn-row">
        <ContactButton className="btn btn-gold">Falar com a Concierge</ContactButton>
        <Link href="/atuacao" className="btn btn-outline">
          Ver outros serviços
        </Link>
      </div>
    </div>
  );
}
