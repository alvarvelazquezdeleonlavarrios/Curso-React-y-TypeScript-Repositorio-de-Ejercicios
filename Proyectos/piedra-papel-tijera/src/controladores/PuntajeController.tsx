import {create} from 'zustand';


type PuntajeController = {
    puntaje: number;
    puntajeMaximo: number;
    incrementarPuntaje: () => void;
    resetearPuntaje: () => void;
}

// Función de Zustand que configura una nueva variable de tipo PuntajeController y que será utilizada globalmente en otros componentes. 
const usePuntajeController = create<PuntajeController>(
    
    (set, get) => ({
        puntaje: 0,
        puntajeMaximo: localStorage.getItem('puntajeMaximo') ? parseInt(localStorage.getItem('puntajeMaximo') as string) : 0,
        
        incrementarPuntaje: () => {
            // Recupera el puntaje actual y le suma 1
            const nuevoPuntaje = get().puntaje + 1;

            // Va almacenando el nuevo puntaje en la memoria del navegador
            if (nuevoPuntaje > get().puntajeMaximo){
                localStorage.setItem('puntajeMaximo', nuevoPuntaje.toString());
                set(() => ({puntaje: nuevoPuntaje, puntajeMaximo: nuevoPuntaje}));
            }
            // En caso contrario, solo actualiza el puntaje actual
            else {
                set(() => ({puntaje: nuevoPuntaje}));
            }
        },
        resetearPuntaje: () => set({puntaje: 0})
    })
);

export default usePuntajeController;
