import { PokemonData } from "../interfaces/PokemonData";

export const getPokemonMainType = (pokemon: PokemonData) => pokemon.types.find(tipo => tipo.slot === 1)?.type.name;
