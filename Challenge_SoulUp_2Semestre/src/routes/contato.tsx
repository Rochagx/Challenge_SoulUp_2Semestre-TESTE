import { createFileRoute } from "@tanstack/react-router";
import Contato from "@/pages/Contato";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — SoulUp" },
      { name: "description", content: "Fale com a equipe SoulUp: envie sua mensagem, dúvida ou proposta de parceria." },
      { property: "og:title", content: "Contato — SoulUp" },
      { property: "og:description", content: "Fale com a equipe SoulUp: envie sua mensagem, dúvida ou proposta de parceria." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contato,
});
