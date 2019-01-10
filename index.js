'use strict';

module.exports = (data = null) => 
  data === undefined ? 'undefined' : data === null ? 'null' : Object.getPrototypeOf(data).constructor.name.toLowerCase();
  