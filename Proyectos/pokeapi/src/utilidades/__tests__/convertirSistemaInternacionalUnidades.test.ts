import {pulgadasACentimetros, librasAKilogramos} from "../convertirSistemaInternacionalUnidades";

const datosPruebaPulgadas = [
    [1, "2.54"],
    [2, "5.08"],
    [10, "25.40"],
    [100, "254.00"]
];

const datosPruebaLibras = [
    [1, "0.45"],
    [2, "0.91"],
    [10, "4.54"],
    [100, "45.36"]
];

describe("pulgadasACentimetros", () => {
    // Se ejecutan múltiples pruebas a partir de un arreglo de datos
    it.each(datosPruebaPulgadas)("Deberia convertir pulgadas a centimetros", (pulgadas, esperado) => {
        expect(pulgadasACentimetros(Number(pulgadas))).toBe(esperado);
    });
});

describe("librasAKilogramos", () => {
    it.each(datosPruebaLibras)("Deberia convertir libras a kilogramos", (libras, esperado) => {
        expect(librasAKilogramos(Number(libras))).toBe(esperado);
    });
});
