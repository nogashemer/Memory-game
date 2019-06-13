class Card {
    constructor(pairId, imagePath, htmlCard, isPaired = false, isRevealed = false) {
        this.pairId = pairId;
        this.imagePath = imagePath;
        this.htmlCard = htmlCard;
        this.isPaired = isPaired;
        this.isRevealed = isRevealed;
    }

    injectImg() {

    };

    toggleCard() {

    };

    whenClickedfirst() {

    };

    whenClickedSeconed() {

    };

};


let Cards =
    [
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
        new Card("f", `/images/Decks/${this.type}/6.jpg`)];

