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

var randomNumb;
var otazka;

fetch("/otazky/math/math.json")
    .then(response=>response.json())
    .then(data=>{
      randomNumb = Math.floor(Math.random() * 30);
      otazka = data[randomNumb];
      (otazka.id<21) ? showQuestion1_20(otazka) : showQuestion21_30(otazka);
    });

function showQuestion1_20(otazka){
  question.textContent = otazka.question;
  (otazka.isPicture) ? img.src = otazka.picture : img.src = "";
  answer.innerHTML = "<input type='text'><button class='btn btn-submit'>submit</button>";
}

// answer.addEventListener("submit", function(e){
//   e.preventDefault();
//   var value = answer.querySelector('input[type="text"]').value;
//   value = value.replace(/,/g, '.');
//   (otazka.answer == value) ? body.style.backgroundColor = "green" : body.style.backgroundColor="red";
// })

btnA.addEventListener("click", function(){
  btnA.textContent == otazka.answer ?  body.style.backgroundColor = "green" : body.style.backgroundColor="red";
})

btnB.addEventListener("click", function(){
  btnB.textContent == otazka.answer ?  body.style.backgroundColor = "green" : body.style.backgroundColor="red";
})

btnC.addEventListener("click", function(){
  btnC.textContent == otazka.answer ?  body.style.backgroundColor = "green" : body.style.backgroundColor="red";
})

btnD.addEventListener("click", function(){
  btnD.textContent == otazka.answer ?  body.style.backgroundColor = "green" : body.style.backgroundColor="red";
})

btnE.addEventListener("click", function(){
  btnW.textContent == otazka.answer ?  body.style.backgroundColor = "green" : body.style.backgroundColor="red";
})


function showQuestion21_30(otazka){
  question.textContent = otazka.question;
  (otazka.isPicture) ? img.src = otazka.picture : img.src = "";
  options.textContent = otazka.options;
  answer.innerHTML = "<button class='btn btn-A'>A</button><br><button class='btn btn-B'>B</button><br><button class='btn btn-C'>C</button><br><button class='btn btn-D'>D</button><br><button class='btn btn-E'>E</button>";
}



// fetch("/otazky/math/math.json")
//     .then(response=>response.json())
//     .then(data=>{
//         randomNumb = Math.floor(Math.random() * 30);
//         otazka = data[randomNumb];
//         if(otazka.id<21){
//           showQuestion1_20(otazka)
//         }else{
//           showQuestion21_30(otazka);
//         }

//         answer.addEventListener("submit", function(e){
//           e.preventDefault();
//           var value = answer.querySelector('input[type="text"]').value;

//           value = value.replace(/,/g, '.');

//           if(value==otazka.answer){
//             input.style.backgroundColor="green";
//           }else{
//             input.style.backgroundColor="red";
//           }
//         });

//         reload.addEventListener("click", function(e){
//           e.preventDefault();
//           randomNumb = Math.floor(Math.random() * 30);
//           otazka = data[randomNumb];
//           if(otazka.id<21){
//             showQuestion1_20(otazka);
//           }else{
//             showQuestion21_30(otazka);
//           }
//         });
//       })
// function showQuestion1_20(otazka){
//   year.textContent = otazka.year;
//   console.log(year.textContent);
//   question.textContent=otazka.id + ". " + otazka.question;
//   if(otazka.isPicture){
//     imgQ.src = otazka.picture;
//   }else{
//     imgQ.src = "";
//   }
//   submitting.innerHTML = "<input type='text'><button class='btn btn-submit'>submit</button>"
// }

// function showQuestion21_30(otazka){
//   year.textContent = otazka.year;
//   console.log(year.textContent);
//   question.textContent=otazka.id + ". " + otazka.question;
//   if(otazka.isPicture){
//     imgQ.src = otazka.picture;
//   }else{
//     imgQ.src = "";
//   }
//   submitting.innerHTML = "<h3>Options</h3>"
// }









