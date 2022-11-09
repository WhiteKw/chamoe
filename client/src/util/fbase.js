import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDnRyg0X14V8hNRsz6MKhuyAsCVn85bT-E",
    authDomain: "chamoe-cd57c.firebaseapp.com",
    projectId: "chamoe-cd57c",
    storageBucket: "chamoe-cd57c.appspot.com",
    messagingSenderId: "1084473459586",
    appId: "1:1084473459586:web:82676da23d22273116c59b",
    measurementId: "G-F8H0V2HZSQ"
};

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();