/**
 * Split the breed to render and make requests
 * @param {String} key Dog breed split by '-'
 * @return {Object} Object with the breed and subBreed names
 */
export function splitBreed (key) {
  let breed;
  let subBreed;
  let split;

  if (key.indexOf('-')) {
    split = key.split('-');
    breed = split[0];
    subBreed = split[1];
  }
  return {
    breed,
    subBreed
  }
}

/**
 * Change the first letter of a string uppercase
 * @param {String} string A lowercase string
 * @return {String} String with the first letter in  uppercase
 */
export function upperFistLetter (string) {
  if (string)
  return string.charAt(0).toUpperCase() + string.slice(1);
}
