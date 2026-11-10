export type TopicoSobre = {
  slug: string;
  numero: string;
  titulo: string;
  resumo: string;
  icone: React.ReactNode;
  conteudo: React.ReactNode;
};

export const TOPICOS_SOBRE = [
  {
    slug: "o-que-e-uma-concierge",
    numero: "01",
    titulo: "O que é uma Concierge?",
    resumo: "Entenda a origem e a essência dessa profissão de alto nível.",
    icone: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 2.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0-7.5 1.2 2.8L12 5 10.8 4.3 12 1.5Z" />
    ),
    conteudo: (
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
    numero: "02",
    titulo: "O que eu faço?",
    resumo: "A atuação prática e o dia a dia da sua Concierge.",
    icone: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m-8 4h5m5-13H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7l-4-4Zm0 0v4h4" />
    ),
    conteudo: (
      <>
        <p>
          Na prática, atuo como <strong>consultora independente</strong> e extensão operacional de quem me contrata.
          Minha atuação envolve:
        </p>
        <ul className="gold-list">
          {[
            ["Diagnóstico", "ouvir, mapear e identificar onde o negócio ou a agenda do líder está travando."],
            ["Articulação", "gerenciar parceiros, fornecedores e especialistas para cada demanda."],
            [
              "Condução de projetos",
              "estruturação empresarial, projetos personalizados, requisições médicas e desenvolvimento de líderes.",
            ],
            ["Gestão de documentos e prazos", "organização, conferência e acompanhamento até a entrega final."],
            ["Comunicação contínua", "relatórios periódicos e clareza em cada etapa do processo."],
          ].map(([titulo, texto]) => (
            <li key={titulo}>
              <span className="mark">—</span>
              <span>
                <strong>{titulo}</strong>: {texto}
              </span>
            </li>
          ))}
        </ul>
        <p>
          Cada cliente recebe um <em>blueprint</em> próprio: um plano desenhado para a sua realidade, com prazos,
          responsabilidades e resultados esperados definidos desde o início.
        </p>
      </>
    ),
  },
  {
    slug: "visao-e-valores",
    numero: "03",
    titulo: "Visão e Valores",
    resumo: "Os princípios que norteiam cada atendimento.",
    icone: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.3l-4.8 2.6.9-5.4L4.2 8.7l5.4-.8L12 3Z" />
    ),
    conteudo: (
      <>
        <p>
          <strong>Visão:</strong> ser referência em concierge empresarial no Brasil, reconhecida pela capacidade de
          eleger situações complexas e transformá-las em trajetórias elegantes, eficientes e humanas.
        </p>
        <ul className="value-list">
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
          ].map(([titulo, texto]) => (
            <li key={titulo}>
              <span className="value-dot" />
              <span>
                <strong>{titulo}</strong> — {texto}
              </span>
            </li>
          ))}
          <li>
            <span className="value-dot fire" />
            <span>
              <strong style={{ color: "var(--laranja)" }}>Renascimento</strong> — como a fênix, cada crise é tratada
              como oportunidade de recomeço mais forte e mais consciente.
            </span>
          </li>
        </ul>
      </>
    ),
  },
] as const satisfies readonly TopicoSobre[];

export type TopicoSobreSlug = (typeof TOPICOS_SOBRE)[number]["slug"];

export function getTopicoSobre(slug: TopicoSobreSlug): TopicoSobre {
  return TOPICOS_SOBRE.find((t) => t.slug === slug)!;
}
