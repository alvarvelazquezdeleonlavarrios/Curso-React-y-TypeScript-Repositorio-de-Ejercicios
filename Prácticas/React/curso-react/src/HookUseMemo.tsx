import React from 'react'
import './App.css'

const arregloMuyGrande = Array.from({length: 1000000}, (_, i) => i+1);

const HookUseMemo = () => {
    const [contador, setContador] = React.useState(0);  // Valor inicial de 0

    // Función para asignar el nuevo valor del estado en cuestión
    const sumar = () => setContador(contador + 1);

    // Función que no vuelve a calcular el valor, a menos que algún elemento del arreglo de dependencias cambie
    const total: number = React.useMemo( () => {
        return arregloMuyGrande.reduce((previo, actual) => actual + previo, 0);
    }, []   // <-- Arreglo de dependencias. El valor total se volverá a calcular si algún elemento de este arreglo cambia su valor
    );

    return (
        <>
        <h1>Contador HookUseMemo: {contador}</h1>
        <h1>Valor UseMemo: {total}</h1>
        <button onClick={sumar}>Incrementar</button>
        <br/>
        </>
    );
}

export default HookUseMemo;