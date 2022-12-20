const hexColors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.querySelector("#btn");
const showColor = document.querySelector("#h1-show-color");
const myBody = document.querySelector(".outer");

btn.addEventListener('click', function () {
    let randomValue = "#";
    for(let i = 0;i<6;i++){
        // myBody.style.backgroundColor = colors[randomValue];      
        randomValue += hexColors[getRandomValue()];

    }
    showColor.innerHTML = randomValue;
    myBody.style.backgroundColor = randomValue;
});

function getRandomValue() {
    return Math.floor(Math.random() * hexColors.length);
}