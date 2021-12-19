'use strict';

const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const imgQ = document.querySelector("#imgQ");
const h4 = document.querySelector("h4");
const input = document.querySelector("input");
const kontakt = document.querySelector(".kontakt");
const main = document.querySelector(".main");
const contactForm = document.querySelector("#form-contact");
const reload = document.querySelector(".btn-reload");
const submit = document.querySelector(".btn-submit");
const year = document.querySelector("#year");

var randomNumb;
var otazka;

fetch("/otazky/math/math.json")
    .then(response=>response.json())
    .then(data=>{
        randomNumb = Math.floor(Math.random() * 30);
        otazka = data[randomNumb];

        showQuestion(otazka);

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

        reload.addEventListener("click", function(e){
          e.preventDefault();
          randomNumb = Math.floor(Math.random() * 30);
          otazka = data[randomNumb];
          showQuestion(otazka);
          answer.querySelector('input[type="text"]').value = '';
          input.style.backgroundColor="lightgray";
        });
      })
function showQuestion(otazka){
  year.textContent = otazka.year;
  console.log(year.textContent);
  question.textContent=otazka.id + ". " + otazka.question;
  if(otazka.isPicture){
    imgQ.src = otazka.picture;
  }else{
    imgQ.src = "";
  }
  h4.textContent = otazka.options;
}

window.addEventListener("load", ()=>{
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  
  let painting = false;

  function startPosition(){
    painting = true;
  }
  function finishedPosition(){
    painting = false;
  }
  function draw(e){
    if(!painting) return;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  }

  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
});







