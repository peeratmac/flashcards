const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Turn = require('../src/turn');
const Deck = require('../src/deck');
const Round = require('../src/round');

class Game {
  constructor() {
    this.round = 0;
    this.currentRound;
    this.deck;
  }

  start() {
    this.deck = new Deck(
      prototypeQuestions.map(cardObject => new Card(cardObject))
    );
    this.currentRound = new Round(this.deck);
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
    this.round++;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
