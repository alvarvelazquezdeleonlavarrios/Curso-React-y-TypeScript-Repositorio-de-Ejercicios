import { mapearTipoAIcono } from "../mapearTipoAIcono";
import { PokemonType } from "../../interfaces/PokemonData";

const datosPrueba = [
    // Al no poder ponerse el icono directamente al ser un svg (es omitido en la configuración de tests), se debe retornar el tecto definido en fileMock.js
    ["normal", "test-file-stub"],
    ["fighting", "test-file-stub"],
    ["flying", "test-file-stub"],
    ["poison", "test-file-stub"],
    ["ground", "test-file-stub"],
    ["rock", "test-file-stub"],
    ["bug", "test-file-stub"],
    ["ghost", "test-file-stub"],
    ["steel", "test-file-stub"],
    ["fire", "test-file-stub"],
    ["water", "test-file-stub"],
    ["grass", "test-file-stub"],
    ["electric", "test-file-stub"],
    ["psychic", "test-file-stub"],
    ["ice", "test-file-stub"],
    ["dragon", "test-file-stub"],
    ["dark", "test-file-stub"],
    ["fairy", "test-file-stub"]
];

describe("mapearTipoAIcono", () => {
    // Con each, se ejecuta una prueba para cada elemento del arreglo de datos de prueba
    it.each(datosPrueba)("Deberia retornar el icono correcto para el tipo", (tipo, iconoEsperado) => {
        // Se crea un objeto de prueba, el cual será casteado como PokemonType
        const pokemonType = {
            type: {
                name: tipo,
                url: "",
            },
        }

        expect(mapearTipoAIcono(pokemonType as PokemonType)).toBe(iconoEsperado);
    });


    it("Deberia retornar un string vacio si el tipo no se encontro", () => {
        // Se crea un objeto de prueba, el cual será casteado como PokemonType
        const pokemonType = {
            type: {
                name: "unknown",
                url: "",
            },
        }

        expect(mapearTipoAIcono(pokemonType as PokemonType)).toBe("");
    });
});
