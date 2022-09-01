document.addEventListener("DOMContentLoaded", () => {
 
    document.getElementById("get_questions").addEventListener("submit", (event)=> {
        event.preventDefault()
    
    })
    // const input=document.getElementById('helpId')
        fetch("http://localhost:3000/results")
        .then((res) => res.json())
        .then((data) => analyseData(data))
    
})
function analyseData(quizBank){
    quizBank.forEach(quiz=>{
    let div=document.getElementByClassName('question');
    let h4=document.createElement('h4')
    div.appendChild(h4)
    h4.innerHTML=quiz.question;
})


}