import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import Icon from "@/components/soulup/Icon";
import Container from "@/components/soulup/Container";
import SectionHeading from "@/components/soulup/SectionHeading";
import ApiStatus from "@/components/soulup/ApiStatus";
import { obterRanking } from "@/services/api";
import type { RankingItem } from "@/types/api";
import { formatarNome } from "@/lib/formatar";

const CORES_MEDALHA: Record<number, string> = {
  1: "text-[#d4a017]",
  2: "text-[#95a5a6]",
  3: "text-[#cd7f32]",
};

function corPosicao(posicao: number): string {
  return CORES_MEDALHA[posicao] ?? "text-teal";
}

const TH = "bg-deep px-4 py-3 text-left font-display text-[0.9rem] uppercase tracking-wider text-white";

export default function Ranking() {
  const [ranking, setRanking] = useState<RankingItem[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [busca, setBusca] = useState("");

  async function carregarRanking() {
    setCarregando(true);
    setErro(null);
    try {
      const dados = await obterRanking();
      const comNomesFormatados = dados.map((item) => ({ ...item, nome: formatarNome(item.nome) }));
      setRanking(comNomesFormatados);
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro ao carregar o ranking.");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarRanking();
  }, []);

  const filtrados = ranking
    .filter((u) => u.nome.toLowerCase().includes(busca.toLowerCase()))
    .sort((a, b) => a.posicao - b.posicao);

  return (
    <section className="py-16">
      <Container>
        <SectionHeading>
          <h1>Ranking SoulUp</h1>
          <p className="mx-auto max-w-[640px]">
            Classificação em tempo real vinda da API SoulUp. Quem tem acesso à
            recompensa aparece marcado.
          </p>
        </SectionHeading>

        <div className="mb-6 max-w-[360px]">
          <label htmlFor="ranking-search" className="mb-1 block text-[0.9rem] font-semibold text-deep">
            <Icon name="search" className="mr-1" /> Buscar usuário
          </label>
          <input
            type="text"
            id="ranking-search"
            placeholder="Digite um nome…"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full rounded-sm border-2 border-borderc bg-bg px-4 py-3 font-body text-[0.95rem] text-deep transition-colors focus:border-teal focus:bg-white focus:outline-none"
          />
        </div>

        <ApiStatus carregando={carregando} erro={erro} onTentarNovamente={carregarRanking} />

        {!carregando && !erro && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-md bg-surface shadow-soft-sm">
              <thead>
                <tr>
                  <th className={TH}>Pos.</th>
                  <th className={TH}>Usuário</th>
                  <th className={TH}>Pontos</th>
                  <th className={TH}>Recompensa</th>
                </tr>
              </thead>
              <tbody>
                {filtrados.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-muted">
                      Nenhum usuário encontrado.
                    </td>
                  </tr>
                ) : (
                  filtrados.map((u) => (
                    <tr key={u.idUsuario} className="border-b border-borderc transition-colors last:border-b-0 hover:bg-bg">
                      <td className={`w-[50px] px-4 py-3 font-display text-[1.1rem] font-bold ${corPosicao(u.posicao)}`}>
                        {u.posicao}º
                      </td>
                      <td className="px-4 py-3">
                        <Link to="/usuarios/$id" params={{ id: u.idUsuario }} className="font-semibold text-deep hover:text-teal">
                          {u.nome}
                        </Link>
                      </td>
                      <td className="px-4 py-3 font-display font-bold text-deep">{u.pontos}</td>
                      <td className="px-4 py-3">{u.acessoRecompensa ? "✅ Sim" : "—"}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </section>
  );
}
