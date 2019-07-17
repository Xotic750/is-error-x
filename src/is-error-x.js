import toStringTag from 'to-string-tag-x';
import isObjectLike from 'is-object-like-x';
import $getPrototypeOf from 'get-prototype-of-x';

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
 */
const isError = function isError(value) {
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

export default isError;
