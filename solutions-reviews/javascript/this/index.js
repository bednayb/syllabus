'use strict';


function cica (neve) {
  console.log(this);
}
// var alma = 2

// function invocation
cica();
// this: global object nem strict modeban
// this: undefined strict modeban

const kanape = {
  // allat: function cica2 () {
  //   console.log(this);
  // }
  allat: cica,
  // gyumolcs: alma,
  // nyavogas: 'miau'
}

// method invocation
// kanape.allat();
// this: kanape


// cica.prototype.bajusz = 3;
// cica.prototype.getBajusz = function () {
//   console.log(this.bajusz);
// }

// constructor invocation
// var mici = new cica('micicica');
// var feri = new cica('fericica');
// this: cica {}

// feri.getBajusz();
// mici.getBajusz();
// cica.prototype.bajusz = 10;
// feri.getBajusz();
// mici.getBajusz();


// indirect invocation
// cica.call('barmi', 'mici');
// cica.apply('barmi', ['feri']);
// this: amit atadunk parameterkent

// var mici = cica.bind('barmi');
// mici();
