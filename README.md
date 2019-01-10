# gettype.js  

[![Build Status](https://travis-ci.org/iamuchejude/gettype.js.svg?branch=master)](https://travis-ci.org/iamuchejude/gettype.js)  

> Better alternative for 'typeof' in JavaScript

## Install

```sh
$ npm i getType.js
```

## Usage

```js
const getType = require('gettype.js');

getType('I am a string');
getType(new String(2019));
// => String

getType(2019);
// => Number

getType([1, 2, 3, 4, 5]);
// => Array

getType({ a: 1, b: 2 });
// => Object

getType(new Set([2, 4, 6]));
// => Set

getType(function() {});
// => Function

getType(true);
// => Boolean

getType(null);
// => Null

getType();
getType(undefined);
// => Undefined

getType(NaN);
getType('n' * 2);
// => NaN

getType(/regExp/);
// => RegExp

getType(new TypeError());
// => TypeError

getType(new Date());
getType(new Date(2000, 3, 5));
// => Date

class TestClass {}

getType(new TestClass());
// => TestClass

```  

## License
MIT © [Uche Jude](https://iamuchejude.com)