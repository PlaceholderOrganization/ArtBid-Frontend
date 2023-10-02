import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from firebase/auth;


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvpS5Bh1G2cRZiAG7K0Oc2coV6tizDCpE",
    authDomain: "artbiddk.firebaseapp.com",
    projectId: "artbiddk",
    storageBucket: "artbiddk.appspot.com",
    messagingSenderId: "427121838916",
    appId: "1:427121838916:web:ac5440780c5a689073e511",
    measurementId: "G-HSW42EP6DK"
  };
const auth = getAuth(firebaseApp);

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

onAuthStateChanged(auth, (user) => {
    if (user !== null) {
    console.log('loggend in!')
    } else {
        console.log('not logged in')
    }
});