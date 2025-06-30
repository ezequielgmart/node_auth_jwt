# User Authentication and JWT Example
This project is a practical example demonstrating how to implement **user authentication** and **JSON Web Tokens (JWT)** in a web application with **protected views**. It provides a clear, concise foundation for understanding secure user management in Node.js applications using EJS for templating.

## STACK

* HTML / CSS / JavaScript
* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)

## Features
With this project, you can:

* **Register New Users:** Create new user accounts, with passwords securely stored using **hashing and salting**.
* **Login Users:** Authenticate users by verifying their credentials against the database.
* **Manage User Sessions with Cookies:** Store and retrieve user authentication status efficiently using **HTTP-only cookies** for security.
* **Implement Protected Routes:** Restrict access to certain parts of your application, ensuring only authenticated users can view sensitive content.
* **Utilize JSON Web Tokens (JWT):** Understand how JWTs are generated, signed, and verified to secure API endpoints and maintain session state.
* **Refactor with Middleware:** Learn to use Express.js middleware to centralize authentication logic, keeping your routes clean and organized.
* **Logout Users:** Provide functionality for users to securely end their sessions by clearing authentication cookies.

## Getting Started
This project is designed to be straightforward, allowing you to quickly set up and explore the core concepts of authentication and JWTs in a full-stack context.

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd node_auth_jwt # or whatever your project folder is named
    ```
    *(Replace `<your-repository-url>` with the actual URL of your GitHub repository)*

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    *(This assumes you have a `package.json` file with your dependencies listed.)*

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    *(This assumes you have a `dev` script defined in your `package.json` like `"dev": "nodemon index.js"` or similar.)*

4.  **Access the application:**
    Open your browser and navigate to:
    ```
    http://localhost:PORT-ON-CONFIG.JS
    ```
    *(Replace `PORT-ON-CONFIG.JS` with the actual port number defined in your `config.js` file, e.g., `http://localhost:3000`)*

---