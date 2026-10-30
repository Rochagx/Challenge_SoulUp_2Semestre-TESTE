interface ApiStatusProps {
  carregando: boolean;
  erro: string | null;
  onTentarNovamente?: () => void;
}

// mensagens de erro ou ok da API Java
export default function ApiStatus({ carregando, erro, onTentarNovamente }: ApiStatusProps) {
  if (carregando) {
    return (
      <p className="rounded-md border border-borderc bg-surface p-6 text-center text-muted" role="status">
        Carregando dados da API
      </p>
    );
  }
  if (erro) {
    const mensagem = erro;
    return (
      <div className="rounded-md border border-destructive/40 bg-destructive/10 p-6 text-center text-deep" role="alert">
        <p className="mb-2 font-semibold">Não foi possível falar com a API</p>
        <p className="mb-3 text-[0.9rem] text-muted">{mensagem}</p>
        {onTentarNovamente && (
          <button onClick={onTentarNovamente} className="font-semibold text-teal underline">
            Tentar novamente
          </button>
        )}
      </div>
    );
  }
  return null;
}
