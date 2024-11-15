# Porsche (MERN Stack)
# E-commerce Website - Software Engineering Project
# Images For the Website
![6](https://github.com/user-attachments/assets/812e9d8f-89a6-40bc-a399-507bab1d87c7)
![5](https://github.com/user-attachments/assets/b4a6f55f-ef96-49d0-86f9-c4e0419f7200)
![4](https://github.com/user-attachments/assets/f21f9654-f173-4454-8c12-0e5ff3b1ba44)
![3](https://github.com/user-attachments/assets/81c1acaa-72a8-4c7c-a9fd-1fe0426590b6)
![2](https://github.com/user-attachments/assets/6bed845d-a0b3-4f24-ab91-a3aec1b0a09f)
![1](https://github.com/user-attachments/assets/44cd56b9-a6e4-4311-b7fa-1e4b2a42e51c)


## Overview
This repository contains an e-commerce website built as part of a software engineering project. The project uses the MERN stack (MongoDB, Express.js, React.js, Node.js) to implement a fully functional web application with both backend and frontend capabilities.

### Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Testing**: Postman for API testing and database operations

## Project Description

The project involved developing both backend and frontend components to create a complete e-commerce website.

1. **Database Design**:
   - Created an Entity-Relationship Diagram (ERD) to model the data requirements for the e-commerce platform.
   - Designed entities such as Customers, Products, and Admins with their relationships.

2. **Database Implementation**:
   - Implemented MongoDB collections for entities like Customers, Products, and Admins.
   - Used MongoDB code to create and manage these collections for data storage and retrieval.

3. **Backend API Development**:
   - Developed public API endpoints for customers to browse and search the product catalog.
   - Created private API endpoints for customer authentication, order management, and admin product management (e.g., adding, editing, and deleting products).
   - Implemented JWT-based authentication to secure private endpoints.

4. **Frontend Development**:
   - Initialized a React project with the necessary dependencies and configurations to ensure a smooth development experience.
   - Designed a responsive and user-friendly interface to enhance the customer experience.
   - Integrated components for product browsing, user authentication, and account management.

5. **API Integration**:
   - Connected the frontend components with the backend APIs using HTTP requests.
   - Implemented mechanisms for data fetching and updating to ensure dynamic interaction between the client and server.

6. **User Authentication and Authorization**:
   - Created registration and login forms for users.
   - Integrated the forms with the backend to enable secure authentication and account management.

7. **Responsive Design**:
   - Used CSS and media queries to ensure the application is responsive across various devices and platforms.

## Project Structure
- **Backend (Node.js & Express.js)**: Contains the implementation of API endpoints, database connectivity, and authentication logic.
- **Frontend (React.js)**: Contains the user interface, including components for browsing products, managing user accounts, and interacting with the backend.
- **Database (MongoDB)**: Stores data related to users, products, and admin operations.
- **Testing (Postman)**: Postman was used to test API endpoints and verify database operations for both successful and failed scenarios.

## Features
- **User Registration and Login**: Users can register and log in securely. JWT is used for authentication.
- **Product Browsing**: Customers can browse products using various filters.
- **Admin Product Management**: Admins can add, edit, or delete products.
- **Responsive Design**: The frontend is designed to work seamlessly across different devices.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/username/repository-name.git
   ```
2. Navigate to the project directory and install dependencies for both frontend and backend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```
3. Start the backend server:
   ```bash
   cd backend
   npm start
   ```
4. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

## Usage
- To test the APIs, use tools like Postman. The backend server should be running for the frontend to interact with the APIs.
- Access the website through your browser once both servers are up.

## Contributors
- Adham Hisham and team members.

## License
This project is licensed under the MIT License.



