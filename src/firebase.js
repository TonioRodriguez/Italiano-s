import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyAXsVyLt5LdmZtat3g7eQY9tmV6tY2UOwo",
    authDomain: "italianos-5f326.firebaseapp.com",
    projectId: "italianos-5f326",
    storageBucket: "italianos-5f326.appspot.com",
    messagingSenderId: "775881935199",
    appId: "1:775881935199:web:7b5a9a3e0fb61ec9a78eea"
  };

  
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);

  export { db }