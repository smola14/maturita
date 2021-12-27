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

const otazky = [
  {
      "id": 1,
      "year": 2013,
      "question": "1. Päťnásobok neznámeho čísla zmenšený o \\(21\\) je práve toľko, koľko je dvojnásobok neznámeho čísla zväčšený o \\(15\\). Nájdite neznáme číslo.",
      "answer": 12
  },
  {
      "id": 2,
      "year": 2013,
      "question": "2. Nádrž tvaru kvádra má vnútorné rozmery vodorovného dna uvedené na obrázku. Hladina vody v nádrži siaha do výšky \\(980 cm\\). Koľko metrov kubických vody je v nádrži?",
      "isPicture": true,
      "picture" : "otazky/math/2.png",
      "answer": 78.4
  },
  {
      "id": 3,
      "year": 2013,
      "question": "3. Populácia mravcov vzrastie za jeden týždeň o \\(5%\\). Vypočítajte, o koľko percent vzrastie populácia mravcov takýmto tempom rastu za osem týždňov.",
      "answer": 47.75
  },
  {
      "id": 4,
      "year": 2013,
      "question": "4. Vypočítajte polomer kružnice k určenej rovnicou \\(x^2 + y^2 + 24x + 10y = 0\\)",
      "answer": 13
  },
  {
      "id": 5,
      "year": 2013,
      "question": "5. Na obrázku je znázornené vekové zloženie členov turistického krúžku. Zistite v rokoch medián veku členov turistického krúžku.",
      "isPicture":true,
      "picture": "otazky/math/5.png",
      "answer": 47.75
  },
  {
      "id": 6,
      "year": 2013,
      "question": "6. Dĺžky strán trojuholníka sú \\(3 cm\\), \\(4 cm\\) a \\(6 cm\\). Určte v stupňoch veľkosť tupého vnútorného uhla trojuholníka.",
      "isPicture":true,
      "picture": "otazky/math/6.png",
      "answer": 117.28
  },
  {
      "id": 7,
      "year": 2013,
      "question": "7. Presná hodnota čísla \\(17!\\) je \\(355 687 428 096 000\\). Hodnota čísla \\(17!\\) zobrazená po výpočte na kalkulačke je \\(3,556874281.10^14\\). Vypočítajte rozdiel hodnoty čísla \\(17!\\) zobrazenej na kalkulačke a presnej hodnoty čísla \\(17!\\).",
      "answer": 4000
  },
  {
      "id": 8,
      "year": 2013,
      "question": "8. V triede je \\(30\\) žiakov. Piati žiaci triedy mali na koncoročnom vysvedčení z matematiky trojku, ostatní žiaci triedy jednotku alebo dvojku. Priemer známok z matematiky všetkých žiakov triedy na koncoročnom vysvedčení bol \\(1,9\\). Zistite, koľko žiakov triedy malo na koncoročnom vysvedčení jednotku z matematiky.",
      "answer": 8
  },
  {
      "id": 9,
      "year": 2013,
      "question": "9. Graf lineárnej funkcie má smernicu \\(2\\), prechádza bodom A\\([2;8]\\) a súradnicovú os y pretína v bode B (pozrite obrázok). Určte vzdialenosť bodu B od začiatku súradnicovej sústavy O\\([0;0\\)].",
      "isPicture":true,
      "picture": "otazky/math/9.png",
      "answer": 4
  },
  {
      "id": 10,
      "year": 2013,
      "question": "10. Vypočítajte koreň rovnice \\(log x + log (x+3) = 1\\).",
      "answer": 2
  },
  {
      "id": 11,
      "year": 2013,
      "question": "11. Trojuholník ABC a trojuholník ADE sú podobné (pozrite obrázok). Vypočítajte v centimetroch štvorcových obsah trojuholníka ABC, ak dĺžka strany DE je \\(12 cm\\), dĺžka strany BC je \\(12 cm\\) a obsah trojuholníka ADE je \\(27 cm^2\\).",
      "isPicture":true,
      "picture": "otazky/math/11.png",
      "answer": 48
  },
  {
      "id": 12,
      "year": 2013,
      "question": "12. Dĺžky strán pravouhlého trojuholníka sú tri za sebou nasledujúce členy aritmetickej postupnosti. Dlhšia odvesna má dĺžku \\(24 cm\\). Vypočítajte v centimetroch dĺžku prepony trojuholníka.",
      "answer": 47.75
  },
  {
      "id": 13,
      "year": 2013,
      "question": "13. Dĺžka strany štvorca ABCD je \\(5 cm\\). Body E, F a G sú stredy strán štvorca (pozrite obrázok). Vypočítajte v centimetroch štvorcových obsah vyšrafovanej časti štvorca ABCD.",
      "answer": 15.63,
      "isPicture":true,
      "picture": "otazky/math/13.png"
  },
  {
      "id": 14,
      "year": 2013,
      "question": "14. Určte najmenšie celé číslo x, ktoré je riešením nerovnice \\(sqrt{17 - 15x - 2x^2}>\\) 0.",
      "answer": -8
  },
  {
      "id": 15,
      "year": 2013,
      "question": "15. V tabuľke je harmonogram sobotňajších tenisových tréningov mladších žiakov počas zimnej halovej sezóny. Pred začiatkom letnej sezóny sa pripravujenový harmonogram tréningov. Tomáš Kučera bude môcť trénovať len predpoludním,sestry Kováčové budú musieť trénovať v ľubovoľnom poradí za sebou. Ostatným žiakom vyhovujú všetky termíny. Koľko rôznych harmonogramov tenisových tréningov za uvedených podmienok je možné vytvoriť pre týchto osem žiakov?",
      "answer": 3840,
      "isPicture":true,
      "picture": "otazky/math/15.png"
  },
  {
      "id": 16,
      "year": 2013,
      "question": "16. Vo štvoruholníku ABCD s dĺžkami strán \\(|AB| = 9\\), \\(|BC| = 11\\) a \\(|CD| = 3\\) sú vnútorné uhly pri vrcholoch A a C pravé (pozrite obrázok). Určte dĺžku strany AD štvoruholníka ABCD.",
      "answer": 7,
      "isPicture":true,
      "picture": "otazky/math/16.png"
  },
  {
      "id": 17,
      "year": 2013,
      "question": "17. Ťažisko rovnostranného trojuholníka ABC leží v začiatku súradnicovej sústavy \\(O [0;0]\\) a vrchol C má súradnice \\([0;4]\\) . Vypočítajte súčet súradníc všetkých vrcholov trojuholníka ABC.",
      "answer": 0
  },
  {
      "id": 18,
      "year": 2013,
      "question": "18. Vandal vytrhol z knihy jeden list, na ktorom boli dve očíslované strany. Súčet čísel zvyšných strán knihy bol \\(7495\\) . Zistite, koľko očíslovaných strán mala pôvodne kniha, ak číslovanie strán knihy začalo číslom \\(1\\) .",
      "answer": 123
  },
  {
      "id": 19,
      "year": 2013,
      "question": "19. Obsah plášťa kužeľa je \\(4 cm^2\\), obsah podstavy kužeľa je \\(2 cm^2\\). Určte v stupňoch uhol(odchýlku) strany kužeľa a roviny podstavy kužeľa. (Strana kužeľa je úsečka spájajúca vrchol kužeľa s ľubovoľným bodom kružnice podstavy. Všetky strany kužeľa tvoria plášť kužeľa.)",
      "answer": 60
  },
  {
      "id": 20,
      "year": 2013,
      "question": "20. Určte najmenšie prirodzené číslo, ktorého súčin cifier je \\(240\\) .",
      "answer": 568
  },
  {
      "id": 21,
      "year": 2013,
      "question": "21. Určte počet koreňov rovnice \\(sin x = c/d\\) patriacich do intervalu \\((-570°; 570°)\\).",
      "option1": 3,
      "option2": 4,
      "option3": 5,
      "option4": 6,
      "option5": 7,
      "answer": "D"
  },
  {
      "id": 22,
      "year": 2013,
      "question": "22. Obvod a obsah kruhu sú vyjadrené rovnakým číslom \\(x cm\\) a \\(x cm^2\\). Určte v centimetroch priemer kruhu.",
      "option1": 4,
      "option2": 2,
      "option3": 1,
      "option4": "π",
      "option5": "4π",
      "answer": "A"
  },
  {
      "id": 23,
      "year": 2013,
      "question": "23. Simona má dva žreby, každý z inej lotérie. V prvej lotérii je \\(150 000\\) žrebov a z nich vyhráva \\(50 000\\)0, v druhej lotérii je \\(500 000\\) žrebov a z nich vyhráva \\(200 000\\) žrebov. Aká veľká je pravdepodobnosť, že vyhrá aspoň jeden Simonin žreb?",
      "option1": "1/3",
      "option2": "2/5",
      "option3": "3/5",
      "option4": "2/3",
      "option5": "11/15",
      "answer": "C"
  },
  {
      "id": 24,
      "year": 2013,
      "question": "24. Určte súradnice bodov, v ktorých sa pretínajú grafy funkcií \\(f(x) = x^2 + 2x - 14\\) a \\(g(x) = x - 2\\). Najväčšia zo súradníc priesečníkov grafov funkcií je",
      "option1": 2,
      "option2": 3,
      "option3": 4,
      "option4": 5,
      "option5": 6,
      "answer": "B"
  },
  {
      "id": 25,
      "year": 2013,
      "question": "25. Dĺžka hrany kocky ABCDEFGH je \\(4 cm\\). Vypočítajte povrch ihlana ABCDH.",
      "option1": "64/3 cm2",
      "option2": "32+16",
      "option3": 4,
      "option4": "96cm2",
      "option5": "36cm2",
      "answer": "B",
      "isPicture":true,
      "picture": "otazky/math/25.png"
  },
  {
      "id": 26,
      "year": 2013,
      "question": "26. Ak výrok B∧C je pravdivý a výrok B⇒A je nepravdivý, potom pre pravdivostnú hodnotu výrokov A, B, C platí:",
      "option1": "Výrok A je pravdivý, výrok B je pravdivý, výrok C je pravdivý",
      "option2": "Výrok A je pravdivý, výrok B je pravdivý, výrok C je nepravdivý",
      "option3": "Výrok A je nepravdivý, výrok B je pravdivý, výrok C je pravdivý",
      "option4": "Výrok A je pravdivý, výrok B je neavdivý, výrok C je pravdivý",
      "option5": "Výrok A je nepravdivý, výrok B je nepravdivý, výrok C je pravdivý",
      "answer": "C"
  },
  {
      "id": 27,
      "year": 2013,
      "question": "27. Dané sú fukncie \\(f_1\\) až \\(f_6\\). Vyberte možnost, v ktorej sú z daných funkcii \\(f_1\\) až \\(f_6\\) uvedené len všetky funkcie rastúce na celom svojom definičnom obore.",
      "option1": "f(1), f(6)",
      "option2": "f(2), f(4), f(5)",
      "option3": "f(2), f(3), f(4)",
      "option4": "f(3), f(4), f(5)",
      "option5": "f(4), f(5)",
      "isPicture" : true,
      "picture" : "otazky/math/27.png",
      "answer": "E"
  },
  {
      "id": 28,
      "year": 2013,
      "question": "28. Šperk je vyrobený tak, že pravidelný osemsten zo zlata je zaliaty do kocky zo skla(pozrite obrázok). Určte pomer objemu skla a objemu zlata v šperku.(Pravidelný osemsten je teleso, ktoré vznikne zjednotením dvoch zhodných pravidelných ihlanov so spoločnou štvorcovou podstavou. Steny ihlanov sú rovnostranné trojuholníky.)",
      "option1": "3:1",
      "option2": "4:1",
      "option3": "5:1",
      "option4": "6:1",
      "option5": "7:1",
      "isPicture" : true,
      "picture" : "otazky/math/28.png",
      "answer": "C"
  },
  {
      "id": 29,
      "year": 2013,
      "question": "29. Určte počet celých čísel, ktoré vyhovujú nerovnici \\(|x - 4| < 2π\\).",
      "option1": 9,
      "option2": 10,
      "option3": 11,
      "option4": 12,
      "option5": 13,
      "answer": "E"
  },
  {
      "id": 30,
      "year": 2013,
      "question": "30. Populácia mravcov vzrastie za jeden týždeň o 5%. Vypočítajte, o koľko percent vzrastie populácia mravcov takýmto tempom rastu za osem týždňov.",
      "answer": 47.75
  }

]

