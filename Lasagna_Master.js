export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) {
      return "You forgot to set the timer.";
  } else if(remainingTime === 0) {
      return "Lasagna is done.";
    };
    return "Not done, please wait.";
};

export function preparationTime(layers, averageTimePerLayer) {
  return layers.length * (averageTimePerLayer ? averageTimePerLayer : 2);
};

export function quantities(layers) {
  return { 
    noodles: (layers.filter(word => word === "noodles").length) * 50, 
    sauce: (layers.filter(word => word === "sauce").length) * 0.2 
  };
};

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length -1]);
};

export function scaleRecipe(recipe, numberOfPortions) {
  const newRecipe = { ...recipe };
  Object.keys(newRecipe).forEach(item => newRecipe[item] = (newRecipe[item] / 2) * numberOfPortions);
  return newRecipe;
};
