# Soraia · Concierge Empresarial

Site institucional da Soraia, concierge empresarial. Apresenta quem ela é, as quatro áreas de atuação e as parcerias, e tem um assistente virtual que orienta o visitante pelos serviços.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) com React 19 e TypeScript
- Tailwind CSS 4, integrado via `@tailwindcss/turbopack`, junto com CSS próprio em `app/globals.css`
- Fontes via `next/font`: Montserrat (texto) e Cormorant Garamond (títulos)

> Esta versão do Next tem APIs e convenções diferentes das versões anteriores. Antes de mexer em algo do framework, consulte a documentação local em `node_modules/next/dist/docs/` (veja [AGENTS.md](AGENTS.md)).

## Como rodar

```bash
yarn install
yarn dev      # http://localhost:3000
yarn lint
yarn build    # build de produção
yarn start    # serve o build
```

## Páginas

| Rota                                                                                                                                           | Conteúdo                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `/`                                                                                                                                            | Home: fênix ao fundo, logo e botão "Saiba mais"                                              |
| `/sobre`                                                                                                                                       | Conheça a Concierge: três tópicos                                                            |
| `/sobre/o-que-e-uma-concierge`, `/sobre/o-que-eu-faco`, `/sobre/visao-e-valores`                                                               | Um tópico cada                                                                               |
| `/atuacao`                                                                                                                                     | Atuação estratégica e projetos: os quatro serviços                                           |
| `/atuacao/estruturacao-empresarial`, `/atuacao/projetos-personalizados`, `/atuacao/requisicoes-medicas`, `/atuacao/desenvolvimento-de-lideres` | Página de cada serviço: Definição, O que está incluído, Documentos necessários e Orientações |
| `/parcerias`                                                                                                                                   | Empresas, organizações e profissionais parceiros                                             |

Em todas as páginas: o header com menu e o botão Contato (abre um modal), o rodapé (exceto na home) e o assistente virtual no canto da tela.

## Estrutura

```
app/
  _components/   Componentes compartilhados: header, footer, modal de contato, chat e blocos de página
  _content/      Textos e dados: serviços (services.tsx), tópicos de "Sobre" (about.tsx), contato e menu (site.ts)
  atuacao/       Listagem dos serviços e [slug]/, que gera a página de cada um
  sobre/         Listagem dos tópicos e [slug]/, que gera a página de cada um
  parcerias/     Página de parcerias (com a lista de parceiros no próprio arquivo)
  globals.css    Tokens de cor e fonte e estilos das páginas internas
  layout.tsx     Layout raiz: fontes, header, footer, chat e contato
  template.tsx   Animação de entrada a cada navegação
public/images/   Fênix da home, logo e ícone da chama
```

## Onde editar o conteúdo

- **Serviços:** `app/_content/services.tsx`. Cada serviço tem título, resumo, ícone, definição, itens incluídos, documentos e orientações. Se a lista `documents` ficar vazia, a seção "Documentos necessários" deixa de aparecer na página.
- **Tópicos de "Sobre":** `app/_content/about.tsx`.
- **Parceiros:** listas `COMPANIES` e `PROFESSIONALS` em `app/parcerias/page.tsx`. O campo `logo` é opcional; sem ele, aparece a inicial do nome.
- **Contato** (e-mail, telefone e horário) e **menu**: `app/_content/site.ts`. O modal de contato, o assistente, o header e o rodapé leem dali.
- **Assistente virtual:** perguntas rápidas e respostas em `app/_components/chat.tsx`. As respostas são escolhidas por palavras-chave na função `findAnswer`; não há IA nem chamada externa.

Para criar um serviço ou tópico novo, basta adicionar o item em `services.tsx` ou `about.tsx`: a página e a URL (a partir do `slug`) são geradas automaticamente no build.

## Visual

- Cores da marca como tokens em `app/globals.css`: `gold`, `gold-light`, `orange`, `purple`, `lunar-silver`, `night` e `night-deep`. Elas também valem como classes do Tailwind (`text-gold-light`, `bg-night`…).
- A home é a referência visual; as páginas internas seguem a mesma identidade.
- A arte abstrata no topo dos cards é definida no CSS pelo atributo `data-art` (variações de 1 a 4).

## Convenções

- Código (variáveis, tipos, componentes, classes CSS) em inglês.
- Textos exibidos e URLs em português.
