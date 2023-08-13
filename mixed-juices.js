/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */

export const timeToMixJuice = (name) => {
  switch (name) {
    case "Pure Strawberry Joy": return 0.5;
    case "Energizer": return 1.5;
    case "Green Garden": return 1.5;
    case "Tropical Island": return 3;
    case "All or Nothing": return 5;
    default: return 2.5;
  }
};

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */

export const limesToCut = (wedgesNeeded, limes) => {
  let limesCut = 0;
  let totalWedges = 0;
  while (totalWedges < wedgesNeeded && limesCut < limes.length) {
    let wedges = 0;
    switch (limes[limesCut]) {
      case 'small':
        wedges = 6;
        break;
      case 'medium':
        wedges = 8;
        break;
      case 'large':
        wedges = 10;
        break;
    }

    totalWedges += wedges;
    limesCut += 1;
  }
  return limesCut;
};

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export const remainingOrders = (timeLeft, orders) => {
  let timeNeeded = 0;
  let i = 0;
  while (timeNeeded < timeLeft) {
    switch (orders[i]) {
      case "Pure Strawberry Joy": timeNeeded += 0.5;
        break;
      case "Energizer": timeNeeded += 1.5;
        break;
      case "Green Garden": timeNeeded += 1.5;
        break;
      case "Tropical Island": timeNeeded += 3;
        break;
      case "All or Nothing": timeNeeded += 5;
        break;
      default: timeNeeded += 2.5;
    }
    i += 1;
  }
  return orders.slice(i);
};
