let restart=document.getElementById("restart");
restart.addEventListener('click',()=>
{
    alert("Are you sure you want to restart the test?")
    window.location.href="pipes.html";
})
let arr=[{
Q:"Three pipes A, B and C can fill a tank from empty to full in 30 minutes, 20 minutes, and 10 minutes respectively. When the tank is empty, all the three pipes are opened. A, B and C discharge chemical solutions P, Q and R respectively. What is the proportion of the solution R in the liquid in the tank after 3 minutes?",
A:"5/11",
B:"6/11",
C:"7/11",
D:"8/11",
Ans:"6/11"

},
{
Q:"Pipes A and B can fill a tank in 5 and 6 hours respectively. Pipe C can empty it in 12 hours. If all the three pipes are opened together, then the tank will be filled in:",
A:"30/17 hours",
B:"30/11 hours",
C:"60/17 hours",
D:"4.5 hours",
Ans:"60/17 hours"
},
{
//Q:"Pipes A and B can fill a tank in 5 and 6 hours respectively. Pipe C can empty it in 12 hours. If all the three pipes are opened together, then the tank will be filled in:",
Q:"A pump can fill a tank with water in 2 hours. Because of a leak, it took 7/3 hours to fill the tank. The leak can drain all the water of the tank in:",
A:"13/3 hours",
B:"7 hours",
C:"8 hours",
D:"14 hours",
Ans:"14 hours"
},
{
    Q:"Two pipes A and B can fill a cistern in 37.5 minutes and 45 minutes respectively.Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:",
    A:"5 min",
    B:"9 min",
    C:"10 min",
    D:"15 min",
    Ans:"9 min"
},
{
    Q:"A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe is:",
    A:"6 hours",
    B:"10 hours",
    C:"15 hours",
    D:"30 hours",
    Ans:"15 hours"
},
{
    Q:"Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is:",
    A:"60 gallons",
    B:"100 gallons",
    C:"120 gallons",
    D:"180 gallons",
    Ans:"120 gallons"
},
{
    Q:"A tank is filled in 5 hours by three pipes A, B and C. The pipe C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank?",
    A:"20 hours",
    B:"25 hours",
    C:"35 hours",
    D:"Cannot be determined",
    Ans:"35 hours"
},
{
    Q:"Two pipes A and B together can fill a cistern in 4 hours. Had they been opened separately, then B would have taken 6 hours more than A to fill the cistern. How much time will be taken by A to fill the cistern separately?",
    A:"1 hour",
    B:"2 hours",
    C:"6 hours",
    D:"8 hours",
    Ans:"6 hours"
},
{
    Q:"Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank?",
    A:"12 min",
    B:"15 min",
    C:"25 min",
    D:"50 min",
    Ans:"12 min"
},
{
    Q:"Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank?",
    A:"10 min 20 sec",
    B:"11 min 45 sec",
    C:"12 min 30 sec",
    D:"14 min 40 sec",
    Ans:"14 min 40 sec"
}]
let timer1=document.getElementById("timer");
var counter=0;
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
                    var name="pipes.html";
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