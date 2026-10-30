import { describe, expect, it } from "vitest";
import { formatarNome } from "@/lib/formatar";

describe("formatarNome", () => {
  it("deixa a primeira letra maiúscula e o resto minúsculo", () => {
    expect(formatarNome("jOÃO")).toBe("João");
  });
  it("formata cada palavra e remove espaços extras", () => {
    expect(formatarNome("  maria   DA silva ")).toBe("Maria Da Silva");
  });
});
