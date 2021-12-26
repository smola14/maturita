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
  answer.innerHTML = "<button class='btn btn-A mx-2'>A</button>"+ otazka.option1 +"<button class='btn btn-B mx-2'>B</button>"+ otazka.option2 +"<button class='btn btn-C mx-2'>C</button>"+ otazka.option3 +"<button class='btn btn-D mx-2'>D</button>"+ otazka.option4 +"<button class='btn btn-E mx-2'>E</button>"+ otazka.option5;
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






