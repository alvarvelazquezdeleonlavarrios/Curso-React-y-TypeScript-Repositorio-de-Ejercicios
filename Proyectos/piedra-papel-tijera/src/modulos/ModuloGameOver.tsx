import useJuegoCotroller from "../controladores/JuegoContoller"
import usePuntajeController from "../controladores/PuntajeController";
import { ESTADOS } from "../utilidades/Constantes";

const ModuloGameOver = () => {
    const juegoCotroller = useJuegoCotroller(controller => controller);
    const puntajeController = usePuntajeController(controller => controller);

    const onClickJugarOtraVez = () => {
        juegoCotroller.setEstado(ESTADOS.SELECCIONANDO);
        puntajeController.resetearPuntaje();
    }

    return (
        <>
        <button className="bg-gray-400 hover:bg-gray-600 rounded-lg w-40 py-3 text-xl m-auto text-white block" onClick={onClickJugarOtraVez}>Continuar</button>
        </>
    );
}

export default ModuloGameOver;
