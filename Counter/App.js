let inc = document.querySelector("#increase");
let dec = document.querySelector("#decrease");
let rest = document.querySelector("#reset");

let counterC = document.querySelector("#CountIncDec");
let theCount=0;
inc.addEventListener('click',function(){ 
       theCount++;
       counterC.innerText = theCount;
    counterC.style.color = "green";     
});
dec.addEventListener('click',function(){ 
       theCount--;
       counterC.innerText = theCount;  
    counterC.style.color = "red";
});
rest.addEventListener('click',function(){
       theCount=0;
       counterC.innerText = theCount;   
    counterC.style.color = "Yellow";
});
rest.addEventListener('dblclick',function(){
       theCount=0;
       counterC.innerText = theCount;   
    counterC.style.color = "black";
});