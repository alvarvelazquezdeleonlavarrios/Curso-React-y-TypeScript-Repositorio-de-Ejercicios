import {test, expect} from "@playwright/test"
import {url} from "./utils/url"


test("Deberia testear la caracteristica de favoritos", async({page}) => {
    // Abre la página principal de nuestra aplicación web
    await page.goto(url);

    // Va a esperar a que exista un elemento con el atributo data-testid="pokemon-card"
    await page.waitForSelector('[data-testid="pokemon-card"]');

    // Le dará clic al primer botón que encuentre con el atributo data-testid="favorite-button"
    await page.click('[data-testid="favorite-button"]')

    // Cargará la página de favoritos luego de haber dado el clic
    await page.goto(`${url}favoritos`);

    // En la página de favoriotos, va a esperar que exista algún elemento con el atributo data-testid="pokemon-card"
    const element = await page.waitForSelector('[data-testid="pokemon-card"]');
    expect(element).toBeTruthy;

    // Para verificar que el local storage funciona correctamente, se va a recargar la página
    await page.reload();

    // Verificar que el elemento exista aún después de recargarse
    const elementAfterReload = await page.waitForSelector('[data-testid="pokemon-card"]');
    expect(elementAfterReload).toBeTruthy;
});
