import './App.css';
import { useMemo } from 'react';
import ModuloJuego from './modulos/ModuloJuego.tsx';
import ModuloSeleccion from "./modulos/ModuloSeleccion.tsx";
import ModuloGameOver from './modulos/ModuloGameOver.tsx';
import { ESTADOS } from "./utilidades/Constantes.tsx";
import useJuegoCotroller from './controladores/JuegoContoller.tsx';
import ComponentePuntaje from "./componentes/ComponentePuntaje";

const renderizarModulo = (estado: ESTADOS) => {
  switch (estado){
    
    case ESTADOS.SELECCIONANDO:
      return <ModuloSeleccion/>;
    
    case ESTADOS.JUGANDO:
      return <ModuloJuego/>;

    case ESTADOS.GAME_OVER:
      return <ModuloGameOver/>;

    default:
      return null;
  }
}

function App() {
  const estado = useJuegoCotroller(controller => controller.estado);
  const modulo = useMemo(() => renderizarModulo(estado), [estado]);

  return (
    <>
      <h1 className='text-center font-extrabold tet-5x1 pt-12'>Piedra, Papel o Tijera</h1>
      <ComponentePuntaje/>
      {modulo}
    </>
  )
}

export default App
