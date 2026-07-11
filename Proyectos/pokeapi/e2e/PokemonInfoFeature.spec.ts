import {test, expect} from "@playwright/test"
import {url} from "./utils/url"

test("Deberia testear la caracteristica de informacion del pokemon", async ({page}) => {
    // Abre la página principal de nuestra aplicación web
    await page.goto(url);

    // Espera a que cargue la página y que exista un elemento con la propiedad data-testid="pokemon-card"
    await page.waitForSelector('[data-testid="pokemon-card"]');

    // Buscará la primera pokemon card (Bulbasaur) y le dará clic para ver su información
    const primerElemento = await page.$('[data-testid="pokemon-card"]');
    await primerElemento?.click();

    // Luego de dar clic, esperará a que se visualice el elemento con la propiedad data-testid="pokemon-info" y sus sprites
    await page.waitForSelector('[data-testid="pokemon-info"]');
    await page.waitForSelector('[data-testid="pokemon-sprites"]');

    // Obtiene el elemento de tipo pokemon-info y recupera la imagen principal del pokemon (Bulbasaur)
    const pokemonInfo = await page.$('[data-testid="pokemon-info"]');
    const pokemonImage = await pokemonInfo?.$("img");
    const pokemonImageSrc = await pokemonImage?.getAttribute("src");
    const pokemonImageAlt = await pokemonImage?.getAttribute("alt");
    expect(pokemonImageSrc).not.toBeNull();
    expect(pokemonImageAlt).toEqual("bulbasaur");

    // Obtiene el nombre del pokemon del primer (y único) h1 que tiene el componente
    const pokemonName = await pokemonInfo?.$("h1");
    const pokemonNameText = await pokemonName?.textContent();
    expect(pokemonNameText).toEqual("Bulbasaur");

    // Recupera el primer ícono de los hijos directos de type-icon
    const typeIcon = await page.$('[data-testid="type-icon"] > img');
    const typeIconAlt = await typeIcon?.getAttribute("alt");
    expect(typeIconAlt).toEqual("grass icon");

    // Recupera los sprites del pokemon. Se espera que sean 4
    const sprites = await page.$('[data-testid="pokemon-sprites"]');
    const spritesImage = await sprites?.$$("img");
    expect(spritesImage).toHaveLength(4);
});
