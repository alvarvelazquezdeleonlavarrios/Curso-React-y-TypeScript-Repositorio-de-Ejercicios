import useJuegoCotroller from "../controladores/JuegoContoller";
import {RESULTADO, Resultado, ESTADOS} from "../utilidades/Constantes.tsx";

interface iBoton {
    resultado: Resultado | null;
}

const Boton: React.FC<iBoton> = ({resultado}) => {
    const juegoCotroller = useJuegoCotroller(controller => controller);

    // Acción que realizará el botón dependiendo del resultado de la partida
    const funcionOnClick = () => {
        switch(resultado) {
            case RESULTADO.GANASTE:
                juegoCotroller.setEstado(ESTADOS.SELECCIONANDO);
                break;

            case RESULTADO.PERDISTE:
                juegoCotroller.setEstado(ESTADOS.GAME_OVER);
                break;

            case RESULTADO.EMPATE:
                juegoCotroller.setEstado(ESTADOS.SELECCIONANDO);
                break;

            default:
                break;
        }
    }

    return (
        <button className="bg-gray-400 hover:bg-gray-600 rounded-lg w-40 py-3 text-xl m-auto text-white block" onClick={funcionOnClick}>Continuar</button>
    );
}

export default Boton;
