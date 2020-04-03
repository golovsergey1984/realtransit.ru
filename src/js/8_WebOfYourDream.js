const yourDreameSlide = document.querySelector('.yourdreame-box');

const nodeYourDreameSVG = document.querySelectorAll(
  '.yourdreame-bg-main-box-SVG',
);
const yourDreameSVG = Array.from(nodeYourDreameSVG);

var yourDreameSVGCount = 1;

function yourDreameSlideVisible() {
  yourDreameSVG[0].children[0].style.animationName = 'change_fill_active';
  yourDreameSVG[0].children[0].style.animationDuration = '4s';

  setTimeout(function() {
    yourDreameSVG[yourDreameSVGCount].children[0].style.animationName =
      'change_fill_active';
    yourDreameSVG[yourDreameSVGCount].children[0].style.animationDuration =
      '4s';
    yourDreameSVGCount++;
    if (yourDreameSVGCount < yourDreameSVG.length) {
      loopCall();
    } else {
      yourDreameSVGCount = 0;
    }
  }, 500);
  function loopCall() {
    yourDreameSlideVisible();
  }
  /*  for (let z = 0; z < yourDreameSVG.length; z++) {
    yourDreameSVG[z].children[0].style.animationName = 'change_fill_active';
    yourDreameSVG[z].children[0].style.animationDuration = '5s';
    setTimeout(function() {}, 5000);
  } */
}

/* function yourDreameCicleLoop(yourDreameSVGCount) {
  console.log(yourDreameSVGCount);
  setTimeout(function() {
    yourDreameSVG[yourDreameSVGCount].children[0].style.animationName =
      'change_fill_active';
    yourDreameSVG[yourDreameSVGCount].children[0].style.animationDuration =
      '5s';
    yourDreameSVGCount = yourDreameSVGCount + 1;
    console.log(yourDreameSVGCount);
    if (yourDreameSVGCount < yourDreameSVG.length) {
      loopCall();
    } else {
      yourDreameSVGCount = 0;
    }
  }, 1000);
  function loopCall() {
    yourDreameCicleLoop();
  }
} */

function yourDreameSlideUnVisible() {
  for (let z = 0; z < yourDreameSVG.length; z++) {
    yourDreameSVG[z].children[0].style.animationName = 'change_fill_passive';
    yourDreameSVG[z].children[0].style.animationDuration = '1s';
    yourDreameSVGCount = 0;
  }
}

//Intersection Observer API: функция, которая наблюдает за элементом и его появлением в браузере при пролистывании
const yourDreameObserver = new IntersectionObserver(
  function(entries) {
    if (entries[0].isIntersecting === true) {
      yourDreameSlideVisible();
    } else {
      yourDreameSlideUnVisible();
    }
  },

  { threshold: [1] },
);

yourDreameObserver.observe(yourDreameSlide);
