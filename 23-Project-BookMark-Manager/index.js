
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {getFirestore, collection, addDoc, serverTimestamp, getDocs} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
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


function genarateTemplate(response,id){
    return `<div class="card">
                            <p class="title">${response.title}</p>
                            <div class="sub-information">
                                <p>
                                    <span class="category ${response.category}">${response.category}</span>
                                </p>
                                <a href="${response.link}" target=""><i class="bi bi-box-arrow-up-right webiste"></i></a>
                                <a href="" target=""><i class="bi bi-google search"></i></a>
                                <span><i class="bi bi-trash delete" data-id="${id}"></i></span>
                            </div>
                        </div`;
}

const cards = document.querySelector(".cards");
getDocs(colRef)
    .then(data => {
        data.docs.forEach(document => {
            cards.innerHTML += genarateTemplate(document.data(), document.id);
        })
    })
