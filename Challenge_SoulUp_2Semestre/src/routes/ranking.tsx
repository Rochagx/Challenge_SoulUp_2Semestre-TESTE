import { createFileRoute } from "@tanstack/react-router";
import Ranking from "@/pages/Ranking";

export const Route = createFileRoute("/ranking")({
  head: () => ({
    meta: [
      { title: "Ranking — SoulUp" },
      { name: "description", content: "Acompanhe o ranking SoulUp em tempo real: classificação semanal, mensal e geral dos usuários mais sustentáveis." },
      { property: "og:title", content: "Ranking — SoulUp" },
      { property: "og:description", content: "Acompanhe o ranking SoulUp em tempo real: classificação semanal, mensal e geral dos usuários mais sustentáveis." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Ranking,
});
