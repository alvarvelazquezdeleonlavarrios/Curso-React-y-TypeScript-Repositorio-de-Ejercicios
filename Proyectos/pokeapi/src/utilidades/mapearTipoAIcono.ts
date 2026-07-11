import { PokemonTipos } from "../constantes/tipos";
import { PokemonType } from "../interfaces/PokemonData";

import normal from "../assets/normal.svg"
import fighting from "../assets/fighting.svg"
import flying from "../assets/flying.svg"
import poison from "../assets/poison.svg"
import ground from "../assets/ground.svg"
import rock from "../assets/rock.svg"
import bug from "../assets/bug.svg"
import ghost from "../assets/ghost.svg"
import steel from "../assets/steel.svg"
import fire from "../assets/fire.svg"
import water from "../assets/water.svg"
import grass from "../assets/grass.svg"
import electric from "../assets/electric.svg"
import psychic from "../assets/psychic.svg"
import ice from "../assets/ice.svg"
import dragon from "../assets/dragon.svg"
import dark from "../assets/dark.svg"
import fairy from "../assets/fairy.svg"


export const mapearTipoAIcono = (tipoPokemon: PokemonType) => {
    switch(tipoPokemon.type.name) {
        case PokemonTipos.normal:
            return normal;

        case PokemonTipos.fighting:
            return fighting;

        case PokemonTipos.flying:
            return flying;

        case PokemonTipos.poison:
            return poison;

        case PokemonTipos.ground:
            return ground;

        case PokemonTipos.rock:
            return rock;

        case PokemonTipos.bug:
            return bug;

        case PokemonTipos.ghost:
            return ghost;

        case PokemonTipos.steel:
            return steel;

        case PokemonTipos.fire:
            return fire;

        case PokemonTipos.water:
            return water;

        case PokemonTipos.grass:
            return grass;

        case PokemonTipos.electric:
            return electric;

        case PokemonTipos.psychic:
            return psychic;

        case PokemonTipos.ice:
            return ice;

        case PokemonTipos.dragon:
            return dragon;

        case PokemonTipos.dark:
            return dark;

        case PokemonTipos.fairy:
            return fairy;

        default:
            return "";
    }
}