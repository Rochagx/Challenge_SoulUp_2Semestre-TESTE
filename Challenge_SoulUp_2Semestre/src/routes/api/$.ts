import "@tanstack/react-start";
import { createFileRoute } from "@tanstack/react-router";

// React e API Java
const API_JAVA = "https://challenge-java-sustent-game.onrender.com";

async function repassar(request: Request, caminho: string) {
  const temCorpo = request.method === "POST" || request.method === "PUT";

  const resposta = await fetch(`${API_JAVA}/${caminho}`, {
    method: request.method,
    headers: { "Content-Type": "application/json" },
    body: temCorpo ? await request.text() : null,
  });

  if (resposta.status === 204) {
    return new Response(null, { status: 204 });
  }

  const texto = await resposta.text();
  return new Response(texto, {
    status: resposta.status,
    headers: { "Content-Type": "application/json" },
  });
}

export const Route = createFileRoute("/api/$")({
  server: {
    handlers: {
      GET: ({ request, params }) => repassar(request, params._splat ?? ""),
      POST: ({ request, params }) => repassar(request, params._splat ?? ""),
      PUT: ({ request, params }) => repassar(request, params._splat ?? ""),
      PATCH: ({ request, params }) => repassar(request, params._splat ?? ""),
      DELETE: ({ request, params }) => repassar(request, params._splat ?? ""),
    },
  },
});
