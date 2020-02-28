'use strict';

module.exports = (data = null) => 
  data === undefined ? 'undefined' : data === null ? 'null' : Number.isNaN(NaN) ? 'NaN' : Object.getPrototypeOf(data).constructor.name;
  
