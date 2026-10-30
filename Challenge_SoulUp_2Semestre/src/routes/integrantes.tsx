import { createFileRoute } from "@tanstack/react-router";
import Integrantes from "@/pages/Integrantes";

export const Route = createFileRoute("/integrantes")({
  head: () => ({
    meta: [
      { title: "Integrantes — SoulUp" },
      { name: "description", content: "Conheça a equipe que desenvolveu a plataforma SoulUp: nomes, RMs, turma e contatos profissionais." },
      { property: "og:title", content: "Integrantes — SoulUp" },
      { property: "og:description", content: "Conheça a equipe que desenvolveu a plataforma SoulUp: nomes, RMs, turma e contatos profissionais." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Integrantes,
});