var randomNumb;
var otazka;
let opts;

function loadQuestion() {
  body.style.backgroundColor="white";
  randomNumb = Math.floor(Math.random() * 30);
  otazka = otazky[randomNumb];
  question.textContent = otazka.question; 
  renderMathInElement(question, opts);
  (otazka.id<21) ? showQuestion1_20(otazka) : showQuestion21_30(otazka);
}

function showQuestion1_20(otazka){  
  (otazka.isPicture) ? img.src = otazka.picture : img.src = "";
  answer.innerHTML = "<div class='d-block'><input type='text' class='d-inline mx-1'><button class='btn btn-submit d-inline mx-1'>SUBMIT</button></div>";
}

function showQuestion21_30(otazka){
  (otazka.isPicture) ? img.src = otazka.picture : img.src = "";
  answer.innerHTML = "<div class='d-block'><button class='btn btn-A m-2'>A</button><strong>"+ otazka.option1 +"</strong></div><div class='d-block'><button class='btn btn-B m-2'>B</button><strong>"+ otazka.option2 +"</strong></div><div class='d-block'><button class='btn btn-C m-2'>C</button><strong>"+ otazka.option3 +"</strong></div><div class='d-block'><button class='btn btn-D m-2'>D</button><strong>"+ otazka.option4 +"</strong></div><div class='d-block'><button class='btn btn-E m-2'>E</button><strong>"+ otazka.option5+"</strong><div>";
}

