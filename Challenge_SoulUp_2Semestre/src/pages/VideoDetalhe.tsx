import { type FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { toast } from "sonner";
import Container from "@/components/soulup/Container";
import Button from "@/components/soulup/Button";
import ApiStatus from "@/components/soulup/ApiStatus";
import { CAMPO } from "@/pages/Usuarios";
import { COR_STATUS } from "@/pages/UsuarioDetalhe";
import { atualizarVideo, buscarVideo, excluirVideo, validarVideo } from "@/services/api";
import type { Video } from "@/types/api";

export default function VideoDetalhe() {
  const { id } = useParams({ from: "/videos/$id" });
  const navigate = useNavigate();

  const [video, setVideo] = useState<Video | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [salvando, setSalvando] = useState(false);
  const [urlVideo, setUrlVideo] = useState("");

  async function carregarVideo() {
    setCarregando(true);
    setErro(null);
    try {
      const dados = await buscarVideo(id);
      setVideo(dados);
      setUrlVideo(dados.urlVideo);
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro ao carregar vídeo.");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarVideo();
  }, [id]);

  async function aoSalvar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!video) return;
    setSalvando(true);
    try {
      const atualizado = await atualizarVideo(id, { urlVideo, usuarioId: video.usuarioId });
      setVideo(atualizado);
      toast.success("Vídeo atualizado!");
    } catch {
      toast.error("Não foi possível atualizar o vídeo.");
    } finally {
      setSalvando(false);
    }
  }

  async function aoValidar() {
    try {
      const validado = await validarVideo(id);
      setVideo(validado);
      toast.success(`Resultado: ${validado.status}`);
    } catch {
      toast.error("Não foi possível validar.");
    }
  }

  async function aoExcluir() {
    if (!window.confirm("Excluir este vídeo?")) return;
    try {
      await excluirVideo(id);
      toast.success("Vídeo excluído. Voltando para a lista…");
      navigate({ to: "/validar" });
    } catch {
      toast.error("Não foi possível excluir.");
    }
  }

  return (
    <section className="py-16">
      <Container>
        <Link to="/validar" className="mb-6 inline-block font-semibold">← Voltar para Validar Ação</Link>

        {erro === "Registro não encontrado." ? (
          <div className="rounded-md border border-borderc bg-surface p-8 text-center">
            <h1 className="mb-2 text-[1.6rem]">Vídeo não encontrado</h1>
            <p className="mb-6">Ele pode ter sido excluído.</p>
            <Button to="/validar">Ver vídeos</Button>
          </div>
        ) : (
          <ApiStatus carregando={carregando} erro={erro} onTentarNovamente={carregarVideo} />
        )}

        {!carregando && video && (
          <form onSubmit={aoSalvar} className="mx-auto max-w-[640px] rounded-md border-t-4 border-teal bg-surface p-6 shadow-soft-sm md:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
              <h1 className="text-[1.6rem]">Vídeo #{video.id}</h1>
              <span className={`rounded-sm px-2 py-1 text-[0.8rem] font-semibold ${COR_STATUS[video.status]}`}>
                {video.status} · {video.pontosRecebidos} pts
              </span>
            </div>
            <p className="mb-4 text-[0.9rem]">
              Enviado em {new Date(video.dataEnvio).toLocaleString("pt-BR")} por{" "}
              <Link to="/usuarios/$id" params={{ id: video.usuarioId }} className="font-semibold">
                usuário #{video.usuarioId}
              </Link>
            </p>
            <label htmlFor="urlVideo" className="mb-1 block text-[0.9rem] font-semibold text-deep">Link do vídeo</label>
            <input id="urlVideo" required minLength={3} value={urlVideo} onChange={(e) => setUrlVideo(e.target.value)} className={`${CAMPO} mb-6`} />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button type="submit" disabled={salvando}>{salvando ? "Salvando…" : "Salvar"}</Button>
              {video.status === "PENDENTE" && (
                <Button type="button" variant="secondary" onClick={aoValidar}>Validar</Button>
              )}
              <Button type="button" variant="secondary" onClick={aoExcluir}>Excluir</Button>
            </div>
          </form>
        )}
      </Container>
    </section>
  );
}
