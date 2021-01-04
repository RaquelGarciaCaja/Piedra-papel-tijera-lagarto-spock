const resultWrite = document.querySelector(".js-results");
const loadingComputer = document.querySelector(".js-loading");
const counterWrite = document.querySelector(".header__counter");
const counterHumanWrite = document.querySelector(".main__humanCounter");
const counterComputerWrite = document.querySelector(".main__computerCounter");
const btnReset = document.querySelector(".header__buttonReset");
const computerChoose = document.querySelector(".main__computerLoading");
const fullResultWin = document.querySelector(".js-fullResultWin");
const fullResultLose = document.querySelector(".js-fullResultLose");
const fullResultEqual = document.querySelector(".js-fullResultEqual");

let counter = 0;
let counterHuman = 0;
let counterComputer = 0;

function option(human) {
  counter++;
  counterTry();
  let resultText = ["empatas", "ganas", "pierdes"];
  let name = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock "];
  let move = [
    [0, 1, 2, 2, 1],
    [2, 0, 1, 1, 2],
    [1, 2, 0, 2, 1],
    [1, 2, 1, 0, 2],
    [2, 1, 2, 1, 0],
  ];
  var computer = Math.floor(Math.random() * 5);
  var result = move[computer][human];
  computerChoose.innerHTML = `<button class="main__optionComputer"> ${name[computer]}</button>`;
  resultWrite.innerHTML = `<h5 class="main__result"> Resultado: ${resultText[result]} </h5>`;
  counterWrite.innerHTML = `<h4>Partidas: ${counter}</h4>`;

  if (resultText[result] === "ganas") {
    counterHuman++;
    counterHumanWrite.innerHTML = `<h4>Ganadas: ${counterHuman}</h4>`;
  } else if (resultText[result] === "pierdes") {
    counterComputer++;
    counterComputerWrite.innerHTML = `<h4>Ganadas: ${counterComputer}</h4>`;
  }
}

////////////counter games/////////////////

function counterTry() {
  if (counter > 9) {
    if (counterHuman > counterComputer) {
      fullResultWin.style.display = "flex";
    } else if (counterHuman < counterComputer) {
      fullResultLose.style.display = "flex";
    } else if (counterHuman === counterComputer) {
      fullResultEqual.style.display = "flex";
    }
  }
}

////////////reset/////////////////

function reset() {
  location.reload();
}

////////////close win-lose-equal/////////////////
function close() {
  fullResultWin.style.display = "none";
  fullResultLose.style.display = "none";
  fullResultEqual.style.display = "none";
}

function closeButtons() {
  const closeBtns = document.querySelectorAll(".js-close");
  for (const closeBtn of closeBtns) {
    closeBtn.addEventListener("click", close);
  }
}
closeButtons();

/////////////////listeners/////////////////////
btnReset.addEventListener("click", reset);
