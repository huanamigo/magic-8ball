const ball = document.querySelector("img");
const input = document.querySelector("input");
const answerP = document.querySelector(".answer");
const errorP = document.querySelector(".error");

const answersArr = [
  "Tak!",
  "Zdecydowanie tak!",
  "Nie",
  "Zdecydowanie nie!",
  "Ciężko powiedzieć..",
  "Żartujesz sobie?",
  "Nie chcesz znać odpowiedzi...",
  "Zapomnij!",
  "Prawie na pewno tak",
  "Sam powinieneś wiedzieć!",
  "Wszystko mówi że tak więc zrób na odwrót!",
];

const shakeBall = () => {
  ball.classList.add("shake-animaton");
  setTimeout(checkInput, 1000);
};

ball.addEventListener("click", () => {
  if (input.value == "") {
    errorP.innerText = "Musisz zadać pytanie!";
    answerP.innerText = "";
  } else {
    if (input.value.charAt(input.value.length - 1) == "?") {
      let number = Math.floor(Math.random() * answersArr.length);
      errorP.innerText = "";
      answerP.innerText = answersArr[number];
      shakeBall();
    } else {
      errorP.innerText = "Pytanie musi kończyć się pytajnikiem!";
      answerP.innerText = "";
    }
  }
});
