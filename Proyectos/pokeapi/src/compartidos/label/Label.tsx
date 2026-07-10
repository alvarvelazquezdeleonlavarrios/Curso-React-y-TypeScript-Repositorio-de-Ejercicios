import React from "react";

interface iLabel {
    // Obligatorio que el atributo se llame "children"
    children: React.ReactNode;
}

export const Label: React.FC<iLabel> = ({children}) => (
    <div className="w-24 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">{children}</div>
);
