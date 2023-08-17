const priceWithMonthlyDiscount = (ratePerHour, numDays, discount) => {
  const MONTH = 22; //Days in the month
  const ratePerDay = ratePerHour * 8;
  const discountedDays = Math.trunc(numDays / MONTH);
  const remainder = (numDays / MONTH) - discountedDays;
  const nonDiscountedDays = numDays - (discountedDays * MONTH);
  
  return Math.ceil(((MONTH * discountedDays) * (ratePerDay * (1 - discount))) + (nonDiscountedDays * ratePerDay));
};

const actual = priceWithMonthlyDiscount(16, 130, 0.15);
console.log(actual); // 14528
