/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */

export const getFirstCard = (deck) => deck[0];

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */

export const getSecondCard = (deck) => deck[1];

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */

export const swapTopTwoCards = (deck) => {
  [deck[0], deck[1]] = [deck[1], deck[0]];
  return deck;
};

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */

export const discardTopCard = (deck) => [deck[0], deck.slice(1)];


/** @type {Card[]} **/
const FACE_CARDS = ['jack', 'queen', 'king'];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */

export const insertFaceCards = ([before, ...after]) => before, ...FACE_CARDS, ...after];
