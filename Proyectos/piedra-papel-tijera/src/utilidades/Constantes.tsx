export type Respuesta = "👊" | "✋" | "✌️";
export const RESPUESTAS = ["👊", "✋", "✌️"] as Respuesta[];

export enum ESTADOS {
    SELECCIONANDO = 0,
    JUGANDO = 1,
    GAME_OVER = 2
};

export type Resultado = "Empate" | "Ganaste" | "Perdiste" ;

export enum RESULTADO {
    EMPATE = "Empate" , 
    GANASTE = "Ganaste" , 
    PERDISTE = "Perdiste" 
};
