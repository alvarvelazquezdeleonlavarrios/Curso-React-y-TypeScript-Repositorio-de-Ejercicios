import React from "react";
import { useNavigate, useParams } from "react-router";
import { PokemonListByType } from "./PokemonListByType";
import useGetPokemonListByType from "../../hooks/useGetPokemonListByType";

// Se crea esta funcionalidad para que Jest pueda ejecutar pruebas unitarias en componentes de React (simula que los renderiza)
import {renderWithProviders} from "../../testUtils/renderWithProviders";


// En esta ocasión, se tiene que mockear useParams para controlar lo que nos retorne una URL
// También se mockea useNavigate porque lo utiliza BrowserRouter
jest.mock("react-router", () => ({
    useParams: jest.fn(),
    useNavigate: jest.fn()
}));

// También se tiene que mockear BrowserRouter, ya que useParams depende de este
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),  // Se trae tods la biblioteca como tal
    BrowserRouter: ({children}: {children: React.ReactNode}) => (<div>{children}</div>),    // Se cambia al BrowserRouter para que por un Wrapper se le pase un children
}));

// Se crea el mock para el hook useGetPokemonListByType, para controlarlo y configurar lo que queremos que nos retorne gracias a jest.fn()
// ¡Importante! Ahora se tiene que definir de esta manera, ya que el hook se exporta con un default
jest.mock("../../hooks/useGetPokemonListByType", () => jest.fn());


describe("PokemonListByType", () => {
    // Función que se ejcuta antes de correr todas las pruebas. Sirve para realizar configuraciones iniciales
    beforeEach(() => {
        (useParams as jest.Mock).mockReturnValue({
            typeName: "fire"
        });

        (useGetPokemonListByType as jest.Mock).mockReturnValue({
            pokemonList: [
                {pokemon: {name: "Charmander"}},
                {pokemon: {name: "Charizard"}},
            ],
        });
    });

    // Función que se utiliza para limpiar los mocks para evitar que en pruebas siguientes se utilice el mismo mock
    afterEach(() => jest.clearAllMocks);


    it("Deberia renderizar una lista de PokemonCard", () => {
        const {queryAllByTestId} = renderWithProviders(<PokemonListByType />);
        expect(queryAllByTestId("pokemon-card")).toHaveLength(2);       // Espera que se generen dos PokemonCard con los 2 pokemones definidos en el mock
    });

});