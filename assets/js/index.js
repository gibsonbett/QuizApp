document.addEventListener("DOMContentLoaded", () => {
 
    document.getElementById("get_questions")
    submit.addEventListener("submit", (event)=> {
        event.preventDefault()
        getQuiz(event.target.value)
    })


})