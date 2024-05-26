import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxZguaFdZZRu-Y67ymufUxlBYOZEul8ow",
  authDomain: "club-system-e8579.firebaseapp.com",
  projectId: "club-system-e8579",
  storageBucket: "club-system-e8579.appspot.com",
  messagingSenderId: "607230019909",
  appId: "1:607230019909:web:052aaf7dedaf3ef6ee962c",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };
