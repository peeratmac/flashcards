const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Turn = require('../src/turn');
const Deck = require('../src/deck');
const Round = require('../src/round');

// TODO:  Your Game class should meet these other requirements:
// TODO: Should keep track of the currentRound
// TODO: start: method that starts everything
// TODO: Creates Cards
// TODO: Puts Cards in a Deck
// TODO: Creates a new Round using the Deck
// TODO: invokes printMessage to display the message in the CLI
// TODO: invokes printQuestion to kick off our helper functions that allow interaction via the CLI

// ! game.currentRound; // => Round {...} (The new Round object that has been instatiated)

class Game {
  constructor() {
    this.round = 0;
    this.currentRound;
  }

  start() {
    const cards = prototypeQuestions.map(object => {
      const card = new Card({ ...object });
      return card;
    });
    const deck = new Deck(cards);

    const round = new Round(deck);
    this.currentRound = round;

    this.printMessage(deck, round);
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
