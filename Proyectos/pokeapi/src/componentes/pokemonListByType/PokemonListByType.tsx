import React from "react";
import { useParams } from "react-router"
import useGetPokemonListByType, { iPokemon } from "../../hooks/useGetPokemonListByType";
import { Grid } from "../../compartidos/grid/Grid";
import { PokemonCard } from "../pokemonCard/PokemonCard";

export const PokemonListByType = () => {
    const {typeName} = useParams();
    const {pokemonList} = useGetPokemonListByType(typeName ?? "");

    return (
        <Grid>
            {pokemonList?.map((pokemon: iPokemon) => <PokemonCard key={pokemon?.pokemon.name} pokemon={pokemon?.pokemon} />)}
        </Grid>
    );
}
