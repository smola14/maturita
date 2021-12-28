'use strict';

const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const mainIMG = document.querySelector("#mainIMG");
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

const otazky = [
  {
      "id": 1,
      "year": 2013,
      "picture" : "otazky/math/1.png",
      "answer": 12
  },
  {
      "id": 2,
      "year": 2013,
      "picture" : "otazky/math/2.png",
      "answer": 78.4
  },
  {
      "id": 3,
      "year": 2013,
      "picture" : "otazky/math/3.png",
      "answer": 47.75
  },
  {
      "id": 4,
      "year": 2013,
      "picture" : "otazky/math/4.png",
      "answer": 13
  },
  {
      "id": 5,
      "year": 2013,
      "picture" : "otazky/math/5.png",
      "answer": 47.75
  },
  {
      "id": 6,
      "year": 2013,
      "picture" : "otazky/math/6.png",
      "answer": 117.28
  },
  {
      "id": 7,
      "year": 2013,
      "picture" : "otazky/math/7.png",
      "answer": 4000
  },
  {
      "id": 8,
      "year": 2013,
      "picture" : "otazky/math/8.png",
      "answer": 8
  },
  {
      "id": 9,
      "year": 2013,
      "picture" : "otazky/math/9.png",
      "answer": 4
  },
  {
      "id": 10,
      "year": 2013,
      "picture" : "otazky/math/10.png",
      "answer": 2
  },
  {
      "id": 11,
      "year": 2013,
      "picture" : "otazky/math/11.png",
      "answer": 48
  },
  {
      "id": 12,
      "year": 2013,
      "picture" : "otazky/math/12.png",
      "answer": 47.75
  },
  {
      "id": 13,
      "year": 2013,
      "picture" : "otazky/math/13.png",
      "answer": 15.63,
  },
  {
      "id": 14,
      "year": 2013,
      "picture" : "otazky/math/14.png",
      "answer": -8
  },
  {
      "id": 15,
      "year": 2013,
      "picture" : "otazky/math/15.png",
      "answer": 3840,
  },
  {
      "id": 16,
      "year": 2013,
      "picture" : "otazky/math/16.png",
      "answer": 7,
  },
  {
      "id": 17,
      "year": 2013,
      "picture" : "otazky/math/17.png",
      "answer": 0
  },
  {
      "id": 18,
      "year": 2013,
      "picture" : "otazky/math/18.png",
      "answer": 123
  },
  {
      "id": 19,
      "year": 2013,
      "picture" : "otazky/math/19.png",
      "answer": 60
  },
  {
      "id": 20,
      "year": 2013,
      "picture" : "otazky/math/20.png",
      "answer": 568
  },
  {
      "id": 21,
      "year": 2013,
      "picture" : "otazky/math/21.png",
      "answer": "D"
  },
  {
      "id": 22,
      "year": 2013,
      "picture" : "otazky/math/22.png",
      "answer": "A"
  },
  {
      "id": 23,
      "year": 2013,
      "picture" : "otazky/math/23.png",
      "answer": "C"
  },
  {
      "id": 24,
      "year": 2013,
      "picture" : "otazky/math/24.png",
      "answer": "B"
  },
  {
      "id": 25,
      "year": 2013,
      "picture" : "otazky/math/25.png",
      "answer": "B"
  },
  {
      "id": 26,
      "year": 2013,
      "picture" : "otazky/math/26.png",
      "answer": "C"
  },
  {
      "id": 27,
      "year": 2013,
      "picture" : "otazky/math/27.png",
      "answer": "E"
  },
  {
      "id": 28,
      "year": 2013,
      "picture" : "otazky/math/28.png",
      "answer": "C"
  },
  {
      "id": 29,
      "year": 2013,
      "picture" : "otazky/math/29.png",
      "answer": "E"
  },
  {
      "id": 30,
      "year": 2013,
      "picture" : "otazky/math/30.png",
      "answer": "B"
  }

]

var randomNumb;
var otazka;
let opts;

