interface Carro {
    marca: string;
    modelo: string;
    precio?: number;    // Atributo opcional
    readonly fechaCreacion: number; // Atributo de solo lectura

    encender(mensaje: string): void;    // Declaración de método
}

function esCarro(objeto: any): objeto is Carro {
    return objeto && typeof objeto === 'object' && 'marca' in objeto && 'modelo' in objeto;
}

function imprimirInfoCarro(vehiculo: Carro | string) {
    if (esCarro(vehiculo)){
        console.log(`Marca: ${vehiculo.marca}, Modelo: ${vehiculo.modelo}`);
    } else {
        console.log("Carro no válido. Es un string");
    }
}

// Se define un objeto a partir de la interfaz (se deben declarar todos sus elementos obligatorios)
const carro1: Carro = {
    marca: "Nissan",
    modelo: "Alpha 1",
    fechaCreacion: 14022025,

    encender(mensaje: string): void {
        console.log(`${mensaje}`);
    }
};

imprimirInfoCarro(carro1);
imprimirInfoCarro("Hola");

/*****************************************************************/

class Animal {
    caminar(): void {
        console.log("Animal está caminando");
    }
}

class Perro extends Animal {
    ladrar(): void {
        console.log("Perro está ladrando");
    }
}

class Gato extends Animal {
    maullar(): void {
        console.log("Gato está maullando");
    }
}

function accionAnimal(animal: Animal): void {
    if (animal instanceof Perro) {
        animal.ladrar();
    } else if (animal instanceof Gato) {
        animal.maullar();
    } else {
        animal.caminar();
    }
}

const perro = new Perro();
const gato = new Gato();
const animal = new Animal();

accionAnimal(perro);
accionAnimal(gato);
accionAnimal(animal);

/*****************************************************************/

function procesarDato(dato: number | string | boolean) {
    if (typeof dato === "number") {
        console.log(`Es un número: ${dato}`);
    } else if (typeof dato === "string") {
        console.log(`Es un texto: ${dato}`);
    } else if (typeof dato === "boolean") {
        console.log(`Es un booleano: ${dato}`);
    } else {
        console.log("Error");
    }
}

procesarDato("Hola");
procesarDato(123);
procesarDato(false);
procesarDato({nombre: "Yolo", edad: 2010});
