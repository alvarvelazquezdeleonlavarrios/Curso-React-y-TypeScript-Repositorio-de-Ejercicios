import {create} from 'zustand';
import {Respuesta} from "../utilidades/Constantes.tsx";

type JuegoController = {
    estado: number;
    respuesta: Respuesta | null;
    setEstado: (estado: number) => void;
    setRespuesta: (respuesta: Respuesta) => void;
}

// Función de Zustand que configura una nueva variable de tipo JuegoController y que será utilizada globalmente en otros componentes. 
const useJuegoCotroller = create<JuegoController>(

    // La función set permite configurar los métodos de la clase para poder modificar el valor de sus atributos
    (set) => ({
        estado: 0,
        respuesta: null,
        setEstado: (estado: number) => set({estado}),
        setRespuesta: (respuesta: Respuesta) => set({respuesta})
    })

);

export default useJuegoCotroller;
