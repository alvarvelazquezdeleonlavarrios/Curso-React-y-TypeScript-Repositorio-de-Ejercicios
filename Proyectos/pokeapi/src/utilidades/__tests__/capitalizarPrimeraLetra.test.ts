import { capitalizarPrimeraLetra } from "../capitalizarPrimeraLetra";

describe("capitalizarPrimeraLetra", () => {
    it("Deberia capitalizar la primera letra", () => {
        expect(capitalizarPrimeraLetra("hola")).toBe("Hola");
    });

    it("Deberia retornar vacio si el string es vacio", () => {
        expect(capitalizarPrimeraLetra("")).toBe("");
    });

    it("Deberia retornar el mismo string si la primera letra ya esta en mayuscula", () => {
        expect(capitalizarPrimeraLetra("Hola")).toBe("Hola");
    });

    it("Deberia capitalizar la primera letra de toda la oracion", () => {
        expect(capitalizarPrimeraLetra("hola mundo")).toBe("Hola mundo");
    });
});
