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
});
