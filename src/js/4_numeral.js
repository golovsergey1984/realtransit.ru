const wayScaleOne = document.querySelector('.numeral-scale-way1-box');
const wayScaleTwo = document.querySelector('.numeral-scale-way2-box');
const wayScaleThree = document.querySelector('.numeral-scale-way3-box');
const wayScaleFour = document.querySelector('.numeral-scale-way4-box');
const pointImpulse = document.querySelector('.numeral-point-impulse');
const NumeralCircleBoxOne = document.querySelectorAll(
  '[data-name="numeral circle one"]',
);
const NumeralCircleBoxTwo = document.querySelectorAll(
  '[data-name="numeral circle two"]',
);
const NumeralCircleBoxThree = document.querySelectorAll(
  '[data-name="numeral circle three"]',
);
resultsScaleWayForward();
function resultsScaleWayForward() {
  NumeralCircleBoxOne[0].style.animationName = '';
  NumeralCircleBoxOne[1].style.animationName = '';
  NumeralCircleBoxOne[2].style.animationName = '';
  pointImpulse.classList.remove('hide');
  wayScaleOne.classList.remove('scale-way-white');
  pointImpulse.style.animationName = 'impulse1';
  wayScaleOne.classList.add('scale-way-red');
  setTimeout(function() {
    pointImpulse.classList.add('hide');
    NumeralCircleBoxOne[0].style.animationName = 'pulse1';
    NumeralCircleBoxOne[1].style.animationName = 'pulse2';
    NumeralCircleBoxOne[2].style.animationName = 'pulse3';
    setTimeout(function() {
      wayScaleTwo.classList.remove('scale-way-white');
      pointImpulse.classList.remove('hide');
      wayScaleTwo.classList.add('scale-way-red');
      pointImpulse.style.animationName = 'impulse2';
    }, 3000);
    setTimeout(function() {
      pointImpulse.classList.add('hide');
      NumeralCircleBoxOne[0].style.animationName = '';
      NumeralCircleBoxOne[1].style.animationName = '';
      NumeralCircleBoxOne[2].style.animationName = '';
      NumeralCircleBoxTwo[0].style.animationName = 'pulse1';
      NumeralCircleBoxTwo[1].style.animationName = 'pulse2';
      NumeralCircleBoxTwo[2].style.animationName = 'pulse3';
    }, 4000);
    setTimeout(function() {
      pointImpulse.classList.remove('hide');
      pointImpulse.style.animationName = 'impulse3';
      wayScaleThree.classList.remove('scale-way-white');
      wayScaleThree.classList.add('scale-way-red');
    }, 7000);
    setTimeout(function() {
      pointImpulse.classList.add('hide');
      NumeralCircleBoxTwo[0].style.animationName = '';
      NumeralCircleBoxTwo[1].style.animationName = '';
      NumeralCircleBoxTwo[2].style.animationName = '';
      NumeralCircleBoxThree[0].style.animationName = 'pulse1';
      NumeralCircleBoxThree[1].style.animationName = 'pulse2';
      NumeralCircleBoxThree[2].style.animationName = 'pulse3';
    }, 8000);
    setTimeout(function() {
      pointImpulse.classList.remove('hide');
      wayScaleFour.classList.remove('scale-way-white');
      wayScaleFour.classList.add('scale-way-red');
      pointImpulse.style.animationName = 'impulse4';
    }, 11000);
    setTimeout(function() {
      pointImpulse.classList.add('hide');
      resultsScaleWayBack();
    }, 12000);
  }, 1000);
}

function resultsScaleWayBack() {
  wayScaleFour.classList.remove('scale-way-red');
  pointImpulse.classList.remove('hide');
  wayScaleFour.classList.add('scale-way-white');
  pointImpulse.style.animationName = 'impulse4-4';
  NumeralCircleBoxThree[0].style.animationName = '';
  NumeralCircleBoxThree[1].style.animationName = '';
  NumeralCircleBoxThree[2].style.animationName = '';
  setTimeout(function() {
    pointImpulse.classList.add('hide');
    NumeralCircleBoxThree[0].style.animationName = 'pulse1';
    NumeralCircleBoxThree[1].style.animationName = 'pulse2';
    NumeralCircleBoxThree[2].style.animationName = 'pulse3';
    setTimeout(function() {
      wayScaleThree.classList.remove('scale-way-red');
      pointImpulse.classList.remove('hide');
      pointImpulse.style.animationName = 'impulse4-3';
      wayScaleThree.classList.add('scale-way-white');
    }, 3000);
    setTimeout(function() {
      pointImpulse.classList.add('hide');
      NumeralCircleBoxThree[0].style.animationName = '';
      NumeralCircleBoxThree[1].style.animationName = '';
      NumeralCircleBoxThree[2].style.animationName = '';
      NumeralCircleBoxTwo[0].style.animationName = 'pulse1';
      NumeralCircleBoxTwo[1].style.animationName = 'pulse2';
      NumeralCircleBoxTwo[2].style.animationName = 'pulse3';
    }, 4000);
    setTimeout(function() {
      wayScaleTwo.classList.remove('scale-way-red');
      pointImpulse.classList.remove('hide');
      pointImpulse.style.animationName = 'impulse4-2';
      wayScaleTwo.classList.add('scale-way-white');
    }, 7000);
    setTimeout(function() {
      pointImpulse.classList.add('hide');
      NumeralCircleBoxTwo[0].style.animationName = '';
      NumeralCircleBoxTwo[1].style.animationName = '';
      NumeralCircleBoxTwo[2].style.animationName = '';
      NumeralCircleBoxOne[0].style.animationName = 'pulse1';
      NumeralCircleBoxOne[1].style.animationName = 'pulse2';
      NumeralCircleBoxOne[2].style.animationName = 'pulse3';
    }, 8000);
    setTimeout(function() {
      wayScaleOne.classList.remove('scale-way-red');
      pointImpulse.classList.remove('hide');
      pointImpulse.style.animationName = 'impulse4-1';
      wayScaleOne.classList.add('scale-way-white');
    }, 11000);
    setTimeout(function() {
      pointImpulse.classList.add('hide');
      resultsScaleWayForward();
    }, 12000);
  }, 1000);
}
