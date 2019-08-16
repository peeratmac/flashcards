const Turn = require('../src/turn');
const data = require('./data');

class Round {
  constructor(deck, game) {
    this.deck = deck || [];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.game = game;
  }

  returnCurrentCard() {
    return this.deck.deckOfCards[this.turns];
  }

  takeTurn(userGuess) {
    const turn = new Turn(userGuess, this.returnCurrentCard());
    if (userGuess !== this.returnCurrentCard().correctAnswer) {
      this.incorrectGuesses.push(this.returnCurrentCard().id);
    }
    this.turns++;
    return turn.giveFeedback(userGuess);
  }

  calculatePercentCorrect() {
    return 100 - (this.incorrectGuesses.length / this.turns) * 100;
  }

  returnEndRoundString() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly`;
  }

  endRound() {
    // Create the percent and display first message
    const percentCorrect = this.calculatePercentCorrect();
    const roundOverString = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly`;

    if (percentCorrect < 90) {
      console.log(roundOverString + '. Less than 90%?? We must play again.');
      this.game.start();
    } else {
      console.log('Ok, you are awesome!');
    }

    return roundOverString;
  }
}

module.exports = Round;
