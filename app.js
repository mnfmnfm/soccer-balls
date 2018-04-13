'use strict';
function clickLogger() {
  console.log('there was a click!');
}
function setUpBalls(event) {

  var balls = document.getElementsByClassName('soccer-ball-pic');

  for (var ball of balls) {
    debugger
    ball.addEventListener('click', clickLogger);
  }
}

document.getElementsByTagName('h1')[0].addEventListener('click', setUpBalls);

console.log('it\'s linked');
