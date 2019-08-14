const Turn = require('../src/turn');

class Round {
  constructor(deck) {
    this.deck = deck || [];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.deckOfCards[this.turns];
  }

  takeTurn(userGuess) {
    const turn = new Turn(userGuess, this.returnCurrentCard());
    if (userGuess !== this.deck.deckOfCards[this.turns].correctAnswer) {
      this.incorrectGuesses.push(this.deck.deckOfCards[this.turns].id);
    }
    this.turns++;
    return turn.giveFeedback(userGuess);
  }

  calculatePercentCorrect() {
    return 100 - (this.incorrectGuesses.length / this.turns) * 100;
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly`;
  }
}

module.exports = Round;
