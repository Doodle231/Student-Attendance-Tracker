import {setDoc} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js"


export const confirmStudentSettings = () => {
    
    
    
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
      const colRef = collection(db,"guest")
      
    
    
    
    
    
    
    
    const modalWrapper = document.getElementsByClassName("addstudentmodal")[0]
    let confirmButton = document.querySelector(".confirm")
    let studentNameInput = document.getElementById("studentnameinput")
    let monthlyHoursInput = document.getElementById("monthlyhoursinput")
    let levelChoice = document.getElementById("levelchoice")
    let tuitionInput = document.getElementById("tuitioninput")
    let ageChoice = document.getElementById("agechoice")
    const dashboardwrapper = document.querySelector(".dashboard")
    
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
 
  const confirmPopup = document.querySelector(".confirmpopup")
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
    console.log(studentNameInput.value)
    setDoc(doc(db, "guest", studentNameInput.value), {
      hours: Number(monthlyHoursInput.value), 
      level: levelChoice.value,
      name:studentNameInput.value,
      tuition: Number(tuitionInput.value), 
      
      
  
    });
    
   
  
  
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
  
  console.log("running append")
  
  /*
    boardWrapper.appendChild(studentName)
    boardWrapper.appendChild(hoursTotal)
    boardWrapper.appendChild(level)
    boardWrapper.appendChild(tuition)
    
  */
    
  
    initalizeSuccessScreen()
    confirmPopup.style.display = "none"
    boardWrapper.style.display = "grid"
  
  })
    
  
  
})
  
  }