// 1. Create a Firebase project at https://console.firebase.google.com/
// 2. Register a Web App and copy its configuration below.
// 3. Enable Email/Password under Authentication > Sign-in method.
// 4. Create a Cloud Firestore database.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyDp53K6Nvken5IEQP0CAEoYkkhMRLsyC4Y",

    authDomain: "cloud-smart-task-management.firebaseapp.com",

    projectId: "cloud-smart-task-management",

    storageBucket: "cloud-smart-task-management.firebasestorage.app",

    messagingSenderId: "237842273696",

    appId: "1:237842273696:web:c7fba50cd260270c5c00c5"

  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
