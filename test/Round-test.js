const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/round');
const Card = require('../src/Card');
const Deck = require('../src/deck');
const Turn = require('../src/turn');

const Game = require('../src/Game');

var round, deck, card1, card2, card3, cards;

beforeEach(() => {
  card1 = new Card({
    id: 1,
    question: "What is Robbie's favorite animal",
    answers: ['sea otter', 'pug', 'capybara'],
    correctAnswer: 'sea otter'
  });
  card2 = new Card({
    id: 14,
    question: 'What organ is Khalid missing?',
    answers: ['spleen', 'appendix', 'gallbladder'],
    correctAnswer: 'gallbladder'
  });
  card3 = new Card({
    id: 12,
    question: "What is Travis's favorite stress reliever?",
    answers: [
      'listening to music',
      'watching Netflix',
      'playing with bubble wrap'
    ],
    correctAnswer: 'playing with bubble wrap'
  });
  cards = [card1, card2, card3];
  deck = new Deck(cards);
  round = new Round(deck);
});

afterEach(() => {
  round.turns = 0;
});

describe('Round', () => {
  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.instanceof(Round);
  });

  it('should return currentCard() that is being played', () => {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
    round.takeTurn();
    round.takeTurn();
    expect(round.returnCurrentCard()).to.deep.equal(card3);
  });

  it('should know number of times user have taken guesses (this.turns)', () => {
    round.takeTurn();
    expect(round.turns).to.equal(1);
    round.takeTurn();
    expect(round.turns).to.equal(2);
    round.takeTurn();
    expect(round.turns).to.equal(3);
  });

  it('should be able to evaluate guesses and give feedback accordingly', () => {
    expect(round.takeTurn('pug')).to.equal('incorrect!');
    expect(round.takeTurn('gallbladder')).to.equal('correct!');
    expect(round.takeTurn('playing with bubble wrap')).to.equal('correct!');
  });

  it('should be able to know what is in the deck, how many cards for example', () => {
    expect(round.deck.deckOfCards.length).to.equal(3);
  });

  it('should be able to know the array of incorrectGuesses and what is the ID of those questions user got wrong', () => {
    round.takeTurn('Definitely Wrong');
    round.takeTurn('Evidently Wrong Again');
    expect(round.incorrectGuesses[0]).to.equal(1);
    expect(round.incorrectGuesses[1]).to.equal(14);
    expect(round.incorrectGuesses[2]).to.equal(undefined);
  });

  it('should calculatePercentCorrect accurately', () => {
    round.takeTurn('sea otter');
    round.takeTurn('WRONG');
    expect(round.calculatePercentCorrect()).to.equal(50);
    round.takeTurn('playing with bubble wrap');
    expect(round.calculatePercentCorrect()).to.equal(66.66666666666667);
  });

  it('should be able to endRound and give the percentage of guesses that were correct', () => {
    round.takeTurn('sea otter');
    expect(round.endRound()).to.equal(
      '** Round over! ** You answered 100% of the questions correctly'
    );
    round.takeTurn('WRONG');
    round.takeTurn('WRONG AGAIN');
    expect(round.endRound()).to.equal(
      '** Round over! ** You answered 33.33333333333334% of the questions correctly'
    );
  });
});
