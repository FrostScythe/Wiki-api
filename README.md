
**GitHub Documentation for Express Wiki API**

This GitHub documentation provides an overview and instructions for using the Express Wiki API, which allows you to manage articles in a local MongoDB database. The API provides endpoints to retrieve, create, update, and delete articles.

### Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Endpoints](#endpoints)
   - [Get All Articles](#get-all-articles)
   - [Create New Article](#create-new-article)
   - [Get Specific Article](#get-specific-article)
   - [Update Specific Article](#update-specific-article)
   - [Partial Update Specific Article](#partial-update-specific-article)
   - [Delete Specific Article](#delete-specific-article)
   - [Delete All Articles](#delete-all-articles)
4. [Usage](#usage)
5. [Technologies Used](#technologies-used)
6. [Contributing](#contributing)
7. [License](#license)

### Introduction

The Express Wiki API is a simple Node.js application built using the Express framework and MongoDB. It allows users to perform CRUD operations on articles, such as reading, creating, updating, and deleting articles.

### Installation

1. Clone the repository to your local machine.
   ```bash
   git clone <repository-url>
   cd express-wiki-api
   ```

2. Install the required dependencies using npm.
   ```bash
   npm install
   ```

3. Ensure that you have MongoDB installed and running locally on the default port (27017). If not, you can install MongoDB from the official website (https://www.mongodb.com/try/download/community).

### Endpoints

#### Get All Articles

- **URL:** /articles
- **Method:** GET
- **Description:** Retrieves all articles from the database.
- **Response:** An array of article objects.

#### Create New Article

- **URL:** /articles
- **Method:** POST
- **Description:** Creates a new article and adds it to the database.
- **Request Body:** JSON object with `title` and `content` properties.
- **Response:** Success message if the article is added successfully.

#### Get Specific Article

- **URL:** /articles/:articleTitle
- **Method:** GET
- **Description:** Retrieves a specific article based on the provided `articleTitle`.
- **Response:** The article object if found, or an error message if not found.

#### Update Specific Article

- **URL:** /articles/:articleTitle
- **Method:** PUT
- **Description:** Updates a specific article based on the provided `articleTitle`.
- **Request Body:** JSON object with `title` and `content` properties.
- **Response:** Success message if the article is updated successfully.

#### Partial Update Specific Article

- **URL:** /articles/:articleTitle
- **Method:** PATCH
- **Description:** Partially updates a specific article based on the provided `articleTitle`.
- **Request Body:** JSON object containing the properties to be updated.
- **Response:** Success message if the article is updated successfully.

#### Delete Specific Article

- **URL:** /articles/:articleTitle
- **Method:** DELETE
- **Description:** Deletes a specific article based on the provided `articleTitle`.
- **Response:** Success message if the article is deleted successfully.

#### Delete All Articles

- **URL:** /articles
- **Method:** DELETE
- **Description:** Deletes all articles from the database.
- **Response:** Success message if all articles are deleted successfully.

### Usage

1. Start the server by running the following command:
   ```bash
   node app.js
   ```
   The server will start on port 3000, and you'll see the message "Server started on port 3000" in the console.

2. Use a tool like Postman or cURL to interact with the API endpoints described above.

### Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (Embedded JavaScript) for rendering views

### Contributing

Contributions to the project are welcome. If you find any issues or want to add new features, please open a pull request. Before contributing, make sure to read the [Contributing Guidelines](CONTRIBUTING.md).

### License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license.
