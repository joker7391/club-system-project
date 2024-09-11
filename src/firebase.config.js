import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBx-jJql6hbeNomG2eR6SNoF-Gv4VQTbVQ",
  authDomain: "sample-ba27f.firebaseapp.com",
  projectId: "sample-ba27f",
  storageBucket: "sample-ba27f.appspot.com",
  messagingSenderId: "622523488093",
  appId: "1:622523488093:web:69c304b5c4136171aafab4",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { firestore, auth, storage };
