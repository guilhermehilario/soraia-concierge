import type { Metadata } from "next";
import { ServicoDetalhe } from "../../_components/page-parts";
import { getServico } from "../../_content/servicos";

const servico = getServico("desenvolvimento-de-lideres");

export const metadata: Metadata = { title: servico.titulo };

export default function Page() {
  return <ServicoDetalhe servico={servico} />;
}
