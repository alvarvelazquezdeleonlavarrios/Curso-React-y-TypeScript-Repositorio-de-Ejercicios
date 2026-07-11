import React from "react";
import { useSearchStore } from "../../store/useSearchStore"

// Botón que se ocupa para abrir una ventana emergente en la misma página para realizar la búsqueda
export const BotonBuscar = () => {
    const openModal = useSearchStore((state) => state.openModal);

    return (
        <button onClick={openModal}>Buscar</button>
    );
}
