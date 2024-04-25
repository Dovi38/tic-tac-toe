const gridElement = document.querySelector(".grid-container");
const grid = document.querySelectorAll(".square");
//board size for array
let size = 9;
let pattern = "";
let countX = 0;
let countO = 0;
let sign_X = "x";
let sign_O = "0";
//1.board array render  with 9 empty strings.
let board = Array(size).fill("");
console.log(board.length);
console.log((board[1] = "x"));
//2.checks if all strings in a array is empty
const checkEmptyStrings = (board, countX = 0, countO = 0) => {
  board.forEach((str) => {
    if (str !== "") {
      if (str === "x") {
        countX++;
      } else if (str === "0") {
        countO++;
      }
    }
  });
  console.log(countX);
  console.log(countO);
  return board;
};
console.log(checkEmptyStrings(board, countX, countO));
//Check if one of counter reaches 3
const counterCheck = (countX, countO) => {
  if (countX === 3) {
    //function which calculates winCombination
  } else if (countO === 3) {
    //function which calculates winCombination
  }
};
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

console.log(grid);

console.log(board);
console.log((board[3] = "x"));
console.log(board);
let move = board.indexOf("x");
console.log(move);

const squareClicked = () => {
  for (let i = 0; i <= board.length; i++) {
    let click = board[i] !== "";
    console.log(click);
  }
};
squareClicked();

console.log((board[0] = "0"));
console.log(board);
let secBoard = board.filter((el) => el === "x");
console.log(secBoard.length);
console.log(board);

secBoard = board.filter((el) => el === "x");
console.log(secBoard);
console.log(secBoard.length);

// for (let i = 1; i <= size; i++) {
//   for (let j = 1; j <= 3; j++) {
//     //console.log((pattern += grid));
//     let box = `<div class='square'></div>`;
//     gridElement.innerHTML = pattern += box;
//   }
//   pattern += "\n";
// }
// console.log(pattern);
