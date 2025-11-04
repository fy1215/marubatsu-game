let cell = document.getElementsByClassName('cell');
let resetBtn = document.getElementById('resetBtn');
let statusText = document.getElementById('status');
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const winBoard = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let win = () => {
  return winBoard.some(pattern => {
    const [a, b, c] = pattern;
    return board[a] !== '' && board[a] === board[b] && board[a] === board[c]
  })
};


Array.from(cell).forEach(ele => {
  ele.addEventListener('click', () => {
    if (gameActive) {
      if (statusText.textContent.includes('◯')) {
        if (board[ele.dataset.index] === '') {
          ele.classList.add('O');
          board[ele.dataset.index] = '◯'
          if (win()) {
            statusText.textContent = 'プレイヤー ◯ の勝利';
            gameActive = false;
          } else {
            if (board.includes('')) {
              statusText.textContent = 'プレイヤー ☓ の番';
            } else {
              statusText.textContent = '引き分け';
              gameActive = false;
            }
          }
        }
      } else if (statusText.textContent.includes('☓')) {
        if (board[ele.dataset.index] === '') {
          ele.classList.add('X');
          board[ele.dataset.index] = '☓'
          if (win()) {
            statusText.textContent = 'プレイヤー ☓ の勝利';
            gameActive = false;
          } else {
            if (board.includes('')) {
              statusText.textContent = 'プレイヤー ◯ の番';
            } else {
              statusText.textContent = '引き分け';
              gameActive = false;
            }
          }
        }
      }
    }
  })

  resetBtn.addEventListener('click', () => {
    ele.classList.remove('O');
    ele.classList.remove('X');
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    statusText.textContent = 'プレイヤー ◯ の番'
  });
});
