import { expenses } from "./main.js"

let revenuText = document.querySelector(".revenutext")
let schoolExpensesText = document.querySelector(".expensecost")
let adExpensesText = document.querySelector(".adexpensecost")
let teachingHoursText = document.querySelector(".teachinghourscontent")
let hourlyText = document.getElementsByClassName("hourlytext")[0]
let studentNumberText = document.getElementsByClassName("currentstudentnumber")[0]
let grossProfitText = document.querySelector(".grossprofittext")


export let dashboardData = { 
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


  
  export function assignDashboardData (){

    let revenuText = document.querySelector(".revenutext")
    let schoolExpensesText = document.querySelector(".expensecost")
    let adExpensesText = document.querySelector(".adexpensecost")
    let teachingHoursText = document.querySelector(".teachinghourscontent")
    let hourlyText = document.getElementsByClassName("hourlytext")[0]
    let studentNumberText = document.getElementsByClassName("currentstudentnumber")[0]
    let grossProfitText = document.querySelector(".grossprofittext")
    





    revenuText.textContent = dashboardData.revenue

     schoolExpensesText.textContent =  expenses.schoolexpenses
     
     adExpensesText.textContent =  expenses.adexpenses
   
 
     teachingHoursText.textContent = dashboardData.teachingHours
  
     let hourlyWage = " W " + Math.round(dashboardData.revenue / dashboardData.teachingHours) + ",000"
 
     hourlyText.textContent = hourlyWage
  
     studentNumberText.textContent = dashboardData.studentNumber
    
     let totalLosses = expenses.adexpenses + expenses.schoolexpenses  
   
    grossProfitText.textContent = dashboardData.revenue - totalLosses


  }

  export function UpdateaddedDashboarddata (addedteachinghours, addedrevenue ){
    
    teachingHoursText = dashboardData.teachingHours += addedteachinghours
    revenuText.textContent = dashboardData.revenue += addedrevenue
     
    dashboardData.studentNumber += 1 
    studentNumberText.textContent = dashboardData.studentNumber
    
  
  
  }

  export function updateDeletedDashboarddata (subtractedHours, lossRevenue ){
  
    teachingHoursText = dashboardData.teachingHours -= subtractedHours
    revenuText.textContent = dashboardData.revenue -= lossRevenue
    
    dashboardData.studentNumber -= 1 
    studentNumberText.textContent = dashboardData.studentNumber
  
  }
