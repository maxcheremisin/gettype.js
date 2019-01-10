const assert = require('assert');
const gettype = require('../');


describe('gettype', () => {
  let car;
  
  describe('test for strings', () => {
    it ('should return `string`', () => {
      assert('string', gettype('This is a string'));
      assert('string', gettype(''));
      assert('string', new String(2019));
      assert('string', String(2019));
    });
  })

  describe('get type of number', () => {
    it ('should return `number`', () => {
      assert('number', gettype(1));
      assert('number', gettype(0));
      assert('number', gettype(new Number('2019')));
      assert('number', gettype(Number('2019')));
    });
  });

  describe('test for arrays', () => {
    it ('should test `array`', () => {
      assert('array', gettype([]));
      assert('array', gettype([2, 3]));
      assert('array', gettype(new Array(2)));
      assert('array', gettype(Array(2)));
    });
  });

  describe('test for objects', () => {
    it ('should test `object`', () => {
      assert('array', gettype({a: 1, b: 2}));
      assert('array', gettype(Object.defineProperties({}, {})));
      assert('array', gettype(new Object({})));
      assert('array', gettype(Object({})));
    });
  });

  describe('test for functions', () => {
    it ('should return `function`', () => {
      assert('function', gettype(function() {}));
      assert('function', gettype(() => {}));
      assert('function', gettype(new Function('x', 'y', 'x' * 'y')));
    });
  });

  describe('test for sets', () => {
    it('should return `set`', () => {
      assert('set', gettype(new Set([1, 2, 3])));
    });
  })

  describe('test for boolean', () => {
    it('should return 1boolean`', () => {
      assert('boolean', gettype(true));
      assert('boolean', gettype(false));
    });
  })

  describe('test for null', () => {
    it('should return `null`', () => {
      assert('null', gettype(null));
    });
  });

  describe('test for undefined', () => {
    it('should return `undefined`', () => {
      assert('undefined', gettype());
      assert('undefined', gettype(undefined));
      assert('undefined', gettype(car));
    });
  });
});