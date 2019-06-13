
let playerNameinput = document.getElementById("playerNameInput").value;
let deckInput = document.getElementById("deckInput").value;
let currentPlayer;
let currentGame;

function newGame() {

    if (players.playerNameInput) {
        currentPlayer = players.playerNameInput;
    } else {
        let newPlayer = playerNameinput;
        Players.push = newPlayer;
        Players.newPlayer = new player();
        currentPlayer = player.newPlayer;
    }

    currentGame = new Game(currentPlayer);
    currentGame.layCards();
}
