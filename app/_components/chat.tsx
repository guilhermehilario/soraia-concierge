"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Message = { id: number; who: "bot" | "user"; content: React.ReactNode };

const G = ({ children }: { children: React.ReactNode }) => <b className="gold-inline">{children}</b>;

const WELCOME =
  "Olá! Sou a assistente virtual da Soraia. Posso explicar as áreas de atuação, apresentar os serviços e ajudar você a encontrar a informação que procura. ✨";

const FAQ: { q: string; a: React.ReactNode }[] = [
  {
    q: "Áreas de atuação",
    a: (
      <>
        Atuamos em 4 frentes: <G>Estruturação Empresarial</G>, <G>Projetos Personalizados</G>,{" "}
        <G>Requisições Médicas</G> e <G>Desenvolvimento Empresarial para Líderes e Gestores</G>. Você pode explorar
        cada uma em “SERVIÇOS” no menu. Qual delas desperta o seu interesse?
      </>
    ),
  },
  {
    q: "Entender um serviço",
    a: (
      <>
        Claro! Posso apresentar a <G>finalidade</G>, as <G>etapas</G> e os <G>documentos necessários</G>, quando
        aplicável. Cada serviço tem uma página própria em “SERVIÇOS”, organizada em Definição, O que está incluído,
        Documentos necessários e Orientações. Sobre qual deles você quer saber?
      </>
    ),
  },
  {
    q: "Quem é a Soraia?",
    a: (
      <>
        Soraia é uma <G>Concierge Empresarial</G>: uma profissional de confiança que organiza, articula e conduz
        projetos e demandas de empresas e líderes — do diagnóstico à entrega. Conheça mais em “SOBRE → Conheça a
        Concierge”.
      </>
    ),
  },
  {
    q: "Documentos",
    a: "Dependem do serviço escolhido: contratos sociais e organograma (estruturação), descrição da demanda (projetos), pedidos e laudos médicos (requisições médicas) ou avaliações e metas (desenvolvimento de líderes). Cada página de serviço traz a lista completa em “Documentos necessários”.",
  },
  {
    q: "Falar com a equipe",
    a: (
      <>
        Um prazer! Você pode falar com a Soraia pelo e-mail <G>contato@soraiaconcierge.com.br</G> ou pelo WhatsApp{" "}
        <G>+55 (00) 00000-0000</G>. Também é possível usar o botão “CONTATO” no topo do site.
      </>
    ),
  },
];

const FALLBACK = (
  <>
    Ótima pergunta! A Soraia responde pessoalmente cada caso — fale com ela pelo <G>CONTATO</G> no topo da página, ou
    explore “SERVIÇOS” para conhecer as áreas de atuação. Posso ajudar em mais alguma coisa?
  </>
);

function findAnswer(text: string) {
  const t = text.toLowerCase();
  if (/(entender|explica|etapa|finalidade|como funciona)/.test(t)) return FAQ[1].a;
  if (/(área|area|atua|servi[cç]o|projeto|fazem|faz o que)/.test(t)) return FAQ[0].a;
  if (/(soraia|quem|sobre|concierge)/.test(t)) return FAQ[2].a;
  if (/(documento|papel|contrato|laudo|exame)/.test(t)) return FAQ[3].a;
  if (/(contato|falar|whats|telefone|e-?mail|or[cç]amento|valor|pre[cç]o)/.test(t)) return FAQ[4].a;
  return FALLBACK;
}

export function Chat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const nextId = useRef(0);
  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const addMsg = (content: React.ReactNode, who: Message["who"]) =>
    setMessages((prev) => [...prev, { id: nextId.current++, who, content }]);

  useEffect(() => {
    const el = messagesRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  function toggleChat() {
    const opening = !open;
    setOpen(opening);
    if (!opening) return;

    if (messages.length === 0) addMsg(WELCOME, "bot");
    setTimeout(() => inputRef.current?.focus(), 250);
  }

  function sendToBot(question: string, answer?: React.ReactNode) {
    addMsg(question, "user");
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      addMsg(answer ?? findAnswer(question), "bot");
    }, 900);
  }

  return (
    <>
      <button className="chat-fab" type="button" onClick={toggleChat} aria-label="Abrir assistente virtual">
        <span className="chat-fab-inner pulse-ring">
          <Image src="/images/icone-chama.png" alt="" width={264} height={400} />
        </span>
      </button>

      <div className={`chat-panel${open ? "" : " closed"}`}>
        <div className="chat-header">
          <Image src="/images/icone-chama.png" alt="" width={264} height={400} />
          <div>
            <span className="chat-title">Concierge Virtual</span>
            <span className="chat-sub">Assistente por IA · on-line</span>
          </div>
          <button type="button" className="chat-close" onClick={toggleChat} aria-label="Fechar chat">
            ✕
          </button>
        </div>

        <div ref={messagesRef} className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`msg-row ${msg.who}`}>
              <div className="msg-bubble">{msg.content}</div>
            </div>
          ))}
          {typing && (
            <div className="msg-row bot">
              <div className="msg-bubble typing">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            </div>
          )}
        </div>

        {messages.length > 0 && (
          <div className="chat-quick">
            {FAQ.map((item) => (
              <button key={item.q} type="button" className="quick-reply" onClick={() => sendToBot(item.q, item.a)}>
                {item.q}
              </button>
            ))}
          </div>
        )}

        <form
          className="chat-form"
          onSubmit={(event) => {
            event.preventDefault();
            const value = input.trim();
            if (value) sendToBot(value);
          }}
        >
          <input
            ref={inputRef}
            className="chat-input"
            type="text"
            placeholder="Escreva sua pergunta…"
            autoComplete="off"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button type="submit" className="chat-send" aria-label="Enviar">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3.4 20.4 21 12 3.4 3.6 3 10l11 2-11 2Z" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
