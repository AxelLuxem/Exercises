/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */

export const totalBirdCount = (birdsPerDay) => {
  let total = 0;

  for (let i = 0; i < birdsPerDay.length; i++) {
    total += birdsPerDay[i];
  }

  return total;
};

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */

export const birdsInWeek = (birdsPerDay, week) => {
  let total = 0;
  const startDay = (week - 1) * 7;

  for (let i = startDay; i < startDay + 7; i++) {
    total += birdsPerDay[i];
  }

  return total;
};

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */

export const fixBirdCountLog = (birdsPerDay) => {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i]++;
    } else {
      birdsPerDay[i];
    }
  }

  return birdsPerDay;
};
