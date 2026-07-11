import React from "react";
import {PokemonInfo} from "./PokemonInfo";
import { useGetPokemon } from "../../hooks/useGetPokemon";
import { librasAKilogramos, pulgadasACentimetros } from "../../utilidades/convertirSistemaInternacionalUnidades";

// Se crea esta funcionalidad para que Jest pueda ejecutar pruebas unitarias en componentes de React (simula que los renderiza)
import {renderWithProviders} from "../../testUtils/renderWithProviders";


// Se crea el mock para el hook useGetPokemon, para controlarlo y configurar lo que queremos que nos retorne gracias a jest.fn()
jest.mock("../../hooks/useGetPokemon", () => ({
    useGetPokemon: jest.fn(),
}));

describe("PokemonInfo", () => {
    // Función que se ejcuta antes de correr todas las pruebas. Sirve para realizar configuraciones iniciales
    beforeEach(() => {
        // Se configura lo que va a retornar el mock del hook cuando este se vaya a ejecutar
        (useGetPokemon as jest.Mock).mockReturnValue({
            pokemonData: {
                name: "Pikachu",
                weight: 10,
                height: 10,
                sprites: {
                    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
                },
                types: [
                    {
                        type: {
                            name: "electric",
                        }
                    },
                ],
            }
        });
    });

    // Función que se utiliza para limpiar los mocks para evitar que en pruebas siguientes se utilice el mismo mock
    afterEach(() => jest.clearAllMocks);


    it("Deberia renderizar el nombre del pokemon", () => {
        const {getByText} = renderWithProviders(<PokemonInfo />);
        expect(getByText("Pikachu")).toBeInTheDocument;     // Busca que exista algún elemento HTML cuyo texto contenga "Pikachu"
    });

    it("Deberia renderizar el peso del pokemon", () => {
        const {getByText} = renderWithProviders(<PokemonInfo />);
        expect(getByText(`Peso: ${librasAKilogramos(10)} Kg`)).toBeInTheDocument;     // Busca que exista algún elemento HTML cuyo texto contenga "Peso: xx kg" donde xx es un valor calculado
    });

    it("Deberia renderizar la altura del pokemon", () => {
        const {getByText} = renderWithProviders(<PokemonInfo />);
        expect(getByText(`Altura: ${pulgadasACentimetros(10)} cm`)).toBeInTheDocument;     // Busca que exista algún elemento HTML cuyo texto contenga "Altura: xx cm" donde xx es un valor calculado
    });

});
