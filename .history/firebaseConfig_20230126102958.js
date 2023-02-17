// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
import { auth } from "firebase/auth";
import { firestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYtWLoroOY2rHQBSwy8ptAqpuiQWpVbnI",
  authDomain: "donut-shop-7684b.firebaseapp.com",
  projectId: "donut-shop-7684b",
  storageBucket: "donut-shop-7684b.appspot.com",
  messagingSenderId: "156426379729",
  appId: "1:156426379729:web:57f016fe9ecc61504140f0"
};

initializeApp(firebaseConfig)

// const firestore = getFirestore()



const userDocument = firestore().collection("users")
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth, firestore };