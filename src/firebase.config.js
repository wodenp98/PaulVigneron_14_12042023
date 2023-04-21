import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDeUb07lyawJ1MnJojdEok8EyoQQpT7EfA",
  authDomain: "hrnet-database-6cc82.firebaseapp.com",
  databaseURL:
    "https://hrnet-database-6cc82-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hrnet-database-6cc82",
  storageBucket: "hrnet-database-6cc82.appspot.com",
  messagingSenderId: "978859686431",
  appId: "1:978859686431:web:a90d649654a2988cb5732a",
  databasePersistence: "none",
};

const app = initializeApp(firebaseConfig);

// Obtenez une référence à la base de données Firebase
const db = getDatabase(app);

export { db };
