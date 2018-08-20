/**
 * @param  {Array} array1 The first array to be compared
 * @param  {Array} array2 The second array to be compared
 * @returns {boolean} Returns true if arrays are the same
 */
export default (array1, array2) =>
  array1.length === array2.length &&
  array1.every((value, index) => value === array2[index]);
