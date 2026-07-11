import React, { useState } from "react"

// Clase de React que genera una ventana emergente sobre la misma página web
import Modal from "react-modal";

import { useGetPokemon } from "../../hooks/useGetPokemon";
import { PokemonCard } from "../pokemonCard/PokemonCard";
import { useSearchStore } from "../../store/useSearchStore";


const ModalBusqueda: React.FC = () => {
    const [isOpen, filtro, busquedaActual, closeModal, setFiltro, setBusquedaActual] = useSearchStore((state) => [state.isOpen, state.filtro, state.busquedaActual, state.closeModal, state.setFiltro, state.setBusquedaActual]);
    
    const {pokemonData} = useGetPokemon(busquedaActual);

    const handleInputChange = (evento: React.ChangeEvent<HTMLInputElement>) => setFiltro(evento.target.value);
    const onClickBusqueda = () => setBusquedaActual(filtro.toLocaleLowerCase());

    // Función que permite cerrar la ventana emergente de la búsqueda al momento de hacer clic fuera de esta
    const handleCloseModal = () => {
        setFiltro("");
        setBusquedaActual("");
        closeModal();
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={handleCloseModal} className={"w-6/12 h-4/12 bg-white mx-auto p-5 mt-5 flex flex-col gap-5 items-center shadow-lg rounded-lg"}>
            <h6>Búsqueda</h6>
            <input type="text" value={filtro} onChange={handleInputChange} className="border p-2" data-testid='search-input' />
            <button onClick={onClickBusqueda} data-testid='search-submit-button'>Buscar</button>
            
            {pokemonData?.id && <PokemonCard pokemonId={pokemonData.id}/>}
        </Modal>
    );
};

export default ModalBusqueda;
