import { initializeApp } from 'firebase/app'
import { getAuth,setPersistence,browserSessionPersistence } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyD6zvBsZtzA5YSl0NqpteaYc5HGYL-MpVU",
  
    authDomain: "vuefirebasepinia.firebaseapp.com",
  
    projectId: "vuefirebasepinia",
  
    storageBucket: "vuefirebasepinia.appspot.com",
  
    messagingSenderId: "688390100964",
  
    appId: "1:688390100964:web:e38401a3896134b59759f1"
  
  };
  
  
  // Initialize Firebase
  
// init firebase
// initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)

export { auth ,db}



  

  