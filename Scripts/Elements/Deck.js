class Deck {
    constructor(type) {
        this.type = type;
        this.deckCards = [
            new Card(`/images/Decks/${this.type}/1.jpg`),
            new Card(`/images/Decks/${this.type}/1.jpg`),
            new Card(`/images/Decks/${this.type}/2.jpg`),
            new Card(`/images/Decks/${this.type}/2.jpg`),
            new Card(`/images/Decks/${this.type}/3.jpg`),
            new Card(`/images/Decks/${this.type}/3.jpg`),
            new Card(`/images/Decks/${this.type}/4.jpg`),
            new Card(`/images/Decks/${this.type}/4.jpg`),
            new Card(`/images/Decks/${this.type}/5.jpg`),
            new Card(`/images/Decks/${this.type}/5.jpg`),
            new Card(`/images/Decks/${this.type}/6.jpg`),
            new Card(`/images/Decks/${this.type}/6.jpg`)]
    }

};

let Decks = {
    createNewDeck: function (type) {
        /* TO DO: upload new Deck, add create deck to decks selection in Html */
        /* this function is currently never called until TO DO is done */
        return Decks[`${type}`] = new Deck(type);
    },

    findDeckByType: function (type) {
        return Decks[`${type}`];
    },

    setCurrentDeck: function (deckInput) {
        if (Decks.hasOwnProperty(deckInput)) {
            currentDeck = Decks.findDeckByType(deckInput);
            currentDeck.deckCards = Decks.shuffleDeck(currentDeck.deckCards);
        }
    },

    shuffleDeck(cardsArr) {
        let ctr = cardsArr.length;
        let temp;
        let index;
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = cardsArr[ctr];
            cardsArr[ctr] = cardsArr[index];
            cardsArr[index] = temp;
        }
        return cardsArr;
    },

    Dogs: new Deck("Dogs"),
    Cats: new Deck("Cats"),
    Birds: new Deck("Birds"),
}