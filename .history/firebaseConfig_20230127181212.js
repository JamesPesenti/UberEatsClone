// import { initializeApp } from 'firebase/app';
// import { getFirestore } from "firebase/firestore"
// import { auth } from "firebase/auth";
// import { firestore } from "firebase/firestore";

// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyDYtWLoroOY2rHQBSwy8ptAqpuiQWpVbnI",
//   authDomain: "donut-shop-7684b.firebaseapp.com",
//   projectId: "donut-shop-7684b",
//   storageBucket: "donut-shop-7684b.appspot.com",
//   messagingSenderId: "156426379729",
//   appId: "1:156426379729:web:57f016fe9ecc61504140f0"
// };

// // if (firebase.apps.length === 0) {
// //   app = firebase.initializeApp(firebaseConfig);
// // } else {
// //   app = firebase.app()
// // }


// const app = initializeApp(firebaseConfig);

// export const db = getFirestpre(app)



import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDYtWLoroOY2rHQBSwy8ptAqpuiQWpVbnI",
  authDomain: "donut-shop-7684b.firebaseapp.com",
  projectId: "donut-shop-7684b",
  storageBucket: "donut-shop-7684b.appspot.com",
  messagingSenderId: "156426379729",
  appId: "1:156426379729:web:57f016fe9ecc61504140f0"
};

// const app = firebase.initializeApp(firebaseConfig);
// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}
export {auth}

// export const db = firebase.firestore(app);





