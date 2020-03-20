const rivalCar = document.getElementById('rival car');
const rivalScale = document.querySelector('.rivals-circle-nav');
const nodeRivalScaleCircle = document.querySelectorAll('.nav-rivals-li');
const rivalScaleCircle = Array.from(nodeRivalScaleCircle);
const nodeRivalPoint = document.querySelectorAll('.chek-point-color');
const rivalPoint = Array.from(nodeRivalPoint);
const nodeCircleSvg = document.querySelectorAll('.rivals-case-svg');
const circleSvg = Array.from(nodeCircleSvg);

const nodeRivalModalWindows = document.querySelectorAll('.rivalsModal');
const rivalModalWindow = Array.from(nodeRivalModalWindows);

const nodeSiteName = document.querySelectorAll(
  '[data-name="rivals-site-name"]',
);
const siteName = Array.from(nodeSiteName);

console.log(rivalScaleCircle);

var countMove = 0;

rivalScale.onclick = function(event) {
  let target = event.target;
  let count = target.getAttribute('data-name');

  const countNumberCircle = Number(count);
  console.log(countNumberCircle);
  countMove = countNumberCircle;
  rivalCar.className = 'rivals-car move-car-fwd-section-' + countMove;
};

function rivalInfoMove(e) {
  if (e.name === 'rivalInfoRight') {
    if (countMove < 0) {
      countMove = 3;
    }
    if (countMove == 4) {
      countMove = 0;
    }
    if (countMove == 3) {
      for (let z = 0; z < rivalPoint.length; z++) {
        rivalPoint[z].classList.remove('red-point');
        rivalPoint[z].classList.add('grey-point');
      }
      innerImgCase(0);
      countMove = countMove + 1;
      rivalCar.className = 'rivals-car move-car-fwd-section-' + countMove;
    } else {
      rivalPoint[countMove].classList.remove('grey-point');
      rivalPoint[countMove].classList.add('red-point');
      countMove = countMove + 1;
      rivalCar.className = 'rivals-car move-car-fwd-section-' + countMove;
      innerImgCase(countMove);
    }
  }
  if (e.name === 'rivalInfoLeft') {
    if (countMove > 3) {
      countMove = 0;
    }
    if (countMove < 0) {
      countMove = 3;
    }

    if (countMove == 0) {
      for (let z = 0; z < rivalPoint.length; z++) {
        rivalPoint[z].classList.remove('grey-point');
        rivalPoint[z].classList.add('red-point');
      }
      rivalCar.className = 'rivals-car move-car-back-section-' + countMove;

      innerImgCase(3);
      countMove = countMove - 1;
    } else {
      rivalCar.className = 'rivals-car move-car-back-section-' + countMove;
      countMove = countMove - 1;
      rivalPoint[countMove].classList.remove('red-point');
      rivalPoint[countMove].classList.add('grey-point');
      innerImgCase(countMove);
    }
  }
}

function innerImgCase(e) {
  for (let a = 0; a < circleSvg.length; a++) {
    circleSvg[a].classList.add('hide-case');
    siteName[a].classList.add('hide-case');
  }
  setTimeout(function() {
    for (let a = 0; a < circleSvg.length; a++) {
      circleSvg[a].classList.add('hide');
      siteName[a].classList.add('hide');
      rivalScaleCircle[a].classList.remove('nav-li-active');
    }
  }, 1000);
  setTimeout(function() {
    circleSvg[e].classList.remove('hide', 'hide-case');
    siteName[e].classList.remove('hide', 'hide-case');
    rivalScaleCircle[e].classList.add('nav-li-active');
  }, 1000);
}

function rivalModal() {
  /*  console.log(rivalModalWindow.classList); */
  rivalModalWindow[countMove].classList.remove('hide');
  console.log(countMove);
}

function modalClose() {
  rivalModalWindow[countMove].classList.add('hide');
  console.log('Модалка - закрыта');
}
