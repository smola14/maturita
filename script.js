'use strict';

const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const img = document.querySelector("#imgQ");
const input = document.querySelector("input");
const kontakt = document.querySelector(".kontakt");
const main = document.querySelector(".main");
const contactForm = document.querySelector("#form-contact");
const reload = document.querySelector(".btn-reload");
const submit = document.querySelector(".btn-submit");
const year = document.querySelector("#year");
const submitting = document.querySelector(".submitting");
const options = document.querySelector("#options");
const body = document.querySelector("body");
const btn = document.querySelectorAll(".btn");
const btnA = document.querySelector(".btn-A");
const btnB = document.querySelector(".btn-B");
const btnC = document.querySelector(".btn-C");
const btnD = document.querySelector(".btn-D");
const btnE = document.querySelector(".btn-E");
const container = document.querySelector(".container");

var randomNumb;
var otazka;

fetch("/otazky/math/math.json")
    .then(response=>response.json())
    .then(data=>{      
      randomNumb = Math.floor(Math.random() * 30);
      otazka = data[randomNumb];
      (otazka.id<21) ? showQuestion1_20(otazka) : showQuestion21_30(otazka);
    
      reload.addEventListener("click", function(e){
        e.preventDefault();
        body.style.backgroundColor="white";
        randomNumb = Math.floor(Math.random() * 30);
        otazka = data[randomNumb];
        if(otazka.id<21){
          showQuestion1_20(otazka);
        }else{
          showQuestion21_30(otazka);
        }
      });
    });

function showQuestion1_20(otazka){
  question.textContent = otazka.year+" "+ otazka.id + '. ' + otazka.question;
  (otazka.isPicture) ? img.src = otazka.picture : img.src = "";
  answer.innerHTML = "<input type='text'><button class='btn btn-submit'>submit</button>";
}

function showQuestion21_30(otazka){
  question.textContent = otazka.year+" "+ otazka.id + '. ' + otazka.question;
  (otazka.isPicture) ? img.src = otazka.picture : img.src = "";
  answer.innerHTML = "<div class='d-block'><button class='btn btn-A m-2'>A</button>"+ otazka.option1 +"</div><div class='d-block'><button class='btn btn-B m-2'>B</button>"+ otazka.option2 +"</div><div class='d-block'><button class='btn btn-C m-2'>C</button>"+ otazka.option3 +"</div><div class='d-block'><button class='btn btn-D m-2'>D</button>"+ otazka.option4 +"</div><div class='d-block'><button class='btn btn-E m-2'>E</button>"+ otazka.option5+"<div>";
}

answer.addEventListener("submit", function(e){
  e.preventDefault();
  if(e.submitter.textContent=="A" || e.submitter.textContent=="B" || e.submitter.textContent=="C" || e.submitter.textContent=="D" || e.submitter.textContent=="E"){
    if(otazka.answer==e.submitter.textContent){
      rightAnswer();
    }else{
      wrongAnswer();
    }
  }else{
    var value = answer.querySelector('input[type="text"]').value;
    value = value.replace(/,/g, '.');
    if(otazka.answer==value){
      rightAnswer();
    }else{
      wrongAnswer();
    }
  }
})

function rightAnswer(){
  body.style.backgroundColor="green";
}

function wrongAnswer(){
  body.style.backgroundColor="red";
}

const otazky = {
  "id": 30,
  "year": 2013,
  "question": "When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$",
  "answer": 47.75
}




