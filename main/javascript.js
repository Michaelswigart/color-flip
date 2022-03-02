const colors = ["red", "rgba(123, 134, 545, 43)","#558829","blue"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function (){
//get random number between 0 - 3
const randomNumber = 2;
document.body.style.backgroundColor = color[randomNumber];
color.textContent = colors[randomNumber];
console.log(document.body);
});