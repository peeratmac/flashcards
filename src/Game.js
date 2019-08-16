const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/deck');
const Round = require('../src/round');

class Game {
  constructor() {
    this.round = 0;
    this.currentRound;
    this.deck;
  }

  start() {
    const deck = new Deck(prototypeQuestions);
    const round = new Round(deck, this);
    // this.currentRound = new Round(this.deck);
    this.printMessage(deck);
    this.printQuestion(round);
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
