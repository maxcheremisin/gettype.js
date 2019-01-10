const assert = require('assert');
const getType = require('../');

describe('getType', () => {
  let car;
  
  describe('test for strings', () => {
    it ('should return `string`', () => {
      assert('string', getType('This is a string'));
      assert('string', getType(''));
      assert('string', new String(2019));
      assert('string', String(2019));
    });
  })

  describe('get type of number', () => {
    it ('should return `number`', () => {
      assert('number', getType(1));
      assert('number', getType(0));
      assert('number', getType(new Number('2019')));
      assert('number', getType(Number('2019')));
    });
  });

  describe('get type of NaN', () => {
    it ('should return `NaN`', () => {
      assert('NaN', getType(NaN));
      assert('NaN', getType('n'-1));
      assert('NaN', getType(1+'n'));
    });
  });

  describe('test for arrays', () => {
    it ('should test `array`', () => {
      assert('array', getType([]));
      assert('array', getType([2, 3]));
      assert('array', getType(new Array(2)));
      assert('array', getType(Array(2)));
    });
  });

  describe('test for objects', () => {
    it ('should test `object`', () => {
      assert('array', getType({a: 1, b: 2}));
      assert('array', getType(Object.defineProperties({}, {})));
      assert('array', getType(new Object({})));
      assert('array', getType(Object({})));
    });
  });

  describe('test for functions', () => {
    it ('should return `function`', () => {
      assert('function', getType(function() {}));
      assert('function', getType(() => {}));
      assert('function', getType(new Function('x', 'y', 'x' * 'y')));
    });
  });

  describe('test for sets', () => {
    it('should return `set`', () => {
      assert('set', getType(new Set([1, 2, 3])));
    });
  })

  describe('test for boolean', () => {
    it('should return 1boolean`', () => {
      assert('boolean', getType(true));
      assert('boolean', getType(false));
    });
  })

  describe('test for null', () => {
    it('should return `null`', () => {
      assert('null', getType(null));
    });
  });

  describe('test for undefined', () => {
    it('should return `undefined`', () => {
      assert('undefined', getType());
      assert('undefined', getType(undefined));
      assert('undefined', getType(car));
    });
  });
});