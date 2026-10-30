import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import logo from "@/assets/logo.svg";
import logoNextcodeAsset from "@/assets/logo-nextcode.png.asset.json";
const logoNextcode = logoNextcodeAsset.url;

const NAV_LINKS = [
  { to: "/", label: "Início", end: true },
  { to: "/sobre", label: "Sobre" },
  { to: "/plataforma", label: "Plataforma" },
  { to: "/validar", label: "Validar Ação" },
  { to: "/ranking", label: "Ranking" },
  { to: "/usuarios", label: "Usuários" },
  { to: "/integrantes", label: "Integrantes" },
  { to: "/faq", label: "FAQ" },
  { to: "/contato", label: "Contato" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-[100] h-header border-b border-borderc bg-white/90 backdrop-blur-md">
      <nav
        className="mx-auto flex h-full max-w-container items-center justify-between px-4 md:px-6"
        aria-label="Navegação principal"
      >
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-xl font-bold text-deep"
          onClick={fecharMenu}
        >
          <img src={logo} alt="SoulUp" className="h-8 w-auto" />
          <span className="mx-1 inline-block h-11 w-px bg-borderc" aria-hidden="true"></span>
          <img
            src={logoNextcode}
            alt="NextCode"
            className="h-[114px] w-auto"
          />
        </Link>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label="Abrir menu"
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          <span
            className={`h-0.5 w-6 bg-deep transition-all duration-300 ${
              menuAberto ? "translate-y-[7px] rotate-45" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-deep transition-all duration-300 ${
              menuAberto ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-deep transition-all duration-300 ${
              menuAberto ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          ></span>
        </button>

        <ul
          className={`fixed inset-x-0 top-header z-40 flex flex-col gap-4 border-b border-borderc bg-white p-6 shadow-soft-md transition-transform duration-300 md:static md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 md:shadow-none md:transition-none ${
            menuAberto ? "translate-y-0" : "-translate-y-[150%] md:translate-y-0"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={fecharMenu}
                className={`relative inline-block w-full py-1 text-base font-medium after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-teal after:transition-all after:duration-300 after:content-[''] md:w-auto md:text-[0.95rem] ${
                    (link.end ? pathname === link.to : pathname.startsWith(link.to))
                      ? "text-teal after:w-full"
                      : "text-deep after:w-0 hover:after:w-full"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
