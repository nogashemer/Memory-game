class Deck {
    constructor(type) {
        this.type = type;
        this.Cards = [
            new Card("a", `/images/Decks/${this.type}/1.jpg`),
            new Card("a", `/images/Decks/${this.type}/1.jpg`),
            new Card("b", `/images/Decks/${this.type}/2.jpg`),
            new Card("b", `/images/Decks/${this.type}/2.jpg`),
            new Card("c", `/images/Decks/${this.type}/3.jpg`),
            new Card("c", `/images/Decks/${this.type}/3.jpg`),
            new Card("d", `/images/Decks/${this.type}/4.jpg`),
            new Card("d", `/images/Decks/${this.type}/4.jpg`),
            new Card("e", `/images/Decks/${this.type}/5.jpg`),
            new Card("e", `/images/Decks/${this.type}/5.jpg`),
            new Card("f", `/images/Decks/${this.type}/6.jpg`),
            new Card("f", `/images/Decks/${this.type}/6.jpg`)]
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
        } else {
            console.log("Deck not set");
        }
    },

    Dogs: new Deck("Dogs"),
    Cats: new Deck("Cats"),
    Birds: new Deck("Birds"),
}