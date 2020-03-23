const rivalCar = document.getElementById('rival car');
const rivalScale = document.querySelector('.rivals-circle-nav');
const nodeRivalScaleCircle = document.querySelectorAll('.nav-rivals-li');
const rivalScaleCircle = Array.from(nodeRivalScaleCircle);
const nodeRivalPoint = document.querySelectorAll('.chek-point-color');
const rivalPoint = Array.from(nodeRivalPoint);
const nodeCircleSvg = document.querySelectorAll('.rivals-case-svg');
const circleSvg = Array.from(nodeCircleSvg);

const nodeRivalModalWindows = document.querySelectorAll('.rivalsModal, hide');
const rivalModalWindow = Array.from(nodeRivalModalWindows);

const nodeSiteName = document.querySelectorAll(
  '[data-name="rivals-site-name"]',
);
const siteName = Array.from(nodeSiteName);

innerImgCase(0);
var countMove = 0;

rivalScale.onclick = function(event) {
  let target = event.target;
  let count = target.getAttribute('data-name');
  const countNumberCircle = Number(count);
  console.log(countNumberCircle);
  console.log(countMove);
  rivalScaleCircle[countMove].classList.remove('nav-li-active');
  rivalScaleCircle[countNumberCircle].classList.add('nav-li-active');
  countMove = countNumberCircle;
  innerImgCase(countMove);

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
    circleSvg[a].classList.add('hide');
    siteName[a].classList.add('hide');
    rivalScaleCircle[a].classList.remove('nav-li-active');
  }

  circleSvg[e].classList.remove('hide');
  siteName[e].classList.remove('hide');
  rivalScaleCircle[e].classList.add('nav-li-active');
}

// Открываем текущее модальное окно
function rivalModal() {
  if (countMove < 0) {
    countMove = 3;
  }
  if (countMove > 3) {
    countMove = 0;
  }
  console.log(rivalModalWindow);
  rivalModalWindow[countMove].classList.remove('hide');
  scrollOff(countMove);
}
// Отключаем скролл body под модальным окном
function scrollOff(countMove) {
  rivalModalWindow[countMove].addEventListener('mousewheel', function(e) {
    e.wheelDeltaY ||
      (e.originalEvent &&
        (e.originalEvent.wheelDeltaY || e.originalEvent.wheelDelta)) ||
      e.wheelDelta ||
      0;
    e.stopPropagation();
    e.preventDefault();
  });
}

// Переход на сайт по клику "Смотреть"
function onSubmitWatchUrl(event) {
  event.setAttribute('rel', 'noopener noreferrer');
  let url = event.getAttribute('href');
  let otherWindow = window.open();
  otherWindow.opener = null;
  otherWindow.location = url;
}

// Закрытие модального окна
function modalClose() {
  rivalModalWindow[countMove].classList.add('hide');
}

/* function innerImgCase(e) {
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
  } */
