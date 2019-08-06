<a
  href="https://travis-ci.org/Xotic750/is-error-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/is-error-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/is-error-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-error-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/is-error-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-error-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/is-error-x"
  title="npm version">
<img src="https://badge.fury.io/js/is-error-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/is-error-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/is-error-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/is-error-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/is-error-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/is-error-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/is-error-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_is-error-x"></a>

## is-error-x

Detect whether a value is an error.

<a name="exp_module_is-error-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>boolean</code> ⏏

Determine whether or not a given `value` is an `Error` type.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - Returns `true` if `value` is an `Error` type,
else `false`.

| Param | Type            | Description              |
| ----- | --------------- | ------------------------ |
| value | <code>\*</code> | The object to be tested. |

**Example**

```js
import isError from 'is-error-x';

console.log(isError()); // false
console.log(isError(Number.MIN_VALUE)); // false
console.log(isError('abc')); // false
console.log(isError(new Error())); //true
```
