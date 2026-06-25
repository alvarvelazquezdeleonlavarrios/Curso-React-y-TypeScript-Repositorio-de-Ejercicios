import { useCallback, useState } from "react"
import { RESPUESTAS, RESULTADO, type Respuesta, type Resultado } from "../utilidades/Constantes";

const useJugarJuego = () => {
    const [resultado, setResultado] = useState<Resultado | null>(null);
    const [respuestaCPU, setRespuestaCPU] = useState<Respuesta | null>(null);

    const generarRespuestaCPU = useCallback((respuestaJugador: Respuesta) => {
        const indiceAleatorio = Math.floor(Math.random() * RESPUESTAS.length);
        const respuestaCPU = RESPUESTAS[indiceAleatorio];
        setRespuestaCPU(respuestaCPU);

        // Caso donde se empata
        if (respuestaJugador === respuestaCPU) {
            setResultado(RESULTADO.EMPATE);
            return;
        }

        // Casos donde el jugador gana
        if (respuestaJugador === RESPUESTAS[2] && respuestaCPU === RESPUESTAS[1]) {     // ✌️ > ✋
            setResultado(RESULTADO.GANASTE);
            return;
        }
        if (respuestaJugador === RESPUESTAS[1] && respuestaCPU === RESPUESTAS[0]) {     // ✋ > 👊
            setResultado(RESULTADO.GANASTE);
            return;
        }
        if (respuestaJugador === RESPUESTAS[0] && respuestaCPU === RESPUESTAS[2]) {     // 👊 > ✌️
            setResultado(RESULTADO.GANASTE);
            return;
        }

        // Casos donde el jugador pierde
        setResultado(RESULTADO.PERDISTE);
    }, []);

    return {resultado, respuestaCPU, generarRespuestaCPU};
}

export default useJugarJuego;
