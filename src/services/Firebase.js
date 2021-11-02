// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_dg1NwkOXntzjuKruQy_6EN3AI7HgsQs",
  authDomain: "whatsapp-web-mern-a649d.firebaseapp.com",
  projectId: "whatsapp-web-mern-a649d",
  storageBucket: "whatsapp-web-mern-a649d.appspot.com",
  messagingSenderId: "72183951689",
  appId: "1:72183951689:web:0485cfccc4c19005fdaa98",
  measurementId: "G-ZC3DN9SBW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);