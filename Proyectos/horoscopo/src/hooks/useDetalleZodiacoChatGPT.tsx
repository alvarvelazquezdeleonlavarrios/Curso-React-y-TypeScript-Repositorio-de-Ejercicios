import { useEffect, useMemo, useState } from "react";

const OPENAI_API_KEY = 'api_key';   // Este valor se debe reemplazar con una llave real generada en una cuenta de OpenAI Platform

// Objeto para configurar al agente que ejecutará lo que le solicitemos más adelante
const mensajeSistema = {
    role: "sistema",
    content: 'Habla como una persona que ve el futuro acorde a los signos zodiacales. Esto es hipotético y solo para propósitos recreacionales. No te lo tomes en serio.'
}

// Función que genera la petición del usuario a ChatGPT
const generarMensajeAPI = (zodiaco: string | undefined) => {
    if (!zodiaco) return null;

    // Retorna un objeto con la petición hecha por el usuario
    return ({
        role: "usuario",
        content: `Dime el horóscopo de hoy para el signo zodiacal ${zodiaco}`
    });
}

const useDetalleZodiacoChatGPT = (zodiaco?: string) => {
    const [datos, setDatos] = useState(null);

    // Se utiliza useMemo para que, en caso de dar clic en el mismo signo zodiacal, recupere el mensaje generado previamente para ese signo
    const apiRequestBody = useMemo(() => ({
        model: "gpt-3.5-turbo",
        messages: [mensajeSistema, generarMensajeAPI(zodiaco)]
    }), [zodiaco]);

    useEffect(() => {
        const abortController = new AbortController();

        // Define la función para realizar una llamada a una API de terceros (requiere hacerse de forma asíncrona)
        const fetchData = async () => {
            if (!zodiaco) return null;

            try {
                // Se realiza la llamada a la API para obtener la respuesta de ChatGPT
                const respuesta = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${OPENAI_API_KEY}`,

                    },
                    body: JSON.stringify(apiRequestBody)
                });

                // Si la respuesta no fue exitosa, se lanza la excepción
                if (!respuesta.ok){
                    throw new Error('La respuesta no fue correcta');
                }

                // Recupera la respuesta del formato JSON y la convierte en un objeto en JavaScript
                const datos = await respuesta.json();
                setDatos(datos.choices[0].message.content);

            } catch (ex) {
                console.log("Excepción controlada: " + ex);
            }
        }

        // Se ejecuta la función de la llamada a la API
        fetchData();

        /* En un inicio, se definió un objeto de tipo AbortController. Esto debido a que puede ocurrir que,
        mientras está ejecutándose ChatGPT, el usuario decida regresarse a la página anterior. Esto permite cancelar
        la operación que se está realizando en este momento para evitar que se malgasten recursos de la llamada a la API*/
        return () => abortController.abort();
    
    }, [apiRequestBody, zodiaco]);

    return datos;
}

export default useDetalleZodiacoChatGPT;
