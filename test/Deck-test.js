const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/deck');
const Card = require('../src/Card');

describe('Deck', () => {
  it('should be a function', () => {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    const deck = new Deck();
    expect(deck).to.be.instanceof(Deck);
  });

  it('should have cards within deckOfCards', () => {
    const card1 = new Card(
      1,
      'What is Love?',
      ['baby', "don't", 'hurt', 'me'],
      'baby'
    );
    const card2 = new Card(
      2,
      'Firestone?',
      ['our hearts', 'are like', 'firestones'],
      'firestones'
    );
    const deck = new Deck([card1, card2]);

    expect(deck.deckOfCards).to.deep.equal([card1, card2]);
  });

  it('should be able to count cards in deckOfCards', () => {
    const card1 = new Card(
      1,
      'What is Love?',
      ['baby', "don't", 'hurt', 'me'],
      'baby'
    );
    const card2 = new Card(
      2,
      'Firestone?',
      ['our hearts', 'are like', 'firestones'],
      'firestones'
    );
    const card3 = new Card(
      3,
      'Stargazing?',
      ['And I will still be here', 'stargazing', "I'll still look up"],
      'stargazing'
    );

    const deck = new Deck([card1]);

    expect(deck.countCards()).to.equal(1);

    const deck2 = new Deck([card1, card2, card3]);

    expect(deck2.countCards()).to.equal(3);
  });
});
