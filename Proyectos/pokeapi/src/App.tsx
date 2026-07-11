import React from "react";
import Providers from "./Providers";
import AppRoutes from "./rutas";
import BarraNavegacion from "./componentes/barraNavegacion/BarraNavegacion";
import ModalBusqueda from "./componentes/modalBusqueda/ModalBusqueda";

const App: React.FC = () => {
    return (
        <Providers>
            <BarraNavegacion />
            
            <div className="mt-5 mb-5 w-9/12 mx-auto">
                <AppRoutes />
            </div>

            <ModalBusqueda />
        </Providers>
    );
}

export default App;
