'use strict';

// Create a function that takes a list and a value,
// and returns the index of that value in the list.
// If the value is not it the list,
// the function should return -1.

function index(inputList, value) {
  var out = -1;
  if (typeof inputList == 'string' || typeof value == 'string') {
  	throw new Error ('Please don\'t give me string.');
  }
  for (var i=0; i<inputList.length; i++) {
  	if (inputList[i]===value) {
  		out = i;
  	};
  };
  return out;
};

module.exports = index;
