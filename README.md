# Smart Pocket v1 (Frontend)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=for-the-badge&logo=react&logoColor=white)

Smart Pocket es una aplicación web para venta de productos nuevos y saldos mediante tarjetas de presentación de productos y consultas vía whatsapp al propietario. Este repositorio contiene el código fuente del frontend, desarrollado con React.

## Características

- Gestión administrativa: Permite al propietario gestionar (registrar, modificar, eliminar y consultar) los productos en su inventario.

- Visualización: Ofrece tarjetas y tablas de productos con información sencilla y clara.

- Interfaz Intuitiva: Diseño responsivo y fácil de usar.

## Tecnologías Utilizadas

- **React:** Biblioteca principal para la construcción de la interfaz de usuario.

- **Tailwind CSS:** Framework de CSS para estilos.

- **Axios:** Cliente HTTP para la comunicación con el backend.

- **React Router:** Manejo de rutas dentro de la aplicación.

- **React Hook Form:** Manejo de formularios.

- **Swiper:** Carrusel de tarjetas de productos destacados.

- **React Icons:** Iconografía de la app

## Requisitos Previos

- **Node.js:** Se recomienda tener instalada la versión 20.

- **npm:** Generalmente incluido con Node.js.

## Instalación

1. Clonar el repositorio:

```
git clone https://github.com/Mauricio2085/smart-pocket-v1.git
cd smart-pocket-v1
```

2. Instalar dependencias:

`npm install`

3. Configuración de variables de entorno:

Crea un archivo .env asegurándose que esté en la raíz del proyecto y añade las siguientes variables:

`REACT_APP_API_URL=http://localhost:5000/api`

Ajusta REACT_APP_API_URL según la URL de tu backend.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- npm start: Inicia la aplicación en modo desarrollo. Accede a http://localhost:3000 para verla en el navegador.

- npm run build: Construye la aplicación para producción en la carpeta build. Los archivos quedarán listos para ser desplegados.

## Secciones de la Aplicación

### 1. Inicio de Sesión (Privado)

- Permite al propietario iniciar sesión con sus credenciales previamente almacenadas en la base de datos (postgresql).

- Utiliza autenticación segura con JWT.

### 2. Panel de administración (Privado)

- Muestra un resumen de los productos y permite ver detalles de cada producto, modificarlos o eliminarlos.

- Incluye botones para cerrar sesión y crear producto.

### 3. Gestión de productos (Privado)

- **Crear Producto:** Permite agregar nuevos productos con sus respectivas características.

- **Editar Producto:** Modifica la información de un producto existente.

- **Eliminar Producto:** Permite eliminar un producto del inventario.

- **Detalles:** Muestra la información completa del producto seleccionado.

### 4. Visualización de Productos (Público)

- Permite seleccionar categorías de productos y realizar búsquedas.

- Sección de productos destacados.

### 5. Vista del Producto (Público)

- Muestra los detalles del producto.

- Envío de detalles de producto al propietario vía Whatsapp para consultas personalizadas y negociación final.

## Datos y API

Este frontend interactúa con una API REST desarrollada en Express.js. Para más información sobre la estructura de la base de datos y los endpoints disponibles, consulta el README del backend en [Smart Pocket Backend](https://github.com/Mauricio2085/Smart_Pocket_Backend.git).

## Despliegue

La aplicación puede ser desplegada en servicios como Vercel, Netlify o cualquier servidor que sirva archivos estáticos. Asegurarse de configurar correctamente las variables de entorno producción.

Ejemplo variable de entorno:

`REACT_APP_API_URL=http://mi-backend.com/api`

## Estado del Proyecto

**En desarrollo:**

- Aún se están implementando nuevas funcionalidades y mejoras.

- Las mejoras planeadas incluyen optimización de la UI, refactorización de código y nuevas funcionalidades.

## Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Puedes realizar un fork del proyecto:

```sh
# Realizar un fork manualmente en GitHub y luego clonar el repositorio forkeado
git clone https://github.com/TU_USUARIO/smart-pocket-v1.git
cd smart-pocket-v1
```

2. Crea una nueva rama:

```sh
git checkout -b feature/nueva-funcionalidad
```

3. Realiza los cambios y haz commit:

```sh
git commit -m 'Añadir nueva funcionalidad'
```

4. Sube los cambios:

```sh
git push origin feature/nueva-funcionalidad
```

5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
