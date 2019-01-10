const assert = require('assert');
const getType = require('../');

describe('getType', () => {
  class TestClass {}
  let car;
  
  describe('test for strings', () => {
    it ('should return `string`', () => {
      assert('String', getType('This is a string'));
      assert('String', getType(''));
      assert('String', new String(2019));
      assert('String', String(2019));
    });
  })

  describe('get type of number', () => {
    it ('should return `number`', () => {
      assert('Number', getType(1));
      assert('Number', getType(0));
      assert('Number', getType(new Number('2019')));
      assert('Number', getType(Number('2019')));
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
      assert('Array', getType([]));
      assert('Array', getType([2, 3]));
      assert('Array', getType(new Array(2)));
      assert('Array', getType(Array(2)));
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
      assert('Function', getType(function() {}));
      assert('Function', getType(() => {}));
      assert('Function', getType(new Function('x', 'y', 'x' * 'y')));
    });
  });

  describe('test for sets', () => {
    it('should return `set`', () => {
      assert('Set', getType(new Set([1, 2, 3])));
    });
  })

  describe('test for boolean', () => {
    it('should return 1boolean`', () => {
      assert('Boolean', getType(true));
      assert('Boolean', getType(false));
    });
  })

  describe('test for null', () => {
    it('should return `null`', () => {
      assert('Null', getType(null));
    });
  });

  describe('test for undefined', () => {
    it('should return `undefined`', () => {
      assert('Undefined', getType());
      assert('Undefined', getType(undefined));
      assert('Undefined', getType(car));
    });
  });

  describe('more tests', () => {
    it ('should return the right datatype', () => {
      assert('Date', getType(new Date()));
      assert('Date', getType(new Date(2018, 7, 2)));
      assert('TypeError', getType(new TypeError()));
      assert('RegExp', getType(/regExp/));
      assert('TextClass', getType(new TestClass()));
    })
  })
});