import React from "react";
import { useNavigate } from "react-router";
import { PokemonType } from "../../interfaces/PokemonData";
import { mapearTipoAIcono } from "../../utilidades/mapearTipoAIcono";

interface iTypeIcons {
    tiposPokemon: PokemonType[];
}

export const TypeIcons: React.FC<iTypeIcons> = ({tiposPokemon}) => {
    const navigate = useNavigate();

    const onClick = (tipoPokemon: PokemonType) => navigate(`/tipo/${tipoPokemon.type.name}`);

    return (
        <div className="absolute top-2 right-2 gap-2 cursor-pointer">
            {tiposPokemon.map((tipoPokemon) => (
                <div key={tipoPokemon.type.name} className="bg-white p-1 rounded-full w-6 h-6 mb-1" onClick={() => onClick(tipoPokemon)}>
                    <img src={mapearTipoAIcono(tipoPokemon)} alt={`${tipoPokemon.type.name} icon`}/>
                </div>
            )) }
        </div>
    );
}