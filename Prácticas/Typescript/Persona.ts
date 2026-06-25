export class Persona {
    // Atributos
    nombre: string;
    edad: number;

    // Constructor
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Métodos
    saludar() : void {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Crear instancia de la clase Persona
const persona1 = new Persona("Alvar", 26);

// Acceder a los atributos y llamar a los métodos
console.log(persona1.nombre);
console.log(persona1.edad);
persona1.saludar();
