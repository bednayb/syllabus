'use strict';

function alma () {
  console.log('most futottam le (alma voltam)');
  return function () {
    console.log('most futott le a fuggveny amit visszaadtam');
  }
}

function beka (callback) {
  console.log('most futott le a beka');
  callback();
}

beka(alma());

// var almaVisszateresiErteke = alma();
// almaVisszateresiErteke();
//
// setTimeout(alma, 1000);
// setTimeout(alma(), 1000);
