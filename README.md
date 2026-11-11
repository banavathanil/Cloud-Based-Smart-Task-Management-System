
# ☁️ Cloud-Based Smart Task Management System

A web-based task management application designed to help users organize, manage, track, and update their daily tasks using Firebase cloud services.

## 🌐 Live Demo

**Live Website:** https://cloud-smart-task-management.web.app

## 📌 Project Overview

The Cloud-Based Smart Task Management System is designed to simplify task organization and improve productivity. Users can manage their tasks through an interactive web interface, with data stored in the cloud using Firebase Firestore.

The application provides a centralized platform for managing tasks anytime and from anywhere with an internet connection.

## ✨ Key Features

- User Registration and Login
- Secure Firebase Authentication
- Create, View, Update and Delete Tasks
- Cloud-based Task Storage
- Task Priority Management
- Task Categories and Deadlines
- Task Status Tracking
- Search and Filter Tasks
- Responsive User Interface

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Web page structure |
| CSS3 | Styling and responsive design |
| JavaScript | Application functionality |
| Firebase Authentication | User authentication |
| Cloud Firestore | Cloud database |
| Firebase Hosting | Website deployment |

## 🏗️ Project Structure

```text
Cloud-Based-Smart-Task-Management-System/
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   └── firebase.js
├── firestore.rules
├── firebase.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/banavathanil/Cloud-Based-Smart-Task-Management-System.git
```

### 2. Open the Project

```bash
cd Cloud-Based-Smart-Task-Management-System
```

### 3. Configure Firebase

- Create a Firebase project.
- Register a Web App.
- Enable Email/Password Authentication.
- Create a Cloud Firestore database.
- Add your Firebase configuration to `js/firebase.js`.
- Publish the appropriate Firestore security rules.

### 4. Run the Application

Open `index.html` using a local development server, such as the VS Code Live Server extension.

## ☁️ Deployment

This project is deployed using Firebase Hosting.

**Live URL:** https://cloud-smart-task-management.web.app

To deploy your application again:

```bash
firebase deploy --only hosting
```

## 🔐 Security

- Firebase Authentication manages user sign-in.
- Firestore Security Rules control database access.
- Firebase configuration is stored in the client-side application.
- Database access should be restricted through appropriate security rules.

## 👨‍💻 Developer

**Banavath Anil**

B.Tech – Computer Science and Engineering (Cyber Security)

GitHub: https://github.com/banavathanil

## 📄 License

This project is developed for academic and educational purposes.

