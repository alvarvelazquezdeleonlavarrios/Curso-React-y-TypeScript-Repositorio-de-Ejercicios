import React from "react";
import { Route, Routes } from "react-router-dom";

const Pokedex = React.lazy(() => import("../vistas/Pokedex"));

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={
            <React.Suspense fallback={<div>Cargando...</div>}>
                <Pokedex />
            </React.Suspense>
        }/>
    </Routes>
);

export default AppRoutes;
