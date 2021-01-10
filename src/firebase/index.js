import firebase from 'firebase/app';
import 'firebase/firestore'


const app = firebase.initializeApp({
  apiKey: "AIzaSyD9EqhInKariVcxg0ku9aspU4dpuCS2Fp4",
  authDomain: "my-coder-shop.firebaseapp.com",
  projectId: "my-coder-shop",
  storageBucket: "my-coder-shop.appspot.com",
  messagingSenderId: "790483080662",
  appId: "1:790483080662:web:8f6e2d48510dcf8bcbc077"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app)
}