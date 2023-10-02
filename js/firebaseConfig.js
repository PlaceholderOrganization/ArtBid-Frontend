import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvpS5Bh1G2cRZiAG7K0Oc2coV6tizDCpE",
  authDomain: "artbiddk.firebaseapp.com",
  databaseURL: "https://artbiddk-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "artbiddk",
  storageBucket: "artbiddk.appspot.com",
  messagingSenderId: "427121838916",
  appId: "1:427121838916:web:ac5440780c5a689073e511",
  measurementId: "G-HSW42EP6DK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth();

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const createUserBtn = document.getElementById('createUserBtn');
const signInBtn = document.getElementById('signInBtn');

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("User is signed in with uid:", uid);
  } else {
    console.log("User is signed out");
  }
});

createUserBtn.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          alert("User created");
      })
      .catch((error) => {
          alert(error.message);
      });
});

login-button.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          alert("User logged in");
      })
      .catch((error) => {
          alert(error.message);
      });
});


// Function to create a new user
const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User created:", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error:", errorMessage);
    });
};

// Function to sign in an existing user
const signInUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed in:", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error:", errorMessage);
    });
};

// You can now use createUser and signInUser functions to handle user authentication.
