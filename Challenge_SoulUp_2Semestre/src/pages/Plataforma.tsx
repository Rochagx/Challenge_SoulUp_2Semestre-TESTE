import { useMemo, useState } from "react";
import Icon from "@/components/soulup/Icon";
import Button from "@/components/soulup/Button";
import Card from "@/components/soulup/Card";
import Modal from "@/components/soulup/Modal";
import Container from "@/components/soulup/Container";
import SectionHeading from "@/components/soulup/SectionHeading";
import useDocumentMeta from "@/hooks/useDocumentMeta";
import type { IconName } from "@/components/soulup/icons";

interface Acao {
  id: string;
  icone: IconName;
  titulo: string;
  descricao: string;
  pontos: number;
}

const ACOES: Acao[] = [
  {
    id: "reciclagem",
    icone: "recycle",
    titulo: "Reciclar resíduos",
    descricao: "Separar e destinar corretamente lixo reciclável.",
    pontos: 15,
  },
  {
    id: "transporte",
    icone: "bike",
    titulo: "Transporte limpo",
    descricao: "Usar bicicleta, caminhada ou transporte público.",
    pontos: 20,
  },
  {
    id: "agua",
    icone: "droplet",
    titulo: "Economia de água",
    descricao: "Reduzir consumo doméstico em pelo menos 10%.",
    pontos: 12,
  },
  {
    id: "energia",
    icone: "lightbulb",
    titulo: "Energia consciente",
    descricao: "Desligar equipamentos e usar lâmpadas LED.",
    pontos: 18,
  },
  {
    id: "vegetariana",
    icone: "salad",
    titulo: "Refeição vegetariana",
    descricao: "Substituir refeição animal por vegetal no dia.",
    pontos: 10,
  },
  {
    id: "consumo",
    icone: "bag",
    titulo: "Consumo consciente",
    descricao: "Levar sacola reutilizável e evitar embalagens.",
    pontos: 14,
  },
  {
    id: "plantio",
    icone: "tree",
    titulo: "Plantio / horta",
    descricao: "Plantar uma árvore ou cultivar uma horta caseira.",
    pontos: 16,
  },
];

function obterTier(pontos: number): { nome: string; cor: string } {
  if (pontos >= 80) return { nome: "Eco Champion", cor: "#f6c244" };
  if (pontos >= 60) return { nome: "Eco Hero", cor: "#5cbdb9" };
  if (pontos >= 40) return { nome: "Eco Ativo", cor: "#2d8a9e" };
  if (pontos >= 20) return { nome: "Iniciante", cor: "#1a4a6e" };
  return { nome: "Inativo", cor: "#5a6c7d" };
}

