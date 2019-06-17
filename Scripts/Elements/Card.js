class Card {
    constructor(imagePath, htmlCardId, htmlCard, isPaired = false, isRevealed = false) {
        this.imagePath = imagePath;
        this.htmlCardId = htmlCardId;
        this.htmlCard = htmlCard;
        this.isPaired = isPaired;
        this.isRevealed = isRevealed;
    };

    revealCard() {
        DOM_RELATED.currentHtmlCard.style = (`background-image: url(${currentCard.imagePath})`);
        currentCard.isRevealed = "true";
    };

    concealCards() {
        for (i = 0; i < 2; i++) {
            let cardToConceal = currentGame.currentPair[i];
            cardToConceal.htmlCard.style = ("");
            cardToConceal.isRevealed = "false";
            currentGame.numOfRevealedCards--;
        };
        currentGame.currentPair = ["", ""];
        currentGame.eventPause = false;
    };

    whenClicked(orderClicked) {
        if (currentCard.isRevealed == "false") {
            currentCard.revealCard();
            currentGame.numOfRevealedCards++;
            currentGame.currentPair[orderClicked] = currentCard;
            if (orderClicked == 1) {
                if (currentGame.checkIfPair()) {
                    for (i = 0; i < 2; i++) {
                        let cardToMarkPaired = currentGame.currentPair[i];
                        cardToMarkPaired.isPaired = true;
                        cardToMarkPaired.htmlCard.removeEventListener("Click", Cards.whenSomeCardIsClicked);
                    };
                    currentGame.numOfPairedPairs++;
                    (currentGame.numOfPairedPairs == 6) ? currentGame.win() : currentGame.currentPair = ["", ""];
                } else {
                    currentGame.eventPause = true;
                    setTimeout(currentCard.concealCards, 1500);
                };
            }

        }
    };

};

let Cards = {

    findCardByHtmlCard: function (htmlCard) {
        return Decks.deckCards[`${htmlCard}`];
    },

    setCurrentCard: function (htmlCurrentCardId) {
        for (i = 0; i < currentDeck.deckCards.length; i++) {
            if (currentDeck.deckCards[i].htmlCardId == htmlCurrentCardId) {
                return currentCard = currentDeck.deckCards[i];
            };
        };
    },

    whenSomeCardIsClicked: function (e) {
        if (!currentGame.eventPause) {
            DOM_RELATED.currentHtmlCard = e.target;
            Cards.setCurrentCard(DOM_RELATED.currentHtmlCard.id);
            (currentGame.numOfRevealedCards % 2 == 0) ? currentCard.whenClicked(0) : currentCard.whenClicked(1);
        }

    }

}





