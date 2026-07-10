import React from "react";

interface iGrid {
    children: React.ReactNode;
    irPaginaSiguiente?: () => void;
    irPaginaAnterior?: () => void;
}

export const Grid: React.FC<iGrid> = ({children, irPaginaSiguiente, irPaginaAnterior}) => (
    <div className="container mx-auto w-100">
        <div className="grid grid-cols-4 gap-3 mx-auto">
            {children}
        </div>
        <div className="flex justify-center mt-4 gap-5">
            {irPaginaAnterior && <button onClick={irPaginaAnterior}>Anterior</button>}
            {irPaginaSiguiente && <button onClick={irPaginaSiguiente}>Siguiente</button>}
        </div>
    </div>
);
