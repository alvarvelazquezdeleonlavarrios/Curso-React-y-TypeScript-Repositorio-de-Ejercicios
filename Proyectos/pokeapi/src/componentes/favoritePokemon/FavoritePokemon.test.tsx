import React from "react";
import {FavoritePokemon} from "./FavoritePokemon";
import { useFavoriteStore } from "../../store/useFavoriteStore";

// Se crea esta funcionalidad para que Jest pueda ejecutar pruebas unitarias en componentes de React (simula que los renderiza)
import {renderWithProviders} from "../../testUtils/renderWithProviders";

// Se crea el mock para el hook useFavoriteStore, para controlarlo y configurar lo que queremos que nos retorne gracias a jest.fn()
jest.mock("../../store/useFavoriteStore", () => ({
    useFavoriteStore: jest.fn(),
}));


describe("FavoritePokemon", () => {
    // Función que se utiliza para limpiar los mocks para evitar que en pruebas siguientes se utilice el mismo mock
    afterEach(() => jest.clearAllMocks);

    it("Deberia renderizar PokemonCards para cada pokemon favorito", () => {
        const favoritosIDs = ["1", "2", "3"];
        (useFavoriteStore as unknown as jest.Mock).mockReturnValue(favoritosIDs);

        const {getAllByTestId} = renderWithProviders(<FavoritePokemon />);
        const pokemonCards = getAllByTestId("pokemon-card");    // Busca que exista al menos un elemento que tenga la propiedad data-testid="pokemon-card"
    
        expect(pokemonCards).toHaveLength(favoritosIDs.length); // Se espera que se tengan el mismo número de cartas que de pokemones marcados como favoritos
    });

    it("No deberia renderizar PokemonCards si no hay pokemones marcados como favoritos", () => {
        const favoritosIDs: string[] = [];
        (useFavoriteStore as unknown as jest.Mock).mockReturnValue(favoritosIDs);

        const {queryAllByTestId} = renderWithProviders(<FavoritePokemon />);
        const pokemonCards = queryAllByTestId("pokemon-card");    // Busca que existan 0 o más elementos que tengan la propiedad data-testid="pokemon-card"
    
        expect(pokemonCards).toHaveLength(favoritosIDs.length); // Se espera que se tengan el mismo número de cartas que de pokemones marcados como favoritos
    });
});
