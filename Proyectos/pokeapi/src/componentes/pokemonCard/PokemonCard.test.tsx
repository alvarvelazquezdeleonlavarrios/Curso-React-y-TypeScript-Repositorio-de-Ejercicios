import React from "react";
import { useGetPokemon } from "../../hooks/useGetPokemon";
import { PokemonCard } from "./PokemonCard";

// Se crea esta funcionalidad para que Jest pueda ejecutar pruebas unitarias en componentes de React (simula que los renderiza)
import {renderWithProviders} from "../../testUtils/renderWithProviders";

// Se crea el mock para el hook useGetPokemon, para controlarlo y configurar lo que queremos que nos retorne gracias a jest.fn()
jest.mock("../../hooks/useGetPokemon", () => ({
    useGetPokemon: jest.fn(),
}));

const mockPokemon = {
    name: "Pikachu",
    url: "",
};

describe("PokemonCard", () => {
    // Función que se ejcuta antes de correr todas las pruebas. Sirve para realizar configuraciones iniciales
    beforeEach(() => {
        // Se configura lo que va a retornar el mock del hook cuando este se vaya a ejecutar
        (useGetPokemon as jest.Mock).mockReturnValue({
            pokemonData: {
                name: "Pikachu",
                id: 25,
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
        const {getByText} = renderWithProviders(<PokemonCard pokemon={mockPokemon} />);
        expect(getByText("Pikachu")).toBeInTheDocument;     // Busca que exista algún elemento HTML cuyo texto contenga "Pikachu"
    });

    it("Deberia renderizar la imagen del pokemon", () => {
        const {getByAltText} = renderWithProviders(<PokemonCard pokemon={mockPokemon} />);
        const pokemonImage = getByAltText("Pikachu");
        
        expect(pokemonImage).toBeInTheDocument;  // Busca que exista algún elemento HTML cuya propiedad alt tenga el valor "Pikachu"
        expect(pokemonImage).toHaveAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png");     // Verifica que algín elemento tenga el atributo src y dicho valor
    });
});
