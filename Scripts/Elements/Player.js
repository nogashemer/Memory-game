class Player {
    constructor(name, score = 0, highScore = 0, gamesPlayed = 0) {
        this.name = name;
        this.score = score;
        this.highScore = highScore;
        this.gamesPlayed = gamesPlayed;
    }
}

let Players = {
    createNewPlayer: function (name) {
        return Players[`${name}`] = new Player(name);
    },

    findPlayerByName: function (name) {
        return Players[`${name}`];
    },

    setCurrentPlayer: function (playerNameInput) {
        if (Players.hasOwnProperty(playerNameInput)) {
            currentPlayer = Players.findPlayerByName(playerNameInput);
        } else {
            currentPlayer = Players.createNewPlayer(playerNameInput);
        }
        currentPlayer.gamesPlayed++;
    }

}