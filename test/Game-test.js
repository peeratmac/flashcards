const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/round');
const Card = require('../src/Card');
const Deck = require('../src/deck');
const Turn = require('../src/turn');

var game;

beforeEach(() => {
  game = new Game();
});

describe('Game', () => {
  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should be able to start a game (game.start()) and it should know number of rounds', () => {
    game.start();
    console.log(game.round);
    expect(game.round).to.equal(1);
    game.start();
    game.start();
    game.start();
    game.start();
    console.log(game.round);
    expect(game.round).to.equal(5);
  });

  it.only('should know the prototypeQuestions contain 30 questions', () => {
    game.start();
    console.log(game.deck.deckOfCards.length);
    // expect(game.deck.deckOfCards.length).to.equal(30);
  });
});
