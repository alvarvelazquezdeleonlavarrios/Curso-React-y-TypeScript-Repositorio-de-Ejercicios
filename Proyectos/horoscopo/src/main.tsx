import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // Originalmente se tenía la etiqueta <React.StrictMode>, pero esta se quitó debido a que hace que las funciones
  // useEffect se ejecuten dos veces, lo cual hace que se consuma ancho de banda y créditos en las peticiones de la
  // API con ChatGPT. No pasa nada malo si se quita, ya que cuando se hacen despliegues a producción,
  // el modo estricto se debe desactivar
  <App />
)
