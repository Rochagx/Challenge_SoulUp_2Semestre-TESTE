import { createFileRoute } from "@tanstack/react-router";
import Validar from "@/pages/Validar";

export const Route = createFileRoute("/validar")({
  head: () => ({
    meta: [
      { title: "Validar Ação — SoulUp" },
      { name: "description", content: "Como funciona a validação de ações sustentáveis na plataforma SoulUp." },
      { property: "og:title", content: "Validar Ação — SoulUp" },
      { property: "og:description", content: "Como funciona a validação de ações sustentáveis na plataforma SoulUp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Validar,
});
