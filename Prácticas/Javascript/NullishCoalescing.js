let nombreDefecto = "Invitado";
let nombre1 = null;

let nombreUsuario1 = nombre1 ?? nombreDefecto;
console.log(nombreUsuario1);    // "Invitado"

let nombre2 = "Alvar";

let nombreUsuario2 = nombre2 ?? nombreDefecto;
console.log(nombreUsuario2);    // "Alvar"

// Versión equivalente (antes de la versión 20 de Javascript)
let nombreUsuario3 = nombre1 !== null ? nombre1 : nombreDefecto;
console.log(nombreUsuario3);    // "Invitado"
