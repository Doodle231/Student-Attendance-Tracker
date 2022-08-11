


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js"
import { getFirestore,
    collection,  
    getDocs, 
    doc, 
    setDoc, 
    deleteDoc} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js"

    import {
  getAuth,
  
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js"

import { initCurrency } from "./convertcurrency.js"

import * as dashboard from "./dashboard.js"
import {assignDashboardData} from "./dashboard.js"
import { UpdateaddedDashboarddata, updateDeletedDashboarddata} from "./dashboard.js"
import {initButtons} from "./expenses.js"
let targetedDIVElement = null 



initButtons()

let DollarisActive = true; 

const confirmPopup = document.querySelector(".confirmpopup")
const modalWrapper = document.getElementsByClassName("addstudentmodal")[0]
const addStudentButton = document.getElementsByClassName("addStudentBtn")[0]

modalWrapper.style.display = "none"
const closeButton = document.getElementsByClassName("close")
const boardWrapper = document.querySelector(".boardwrapper")
const dashboardpic = document.getElementsByClassName("navcard")[0]
const dashboardwrapper = document.querySelector(".dashboard")
let studentNameDisplay = document.getElementsByClassName("studentname")

let targetedName = null; 
boardWrapper.style.display = "grid"


let adexpensepopup = document.getElementsByClassName("adexpensepopup")[0]


let generalExpensePopup = document.querySelector(".generalexpensepopup")
generalExpensePopup.style.display = "none"

dashboardpic.addEventListener('click', function(){

  dashboardwrapper.style.display = "grid"
  modalWrapper.style.display = "none"
  boardWrapper.style.display = "none"


  })
  

  closeButton[0].addEventListener('click', function(){
    dashboardwrapper.style.display = "none"
    modalWrapper.style.display = "none"
    boardWrapper.style.display = "grid"
    })


closeButton[1].addEventListener('click', function(){
dashboardwrapper.style.display = "none"
modalWrapper.style.display = "none"
boardWrapper.style.display = "grid"
})


addStudentButton.addEventListener('click', function(){
boardWrapper.style.display = "none"

modalWrapper.style.display = "grid"


})

document.getElementsByClassName("closeadexpensepopup")[0].addEventListener('click', function(){

  adexpensepopup.style.display = "none"
   
   })
 
   document.getElementsByClassName("closegeneralexpensepopup")[0].addEventListener('click', function(){
      console.log("clicked")
     generalExpensePopup.style.display = "none"
      
      })
  


 


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
const user = auth.currentUser;
const db = getFirestore()
const colRef = collection(db,"users")



export let expenses = {
  adexpenses:null, 
  schoolexpenses:null, 
}

export let tuitionArray= []

function grabStudentData(){

getDocs(colRef)
.then((snapshot) => {


  
   let students = []


   snapshot.docs.forEach((doc) => {
    


    if (doc.data().hours !== undefined){
    students.push({...doc.data(), id:doc.id})
    dashboard.dashboardData.teachingHours += doc.data().hours
    dashboard.dashboardData.studentNumber += 1 
    }
  
    if (doc.data().adexpense !== undefined){
      expenses.adexpenses += doc.data().adexpense
    }
  
    if (doc.data().schoolexpense !== undefined){
      expenses.schoolexpenses += doc.data().schoolexpense
    }
  
    if (doc.data().tuition !== undefined){
      dashboard.dashboardData.revenue += doc.data().tuition 
    }

   
   })
   
   
  

  function createDynamicElementsandAppend (){}
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
    tuition.textContent = " $ " + students[i].tuition
    
   tuitionArray.push(students[i].tuition)

    boardWrapper.appendChild(studentName)
    boardWrapper.appendChild(hoursTotal)
    boardWrapper.appendChild(level)
    boardWrapper.appendChild(tuition)
    

  
   
   }
  


  assignDashboardData()
  createDynamicElementsandAppend()
  assignDeleteDblClick()
  
  
  })


}

grabStudentData()


let studentNameInput = document.getElementById("studentnameinput")
let monthlyHoursInput = document.getElementById("monthlyhoursinput")
let levelChoice = document.getElementById("levelchoice")
let tuitionInput = document.getElementById("tuitioninput")
let ageChoice = document.getElementById("agechoice")


let addStudentForm = document.querySelector(".addstudentform")

addStudentForm.style.display = "block"



