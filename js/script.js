(function() {
// informacja o grze , stale
  const multiplier = 9,
    startPoint = {
      row: 4,
      column: 4
    };
// tworzenie  board'u ( wiersze kolumny + dodawanie css )
  function createBoard() {
    const board = [],
      container = document.querySelector('.container');

    for (let i = 0; i < multiplier; i++) {
      let row = document.createElement('div');

// doddawanie wiersza do containeru
      row.classList.add('row');
      container.appendChild(row);

      board[i] = [];
// tworzenie boardu poprzez petle
      for (let j = 0; j < multiplier; j++) {
        let box = document.createElement('div');

        box.classList.add('box');
// start point
        if (startPoint.row === i && startPoint.column === j) {
          box.classList.add('active');
        }
// dodawnaie boxu do wiersza
        row.appendChild(box);

        board[i][j] = box;
      }
    }

    return board;
  }
// tworzenie boardu

  window.addEventListener('load', function() {
    const board = createBoard();

  })
})();
