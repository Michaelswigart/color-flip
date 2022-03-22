const colors = ["darkred", "rgba(123, 134, 545, 43)","#558829","blue"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function (){
//get random number between 0 - 3
const randomNumber = getRandomNumber();
console.log(randomNumber);
document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
console.log(document.body);
});

function getRandomNumber () {
    return Math.floor(Math.random() * colors.length);
}