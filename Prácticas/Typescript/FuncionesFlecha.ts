interface IPerro {
    raza: string,
    ladrar: () => void;
}

const perro1: IPerro = {
    raza: "pitbull",
    ladrar: () => console.log("Guau"),
}

const hacerLadrarAlPerro = (perro: IPerro): void => {
    perro.ladrar();
}

hacerLadrarAlPerro(perro1);


/*****************************************************************/

const formatoDeFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// Parámetro con valor por defecto "fecha", parámetro opcional "formato"
const mostrarFecha = (fecha: Date = new Date(), formato ?: any) => {
    formato ? console.log(fecha.toLocaleDateString('en-US', formato)) : console.log(fecha.toDateString());
}

mostrarFecha();
mostrarFecha(new Date('2020-01-01'));
mostrarFecha(new Date(), formatoDeFecha);

/*****************************************************************/

const funcionGenerica = <T>(valor1: T, valor2: T) => {
    if (typeof valor1 === 'string' || typeof valor2 === 'string') {
        return `${valor1} ${valor2}`;
    } else if (typeof valor1 === 'number' && typeof valor2 === 'number') {
        return valor1 + valor2;
    } else if (typeof valor1 === 'boolean' && typeof valor2 === 'boolean') {
        return valor1 && valor2;
    }
}

console.log(funcionGenerica<string>("Hola", "Mundo"));
console.log(funcionGenerica<number>(3, 5));
console.log(funcionGenerica<boolean>(true, false));
