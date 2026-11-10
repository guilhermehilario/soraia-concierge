export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: React.ReactNode;
  definition: React.ReactNode;
  included: readonly string[];
  documents: readonly string[];
  guidelines: React.ReactNode;
};

export const SERVICES = [
  {
    slug: "estruturacao-empresarial",
    title: "Estruturação Empresarial",
    summary: "Organização de processos, papéis e rotinas para empresas que precisam de ordem e escala.",
    icon: (
      // Organograma: papéis e estrutura.
      <>
        <rect x="9" y="3" width="6" height="4.5" rx="1" />
        <rect x="2.5" y="16.5" width="5" height="4.5" rx="1" />
        <rect x="9.5" y="16.5" width="5" height="4.5" rx="1" />
        <rect x="16.5" y="16.5" width="5" height="4.5" rx="1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5v9M5 16.5V12h14v4.5" />
      </>
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
    title: "Projetos Personalizados",
    summary: "Planejamento e condução ponta a ponta de projetos sob medida para a sua necessidade.",
    icon: (
      // Compasso de desenho: projeto feito sob medida.
      <>
        <circle cx="12" cy="4.5" r="1.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.2 6.1 6 20.5M12.8 6.1 18 20.5M8.3 14.2c2.3 1.2 5.1 1.2 7.4 0" />
      </>
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
    title: "Requisições Médicas",
    summary: "Apoio administrativo e de agendamento em jornadas de saúde, com total sigilo.",
    icon: (
      // Prancheta com cruz: pedidos, exames e laudos organizados.
      <>
        <rect x="5" y="4.5" width="14" height="17" rx="2" />
        <rect x="9" y="2.5" width="6" height="3.5" rx="1" />
        <path strokeLinecap="round" d="M12 10.5v6M9 13.5h6" />
      </>
    ),
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
    title: "Desenvolvimento Empresarial para Líderes e Gestores",
    summary: "Trilhas de evolução para quem lidera pessoas e resultados.",
    icon: (
      // Degraus com bandeira: trilha de evolução do líder.
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 20.5h5V16h5v-4.5h5V7h3M18 7V2.5l3.5 1.4L18 5.3"
      />
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

export function findService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
