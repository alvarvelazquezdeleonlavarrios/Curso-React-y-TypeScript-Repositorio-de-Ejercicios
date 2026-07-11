import { useQuery } from "@tanstack/react-query"
import { BASE_URL } from "../constantes/url";
import { Pokemon } from "../interfaces/Pokemon";

// Se requiere implementar esta interfaz adicional para que al momento de consultar por tipo, se rendericen correctamente las cartas
export interface iPokemon {
    pokemon: Pokemon;
}

interface iTypeListInfo {
    pokemon: iPokemon[];
}


const useGetPokemonListByType = (tipo: string) => {

    // Los nombres de las variables que retorne el Query también deben estar en inglés
    const {data, isLoading, error} = useQuery<iTypeListInfo>({
        queryKey: ['pokemonListByType', tipo],
        
        queryFn: async () => {
            // Realiza la petición a la API de forma asíncrona
            const response = await fetch(`${BASE_URL}type/${tipo}`);

            // La respuesta de la petición no fue correcta. La guarda en la variable "error"
            if (!response.ok) {
                throw new Error('La respuesta no fue correcta');
            }

            // Retorna la respuesta del formato JSON a un objeto de JavaScript. Lo almacena en la variable "data"
            return response.json();
        }
    });


    return {
        pokemonList: data?.pokemon ?? [],
        isLoading,
        error: error?.message ?? null
    };

}

export default useGetPokemonListByType;
