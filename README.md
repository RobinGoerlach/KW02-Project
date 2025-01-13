# Personal Library API

A RESTful API built with Express and MongoDB for managing a personal library. This API allows users to create and maintain reading lists, track book statuses, and perform CRUD operations on both users and books. Mongoose is used to handle all database interactions.

## Features

- **User Management**: Create, retrieve, update, and delete users.
- **Book Management**: Add, update, and delete books with relevant details like ISBN, author, and status.
- **Reading Lists**: Assign books to users, track their reading progress, and manage user-specific book lists.
- **Nested Routes**: Simplified management of user-specific book operations.
- **Comprehensive Documentation**: Provided as a Postman Collection for easy testing and integration.

## Endpoints

### Users
- `GET /users` - Retrieve a list of users, including their books.
- `POST /users` - Create a new user.
- `GET /users/{id}` - Retrieve a specific user by ID.
- `PUT /users/{id}` - Update a specific user by ID.
- `DELETE /users/{id}` - Delete a specific user by ID.

### User Books
- `POST /users/{id}/books` - Add a book to a user's list.
- `PUT /users/{id}/books/{bookId}` - Update a book in a user's list.
- `DELETE /users/{id}/books/{bookId}` - Remove a book from a user's list.

### Books
- `GET /books` - Retrieve a list of books, optionally filtered by category.
- `POST /books` - Create a new book.
- `GET /books/{id}` - Retrieve a specific book by ID.
- `PUT /books/{id}` - Update a specific book by ID.
- `DELETE /books/{id}` - Delete a specific book by ID.

## Technologies Used

- **Backend Framework**: Express.js
- **Database**: MongoDB
- **ORM**: Mongoose
- **Documentation**: Postman

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:RobinGoerlach/KW02-Project.git
