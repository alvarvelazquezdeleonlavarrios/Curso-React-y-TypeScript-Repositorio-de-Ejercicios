import { Link, useParams } from "react-router-dom";
import { getImagenZodiacal } from "../utilidades/getImagenZodiacal";
import { useMemo } from "react";
import useDetalleZodiacoChatGPT from "../hooks/useDetalleZodiacoChatGPT";
import ImagenCargando from "../componentes/ImagenCargando";

const Detalle = () => {
    // El nombre de esta constante debe de coincidir con el nombre del parámetro que se define en la URL del componente App
    const { nombreZodiaco } = useParams();
    const imagenSrc = useMemo(() => getImagenZodiacal(nombreZodiaco as string), [nombreZodiaco]);
    const respuestaChtGPT = useDetalleZodiacoChatGPT(nombreZodiaco);

    return (
        <div className="w-3/4 p-12 rounded-lg flex justify-center items-center flex-col border-gray-800 border backdrop-blur-xl backdrop-brightness-50 shadow-xl m-auto">
            <img src={imagenSrc} alt={nombreZodiaco} className="w-66 h-66 rounded-full"/>
            {respuestaChtGPT ? <p className="text-xl text-white mt-3 py-2 text-center">{respuestaChtGPT}</p> : <ImagenCargando />}
            <Link to="/">
                <button className="text-xl text-white my-5">Volver a Inicio</button>
            </Link>
        </div>
    );
}

export default Detalle;
