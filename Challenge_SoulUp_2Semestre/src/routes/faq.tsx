import { createFileRoute } from "@tanstack/react-router";
import Faq from "@/pages/Faq";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — SoulUp" },
      { name: "description", content: "Perguntas frequentes sobre a plataforma SoulUp, pontuação, benefícios e funcionamento." },
      { property: "og:title", content: "FAQ — SoulUp" },
      { property: "og:description", content: "Perguntas frequentes sobre a plataforma SoulUp, pontuação, benefícios e funcionamento." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Faq,
});
