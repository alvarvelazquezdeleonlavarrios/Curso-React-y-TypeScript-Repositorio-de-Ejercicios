import React, { useMemo } from "react";
import { useGetPokemon } from "../../hooks/useGetPokemon";
import { useParams } from "react-router";
import { getPokemonMainType } from "../../utilidades/getPokemonMainType";
import { capitalizarPrimeraLetra } from "../../utilidades/capitalizarPrimeraLetra";
import { librasAKilogramos, pulgadasACentimetros } from "../../utilidades/convertirSistemaInternacionalUnidades";
import { PokemonSprites } from "../pokemonSprites/PokemonSprites";
import { TypeIcons } from "../../compartidos/typeIcons/TypeIcons";


export const PokemonInfo = () => {
    // El nombre de esta variable debe coincidir con el nombre del parámetro definido en index.tsx
    const {pokemonName} = useParams();

    const {pokemonData} = useGetPokemon(pokemonName);
    const mainType = useMemo(() => pokemonData && getPokemonMainType(pokemonData), [pokemonData]);

    return (
        <div className="flex flex-row justify-between shadow-lg bg-gray-100 rounded-lg" data-testid="pokemon-info">
            <div className={`${mainType}-background w-72 h-72 rounded-l-lg items-center`}>
                <img src={pokemonData?.sprites?.front_default} alt={pokemonData?.name ?? ""} className="mx-auto w-72 h-72"/>
            </div>

            <div className="flex flex-col grow p-5 gap-3">
                <div className="relative flex">
                    <h1 className="text-3x1">{capitalizarPrimeraLetra(pokemonData?.name ?? "")}</h1>
                    <TypeIcons tiposPokemon={pokemonData?.types ?? []}/>
                </div>
                
                <span>{`Peso: ${librasAKilogramos(pokemonData?.weight ?? 0)} Kg`}</span>
                <span>{`Altura: ${pulgadasACentimetros(pokemonData?.height ?? 0)} cm`}</span>
                <PokemonSprites pokemonNombre={pokemonName} />
            </div>
        </div>
    )
}
