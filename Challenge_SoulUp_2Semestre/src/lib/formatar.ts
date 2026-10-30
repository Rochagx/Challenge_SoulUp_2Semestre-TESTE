/** cada palavra com a primeira letra maiúscula e o resto minúsculo. */
export function formatarNome(nome: string): string {
  return nome
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((p) => p.charAt(0).toLocaleUpperCase("pt-BR") + p.slice(1).toLocaleLowerCase("pt-BR"))
    .join(" ");
}
