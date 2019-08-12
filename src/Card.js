class Card {
  constructor(cardObject = {}) {
    this.id = cardObject.id;
    this.question = cardObject.question;
    this.possibleAnswers = cardObject.possibleAnswers;
    this.correctAnswer = cardObject.correctAnswer;
  }
}

module.exports = Card;
