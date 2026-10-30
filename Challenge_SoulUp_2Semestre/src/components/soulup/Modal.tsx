import { useEffect, type ReactNode } from "react";

interface ModalProps {
  aberto: boolean;
  onFechar: () => void;
  titleId: string;
  children: ReactNode;
}

export default function Modal({ aberto, onFechar, titleId, children }: ModalProps) {
  useEffect(() => {
    function aoApertarTecla(e: KeyboardEvent) {
      if (e.key === "Escape") onFechar();
    }
    document.addEventListener("keydown", aoApertarTecla);
    return () => document.removeEventListener("keydown", aoApertarTecla);
  }, [onFechar]);

  if (!aberto) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-deep/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-labelledby={titleId}
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onFechar();
      }}
    >
      <div className="relative w-full max-w-[480px] animate-modalIn rounded-md bg-surface p-6 md:p-10">
        <button
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-bg text-lg text-deep"
          aria-label="Fechar"
          onClick={onFechar}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
