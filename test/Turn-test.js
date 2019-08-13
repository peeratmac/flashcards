const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn');
const Card = require('../src/Card');

var turn;

beforeEach(() => {
  turn = new Turn('X', Card);
});

describe('Turn', () => {
  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to accept a cardObject', () => {
    expect(turn.card).to.equal(Card);
  });

  it('should be able to receive a guess from each turn', () => {
    expect(turn.guess).to.equal('X');
  });

  it('should be able to returnGuess()', () => {
    expect(turn.returnGuess()).to.equal('X');
  });

  it('should be able to returnCard()', () => {
    expect(turn.returnCard()).to.equal(Card);
  });

  it('should be able to evaluateGuess()', () => {
    const cardNew = new Card({
      id: 1,
      question:
        'What allows you to define a set of related information using key-value pairs?',
      answers: ['object', 'array', 'function'],
      correctAnswer: 'object'
    });
    const guess1 = new Turn('X', cardNew);
    const guess2 = new Turn('object', cardNew);

    console.log(guess1);
    console.log(guess2);

    expect(guess1.evaluateGuess()).to.equal(false);
    expect(guess2.evaluateGuess()).to.equal(true);
  });

  it('should be able to giveFeedback()', () => {
    const cardNew = new Card({
      id: 1,
      question:
        'What allows you to define a set of related information using key-value pairs?',
      answers: ['object', 'array', 'function'],
      correctAnswer: 'object'
    });

    const guess1 = new Turn('X', cardNew);
    const guess2 = new Turn('object', cardNew);

    console.log(guess1.giveFeedback());
    expect(guess1.giveFeedback()).to.equal('incorrect!');

    console.log(guess2.giveFeedback());
    expect(guess2.giveFeedback()).to.equal('correct!');
  });
});
