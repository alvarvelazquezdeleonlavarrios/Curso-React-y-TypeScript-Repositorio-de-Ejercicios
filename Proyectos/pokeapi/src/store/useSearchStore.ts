import {create} from "zustand";

interface SearchStore {
    isOpen: boolean;
    filtro: string;
    busquedaActual: string;
    openModal: () => void;
    closeModal: () => void;
    setFiltro: (filtro: string) => void;
    setBusquedaActual: (busquedaActual: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
    isOpen: false,
    filtro: "",
    busquedaActual: "",
    openModal: () => set({isOpen: true}),
    closeModal: () => {
        set({isOpen: false});
        set({filtro: ""});
        set({busquedaActual: ""});
    },
    setFiltro: (filtro) => set({filtro: filtro}),
    setBusquedaActual: (busquedaActual) => set({busquedaActual: busquedaActual}),
}));
