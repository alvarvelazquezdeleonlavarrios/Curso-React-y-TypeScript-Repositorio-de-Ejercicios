import { BrowserRouter, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

// Lazy hace que los componentes Inicio y Detalle se carguen únicamente cuando se acceden a sus rutas (es decir, solo cuando se van a ocupar realmente)
// Para que Lazy funcione, se debe colocar el componente Suspense a manera de pantalla de carga
const Inicio = lazy(() => import("./vistas/Inicio"));
const Detalle = lazy(() => import("./vistas/Detalle"));

function App() {
  
  return (
    <div className="overflow-y-auto max-h-full p-12">
      <BrowserRouter>
        <Suspense fallback={<div>Cargando...</div>}>
        
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/:nombreZodiaco" element={<Detalle />} />
          </Routes>

        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
