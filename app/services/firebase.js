import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAjFZcm-v_caYobmaGBtEwaCvx5CuYEQgs",
  authDomain: "cfc-blog-61c20.firebaseapp.com",
  projectId: "cfc-blog-61c20",
  storageBucket: "cfc-blog-61c20.appspot.com",
  messagingSenderId: "806543835984",
  appId: "1:806543835984:web:d7ba7579f7f9662949a255",
  measurementId: "G-HJEWBGRBV1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

