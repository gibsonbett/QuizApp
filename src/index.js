const initialize= () => {
    // question.document.addEventListener("DOMContentLoaded", initialize)
    // const question = document.getElementById("question")

    // function iterateFunction(objQn){
    //     for (let i = 0; i < objQn.length; i++){
            

    //     }
    // }

    let submit =document.getElementById("form_input")
    submit.addEventListener("submit", (e)=> {
        e.preventDefault();
        const input=document.getElementById('input_section');

        fetch(`http://localhost:3000/Questions/${input.value}`)
        .then((res) => res.json())
        .then((data) => analyseData(data))
    })  
function analyseData(quizBank){
    let P = document.getElementById('header');
    P.innerHTML = quizBank.question;
    let p1 = document.createElement('button')
    let p2=document.createElement('button')
    let p3=document.createElement('button')
    let p4=document.createElement('button')
    p1.innerHTML=quizBank.a;
    p2.innerHTML=quizBank.b
    p3.innerHTML=quizBank.c
    p4.innerHTML=quizBank.d
    P.appendChild(p1)
    P.appendChild(p2)
    P.appendChild(p3)
    P.appendChild(p4)


    

}
}
document.addEventListener("DOMContentLoaded", initialize)


// // const input = document.getElementById('btn');
// // input.addEventListener('click', function() {
// //   alert('I was clicked!');
// // });

// const init = () => {
//     const inputForm =document.getElementById('get_questions')
  
//     inputForm.addEventListener('submit', (event) => {
//       event.preventDefault();
//       const input = document.getElementById('input_section');
//       fetch(`http://localhost:3000/results/${input.value}`)
//       .then(response => response.json())
//       .then(data => console.log(data));
//     });
  
//     // function analyseData(clothes){
// //         const h4=document.getElementById('header')
// //          h4.innerHTML=quizBank.question;
// // li.innerHTML=`${results.question} ${results.question}`;
// //         // ul.appendChild(li)
      
      
//     //   }
    
//     }
  
// //   document.addEventListener('DOMContentLoaded', init);
  
  
  
//   // document.getElementById('search_clothes').addEventListener('submit',searchClothes)
//   // function fetchData(){
//   //   fetch('http://localhost:3000/Clothes')
//   // .then(resp=>resp.json())
//   // .then(data=>searchClothes(data))
//   // }
//   // fetchData()
  
//   // function searchClothes(){
  
  
//   }
