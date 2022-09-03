const initialize= () => {


    let submit =document.getElementById("form_input")
    submit.addEventListener("submit", (e)=> {
        e.preventDefault();
        const input=document.getElementById('input_section');

        fetch(`http://localhost:3000/Questions/${input.value}`)
        .then((res) => res.json())
        .then((data) => analyseData(data))
    })  
    
    let btn1;
    let btn2;
    let btn3;
    let btn4;

function analyseData(quizBank){

    let P = document.getElementById('header');
    P.innerHTML = quizBank.question
    let p1 = document.createElement('button')
    let p2=document.createElement('button')
    let p3=document.createElement('button')
    let p4=document.createElement('button')
    let answer=quizBank.correct;

    p1.innerHTML=quizBank.a;
    p2.innerHTML=quizBank.b
    p3.innerHTML=quizBank.c
    p4.innerHTML=quizBank.d

    P.appendChild(p1)
    P.appendChild(p2)
    P.appendChild(p3)
    P.appendChild(p4)
    

   
   function chooseAnswer(){

    p1.addEventListener("click", ()=>{
        btn1=p1.innerHTML;
    })

    p2.addEventListener("click", ()=>{
    btn2=p2.innerHTML; 
    })

   p3.addEventListener("click", ()=>{
    btn3=p3.innerHTML;
    // console.log(btn3)
   })
   p4.addEventListener("click", ()=>{
    btn4=p4.innerHTML;
    // console.log(btn4)
   })
    if(btn1 === answer || btn2 === answer || btn3 === answer ||btn4 === answer
        ){
        document.getElementById('answer').innerHTML='Correct Answer'
    }
    else{
        document.getElementById('answer').innerHTML="Incorrect Answer"
    }
   }
   chooseAnswer()
}

    

}

document.addEventListener("DOMContentLoaded", initialize)


