/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */

export const seeingDouble = (deck) => deck.map((item) => item * 2 );

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */

export const threeOfEachThree = (deck) => {
  const newDeck = [];
  deck.forEach(item => item === 3 ? newDeck.push(3, 3, 3) : newDeck.push(item));
  return newDeck;
};

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export const middleTwo = (deck) => {
  return deck.slice((deck.length / 2) - 1, (deck.length / 2) + 1);
};

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export const sandwichTrick = (deck) => {
  const firstElement = deck.shift() || 0;
  const lastElement = deck.pop() || 0;
  const start = deck.length / 2; 
  deck.splice(start, 0, lastElement, firstElement);
  return deck;
};

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */

export const twoIsSpecial = (deck) => deck.filter(item => item === 2);

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */

export const perfectlyOrdered = (deck) => {
  deck.sort((item1, item2) => {
    if (item1 < item2) {
      return -1;
    }
    if (item1 > item2) {
      return 1;
    }
    return 0;
  })
  return deck;
};

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */

export const reorder = (deck) => deck.reverse();
