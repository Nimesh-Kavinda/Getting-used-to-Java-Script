
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {getFirestore, collection, addDoc, serverTimestamp} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
const firebaseConfig = {
apiKey: "AIzaSyAApQaX-t-he1VGihaZDMv-2scGqdMVWIw",
authDomain: "bookmark-9dcbc.firebaseapp.com",
projectId: "bookmark-9dcbc",
storageBucket: "bookmark-9dcbc.firebasestorage.app",
messagingSenderId: "580096028536",
appId: "1:580096028536:web:c2847a9951c1986c41e28d"
};


const app = initializeApp(firebaseConfig);
const db =getFirestore();
const colRef = collection(db, "bookmarks");

const addForm = document.querySelector(".add");
addForm.addEventListener("submit", event => {
    event.preventDefault();

    addDoc(colRef, {
        link: addForm.link.value,
        title: addForm.title.value,
        category: addForm.category.value,
        createdAt: serverTimestamp()
    })
    .then(() => {
        addForm.reset();
    })
});
