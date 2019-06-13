
let modalStartBtn = document.getElementById("modalStartBtn");
let playerNameHtml = document.getElementById("playerNameInput");
let deckHtml = document.getElementById("deckInput");
let currentPlayer;
let currentGame;

function newGame() {
    let playerNameInput = playerNameHtml.value;

    Players.setCurrentPlayer(playerNameInput);

    currentGame = new Game(currentPlayer);
    currentGame.layCards();
};

modalStartBtn.addEventListener("click", newGame);
