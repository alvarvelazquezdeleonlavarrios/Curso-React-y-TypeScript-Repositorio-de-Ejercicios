import {test, expect} from "@playwright/test"
import {url} from "./utils/url"

test("Deberia testear la caracteristica de filtro por tipo", async ({page}) => {
    // Abre la página principal de nuestra aplicación web
    await page.goto(url);

    // Espera a que existan los iconos de tipos de pokemón
    await page.waitForSelector('[data-testid="type-icon"]');

    // Obtiene el primer elemento con la propiedad data-testid="type-icon". A continuación le hace clic
    const firstCardTypeIcon = await page.$('[data-testid="type-icon"]');
    await firstCardTypeIcon?.click();

    // Espera a que exista un elemento con el atributo data-testid="pokemon-card"
    await page.waitForSelector('[data-testid="pokemon-card"]');

    // Recupera todos los elementos que tengan la propiedad data-testid="pokemon-card". Consulta los 3 primeros
    const pokemmonCard = await page.$$('[data-testid="pokemon-card"]');
    const primeraPokemonCard = pokemmonCard[0];
    const segundaPokemonCard = pokemmonCard[1];
    const terceraPokemonCard = pokemmonCard[2];

    // Del elemento type-icon recupera su imagen, que sería el elemento hijo img que tiene
    const primeraPokemonCardIcono = await primeraPokemonCard.$('[data-testid="type-icon"] > img');
    const segundaPokemonCardIcono = await segundaPokemonCard.$('[data-testid="type-icon"] > img');
    const terceraPokemonCardIcono = await terceraPokemonCard.$('[data-testid="type-icon"] > img');

    // Recupera la propiedad alt del icono
    const primeraPokemonCardIconoAlt = await primeraPokemonCardIcono?.getAttribute('alt');
    const segundaPokemonCardIconoAlt = await segundaPokemonCardIcono?.getAttribute('alt');
    const terceraPokemonCardIconoAlt = await terceraPokemonCardIcono?.getAttribute('alt');

    // Como en la primera página de la pokeapi, el primer pokemon que aparece es de tipo pasto, se determina que filtrará primero todos los de tipo pasto
    expect(primeraPokemonCardIconoAlt).toBe('grass icon');
    expect(segundaPokemonCardIconoAlt).toBe('grass icon');
    expect(terceraPokemonCardIconoAlt).toBe('grass icon');
});
