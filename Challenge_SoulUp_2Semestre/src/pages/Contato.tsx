import { useState, type FormEvent } from "react";
import Icon from "@/components/soulup/Icon";
import Button from "@/components/soulup/Button";
import Container from "@/components/soulup/Container";
import SectionHeading from "@/components/soulup/SectionHeading";
import useDocumentMeta from "@/hooks/useDocumentMeta";

interface Erros {
  name?: string | undefined;
  email?: string | undefined;
  subject?: string | undefined;
  message?: string | undefined;
}

const CAMPO_BASE =
  "w-full rounded-sm border-2 border-borderc bg-bg px-4 py-3 font-body text-[0.95rem] text-deep transition-colors focus:border-teal focus:bg-white focus:outline-none";

export default function Contato() {
  useDocumentMeta(
    "Contato — SoulUp",
    "Fale com a equipe SoulUp: envie sua mensagem, dúvida ou proposta de parceria.",
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [erros, setErros] = useState<Erros>({});
  const [feedback, setFeedback] = useState<{ tipo: "sucesso" | "erro"; texto: string } | null>(
    null,
  );

  function aoDigitarNome(valor: string) {
    setName(valor);
    if (valor.trim().length >= 3) {
      setErros((atual) => ({ ...atual, name: undefined }));
    }
  }

  function aoDigitarEmail(valor: string) {
    setEmail(valor);
    const texto = valor.trim();
    if (texto.indexOf("@") > 0 && texto.indexOf(".") > 0) {
      setErros((atual) => ({ ...atual, email: undefined }));
    }
  }

  function aoDigitarMensagem(valor: string) {
    setMessage(valor);
    if (valor.trim().length >= 10) {
      setErros((atual) => ({ ...atual, message: undefined }));
    }
  }

  function aoEnviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFeedback(null);

    const novosErros: Erros = {};

    if (name.trim().length < 3) {
      novosErros.name = "Informe seu nome completo (minimo 3 caracteres).";
    }

    const textoEmail = email.trim();
    if (textoEmail.length === 0 || textoEmail.indexOf("@") < 1 || textoEmail.indexOf(".") < 0) {
      novosErros.email = "Informe um e-mail valido.";
    }

    if (subject.trim().length === 0) {
      novosErros.subject = "Selecione um assunto.";
    }

    if (message.trim().length < 10) {
      novosErros.message = "A mensagem precisa ter pelo menos 10 caracteres.";
    }

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      setFeedback({
        tipo: "erro",
        texto: "Por favor, corrija os campos destacados antes de enviar.",
      });
      return;
    }

    setErros({});
    setFeedback({
      tipo: "sucesso",
      texto: "Mensagem enviada com sucesso! A equipe SoulUp respondera em breve.",
    });
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <section className="py-16">
      <Container>
        <SectionHeading>
          <h1>Fale com a equipe</h1>
          <p className="mx-auto max-w-[640px]">
            Dúvidas, sugestões, parcerias ou imprensa — responderemos em até
            48h úteis.
          </p>
        </SectionHeading>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.5fr]">
          <aside className="rounded-md bg-gradient-to-br from-ocean to-deep p-10 text-white">
            <h3 className="mb-2 text-white">Informações</h3>
            <p className="mb-6 text-white/90">
              Nosso time está espalhado por São Paulo, mas conectado pela
              mesma missão: tornar a sustentabilidade um hábito divertido.
            </p>
            <ul className="flex list-none flex-col gap-1">
              <li className="flex items-center gap-3 py-2">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
                  <Icon name="pin" style={{ width: "18px", height: "18px" }} />
                </span>
                <span>FIAP — Av. Paulista, 1106 — SP</span>
              </li>
              <li className="flex items-center gap-3 py-2">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
                  <Icon name="school" style={{ width: "18px", height: "18px" }} />
                </span>
                <span>Turma 1TDSPO</span>
              </li>
            </ul>
          </aside>

          <form
            className="rounded-md border border-borderc bg-surface p-10 shadow-soft-sm"
            noValidate
            onSubmit={aoEnviar}
          >
            <div className="mb-4">
              <label htmlFor="name" className="mb-1 block text-[0.9rem] font-semibold text-deep">
                Nome completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Como devemos te chamar?"
                value={name}
                onChange={(e) => aoDigitarNome(e.target.value)}
                className={`${CAMPO_BASE} ${erros.name ? "border-error" : ""}`}
              />
              {erros.name && <span className="mt-1 block text-[0.85rem] text-error">{erros.name}</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="mb-1 block text-[0.9rem] font-semibold text-deep">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => aoDigitarEmail(e.target.value)}
                className={`${CAMPO_BASE} ${erros.email ? "border-error" : ""}`}
              />
              {erros.email && <span className="mt-1 block text-[0.85rem] text-error">{erros.email}</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="mb-1 block text-[0.9rem] font-semibold text-deep">
                Assunto *
              </label>
              <select
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`${CAMPO_BASE} ${erros.subject ? "border-error" : ""}`}
              >
                <option value="">Selecione…</option>
                <option value="duvida">Dúvida sobre a plataforma</option>
                <option value="parceria">Proposta de parceria</option>
                <option value="imprensa">Imprensa</option>
                <option value="outro">Outro</option>
              </select>
              {erros.subject && (
                <span className="mt-1 block text-[0.85rem] text-error">{erros.subject}</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="mb-1 block text-[0.9rem] font-semibold text-deep">
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Escreva sua mensagem (mín. 10 caracteres)…"
                value={message}
                onChange={(e) => aoDigitarMensagem(e.target.value)}
                className={`${CAMPO_BASE} min-h-[120px] resize-y ${erros.message ? "border-error" : ""}`}
              />
              {erros.message && (
                <span className="mt-1 block text-[0.85rem] text-error">{erros.message}</span>
              )}
            </div>

            <Button type="submit" variant="primary" block>
              Enviar mensagem
            </Button>

            {feedback && (
              <div
                className={`mt-4 rounded-sm px-4 py-3 text-[0.9rem] font-medium ${
                  feedback.tipo === "sucesso"
                    ? "border border-success bg-success/10 text-success"
                    : "border border-error bg-error/10 text-error"
                }`}
                role="status"
                aria-live="polite"
              >
                {feedback.texto}
              </div>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
