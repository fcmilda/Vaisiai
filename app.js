"use strict";

const question = document.getElementById("question");
const button = document.querySelectorAll("button");
const progress = document.getElementById("progress");
let questionNumber = 0;
let resultNumber = 0;
const questions = [
  {
    text: "Kam naudingos morkos?",
    choices: ["Niekam", "Hitleriui", "Kepenims", "Odai"],
    answer: "Odai",
  },
  {
    text: "Kam naudingi obuoliai?",
    choices: ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
    answer: "Virškinimui",
  },
  {
    text: "Kokias ligas padeda gydyti agrastai?",
    choices: ["Cukrini diabetą", "Kepenų cirozę", "Nemiga", "Vėžį"],
    answer: "Cukrini diabetą",
  },
  {
    text: "Kokio vitamino gausu apelsinuose?",
    choices: ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
    answer: "Vitamino C",
  },
  {
    text: "Kokiais dalykais yra turtingi arbūzai?",
    choices: ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
    answer: "Visi teisingi",
  },
];

//Uzkrauna klausima ir atsakymus
let populate = () => {
  if (questionNumber < questions.length) {
    question.innerText = questions[questionNumber].text;
    button.forEach((x, i) => {
      x.innerText = `${questions[questionNumber].choices[i]}`;
    });
  } else {
    //Uzkrauna rezultatus
    showResults();
  }
};

//Skaiciuoja teisingus atsakymus
let check = (guess) => {
  if (guess.innerText === questions[questionNumber].answer) resultNumber++;
};

//Rodo progresa
let showProgress = () => {
  questionNumber++;
  //Uzkrauna progreso skaiciu
  progress.innerText = questionNumber + 1;
};

var styledButton = function () {
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
      setTimeout(function () {
        button[i].classList.add("js-selected");
      }, 100);
    });
  }
};

var unstyledButton = function () {
  for (let i = 0; i < button.length; i++) {
    setTimeout(function () {
      button[i].classList.remove("js-selected");
    }, 10);
  }
};

//Priskiria funkcija mygtukams
button.forEach((x) => {
  styledButton();
  x.addEventListener("click", function () {
    //stilizuoja pasirinkta mygtuka

    setTimeout(function () {
      //Rodo progresa
      showProgress();
      //nuima stiliu nuo mygtuko;
      unstyledButton();
      //Uzkrauna klausima ir atsakymus
      populate();
    }, 500);
    //Skaiciuoja teisingus atsakymus
    check(this);
  });
});

//Result page
let showResults = () => {
  let quiz = document.getElementById("quiz");
  if (resultNumber >= 4) {
    quiz.innerHTML = `<h1>Jūsų rezultatas: ${resultNumber} iš 5</h1><br>
<img width="100%" margin="50px" src="https://media3.giphy.com/media/TnPAmP7OLTaeY/giphy.gif?cid=ecf05e473syp32p74bvuar5bchedbtv0054dtf1ua9gzr1yi&rid=giphy.gif&ct=g">`;
  } else {
    quiz.innerHTML = `<h1>Jūsų rezultatas: ${resultNumber} iš 5</h1><br>
<img width="100%" margin="50px" src="https://media0.giphy.com/media/dJYoOVAWf2QkU/giphy.gif?cid=790b7611dde330a2b4e65fdc39216644ad43ac0ab49435b0&rid=giphy.gif&ct=g">`;
  }
};

//Pirmas uzkrovimas
populate();
