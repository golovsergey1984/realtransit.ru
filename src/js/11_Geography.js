const nodeGeographyCirclesOne = document.querySelectorAll(
  '.geography-svg-circle-one',
);
const geographyCirclesOne = Array.from(nodeGeographyCirclesOne);

const nodeGeographyCirclesTwo = document.querySelectorAll(
  '.geography-svg-circle-two',
);
const geographyCirclesTwo = Array.from(nodeGeographyCirclesTwo);

var geographyCircleOnChange = 0;
geographyCircleImpulseStart(geographyCircleOnChange);
function geographyCircleImpulseStart(i) {
  geographyCirclesOne[geographyCircleOnChange].style.animationName = 'pulse111';
  geographyCirclesTwo[geographyCircleOnChange].style.animationName = 'pulse112';
  geographyLoopCircles();
}
function geographyLoopCircles() {
  setTimeout(function() {
    geographyCirclesOne[geographyCircleOnChange].style.animationName = '';
    geographyCirclesTwo[geographyCircleOnChange].style.animationName = '';
    if (geographyCircleOnChange === geographyCirclesTwo.length - 1) {
      geographyCircleOnChange = 0;
    } else {
      geographyCircleOnChange++;
    }

    geographyCirclesOne[geographyCircleOnChange].style.animationName =
      'pulse111';
    geographyCirclesTwo[geographyCircleOnChange].style.animationName =
      'pulse112';
  }, 3000);
  setTimeout(function() {
    geographyLoopCircles();
  }, 3000);
}
