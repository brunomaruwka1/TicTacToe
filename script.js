const gameBoard = document.querySelector(".container");
const announcement = document.querySelector(".announcement");
const gameWinners = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let playerOne = [];
let playerTwo = [];

let n = 0;

gameBoard.addEventListener("click", (e) => {
  if (e.target.classList.contains("block") && n % 2 === 0) {
    e.target.innerText = "O";
    playerOne.push(Number(e.target.id));
  } else if (e.target.classList.contains("block") && n % 2 === 1) {
    e.target.innerText = "X";
    playerTwo.push(Number(e.target.id));
    console.log(playerOne);
    console.log(playerTwo);
  }
  checkWinner(playerOne, n);
  checkWinner(playerTwo, n);
  n++;
});

const checkWinner = (playerList, n) => {
  for (let i = 0; i < gameWinners.length; i++) {
    let checkingNumber = 0;
    for (let u = 0; u < gameWinners[i].length; u++) {
      if (playerList.includes(gameWinners[i][u])) {
        checkingNumber++;
      }
    }
    if (checkingNumber === 3) {
      if (n % 2 === 0) {
        console.log("Player One Wins!");
        announcement.innerText = "Player One Wins";
        announcement.style.display = "flex";
      }
      if (n % 2 === 1) {
        console.log("Player Two Wins!");
        announcement.innerText = "Player Two Wins";
        announcement.style.display = "flex";
      }
    }
    checkingNumber = 0;
  }
};