export default function Plataforma() {
  useDocumentMeta(
    "Plataforma — Simulador SoulUp",
    "Teste o simulador SoulUp: selecione ações sustentáveis e veja sua pontuação evoluir em tempo real.",
  );

  const [selecionadas, setSelecionadas] = useState<Set<string>>(new Set());
  const [modalAberto, setModalAberto] = useState(false);

  function alternarAcao(id: string) {
    setSelecionadas((atual) => {
      const nova = new Set(atual);
      if (nova.has(id)) {
        nova.delete(id);
      } else {
        nova.add(id);
      }
      return nova;
    });
  }

  function limparSelecao() {
    setSelecionadas(new Set());
  }

  const total = useMemo(() => {
    let soma = 0;
    for (const acao of ACOES) {
      if (selecionadas.has(acao.id)) soma += acao.pontos;
    }
    return Math.min(soma, 100);
  }, [selecionadas]);

  const tier = obterTier(total);

  return (
    <>
      <section className="py-16">
        <Container>
          <SectionHeading>
            <h1>Simulador de pontuação</h1>
            <p className="mx-auto max-w-[640px]">
              Selecione as ações sustentáveis que você praticou esta semana e
              veja como a plataforma SoulUp calcula sua pontuação de 0 a 100.
            </p>
          </SectionHeading>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h3 className="mb-4">Ações disponíveis</h3>
              <div className="flex flex-col gap-3">
                {ACOES.map((acao) => {
                  const ativo = selecionadas.has(acao.id);
                  return (
                    <div
                      key={acao.id}
                      onClick={() => alternarAcao(acao.id)}
                      className={`flex cursor-pointer items-center justify-between gap-4 rounded-md border-2 p-4 transition-all hover:translate-x-1 hover:border-teal ${
                        ativo ? "border-teal bg-ocean/5" : "border-borderc bg-surface"
                      }`}
                    >
                      <div>
                        <h4 className="mb-0.5 flex items-center gap-2 text-base">
                          <Icon name={acao.icone} className="text-teal" style={{ width: "20px", height: "20px" }} />
                          {acao.titulo}
                        </h4>
                        <p className="text-[0.85rem]">{acao.descricao}</p>
                      </div>
                      <div className="shrink-0 font-display text-[1.1rem] font-bold text-teal">
                        +{acao.pontos}
                      </div>
                    </div>
                  );
                })}
              </div>
              <Button variant="secondary" className="mt-6" onClick={limparSelecao}>
                Limpar seleção
              </Button>
            </div>

            <aside className="sticky top-[calc(theme(spacing.header)+1rem)] self-start rounded-md bg-gradient-to-br from-deep to-ocean p-10 text-center text-white" aria-live="polite">
              <h3 className="text-white">Sua pontuação</h3>
              <div className="my-4 font-display text-[4rem] font-bold leading-none text-lime">
                {total}
                <span className="text-2xl opacity-60">/100</span>
              </div>
              <div className="my-4 h-3 overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-lime to-mint transition-[width] duration-500"
                  style={{ width: `${total}%` }}
                />
              </div>
              <div
                className="mt-4 inline-block rounded-full bg-mint/20 px-4 py-1.5 text-[0.85rem] font-semibold"
                style={{ color: tier.cor }}
              >
                {tier.nome}
              </div>
              <p className="mt-4 text-[0.9rem] text-white/80">
                Clique nas ações ao lado para simular sua semana.
              </p>
              <Button
                variant="primary"
                className="mt-6 !bg-white !text-deep hover:!bg-lime"
                onClick={() => setModalAberto(true)}
              >
                Ver recompensas
              </Button>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <SectionHeading>
            <h2>Como o cálculo funciona</h2>
            <p className="mx-auto max-w-[640px]">
              Os algoritmos da SoulUp consideram três fatores para gerar a
              pontuação final.
            </p>
          </SectionHeading>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card icon="balance" animate>
              <h3 className="mb-2">1. Peso ambiental</h3>
              <p className="text-[0.95rem]">
                Cada ação tem um peso baseado em impacto real (CO₂ evitado,
                água economizada, lixo desviado de aterro).
              </p>
            </Card>
            <Card icon="calendar" animate>
              <h3 className="mb-2">2. Frequência</h3>
              <p className="text-[0.95rem]">
                Ações recorrentes valem mais que esforços isolados — o sistema
                premia consistência.
              </p>
            </Card>
            <Card icon="search" animate>
              <h3 className="mb-2">3. Validação</h3>
              <p className="text-[0.95rem]">
                Foto, geolocalização e timestamp validam cada ação, garantindo
                justiça no ranking.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <Modal
        aberto={modalAberto}
        onFechar={() => setModalAberto(false)}
        titleId="rewards-title"
      >
        <h3 id="rewards-title">Faixas de recompensa</h3>
        <p className="my-4">
          Quanto mais pontos, mais benefícios. Cada faixa libera um novo nível
          de prêmios.
        </p>
        <ul className="flex list-none flex-col gap-3">
          <li className="rounded-lg bg-bg p-3">
            <strong>0–19:</strong> Inativo · sem recompensa
          </li>
          <li className="rounded-lg bg-bg p-3">
            <strong>20–39:</strong> Iniciante · cupons básicos
          </li>
          <li className="rounded-lg bg-bg p-3">
            <strong>40–59:</strong> Ativo · descontos em marcas verdes
          </li>
          <li className="rounded-lg bg-bg p-3">
            <strong>60–79:</strong> Hero · vale-compra parceiros
          </li>
          <li className="rounded-lg bg-gradient-to-br from-mint to-teal p-3 text-white">
            <strong>80–100:</strong> Champion · conta de energia subsidiada
          </li>
        </ul>
      </Modal>
    </>
  );
}
