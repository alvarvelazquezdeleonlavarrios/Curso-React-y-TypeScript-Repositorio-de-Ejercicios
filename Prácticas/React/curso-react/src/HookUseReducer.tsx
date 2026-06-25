import React from 'react'
import './App.css'

interface EnumOpciones {
    opcion: "Incrementar" | "Decrementar" | "Reiniciar";
}

const opcionesReducer = (cuenta: number, enumerador: EnumOpciones) => {
    switch (enumerador.opcion) {
        case "Incrementar":
            return cuenta + 1;

        case "Decrementar":
            return cuenta - 1;

        case "Reiniciar":
            return 0;

        default:
            return cuenta;
    }
}

const HookUseReducer = () => {
    const [cuenta, operacion] = React.useReducer(opcionesReducer, 0);   // Valor inicial de 0

    // Funciones para llamar a las operaciones que puede ejecutar el contador
    const incrementarContador = () => operacion({opcion: "Incrementar"});
    const decrementarContador = () => operacion({opcion: "Decrementar"});
    const reiniciarContador = () => operacion({opcion: "Reiniciar"});

    // Genera los elementos en pantalla para este componente
    return (
        <>
        <h1>Contador UseReducer: {cuenta}</h1>
        <span>
            <button onClick={incrementarContador}>Incrementar</button>
            <button onClick={decrementarContador}>Decrementar</button>
            <button onClick={reiniciarContador}>Reiniciar</button>
        </span>
        <br/>
        </>
    );
}

export default HookUseReducer;