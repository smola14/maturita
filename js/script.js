'use strict';


const answer = document.querySelector("#answer");
const mainIMG = document.querySelector("#mainIMG");
const input = document.querySelector("input");
const main = document.querySelector(".main");
const reload = document.querySelector(".btn-reload");
const submit = document.querySelector(".btn-submit");
const submitting = document.querySelector(".submitting");
const body = document.querySelector("body");
const btn = document.querySelectorAll(".btn");
const container = document.querySelector(".container");
const userNumber = document.querySelector(".userNumber");
const inputSubmit = document.querySelector(".inputSubmit");
const rokCisloP = document.querySelector("#rokCisloP");
const btnClear = document.querySelector(".btn-clear");
const btnBack = document.querySelector(".btn-back");
const lineWidth = document.querySelector("#lineWidth");

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

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
  },
  {
      "id": 31,
      "year": 2019,
      "picture" : "otazky/math/31.png",
      "answer": 7.5
  },
  {
      "id": 32,
      "year": 2019,
      "picture" : "otazky/math/32.png",
      "answer": 55
  },
  {
      "id": 33,
      "year": 2019,
      "picture" : "otazky/math/33.png",
      "answer": -4
  },
  {
      "id": 34,
      "year": 2019,
      "picture" : "otazky/math/34.png",
      "answer": 8
  },
  {
      "id": 35,
      "year": 2019,
      "picture" : "otazky/math/35.png",
      "answer": 48
  },
  {
      "id": 36,
      "year": 2019,
      "picture" : "otazky/math/36.png",
      "answer": 891
  },
  {
      "id": 37,
      "year": 2019,
      "picture" : "otazky/math/37.png",
      "answer": 25
  },
  {
      "id": 38,
      "year": 2019,
      "picture" : "otazky/math/38.png",
      "answer": 2
  },
  {
      "id": 39,
      "year": 2019,
      "picture" : "otazky/math/39.png",
      "answer": 1.5
  },
  {
      "id": 40,
      "year": 2019,
      "picture" : "otazky/math/40.png",
      "answer": 1.2
  },
  {
      "id": 41,
      "year": 2019,
      "picture" : "otazky/math/41.png",
      "answer": 279.75
  },
  {
      "id": 42,
      "year": 2019,
      "picture" : "otazky/math/42.png",
      "answer": 52.5
  },
  {
      "id": 43,
      "year": 2019,
      "picture" : "otazky/math/43.png",
      "answer": 3
  },
  {
      "id": 44,
      "year": 2019,
      "picture" : "otazky/math/44.png",
      "answer": 25.56
  },
  {
      "id": 45,
      "year": 2019,
      "picture" : "otazky/math/45.png",
      "answer": 2
  },
  {
      "id": 46,
      "year": 2019,
      "picture" : "otazky/math/46.png",
      "answer": 53.13
  },
  {
      "id": 47,
      "year": 2019,
      "picture" : "otazky/math/47.png",
      "answer": 4
  },
  {
      "id": 48,
      "year": 2019,
      "picture" : "otazky/math/48.png",
      "answer": 2.48
  },
  {
      "id": 49,
      "year": 2019,
      "picture" : "otazky/math/49.png",
      "answer": 36.31
  },
  {
      "id": 50,
      "year": 2019,
      "picture" : "otazky/math/50.png",
      "answer": 0.13
  },
  {
      "id": 51,
      "year": 2019,
      "picture" : "otazky/math/51.png",
      "answer": "D"
  },
  {
      "id": 52,
      "year": 2019,
      "picture" : "otazky/math/52.png",
      "answer": "A"
  },
  {
      "id": 53,
      "year": 2019,
      "picture" : "otazky/math/53.png",
      "answer": "B"
  },
  {
      "id": 54,
      "year": 2019,
      "picture" : "otazky/math/54.png",
      "answer": "C"
  },
  {
      "id": 55,
      "year": 2019,
      "picture" : "otazky/math/55.png",
      "answer": "D"
  },
  {
      "id": 56,
      "year": 2019,
      "picture" : "otazky/math/56.png",
      "answer": "C"
  },
  {
      "id": 57,
      "year": 2019,
      "picture" : "otazky/math/57.png",
      "answer": "B"
  },
  {
      "id": 58,
      "year": 2019,
      "picture" : "otazky/math/58.png",
      "answer": "E"
  },
  {
      "id": 59,
      "year": 2019,
      "picture" : "otazky/math/59.png",
      "answer": "E"
  },
  {
      "id": 60,
      "year": 2019,
      "picture" : "otazky/math/60.png",
      "answer": "A"
  }

]


