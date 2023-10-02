import firebase from "./firebaseConfig";
import { app, analytics } from "./firebaseConfig.js";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Successfully logged in
      const user = userCredential.user;
    })
    .catch((error) => {
      // Handle error
      console.error(error);
    });
});
