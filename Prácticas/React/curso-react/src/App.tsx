import HookUseState from "./HookUseState.tsx";
import HookUseReducer from "./HookUseReducer.tsx";
import HookUseMemo from "./HookUseMemo.tsx";
import HookUseCallback from "./HookUseCallback.tsx";
import HookUseContextPadre from "./HookUseContextPadre.tsx";
import HookPersonalizado from "./HookPersonalizado.tsx";
import './App.css'

function App() {

  const {cuenta, incrementar, resetear} = HookPersonalizado(2);

  return (
    <>
      <HookUseState />
      <HookUseReducer />
      <HookUseMemo />
      <HookUseCallback />
      <HookUseContextPadre />

      <div>
        <h1>Cuenta Personalizada: {cuenta}</h1>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={resetear}>Resetear</button>
      </div>
    </>
  )
}

export default App
