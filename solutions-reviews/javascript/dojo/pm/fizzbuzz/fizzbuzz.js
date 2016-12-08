'use strict';

function fizzbuzz(index) {
  var result = [];
  var i = 1;
  while (i < 101) {
    if (i % 15 === 0) {
      result.push('fizzbuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
    i++; 
  }
  if (typeof index === 'undefined'){
    return result;
  }
  return result[index-1];
}; 

module.exports = fizzbuzz;
