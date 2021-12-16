'use strict';

const question = document.querySelector("#question");
const answer = document.querySelector("#answer");


fetch("math.json")
    .then(response=>response.json())
    .then(data=>{
        question.textContent=data[Math.floor(Math.random() * 3)].question;

        answer.addEventListener("submit", function(e){
          e.preventDefault();
          const value = answer.querySelector('input[type="text"]').value;
          if(value==data[0].answer){
            console.log("spravne");
          }else{
            console.log("nespravne")
          }
        });
    })










