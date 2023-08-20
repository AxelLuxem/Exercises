import { notify } from './notifier';
import { order } from './grocer';

/**
 * @return void
 */

export const onSuccess = () => notify({ message: 'SUCCESS' });

/**
 * @return void
 */

export const onError = () => notify({ message: 'ERROR' });

/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccessCallback
 * @param {FruitPickerErrorCallback} onErrorCallback
 * @return void
 */
export const orderFromGrocer = (query, onSuccessCallback, onErrorCallback) =>
  order(query ,onSuccessCallback, onErrorCallback);


/**
 * @param {string} variety
 * @param {number} quantity
 * @return void
 */
export const postOrder = (variety, quantity) => order({ quantity, variety}, onSuccess, onError);
