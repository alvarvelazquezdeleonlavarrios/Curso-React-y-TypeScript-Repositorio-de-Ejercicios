import {Persona} from './Persona.ts';

class Estudiante extends Persona {
    // Atributo adicional
    curso: string;

    // Constructor
    constructor(nombre: string, edad: number, curso: string){
        // Llama al constructor de la clase padre
        super(nombre, edad);
        this.curso = curso;
    }

    // Método adicional
    estudiar(): void {
        console.log(`${this.nombre} está estudiando ${this.curso}.`);
    }
}

// Crear instancia de la clase Estudiante
const estudiante1 = new Estudiante("Alvar", 26, "Programación");

// Acceder a los atributos y llamar a los métodos
console.log(estudiante1.nombre);
console.log(estudiante1.edad);
console.log(estudiante1.curso);
estudiante1.saludar();
estudiante1.estudiar();
