# Social Network API

## Description
This project is a backend API for a social network application. It allows users to manage their profiles, interact with others through thoughts and reactions, and maintain a friend list. The API is built with Node.js, Express, and MongoDB using Mongoose for object data modeling.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [User Routes](#user-routes)
  - [Thought Routes](#thought-routes)
  - [Reaction Routes](#reaction-routes)
  - [Friend Routes](#friend-routes)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd social-network-api
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server by running the following command in the terminal:
   ```bash
   npm start
   ```

2. Use [Insomnia](https://insomnia.rest/) or a similar tool to test the API endpoints.

3. The server will sync the Mongoose models to the MongoDB database and listen for API requests.

## API Endpoints

### User Routes

- **GET /api/users**: Get all users.
- **GET /api/users/:id**: Get a single user by ID.
- **POST /api/users**: Create a new user.
  - Example body:
    ```json
    {
      "username": "johndoe",
      "email": "john.doe@example.com"
    }
    ```
- **PUT /api/users/:id**: Update a user by ID.
- **DELETE /api/users/:id**: Delete a user by ID.

### Thought Routes

- **GET /api/thoughts**: Get all thoughts.
- **GET /api/thoughts/:id**: Get a single thought by ID.
- **POST /api/thoughts**: Create a new thought.
  - Example body:
    ```json
    {
      "thoughtText": "This is a new thought!",
      "username": "johndoe",
      "userId": "12345"
    }
    ```
- **PUT /api/thoughts/:id**: Update a thought by ID.
- **DELETE /api/thoughts/:id**: Delete a thought by ID.

### Reaction Routes

- **POST /api/thoughts/:thoughtId/reactions**: Add a reaction to a thought.
  - Example body:
    ```json
    {
      "reactionBody": "Great thought!",
      "username": "janedoe"
    }
    ```
- **DELETE /api/thoughts/:thoughtId/reactions/:reactionId**: Delete a reaction by ID.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- Insomnia (for API testing)

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

Feel free to contribute by submitting issues or pull requests! For any questions, contact [your email/contact information].
