import type { Metadata } from "next";
import { AboutTopicDetail } from "../../_components/page-parts";
import { getAboutTopic } from "../../_content/about";

const topic = getAboutTopic("visao-e-valores");

export const metadata: Metadata = { title: topic.title };

export default function Page() {
  return <AboutTopicDetail topic={topic} />;
}
