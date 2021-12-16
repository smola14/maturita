'use strict';

const question = document.querySelector("#question");


fetch("math.json")
    .then(response=>response.json())
    .then(data=>{
        question.textContent=data[0].question;
    })










