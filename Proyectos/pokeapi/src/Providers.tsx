import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Clases que permiten crear peticiones a la red
import { BrowserRouter } from "react-router-dom";   // Permite gestionar el ruteo de las peticiones

interface iProviders {
    children: React.ReactNode;
}

const queryClient = new QueryClient();

const Providers: React.FC<iProviders> = ({children}) => (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
);

export default Providers;
