'use strict';

const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const imgQ = document.querySelector("#imgQ");
var randomNumb;

fetch("/otazky/math/math.json")
    .then(response=>response.json())
    .then(data=>{
        randomNumb = Math.floor(Math.random() * 3);
        otazka = data[randomNumb];

        question.textContent=otazka.question;

        answer.addEventListener("submit", function(e){
          e.preventDefault();
          var value = answer.querySelector('input[type="text"]').value;

          value = value.replace(/,/g, '.');
          if(otazka.isPicture){
            imgQ.src = otazka.picture;
          }

          if(value==otazka.answer){
            console.log("spravne");
          }else{
            console.log("nespravne")
          }
        });
    })










