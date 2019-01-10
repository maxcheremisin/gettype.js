# gettype.js  

[![Build Status](https://travis-ci.org/iamuchejude/gettype.js.svg?branch=master)](https://travis-ci.org/iamuchejude/gettype.js)  

> Better alternative for 'typeof' in JavaScript

## Install

```sh
$ npm i gettype.js
```

## Usage

```js
const gettype = require('gettype.js');

gettype('I am a string');
gettype(new String(2019));
// => string

gettype(2019);
// => number

gettype([1, 2, 3, 4, 5]);
// => array

gettype({ a: 1, b: 2 });
// => object

gettype(new Set([2, 4, 6]));
// => set

gettype(function() {});
// => function

gettype(true);
// => boolean

gettype(null);
// => null

gettype();
gettype(undefined);
// => undefined

```  


## License
MIT © [Uche Jude](https://iamuchejude.com)