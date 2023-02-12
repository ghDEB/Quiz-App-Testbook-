let recieveData=localStorage.getItem("scoreValue");
let totalQs=localStorage.getItem("TotalQ");
let wrong=document.getElementById("wrong");
let time=localStorage.getItem("Totaltime");
let attempt=localStorage.getItem("Attempts");
let correct= document.getElementById("correct");
let attempts=document.getElementById("attempts");
let question=document.getElementById("question");
let percentage=document.getElementById("percentage");
let totaltime=document.getElementById("totaltime");
let restart=document.getElementById("restart");
let home=document.getElementById("home");
let restartpage=localStorage.getItem("restartpage");
let username=localStorage.getItem("Username");
let scorepage=document.getElementById("scorepage");
scorepage.innerText="Thanks "+username+" for your participation";
restart.addEventListener('click',()=>
{
    window.location.href=restartpage;
})
home.addEventListener('click',()=>
{
    window.location.href="index.html";
})
percentage.innerText=Math.round((recieveData/totalQs)*100);
totaltime.innerText=time;
question.innerText=totalQs;
attempts.innerText=attempt;
correct.innerText=recieveData;
wrong.innerText=(attempt-recieveData);

