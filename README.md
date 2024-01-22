# java-todo-app

<img src="https://github.com/Luzefiru/java-todo-app/assets/105530193/de7192b0-2461-4aea-b977-8cd54abdbb16" style="width: 100%" />

<h4 align="center">A simple Todo App system with CRUD functionalities.</h4>
<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/daisyUI-1ad1a5?style=for-the-badge&logo=daisyui&logoColor=white" />
  <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot" />
  <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" />
</div>

## Usage

First, we install the `npm` packages of the frontend:


```bash
git clone git@github.com:Luzefiru/java-todo-app.git
cd java-todo-app
cd client && npm i && cd ..
```

### Frontend Client

On one terminal, you need to run the browser application using the following commands:

> Ensure you have the [npm](https://nodejs.org/en/download) command available.

```bash
cd client
npm run dev
```

It will be accessible via `http://localhost:5173`.

### Database

This requires [XAMPP](https://www.apachefriends.org/download.html) to be running with a `todoapp` database.

1. In XAMPP, start Apache.
2. In XAMPP, start MySQL at port 3306 (default).
3. Create a `todoapp` database.
4. Click it & press the "Import" button at the navbar.
5. In the "File to import:" section, use the `server/todoapplication/TodoApplication/src/main/java/SQL File/task.sql` file.
6. Click "Import".

#### Alternative: Docker

> NOTE: Only use this if you don't want to do the XAMPP setup above!

First, you need to download & setup [Docker Desktop](https://docs.docker.com/desktop/install/windows-install/).

```bash
cd server
docker compose up
```

### Backend Server

In an IDE, run the `server/todoapplication/TodoApplication/src/main/java/TodoApplication.java` program's `main` class.

> Ensure you are running the newest version of the [Java Runtime](https://www.java.com/en/download/manual.jsp).

> NOTE: We've only tested it in VSCode & IntelliJ.

It will be accessible via `http://localhost:3000/api/todos`.

## Project Structure

```yaml
java-todo-app/
│
├── client/        # frontend code
│   └── README.md  # client installation documentation
│
├── server/        # backend code
│   └── README.md  # server API documentation
│
└── README.md      # project documentation
```

### Project Architecture

The React frontend hosted at `http://localhost:5173` uses HTTP calls to a Java Spring Boot backend at `http://localhost:3000/api/todos`. The backend is a REST API which responds in `Content-Type: application/json` which the frontend consumes.

## Contributing

Watch [How To Pull Request in 3 Minutes on YouTube](https://www.youtube.com/watch?v=jRLGobWwA3Y) to contribute and make a pull request.

## License

[MIT](https://choosealicense.com/licenses/mit/)
