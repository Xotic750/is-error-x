import noop from 'lodash/noop';
import isError from '../src/is-error-x';

describe('isError', function() {
  it('should return `false` for non-error objects', function() {
    expect.assertions(1);
    const values = [true, 'abc', 1, null, undefined, noop, [], /r/];
    const expected = values.map(function() {
      return false;
    });
    const actual = values.map(isError);
    expect(actual).toStrictEqual(expected);
  });

  it('should return `true` for error objects', function() {
    expect.assertions(1);
    const values = [
      new Error(),
      new TypeError(),
      new SyntaxError(),
      new RangeError(),
      new URIError(),
      new ReferenceError(),
      new EvalError(),
      Error.prototype,
      TypeError.prototype,
      SyntaxError.prototype,
      RangeError.prototype,
      URIError.prototype,
      ReferenceError.prototype,
      EvalError.prototype,
      Object.create(Error.prototype),
    ];
    const expected = values.map(function() {
      return true;
    });
    const actual = values.map(isError);
    expect(actual).toStrictEqual(expected);
  });

  it('should work with sub-classed Error', function() {
    expect.assertions(2);

    const MyError = function() {};

    MyError.prototype = Object.create(Error.prototype);
    MyError.prototype.constructor = MyError;
    MyError.prototype.name = 'MyError';

    const MySubError = function() {};

    MySubError.prototype = Object.create(MyError.prototype);
    MySubError.prototype.constructor = MySubError;
    MySubError.prototype.name = 'MySubError';

    expect(isError(new MyError())).toStrictEqual(true, 'MyError');
    expect(isError(new MySubError())).toStrictEqual(true, 'MySubError');
  });
});
