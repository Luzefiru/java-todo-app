# Frontend

## Usage

First, we have to install the application & run the Vite frontend development environment.

- choose `dev` if you want to test with the Java backend running.
- choose `dev:mock` if you don't have the Java backend setup.

```bash
npm install
npm run dev          # runs the frontend with the Java backend
npm run dev:mock     # runs the frontend with the mock database
```

Launch another terminal and run the `json-server` mock database for frontend development purposes.

```bash
npm run server:mock  # runs the mock db
```
