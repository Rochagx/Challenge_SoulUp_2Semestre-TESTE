import Card from "@/components/soulup/Card";
import Container from "@/components/soulup/Container";
import SectionHeading from "@/components/soulup/SectionHeading";
import useDocumentMeta from "@/hooks/useDocumentMeta";
import premiosImgAsset from "@/assets/premios-planeta-melhor.png.asset.json";
const premiosImg = premiosImgAsset.url;

export default function Sobre() {
  useDocumentMeta(
    "Sobre o projeto — SoulUp",
    "Conheça o problema, a solução proposta, as tecnologias e o roadmap do projeto SoulUp.",
  );

  return (
    <>
      <section className="py-16">
        <Container>
          <SectionHeading>
            <h1>Sobre o projeto SoulUp + NextCode</h1>
            <p className="mx-auto max-w-[640px]">
              Um sistema de gamificação sustentável que mede, premia e
              amplifica atitudes ecológicas dentro de comunidades urbanas.
            </p>
          </SectionHeading>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon="alert"
              iconClassName="bg-gradient-to-br from-[#e57373] to-[#c0392b]"
              className="border-t-4 border-error"
              animate
            >
              <h3 className="mb-2">O problema</h3>
              <p className="text-[0.95rem]">
                Mesmo conscientes da urgência ambiental, a maioria das pessoas
                não mantém hábitos sustentáveis no dia a dia. Falta
                engajamento, falta visibilidade do impacto individual e faltam
                incentivos concretos que conectem atitude e recompensa.
              </p>
            </Card>
            <Card icon="bulb" className="border-t-4 border-teal" animate>
              <h3 className="mb-2">A solução SoulUp + NextCode</h3>
              <p className="text-[0.95rem]">
                Uma plataforma que avalia automaticamente cada ação ecológica
                do usuário, atribui pontuação de 0 a 100, atualiza rankings em
                tempo real e libera recompensas reais — incluindo conta de
                energia subsidiada para o líder mensal.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="border-y border-borderc bg-white py-16">
        <Container>
          <SectionHeading>
            <h2>Diferenciais</h2>
            <p className="mx-auto max-w-[640px]">
              Por que a SoulUp se destaca de apps tradicionais de pegada de
              carbono.
            </p>
          </SectionHeading>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card icon="bolt" animate>
              <h3 className="mb-2">Tempo real</h3>
              <p className="text-[0.95rem]">
                Pontuação e ranking atualizados ao vivo — feedback imediato
                gera retenção e hábito.
              </p>
            </Card>
            <Card icon="target" animate>
              <h3 className="mb-2">Avaliação inteligente</h3>
              <p className="text-[0.95rem]">
                Algoritmos calculam o peso ambiental de cada ação, evitando
                "pontuação inflada".
              </p>
            </Card>
            <Card icon="home" animate>
              <h3 className="mb-2">Foco comunitário</h3>
              <p className="text-[0.95rem]">
                Rankings por bairro, condomínio e cidade — competição saudável
                que multiplica o impacto.
              </p>
            </Card>
            <Card icon="coin" animate>
              <h3 className="mb-2">Recompensa real</h3>
              <p className="text-[0.95rem]">
                Não é só medalha: o líder mensal ganha conta de energia
                subsidiada por parceiros.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading>
            <h2>Prêmios por um planeta melhor</h2>
            <p className="mx-auto max-w-[640px]">
              Cada faixa de pontos libera um novo nível de recompensa — do
              iniciante ao champion.
            </p>
          </SectionHeading>
          <figure className="m-0 text-center">
            <img
              src={premiosImg}
              alt="Faixas de recompensa SoulUp: Inativo, Iniciante, Ativo, Hero e Champion"
              className="mx-auto max-w-full rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            />
          </figure>
        </Container>
      </section>
    </>
  );
}
