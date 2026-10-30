//  chamada para a API Java SoulUp
// API: https://challenge-java-sustent-game.onrender.com

import type { RankingItem, Usuario, UsuarioInput, Video, VideoInput } from "@/types/api";

const BASE_URL = "/api";

async function lerResposta<T>(response: Response): Promise<T> {
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Registro não encontrado.");
    }
    throw new Error(`Erro ${response.status} ao falar com a API.`);
  }
  const dados: T = await response.json();
  return dados;
}

// ---------- usuarios ----------

// GET /usuario
export async function listarUsuarios(): Promise<Usuario[]> {
  const response = await fetch(`${BASE_URL}/usuario`);
  return lerResposta<Usuario[]>(response);
}

// GET /usuario/{id}
export async function buscarUsuario(id: number): Promise<Usuario> {
  const response = await fetch(`${BASE_URL}/usuario/${id}`);
  return lerResposta<Usuario>(response);
}

// POST /usuario
export async function criarUsuario(dados: UsuarioInput): Promise<Usuario> {
  const response = await fetch(`${BASE_URL}/usuario`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  return lerResposta<Usuario>(response);
}

// PUT /usuario/{id}
export async function atualizarUsuario(id: number, dados: UsuarioInput): Promise<Usuario> {
  const response = await fetch(`${BASE_URL}/usuario/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  return lerResposta<Usuario>(response);
}

// DELETE /usuario/{id}
export async function excluirUsuario(id: number): Promise<void> {
  const response = await fetch(`${BASE_URL}/usuario/${id}`, { method: "DELETE" });
  if (!response.ok) {
    throw new Error(`Erro ${response.status} ao excluir usuário.`);
  }
}

// ---------- videos ---

// GET /video
export async function listarVideos(): Promise<Video[]> {
  const response = await fetch(`${BASE_URL}/video`);
  return lerResposta<Video[]>(response);
}

// GET /video/{id}
export async function buscarVideo(id: number): Promise<Video> {
  const response = await fetch(`${BASE_URL}/video/${id}`);
  return lerResposta<Video>(response);
}

// POST /video
export async function criarVideo(dados: VideoInput): Promise<Video> {
  const response = await fetch(`${BASE_URL}/video`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  return lerResposta<Video>(response);
}

// PUT /video/{id}
export async function atualizarVideo(id: number, dados: VideoInput): Promise<Video> {
  const response = await fetch(`${BASE_URL}/video/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  return lerResposta<Video>(response);
}

// PATCH /video/{id}/validar
export async function validarVideo(id: number): Promise<Video> {
  const response = await fetch(`${BASE_URL}/video/${id}/validar`, { method: "PATCH" });
  return lerResposta<Video>(response);
}

// DELETE /video/{id}
export async function excluirVideo(id: number): Promise<void> {
  const response = await fetch(`${BASE_URL}/video/${id}`, { method: "DELETE" });
  if (!response.ok) {
    throw new Error(`Erro ${response.status} ao excluir vídeo.`);
  }
}

// ---------- rank------

// GET /ranking
export async function obterRanking(): Promise<RankingItem[]> {
  const response = await fetch(`${BASE_URL}/ranking`);
  return lerResposta<RankingItem[]>(response);
}
