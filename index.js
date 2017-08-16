/**
 * @file  Detect whether a value is an error.
 * @version 1.4.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-error-x
 */

'use strict';

var toStringTag = require('to-string-tag-x');
var isObjectLike = require('is-object-like-x');
var $getPrototypeOf = require('get-prototype-of-x');

var errorCheck = function checkIfError(value) {
  return toStringTag(value) === '[object Error]';
};

if (errorCheck(Error.prototype) === false) {
  var errorProto = Error.prototype;
  var testStringTag = errorCheck;
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

  var object = value;
  var maxLoop = 100;
  while (object && maxLoop > -1) {
    if (errorCheck(object)) {
      return true;
    }

    object = $getPrototypeOf(object);
    maxLoop -= 1;
  }

  return false;
};
