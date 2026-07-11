import React from "react";
import BarraNavegacion from "./BarraNavegacion";

// Se crea esta funcionalidad para que Jest pueda ejecutar pruebas unitarias en componentes de React (simula que los renderiza)
import {renderWithProviders} from "../../testUtils/renderWithProviders";

describe('BarraNavegacion', () => {
    it("Deberia renderizar sin error", () => {
        renderWithProviders(<BarraNavegacion />);
    });

    it("Deberia renderizar el logo", () => {
        const {getByAltText} = renderWithProviders(<BarraNavegacion />);
        expect(getByAltText("Pokelogo")).toBeInTheDocument();   // Se coloca el nombre definido en la propiedad "alt" de la imagen de la pokebola en la barra de navegación
    });

    it("Deberia renderizar los enlaces de navegacion", () => {
        const {getByText} = renderWithProviders(<BarraNavegacion />);
        expect(getByText("Pokedex")).toBeInTheDocument();   // Busca que exista el elemento cuyo texto sea "Pokedex"
        expect(getByText("Favoritos")).toBeInTheDocument(); // Busca que exista el elemento cuyo texto sea "Favoritos"
    });

    it("Deberia renderizar el boton de busqueda", () => {
        const {getByRole} = renderWithProviders(<BarraNavegacion />);
        expect(getByRole("button")).toBeInTheDocument();   // Busca que exista el elemento cuya etiqueta HTML sea "button"
    });
});
