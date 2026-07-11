import React from "react";
import { PokemonSprites } from "./PokemonSprites";
import { useGetPokemon } from "../../hooks/useGetPokemon";

// Se crea esta funcionalidad para que Jest pueda ejecutar pruebas unitarias en componentes de React (simula que los renderiza)
import { renderWithProviders } from "../../testUtils/renderWithProviders";

jest.mock("../../hooks/useGetPokemon", () => ({
    useGetPokemon: jest.fn(),
}));

describe("PokemonSprites", () => {
    afterEach(() => jest.clearAllMocks());

    it("Deberia renderizar los 4 sprites del pokemon", () => {
         // Se configura lo que va a retornar el mock del hook cuando este se vaya a ejecutar
        (useGetPokemon as jest.Mock).mockReturnValue({
            pokemonData: {
                sprites: {
                    front_default: "front_default",
                    back_default: "back_default",
                    front_shiny: "front_shiny",
                    back_shiny: "back_shiny",
                },
                name: "Pikachu",
            },
        });

        const {getByAltText} = renderWithProviders(<PokemonSprites />);

        const frontDefaultSprite = getByAltText("Pikachu front default");
        expect(frontDefaultSprite).toBeInTheDocument;                           // Busca que exista un elemento cuya propiedad alt tenga el valor "Pikachu front default"
        expect(frontDefaultSprite).toHaveAttribute("src", "front_default");     // Busca que exista un elemento que tenga la propiedad src y su valor sea "front_default"

        const backDefaultSprite = getByAltText("Pikachu back default");
        expect(backDefaultSprite).toBeInTheDocument;                            // Busca que exista un elemento cuya propiedad alt tenga el valor "Pikachu back default"
        expect(backDefaultSprite).toHaveAttribute("src", "back_default");      // Busca que exista un elemento que tenga la propiedad src y su valor sea "back_default"

        const frontShinySprite = getByAltText("Pikachu front shiny");
        expect(frontShinySprite).toBeInTheDocument;                             // Busca que exista un elemento cuya propiedad alt tenga el valor "Pikachu front shiny"
        expect(frontShinySprite).toHaveAttribute("src", "front_shiny");         // Busca que exista un elemento que tenga la propiedad src y su valor sea "front_shiny"

        const backShinySprite = getByAltText("Pikachu back shiny");
        expect(backShinySprite).toBeInTheDocument;                              // Busca que exista un elemento cuya propiedad alt tenga el valor "Pikachu back shiny"
        expect(backShinySprite).toHaveAttribute("src", "back_shiny");           // Busca que exista un elemento que tenga la propiedad src y su valor sea "back_shiny"
    });


    it("No deberia renderizar sprites si vienen como undefined", () => {
         // Se configura lo que va a retornar el mock del hook cuando este se vaya a ejecutar
        (useGetPokemon as jest.Mock).mockReturnValue({
            pokemonData: {
                sprites: {
                    front_default: undefined,
                    back_default: undefined,
                    front_shiny: undefined,
                    back_shiny: undefined,
                },
                name: "Pikachu",
            },
        });

        const {queryByAltText, queryByText} = renderWithProviders(<PokemonSprites />);

        // Espera que no existan los sprites
        expect(queryByAltText("Pikachu front default")).not.toBeInTheDocument();
        expect(queryByAltText("Pikachu back default")).not.toBeInTheDocument();
        expect(queryByAltText("Pikachu front shiny")).not.toBeInTheDocument();
        expect(queryByAltText("Pikachu back shiny")).not.toBeInTheDocument();

        // Espera que no aparezcan los subtítulos de los sprites
        expect(queryByText("Normal")).not.toBeInTheDocument();
        expect(queryByText("Brillante")).not.toBeInTheDocument();
    });
});
