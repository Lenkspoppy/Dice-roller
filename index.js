const rollBtn = document.getElementById("rollBtn");
const labelBtn = document.getElementById("labelBtn");

let randomNum;

rollBtn.onclick = function(){
    randomNum = Math.floor(Math.random() *6) + 1;
    labelBtn.textContent = randomNum
}