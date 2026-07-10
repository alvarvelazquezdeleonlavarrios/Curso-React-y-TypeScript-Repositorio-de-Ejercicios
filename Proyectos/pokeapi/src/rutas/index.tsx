import React from "react";
import { Route, Routes } from "react-router-dom";

const Pokedex = React.lazy(() => import("../vistas/Pokedex"));
const PokemonPerfil = React.lazy(() => import("../vistas/PokemonPerfil"));

const AppRoutes = () => (
    <Routes>
        <Route 
            path="/"
            element={
                <React.Suspense fallback={<div>Cargando...</div>}>
                    <Pokedex />
                </React.Suspense>
            }
        />

        <Route 
            path="/pokemon/:pokemonName"
            element={
                <React.Suspense fallback={<div>Cargando...</div>}>
                    <PokemonPerfil />
                </React.Suspense>
            }
        />
    </Routes>
);

export default AppRoutes;
