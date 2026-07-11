import React from "react";
import PokemonList from "./PokemonList";
import { useGetPokemonList } from "../../hooks/useGetPokemonList";

// Se crea esta funcionalidad para que Jest pueda ejecutar pruebas unitarias en componentes de React (simula que los renderiza)
import {renderWithProviders} from "../../testUtils/renderWithProviders";


// Se crea el mock para el hook useGetPokemonList, para controlarlo y configurar lo que queremos que nos retorne gracias a jest.fn()
jest.mock("../../hooks/useGetPokemonList", () => ({
    useGetPokemonList: jest.fn(),
}));

describe("", () => {
    // Función que se ejcuta antes de correr todas las pruebas. Sirve para realizar configuraciones iniciales
    beforeEach(() => {
        (useGetPokemonList as jest.Mock).mockReturnValue({
            pokemonList: [
                {pokemon: {name: "Pikachu"}},
                {pokemon: {name: "Charmander"}},
            ],
            irPaginaSiguiente: jest.fn(),
            irPaginaAnterior: jest.fn(),
        });
    });

    // Función que se utiliza para limpiar los mocks para evitar que en pruebas siguientes se utilice el mismo mock
    afterEach(() => jest.clearAllMocks);


    it("Deberia renderizar la lista de cartas de pokemon", () => {
        const {queryAllByTestId} = renderWithProviders(<PokemonList />);
        expect(queryAllByTestId("pokemon-card")).toHaveLength(2);   // Espera que se generen dos PokemonCard con los 2 pokemones definidos en el mock
    });

    it("Deberia llamar a la funcion irPaginaSiguiente cuando se de clic en el boton Siguiente", () => {
        const {getByText} = renderWithProviders(<PokemonList />);
        getByText("Siguiente").click();     // Se busca un elemento HTML que tenga el texto "Siguiente" y se le indica a Jest que se hará clic sobre este
        expect(useGetPokemonList().irPaginaSiguiente).toHaveBeenCalledTimes(1);   // Espera a que la función "irPaginaSiguiente" del hook haya sido llamada una sola vez
    });

    it("Deberia llamar a la funcion irPaginaAnterior cuando se de clic en el boton Anterior", () => {
        const {getByText} = renderWithProviders(<PokemonList />);
        getByText("Anterior").click();     // Se busca un elemento HTML que tenga el texto "Anterior" y se le indica a Jest que se hará clic sobre este
        expect(useGetPokemonList().irPaginaAnterior).toHaveBeenCalledTimes(1);   // Espera a que la función "irPaginaAnterior" del hook haya sido llamada una sola vez
    });
});
