# JWT-Authentication-MERN

Welcome to our JWT Authentication System built with the MERN (MongoDB, Express, React, Node.js) stack! This project provides a secure and scalable authentication solution using JSON Web Tokens (JWT) to manage user sessions.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Introduction
In this repository, you'll find a fully functional JWT-based authentication system that includes both the frontend and backend components. JWT (JSON Web Tokens) is a widely-used standard for securely transmitting information between parties, making it an excellent choice for handling user authentication in web applications.

The frontend of the application is built using React, providing an intuitive and responsive user interface for user registration, login, and access to protected routes. The backend is powered by Node.js and Express, ensuring robust and efficient handling of authentication requests, user management, and JWT generation/validation.

## Features
- User registration with secure password hashing
- User login and access to protected routes using JWT
- Automatic token refresh for seamless user experience
- Error handling and validation for input forms
- Scalable and well-organized codebase
- Customizable and extensible for future improvements

## Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
Before setting up the project, ensure you have the following installed:

- Node.js (at least version 14)
- npm (Node Package Manager)

### Installation
1. Clone the repository to your local machine using the following command:
      ```bash
   git clone https://github.com/your-username/your-repo.git
      
2. Navigate to the project directory:
     ```bash
    cd your-repo
     
3. Install the required dependencies for both the frontend and backend:
     ```bash
     // Install frontend dependencies
     
    cd frontend
    npm install
    // Install backend dependencies
     
    cd ../backend
    npm install

## Usage
To run the application, run the following command in separate terminal windows:

    ```bash
    # Run the frontend (from the root directory)
    cd frontend
    npm start
  
    # Run the backend (from the root directory)
    cd backend
    npm start
    
This project is setup using Vite, hence we don't require any environment variables for this setup, we will keep all the safe data in the backend. Backend uses `dotenv` package as dependancty , hence we will require a `.env` file in the server file, which will contain all the required private data.
The frontend will be accessible at a default localhost which will directly be adjusted by vite, and the backend API will be running at on the specified Port using environment variables.
The `.env`  file will have the following data:
    ```bash
    
        PORT=<Port on which backend will be hosted>
        MONGO_URI=<MongoDb URI with correct username and password>
        SECRET=<Hash vaue for jwt hashing, for example `SECRET`>
        CLIENT_URL=<URL of the frontend>
## Technologies Used
- MongoDB: Database for storing user information
- Express: Web application framework for Node.js
- React: Frontend JavaScript library for building user interfaces
- Node.js: JavaScript runtime for server-side development
- JWT: JSON Web Tokens for secure user authentication
- Other dependencies are listed in the respective package.json files for frontend and backend.

## Contributing
We welcome contributions to improve this JWT Authentication System. If you encounter any issues or have suggestions for enhancements, feel free to submit a pull request or open an issue. Let's make this project even better together!

Thank you for checking out our JWT Authentication System! If you find this project helpful or have any questions, please don't hesitate to get in touch.

Happy coding! 🚀
















