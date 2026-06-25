import React from 'react';
import './App.css';

const HookPersonalizado = (valorInicial: number) => {
    const [cuenta, setCuenta] = React.useState(valorInicial);

    // Funciones de contador
    const incrementar = () => setCuenta(previo => previo + 1);
    const resetear = () => setCuenta(valorInicial);

    return {cuenta, incrementar, resetear};
}

export default HookPersonalizado;