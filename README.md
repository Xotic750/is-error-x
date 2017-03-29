<a name="module_is-error-x"></a>

## is-error-x
<a href="https://travis-ci.org/Xotic750/is-error-x"
title="Travis status">
<img src="https://travis-ci.org/Xotic750/is-error-x.svg?branch=master"
alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/is-error-x"
title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-error-x.svg"
alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/is-error-x#info=devDependencies"
title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-error-x/dev-status.svg"
alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/is-error-x" title="npm version">
<img src="https://badge.fury.io/js/is-error-x.svg"
alt="npm version" height="18">
</a>

isError module. Detect whether a value is an error.

Requires ES3 or above.

**Version**: 1.2.0  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_is-error-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>boolean</code> ⏏
Determine whether or not a given `value` is an `Error` type.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - Returns `true` if `value` is an `Error` type,
 else `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The object to be tested. |

**Example**  
```js
var isError = require('is-error-x');

isError(); // false
isError(Number.MIN_VALUE); // false
isError('abc'); // false
isError(new Error()); //true
```
