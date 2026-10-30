import { createFileRoute, redirect } from "@tanstack/react-router";
import VideoDetalhe from "@/pages/VideoDetalhe";

export const Route = createFileRoute("/videos/$id")({
  params: {
    parse: (p: { id: string }) => ({ id: Number(p.id) }),
    stringify: (p: { id: number }) => ({ id: String(p.id) }),
  },
  beforeLoad: ({ params }) => {
    if (!Number.isInteger(params.id) || params.id <= 0) throw redirect({ to: "/validar" });
  },
  head: ({ params }) => ({
    meta: [
      { title: `Vídeo #${params.id} — SoulUp` },
      { name: "description", content: "Detalhes, status e edição de um vídeo de ação sustentável no SoulUp." },
      { property: "og:title", content: `Vídeo #${params.id} — SoulUp` },
      { property: "og:description", content: "Detalhes, status e edição de um vídeo de ação sustentável no SoulUp." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: VideoDetalhe,
});

