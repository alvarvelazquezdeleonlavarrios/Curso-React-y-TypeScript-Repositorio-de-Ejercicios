function operacionAsincrona() {
	// Para operaciones asíncronas en JS y TS, se utiliza un objeto de tipo "Promise", el cual puede tener 3 estados: resolved, rejected, pending
	// Recibe como parámetros 2 funciones: resolve y reject
	
	// resolve: indica que la ejecución fue exitosa
	// reject: indica que la ejecución fue errónea
	return new Promise((resolve, reject) => {

		// Hace que la función entre a la cola de eventos de JavaScript en lugar de la pila
		// de llamadas. Esto permite que mientras se ejecutan las funciones de la pila de llamadas,
		// al mismo tiempo se ejecuten las funciones de la cola de eventos.
		setTimeout(
			() => {
				const exito = true;

				if (exito) {
					resolve("Todo bien");
				} else {
					reject("Todo mal");
				}
			}
			, 1000 // 1000 milisegundos son los que esperará hasta dar una respuesta
		);
	});
}


console.log('Inicio');

operacionAsincrona()	// Recupera la Promise
	.then((resultado) => console.log(resultado))	// Imprime el valor retornado por la función resolve
	.catch((error) => console.log(error))			// Imprime el valor retornado por la función reject
	.finally(() => console.log('Finalizado\n'));		// Siempre se ejecuta sin importar el resultado de la Promise

console.log('Fin');


/*****************************************************************/
// async --> Indica que una función ejecutará una operación asíncrona
// await --> Se utiliza dentro de una función async, y lo que hace es esperar a que una función asíncrona (Promise) termine de ejecutarse para continuar con el resto del código

async function ejecutarFuncionAsincrona() {
	try {
		console.log('Iniciando asíncrono');
		let resultado = await operacionAsincrona();
		console.log(resultado);		// Imprime el valor retornado por la función resolve
	} catch (error) {
		console.log(error);			// Imprime el valor retornado por la función reject
	} finally {
		console.log("Finalizando asíncrono\n");
	}
}

console.log('\n3');
ejecutarFuncionAsincrona();
console.log('4\n');
