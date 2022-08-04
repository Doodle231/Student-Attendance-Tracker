
let adExpenseConfirmbtn = document.getElementsByClassName("expenseconfirm")[0]
let generalExpenseConfirmbtn = document.getElementsByClassName("expenseconfirm")[1]
let adExpenseInput =document.getElementsByClassName("expenseinput")[0]
let generalExpenseInput =document.getElementsByClassName("generalexpenseinput")[0]


import { dashboardData } from "./dashboard.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js"
import {  getFirestore, collection,  onSnapshot,
    doc, setDoc,} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js"



    const firebaseConfig = {
        apiKey: "AIzaSyDidN15Yn-ePiF2QamJ81DwV5Pc-ZGo5AM",
        authDomain: "attendance-manager-8fff0.firebaseapp.com",
        projectId: "attendance-manager-8fff0",
        storageBucket: "attendance-manager-8fff0.appspot.com",
        messagingSenderId: "577980572828",
        appId: "1:577980572828:web:4d491ade41a29ae5e77959"
      };

      const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore()
const colRef = collection(db,"guest")




export function initButtons (){

adExpenseConfirmbtn.addEventListener('click', function(){ 





getDocs(colRef)
.then((snapshot) => {
    expenses.adexpenses += Number(adExpenseInput.value)


})

})


generalExpenseConfirmbtn.addEventListener('click', function(){ 

  
    })


}