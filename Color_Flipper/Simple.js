const colors = ["green", "rgb(164, 151, 98)", "pink", "blue", "red","rgb(98, 164, 104)","orange","yellow","white"];

const btn = document.querySelector("#btn");
const showColor = document.querySelector("#h1-show-color");
const myBody = document.querySelector(".outer");

btn.addEventListener('click',function(){
    const randomValue = getRandomValue();
    showColor.innerHTML = colors[randomValue];
    myBody.style.backgroundColor = colors[randomValue];
});

function getRandomValue(){
    return Math.floor(Math.random() * colors.length);
}

