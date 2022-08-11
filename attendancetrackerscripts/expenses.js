
import {initalizeSuccessScreen} from "./main.js"


let adExpenseConfirmbtn = document.getElementsByClassName("expenseconfirm")[0]
let generalExpenseConfirmbtn = document.getElementsByClassName("expenseconfirm")[1]
let adExpenseInput =document.getElementsByClassName("expenseinput")[0]
let generalExpenseInput =document.getElementsByClassName("generalexpenseinput")[0]
  let successScreen = document.querySelector(".successscreen")
  let adexpensepopup = document.getElementsByClassName("adexpensepopup")[0]
  let generalExpensePopup = document.querySelector(".generalexpensepopup")


export function initButtons (){

adExpenseConfirmbtn.addEventListener('click', function(){ 

  let enteredExpense = Number(adExpenseInput.value)

  if (enteredExpense > 500) {
    alert("expenses cannot be greater than 500. Come on this is a small business pal! ")
    return
  
   }


  adexpensepopup.style.display = "none"
initalizeSuccessScreen()



})

}








generalExpenseConfirmbtn.addEventListener('click', function(){ 
  generalExpensePopup.style.display = "none"
  
  
  let enteredExpense = Number(generalExpenseInput.value)

if (enteredExpense > 500) {
  alert("expenses cannot be greater than 500. Come on this is a small business pal! ")
  return
  
  }

  initalizeSuccessScreen()
  
  

})

