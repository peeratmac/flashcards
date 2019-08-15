const Turn = require('../src/turn');
const data = require('./data');
const prototypeQuestions = data.prototypeData;

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

  endRound() {
    const percentCorrect = this.calculatePercentCorrect();
    if (percentCorrect < 80) {
      console.log('test: < 90%');
      console.log(this.game.round);
      this.game.start(prototypeQuestions);
    } else {
      console.log('Ok, you are awesome!');
    }

    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly`;
  }
}

module.exports = Round;
