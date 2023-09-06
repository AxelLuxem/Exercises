export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */

export const checkHumidityLevel = (humidityPercentage) => {
  if (humidityPercentage > 70) {
    throw new Error("Implement the checkHumidity function");
  }
};

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */

export const reportOverheating = (temperature) => {
  if (temperature === null) {
    throw new ArgumentError();
  } else if (temperature > 500) {
    throw new OverheatingError(temperature);
  }
};

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */

export const monitorTheMachine = (actions) => {
  try {
    actions.check();
  } catch (err) {
    if (err instanceof ArgumentError) {
      actions.alertDeadSensor();
    } else if (err instanceof OverheatingError) {
      if (err.temperature > 600) {
        actions.shutdown();
      } else {
        actions.alertOverheating();
      }
    } else {
      throw err;
    }
  }
};
