import Icon from "@/components/soulup/Icon";
import Button from "@/components/soulup/Button";
import Card from "@/components/soulup/Card";
import Container from "@/components/soulup/Container";
import SectionHeading from "@/components/soulup/SectionHeading";
import useDocumentMeta from "@/hooks/useDocumentMeta";
import dashboardImgAsset from "@/assets/soulup-gamificacao-sustentavel-dashboard.jpg.asset.json";
const dashboardImg = dashboardImgAsset.url;
import appImgAsset from "@/assets/soulup-transforme-seu-tempo-em-proposito.jpg.asset.json";
const appImg = appImgAsset.url;

export default function Home() {
  useDocumentMeta(
    "SoulUp — Gamificação que recompensa atitudes sustentáveis",
    "A primeira rede social de impacto sustentável do planeta. Transforme ações ecológicas em pontos, ranking e recompensas reais.",
  );

  return (
    <>
      {/* Hero */}
      <section className="relative -mt-header overflow-hidden bg-gradient-to-br from-[#1cb8ab] to-ocean pb-20 pt-[calc(theme(spacing.header)+4rem)] text-white before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(197,216,74,0.15),transparent_40%)] before:content-['']">
        <Container className="relative z-[1] grid grid-cols-1 items-center gap-10 text-center lg:grid-cols-2 lg:text-left">
          <div>
            <span className="mb-2 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-mint">
              A rede social do planeta
            </span>
            <h1 className="mb-4 text-white">
              A primeira rede social de impacto sustentável.
            </h1>
            <p className="mx-auto mb-7 max-w-[480px] text-lg text-white/90 lg:mx-0">
              Transforme suas atitudes ecológicas em pontos, recompensas reais e
              impacto coletivo. Uma plataforma onde cada gesto verde conta —
              validado, ranqueado e recompensado.
            </p>
            <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center lg:justify-start">
              <Button
                to="/validar"
                variant="primary"
                className="!bg-white !text-deep hover:!bg-lime hover:!text-deep"
              >
                Validar minha ação
              </Button>
              <Button
                to="/plataforma"
                variant="secondary"
                className="!border-white/60 !text-white hover:!bg-white/10 hover:!text-white"
              >
                Conhecer a plataforma
              </Button>
            </div>
          </div>
          <div className="aspect-square overflow-hidden rounded-lg bg-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
            <img
              src={dashboardImg}
              alt="Interface da plataforma SoulUp com ranking sustentável e sistema de gamificação ecológica"
              className="h-full w-full object-cover"
            />
          </div>
        </Container>
      </section>

      {/* O problema */}
      <section className="py-16">
        <Container>
          <SectionHeading>
            <span className="mb-2 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-teal">
              O problema
            </span>
            <h2>Sustentabilidade não pode ser invisível.</h2>
            <p className="mx-auto max-w-[640px]">
              Pessoas fazem ações ecológicas todos os dias, mas raramente são
              reconhecidas ou recompensadas. Sem incentivo, o engajamento cai e
              o impacto se dilui.
            </p>
          </SectionHeading>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card icon="alert" className="border-t-4 border-error" animate>
              <h3 className="mb-2">Sem visibilidade nem dado</h3>
              <p className="text-[0.95rem]">
                Comunidades não enxergam o impacto coletivo das suas atitudes —
                não há medição, comparação ou recompensa pelo que é feito.
              </p>
            </Card>
            <Card icon="sparkle" className="border-t-4 border-teal" animate>
              <h3 className="mb-2">SoulUp transforma ação em valor</h3>
              <p className="text-[0.95rem]">
                Cada gesto sustentável é validado, pontuado de 0 a 100 e
                convertido em ranking e recompensas reais — incluindo conta de
                energia subsidiada.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* A plataforma */}
      <section className="bg-surface py-16">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="mb-2 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-teal">
                A plataforma
              </span>
              <h2>Transforme seu tempo em propósito.</h2>
              <p className="my-4 mb-6">
                Um ecossistema que conecta validação, recompensa e identidade
                verde num só lugar. Envie uma foto da sua ação, deixe o sistema
                validar e veja seu impacto crescer no ranking ao vivo.
              </p>
              <ul className="mb-7 flex list-none flex-col gap-3">
                <li className="flex items-center gap-2">
                  <Icon name="check" className="text-teal" />
                  Validação automática e justa
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check" className="text-teal" />
                  Ranking em tempo real
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check" className="text-teal" />
                  Recompensas reais por engajamento
                </li>
              </ul>
              <Button to="/plataforma" variant="primary">
                Testar simulador
              </Button>
            </div>
            <div className="overflow-hidden rounded-lg shadow-soft-lg">
              <img src={appImg} alt="App SoulUp em uso" loading="lazy" className="block w-full" />
            </div>
          </div>
        </Container>
      </section>

      {/* Impacto coletivo / estatísticas */}
      <section className="bg-gradient-to-br from-[#f6fcd9] to-[#e8f5ed] py-16">
        <Container>
          <div className="py-6">
            <div className="mx-auto mb-10 max-w-[720px] text-center">
              <span className="mb-2 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-teal">
                Impacto coletivo · dados reais
              </span>
              <h2>Pontos que valem energia, propósito e transformação.</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-md border border-borderc bg-surface p-6 shadow-soft-sm">
                <div className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-teal/10 text-teal">
                  <Icon name="leaf" />
                </div>
                <div className="mb-1 font-display text-[2.6rem] font-bold leading-none text-teal">
                  9.599
                </div>
                <h4>Usuários ativos</h4>
                <p className="text-[0.88rem]">Engajados no app no período</p>
              </div>

              <div className="rounded-md border border-borderc bg-surface p-6 shadow-soft-sm">
                <div className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-teal/10 text-teal">
                  <Icon name="sparkle" />
                </div>
                <div className="mb-1 font-display text-[2.6rem] font-bold leading-none text-teal">
                  2.875
                </div>
                <h4>Novos usuários</h4>
                <p className="text-[0.88rem]">Entraram na rede em 2026</p>
              </div>

              <div className="rounded-md border border-borderc bg-surface p-6 shadow-soft-sm">
                <div className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-lime/20 text-lime-dark">
                  <Icon name="bolt" />
                </div>
                <div className="mb-1 font-display text-[2.6rem] font-bold leading-none text-lime-dark">
                  183k
                </div>
                <h4>Eventos registrados</h4>
                <p className="text-[0.88rem]">Interações na plataforma</p>
              </div>

              <div className="rounded-md border border-borderc bg-surface p-6 shadow-soft-sm">
                <div className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-lime/20 text-lime-dark">
                  <Icon name="target" />
                </div>
                <div className="mb-1 font-display text-[2.6rem] font-bold leading-none text-lime-dark">
                  15.572
                </div>
                <h4>Sessões</h4>
                <p className="text-[0.88rem]">Tempo médio 11min por sessão</p>
              </div>
            </div>

            <div className="mt-6 animate-fadeUp rounded-lg bg-gradient-to-br from-deep to-ocean p-10 text-white">
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[1.3rem] text-white">
                  Fluxo de usuários ativos · app real SoulUp
                </h3>
              </div>
              <div
                className="mb-3 grid h-[220px] grid-cols-4 items-end gap-4 border-b border-white/15 px-2"
                role="img"
                aria-label="Gráfico de usuários ativos por mês"
              >
                <div
                  className="relative min-h-[8px] rounded-t-lg bg-gradient-to-b from-mint to-teal transition hover:brightness-[1.15]"
                  style={{ height: "70.2%" }}
                >
                  <span className="absolute -top-[1.6rem] left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-[0.95rem] font-bold text-white">
                    2.624
                  </span>
                </div>
                <div
                  className="relative min-h-[8px] rounded-t-lg bg-gradient-to-b from-mint to-teal transition hover:brightness-[1.15]"
                  style={{ height: "67.3%" }}
                >
                  <span className="absolute -top-[1.6rem] left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-[0.95rem] font-bold text-white">
                    2.517
                  </span>
                </div>
                <div
                  className="relative min-h-[8px] rounded-t-lg bg-gradient-to-b from-mint to-teal transition hover:brightness-[1.15]"
                  style={{ height: "100%" }}
                >
                  <span className="absolute -top-[1.6rem] left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-[0.95rem] font-bold text-white">
                    3.738
                  </span>
                </div>
                <div
                  className="relative min-h-[8px] rounded-t-lg bg-gradient-to-b from-mint to-teal transition hover:brightness-[1.15]"
                  style={{ height: "19.3%" }}
                >
                  <span className="absolute -top-[1.6rem] left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-[0.95rem] font-bold text-white">
                    720
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 px-2 text-center text-sm uppercase tracking-wider text-white/75">
                <span>Jan</span>
                <span>Fev</span>
                <span>Mar</span>
                <span>Abr</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-6 border-t border-white/15 pt-4 text-sm text-white/70">
                <span>
                  Total de usuários: <strong className="text-white">61.242</strong>
                </span>
                <span>
                  Tempo médio/sessão: <strong className="text-white">11:06:32</strong>
                </span>
                <span>
                  Pico em março: <strong className="text-white">3.738 ativos</strong>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="bg-gradient-to-br from-teal to-ocean py-16 text-white">
        <Container className="text-center">
          <h2 className="text-white">Quer fazer parte dessa mudança real?</h2>
          <p className="mx-auto my-4 max-w-[560px] text-white/90">
            Comece agora simulando uma ação sustentável e veja como funciona a
            validação automática da SoulUp.
          </p>
          <Button
            to="/validar"
            variant="primary"
            className="!bg-white !text-deep hover:!bg-lime hover:!text-deep"
          >
            Validar minha primeira ação
          </Button>
        </Container>
      </section>
    </>
  );
}
