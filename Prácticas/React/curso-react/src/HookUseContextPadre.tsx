import React from 'react'
import Hijo from './HookUseContextHijo.tsx'
import {TemaContexto} from "./Contextos.tsx"
import './App.css'

const Padre = () => {
    const [tema, setTema] = React.useState("light");

    // Función que alterna el fondo de blanco a negro y viceversa
    const cambiarTema = () => setTema(tema === "light" ? "dark" : "light");

    return (
        <TemaContexto.Provider value={tema}>
            <Hijo/>
            <button onClick={cambiarTema}>Alternar Tema</button>
            <br/>
        </TemaContexto.Provider>
    );
}

export default Padre;