let countLabel = document.getElementById("count");
let incBtn = document.getElementById("incBtn");
let resetBtn = document.getElementById("resetBtn");
let decBtn = document.getElementById("decBtn");

let count = 0;

incBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}

decBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}