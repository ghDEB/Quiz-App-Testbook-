let enter=document.getElementById("enter");
let inputdata=document.getElementById("inputdata");
let clear=document.getElementById("clear");
let middleline=document.getElementById("middleline");
let catgsection= document.getElementById("catgeroy-section");
enter.addEventListener("click",()=>{
if(inputdata.value==="")
    {
        catgsection.classList.remove("category1");
        catgsection.classList.add("category");
        middleline.innerText="";
        alert("Please enter your name");
    }
else{  
        localStorage.setItem("Username",inputdata.value); 
        catgsection.classList.remove("category");
        catgsection.classList.add("category1");
        middleline.innerText="Hi "+inputdata.value+", YOU ARE NOW READY TO TAKE UP THE QUIZ!!!";
    }    
})
clear.addEventListener("click",()=>{
middleline.innerText="";
inputdata.value="";
})

let button1=document.getElementById("catgeroy-buttons1");
let button2=document.getElementById("catgeroy-buttons2");
let button3=document.getElementById("catgeroy-buttons3");
let button4=document.getElementById("catgeroy-buttons4");

button1.addEventListener('click', ()=>
{
    window.location.href="pipes.html";
})
button2.addEventListener('click',()=>
{
    window.location.href="probability.html";
})
button3.addEventListener('click',()=>
{
    window.location.href="ages.html";
})
button4.addEventListener('click',()=>
{
    window.location.href="profitloss.html";
})
