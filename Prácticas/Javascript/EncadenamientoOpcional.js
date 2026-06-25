let persona = {
    nombre: "Alvar",
    direccion: {
        ciudad: "CDMX",
        codigoPostal: 19672,
        pais: null,
    }
};

let codigoPostal = persona?.direccion?.codigoPostal;
let pais = persona?.direccion?.pais;
let cabeza = persona?.accesorios?.cabeza;

console.log(codigoPostal);      // 19672
console.log(pais);              // null
console.log(cabeza);            // undefined
