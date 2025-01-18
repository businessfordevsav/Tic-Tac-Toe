let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];


function switchPlayer() {
  currentPlayer = currentPlayer === "X"? "O" : "X";
}

function checkWinCondition() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (board[a]!== "" && board[a] === board[b] && board[b] === board[c]) {
      alert(`Player ${board[a]} wins!`);
      window.location.reload();
      return true;
    }
  }

  if (!board.includes("")) {
    alert("It's a tie!");
    window.location.reload();
    return true;
  }
}

function handleClick(element) {
  const id = Number(element.id);
  if (board[id] !== "" ) {
    return;
  }
  board[id] = currentPlayer;
  element.innerText = currentPlayer;
  element.style.color = currentPlayer === "X" ? "red" : "blue";
  checkWinCondition();
  switchPlayer();

}