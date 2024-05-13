const gridElement = document.querySelector(".grid-container");
const grid = document.querySelectorAll(".square");
//board size for array
let size = 9;

let countX = 0;
let countO = 0;
let sign_X = "X";
let sign_O = "O";
let previousSign = "";
//1.board array render  with 9 empty strings.
const board = Array(size).fill("");
console.log(board.length);

//console.log((board[1] = "X"));
//2.checks if all strings in a array is empty
const signsCounter = (board, countX = 0, countO = 0) => {
  console.log(board);
  board.forEach((str) => {
    if (str !== "") {
      if (str === "X") {
        countX++;
      } else if (str === "O") {
        countO++;
      }
    }
  });
  console.log(countX);
  console.log(countO);
  return board;
};
//signsCounter(board, countX, countO);
//1.Start and play game
const checksPreviousSign = (previousSign, board) => {
  let copyBoard = [...board];
  console.log(copyBoard);
  copyBoard.forEach((el, index) => {
    if (el === "" && previousSign === "") {
      copyBoard[index] = sign_X;
      previousSign = sign_X;
      signsCounter(copyBoard, countX, countO);
    } else if (el === "" && previousSign === "X") {
      copyBoard[index] = sign_O;
      previousSign = sign_O;
      signsCounter(copyBoard, countX, countO);
    } else {
      copyBoard[index] = sign_X;
      previousSign = sign_X;
      signsCounter(copyBoard, countX, countO);
    }
  });
  console.log(copyBoard);
  //return signsCounter(copyBoard);
  return copyBoard;
};
checksPreviousSign(previousSign, board);

//Check if one of counter reaches 3
const counterCheck = (countX, countO) => {
  if (countX === 3) {
    //iterate through array and compare indexes of array with array of arrays(wincombination)
    //function which calculates winCombination
  } else if (countO === 3) {
    //function which calculates winCombination
  }
};

// const checksPreviousSign = (previousSign, board) => {
//   const newBoard = board.slice(); // Create a copy

//   newBoard.forEach((el, index) => {
//     if (el === "" && previousSign !== "") {
//       newBoard[index] = previousSign === sign_X ? "o" : "x";
//       // Assign based on previous sign
//       console.log(newBoard[index]);
//     }
//   });

//   return newBoard;
// };
// const checkPreviousSign = (previousSign, board) => {
//   // Create a copy of the board to avoid modifying the original
//   const copyBoard = board.slice(); // Or use spread syntax: [...board]

//   // Loop through each cell in the board
//   copyBoard.forEach((el, index) => {
//     if (el === "" && previousSign === "") {
//       copyBoard[index] = "X"; // Use uppercase X for clarity
//     } else if (el === "" && previousSign === "X") {
//       copyBoard[index] = "O";
//     }
//   });

//   return copyBoard;
// };
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

const squareClicked = () => {
  for (let i = 0; i <= board.length; i++) {
    let click = board[i] !== "";
  }
};
squareClicked();
//let pattern = "";
// for (let i = 1; i <= size; i++) {
//   for (let j = 1; j <= 3; j++) {
//     //console.log((pattern += grid));
//     let box = `<div class='square'></div>`;
//     gridElement.innerHTML = pattern += box;
//   }
//   pattern += "\n";
// }
// console.log(pattern);
