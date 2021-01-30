//Create an IIFE
(function () {
    /*----- constants -----*/
    const players = {
        '1': 'X',
        '-1': 'O',
        'null': ''
    };
    const combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    /*----- app's state (variables) -----*/

    let turn, winner, gameboard;

    /*----- cached element references -----*/

    const h3El = document.querySelector('h3');
    const gameboardEl = document.getElementById('gameboard');
    const squareEls = document.querySelectorAll('.square');
    const buttonEl = document.querySelector('button');

    /*----- event listeners -----*/

    buttonEl.addEventListener('click', handleInit);
    gameboardEl.addEventListener('click', handleMove);

    /*----- functions -----*/

    handleInit();

    function handleInit() {
        gameboard = [null, null, null, null, null,
            null, null, null, null, null];

        winner = false;
        turn = 1;

        //Visualize the data
        render();

    }


    function handleMove(evt) {
        console.log("click")
        const selected = evt.target.dataset.index;

        //protect a position if already selected

        //You cannot click in a selected spot
        if (winner || gameboard[selected]) return;


        gameboard[selected] = turn;

        //toggle the turn using math

        turn *= -1;
        //Do we have a winner?

        winner = checkWinner();

        // revisualizing the gameboard
        render();
    }

    function checkWinner() {
        // loop over the combo array and the gameboard simutaneously

        for (let i = 0; i < combos.length; i++) {
            if (Math.abs(gameboard[combos[i][0]] +
                gameboard[combos[i][1]] +
                gameboard[combos[i][2]]) === 3) return gameboard[combos[i][0]];

        }

        if (gameboard.includes(null)) return false

        return 'T';
        // 1) Winner = Found matching combo in gameboard
        // 2) Tie == All places taken, but no combo
        // 3) No combos and no tie game = keep playing .i.e. winner = false

    }

    function render() {
        // visualize the gameboard
        gameboard.forEach(function (value, idx) {
            // Receives an 'X' or 'O'
            squareEls[idx].textContent = players[value];

            // visualize who's turn or the winner based on game won
            if (!winner) {


                h3El.textContent = `Player ${players[turn]}'s turn`
            } else if (winner === 'T') {
                h3El.textContent = 'Tie Game';
            } else {
                h3El.textContent = `${players[winner]} wins!!`;
            }
        });
    }
})();

function drawLine(x0, y0, x1, y1, color) {
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
    this.color = color;
    this.draw = function () {
        draw.line(this.x0, this.y0, this.x1, this.y1, this.color, 3);
    }
}

var line = new Line(20, 20, 200, 200, 'red');
line.draw();

drawLine(20, 20, 200, 200, 'red');

