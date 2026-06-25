import React from 'react'
import './App.css'
import { TemaContexto } from './Contextos';

const Nieto = () => {
    // Recupera la variable global definida desde el Padre
    const tema = React.useContext(TemaContexto);

    return (
        <>
        <div style={tema === "dark" ? 
            {backgroundColor: 'black', color: 'white'} :
            {backgroundColor: 'white', color: 'black'}
        }>Nieto</div>
        <br/>
        </>
    );
}

export default Nieto;