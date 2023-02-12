let timer1=document.getElementById("timer");
var counter=0;
let restart=document.getElementById("restart");
restart.addEventListener('click',()=>
{
    alert("Are you sure you want to restart the test?")
    window.location.href="probability.html";
})
let arr=[{
Q:"An event in the probability that will never be happened is called as",
A:"Unsure event",
B:"Sure event",
C:"Possible event",
D:"Impossible event",
Ans:"Impossible event"

},
{
Q:"What will be the value of P(not E) if P(E) = 0.07?",
A:"90",
B:"91",
C:"93",
D:"None of these",
Ans:"93"
},
{
//Q:"Pipes A and B can fill a tank in 5 and 6 hours respectively. Pipe C can empty it in 12 hours. If all the three pipes are opened together, then the tank will be filled in:",
Q:"What will be the probability of getting odd numbers if a dice is thrown?",
A:"0.5",
B:"2",
C:"2.5",
D:"4",
Ans:"0.5"
},
{
    Q:"What is the probability of getting a sum as 3 if a dice is thrown?",
    A:"2/18",
    B:"1/18",
    C:"4",
    D:"1/36",
    Ans:"1/18"
},
{
    Q:"What is the probability of getting an even number when a dice is thrown?",
    A:"1/6",
    B:"1/2",
    C:"1/3",
    D:"1/4",
    Ans:"1/2"
},
{
    Q:"What is the probability of getting the sum as a prime number if two dice are thrown?",
    A:"5/24",
    B:"5/30",
    C:"5/12",
    D:"1/4",
    Ans:"5/12"
},
{
    Q:"What is the probability of getting atleast one head if three unbiased coins are tossed?",
    A:"7/8",
    B:"1/2",
    C:"5/8",
    D:"8/9",
    Ans:"7/8"
},
{
    Q:"What is the probability of getting 1 and 5 if a dice is thrown once?",
    A:"1/6",
    B:"1/3",
    C:"2/3",
    D:"8/9",
    Ans:"1/3"
},
{
    Q:" What will be the probability of losing a game if the winning probability is 0.3?",
    A:"0.5",
    B:"0.6",
    C:"0.7",
    D:"0.8",
    Ans:"0.7"
},
{
    Q:"If two dice are thrown together, what is the probability of getting an even number on one dice and an odd number on the other dice?",
    A:"1/4",
    B:"3/5",
    C:"3/4",
    D:"1/2",
    Ans:"1/2"
}]

