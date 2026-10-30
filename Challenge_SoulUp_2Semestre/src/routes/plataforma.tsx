import { createFileRoute } from "@tanstack/react-router";
import Plataforma from "@/pages/Plataforma";

export const Route = createFileRoute("/plataforma")({
  head: () => ({
    meta: [
      { title: "Plataforma — Simulador SoulUp" },
      { name: "description", content: "Teste o simulador SoulUp: selecione ações sustentáveis e veja sua pontuação evoluir em tempo real." },
      { property: "og:title", content: "Plataforma — Simulador SoulUp" },
      { property: "og:description", content: "Teste o simulador SoulUp: selecione ações sustentáveis e veja sua pontuação evoluir em tempo real." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Plataforma,
});
