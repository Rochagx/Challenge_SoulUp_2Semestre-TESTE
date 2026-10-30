import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import Container from "@/components/soulup/Container";
import SectionHeading from "@/components/soulup/SectionHeading";
import useDocumentMeta from "@/hooks/useDocumentMeta";

interface Pergunta {
  pergunta: string;
  resposta: ReactNode;
}

const PERGUNTAS: Pergunta[] = [
  {
    pergunta: "O que é a SoulUp?",
    resposta: (
      <p>
        A SoulUp é uma rede social de impacto sustentável que transforma o
        tempo e a atenção dos usuários em benefícios reais. Dentro da
        plataforma, você pode assistir anúncios de marcas parceiras,
        participar de missões, interagir com comunidades e acumular pontos
        para trocar por vantagens sustentáveis.
      </p>
    ),
  },
  {
    pergunta: "Como ganho pontos na plataforma?",
    resposta: (
      <p>
        Você pode ganhar pontos assistindo anúncios, participando de desafios
        sustentáveis, cumprindo missões, interagindo com a comunidade e
        utilizando recursos da plataforma. Quanto maior o engajamento, maior a
        pontuação acumulada.
      </p>
    ),
  },
  {
    pergunta: "Quais benefícios posso resgatar?",
    resposta: (
      <p>
        Os pontos acumulados podem ser convertidos em descontos na conta de
        luz, créditos de compensação de carbono, benefícios relacionados ao
        transporte público e experiências sustentáveis oferecidas pelos
        parceiros da SoulUp.
      </p>
    ),
  },
  {
    pergunta: "Preciso pagar para usar a SoulUp?",
    resposta: (
      <p>
        Não. A SoulUp é gratuita para os usuários. O modelo da plataforma
        funciona através de parcerias com marcas, anunciantes e empresas que
        incentivam ações sustentáveis.
      </p>
    ),
  },
  {
    pergunta: "Como funciona o sistema de pontuação?",
    resposta: (
      <p>
        A plataforma utiliza um sistema de gamificação sustentável que avalia
        ações, participação e engajamento dos usuários. O objetivo é garantir
        uma pontuação justa, segura e escalável para toda a comunidade.
      </p>
    ),
  },
  {
    pergunta: "Existe ranking entre os usuários?",
    resposta: (
      <p>
        Sim. A SoulUp possui rankings em tempo real que destacam os usuários
        mais engajados da plataforma. Isso incentiva a participação contínua e
        cria uma experiência mais dinâmica e competitiva.
      </p>
    ),
  },
  {
    pergunta: "Posso interagir com outras pessoas?",
    resposta: (
      <p>
        Sim. A SoulUp funciona como uma rede social sustentável, permitindo
        interação com amigos, participação em comunidades e compartilhamento
        de conteúdos relacionados ao impacto positivo e sustentabilidade.
      </p>
    ),
  },
  {
    pergunta: "A SoulUp utiliza inteligência artificial?",
    resposta: (
      <p>
        Sim. A plataforma prevê recursos com inteligência artificial para
        geração de conteúdos, personalização de experiências e criação de
        avatares inteligentes que incentivam ações sustentáveis de forma
        personalizada.
      </p>
    ),
  },
  {
    pergunta: "Como funciona a integração com transporte público?",
    resposta: (
      <p>
        A SoulUp está desenvolvendo mecanismos para converter pontos em
        benefícios reais relacionados ao transporte público, permitindo que os
        usuários utilizem suas recompensas de forma prática e sustentável.
      </p>
    ),
  },
  {
    pergunta: "Como entro em contato com a equipe?",
    resposta: (
      <p>
        Você pode acessar a página de{" "}
        <Link to="/contato" className="underline">
          Contato
        </Link>{" "}
        para enviar uma mensagem ou visualizar os integrantes do projeto na
        página de{" "}
        <Link to="/integrantes" className="underline">
          Integrantes
        </Link>
        .
      </p>
    ),
  },
];

export default function Faq() {
  useDocumentMeta(
    "FAQ — SoulUp",
    "Perguntas frequentes sobre a plataforma SoulUp, pontuação, benefícios e funcionamento.",
  );

  const [itemAberto, setItemAberto] = useState<number | null>(null);

  function alternarItem(indice: number) {
    setItemAberto((atual) => (atual === indice ? null : indice));
  }

  return (
    <section className="py-16">
      <Container>
        <SectionHeading>
          <h1>Perguntas frequentes</h1>
          <p className="mx-auto max-w-[640px]">
            Tire suas dúvidas sobre a SoulUp, funcionamento da plataforma,
            pontuação, benefícios e recursos disponíveis.
          </p>
        </SectionHeading>

        <div className="mx-auto flex max-w-[800px] flex-col gap-3">
          {PERGUNTAS.map((item, indice) => {
            const aberto = itemAberto === indice;
            return (
              <div
                className="overflow-hidden rounded-md border border-borderc bg-surface"
                key={item.pergunta}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-display text-base font-semibold text-deep"
                  aria-expanded={aberto}
                  onClick={() => alternarItem(indice)}
                >
                  {item.pergunta}
                  <span
                    className={`text-2xl text-teal transition-transform duration-300 ${
                      aberto ? "rotate-180" : ""
                    }`}
                  >
                    {aberto ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden px-6 transition-[max-height,padding] duration-300 ${
                    aberto ? "max-h-[400px] pb-4" : "max-h-0"
                  }`}
                >
                  <div className="text-[0.95rem]">{item.resposta}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
