import { type FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { toast } from "sonner";
import Container from "@/components/soulup/Container";
import Button from "@/components/soulup/Button";
import ApiStatus from "@/components/soulup/ApiStatus";
import { CAMPO } from "@/pages/Usuarios";
import { atualizarUsuario, buscarUsuario, excluirUsuario, listarVideos } from "@/services/api";
import { formatarNome } from "@/lib/formatar";
import type { StatusVideo, Usuario, UsuarioInput, Video } from "@/types/api";

export const COR_STATUS: Record<StatusVideo, string> = {
  APROVADO: "bg-mint/20 text-deep",
  REJEITADO: "bg-destructive/15 text-destructive",
  PENDENTE: "bg-borderc text-muted",
};

export default function UsuarioDetalhe() {
  const { id } = useParams({ from: "/usuarios/$id" });
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [salvando, setSalvando] = useState(false);
  const [form, setForm] = useState<UsuarioInput>({ nome: "", email: "", pontos: 0 });

  async function carregarDados() {
    setCarregando(true);
    setErro(null);
    try {
      const dadosUsuario = await buscarUsuario(id);
      setUsuario(dadosUsuario);
      setForm({ nome: dadosUsuario.nome, email: dadosUsuario.email, pontos: dadosUsuario.pontos });

      const todosVideos = await listarVideos();
      setVideos(todosVideos.filter((v) => v.usuarioId === id));
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro ao carregar usuário.");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarDados();
  }, [id]);

  async function aoSalvar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSalvando(true);
    try {
      const atualizado = await atualizarUsuario(id, form);
      setUsuario(atualizado);
      toast.success("Dados atualizados!");
    } catch {
      toast.error("Não foi possível salvar.");
    } finally {
      setSalvando(false);
    }
  }

  async function aoExcluir() {
    if (!window.confirm(`Excluir ${usuario?.nome}?`)) return;
    try {
      await excluirUsuario(id);
      toast.success("Usuário excluído.");
      navigate({ to: "/usuarios" });
    } catch {
      toast.error("Não foi possível excluir (o usuário pode ter vídeos vinculados).");
    }
  }

  return (
    <section className="py-16">
      <Container>
        <Link to="/usuarios" className="mb-6 inline-block font-semibold text-teal">← Voltar para usuários</Link>

        {erro === "Registro não encontrado." ? (
          <div className="rounded-md border border-borderc bg-surface p-10 text-center">
            <h1 className="mb-2 text-[1.6rem]">Usuário #{id} não encontrado</h1>
            <p className="mb-6">Ele pode ter sido excluído. Veja a lista completa.</p>
            <Button to="/usuarios">Ver usuários</Button>
          </div>
        ) : (
          <ApiStatus carregando={carregando} erro={erro} onTentarNovamente={carregarDados} />
        )}

        {!carregando && usuario && (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            <form onSubmit={aoSalvar} className="rounded-md border-t-4 border-teal bg-surface p-6 shadow-soft-sm md:p-8">
              <h1 className="mb-1 text-[1.6rem]">{formatarNome(usuario.nome)}</h1>
              <p className="mb-6 font-display text-[1.2rem] font-bold text-teal">{usuario.pontos} pontos</p>
              <label htmlFor="nome" className="mb-1 block text-[0.9rem] font-semibold text-deep">Nome</label>
              <input id="nome" required minLength={2} value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} className={`${CAMPO} mb-4`} />
              <label htmlFor="email" className="mb-1 block text-[0.9rem] font-semibold text-deep">E-mail</label>
              <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={`${CAMPO} mb-6`} />
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button type="submit" disabled={salvando}>{salvando ? "Salvando…" : "Salvar"}</Button>
                <Button type="button" variant="secondary" onClick={aoExcluir}>
                  Excluir usuário
                </Button>
              </div>
            </form>

            <div className="rounded-md border border-borderc bg-surface p-6 shadow-soft-sm md:p-8">
              <h2 className="mb-4 text-[1.3rem]">Vídeos enviados</h2>
              {videos.length === 0 && (
                <p className="text-muted">Nenhum vídeo ainda. <Link to="/validar" className="font-semibold text-teal">Enviar uma ação</Link></p>
              )}
              <ul className="flex flex-col gap-3">
                {videos.map((v) => (
                  <li key={v.id} className="flex flex-wrap items-center justify-between gap-2 border-b border-dotted border-borderc pb-3">
                    <Link to="/videos/$id" params={{ id: v.id }} className="min-w-0 truncate text-[0.9rem]">{v.urlVideo}</Link>
                    <span className={`rounded-sm px-2 py-1 text-[0.75rem] font-semibold ${COR_STATUS[v.status]}`}>
                      {v.status} · {v.pontosRecebidos} pts
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
