'use strict';

const question = document.querySelector("#question");
const answer = document.querySelector("#answer");


fetch("math.json")
    .then(response=>response.json())
    .then(data=>{
        question.textContent=data[0].question;
    })

answer.addEventListener("submit", function(e){
  e.preventDefault();
  const value = answer.querySelector('input[type="text"]').value;
  if(value==3){
    console.log("spravne");
  }else{
    console.log("nespravne")
  }
});









