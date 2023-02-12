let timer1=document.getElementById("timer");
var counter=0;
let restart=document.getElementById("restart");
restart.addEventListener('click',()=>
{
    alert("Are you sure you want to restart the test?")
    window.location.href="profitloss.html";
})
let arr=[{
Q:"Alfred buys an old scooter for Rs. 4700 and spends Rs. 800 on its repairs. If he sells the scooter for Rs. 5800, his gain percent is:",
A:"32/7 %",
B:"60/11 %",
C:"10%",
D:"12%",
Ans:"60/11 %"

},
{
Q:"The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
A:"15",
B:"16",
C:"18",
D:"25",
Ans:"16"
},
{
//Q:"Pipes A and B can fill a tank in 5 and 6 hours respectively. Pipe C can empty it in 12 hours. If all the three pipes are opened together, then the tank will be filled in:",
Q:"If selling price is doubled, the profit triples.Find the profit percent.",
A:"100",
B:"200",
C:"300",
D:"400",
Ans:"100"
},
{
    Q:"In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?",
    A:"30%",
    B:"70%",
    C:"20%",
    D:"90%",
    Ans:"70%"
},
{
    Q:"A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
    A:"3",
    B:"4",
    C:"5",
    D:"6",
    Ans:"5"
},
{
    Q:"The percentage profit earned by selling an article for Rs. 1920 is equal to the percentage loss incurred by selling the same article for Rs. 1280. At what price should the article be sold to make 25% profit?",
    A:"2000",
    B:"4000",
    C:"3000",
    D:"None of these",
    Ans:"2000"
},
{
    Q:"A shopkeeper expects a gain of 22.5% on his cost price. If in a week, his sale was of Rs. 392, what was his profit?",
    A:"Rs. 18.20",
    B:"Rs. 70",
    C:"Rs. 72",
    D:"Rs. 88.25",
    Ans:"Rs. 72"
},
{
    Q:"A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?",
    A:"Rs. 1180",
    B:"Rs. 1190",
    C:"Rs. 1100",
    D:"Rs. 1005",
    Ans:"Rs. 1190"
},
{
    Q:"Sam purchased 20 dozens of toys at the rate of Rs. 375 per dozen. He sold each one of them at the rate of Rs. 33. What was his percentage profit?",
    A:"5.6",
    B:"3.5",
    C:"4.5",
    D:"6.5",
    Ans:"5.6"
},
{
    Q:"Some articles were bought at 6 articles for Rs. 5 and sold at 5 articles for Rs. 6. Gain percent is:",
    A:"10%",
    B:"11%",
    C:"12%",
    D:"44%",
    Ans:"44%"
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
                    var name="profitloss.html";
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