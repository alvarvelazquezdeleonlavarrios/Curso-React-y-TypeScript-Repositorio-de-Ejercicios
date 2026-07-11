import React from "react";
import ModalBusqueda from "./ModalBusqueda";

// Se crea esta funcionalidad para que Jest pueda ejecutar pruebas unitarias en componentes de React (simula que los renderiza)
import { renderWithProviders } from "../../testUtils/renderWithProviders";


describe("ModalBusqueda", () => {
    
    it("Deberia renderizarse sin errores", () => {
        renderWithProviders(<ModalBusqueda />);
        expect(document.querySelector(".ReactModalPortal")).toBeInTheDocument();    // Busca que exista en la página el elemento ReactModalPortal. Es aquí donde se geenra la ventana del modal de búsqueda
    });

});
