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

function showQuestion21_30(otazka){
  question.textContent = otazka.question;
  (otazka.isPicture) ? img.src = otazka.picture : img.src = "";
  options.textContent = otazka.options;
  answer.innerHTML = "<button class='btn'>A</button><br><button class='btn'>B</button><br><button class='btn'>C</button><br><button class='btn'>D</button><br><button class='btn'>E</button>";
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









