import React, {useMemo} from "react";
import {FaHeart, FaRegHeart} from "react-icons/fa6"
import { useFavoriteStore } from "../../store/useFavoriteStore";

interface iBotonFavorito {
    pokemonId: number | undefined;
}

export const BotonFavorito: React.FC<iBotonFavorito> = ({pokemonId}) => {
    const [favoritos, addFavorito, deleteFavorito] = useFavoriteStore((favoriteStore) => [favoriteStore.favoritos, favoriteStore.addFavorito, favoriteStore.deleteFavorito]);

    const esFavorito = useMemo(() => favoritos.includes(pokemonId?.toString() || "0"), [favoritos, pokemonId]);

    const onClick = () => {
        const idModificar = pokemonId?.toString() || "0";
        esFavorito ? deleteFavorito(idModificar) : addFavorito(idModificar);
    }

    return <button className="bg-white p-1 rounded-full absolute top-2 left-2" onClick={onClick}>
        {esFavorito ? <FaHeart fill="#EF4444"/> : <FaRegHeart fill="#EF4444"/>}
    </button>
};
