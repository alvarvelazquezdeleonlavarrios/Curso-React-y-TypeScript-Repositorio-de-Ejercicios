import {getPokemonMainType} from "../getPokemonMainType";
import { PokemonData } from "../../interfaces/PokemonData";

describe("getPokemonMainType", () => {
    it("Deberia retornar el primer tipo si hay mas de uno", () => {
        // Se genera un objeto de prueba de tipo PokemonData para pasarlo como parámetro
        const pokemonData: PokemonData = {
            types: [
                {
                    slot: 1,
                    type: {
                        name: "fire",
                        url: "",
                    }
                },
                {
                    slot: 1,
                    type: {
                        name: "water",
                        url: "",
                    }
                },
            ],
            name: "",
            id: 0,
            height: 0,
            weight: 0,
            sprites: {front_default: ""}
        };

        expect(getPokemonMainType(pokemonData)).toBe("fire");
    });


    it("Deberia retornar undefined si el pokemon no tiene tipos", () => {
        // Se genera un objeto de prueba de tipo PokemonData para pasarlo como parámetro
        const pokemonData: PokemonData = {
            types: [],
            name: "",
            id: 0,
            height: 0,
            weight: 0,
            sprites: {front_default: ""}
        };

        expect(getPokemonMainType(pokemonData)).toBeUndefined();
    });
});
