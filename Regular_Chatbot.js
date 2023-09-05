/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export const isValidCommand = (command) => /^Chatbot/i.test(command);

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */

export const removeEmoji = (message) => {
  const regex = new RegExp("emoji", "i");
  let newMessage = message.split(" ");
  newMessage.forEach((item, index) => {
    if (regex.test(item)) {
      newMessage.splice(index, 1, "");
    }
  });
  return newMessage.join(" ");
};

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */

export const checkPhoneNumber = (number) => {
  const regex = new RegExp(/^\(\+\d{2}\)/);
  if (regex.test(number)) {
    return "Thanks! You can now download me to your phone.";
  } else return `Oops, it seems like I can't reach out to ${number}`;
};

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */

export const getURL = (userInput) => {
  const regex = /^[a-zA-Z0-9-]+\.([a-zA-Z]{2,})(\.[a-zA-Z]{2,})?$/;
  const link = userInput.split(" ");
  let result = [];
  link.forEach((item) => {
    if (regex.test(item)) {
      result.push(item);
    }
  });
  return result;
};

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */

export const niceToMeetYou = (fullName) => {
  const name = fullName.split(" ");
  return `Nice to meet you, ${name[1]} ${name[0].slice(0, -1)}`;
};
