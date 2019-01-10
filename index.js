'use strict';

module.exports = (data = null) => 
  data === undefined ? 'undefined' : data === null ? 'null' : data === NaN ? 'NaN' : Object.getPrototypeOf(data).constructor.name;
  