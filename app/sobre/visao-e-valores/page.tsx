import type { Metadata } from "next";
import { TopicoSobreDetalhe } from "../../_components/page-parts";
import { getTopicoSobre } from "../../_content/sobre";

const topico = getTopicoSobre("visao-e-valores");

export const metadata: Metadata = { title: topico.titulo };

export default function Page() {
  return <TopicoSobreDetalhe topico={topico} />;
}
