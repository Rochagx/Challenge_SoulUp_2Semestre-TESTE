import { createFileRoute, redirect } from "@tanstack/react-router";
import UsuarioDetalhe from "@/pages/UsuarioDetalhe";

export const Route = createFileRoute("/usuarios/$id")({
  params: {
    parse: (p: { id: string }) => ({ id: Number(p.id) }),
    stringify: (p: { id: number }) => ({ id: String(p.id) }),
  },
  beforeLoad: ({ params }) => {
    if (!Number.isInteger(params.id) || params.id <= 0) throw redirect({ to: "/usuarios" });
  },
  head: ({ params }) => ({
    meta: [
      { title: `Usuário #${params.id} — SoulUp` },
      { name: "description", content: "Perfil, pontuação e vídeos enviados por um participante SoulUp." },
      { property: "og:title", content: `Usuário #${params.id} — SoulUp` },
      { property: "og:description", content: "Perfil, pontuação e vídeos enviados por um participante SoulUp." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: UsuarioDetalhe,
});

