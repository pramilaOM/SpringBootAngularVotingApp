
# 🗳️ SpringBootAngularVotingApp

A full-stack voting application built with:

- 🎯 **Frontend**: Angular (`poll-app`)
- ☕ **Backend**: Spring Boot (`votingapp`)
- 🛢️ **Database**: MySQL (or in-memory H2 for dev)

---

## 📦 Project Structure

```
SpringBootAngularVotingApp/
├── poll-app/        # Angular frontend application
├── votingapp/       # Spring Boot backend (REST API)
└── README.md
```

---

## ✨ Features

- Create polls with multiple options
- View all polls and options
- Vote on poll options
- Automatically updates vote counts
- Responsive, clean UI with emoji indicators

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/pramilaOM/SpringBootAngularVotingApp.git
cd SpringBootAngularVotingApp
```

---

## 🔧 Backend - Spring Boot (`votingapp/`)

### ✅ Requirements

- Java 17+
- Maven
- MySQL (or configure H2 in `application.properties`)

### ▶️ Run Spring Boot App

```bash
cd votingapp
./mvnw spring-boot:run
```

Server will run at: `http://localhost:8080`

---

## 🌐 Frontend - Angular (`poll-app/`)

### ✅ Requirements

- Node.js ≥ 16
- Angular CLI (`npm install -g @angular/cli`)

### ▶️ Run Angular App

```bash
cd poll-app
npm install
ng serve
```

App available at: `http://localhost:4200`

---

## 🔗 REST API Reference

| Endpoint            | Method | Description                            | Request Body     | Response         |
|---------------------|--------|----------------------------------------|------------------|------------------|
| `/api/polls`        | POST   | Create a poll                          | JSON Poll object | 201 Created      |
| `/api/polls`        | GET    | Get all polls                          | —                | 200 OK (List)    |
| `/api/polls/{id}`   | GET    | Get a specific poll by ID              | —                | 200 OK / 404     |
| `/api/polls/vote`   | POST   | Submit a vote for an option            | Poll ID + option | 204 No Content   |

---

## 🛠️ Tech Stack

- Angular 16+
- Spring Boot 3.x
- MySQL / H2
- Maven

---

## 📸 Screenshot

> _Add a screenshot here of your running app_

```bash
# Example:
![UI Preview](./poll-app/src/assets/screenshot.png)
```

---

## 🔮 Future Enhancements

- User login & authentication (JWT)
- Poll expiration timers
- Real-time updates via WebSockets
- Pagination & sorting

---

## 🧑‍💻 Author

**Pramila OM**  
🔗 [GitHub Profile](https://github.com/pramilaOM)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).



<img width="1919" height="845" alt="image" src="https://github.com/user-attachments/assets/e872640c-9489-4f5d-8031-16e5dd6b298a" />


angular : ng serve
backend : run VotingappApplication.java
