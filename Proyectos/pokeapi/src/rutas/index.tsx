import React from "react";
import { Route, Routes } from "react-router-dom";

const Pokedex = React.lazy(() => import("../vistas/Pokedex"));
const PokemonPerfil = React.lazy(() => import("../vistas/PokemonPerfil"));
const PokemonTipo = React.lazy(() => import("../vistas/PokemonTipo"));
const PokemonFavorito = React.lazy(() => import("../vistas/PokemonFavoritos"));

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

        <Route 
            path="/tipo/:typeName"
            element={
                <React.Suspense fallback={<div>Cargando...</div>}>
                    <PokemonTipo />
                </React.Suspense>
            }
        />

        <Route 
            path="/favoritos"
            element={
                <React.Suspense fallback={<div>Cargando...</div>}>
                    <PokemonFavorito />
                </React.Suspense>
            }
        />
    </Routes>
);

export default AppRoutes;
