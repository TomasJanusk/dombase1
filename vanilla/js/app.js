// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKAWDSJ48JzKjbU7leAfe4ZzNn6QBAj8I",
  authDomain: "tomas-7d59d.firebaseapp.com",
  databaseURL:
    "https://tomas-7d59d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tomas-7d59d",
  storageBucket: "tomas-7d59d.appspot.com",
  messagingSenderId: "973331889475",
  appId: "1:973331889475:web:63c287cb7fd13227abc3f6",
  measurementId: "G-S0D6616J8H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let productCode = document.querySelector("#enterCode");
let productName = document.querySelector("#enterName");
let productQuantity = document.querySelector("#enterQuantity");
let productCodeTwo = document.querySelector("#enterCodeTwo");

let insertBtn = document.querySelector("#insertBtn");
let updateBtn = document.querySelector("#updateBtn");
let deleteBtn = document.querySelector("#deleteBtn");
let selectBtn = document.querySelector("#selectBtn");

function InsertData(evt) {
  evt.preventDefault();
  console.log(productCode.value, productName.value, productQuantity.value);
  set(ref(db, "products/" + productCode.value), {
    Id: productCode.value,
    Name: productName.value,
    Quantity: productQuantity.value,
  });
}
insertBtn.addEventListener("click", InsertData);
