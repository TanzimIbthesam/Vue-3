import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBujBSuCjBMRaaaJ0dzVbN1cw10u8SZ12k",
  authDomain: "fir-auth-1d78f.firebaseapp.com",
  databaseURL: "https://fir-auth-1d78f-default-rtdb.firebaseio.com",
  projectId: "fir-auth-1d78f",
  storageBucket: "fir-auth-1d78f.appspot.com",
  messagingSenderId: "1062644428991",
  appId: "1:1062644428991:web:9d0dcec41b4458c742160a",
  measurementId: "G-THSEJHPLME"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth=firebase.auth();
  const db=firebase.firestore();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export{auth,db,timestamp}