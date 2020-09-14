import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCx8Mo8WRa7GOsonRyqa4t4jTYg-AsiNs8",
  authDomain: "clone-d9cbf.firebaseapp.com",
  databaseURL: "https://clone-d9cbf.firebaseio.com",
  projectId: "clone-d9cbf",
  storageBucket: "clone-d9cbf.appspot.com",
  messagingSenderId: "184447847740",
  appId: "1:184447847740:web:c40cd5968fb1d75b312239",
  measurementId: "G-V8KL3WMF5X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
