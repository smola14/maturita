'use strict';

const question = document.querySelector("#question");
const answer = document.querySelector("#answer");


function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
  }

fetch("math.json")
    .then(response=>response.json())
    .then(data=>{
        question.textContent=data[1].id+'. '+data[1].question;
    })










