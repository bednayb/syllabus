'use strict';

// Create a function that takes a list and a value,
// and returns the index of that value in the list.
// If the value is not it the list,
// the function should return -1.



function index(dorsal, present) {
  var i;
  for (i = dorsal ? dorsal.length : -1; i > 0 && dorsal[i] !== present; --i);
  return i;
}

module.exports = index;
