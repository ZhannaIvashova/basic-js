const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const separator = options.separator || "+";
  const additionSeparator = options.additionSeparator || "|";
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;

  const toStr = String(str);
  const toSrtAddition =
    options.addition !== undefined ? String(options.addition) : "";

  let resultString = "";

  for (let i = 0; i < repeatTimes; i++) {
    resultString += toStr;
    if (toSrtAddition !== "") {
      for (let j = 0; j < additionRepeatTimes; j++) {
        resultString += toSrtAddition;
        if (j === additionRepeatTimes - 1) {
          continue;
        }
        resultString += additionSeparator;
      }
    }

    if (i === repeatTimes - 1) {
      continue;
    }
    resultString += separator;
  }

  return resultString;
}

module.exports = {
  repeater,
};
