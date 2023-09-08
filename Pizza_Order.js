const PRICES = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10,
  ExtraSauce: 1,
  ExtraToppings: 2,
};

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */

export const pizzaPrice = (pizza, ...extras) => {
  let extrasPrice = 0;
  extras.forEach((item) => (extrasPrice += PRICES[item]));

  return PRICES[pizza] + extrasPrice;
};

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */

export const orderPrice = (pizzaOrders) => {
  let totalPizzaPrice = 0;
  let totalExtrasPrice = 0;
  pizzaOrders.forEach((item) => {
    totalPizzaPrice += PRICES[item.pizza];
    item.extras.forEach((extra) => {
      totalExtrasPrice += PRICES[extra];
    });
  });

  return totalPizzaPrice + totalExtrasPrice;
};
