import {RESULTADO, Resultado} from "../utilidades/Constantes.tsx";

interface iComponenteResultado {
    estado: Resultado | null;
}

export const ComponenteResultado: React.FC<iComponenteResultado> = ({estado}) => {
    switch(estado) {
        case RESULTADO.GANASTE:
            return <span className="text-3x1 text-center">Ganaste</span>;

        case RESULTADO.PERDISTE:
            return <span className="text-3x1 text-center">Perdiste</span>;

        case RESULTADO.EMPATE:
            return <span className="text-3x1 text-center">Empate</span>;

        default:
            return null;
    }
}