import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "../../_components/page-intro";
import { ABOUT_TOPICS, findAboutTopic } from "../../_content/about";

export function generateStaticParams() {
  return ABOUT_TOPICS.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: PageProps<"/sobre/[slug]">): Promise<Metadata> {
  const topic = findAboutTopic((await params).slug);
  return topic ? { title: topic.title } : {};
}

export default async function Page({ params }: PageProps<"/sobre/[slug]">) {
  const topic = findAboutTopic((await params).slug);
  // Com Cache Components não há `dynamicParams = false`: slugs fora da lista caem aqui.
  if (!topic) notFound();

  return (
    <div className="page-shell">
      <PageIntro
        title={topic.title}
        subtitle={topic.summary}
        eyebrow="Conheça a Concierge"
        back={{ href: "/sobre", label: "Voltar à página Conheça a Concierge" }}
      />
      <div className="topic-body">{topic.content}</div>
    </div>
  );
}
