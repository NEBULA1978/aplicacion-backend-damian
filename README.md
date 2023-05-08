# aplicacion-backend-damian

Backend
En la carpeta "aplicacion-backend-damian" se encuentra el código del backend de la aplicación, el cual está escrito en Node.js utilizando el framework Express.

Archivo index.js
Este archivo es el punto de entrada del servidor y define los endpoints de la API REST. Utiliza el módulo "cors" para permitir el acceso desde cualquier origen y el middleware "express.json" para parsear las solicitudes entrantes en formato JSON. A continuación se describe cada endpoint:

GET /transactions: devuelve un arreglo con todas las transacciones guardadas en el servidor.
POST /transactions: recibe una transacción en formato JSON y la guarda en un arreglo en memoria.
Archivos package.json y package-lock.json
Estos archivos son utilizados por Node.js para manejar las dependencias del proyecto y su configuración.

Frontend
En la carpeta "web" se encuentra el código del frontend de la aplicación, el cual está escrito en HTML, CSS y JavaScript.

Archivo index.html
Este archivo es la página principal del sitio web y contiene un formulario para agregar nuevas transacciones.

Archivo script.js
Este archivo define la lógica del frontend y se encarga de manejar la interacción del usuario con el formulario. Escucha el evento "submit" del formulario y envía la transacción al servidor utilizando el método fetch de JavaScript. También utiliza fetch para obtener las transacciones del servidor y mostrarlas por consola.

En resumen
Este proyecto es una aplicación web sencilla que permite agregar y listar transacciones utilizando una API REST en el backend y un formulario en el frontend. El backend está escrito en Node.js utilizando Express y el frontend en HTML, CSS y JavaScript.

Para iniciar entrar en carpeta api y ejecutar node index.js
Iniciar index.html para enviar datosal array