var randomNumb;
var otazka;
let opts;

function loadQuestion() {
    body.style.backgroundColor="white";
    body.style.backgroundImage = "radial-gradient(darkgray 7%, transparent 1%),radial-gradient(#fafafa 7%, transparent 1%)";
    randomNumb = Math.floor(Math.random() * 60);
    otazka = otazky[randomNumb];
    mainIMG.src = otazka.picture;
    rokCisloP.innerHTML = "<strong>"+otazka.id+". príklad</strong>";
    clearCanvas(); 
    if(otazka.id<21 || otazka.id > 30 && otazka.id<51){
        answer.innerHTML="<input type='text' class='inputSubmit shadow rounded mx-1'><button class='btn btn-submit rounded mx-1'>Odpovedať</button>";      
    }else{
        answer.innerHTML="<button class='btn btn-A mx-2'>A</button><button class='btn btn-B mx-2'>B</button><button class='btn btn-C mx-2'>C</button><button class='btn btn-D mx-2'>D</button><button class='btn btn-E mx-2'>E</button>"; 
    }
}

answer.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(e);
    if(e.submitter.textContent=="A" || e.submitter.textContent=="B" || e.submitter.textContent=="C" || e.submitter.textContent=="D" || e.submitter.textContent=="E"){
        if(otazka.answer==e.submitter.textContent){
            buttonAnswerC(e.submitter.textContent,"#77dd77");
        }else{
            buttonAnswerC(e.submitter.textContent,"#FF6961");
        }
    }else{
        var value = answer.querySelector('input[type="text"]').value;
        value = value.replace(/,/g, '.');
        console.log(value,otazka.answer)
        if(otazka.answer==value){
            inputAnswerC("#77dd77");
        }else{
            inputAnswerC("#FF6961");
        }
    }
})

userNumber.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        otazka = otazky[(userNumber.value)-1];
        mainIMG.src = otazka.picture;
        clearCanvas();      
        rokCisloP.innerHTML = "<strong>"+otazka.id+". príklad</strong>";
        if(otazka.id<21 || otazka.id > 30 && otazka.id<51){
            answer.innerHTML="<input type='text' class='inputSubmit shadow rounded mx-1'><button class='btn btn-submit rounded mx-1'>Odpovedať</button>";     
        }else{
            answer.innerHTML="<button class='btn btn-A mx-2'>A</button><button class='btn btn-B mx-2'>B</button><button class='btn btn-C mx-2'>C</button><button class='btn btn-D mx-2'>D</button><button class='btn btn-E mx-2'>E</button>"; 
        }
        userNumber.placeholder="Číslo príkladu 1-60";
        userNumber.value="";
    }
});

function buttonAnswerC(pismenko,farba){
    var buttonColor = ".btn-"+pismenko;
    document.querySelector(buttonColor).style.backgroundColor = farba;
    body.style.backgroundImage = "radial-gradient("+farba+" 7%, transparent 1%),radial-gradient(#fafafa 7%, transparent 1%)";
}

function inputAnswerC(farba){
    answer.querySelector(".inputSubmit").style.border = "2px solid "+farba;
    body.style.backgroundImage = "radial-gradient("+farba+" 7%, transparent 1%),radial-gradient(#fafafa 7%, transparent 1%)";
}


window.addEventListener("load", () => {
    canvas.height = window.innerHeight*0.85;
    canvas.width = window.innerWidth*0.85;  
    //resize
    window.addEventListener("resize", () => {
        canvas.height = window.innerHeight*0.85;
        canvas.width = window.innerWidth*0.85;
    })

    //variables
    let painting = false

    function startPosition(){
        painting = true;
    }

    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e){
        if(!painting) return;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX,e.clientY);
    }
    //eventlisteners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
});

btnClear.addEventListener("click", function(){
    clearCanvas(); 
});

function clearCanvas(){
    ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height); 
};

lineWidth.addEventListener("change", function(){
    ctx.lineWidth = lineWidth.value;
});

function farbaLine(farba){
    ctx.strokeStyle = farba;
}
