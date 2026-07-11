# Manual

## Instalar NodeJS

1. Entrar al [enlace oficial](https://nodejs.org/es/download)
2. Descargar el Windows Installer (.msi) o el MacOS Installer (.pkg) y seguir las instrucciones
3. Comprobar en el CMD o Terminal con el comando `node` y `npm --version`

### Ejecutar códigos Javascript en NodeJS

1. Escribir el comando `node NombreArchivo.js`


## Instalar Typescript

1. Escribir en el CMD o Terminal el comando `npm install ts-node --global`
2. En caso de que de error, intentarlo en una consola con permisos de administrador (en MacOS sería `sudo -i` e ingresar la contraseña del usuario administrador)

### Ejecutar códigos Typescript en NodeJS

1. Escribir el comando `node NombreArchivo.ts`


## Crear un proyecto React con Vite.js

1. Escribir en el CMD o Terminal el comando `npm create vite@latest nombre-proyecto -- --template react-ts`
2. En caso de que pida instalar paquetes y dependencias que hagan falta, escribir que sí con `y`

### Ejecutar proyectos de React Vite.js

1. Posicionarse dentro de la carpeta del proyecto con el comando `cd`
2. Ejecutar el comando `npm run dev`
3. Copiar y pegar la URL del campo **Local** en un navegador web
4. Para detener la ejecución del localhost, presionar las teclas Ctrl + C


## Crear un proyecto React manualmente

1. Definir todas las dependencias a instalar en el archivo package-json
2. Ejecutar el comando `npm i`

### Ejecutar proyectos de React configurados manualmente

1. Posicionarse dentro de la carpeta del proyecto con el comando `cd`
2. Ejecutar el comando `npm start`
3. Copiar y pegar la URL del campo **Local** en un navegador web
4. Para detener la ejecución del localhost, presionar las teclas Ctrl + C

### Ejecutar pruebas unitarias en proyectos de React configurados manualmente

1. Asegurarse que estén instaladas las dependencias necesarias para ejecutar Jest
2. Configurar el archivo `setupTests.ts` en la carpeta src
3. Asegurarse que los archivos de los tests unitarios se encuentren en sus carpetas `__tests__` correspondientes
4. Ejecutar el comando `npm run test`

### Instalar Tailwind 3 (y otras bibliotecas) en un proyecto de React

1. Posicionarse dentro de la carpeta del proyecto con el comando `cd`
2. Ejecutar el comando `npm install -D tailwindcss@3 postcss autoprefixer`

#### Inicializar Tailwind en un proyecto de React

1. Ejecutar el comando `npx tailwindcss init -p`

**Nota**: lo que hace este comando es crear los archivos de configuración de Tailwind requeridos para el proyecto.

2. Luego, en el archivo **tailwind.config.js** que se generó, modificar la propiedad de content:

```
content: [
    "./src/**/*.html",
    "./src/**/*.{ts,tsx}"
  ],
```

Esto lo que hace es decirle a Tailwind que solamente aplique los estilos sobre los siguientes tipos de archivos y directorios para ahorrar recursos.

3. En el archivo **index.css** eliminar todo el contenido y colocar las siguientes líneas, las cuales permiten ocupar los estilos de Tailwind en el proyecto:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Instalar Zustand en un proyecto de React

1. Posicionarse dentro de la carpeta del proyecto con el comando `cd`
2. Ejecutar el comando `npm install zustand --save`

**Nota**: Esta biblioteca permitirá utilizar variables de contexto globales sin necesidad de irlas pasando en una jerarquía de componentes padre, hijo y nietos.

### Instalar la dependencia React Router en un proyecto de React
1. Ejecutar el comando `npm i react-router-dom --save`

Esta dependencia sirve para manejar las rutas en una aplicación de React
