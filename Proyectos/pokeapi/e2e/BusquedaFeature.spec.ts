import {test, expect} from "@playwright/test"
import {url} from "./utils/url"

test("Deberia testear la caracteristica de busqueda de pokemones", async ({page}) => {
    // Abre la página principal de nuestra aplicación web
    await page.goto(url);

    // Va a buscar el botón que abre la ventana de búsqueda para darle clic.
    const searchButton = await page.waitForSelector("[data-testid='search-button']");
    await searchButton.click();

    // Para ver que cargue la ventana de búsqueda, va a esperar a que se visualice el input de búsqueda
    await page.waitForSelector("[data-testid='search-input']");
    const searchInput = await page.$("[data-testid='search-input']");
    
    // Una vez se haya comprobado la existencia del input, se llenará con un texto a buscar
    await searchInput?.fill("bulbasaur");

    // Buscará que también exista el botón de envío del formulario de búsqueda. Se le dará clic
    const searchSubmitButton = await page.$("[data-testid='search-submit-button']");
    await searchSubmitButton?.click();

    // Esperará a que se muestre una pokemon card resultado de la búsqueda en la ventana de búsqueda. Se le dará clic
    const pokemonCard = await page.waitForSelector(".ReactModalPortal [data-testid='pokemon-card']");
    await pokemonCard?.click();

    // Al darle clic a la carta redirigirá a la información del pokemon. Se validará que estén su info y sprites
    await page.waitForSelector("[data-testid='pokemon-info']");
    await page.waitForSelector("[data-testid='pokemon-sprites']");

    // Se validará que la imagen del pokemon sea la correcta
    const pokemonInfo = await page.$("[data-testid='pokemon-info']");
    const pokemonImage = await pokemonInfo?.$("img");
    const pokemonImageAlt = await pokemonImage?.getAttribute("alt");
    expect(pokemonImageAlt).toEqual("bulbasaur");
});
