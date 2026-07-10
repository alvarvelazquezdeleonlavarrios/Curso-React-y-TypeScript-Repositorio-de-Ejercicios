import React, { useMemo } from "react";
import { useGetPokemon } from "../../hooks/useGetPokemon";
import { Pokemon } from "../../interfaces/Pokemon";
import { getPokemonMainType } from "../../utilidades/getPokemonMainType";
import { Label } from "../../compartidos/label/Label";
import { capitalizarPrimeraLetra } from "../../utilidades/capitalizarPrimeraLetra";
import { BotonFavorito } from "../../compartidos/buttons/BotonFavorito";
import { useNavigate } from "react-router";


interface iPokemonCard {
    pokemon?: Pokemon;
    pokemonId?: number;
}

export const PokemonCard: React.FC<iPokemonCard> = ({pokemon, pokemonId}) => {
    const {pokemonData} = useGetPokemon(pokemon?.name, pokemonId);
    
    // Se obtiene el nombre del tipo principal del pokemón para utilizarlo al momento de asignarle imagen de fondo a la carta
    const pokemonMainType = useMemo(() => pokemonData && getPokemonMainType(pokemonData), [pokemonData]);

    // Hook de react que permite generar endpoints/urls de nuestra aplicación
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/pokemon/${pokemonData?.name}`);
    }

    return (
        <div className={`${pokemonMainType}-background relative w-56 h-56 rounded-lg shadow-lg p-4 cursor-pointer`}>
            <BotonFavorito pokemonId={pokemonData?.id}/>
            <div className=" flex flex-col items-center mx-auto" onClick={onClick}>
                <Label>{pokemonData?.name ? capitalizarPrimeraLetra(pokemonData?.name) : ""}</Label>
                <img className="mx-auto w-40 h-40"
                    src={pokemonData?.sprites?.front_default}
                    alt={pokemonData?.name}
                />
            </div>
        </div>
    );
}
