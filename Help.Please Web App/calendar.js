const calendar = document.getElementById("calendar")
let selectedDay = null

function generateCalendar(){

let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()

let lastDay = new Date(year, month + 1, 0).getDate()

for(let d=1; d<=lastDay; d++){

let day = document.createElement("div")
day.className = "day"
day.innerText = d

day.onclick = function(){

selectedDay = d
document.getElementById("timeSelect").style.display = "block"

}

calendar.appendChild(day)

}

}

function schedule(time){

alert("Thanks! Tutoring scheduled for Day " + selectedDay + " at " + time)

localStorage.setItem("appointmentDay", selectedDay)
localStorage.setItem("appointmentTime", time)

location.reload()

}

generateCalendar()