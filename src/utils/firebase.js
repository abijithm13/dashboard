
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_sS7zFy6FvvpJEBHAsK1fz0de_ABZFmQ",
  authDomain: "dashboard-bf51c.firebaseapp.com",
  projectId: "dashboard-bf51c",
  storageBucket: "dashboard-bf51c.appspot.com",
  messagingSenderId: "265183405620",
  appId: "1:265183405620:web:a68dadddbb2257cc23cc61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// export const database = getFirestore(app);
