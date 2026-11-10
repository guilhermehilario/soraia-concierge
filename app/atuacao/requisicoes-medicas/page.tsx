import type { Metadata } from "next";
import { ServiceDetail } from "../../_components/page-parts";
import { getService } from "../../_content/services";

const service = getService("requisicoes-medicas");

export const metadata: Metadata = { title: service.title };

export default function Page() {
  return <ServiceDetail service={service} />;
}
