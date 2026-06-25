import { BotonRespuesta } from "../componentes/BotonRespuesta.tsx";
import useJuegoCotroller from "../controladores/JuegoContoller.tsx";
import type {Respuesta} from "../utilidades/Constantes.tsx";
import {ESTADOS, RESPUESTAS} from "../utilidades/Constantes.tsx";


const ModuloSeleccion = () => {
    // Hook personalizado del estado del juego. Recupera el controlador, lo cual permitirá controlar el estado de la ejecución del juego
    const juegoCotroller = useJuegoCotroller(controller => controller);

    // Función que utiliza los métodos del controlador para asignar el estado actual de la partida
    const onClickRespuesta = (respuesta: Respuesta) => {
        juegoCotroller.setRespuesta(respuesta);
        juegoCotroller.setEstado(ESTADOS.JUGANDO);
    }

    // Por cada opción disponible (piedra, papel y tijera) genera un botón pasando como parámetro
    // el emoji que se va a renderizar en pantalla
    return (
        <>
        <div className="flex row justify-around">
            {RESPUESTAS.map(
                (respuesta) => <BotonRespuesta opcion={respuesta} eventoOnClick={onClickRespuesta}/>
            )}
        </div>
        </>
    );
}

export default ModuloSeleccion;