const clock = document.getElementById("clock");
const dateText = document.getElementById("date");

function updateClock(){
const now = new Date;
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

hours = String(hours).padStart(2,"0")
minutes = String(minutes).padStart(2,"0")
seconds = String(seconds).padStart(2,"0")

clock.innerText = `${hours}:${minutes}:${seconds}`;
dateText.innerText = now.toDateString();
}
updateClock();
setInterval(updateClock,1000);
