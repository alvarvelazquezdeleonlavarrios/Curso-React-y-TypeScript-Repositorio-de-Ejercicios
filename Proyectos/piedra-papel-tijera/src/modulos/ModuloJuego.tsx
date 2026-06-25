import { useEffect, useState } from "react";
import { BotonRespuesta } from "../componentes/BotonRespuesta";
import useJuegoCotroller from "../controladores/JuegoContoller";
import useJugarJuego from "../hooks/useJugarJuego";
import { ComponenteResultado } from "../componentes/ComponenteResultado";
import Boton from "../componentes/Boton";
import { RESULTADO } from "../utilidades/Constantes";
import usePuntajeController from "../controladores/PuntajeController";


const ModuloJuego = () => {
    // Recupera el estado actual del controlador global del juego
    const respuestaJugador = useJuegoCotroller(controller => controller.respuesta);

    // Recupera el controlador del puntaje para realizar el cálculo al finalizar el conteo
    const puntajeController = usePuntajeController(controller => controller);

    // Recupera la información de la partida
    const {resultado, respuestaCPU, generarRespuestaCPU} = useJugarJuego();

    // UseEffect para generar la respuesta del CPU
    useEffect(() => {
        if (respuestaJugador) {
            generarRespuestaCPU(respuestaJugador);
        }
    }, [respuestaJugador, generarRespuestaCPU]);


    // UseEffect para realizar una cuenta regresiva de 3 segundos antes de mostrar el resultado
    const [cuentaRegresiva, setCuentaRegresiva] = useState(3);
    useEffect(() => {
        if (cuentaRegresiva > 0) {
            setTimeout(() => setCuentaRegresiva(cuentaRegresiva - 1), 1000);
        }
        // Una vez finalizado el conteo de 3 segundos, muestra la puntuación acorde al resultado
        else {
            if (resultado === RESULTADO.GANASTE) {
                puntajeController.incrementarPuntaje();
            }
        }
    }, [cuentaRegresiva]);

    // Muestra en pantalla la cuenta regresiva en lugar de la respuesta inmediata
    if (cuentaRegresiva > 0){
        return <span className="h-48 text-5x1 text-center">{cuentaRegresiva}</span>
    }

    // Muestra una nueva sección de pantalla donde aparecen dos botones sin funcionalidad, donde solamente se muestra
    // la respuesta tanto de la opción que eligió el jugador y el CPU
    return(
        <>
        <ComponenteResultado estado={resultado} />

        <div className="flex justify-around">
            <div className="flex flex-col align-center">
                <span className="text-3x1 text-center pb-5">Jugador</span>
                <BotonRespuesta opcion={respuestaJugador}/>
            </div>

            <div className="flex flex-col align-center">
                <span className="text-3x1 text-center pb-5">CPU</span>
                <BotonRespuesta opcion={respuestaCPU}/>
            </div>
        </div>

        <Boton resultado={resultado}/>
        </>
    )
}

export default ModuloJuego;
