import React from "react";
import { Grid } from "../../compartidos/grid/Grid";
import { useFavoriteStore } from "../../store/useFavoriteStore"
import { PokemonCard } from "../pokemonCard/PokemonCard";

export const FavoritePokemon = () => {
    const favoriteIDs = useFavoriteStore((state) => state.favoritos);

    return (
        <Grid>
            {favoriteIDs?.map((favoriteId) => <PokemonCard key={favoriteId} pokemonId={Number(favoriteId)}/>)}
        </Grid>
    );
}
