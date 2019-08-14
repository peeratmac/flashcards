const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Turn = require('../src/turn');
const Deck = require('../src/deck');
const Round = require('../src/round');

class Game {
  constructor() {
    this.currentRound;
    this.round = 0;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }

  // start(mapThisArray) {
  //   const deck = new Deck(mapThisArray.map())
  // }
}

module.exports = Game;
