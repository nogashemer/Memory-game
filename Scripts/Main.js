

let currentPlayer;
let currentGame;
let currentDeck;
let currentCard;
let currentDurationInterval;

const DOM_RELATED = {
    startBtn: document.getElementById("start"),
    modalStartBtn: document.getElementById("modalStartBtn"),
    modalStartAfterWinBtn: document.getElementById("modalPlayAgainBtn"),
    playerNameHtml: document.getElementById("playerNameInput"),
    deckHtml: document.getElementById("deckInput"),
    cardsContainerHtml: document.getElementById("cardsContainer"),
    containerHtml: document.getElementById("container"),
    currentHtmlCard: "",

    setHtmlCards: function () {
        DOM_RELATED.clearHtmlDisplay();
        currentDeck.deckCards.forEach(function (element) {
            let newHtmlCard = document.createElement("div");
            newHtmlCard.id = `card${currentDeck.deckCards.indexOf(element) + 1}`;
            element.htmlCardId = newHtmlCard.id;
            element.htmlCard = newHtmlCard;
            newHtmlCard.className = "card";
            newHtmlCard.style = (`background-image: url('/images/back.jpg')`);
            element.isRevealed = "false";
            DOM_RELATED.cardsContainerHtml.appendChild(newHtmlCard);
            newHtmlCard.addEventListener("click", Cards.whenSomeCardIsClicked);
        });
    },

    clearHtmlDisplay() {
        DOM_RELATED.cardsContainerHtml.innerHTML = "";
    },

    showWinAlert() {
        DOM_RELATED.cardsContainerHtml.innerHTML = `<div class="alert alert-success" role="alert" style="height: fit-content;">
            <h4 class="alert-heading">You Win!</h4>
            <p>Well done ${currentPlayer.name}. you have played ${currentPlayer.gamesPlayed} times so far. this time it took you only ${currentGame.duration} secondes and ${currentGame.numOfFailedPairs} wrong guesses.</p>
        </div>`
    },

}

function newGame() {
    let playerNameInput = DOM_RELATED.playerNameHtml.value;
    let deckInput = `${DOM_RELATED.deckHtml.options[DOM_RELATED.deckHtml.selectedIndex].value}`;
    Players.setCurrentPlayer(playerNameInput);
    Decks.setCurrentDeck(deckInput);
    currentGame = new Game(currentPlayer, deckInput);
    currentDurationInterval = setInterval(function () { currentGame.duration++; }, 1000);
    DOM_RELATED.setHtmlCards();
};

DOM_RELATED.modalStartBtn.addEventListener("click", newGame);
