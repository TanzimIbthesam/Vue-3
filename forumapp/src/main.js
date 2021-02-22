import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './assets/style.css'

 var firebaseConfig = {
    apiKey: "AIzaSyBujBSuCjBMRaaaJ0dzVbN1cw10u8SZ12k",
    authDomain: "fir-auth-1d78f.firebaseapp.com",
    databaseURL: "https://fir-auth-1d78f-default-rtdb.firebaseio.com",
    projectId: "fir-auth-1d78f",
    storageBucket: "fir-auth-1d78f.appspot.com",
    messagingSenderId: "1062644428991",
    appId: "1:1062644428991:web:b9341d234bb1764f42160a",
    measurementId: "G-9BXZE91X0L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
