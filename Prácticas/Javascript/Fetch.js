console.log("Solicitud tipo GET");

// Solicitud de tipo GET
fetch('https://jsonplaceholder.typicode.com/todos/1')	// Realiza una petición HTTP a un endpoint (URL)
	.then(response => response.json())		// Interpreta la respuesta de la API en formato JSON. Retorna otra promesa.
	.then(data => console.log(data))		// Imprime los datos de la respuesta luego de recuperarlos en el then anterior
	.catch(error => console.log(error));	// En caso de que se genere algún error en la petición o converión de datos, lo atrapa aquí



console.log("Solicitud tipo POST");

const datosAEnviar = {
	title: 'foo',
	body: 'bar',
	userId: 1
}

// Solicitud de tipo POST
fetch('https://jsonplaceholder.typicode.com/posts',{
	method: 'POST',
	body: JSON.stringify(datosAEnviar),
	headers: {
		'Content-type': 'application/json'
	}
})
.then(response => response.json())		// Interpreta la respuesta de la API en formato JSON. Retorna otra promesa.
.then(data => console.log(data))		// Imprime los datos de la respuesta luego de recuperarlos en el then anterior
.catch(error => console.log(error));	// En caso de que se genere algún error en la petición o converión de datos, lo atrapa aquí
