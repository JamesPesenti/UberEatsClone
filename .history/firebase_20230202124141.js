import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDYtWLoroOY2rHQBSwy8ptAqpuiQWpVbnI",
  authDomain: "donut-shop-7684b.firebaseapp.com",
  projectId: "donut-shop-7684b",
  storageBucket: "donut-shop-7684b.appspot.com",
  messagingSenderId: "156426379729",
  appId: "1:156426379729:web:57f016fe9ecc61504140f0"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { app, auth, db, storage };