const confirmStudentSettings = () => {
  let confirmButton = document.querySelector(".confirm")

  confirmButton.addEventListener('click',(e) =>{
    e.preventDefault()
 

if (studentNameInput.value === "" ){
  alert("Student value field must be filled in")
  return 
}

if(monthlyHoursInput.value === ""){
  alert ("Monthly hours must be filled in ")
  return
}

if (monthlyHoursInput.value > 50){
  alert ("number of hours cannot exceed 50")
  return
}

if (tuitionInput.value > 500 ){
  alert ("Easy there buddy. This is an English school. We don't make that kind of coin ")
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



  



})

}
confirmStudentSettings()

const cancelButton = document.querySelector(".canceladd")

cancelButton.addEventListener('click', function(){

confirmPopup.style.display = "none"
modalWrapper.style.display = "grid"

})






const adExpenseBtn = document.getElementsByClassName("navcard")[1]
const adGenerealExpenseBtn = document.getElementsByClassName("navcard")[2]
adExpenseBtn.addEventListener('click', function(){
adexpensepopup.style.display = "block"



})

adGenerealExpenseBtn.addEventListener('click', function(){
  generalExpensePopup.style.display = "block"
  

  
  })





const assignDeleteDblClick = () => { 
 
  for (let i = 0; i < studentNameDisplay.length; i++) {

    studentNameDisplay[i].addEventListener("dblclick",function (e){
      
      let deletetionPopup = document.querySelector(".deletionWarningPopup")
      deletetionPopup.style.display = "block"

       targetedName = e.target.textContent

       boardWrapper.style.display = "none"
    
       targetedDIVElement = e.target
      

       let nameDeletiontext = document.getElementsByClassName("namedeletion")[0]
       nameDeletiontext.textContent = targetedName

    });
 
}

}

export const initalizeSuccessScreen = () => {
  function successScreen() {
    let successScreen = document.querySelector(".successscreen")
    successScreen.style.display ='block'
    setTimeout(clearSucessScreen, 2200 )
   
    }
    
    function clearSucessScreen(){
      let successScreen = document.querySelector(".successscreen")
      successScreen.style.display = "none"
      let deletetionPopup = document.querySelector(".deletionWarningPopup")
      deletetionPopup.style.display ="none"
      boardWrapper.style.display ="grid"
    }
    

    successScreen()
    
   
    
}

initCurrency()


function deleteDocOnConfirmClick () {

  let confirmDeletionButton = document.getElementsByClassName("removefrmdb-button")[0]
   
  confirmDeletionButton.addEventListener('click', function(){

    handleDeleteOnClick()
    initalizeSuccessScreen()

    
     let nameDeletion = targetedDIVElement
     let hoursDeletion = nameDeletion.nextElementSibling
     let levelDeletion = hoursDeletion.nextElementSibling
     let tuitionDeletion = levelDeletion.nextElementSibling

      
      nameDeletion.remove()
      hoursDeletion.remove()
      levelDeletion.remove()
      tuitionDeletion.remove()


        let hoursToDelete = Number(hoursDeletion.textContent)
        let tuitionToDelete = Number(tuitionDeletion.textContent)
       
      updateDeletedDashboarddata(hoursToDelete, tuitionToDelete)


  })
  
}

deleteDocOnConfirmClick()



const handleDeleteOnClick = () => { 
  const docRef = doc(db, "users", targetedName)

  

deleteDoc(docRef)




}



let confirmButton = document.querySelector(".confirmadd")
confirmButton.addEventListener('click', function(){



  setDoc(doc(db, "users", studentNameInput.value), {
    hours: Number(monthlyHoursInput.value), 
    level: levelChoice.value,
    name:studentNameInput.value,
    tuition: Number(tuitionInput.value), 
    
  

    
  });
  
let addedHours = Number(monthlyHoursInput.value)
let addedRevenue = Number(tuitionInput.value)


UpdateaddedDashboarddata(addedHours, addedRevenue)


assignDashboardData()



  let studentName = document.createElement("div")
  let hoursTotal = document.createElement("div")
  let level = document.createElement("div")
  let tuition = document.createElement("div")

  studentName.classList = "studentname"
  hoursTotal.classList = "hourstotal"
  level.classList = "level"
  tuition.classList = "tuition"

  studentName.textContent = studentNameInput.value
  hoursTotal.textContent = monthlyHoursInput.value
  level.textContent = levelChoice.value
  tuition.textContent = tuitionInput.value


  boardWrapper.appendChild(studentName)
  boardWrapper.appendChild(hoursTotal)
  boardWrapper.appendChild(level)
  boardWrapper.appendChild(tuition)
  

  
  assignDeleteDblClick()

  initalizeSuccessScreen()
  confirmPopup.style.display = "none"
  boardWrapper.style.display = "grid"

})




function cancelRemove (){
  let cancelButton = document.getElementsByClassName("cancelremovefromdb")[0]
  
  cancelButton.addEventListener('click', function(){
   console.log("clicked")
    boardWrapper.style.display = "grid"
   
    let deletetionPopup = document.querySelector(".deletionWarningPopup")
   
    deletetionPopup.style.display = "none"
  })
}

cancelRemove()





