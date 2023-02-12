let timer1=document.getElementById("timer");
var counter=0;
let restart=document.getElementById("restart");
restart.addEventListener('click',()=>
{
    alert("Are you sure you want to restart the test?")
    window.location.href="ages.html";
})
let arr=[{
Q:"Father is aged three times more than his son Ronit. After 8 years, he would be two and a half times of Ronit's age. After further 8 years, how many times would he be of Ronit's age?",
A:"2 times",
B:"2.5 times",
C:"11/4 times",
D:"3 times",
Ans:"2 times"

},
{
Q:"The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
A:"4 years",
B:"8 years",
C:"10 years",
D:"None of these",
Ans:"4 years"
},
{
//Q:"Pipes A and B can fill a tank in 5 and 6 hours respectively. Pipe C can empty it in 12 hours. If all the three pipes are opened together, then the tank will be filled in:",
Q:"A father said to his son that hw was as old as he is at the present at the time of his birth. If the father's age is 38 years now, the son's age five years back was:",
A:"14 years",
B:"19 years",
C:"38 years",
D:"40 years",
Ans:"14 years"
},
{
    Q:"Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?",
    A:"24",
    B:"27",
    C:"40",
    D:"Cannot be determined",
    Ans:"24"
},
{
    Q:"A man is 24 years older than his son. In two years, his age will be twice the age of his son. The present age of his son is:",
    A:"14 years",
    B:"18 years",
    C:"22 years",
    D:"30 years",
    Ans:"22 years"
},
{
    Q:"Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11 : 10. What is Sagar's age at present?",
    A:"16 years",
    B:"18 years",
    C:"14 years",
    D:"None of these",
    Ans:"16 years"
},
{
    Q:"The sum of the present ages of a father and his son is 60 years. Six years ago, father's age was five times the age of the son. After 6 years, son's age will be:",
    A:"12 years",
    B:"14 years",
    C:"16 years",
    D:"20 years",
    Ans:"20 years"
},
{
    Q:"At present, the ratio between the ages of Arun and Deepak is 4 : 3. After 6 years, Arun's age will be 26 years. What is the age of Deepak at present ?",
    A:"12 years",
    B:"15 years",
    C:"19.5 years",
    D:"20 years",
    Ans:"15 years"
},
{
    Q:"Sachin is younger than Rahul by 7 years. If their ages are in the respective ratio of 7 : 9, how old is Sachin?",
    A:"12 years",
    B:"13 years",
    C:"10.5 years",
    D:"24.5 years",
    Ans:"24.5 years"
},
{
    Q:"The present ages of three persons in proportions 4 : 7 : 9. Eight years ago, the sum of their ages was 56. Find their present ages (in years).",
    A:"16 18 36",
    B:"14 15 31",
    C:"10 28 30",
    D:"None of these",
    Ans:"16 18 36"
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
    var max=100;
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
                    var name="ages.html";
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
