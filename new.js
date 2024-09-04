const startGame = document.querySelector(".start");
const newName = document.querySelector(".newName");
const grid = document.querySelectorAll(".square");
const playerX = document.querySelector(".playerX");
const playerO = document.querySelector(".playerO");
const message = document.querySelector(".message");
const playerNameX = document.querySelector("#nameX");
const playerNameO = document.querySelector("#nameO");

const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
//board size for array
let size = 9;
let sign_X = "X";
let sign_O = "O";
let previousSign = "";

const board = Array(size).fill("");

const gameBoard = {
  boards: [],
};

const player1 = {
  score: 0,
  sign: "X",
  arrMoves: [],
};

const player2 = {
  score: 0,
  sign: "O",
  arrMoves: [],
};

//controls signs on gameBoard
const addSign = (square) => {
  if (!previousSign) {
    square.textContent = sign_X;
    previousSign = sign_X;
    player1.arrMoves.push(Number(square.id));
  } else if (previousSign === "X") {
    square.textContent = sign_O;
    previousSign = sign_O;
    player2.arrMoves.push(Number(square.id));
  } else {
    square.textContent = sign_X;
    previousSign = sign_X;
    player1.arrMoves.push(Number(square.id));
  }
  player1.arrMoves.sort();
  player2.arrMoves.sort();
  checkCombinations();
};
//enables to click on squares and restricts double clicking
const clickHandler = (square) => {
  gameBoard.boards.push(Number(square.id));
  square.removeEventListener("click", clickedElement);
};

const clickedElement = (e) => {
  clickHandler(e.target);
  e.target.classList.add("activeSquare");
  addSign(e.target);
};

const removeClass = () => {
  grid.forEach((item) => {
    item.classList.remove("activeSquare");
    item.innerHTML = "";
  });
};

const attachClickHandler = () => {
  grid.forEach((elem) => {
    elem.addEventListener("click", clickedElement);
  });
};
//resets game and score display
const resetVariables = () => {
  removeDisableClass();
  gameBoard.boards.length = [];
  player1.arrMoves = [];
  player2.arrMoves = [];
  previousSign = "";
  removeClass();
};
const resetMessageScore = () => {
  message.textContent = "";
  playerX.textContent = player1.score;
  playerO.textContent = player2.score;
};

//game start
startGame.addEventListener("click", () => {
  resetVariables();
  attachClickHandler();
  removeBackground();
  resetMessageScore();
});

//prints message who wan after 3 rounds
const gameEnd = () => {
  if (player1.score === 3) {
    message.textContent = `${playerNameX.value} won`.toUpperCase();
    player1.score = 0;
  }
  if (player2.score === 3) {
    message.textContent = `${playerNameO.value} won`.toUpperCase();
    player2.score = 0;
  }
  if ((player1.score === 3) & (player2.score === 3)) {
    message.textContent = "tie".toUpperCase();
  }
};

//Checking if combinations match result
const checkCombinations = () => {
  if (player1.arrMoves.length >= 3) {
    if (loopCombination(player1.arrMoves)) {
      player1.score++;
      playerX.textContent = player1.score;
      gameEnd();
      disableClick();
      return;
    }
  }
  if (player2.arrMoves.length >= 3) {
    if (loopCombination(player2.arrMoves)) {
      player2.score++;
      playerO.textContent = player2.score;
      gameEnd();
      disableClick();
      return;
    }
  }
};
//returns true if match combination and highlights
const loopCombination = (move) => {
  return winCombinations.some((combination) => {
    if (combination.every((index) => move.includes(index))) {
      highlightCombination(combination);
      return true;
    }
    return false;
  });
};
//highlight the match function
const highlightCombination = (combination) => {
  combination.forEach((index) => {
    document.getElementById(index.toString()).classList.add("winWin");
  });
};
//resets highlighted background and restricts clicking
const removeBackground = () => {
  grid.forEach((index) => index.classList.remove("winWin"));
};
checkCombinations();

const disableClick = () => {
  grid.forEach((square) => {
    square.classList.add("disabled");
  });
};
const removeDisableClass = () => {
  grid.forEach((square) => {
    square.classList.remove("disabled");
  });
};
//resets inputs
const inputNameReset = () => {
  playerNameX.value = "";
  playerNameO.value = "";
};

newName.addEventListener("click", inputNameReset);
