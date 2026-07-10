import React from "react";
import {useGetPokemonList} from "../../hooks/useGetPokemonList";
import { Pokemon } from "../../interfaces/Pokemon";
import { PokemonCard } from "../pokemonCard/PokemonCard";
import { Grid } from "../../compartidos/grid/Grid";

const PokemonList: React.FC = () => {
    const {pokemonList, irPaginaSiguiente, irPaginaAnterior} = useGetPokemonList();

    return (
    <Grid irPaginaSiguiente={irPaginaSiguiente} irPaginaAnterior={irPaginaAnterior}>
        {pokemonList?.map((pokemon: Pokemon) => <PokemonCard key={pokemon?.name} pokemon={pokemon}/>)}
    </Grid>);
};

export default PokemonList;
