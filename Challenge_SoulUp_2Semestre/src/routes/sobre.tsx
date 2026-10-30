import { createFileRoute } from "@tanstack/react-router";
import Sobre from "@/pages/Sobre";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o projeto — SoulUp" },
      { name: "description", content: "Conheça o problema, a solução proposta, as tecnologias e o roadmap do projeto SoulUp." },
      { property: "og:title", content: "Sobre o projeto — SoulUp" },
      { property: "og:description", content: "Conheça o problema, a solução proposta, as tecnologias e o roadmap do projeto SoulUp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sobre,
});
