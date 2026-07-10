import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BASE_URL } from "../constantes/url";
import { Pokemon } from "../interfaces/Pokemon";


// Importante: los nombres de las variables deben estar en inglés, ya que así vienen nombradas desde la API al momento de mapear los datos
interface PokemonList {
    count: number,
    next: string | null,
    previous: string | null,
    results: Pokemon[]
}

export const useGetPokemonList = () => {
    // Se setea la URL al API Endpoint
    const [url, setUrl] = useState(`${BASE_URL}pokemon?limit=36`);

    // Los nombres de las variables que retorne el Query también deben estar en inglés
    const {data, isLoading, error} = useQuery<PokemonList>({
        queryKey: ['pokemonList', url],
        queryFn: async () => {
            // Realiza la petición a la API de forma asíncrona
            const response = await fetch(url);

            // La respuesta de la petición no fue correcta. La guarda en la variable "error"
            if (!response.ok) {
                throw new Error('La respuesta no fue correcta');
            }

            // Retorna la respuesta del formato JSON a un objeto de JavaScript. Lo almacena en la variable "data"
            return response.json();
        }
    });

    const irPaginaSiguiente = () => {
        if (data?.next) {
            setUrl(data.next);
        }
    }

    const irPaginaAnterior = () => {
        if (data?.previous){
            setUrl(data.previous);
        }
    }

    return {
        pokemonList : data?.results ?? [],
        isLoading,
        error : error?.message ?? null,
        irPaginaSiguiente: data?.next ? irPaginaSiguiente : undefined,
        irPaginaAnterior: data?.previous ? irPaginaAnterior : undefined,
    }

}

