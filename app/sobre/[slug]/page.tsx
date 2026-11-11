import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PageIntroHeading, PageIntroTop } from "../../_components/page-intro";
import { ABOUT_TOPICS, findAboutTopic } from "../../_content/about";

export function generateStaticParams() {
  return ABOUT_TOPICS.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: PageProps<"/sobre/[slug]">): Promise<Metadata> {
  const topic = findAboutTopic((await params).slug);
  return topic ? { title: topic.title } : {};
}

// O que depende do slug fica dentro do Suspense; o resto entra no App Shell compartilhado.
async function Topic({ params }: Pick<PageProps<"/sobre/[slug]">, "params">) {
  const topic = findAboutTopic((await params).slug);
  // Com Cache Components não há `dynamicParams = false`: slugs fora da lista caem aqui.
  if (!topic) notFound();

  return (
    <>
      <PageIntroHeading title={topic.title} subtitle={topic.summary} />
      <div className="topic-body">{topic.content}</div>
    </>
  );
}

export default function Page({ params }: PageProps<"/sobre/[slug]">) {
  return (
    <div className="page-shell">
      <PageIntroTop
        eyebrow="Conheça a Concierge"
        back={{ href: "/sobre", label: "Voltar à página Conheça a Concierge" }}
      />
      <Suspense fallback={<div className="gold-rule left" />}>
        <Topic params={params} />
      </Suspense>
    </div>
  );
}