answer.addEventListener("submit", function(e){
  e.preventDefault();
  if(e.submitter.textContent=="A" || e.submitter.textContent=="B" || e.submitter.textContent=="C" || e.submitter.textContent=="D" || e.submitter.textContent=="E"){
    if(otazka.answer==e.submitter.textContent){
        answer.innerHTML = "<div class='d-block'><button class='btn btn-A m-2'>A</button><strong>"+ otazka.option1 +"</strong></div><div class='d-block'><button class='btn btn-B m-2'>B</button><strong>"+ otazka.option2 +"</strong></div><div class='d-block'><button class='btn btn-C m-2'>C</button><strong>"+ otazka.option3 +"</strong></div><div class='d-block'><button class='btn btn-D m-2'>D</button><strong>"+ otazka.option4 +"</strong></div><div class='d-block'><button class='btn btn-E m-2'>E</button><strong>"+ otazka.option5+"</strong><div>";
        buttonAnswerC(e.submitter.textContent,"lightgreen");
    }else{
        answer.innerHTML = "<div class='d-block'><button class='btn btn-A m-2'>A</button><strong>"+ otazka.option1 +"</strong></div><div class='d-block'><button class='btn btn-B m-2'>B</button><strong>"+ otazka.option2 +"</strong></div><div class='d-block'><button class='btn btn-C m-2'>C</button><strong>"+ otazka.option3 +"</strong></div><div class='d-block'><button class='btn btn-D m-2'>D</button><strong>"+ otazka.option4 +"</strong></div><div class='d-block'><button class='btn btn-E m-2'>E</button><strong>"+ otazka.option5+"</strong><div>";
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

function buttonAnswerC(pismenko,farba){
    var buttonColor = ".btn-"+pismenko;
    document.querySelector(buttonColor).style.backgroundColor = farba;
}

function inputAnswerC(farba){
    answer.querySelector('input[type="text"]').style.backgroundColor = farba;
}







