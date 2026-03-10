document.addEventListener("DOMContentLoaded", function () {

const studentLogin = document.getElementById("studentLogin")
const tutorLogin = document.getElementById("tutorLogin")
const calendar = document.getElementById("calendar")
const appointmentInfo = document.getElementById("appointmentInfo")

/* -------------------------
STUDENT LOGIN
--------------------------*/

if(studentLogin){

studentLogin.addEventListener("submit", function(e){

e.preventDefault()

const email = document.getElementById("studentEmail").value
const password = document.getElementById("studentPassword").value

if(email && password){

localStorage.setItem("studentLoggedIn", true)
window.location.href = "schedule.html"

}else{

document.getElementById("error").innerText = "Invalid Login"

}

})

}


/* -------------------------
TUTOR LOGIN
--------------------------*/

if(tutorLogin){

tutorLogin.addEventListener("submit", function(e){

e.preventDefault()

localStorage.setItem("tutorLoggedIn", true)

window.location.href = "tutor-dashboard.html"

})

}


/* -------------------------
CALENDAR GENERATION
--------------------------*/

if(calendar){

let selectedDay = null

const today = new Date()
const year = today.getFullYear()
const month = today.getMonth()

const lastDay = new Date(year, month + 1, 0).getDate()

for(let d = 1; d <= lastDay; d++){

const day = document.createElement("div")

day.className = "day"
day.innerText = d

day.addEventListener("click", function(){

selectedDay = d
document.getElementById("timeSelect").style.display = "block"

})

calendar.appendChild(day)

}

/* Time Selection */

const timeButtons = document.querySelectorAll(".timeBtn")

timeButtons.forEach(btn => {

btn.addEventListener("click", function(){

const time = btn.innerText

localStorage.setItem("appointmentDay", selectedDay)
localStorage.setItem("appointmentTime", time)

alert("Thanks! Tutoring Is Scheduled for Day " + selectedDay + " At " + time)

location.reload()

})

})

}


/* -------------------------
TUTOR DASHBOARD
--------------------------*/

if(appointmentInfo){

const students = ["Roy","Wesley","Nick","Chris","Lemmie","Daniel"]
const times = ["8:00 AM","10:00AM","12:00 PM","2:00 PM","4:00 PM"]

const randomStudent = students[Math.floor(Math.random()*students.length)]
const randomTime = times[Math.floor(Math.random()*times.length)]

appointmentInfo.innerText =
randomStudent + " Scheduled Tutoring Session At:  " + randomTime

}

})