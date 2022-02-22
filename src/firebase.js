import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1c9AAMkl9Gip1OwjBbn5pPk7iH8lCFV8",
  authDomain: "e-commerce-shopgear-phone.firebaseapp.com",
  projectId: "e-commerce-shopgear-phone",
  storageBucket: "e-commerce-shopgear-phone.appspot.com",
  messagingSenderId: "996323533370",
  appId: "1:996323533370:web:fbf8397f6fec62e6964b03",
  measurementId: "G-KY56DSDHB3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;