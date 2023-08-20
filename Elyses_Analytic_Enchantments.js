/**
 * Get the position (index) of the card in the given stack
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} position of the card in the stack
 */

export const getCardPosition = (stack, card) => stack.indexOf(card);

/**
 * Determine if the stack contains the card
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {boolean} true if card is in the stack, false otherwise
 */

export const doesStackIncludeCard = (stack, card) => stack.includes(card);

/**
 * Determine if each card is even
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if all cards are even, false otherwise
 */

export const isEachCardEven = (stack) => stack.every((num) => num % 2 === 0);

/**
 * Check if stack contains odd-value card
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if the array contains odd card, false otherwise
 */

export const doesStackIncludeOddCard = (stack) => stack.some((num) => num % 2 !== 0);

/**
 * Get the first odd card from the stack
 *
 * @param {number[]} stack
 *
 * @returns {number | undefined} the first odd value
 */

export const getFirstOddCard = (stack) => stack.find(item => item % 2 !== 0);

/**
 * Determine the position of the first card that is even
 *
 * @param {number[]} stack
 *
 * @returns {number} position of the first card that is even
 */

export const getFirstEvenCardPosition = (stack) => stack.findIndex(num => num % 2 === 0);
