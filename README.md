# E-Commerce Product API

A simple backend API for managing products in an e-commerce application. This project was built using Node.js, Express.js, MongoDB, JWT Authentication, Multer, and Mongoose.

---

## Project Overview

The goal of this project was to build a secure Product Management API with authentication, authorization, product CRUD operations, category filtering, and multiple image uploads.

Users can:

* Register an account
* Login securely
* Access protected routes using JWT authentication
* Create products
* View products
* Update products
* Delete products
* Filter products by category
* Upload multiple product images

---

## Backend Flow

### 1. User Registration

A new user registers using:

```http
POST /api/auth/register
```

During registration:

* User data is validated
* Existing email is checked
* Password is hashed using bcrypt
* User is stored in MongoDB
* JWT token is generated
* Token is stored inside cookies

---

### 2. User Login

User logs in using:

```http
POST /api/auth/login
```

During login:

* Email is verified
* Password is compared using bcrypt
* JWT token is generated
* Token is stored in cookies

---

### 3. Authentication Middleware

Protected routes use a custom JWT middleware.

Middleware process:

```text
Request
   ↓
Read JWT Token From Cookie
   ↓
Verify Token
   ↓
Find User From Database
   ↓
Attach User To req.user
   ↓
Allow Request
```

Routes protected by middleware:

```http
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

---

### 4. Product Management

Authenticated users can:

#### Create Product

```http
POST /api/products
```

#### Get All Products

```http
GET /api/products
```

#### Get Product By ID

```http
GET /api/products/:id
```

#### Update Product

```http
PUT /api/products/:id
```

#### Delete Product

```http
DELETE /api/products/:id
```

---

## Category Filtering

Products can be filtered by category using query parameters.

Example:

```http
GET /api/products?category=male
```

Example:

```http
GET /api/products?category=electronics
```

---

## Multiple Image Upload

This project uses Multer for handling file uploads.

Implementation:

```javascript
upload.array("images", 5)
```

Features:

* Upload multiple images
* Store files inside uploads folder
* Save image names inside MongoDB
* Images are stored in an array

Example:

```json
{
  "images": [
    "174855121shirt.jpg",
    "174855122shoe.jpg",
    "174855123watch.jpg"
  ]
}
```

---

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* cookie-parser
* multer

---

## Database Models

### User Model

```javascript
{
  name: String,
  email: String,
  password: String,
  mobile: String
}
```

### Product Model

```javascript
{
  name: String,
  description: String,
  price: Number,
  category: String,
  images: [String]
}
```

---

## API Endpoints

### Authentication

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |

### Products

| Method | Endpoint          |
| ------ | ----------------- |
| POST   | /api/products     |
| GET    | /api/products     |
| GET    | /api/products/:id |
| PUT    | /api/products/:id |
| DELETE | /api/products/:id |

### Filtering

| Method | Endpoint                           |
| ------ | ---------------------------------- |
| GET    | /api/products?category=electronics |

---

## Error Handling

The API handles:

* Missing fields
* Duplicate email registration
* Invalid credentials
* Unauthorized access
* Invalid token
* Product not found
* Internal server errors

---

## Development Progress

Project was implemented in the following order:

1. Express Server Setup
2. MongoDB Connection
3. Product Model Creation
4. Product CRUD APIs
5. Category Filtering
6. User Model Creation
7. Registration API
8. Login API
9. JWT Authentication
10. Auth Middleware
11. Protected Routes
12. Multiple Image Upload using Multer

---

## Author

Sunny Kapur

Built as part of an E-Commerce Backend Assignment using Node.js, Express.js, MongoDB, JWT Authentication, and Multer.
