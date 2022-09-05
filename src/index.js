 // wite a function that will load content on the DOM
const initialize= () => {
 
    // write a function that fetchs questions from the local server
    function fetchQuestions(){
    
    let submit =document.getElementById("form_input")
    submit.addEventListener("submit", (e)=> {
        e.preventDefault();
        const input=document.getElementById('input_section');

        fetch(`http://localhost:3000/Questions/${input.value}`)
        .then((res) => res.json())
        .then((data) => setQuestion(data))
    })  

    }fetchQuestions()

    let btn1;
    let btn2;
    let btn3;
    let btn4;

    btn1.addEventListener("click",chooseAnswer)
    btn2.addEventListener("click", chooseAnswer)
    btn3.addEventListener("click", chooseAnswer)
    btn4.addEventListener("click", chooseAnswer)
   
    btn1=choice1.innerHTML
    btn2=choice2.innerHTML
    btn3=choice3.innerHTML;
    btn4=choice4.innerHTML;

// write a function that displays questions on the DOM when user clicks the submit button
    function setQuestion(quizBank){

    let allChoices = document.getElementById('header');
    allChoices.innerHTML = quizBank.question

    let choice1 = document.createElement('button')
    choice1.setAttribute('id','choice1')

    let choice2=document.createElement('button')
    choice2.setAttribute('id','choice2')

    let choice3=document.createElement('button')
    choice3.setAttribute('id','choice3')

    let choice4=document.createElement('button')
    choice4.setAttribute('id','choice4')

    let answer=quizBank.correct;

    choice1.innerHTML=quizBank.a;
    choice2.innerHTML=quizBank.b
    choice3.innerHTML=quizBank.c
    choice4.innerHTML=quizBank.d

    allChoices.appendChild(choice1)
    allChoices.appendChild(choice2)
    allChoices.appendChild(choice3)
    allChoices.appendChild(choice4)

   
//  write a function that enables users choose answers and display them in the DOM
   function chooseAnswer(){
    
    if(btn1 === answer && btn2 === answer && btn3 === answer && btn4 === answer
        ){
        document.getElementById('answer').innerHTML='Correct Answer'
    }
    else{
        document.getElementById('answer').innerHTML="Incorrect Answer"
    }
    document.getElementById("form_input").reset()
   }


   chooseAnswer()
}

}
 document.addEventListener("DOMContentLoaded", initialize)

   
 



 
    document.getElementById("subscribeForm").addEventListener("submit", postComments)

    function postComments(e){
        e.preventDefault()

        let email= {
            email: e.target.subscribe.value
        }
        postToJson(email)
}
// write a function that adds comments to the server
function postToJson(user){
    fetch("http://localhost:3000/comments", {
        method: "POST",
        headers: {"Content-Type": "application/json",
        Accept: "application/json",
    },
         body: JSON.stringify(user)
    })
    .then(res=> res.json())
}