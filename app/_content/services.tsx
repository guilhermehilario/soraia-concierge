export type Service = {
  slug: string;
  number: string;
  title: string;
  detailTitle: string;
  summary: string;
  icon: React.ReactNode;
  detailIcon: React.ReactNode;
  definition: React.ReactNode;
  included: readonly string[];
  documents: readonly string[];
  guidelines: React.ReactNode;
};

export const SERVICES = [
  {
    slug: "estruturacao-empresarial",
    number: "01",
    title: "Estruturação Empresarial",
    detailTitle: "Estruturação Empresarial",
    summary: "Organização de processos, papéis e rotinas para empresas que precisam de ordem e escala.",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm4 5h.01M11 11h6" />
        <circle cx="8" cy="14" r="1" />
      </>
    ),
    detailIcon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />
    ),
    definition: (
      <>
        Destinado a empresas em início de operação, expansão ou reorganização, este serviço cria{" "}
        <strong>ordem e clareza</strong>: redesenhamos processos, papéis e rotinas para que a estrutura suporte o
        crescimento — em vez de travá-lo. O resultado é uma operação mais leve, previsível e pronta para escalar.
      </>
    ),
    included: [
      "Encontro de diagnóstico e imersão na realidade da empresa",
      "Mapa dos processos existentes e dos pontos de atrito",
      "Desenho da estrutura recomendada e matriz de responsabilidades",
      "Implantação do modelo, com acompanhamento e ajustes",
      "Relatório final com indicadores e plano de evolução contínua",
    ],
    documents: [
      "Contrato social e documentos societários atualizados",
      "Cartão CNPJ e inscrições estaduais/municipais",
      "Organograma atual (se existir)",
      "Descrição de rotinas e demandas recorrentes da operação",
    ],
    guidelines: (
      <>
        O fluxo começa com um encontro de diagnóstico (em média 60 minutos), presencial ou on-line, seguido de
        proposta formal. Todo o processo é conduzido sob <strong>sigilo contratual</strong>, e a duração média do
        projeto varia de 6 a 12 semanas, conforme o porte da empresa.
      </>
    ),
  },
  {
    slug: "projetos-personalizados",
    number: "02",
    title: "Projetos Personalizados",
    detailTitle: "Projetos Personalizados",
    summary: "Planejamento e condução ponta a ponta de projetos sob medida para a sua necessidade.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l3 3L22 4m-4 11v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11" />
    ),
    detailIcon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l3 3L22 4m-4 11v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11" />
    ),
    definition: (
      <>
        Quando a necessidade não cabe em uma prateleira, desenhamos o projeto do zero:{" "}
        <strong>do objetivo ao resultado</strong>. De eventos e lançamentos a mudanças de sede, reestruturações de marca
        ou demandas exclusivas, o cliente conta com um plano completo — conduzido com parceiros selecionados e
        comunicação transparente do início ao fim.
      </>
    ),
    included: [
      "Escuta do objetivo e definição de escopo",
      "Cronograma, orçamento e matriz de riscos aprovados pelo cliente",
      "Seleção e gestão de fornecedores e parceiros",
      "Execução e coordenação operacional",
      "Encerramento com prestações de contas e retratação de aprendizados",
    ],
    documents: [
      "Descrição da necessidade ou do sonho a materializar",
      "Materiais e informações já existentes do negócio",
      "Limites orçamentários e preferências do cliente",
      "Dados de contatos-chave e aprovações internas relevantes",
    ],
    guidelines: (
      <>
        Cada projeto passa por aprovação formal de escopo antes de começar — sem surpresas. Recomenda-se iniciar com{" "}
        <strong>antecedência mínima de 4 semanas</strong>; demandas sazonais (eventos de fim de ano, por exemplo) pedem
        ainda mais folga. Atualizações de status são enviadas em intervalos acordados.
      </>
    ),
  },
  {
    slug: "requisicoes-medicas",
    number: "03",
    title: "Requisições Médicas",
    detailTitle: "Requisições Médicas",
    summary: "Apoio administrativo e de agendamento em jornadas de saúde, com total sigilo.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m-7-7h14M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" opacity=".9" />
    ),
    detailIcon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m-7-7h14" />,
    definition: (
      <>
        Uma jornada de saúde envolve dezenas de detalhes administrativos que desviam a energia de quem deveria estar
        focado em se cuidar. Este serviço oferece <strong>gestão completa da parte burocrática e logística</strong> —
        para o cliente ou para familiares —, sempre com absoluto sigilo e sensibilidade.{" "}
        <em>
          Importante: trata-se de apoio administrativo; não substitui orientação, diagnóstico ou tratamento clínico.
        </em>
      </>
    ),
    included: [
      "Organização de pedidos, exames e laudos em um dossiê único",
      "Agendamento de consultas, exames e procedimentos",
      "Articulação com convênios e prestadores sobre autorizações",
      "Logística de segunda opinião: envio/lotação de documentação",
      "Acompanhamento de prazos, retornos e pendências",
    ],
    documents: [
      "Pedidos médicos e receitas vigentes",
      "Exames e laudos recentes (físicos ou digitais)",
      "Carteira do plano de saúde e documentos pessoais",
      "Termo de confidencialidade e autorização de representação",
    ],
    guidelines: (
      <>
        Toda a informação é tratada conforme a <strong>LGPD e regras de sigilo médico</strong>, com acesso restrito ao
        mínimo necessário. Iniciamos com uma conversa reservada para entender prioridades e urgências; situações de alta
        criticidade recebem prioridade de fila e canal de comunicação direto.
      </>
    ),
  },
  {
    slug: "desenvolvimento-de-lideres",
    number: "04",
    title: "Desenvolvimento Empresarial para Líderes e Gestores",
    detailTitle: "Desenvolvimento Empresarial para Líderes e Gestores",
    summary: "Trilhas de evolução para quem lidera pessoas e resultados.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-4 7c-4.4 0-8 2.7-8 6v1h16v-1c0-3.3-3.6-6-8-6Zm7-6.5 1.5 1.5L23 6.5" />
    ),
    detailIcon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21c0-3.3 3.6-6 8-6s8 2.7 8 6" />
        <path strokeLinecap="round" d="M19.5 4.5 21 3l1 1.5L19.5 7 18 6l1.5-1.5Z" />
      </>
    ),
    definition: (
      <>
        Liderar é um papel que exige evolução constante. Este serviço acompanha{" "}
        <strong>líderes, gestores e fundadores</strong> em um processo estruturado de crescimento pessoal e
        profissional — do autoconhecimento à prática de gestão —, com trilhas desenhadas a partir do momento real de
        cada pessoa e dos desafios concretos do seu negócio.
      </>
    ),
    included: [
      "Sessão inicial de mapeamento do perfil e dos desafios atuais",
      "Diagnóstico 360° (proposta, limites e relacionamentos)",
      "Trilha de desenvolvimento com agenda de encontros e pautas",
      "Ferramentas práticas de gestão, comunicação e condução de times",
      "Plano individual de evolução com marcos e revisão periódica",
    ],
    documents: [
      "Avaliações de desempenho e feedbacks recentes (se houver)",
      "Metas e indicadores da área ou da empresa",
      "Descrição do papel e escopo de atuação do líder",
      "Compromisso de agenda e de participação ativa",
    ],
    guidelines: (
      <>
        As trilhas têm duração sugerida de <strong>3 a 6 meses</strong>, com encontros quinzenais ou mensais. O
        conteúdo das sessões é confidencial — nada é compartilhado com a empresa contratante sem o consentimento
        expresso do líder. Resultados são revisados em marcos combinados no início do processo.
      </>
    ),
  },
] as const satisfies readonly Service[];

export type ServiceSlug = (typeof SERVICES)[number]["slug"];

export function getService(slug: ServiceSlug): Service {
  return SERVICES.find((s) => s.slug === slug)!;
}
