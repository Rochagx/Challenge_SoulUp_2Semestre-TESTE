import { createFileRoute } from "@tanstack/react-router";
import Usuarios from "@/pages/Usuarios";

export const Route = createFileRoute("/usuarios/")({
  head: () => ({
    meta: [
      { title: "Usuários — SoulUp" },
      { name: "description", content: "Cadastre e gerencie os participantes da plataforma SoulUp." },
      { property: "og:title", content: "Usuários — SoulUp" },
      { property: "og:description", content: "Cadastre e gerencie os participantes da plataforma SoulUp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Usuarios,
});
