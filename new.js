const startGame = document.querySelector(".start");
const resetGame = document.querySelector(".reset");
const grid = document.querySelectorAll(".square");
const gridElement = document.querySelector(".grid-container");
const playerX = document.querySelector(".playerX");
const playerO = document.querySelector(".playerO");
const message = document.querySelector(".message");
const playerNameX = document.querySelector("#nameX");
const playerNameO = document.querySelector("#nameO");
const newName = document.querySelector(".newName");

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
//console.log(board);

const gameBoard = {
  boards: [],
};
//console.log(gameBoard.boards);
const player11 = {
  score: 0,
  sign: "X",
  arrMoves: [],
};

const player22 = {
  score: 0,
  sign: "O",
  arrMoves: [],
};

//Click control on gameBoard
const addSign = (square) => {
  if (!previousSign) {
    square.textContent = sign_X;
    previousSign = sign_X;
    player11.arrMoves.push(Number(square.id));
  } else if (previousSign === "X") {
    square.textContent = sign_O;
    previousSign = sign_O;
    player22.arrMoves.push(Number(square.id));
    console.log("player-O", player22.arrMoves);
  } else {
    square.textContent = sign_X;
    previousSign = sign_X;
    player11.arrMoves.push(Number(square.id));
    console.log("player-X", player11.arrMoves);
  }
  console.log(player11.arrMoves.sort());
  console.log(player22.arrMoves.sort());
  checkCombinations();
};
const clickHandler = (square) => {
  //console.log(square);
  gameBoard.boards.push(Number(square.id));
  console.log(gameBoard.boards);
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

const resetButton = () => {
  removeDisableClass();
  gameBoard.boards.length = [];
  player11.arrMoves = [];
  player22.arrMoves = [];
  previousSign = "";
  removeClass();
};
const resetMessageScore = () => {
  message.textContent = "";
  playerX.textContent = player11.score;
  playerO.textContent = player22.score;
};
// Initial attachment of click handlers

resetGame.addEventListener("click", () => {
  resetButton();
  attachClickHandler();
  removeBackground();
  resetMessageScore();
});

const gameEnd = () => {
  if (player11.score === 3) {
    message.textContent = `${playerNameX.value} Won`.toUpperCase();
    player11.score = 0;
  }
  if (player22.score === 3) {
    message.textContent = `${playerNameO.value} Won`.toUpperCase();
    player22.score = 0;
  }
  if ((player11.score === 3) & (player22.score === 3)) {
    message.textContent = "Tie".toUpperCase();
  }
};
const inputNameReset = () => {
  playerNameX.value = "";
  playerNameO.value = "";
};
newName.addEventListener("click", inputNameReset);
const checkCombinations = () => {
  console.log(player11);
  console.log(player22);
  if (player11.arrMoves.length >= 3) {
    console.log(player11.arrMoves);
    console.log("X has 3 values");
    if (loopCombination(player11.arrMoves)) {
      console.log("X has a winning combination");
      player11.score++;
      playerX.textContent = player11.score;
      gameEnd();
      disableClick();
      return;
    }
  }
  if (player22.arrMoves.length >= 3) {
    console.log(player22.arrMoves);
    console.log("O has 3 values");
    if (loopCombination(player22.arrMoves)) {
      console.log("O has a winning combination");
      player22.score++;
      playerO.textContent = player22.score;
      gameEnd();
      disableClick();
      return;
    }
  }
  console.log("no winning combination found tie");
};

const loopCombination = (move) => {
  return winCombinations.some((combination) => {
    if (combination.every((index) => move.includes(index))) {
      highlightCombination(combination);
      return true;
    }
    return false;
  });
};
const highlightCombination = (combination) => {
  combination.forEach((index) => {
    document.getElementById(index.toString()).classList.add("winWin");
  });
};
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
