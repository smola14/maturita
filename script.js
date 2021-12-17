'use strict';

const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const imgQ = document.querySelector("#imgQ");
const h4 = document.querySelector("h4");
const input = document.querySelector("input");
const kontakt = document.querySelector(".kontakt");
const body = document.querySelector("body");

var randomNumb;
var otazka;

fetch("/otazky/math/math.json")
    .then(response=>response.json())
    .then(data=>{
        randomNumb = Math.floor(Math.random() * 30);
        otazka = data[randomNumb];

        question.textContent=otazka.id + ". " + otazka.question;
        if(otazka.isPicture){
          imgQ.src = otazka.picture;
        }
        h4.textContent = otazka.options;

        answer.addEventListener("submit", function(e){
          e.preventDefault();
          var value = answer.querySelector('input[type="text"]').value;

          value = value.replace(/,/g, '.');

          if(value==otazka.answer){
            input.style.backgroundColor="green";
          }else{
            input.style.backgroundColor="red";
          }
        });

        kontakt.addEventListener("click", function(e){
          e.preventDefault();
          body.classList.toggle("blurry");
          if(body.classList.toggle("blurry")==true){
            body.addEventListener("click",function(e){
              e.preventDefault();
              body.classList.toggle("blurry");
            })
          }
        });
    })










