import React from 'react'
import './App.css'

const HookUseCallback = () => {
    const [contador, setContador] = React.useState(0);  // Valor inicial de 0
    const [contador2, setContador2] = React.useState(0);  // Valor inicial de 0

    // Función que no se vuelve a ejecutar, a menos que la dependencia "contador" cambie su valor
    const sumar = React.useCallback(() => setContador(contador + 1), [contador]);
    const sumar2 = () => setContador2(contador2 + 1);

    return (
        <>
        <h1>Contador 1 HookUseCallback: {contador}</h1>
        <button onClick={sumar}>Incrementar</button>

        <h1>Contador 2 HookUseCallback: {contador2}</h1>
        <button onClick={sumar2}>Incrementar</button>
        <br/>
        </>
    );
}

export default HookUseCallback;