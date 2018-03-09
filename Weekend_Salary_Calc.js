console.log( '1.js');

$(document).ready(readyNow);

function readyNow() {
  console.log('3.JQ');
  $('#submit').on('click', someFunction);
//this will be where we put our mouse clicks - ref color blocks assignment
}

function someFunction() {
console.log('in someFunction');
}

console.log('2.JS');