let A=document.getElementById("A");
let B=document.getElementById("B");
let C=document.getElementById("C");
let D=document.getElementById("D");
let score=document.getElementById("score");
let pipedata=document.getElementById("pipedata");
let data=document.getElementById("data");
let next=document.getElementById("next");
let questionNo=document.getElementById("bold")
pipedata.addEventListener("click",()=>
{   
    restart.classList.remove("hidden");
    restart.classList.add("visible");
    next.classList.remove("nextclass");
    next.classList.add("nextclass1")
    var max=10;
    var i=1;
    function timer()
    { 
    setInterval(()=>
        {
            timer1.innerText=i;
            if(i<max)
            {
                i++;
                //console.log(i);
            }
        },1000);
    }
    timer();
    let ol=document.getElementById("list")
    ol.classList.remove("hidden");
    ol.classList.add("visible");
    pipedata.style.visibility="hidden";
    //document.getElementsByTagName("ol").style.visibility="visible";
    var x=1;
    var y=0;
    data.innerText=arr[x-1].Q;
    questionNo.innerText=x+"/10";
    A.innerText=arr[x-1].A;
    B.innerText=arr[x-1].B;
    C.innerText=arr[x-1].C;
    D.innerText=arr[x-1].D;
        A.addEventListener("click",()=>
            {
                if(timer1.innerText<max)
                {
                    y++;
                    if(y<=1)
                    {
                        if(A.innerText===arr[x-1].Ans)
                    {
                        A.style.backgroundColor="aqua";
                        counter++;
                        score.innerText=counter;
                    }
                    else{
                        A.style.backgroundColor="red";
                    }
                    }
                }
                
            })
         B.addEventListener("click",()=>
            {
                if(timer1.innerText<max)
                { y++;
                    if(y<=1)
                    {
                        if(B.innerText===arr[x-1].Ans)
                    {
                
                        B.style.backgroundColor="aqua";
                        counter++;
                        score.innerText=counter;
                    }
                    else{
                
                        B.style.backgroundColor="red";
                    }
                    }}
               
                
            })
        C.addEventListener("click",()=>
            {
                
                if(timer1.innerText<max)
                {
                    y++;
                if(y<=1)
                {
                    if(C.innerText===arr[x-1].Ans)
                {

                    C.style.backgroundColor="aqua";
                    counter++;
                    score.innerText=counter;
                }
                else{
            
                    C.style.backgroundColor="red";
                }
                } 
                }
                
            })
        D.addEventListener("click",()=>
            {
                if(timer1.innerText<max)
                {
                    y++;
                    if(y<=1)
                    {
                        if(D.innerText===arr[x-1].Ans)
                    {
                
                        D.style.backgroundColor="aqua";
                        counter++;
                        score.innerText=counter;
                    }
                    else{
                
                        D.style.backgroundColor="red";
                    }
                    }
                }
                
            })
                y=0;

        next.addEventListener("click",()=>
        {
            A.style.backgroundColor="";
            B.style.backgroundColor="";
            C.style.backgroundColor="";
            D.style.backgroundColor="";
            if(x>=1 && x<arr.length && timer1.innerText<max)
            {
                questionNo.innerText=x+1+"/10";
                data.innerText="";
                data.innerText=arr[x].Q;
                A.innerText=arr[x].A;
                B.innerText=arr[x].B;
                C.innerText=arr[x].C;
                D.innerText=arr[x].D;
                A.addEventListener("click",()=>
                    {
                        if(timer1.innerText<max)
                        { y++;
                            if(y<=1)
                            {
                                if(A.innerText===arr[x].Ans)
                            {
                        
                                A.style.backgroundColor="aqua";
                                counter++;
                                score.innerText=counter;
                            }
                            else{
                            
                                A.style.backgroundColor="red";
                            }
                            }
                        }
                       
                    })
                B.addEventListener("click",()=>
                    {
                        if(timer1.innerText<max)
                        {y++;
                            if(y<=1)
                            {
                                if(B.innerText===arr[x].Ans)
                            {
                    
                                B.style.backgroundColor="aqua";
                                counter++;
                                score.innerText=counter;
                            }
                            else{
                        
                                B.style.backgroundColor="red";
                            }
                            }}
                         
                    })
                C.addEventListener("click",()=>
                    {
                        if(timer1.innerText<max)
                        {
                            y++;
                            if(y<=1)
                            {
                                if(C.innerText===arr[x].Ans)
                            {
                            
                                C.style.backgroundColor="aqua";
                                counter++;
                                score.innerText=counter;
                            }
                            else{
                            
                                C.style.backgroundColor="red";
                            }
                            }
                        }    
                    })
                D.addEventListener("click",()=>
                    {   
                        if(timer1.innerText<max)
                        {  y++;
                            if(y<=1)
                            {
                                if(D.innerText===arr[x].Ans)
                            {
                            
                                D.style.backgroundColor="aqua";
                                counter++;
                                score.innerText=counter;s
                            }
                            else{
                        
                                D.style.backgroundColor="red";
                            }
                            }}
                    })
                    x++;
                    y=0;
                 }
            else
                {
                    console.log(timer1.innerText);
                    max=parseInt(timer1.innerText);
                    let result=document.getElementById("result");
                    next.classList.remove("nextclass1");
                    result.classList.remove("showresult");
                    result.classList.add("showresult1");
                    var name="probability.html";
                    result.addEventListener('click',()=>
                    {
                        localStorage.setItem("restartpage",name);
                        window.location.href="result.html"
                    })
                    next.classList.add("nextclass");
                    //console.log(score.innerText);
                    //data passing to result page
                    localStorage.setItem("scoreValue",score.innerText);
                    localStorage.setItem("TotalQ",arr.length);
                    localStorage.setItem("Totaltime",(max));
                    localStorage.setItem("Attempts",x);
                    setInterval(()=>
                    {
                    window.location.href="result.html";
                    },100000);
                }
         })
})