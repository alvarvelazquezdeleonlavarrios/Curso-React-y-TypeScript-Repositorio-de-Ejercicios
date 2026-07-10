import {create} from "zustand";

interface iFavoriteStore {
    favoritos: string[];
    addFavorito: (id: string) => void;
    deleteFavorito: (id: string) => void;
}

export const useFavoriteStore = create<iFavoriteStore>((set) => ({
    // Almacena todos los ids de pokemones marcados como favoritos, separados por comas, o en su defecto un arreglo vacío si no hay
    favoritos: localStorage.getItem("favorite-pokemons")?.split(",") || [],
    
    // Función que agrega un pokemon favorito a la lista
    addFavorito: (id: string) => set((favoriteStore) => {
        // Trae los favoritos anteriores, y le agrega el nuevo a la derecha del arreglo
        const favoritos = [...favoriteStore.favoritos, id];
        localStorage.setItem("favorite-pokemons", favoritos.join(","));
        return {favoritos};
    }),

    // Función que elimina un pokemon favorito de la lista
    deleteFavorito: (id: string) => set((favoriteStore) => {
        const favoritos = favoriteStore.favoritos.filter((favorito) => favorito !== id);
        localStorage.setItem("favorite-pokemons", favoritos.join(","));
        return {favoritos};
    }),
}));
