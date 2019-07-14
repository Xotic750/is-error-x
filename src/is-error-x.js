/**
 * @file  Detect whether a value is an error.
 * @version 1.5.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-error-x
 */

const toStringTag = require('to-string-tag-x');
const isObjectLike = require('is-object-like-x');
const $getPrototypeOf = require('get-prototype-of-x');

let errorCheck = function checkIfError(value) {
  return toStringTag(value) === '[object Error]';
};

if (errorCheck(Error.prototype) === false) {
  const errorProto = Error.prototype;
  const testStringTag = errorCheck;
  errorCheck = function checkIfError(value) {
    return value === errorProto || testStringTag(value);
  };
}

/**
 * Determine whether or not a given `value` is an `Error` type.
 *
 * @param {*} value - The object to be tested.
 * @returns {boolean} Returns `true` if `value` is an `Error` type,
 *  else `false`.
 * @example
 * var isError = require('is-error-x');
 *
 * isError(); // false
 * isError(Number.MIN_VALUE); // false
 * isError('abc'); // false
 * isError(new Error()); //true
 */
module.exports = function isError(value) {
  if (isObjectLike(value) === false) {
    return false;
  }

  let object = value;
  let maxLoop = 100;
  while (object && maxLoop > -1) {
    if (errorCheck(object)) {
      return true;
    }

    object = $getPrototypeOf(object);
    maxLoop -= 1;
  }

  return false;
};
