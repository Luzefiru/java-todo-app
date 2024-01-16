# API Documentation

## Introduction

There is no authentication or authorization required for accessing this API.

**Base URL:** `https://localhost:3000/api`

## Table of Contents

1. [Get All Todos](#1-get-all-todos)
2. [Get Todo by ID](#2-get-todo-by-id)
3. [Create a Todo](#3-create-a-todo)
4. [Update Todo](#4-update-todo)
5. [Delete Todo](#5-delete-todo)

## 1. Get All Todos

### Endpoint

- **GET** `/todos`

### Description

Get a list of all todos.

### Response

```json
[
  {
    "id": 1,
    "title": "Complete project",
    "completed": false
  },
  {
    "id": 2,
    "title": "Read a book",
    "completed": true
  }
]
```
 
## 2. Get Todo by ID

### Endpoint

- **GET** `/todos/{id}`

### Parameters

- `{id}`: The ID of the todo.

### Description

Get a specific todo by its ID.

### Response

```json
{
  "id": 1,
  "title": "Complete project",
  "completed": false
}
```


## 3. Create a Todo

### Endpoint

- **POST** `/todos`

### Request Body

```json
{ "title": "New task" }
```


### Description

Create a new todo.

### Response

```json
{ 
  "id": 3,
  "title": "New task",
  "completed": false
}
```
## 4. Update Todo

### Endpoint

- **PUT** `/todos/{id}`

### Parameters

- `{id}`: The ID of the todo.

### Request Body

```json
{ 
  "title": "Updated task",
  "completed": true
}
```

### Description

Update a todo by its ID.

### Response

```json
{
  "id": 3, "title": "Updated task",
  "completed": true
}
```

## 5. Delete Todo

### Endpoint

- **DELETE** `/todos/{id}`

### Parameters

- `{id}`: The ID of the todo.

### Description

Delete a todo by its ID.

### Response

```json
{ 
  "message": "Todo with ID 3 has been deleted successfully."
}
```
