import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRwGg6Pe3_qbSn3OfKKIeBRfgEoAWEfUQ",
  authDomain: "twitter-clone-24084.firebaseapp.com",
  projectId: "twitter-clone-24084",
  storageBucket: "twitter-clone-24084.appspot.com",
  messagingSenderId: "21712281431",
  appId: "1:21712281431:web:def7e5fed38a3080796812",
  measurementId: "G-EWC05F65DL",
};
const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
export const postsRef = collection(firestore, "posts");
