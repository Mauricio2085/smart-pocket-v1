## Smart Pocket v1 (Frontend)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=for-the-badge&logo=react&logoColor=white)

Smart Pocket is a web application for selling new products and stock clearance through product presentation cards and WhatsApp inquiries with the owner. This repository contains the frontend source code, developed with React.

## Features

- Administrative Management: Allows the owner to manage (register, modify, delete, and consult) products in their inventory.

- Visualization: Displays product cards and tables with clear and simple information.

- Intuitive Interface: Responsive and easy-to-use design.

## Technologies Used

- **React:** Main library for building the user interface.

- **Tailwind CSS:** CSS framework for styling.

- **Axios:** HTTP client for backend communication.

- **React Router:** Routing management within the application.

- **React Hook Form:** Form management.

- **Swiper:** Carousel for featured product cards.

- **React Icons:** Iconography for the app.

## Prerequisites

- **Node.js:** It is recommended to install version 20.

- **npm:** Usually included with Node.js.

## Installation

1. Clone the repository:

```
git clone https://github.com/Mauricio2085/smart-pocket-v1.git
cd smart-pocket-v1
```

2. Install dependencies:

`npm install`

3. Configure environment variables:

Create a .env file at the root of the project and add the following variables:

`REACT_APP_API_URL=http://localhost:5000/api`

Adjust REACT_APP_API_URL according to your backend URL.

## Available Scripts

In the project directory, you can run:

- npm start: Starts the application in development mode. Access it at http://localhost:3000 in your browser.

- npm run build: Builds the application for production in the build folder. The files will be ready for deployment.

## Application Sections

### 1. Login (Private)

- Allows the owner to log in with credentials previously stored in the PostgreSQL database.

- Uses secure authentication with JWT.

### 2. Admin Panel (Private)

- Displays a summary of products and allows viewing details, modifying, or deleting them.

- Includes buttons for logging out and creating new products.

### 3. Product Management (Private)

- **Create Product:** Allows adding new products with their respective characteristics.

- **Edit Product:** Modifies the information of an existing product.

- **Delete Product:** Removes a product from the inventory.

- **Details:** Displays complete information about the selected product.

### 4. Product Viewing (Public)

- Allows selecting product categories and performing searches.

- Section for featured products.

### 5. Product View (Public)

- Displays product details.

- Sends product details to the owner via WhatsApp for personalized inquiries and final negotiation.

## Data & API

This frontend connects to a REST API built with Express.js and PostgreSQL.

🔹**Full Documentation:** Check the backend README for details on the database structure, available endpoints, and how to use the demo API.

🔹**Try the API on Railway:** Follow the backend instructions to test the deployed API.

🔹**Backend Repository:** [Smart Pocket Backend](https://github.com/Mauricio2085/Smart_Pocket_Backend.git).

## Deployment

The application can be deployed on services such as Vercel, Netlify, or any server that serves static files. Ensure that production environment variables are correctly configured.

Example environment variable:

`REACT_APP_API_URL=http://mi-backend.com/api`

## Project Status

In Development:

- New features and improvements are still being implemented.

- Planned improvements include UI optimization, code refactoring, and new functionalities.

## Contributions

Contributions are welcome. To contribute:

1. Fork the project:

```sh
# Realizar un fork manualmente en GitHub y luego clonar el repositorio forkeado
git clone https://github.com/YOUR_USER/smart-pocket-v1.git
cd smart-pocket-v1
```

2. Create a new branch:

```sh
git checkout -b feature/new-feature
```

3. Make your changes and commit:

```sh
git commit -m 'Add new feature'
```

4. Push your changes:

```sh
git push origin feature/new-feature
```

5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
