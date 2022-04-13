import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAs10bLZvZux6q_KFn3sBfWUpEsQS3brVU",
    authDomain: "disneyplus-clone-21f77.firebaseapp.com",
    projectId: "disneyplus-clone-21f77",
    storageBucket: "disneyplus-clone-21f77.appspot.com",
    messagingSenderId: "888938249463",
    appId: "1:888938249463:web:35205c03f9c7b7f295e7f2",
    measurementId: "G-E79C30JX8N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage;

export { auth, provider, storage };

export default db;