function loadQuestion() {
    body.style.backgroundColor="white";
    randomNumb = Math.floor(Math.random() * 30);
    otazka = otazky[29];
    mainIMG.src = otazka.picture;
    if(otazka.id<21){
          
    }else{
        
    }
}

function showQuestion1_20(otazka){  
    (otazka.isPicture) ? img.src = otazka.picture : img.src = "";
    answer.innerHTML = "<div class='d-block'><input type='text' class='d-inline mx-1 rounded'><button class='btn btn-submit d-inline mx-1'>SUBMIT</button></div>";
}

function showQuestion21_30(otazka){
    (otazka.isOptPicture) ? innerOptions(true) : innerOptions(false);
    (otazka.isPicture) ? img.src = otazka.picture : img.src = "";
}

answer.addEventListener("submit", function(e){
    e.preventDefault();
    if(e.submitter.textContent=="A" || e.submitter.textContent=="B" || e.submitter.textContent=="C" || e.submitter.textContent=="D" || e.submitter.textContent=="E"){
        if(otazka.answer==e.submitter.textContent){
            (otazka.isOptPicture) ? innerOptions(true) : innerOptions(false);
            buttonAnswerC(e.submitter.textContent,"lightgreen");
        }else{
            (otazka.isOptPicture) ? innerOptions(true) : innerOptions(false);
            buttonAnswerC(e.submitter.textContent,"red");
        }
    }else{
        var value = answer.querySelector('input[type="text"]').value;
        value = value.replace(/,/g, '.');
        if(otazka.answer==value){
            inputAnswerC("lightgreen");
        }else{
            inputAnswerC("red");
        }
    }
})

function innerOptions(odpo){
    if(odpo){
        answer.innerHTML = "<div class='d-block'><button class='btn btn-A m-2'>A</button><img src="+otazka.option1+" class='img-fluid'></div><div class='d-block'><button class='btn btn-B m-2'>B</button><img src="+otazka.option2+" class='img-fluid'></div><div class='d-block'><button class='btn btn-C m-2'>C</button><img src="+otazka.option3+" class='img-fluid'></div><div class='d-block'><button class='btn btn-D m-2'>D</button><img src="+otazka.option4+" class='img-fluid'></div><div class='d-block'><button class='btn btn-E m-2'>E</button><img src="+otazka.option5+" class='img-fluid'><div>";
    }else{
        answer.innerHTML = "<div class='d-block my-3'><button class='btn btn-A mx-3'>A</button><span id='opt-1'>"+ otazka.option1 +"</span></div><div class='d-block my-3'><button class='btn btn-B mx-3'>B</button><span id='opt-2'>"+ otazka.option2 +"</span></div><div class='d-block my-3'><button class='btn btn-C mx-3'>C</button><span id='opt-3'>"+ otazka.option3 +"</span></div><div class='d-block my-3'><button class='btn btn-D mx-3'>D</button><span id='opt-4'>"+ otazka.option4 +"</span></div><div class='d-block my-3'><button class='btn btn-E mx-3'>E</button><span id='opt-5'>"+ otazka.option5+"</span><div>";
        document.querySelector("#opt-1").textContent = otazka.option1;
        renderMathInElement(document.querySelector("#opt-1"), opts);
        document.querySelector("#opt-2").textContent = otazka.option2;
        renderMathInElement(document.querySelector("#opt-2"), opts); 
        document.querySelector("#opt-3").textContent = otazka.option3;
        renderMathInElement(document.querySelector("#opt-3"), opts); 
        document.querySelector("#opt-4").textContent = otazka.option4;
        renderMathInElement(document.querySelector("#opt-4"), opts); 
        document.querySelector("#opt-5").textContent = otazka.option5;
        renderMathInElement(document.querySelector("#opt-5"), opts); 
    }
}

function buttonAnswerC(pismenko,farba){
    var buttonColor = ".btn-"+pismenko;
    document.querySelector(buttonColor).style.backgroundColor = farba;
}

function inputAnswerC(farba){
    answer.querySelector('input[type="text"]').style.backgroundColor = farba;
}







