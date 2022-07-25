import * as dashboard from "./dashboard.js"
import { expenses } from "./main.js"

export function assignDOMelementsToBoard() {

    let revenuText = document.querySelector(".revenutext")
    revenuText.textContent = dashboard.dashboardData.revenue
     
     let schoolExpensesText = document.querySelector(".expensecost")
     schoolExpensesText.textContent =  expenses.schoolexpenses
     
     let adExpensesText = document.querySelector(".adexpensecost")
     adExpensesText.textContent =  expenses.adexpenses
   
     let teachingHoursText = document.querySelector(".teachinghourscontent")
     teachingHoursText.textContent = dashboard.dashboardData.teachingHours
  
     let hourlyText = document.getElementsByClassName("hourlytext")[0]
     let hourlyWage = " W " + Math.round(dashboard.dashboardData.revenue / dashboard.dashboardData.teachingHours) + ",000"
  
     hourlyText.textContent = hourlyWage
  
     let studentNumberText = document.getElementsByClassName("currentstudentnumber")[0]
     studentNumberText.textContent = dashboard.dashboardData.studentNumber
  }