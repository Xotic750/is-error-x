'use strict';

var isError;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  isError = require('../../index.js');
} else {
  isError = returnExports;
}

describe('isError', function () {
  it('should return `false` for non-error objects', function () {
    var values = [
        true,
        'abc',
        1,
        null,
        undefined,
        function () {},
        [],
        /r/
      ],
      expected = values.map(function () {
        return false;
      }),
      actual = values.map(isError);
    expect(actual).toEqual(expected);
  });

  it('should return `true` for error objects', function () {
    var values = [
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
      Object.create(Error.prototype)
    ];
    var expected = values.map(function () {
      return true;
    });
    var actual = values.map(isError);
    expect(actual).toEqual(expected);
  });

  it('should work with sub-classed Error', function () {
    var MyError = function () {};
    MyError.prototype = Object.create(Error.prototype);
    MyError.prototype.constructor = MyError;
    MyError.prototype.name = 'MyError';

    var MySubError = function () {};
    MySubError.prototype = Object.create(MyError.prototype);
    MySubError.prototype.constructor = MySubError;
    MySubError.prototype.name = 'MySubError';

    expect(isError(new MyError())).toEqual(true, 'MyError');
    expect(isError(new MySubError())).toEqual(true, 'MySubError');
  });
});
