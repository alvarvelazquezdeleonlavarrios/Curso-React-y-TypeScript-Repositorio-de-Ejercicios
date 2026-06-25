import { useState } from 'react'
import './App.css'

const HookUseState = () => {
    const [cuenta, setCuenta] = useState(0);    // Valor inicial de 0

    // Función para asignar el nuevo valor del estado en cuestión
    const incrementar = () => {
        setCuenta(valorPrevio => valorPrevio + 1);
    }

    // Genera los elementos en pantalla para este componente
    return (
        <>
        <h1>Contador UseState: {cuenta}</h1>
        <button onClick={incrementar}>Incrementar</button>
        <br/>
        </>
    );
}

export default HookUseState;