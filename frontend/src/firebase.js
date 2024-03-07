import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogging-app-491996.firebaseapp.com",
  projectId: "blogging-app-491996",
  storageBucket: "blogging-app-491996.appspot.com",
  messagingSenderId: "203389675641",
  appId: "1:203389675641:web:322231d293b81fd2328ca8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);