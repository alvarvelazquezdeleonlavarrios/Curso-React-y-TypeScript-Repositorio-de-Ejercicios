import CartaZodiaco from "../componentes/CartaZodiaco";
import { NOMBRES_ZODIACALES } from "../utilidades/constantes";

const Inicio = () => (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-20">
        {NOMBRES_ZODIACALES.map((zodiaco) => <CartaZodiaco nombre={zodiaco} />)}
    </div>
);

export default Inicio;