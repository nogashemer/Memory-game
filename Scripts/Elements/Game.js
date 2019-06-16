class Game {
    constructor(currentPlayer, deckInput) {
        this.player = currentPlayer;
        this.deck = currentDeck;
        this.currentPair = ["", ""];
        this.numOfPairedPairs = 0;
        this.numOfFailedPairs = 0;
        this.numOfRevealedCards = 0;
        this.eventPause = false;
        this.duration = 0;
    };

    checkIfPair() {
        if (currentGame.currentPair[0].imagePath == currentGame.currentPair[1].imagePath) {
            return true;
        } else {
            currentGame.numOfFailedPairs++;
            return false;
        }
    };

    win() {
        clearInterval(currentDurationInterval);
        DOM_RELATED.showWinAlert();
    }

}

