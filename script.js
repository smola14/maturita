'use strict';

const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const imgQ = document.querySelector("#imgQ");
var randomNumb;
var otazka;

fetch("/otazky/math/math.json")
    .then(response=>response.json())
    .then(data=>{
        // randomNumb = Math.floor(Math.random() * 3);
        randomNumb = 4;
        otazka = data[randomNumb];

        question.textContent=otazka.question;
        if(otazka.isPicture){
          imgQ.src = "kokot";
        }

        answer.addEventListener("submit", function(e){
          e.preventDefault();
          var value = answer.querySelector('input[type="text"]').value;

          value = value.replace(/,/g, '.');

          if(value==otazka.answer){
            console.log("spravne");
          }else{
            console.log("nespravne")
          }
        });
    })










