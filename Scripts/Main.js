

let currentPlayer;
let currentGame;
let currentDeck;

const DOM_RELATED = {
    modalStartBtn: document.getElementById("modalStartBtn"),
    playerNameHtml: document.getElementById("playerNameInput"),
    deckHtml: document.getElementById("deckInput"),

    setHtmlCards: function () {
        currentDeck.deckCards.forEach(function (element) {
            // let newHtmlImage = document.createElement("img");
            // newHtmlImage.id = `cardImage${currentDeck.Cards.indexOf(element) + 1}`;
            // newHtmlImage.className = "card-img-top";
            // newHtmlImage.src = `${element.imagePath}`;

            let newHtmlCard = document.createElement("div");
            newHtmlCard.id = `card${currentDeck.deckCards.indexOf(element) + 1}`;
            newHtmlCard.className = "card";
            newHtmlCard.style = (`background-image: url('${element.imagePath}')`);

            // newHtmlCard.appendChild(newHtmlImage);
            document.getElementById("cardsContainer").appendChild(newHtmlCard);
        });
    }

}

function newGame() {
    let playerNameInput = DOM_RELATED.playerNameHtml.value;
    let deckInput = `${DOM_RELATED.deckHtml.options[DOM_RELATED.deckHtml.selectedIndex].value}`;
    Players.setCurrentPlayer(playerNameInput);
    Decks.setCurrentDeck(deckInput);
    currentGame = new Game(currentPlayer, deckInput);
    DOM_RELATED.setHtmlCards();
};

modalStartBtn.addEventListener("click", newGame);
