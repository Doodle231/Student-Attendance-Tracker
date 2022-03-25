const modalWrapper = document.getElementsByClassName("modalwrapper")[0]
const addStudentButton = document.getElementsByClassName("addStudentBtn")[0]
const confirmButton = document.getElementsByClassName("checkbutton")[0]
const nameInputStyle = document.getElementById("newname")
modalWrapper.style.display = "none"


let studentNameDisplay = document.getElementsByClassName("studentname")
let studentID = 0 


addStudentButton.addEventListener('click', function(){




modalWrapper.style.display = "block"

})


/*
   const updateDeleteButtons = () => {

  for (let i = 0; i < deleteButton.length; i++) {
       
    console.log(deleteButton)
    
    deleteButton[0].addEventListener('click', function(){
  

      
        })

      }
   }

*/



          



confirmButton.addEventListener('click', function(){
    

  let studentName = document.getElementById("newname").value
    let studentTuition = document.getElementById("newtuition").value
    let studentLevel = document.getElementById("classType").value


          let studentNameDisplay =  document.createElement("div")
          let studentPriceDisplay = document.createElement("div")
          let studentLevelDisplay = document.createElement("div")
         
          
          studentNameDisplay.classList = "studentname"
          studentPriceDisplay.classList = "tutionprice"
          studentLevelDisplay.classList = "studentlevel"
          
          let titleWrapper = document.getElementsByClassName("titlewrapper")[0]
          let deletebtn = document.createElement('Button') 
          deletebtn.classList = "deletebtn" 
          
          titleWrapper.appendChild(studentNameDisplay)
          titleWrapper.appendChild(studentPriceDisplay)
          titleWrapper.appendChild(studentLevelDisplay)
          titleWrapper.appendChild(deletebtn)

        

        

          studentNameDisplay.innerText = studentName
          studentPriceDisplay.innerText = studentTuition
          studentLevelDisplay.innerText = studentLevel




         
          

          
          let deleteButton = document.getElementsByClassName("deletebtn")
           
            
            for (let i = 0; i < deleteButton.length; i++) {

          
              let name = document.getElementsByClassName("studentname") 
              let tutionprice =  document.getElementsByClassName("tutionprice") 
              let studentLevel = document.getElementsByClassName("studentlevel")
             
              deleteButton[i].onclick = function () {

              deleteButton[i].id = [i]
              console.log(deleteButton[i].id)

           const removeElements = () => {

             
             
           }
           
           removeElements()
            
          }

          
    
      



        }
        
                  
         


    modalWrapper.style.display = "none"
    
    })
    


 
   
  
 /*
    let tution = document.getElementsByClassName("tutionprice")  
    let studentName = document.getElementsByClassName("studentname")
    let studentLevel = document.getElementsByClassName("studentlevel")  
        


          for (let i = 0; i < deleteButton.length; i++) {
         console.log(deleteButton[i])
          deleteButton[i].addEventListener('click', function(){
      
           console.log("clicked")

          })

        }
 */