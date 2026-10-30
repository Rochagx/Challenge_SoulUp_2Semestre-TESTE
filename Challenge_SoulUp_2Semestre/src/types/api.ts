export interface Usuario {
  id: number;
  nome: string;
  email: string;
  pontos: number;
}

export type UsuarioInput = Omit<Usuario, "id">;

export type StatusVideo = "PENDENTE" | "APROVADO" | "REJEITADO";

export interface Video {
  id: number;
  urlVideo: string;
  status: StatusVideo;
  dataEnvio: string;
  pontosRecebidos: number;
  usuarioId: number;
}

export type VideoInput = Pick<Video, "urlVideo" | "usuarioId">;

export interface RankingItem {
  posicao: number;
  idUsuario: number;
  nome: string;
  pontos: number;
  acessoRecompensa: boolean;
}

export type UsuarioComVideos = Usuario & { videos: Video[] };

export type ResultadoApi<T> = { ok: true; data: T } | { ok: false; erro: string };
