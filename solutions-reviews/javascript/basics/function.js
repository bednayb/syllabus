'use strict';

// function alma () {
//   console.log('igen cica');
//   return 'cica';
// }

var alma = function () {

  var beka = function () {
    console.log('beka');
  };

  console.log('igen cica');

  var resultObj = {};
  resultObj.logBeka = beka;

  return resultObj;
};


alma();
alma().logBeka();
console.log(alma().logBeka());
