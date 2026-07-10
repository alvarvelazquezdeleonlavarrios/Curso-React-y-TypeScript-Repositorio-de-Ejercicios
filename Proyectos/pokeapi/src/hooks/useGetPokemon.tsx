import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constantes/url";
import { PokemonData } from "../interfaces/PokemonData";

export const useGetPokemon = (pokemonNombre ?: string, pokemonId ?: number) => {
    // Los nombres de las variables que retorne el Query también deben estar en inglés
    const {data: pokemonData, isLoading, error} = useQuery<PokemonData>({
        queryKey: ['pokemon', pokemonNombre, pokemonId],
        queryFn: async () => {
            // Regresa un objeto de tipo Response, con el resultado de la consulta al API Endpoint
            const respuesta = await fetch(`${BASE_URL}pokemon/${pokemonNombre ?? pokemonId}`);

            if (!respuesta.ok){
                throw new Error('Respuesta de la petición no fue correcta');
            }

            const datos = await respuesta.json();
            return datos;
        }
    });

    return {pokemonData, isLoading, error: error?.message ?? null};
};
