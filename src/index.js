document.addEventListener("DOMContentLoaded", () => {
 
    document.getElementById("get_questions")
    submit.addEventListener("submit", (event)=> {
        event.preventDefault()
        getQuiz(event.target.value)
    })

    function getQuiz( ){
        fetch("http://localhost:3000/results")
        .then((res) => res.json())
        .then((data) => console.log(data))
    }
})