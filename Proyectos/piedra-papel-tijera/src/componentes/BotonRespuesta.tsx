import type {Respuesta} from "../utilidades/Constantes.tsx";

interface iBotonRespuesta {
    opcion: Respuesta | null;
    eventoOnClick?: (respuesta: Respuesta) => void;
}

export const BotonRespuesta = ({opcion, eventoOnClick}: iBotonRespuesta) => {
    // Verifica que exista el atributo y la función de evento, así como la definición de la función
    const eventoOpcion = () => (eventoOnClick && opcion) && eventoOnClick(opcion); 

    // Genera un botón circular con la opción en formato de emoji
    return (
        <div className="rounded-full text-9x1">
            <button className="bg-gray-400 hover:bg-gray-600 rounded-full shadow-lg h-48 w-48" onClick={eventoOpcion}>
                {opcion ?? '🤔'}
            </button>
        </div>
    );
};
