'use strict';

function letterReducer (string) {
  var stringArray = string.split('');
// ['a', 'l', ...]
  var charProcessor = function(charCounterObject,currentChar){
      if (charCounterObject[currentChar]) {
        charCounterObject[currentChar]++;
      } else {
        charCounterObject[currentChar] = 1;
      }
      return charCounterObject;
  }
  var charCountInString = stringArray.reduce(charProcessor, {});
  // {
  //   a: 2,
  //   l: 1,
  //   ...
  // }
  return charCountInString;
}

function letterReducerForEach (string) {
  var stringArray = string.split('');
// ['a', 'l', ...]
  var charCountInString = {};
// {
//   a: 2,
//   l: 1,
//   ...
// }
  var charProcessor = function(currentChar){
      if (charCountInString[currentChar]) {
        charCountInString[currentChar]++;
      } else {
        charCountInString[currentChar] = 1;
      }
  }
  stringArray.forEach(charProcessor);
  return charCountInString;
}

console.log(letterReducer('alma'));
console.log(letterReducerForEach('alma'));
