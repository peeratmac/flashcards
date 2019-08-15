const Turn = require('../src/turn');
const data = require('./data');
// ! testing
const prototypeQuestions = data.prototypeData;
const Deck = require('../src/deck');
const Game = require('../src/Game');
const Card = require('../src/Card');

class Round {
  constructor(deck, game) {
    this.deck = deck || [];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.game = game;
    // ! testing
    this.round = 0;
    this.currentRound;
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

  // ! testing
  start() {
    this.deck = new Deck(
      prototypeQuestions.map(cardObject => {
        return new Card(cardObject);
      })
    );
    this.currentRound = new Round(this.deck);
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
    this.round++;
  }

  endRound() {
    const percentCorrect = this.calculatePercentCorrect();

    console.log(
      `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly`
    );

    // ? does not work right now (want to start new game if answer < 90%)
    if (percentCorrect < 90) {
      console.log('test');
      this.start();
    } else if (percentCorrect < 100) {
      console.log('Ok, you are good, but you should try to get 100!');
    }
  }
}

module.exports = Round;
