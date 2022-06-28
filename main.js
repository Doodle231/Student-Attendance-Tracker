
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js"
import { onSnapshot,
  getFirestore, collection,  getDocs, addDoc, doc, getDoc, updateDoc, setDoc, deleteDoc} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword, 
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js"



let dashboardData = { 
  profit: 0 , 
  revenue:0, 
  studentNumber: 0, 
  schoolExpenses: 0, 
  hourlyWage:0, 
  adExpenses:0, 
  teachingHours:0, 
  
  days: {
    monday:null, 
    tuesday:null,  
    wednesday:null,  
    thursday:null, 
    friday:null, 
    saturday:null, 
    
  }


}


let studentHours = 0 
let totaledTution = 0 

const confirmPopup = document.querySelector(".confirmpopup")
const modalWrapper = document.getElementsByClassName("addstudentmodal")[0]
const addStudentButton = document.getElementsByClassName("addStudentBtn")[0]
//const confirmButton = document.getElementsByClassName("checkbutton")[0]
const nameInputStyle = document.getElementById("newname")
modalWrapper.style.display = "none"
const closeButton = document.getElementsByClassName("close")
const boardWrapper = document.querySelector(".boardwrapper")
const dashboardpic = document.querySelector(".dashboardpic")
const dashboardwrapper = document.querySelector(".dashboard")
let studentNameDisplay = document.getElementsByClassName("studentname")
let studentID = 0 

boardWrapper.style.display = "none"
modalWrapper.style.display = "grid"
dashboardwrapper.style.display = "grid"
confirmPopup.style.display = "none"

let generalExpensePopup = document.querySelector(".generalexpensepopup")
generalExpensePopup.style.display = "none"

dashboardpic.addEventListener('click', function(){

  dashboardpic.style.display = "grid"
  modalWrapper.style.display = "none"
  boardWrapper.style.display = "none"
  })
  

  closeButton[0].addEventListener('click', function(){
    dashboardwrapper.style.display = "grid"
    modalWrapper.style.display = "none"
    boardWrapper.style.display = "grid"
    })


closeButton[1].addEventListener('click', function(){
dashboardwrapper.style.display = "grid"
modalWrapper.style.display = "none"
boardWrapper.style.display = "grid"
})


addStudentButton.addEventListener('click', function(){
boardWrapper.style.display = "none"

modalWrapper.style.display = "grid"


})







          
/*
confirmButton.addEventListener('click', function(){
 

  let studentName = document.getElementById("newname").value
    let studentTuition = document.getElementById("newtuition").value
    let studentLevel = document.getElementById("classType").value


          let studentNameDisplay =  document.createElement("div")
          let studentPriceDisplay = document.createElement("div")
          let studentLevelDisplay = document.createElement("div")
      
         let deletebtn = document.createElement('Button') 
          
         studentNameDisplay.classList = "studentname"
          studentPriceDisplay.classList = "tutionprice"
          studentLevelDisplay.classList = "studentlevel"
    
          
          let titleWrapper = document.getElementsByClassName("titlewrapper")[0]
          
         deletebtn.classList = "deletebtn" 


    studentNameDisplay.innerText = studentName
    studentPriceDisplay.innerText = studentTuition
    studentLevelDisplay.innerText = studentLevel

 
          titleWrapper.appendChild(studentNameDisplay)
          titleWrapper.appendChild(studentPriceDisplay)
          titleWrapper.appendChild(studentLevelDisplay)
          titleWrapper.appendChild(deletebtn)
     
  
          let deleteButton = document.getElementsByClassName("deletebtn")
           
            
            for (let i = 0; i < deleteButton.length; i++) {

              let name = document.getElementsByClassName("studentname") 
              let tutionprice =  document.getElementsByClassName("tutionprice") 
              let studentLevel = document.getElementsByClassName("studentlevel")
             

                  deleteButton[i].id = i
              
         
            
              deleteButton[i].onclick = function (e) {
             
           let deleteButton = e.target 
           let nextElement = deleteButton.previousElementSibling
           let brotherElement = nextElement.previousElementSibling
           let sisterElement = brotherElement.previousElementSibling
         
           
           deleteButton.remove()
           nextElement.remove()
           brotherElement.remove()
             sisterElement.remove()
           
            
          }

          
  


        }
        
                  
        
        
       
    modalWrapper.style.display = "none"
    
    })
    
    */


 
   
// firebase 

