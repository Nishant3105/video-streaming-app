import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC8IAPITvFGdBFc23NBXRN-2KYMuly6d8I",
  authDomain: "video-streaming-35ebf.firebaseapp.com",
  projectId: "video-streaming-35ebf",
  storageBucket: "video-streaming-35ebf.appspot.com",
  messagingSenderId: "710366516576",
  appId: "1:710366516576:web:62d243acfc3ca4f2377a05"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;