const modalWrapper = document.getElementsByClassName("modalwrapper")[0]
const addStudentButton = document.getElementsByClassName("addStudentBtn")[0]
const confirmButton = document.getElementsByClassName("checkbutton")[0]
const nameInputStyle = document.getElementById("newname")
modalWrapper.style.display = "none"


let nextPageButton = document.getElementsByClassName("changepage")[0]


nextPageButton.addEventListener('click', function(){





})


let studentNameDisplay = document.getElementsByClassName("studentname")
let studentID = 0 


addStudentButton.addEventListener('click', function(){


modalWrapper.style.display = "grid"

})



          

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
    


 
   
