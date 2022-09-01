// const initialize= () => {
 
//     let submit =document.getElementById("get_questions")
//     submit.addEventListener("submit", (e)=> {
//         e.preventDefault();
//         const input=document.getElementById('input_section');

//         fetch(`http://localhost:3000/results/${input.value}`)
//         .then((res) => res.json())
//         .then((data) => analyseData(data))
//     })  
// function analyseData(quizBank){
//     let h4=document.getElementById('header');
//     h4.innerHTML=quizBank.question;
// }
// }
// document.addEventListener("DOMContentLoaded", initialize)


// const input = document.getElementById('btn');
// input.addEventListener('click', function() {
//   alert('I was clicked!');
// });

const init = () => {
    const inputForm =document.getElementById('get_questions')
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.getElementById('input_section');
      fetch(`http://localhost:3000/results/${input.value}`)
      .then(response => response.json())
      .then(data => console.log(data));
    });
  
    // function analyseData(clothes){
//         const h4=document.getElementById('header')
//          h4.innerHTML=quizBank.question;
// li.innerHTML=`${results.question} ${results.question}`;
//         // ul.appendChild(li)
      
      
    //   }
    
    }
  
//   document.addEventListener('DOMContentLoaded', init);
  
  
  
  // document.getElementById('search_clothes').addEventListener('submit',searchClothes)
  // function fetchData(){
  //   fetch('http://localhost:3000/Clothes')
  // .then(resp=>resp.json())
  // .then(data=>searchClothes(data))
  // }
  // fetchData()
  
  // function searchClothes(){
  
  
  // }