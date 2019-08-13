const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/round');
const Card = require('../src/Card');
const Deck = require('../src/deck');
const Turn = require('../src/turn');

describe('Round', () => {
  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });
});
