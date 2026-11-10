import { GoldList, GoldListItem } from "../_components/gold-list";

export type AboutTopic = {
  slug: string;
  title: string;
  summary: string;
  icon: React.ReactNode;
  content: React.ReactNode;
};

export const ABOUT_TOPICS = [
  {
    slug: "o-que-e-uma-concierge",
    title: "O que é uma Concierge?",
    summary: "Entenda a origem e a essência dessa profissão de alto nível.",
    icon: (
      // Campainha de balcão: o símbolo do concierge de hotel.
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16.5a8 8 0 0 1 16 0M2.5 19h19M12 8.5V6.5M10.25 5.5h3.5M7.9 13.7a4.6 4.6 0 0 1 2.4-2.5"
      />
    ),
    content: (
      <>
        <p>
          A palavra <em>concierge</em> nasceu na tradição dos grandes hotéis e palácios europeus: era a pessoa que
          conhecia todos os segredos do prédio, abria as portas certas, resolvia imprevistos e cuidava de cada detalhe
          para que os hóspedes tivessem uma experiência impecável — sem precisar se preocupar com nada.
        </p>
        <p>
          No contexto <strong>empresarial</strong>, o conceito evoluiu: uma <em>Concierge Empresarial</em> é uma
          profissional de confiança que atua como <strong>ponte entre demandas e soluções</strong>. Ela organiza,
          articula e conduz projetos e necessidades de empresas, líderes e famílias empreendedoras — desde a
          estruturação de processos internos até demandas pessoais que impactam o desempenho profissional, como
          questões de saúde.
        </p>
        <p>
          Mais do que executar tarefas, a Concierge <strong>antecipa</strong>: entende o cenário, reúne os parceiros
          certos e transforma problemas dispersos em fluxos claros e elegantes de resolução.
        </p>
        <blockquote>“Não deixarei que o aceitável seja o inimigo do extraordinário.”</blockquote>
      </>
    ),
  },
  {
    slug: "o-que-eu-faco",
    title: "O que eu faço?",
    summary: "A atuação prática e o dia a dia da sua Concierge.",
    icon: (
      // Percurso conduzido do início à entrega.
      <>
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="4" r="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 18h6.5a3.5 3.5 0 0 0 0-7h-3a3.5 3.5 0 0 1 0-7H17" />
      </>
    ),
    content: (
      <>
        <p>
          Na prática, atuo como <strong>consultora independente</strong> e extensão operacional de quem me contrata.
          Minha atuação envolve:
        </p>
        <GoldList>
          {[
            ["Diagnóstico", "ouvir, mapear e identificar onde o negócio ou a agenda do líder está travando."],
            ["Articulação", "gerenciar parceiros, fornecedores e especialistas para cada demanda."],
            [
              "Condução de projetos",
              "estruturação empresarial, projetos personalizados, requisições médicas e desenvolvimento de líderes.",
            ],
            ["Gestão de documentos e prazos", "organização, conferência e acompanhamento até a entrega final."],
            ["Comunicação contínua", "relatórios periódicos e clareza em cada etapa do processo."],
          ].map(([title, text]) => (
            <GoldListItem key={title}>
              <strong>{title}</strong>: {text}
            </GoldListItem>
          ))}
        </GoldList>
        <p>
          Cada cliente recebe um <em>blueprint</em> próprio: um plano desenhado para a sua realidade, com prazos,
          responsabilidades e resultados esperados definidos desde o início.
        </p>
      </>
    ),
  },
  {
    slug: "visao-e-valores",
    title: "Visão e Valores",
    summary: "Os princípios que norteiam cada atendimento.",
    icon: (
      // Bússola: os princípios que norteiam.
      <>
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 8.5 13 13l-4.5 2.5L11 11Z" />
        <path strokeLinecap="round" d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21" />
      </>
    ),
    content: (
      <>
        <p>
          <strong>Visão:</strong> ser referência em concierge empresarial no Brasil, reconhecida pela capacidade de
          eleger situações complexas e transformá-las em trajetórias elegantes, eficientes e humanas.
        </p>
        <GoldList>
          {[
            [
              "Discrição & Confidencialidade",
              "tudo o que é compartilhado permanece protegido, dentro dos melhores padrões de sigilo e da LGPD.",
            ],
            [
              "Ética & Transparência",
              "escopos, prazos e valores definidos e comunicados com clareza desde o primeiro contato.",
            ],
            ["Excelência", "o detalhe importa. Cada entrega é revisada como se fosse a única."],
            [
              "Personalização",
              "não existem soluções de prateleira: cada plano nasce do contexto real de cada cliente.",
            ],
          ].map(([title, text]) => (
            <GoldListItem key={title}>
              <strong>{title}</strong> — {text}
            </GoldListItem>
          ))}
          <GoldListItem>
            <strong className="value-fire">Renascimento</strong> — como a fênix, cada crise é tratada como
            oportunidade de recomeço mais forte e mais consciente.
          </GoldListItem>
        </GoldList>
      </>
    ),
  },
] as const satisfies readonly AboutTopic[];

export function findAboutTopic(slug: string): AboutTopic | undefined {
  return ABOUT_TOPICS.find((t) => t.slug === slug);
}
