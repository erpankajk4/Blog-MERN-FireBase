import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-mern-1a84d.firebaseapp.com",
  projectId: "blog-mern-1a84d",
  storageBucket: "blog-mern-1a84d.appspot.com",
  messagingSenderId: "618169829428",
  appId: "1:618169829428:web:d4a9d38375eca97c972261",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
