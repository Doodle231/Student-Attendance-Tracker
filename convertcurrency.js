export const initCurrency = () => {
    let dollarButton = document.getElementsByClassName("dollarbutton")[0]
    let wonButton = document.getElementsByClassName("wonbutton")[0]
    let tuition = document.getElementsByClassName("tuition")


    let dollarIsActive = null 
    let tuitionArray = []
 dollarButton.addEventListener('click', function(){

    if (dollarIsActive === true ){ 
      return
    }

    for (let i = 0; i < tuition.length; i++) {
    
       tuitionArray.push(Number(tuition[i].textContent))
   
      tuition[i].textContent = " $ " + Math.round(tuitionArray[i] )
      

       
    }

    dollarIsActive = true; 

 })

 wonButton.addEventListener('click', function(){

    if (dollarIsActive === false ){ 
        return
      }
  
      for (let i = 0; i < tuition.length; i++) {
      
         tuitionArray.push(Number(tuition[i].textContent))
     
        tuition[i].textContent = " W " + Math.round(tuitionArray[i] * 1.3 ) + ",000"
        
  
         
      }

   dollarIsActive = false; 





})



}