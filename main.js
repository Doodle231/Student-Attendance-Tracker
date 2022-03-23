const modalWrapper = document.getElementsByClassName("modalwrapper")[0]
const addStudentButton = document.getElementsByClassName("addStudentBtn")[0]
const confirmButton = document.getElementsByClassName("checkbutton")[0]
const nameInputStyle = document.getElementById("newname")
modalWrapper.style.display = "none"



let studentArray = []



addStudentButton.addEventListener('click', function(){

modalWrapper.style.display = "block"

})



confirmButton.addEventListener('click', function(){
    let studentName = document.getElementById("newname").value
    let studentTuition = document.getElementById("newtuition").value
    let studentLevel = document.getElementById("classType").value
  

    const createStudent = () => {
   
        return {
          studentName,
          studentTuition,
         studentLevel, 
    
          

          addNewStudent (){
    
            // name setup
            let studentNameDisplay = document.getElementsByClassName("studentname")
            let deleteButton = document.getElementsByClassName("deletebtn")[0]
                  
        
            for (let i = 0; i < studentNameDisplay.length; i++) {
            console.log(studentNameDisplay[i].innerHTML)
             if (studentNameDisplay[i].innerText == "Student Name"){
               
              studentNameDisplay[i].innerHTML = this.studentName 
               studentNameDisplay[i].appendChild(deleteButton)
              break
             }

            } 
            
          // price setup 
            let studentPriceDisplay = document.getElementsByClassName("tutionprice")
           
            for (let i = 0; i < studentPriceDisplay.length; i++) {

              if (studentPriceDisplay[i].textContent === "none"){
             
               studentPriceDisplay[i].textContent = this.studentTuition
 
                break
              }

            }

            // level setup

            let studentLevelDisplay = document.getElementsByClassName("studentlevel")
           
            for (let i = 0; i < studentLevelDisplay.length; i++) {

              if (studentLevelDisplay[i].textContent === "none"){
             
               studentLevelDisplay[i].textContent = this.studentLevel
 
                break
              }

            }



             return this
          }
    
    
        }
    }
     
    




let student1 = createStudent()

student1.addNewStudent()


    

   
    modalWrapper.style.display = "none"
    
    })
    


    

   
