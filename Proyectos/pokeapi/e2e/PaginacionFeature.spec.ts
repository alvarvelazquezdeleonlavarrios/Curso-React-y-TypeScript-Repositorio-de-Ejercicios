import {test, expect} from "@playwright/test"
import {url} from "./utils/url"

test("Deberia testear la caracteristica de paginacion", async ({page}) => {
    // Abre la página principal de nuestra aplicación web
    await page.goto(url);

    // Espera a que cargue la página y que exista un elemento con la propiedad data-testid="pokemon-card"
    await page.waitForSelector('[data-testid="pokemon-card"]');

    // Busca el botón que tenga el texto "Siguiente" (no es lo ideal hacer esto, pero se puede). A continuación se le da clic
    const botonSiguiente = await page.waitForSelector('button:has-text("Siguiente")');
    await botonSiguiente.click();

    // Esperará a que las primeras cartas que se tenían en pantalla ya no sean visibles
    await page.waitForSelector('[data-testid="pokemon-card"]', {state: 'hidden'});

    // El primer pokemon en aparecer en la pokeapi es Bulbasaur. Se va a verificar que ya no aparezca
    const elementoSiguiente = await page.$('text="Bulbasaur"');
    expect(elementoSiguiente).toBeNull();

    // Busca el botón que tenga el texto "Anterior" (no es lo ideal hacer esto, pero se puede). A continuación se le da clic 
    const botonAnterior = await page.waitForSelector('button:has-text("Anterior")');
    await botonAnterior.click();

    // Buscará que vuelva a aparecer Bulbasaur al darle en el botón Anterior
    const elementoOriginal = await page.waitForSelector('text="Bulbasaur"');
    expect(elementoOriginal).not.toBeNull();
});