const firebaseConfig = {
  apiKey: "AIzaSyDidN15Yn-ePiF2QamJ81DwV5Pc-ZGo5AM",
  authDomain: "attendance-manager-8fff0.firebaseapp.com",
  projectId: "attendance-manager-8fff0",
  storageBucket: "attendance-manager-8fff0.appspot.com",
  messagingSenderId: "577980572828",
  appId: "1:577980572828:web:4d491ade41a29ae5e77959"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const user = auth.currentUser;
const db = getFirestore()
const colRef = collection(db,"guest")

const docRef = doc(db, "guest","Oscar Boss")

let students = []
let expenses = {
  adexpenses:null, 
  schoolexpenses:null, 
}







getDocs(colRef)
.then((snapshot) => {

 snapshot.docs.forEach((doc) => {
  dashboardData.studentNumber += 1 
  dashboardData.teachingHours += doc.data().hours

  
  if (doc.data().hours !== undefined){
  students.push({...doc.data(), id:doc.id})
  }

  if (doc.data().adexpense !== undefined){
    expenses.adexpenses += doc.data().adexpense
  }

  if (doc.data().schoolexpense !== undefined){
    expenses.schoolexpenses += doc.data().schoolexpense
  }

  if (doc.data().tuition !== undefined){
    dashboardData.revenue += doc.data().tuition 
  }

 let revenuText = document.querySelector(".revenutext")
 revenuText.textContent = dashboardData.revenue
  
  let schoolExpensesText = document.querySelector(".expensecost")
  schoolExpensesText.textContent =  expenses.schoolexpenses
  
  let adExpensesText = document.querySelector(".adexpensecost")
  adExpensesText.textContent =  expenses.adexpenses

 })
 
 

 for (let i = 0; i < students.length; i++) {
  

 
  let studentName = document.createElement("div")
  let hoursTotal = document.createElement("div")
  let level = document.createElement("div")
  let tuition = document.createElement("div")


  studentName.classList = "studentname"
  
 
  hoursTotal.classList = "hourstotal"
  

  level.classList = "level"
  
  
  tuition.classList = "tuition"

 
  
  studentName.textContent = students[i].name
  hoursTotal.textContent = students[i].hours
  level.textContent = students[i].level
  tuition.textContent = "₩" + students[i].tuition
  
  if (students.length < 9 ){


  }
  

  boardWrapper.appendChild(studentName)
  boardWrapper.appendChild(hoursTotal)
  boardWrapper.appendChild(level)
  
  boardWrapper.appendChild(tuition)


 
 }


})

let studentNameInput = document.getElementById("studentnameinput")
let monthlyHoursInput = document.getElementById("monthlyhoursinput")
let levelChoice = document.getElementById("levelchoice")
let tuitionInput = document.getElementById("tuitioninput")
let ageChoice = document.getElementById("agechoice")


let addStudentForm = document.querySelector(".addstudentform")

addStudentForm.style.display = "block"

let loginPage = document.querySelector(".loginpage")
loginPage.style.display = "none"

const confirmStudentSettings = () => {
  let confirmButton = document.querySelector(".confirm")

  confirmButton.addEventListener('click',(e) =>{
    e.preventDefault()
    console.log(monthlyHoursInput.value)

if (studentNameInput.value === "" ){
  alert("Student value field must be filled in")
  return 
}

if(monthlyHoursInput.value === ""){
  alert ("Monthly hours must be filled in ")
  return
}


let databaseName = document.querySelector(".nameconfirm")
let databaseHours = document.querySelector(".hoursconfirm")
let databaseLevels = document.querySelector(".levelconfirm")
let databaseTuition = document.querySelector(".tuitionconfirm")
let databaseAge = document.querySelector(".rangeconfirm")

databaseName.textContent = " Student name: " + studentNameInput.value
databaseHours.textContent = " Total Number of Hours Per Month : " + monthlyHoursInput.value
databaseLevels.textContent = " Student Level : " + levelChoice.value
databaseTuition.textContent = " Tuition Per Month : $ " + tuitionInput.value
databaseAge.textContent = " Student Age Range : " + ageChoice.value

confirmPopup.style.display = "grid"
  modalWrapper.style.display = "none"
  dashboardwrapper.style.display ="none"
let confirmButton = document.querySelector(".confirmadd")

confirmButton.addEventListener('click', function(){





  setDoc(doc(db, "guest", studentNameInput.value), {
    hours: Number(monthlyHoursInput.value), 
    level: levelChoice.value,
    name:studentNameInput.value,
    tuition: Number(tuitionInput.value), 

  });
  



})
  



})

}
confirmStudentSettings()

const cancelButton = document.querySelector(".canceladd")

cancelButton.addEventListener('click', function(){

confirmPopup.style.display = "none"
modalWrapper.style.display = "grid"

})


let adexpensepopup = document.querySelector(".adexpensepopup")
const adExpenseBtn = document.getElementsByClassName("navcard")[1]

adExpenseBtn.addEventListener('click', function(){
adexpensepopup.style.display = "block"
dashboardwrapper.style.display = "none"
console.log("clicked")

})

document.querySelector(".closeadexpensepopup").addEventListener('click', function(){

 adexpensepopup.style.display = "none"
  
  })

  
 

