# Cloud-Based Smart Task Management System

A responsive cloud-based task management web application prepared from the submitted Cloud Computing PBL report.

## Technology stack
- HTML5, CSS3 and JavaScript (ES modules)
- Firebase Authentication (Email/Password)
- Cloud Firestore
- Firebase Hosting

## Features
- User registration, sign-in and sign-out
- User profile and department information
- Dashboard statistics: total, pending, in-progress, completed and overdue tasks
- Create, view, update and delete tasks
- Priority, category, due date and task status
- Assign tasks using a registered user's email address
- Search and filter tasks
- Assigned-to-me and completed task views
- Responsive desktop and mobile layout
- Firestore security rules

## Project structure
```text
cloud-based-smart-task-management-system/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   └── firebase.js
├── firestore.rules
├── firebase.json
├── .firebaserc.example
└── README.md
```

## Setup

### 1. Create a Firebase project
1. Open https://console.firebase.google.com/
2. Create a project.
3. Add a Web App from Project Overview.
4. Copy the Firebase web configuration.

### 2. Enable Authentication
1. Open **Build → Authentication**.
2. Select **Get started**.
3. Open **Sign-in method**.
4. Enable **Email/Password** and save.

### 3. Create Firestore
1. Open **Build → Firestore Database**.
2. Create a database.
3. Choose a region suitable for your users.
4. Open the Rules tab and publish the contents of `firestore.rules`.

### 4. Configure the app
Open `js/firebase.js` and replace each `YOUR_...` placeholder with the values from Firebase Project settings → General → Your apps.

Do not commit private service-account keys or administrator credentials. The Firebase web config is intended for client-side use; protect data with correctly configured Firestore Security Rules.

### 5. Run locally
Because the app uses JavaScript modules, serve it through a local web server rather than opening `index.html` directly.

For example, with Python installed:
```bash
python -m http.server 5500
```
Then open http://localhost:5500

You can also use the VS Code Live Server extension.

### 6. Deploy with Firebase Hosting
Install Node.js, then install the Firebase CLI:
```bash
npm install -g firebase-tools
firebase login
```
From this project folder:
```bash
firebase use --add
```
Select your Firebase project. Then deploy:
```bash
firebase deploy --only hosting,firestore:rules
```
The Hosting URL will be shown after deployment.

## Firestore data model

### `users/{uid}`
- `uid`
- `fullName`
- `email`
- `department`
- `createdAt`

### `tasks/{taskId}`
- `title`, `description`
- `priority`: Low / Medium / High
- `category`
- `dueDate`
- `status`: To Do / In Progress / Completed
- `assignedToEmail`
- `createdBy`, `createdByEmail`
- `createdAt`, `updatedAt`

## Notes and limitations
- This is a runnable starter implementation based on the report's stated architecture and features. Firebase setup and deployment are required before cloud features work.
- Task assignment uses the assignee's email address. The assignee must have an account using that email.
- The project currently provides in-app task lists and overdue identification. Scheduled email/push reminders, calendar integration, AI prioritization and mobile apps are future enhancements listed in the report, not implemented features.
- Test security rules with Firebase Emulator Suite before production use. Review access requirements carefully if you change the data model.
- If you change Firestore rules, publish them in the Firebase console or deploy them using the Firebase CLI.
