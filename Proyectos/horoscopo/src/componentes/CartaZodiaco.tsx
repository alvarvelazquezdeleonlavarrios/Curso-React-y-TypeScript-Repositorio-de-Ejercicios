import { useMemo } from "react";
import { Link } from "react-router-dom";
import { getImagenZodiacal } from "../utilidades/getImagenZodiacal";

interface iCartaZodiaco {
    nombre: string;
}

const CartaZodiaco: React.FC<iCartaZodiaco> = ({nombre}) => {
    const imagenSrc = useMemo(() => getImagenZodiacal(nombre), [nombre]);

    return (
        <Link to={nombre.toLowerCase()} className="w-60 h-60 rounded-lg flex justify-center items-center flex-col border-gray-800 border backdrop-blur-xl backdrop-brightness-50 shadow-xl m-auto hover:scale-125">
            <img src={imagenSrc} alt={nombre} className="w-36 h-36 rounded-full"/>
            <h3 className="text-3x1 text-white mt-3 py-2 text-center">{nombre}</h3>
        </Link>
    );
}

export default CartaZodiaco;