import React from "react";
import { useGetPokemon } from "../../hooks/useGetPokemon";

interface iPokemonSprites {
    pokemonNombre?: string;
}

export const PokemonSprites: React.FC<iPokemonSprites> = ({pokemonNombre}) => {
    const {pokemonData} = useGetPokemon(pokemonNombre);

    return (
        <div className="flex flex-row">
            <div>
                {pokemonData?.sprites?.front_default && (
                    <>
                    <h6 className="text-2x1 text-center">Normal</h6>
                    <div className="flex">
                        <img src={pokemonData?.sprites?.front_default} alt={`${pokemonData?.name ?? ""} front default`} className="mx-auto"/>
                        <img src={pokemonData?.sprites?.back_default} alt={`${pokemonData?.name ?? ""} back default`} className="mx-auto"/>
                    </div>
                    </>
                )}
            </div>

            <div>
                {pokemonData?.sprites?.front_shiny && (
                    <>
                    <h6 className="text-2x1 text-center">Brillante</h6>
                    <div className="flex">
                        <img src={pokemonData?.sprites?.front_shiny} alt={`${pokemonData?.name ?? ""} front shiny`} className="mx-auto"/>
                        <img src={pokemonData?.sprites?.back_shiny} alt={`${pokemonData?.name ?? ""} back shiny`} className="mx-auto"/>
                    </div>
                    </>
                )}
            </div>
        </div>
    );
}
