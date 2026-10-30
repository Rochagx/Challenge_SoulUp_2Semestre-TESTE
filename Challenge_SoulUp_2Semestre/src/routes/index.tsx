import { createFileRoute } from "@tanstack/react-router";
import Home from "@/pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SoulUp — Gamificação que recompensa atitudes sustentáveis" },
      { name: "description", content: "A primeira rede social de impacto sustentável do planeta. Transforme ações ecológicas em pontos, ranking e recompensas reais." },
      { property: "og:title", content: "SoulUp — Gamificação que recompensa atitudes sustentáveis" },
      { property: "og:description", content: "A primeira rede social de impacto sustentável do planeta. Transforme ações ecológicas em pontos, ranking e recompensas reais." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});
