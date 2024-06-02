const gridElement = document.querySelector(".grid-container");

const grid = document.querySelectorAll(".square");
//board size for array
let size = 9;

let countX = 0;
let countO = 0;
let sign_X = "X";
let sign_O = "O";
let previousSign = "";
let arr1 = [];
let arr2 = [];
let player1 = [];
let player2 = [];

//1.board array render  with 9 empty strings.
const board = Array(size).fill("");
console.log(board.length);
const gameStart = () => {
  countX = 0;
  countO = 0;
  previousSign = "";
  arr1 = [];
  arr2 = [];
  console.log(board);
};
gameStart();
//after arr length gets 3 compare each arr with combinations.
//reset arr after length got 3 and has been compared
const targetedSquare = (e) => {
  let square = e.target;
  writeSign(square);
  // let squareId = e.target.id;
  // //console.log(squareId);
  arr1.push(Number(square.id));

  square.classList.add("activeSquare");

  console.log(arr1);
  return arr1;
};

grid.forEach((square) => {
  square.addEventListener("click", targetedSquare);
});
const writeSign = (item) => {
  if (previousSign === "") {
    item.textContent = sign_X;
    previousSign = sign_X;
    //player1.push(sign_X);
    player1.push(item.id);
    console.log(player1);
    console.log(previousSign);
    console.log(arr1);
  } else if (previousSign === "X") {
    item.textContent = sign_O;
    console.log(previousSign);
    previousSign = sign_O;
    player2.push(item.id);
    console.log(player2);
  } else {
    item.textContent = sign_X;
    previousSign = sign_X;
    player1.push(item.id);
    console.log(player1);
    console.log(previousSign);
  }
};

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
// const fillTheBoard = () => {
//   let copyBoard = [...board];
//   console.log(copyBoard);
//   copyBoard.forEach((el, index) => {
//     if (el === "" && previousSign === "") {
//       copyBoard[index] = sign_X;
//       previousSign = sign_X;
//       player1.push(index);
//       //signsCounter(copyBoard, countX, countO);
//     } else if (el === "" && previousSign === "X") {
//       copyBoard[index] = sign_O;
//       previousSign = sign_O;
//       player2.push(index);
//       //signsCounter(copyBoard, countX, countO);
//     } else {
//       copyBoard[index] = sign_X;
//       previousSign = sign_X;
//       player1.push(index);
//       //signsCounter(copyBoard, countX, countO);
//     }
//   });
//   console.log(player1);
//   console.log(player2);
//   console.log(copyBoard);
//   //return signsCounter(copyBoard);
//   return signsCounter(copyBoard);
// };
// grid.forEach((item) => {
//   item.addEventListener("click", fillTheBoard);
// });

//fillTheBoard(previousSign, board, arr1, arr2);
// grid.forEach((item) => {
//   item.addEventListener("click", fillTheBoard);
// });
//Check if one of counter reaches 3.Not working
const counterCheck = (arr1, arr2) => {
  //console.log(arr1);
  arr1.forEach((arr) => {
    if (arr.length === 3) {
      console.log(arr.length);
    }
    console.log(arr);
  });
  if (arr1.length === 3) {
    //iterate through array and compare indexes of array with array of arrays(wincombination)
    //function which calculates winCombination
  } else {
    arr2.length === 3;
    //function which calculates winCombination
  }
};
counterCheck(arr1, arr2);
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

//console.log(grid);
//finds if result matches any combination
const arr4 = [1, 2];
const arr3 = [6, 7, 8];
const checkCombinations = (arr3, winCombinations) => {
  return winCombinations.some((combination) => {
    console.log(combination);
    return combination.every((index) => arr3.includes(index));
  });
};
const isWin = checkCombinations(arr3, winCombinations);
if (isWin) {
  console.log(`combination is ${isWin}`);
} else {
  console.log("no win");
}

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
