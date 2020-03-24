"use strict";

var rivalCar = document.getElementById('rival car');
var rivalScale = document.querySelector('.rivals-circle-nav');
var nodeRivalScaleCircle = document.querySelectorAll('.nav-rivals-li');
var rivalScaleCircle = Array.from(nodeRivalScaleCircle);
var nodeRivalPoint = document.querySelectorAll('.chek-point-color');
var rivalPoint = Array.from(nodeRivalPoint);
var nodeCircleSvg = document.querySelectorAll('.rivals-case-svg');
var circleSvg = Array.from(nodeCircleSvg);
var nodeRivalModalWindows = document.querySelectorAll('.rivalsModal, hide');
var rivalModalWindow = Array.from(nodeRivalModalWindows);
var nodeSiteName = document.querySelectorAll('[data-name="rivals-site-name"]');
var siteName = Array.from(nodeSiteName);
innerImgCase(0);
var countMove = 0;

rivalScale.onclick = function (event) {
  var target = event.target;
  var count = target.getAttribute('data-name');
  var countNumberCircle = Number(count);
  console.log(countNumberCircle);
  console.log(countMove);

  if (countMove < 0 && countNumberCircle == 0) {
    console.log('Я подключен!');

    for (var z = 0; z < rivalPoint.length; z++) {
      rivalPoint[z].classList.remove('red-point');
      rivalPoint[z].classList.add('grey-point');
    }

    innerImgCase(0);
    console.log('Я уже тут');
    countMove = countNumberCircle + 4;
    console.log(countMove);
    rivalCar.className = 'rivals-car move-car-fwd-section-' + countMove;
  }

  if (countMove < 0 || countMove > 3) {
    countMove = countNumberCircle;
  }

  if (countMove == 0 && countNumberCircle == 3) {
    for (var _z = 0; _z < rivalPoint.length; _z++) {
      rivalPoint[_z].classList.add('red-point');

      rivalPoint[_z].classList.remove('grey-point');
    }

    rivalCar.className = 'rivals-car move-car-back-section-' + countMove;
    innerImgCase(3);
    countMove = countMove - 1;
  } else {
    rivalScaleCircle[countMove].classList.remove('nav-li-active');
    rivalScaleCircle[countNumberCircle].classList.add('nav-li-active');
    countMove = countNumberCircle;
    innerImgCase(countMove);
    /* rivalCar.className = 'rivals-car move-car-fwd-section-' + countMove; */
  }
  /*   rivalScaleCircle[countMove].classList.remove('nav-li-active');
  rivalScaleCircle[countNumberCircle].classList.add('nav-li-active');
  countMove = countNumberCircle;
  innerImgCase(countMove);
    rivalCar.className = 'rivals-car move-car-fwd-section-' + countMove; */

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
      for (var z = 0; z < rivalPoint.length; z++) {
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
      for (var _z2 = 0; _z2 < rivalPoint.length; _z2++) {
        rivalPoint[_z2].classList.remove('grey-point');

        rivalPoint[_z2].classList.add('red-point');
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
  for (var a = 0; a < circleSvg.length; a++) {
    circleSvg[a].classList.add('hide');
    siteName[a].classList.add('hide');
    rivalScaleCircle[a].classList.remove('nav-li-active');
  }

  circleSvg[e].classList.remove('hide');
  siteName[e].classList.remove('hide');
  rivalScaleCircle[e].classList.add('nav-li-active');
} // Открываем текущее модальное окно


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
} // Отключаем скролл body под модальным окном


function scrollOff(countMove) {
  rivalModalWindow[countMove].addEventListener('mousewheel', function (e) {
    e.wheelDeltaY || e.originalEvent && (e.originalEvent.wheelDeltaY || e.originalEvent.wheelDelta) || e.wheelDelta || 0;
    e.stopPropagation();
    e.preventDefault();
  });
} // Переход на сайт по клику "Смотреть"


function onSubmitWatchUrl(event) {
  event.setAttribute('rel', 'noopener noreferrer');
  var url = event.getAttribute('href');
  var otherWindow = window.open();
  otherWindow.opener = null;
  otherWindow.location = url;
} // Закрытие модального окна


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
"use strict";

var wayScaleOne = document.querySelector('.numeral-scale-way1-box');
var wayScaleTwo = document.querySelector('.numeral-scale-way2-box');
var wayScaleThree = document.querySelector('.numeral-scale-way3-box');
var wayScaleFour = document.querySelector('.numeral-scale-way4-box');
var NumeralCircleBoxOne = document.querySelectorAll('[data-name="numeral circle one"]');
var NumeralCircleBoxTwo = document.querySelectorAll('[data-name="numeral circle two"]');
var NumeralCircleBoxThree = document.querySelectorAll('[data-name="numeral circle three"]');
resultsScaleWayForward();

function resultsScaleWayForward() {
  NumeralCircleBoxOne[0].style.animationName = '';
  NumeralCircleBoxOne[1].style.animationName = '';
  NumeralCircleBoxOne[2].style.animationName = '';
  wayScaleOne.classList.remove('scale-way-white');
  wayScaleOne.classList.add('scale-way-red');
  setTimeout(function () {
    NumeralCircleBoxOne[0].style.animationName = 'pulse1';
    NumeralCircleBoxOne[1].style.animationName = 'pulse2';
    NumeralCircleBoxOne[2].style.animationName = 'pulse3';
    setTimeout(function () {
      wayScaleTwo.classList.remove('scale-way-white');
      wayScaleTwo.classList.add('scale-way-red');
    }, 3000);
    setTimeout(function () {
      NumeralCircleBoxOne[0].style.animationName = '';
      NumeralCircleBoxOne[1].style.animationName = '';
      NumeralCircleBoxOne[2].style.animationName = '';
      NumeralCircleBoxTwo[0].style.animationName = 'pulse1';
      NumeralCircleBoxTwo[1].style.animationName = 'pulse2';
      NumeralCircleBoxTwo[2].style.animationName = 'pulse3';
    }, 4000);
    setTimeout(function () {
      wayScaleThree.classList.remove('scale-way-white');
      wayScaleThree.classList.add('scale-way-red');
    }, 7000);
    setTimeout(function () {
      NumeralCircleBoxTwo[0].style.animationName = '';
      NumeralCircleBoxTwo[1].style.animationName = '';
      NumeralCircleBoxTwo[2].style.animationName = '';
      NumeralCircleBoxThree[0].style.animationName = 'pulse1';
      NumeralCircleBoxThree[1].style.animationName = 'pulse2';
      NumeralCircleBoxThree[2].style.animationName = 'pulse3';
    }, 8000);
    setTimeout(function () {
      wayScaleFour.classList.remove('scale-way-white');
      wayScaleFour.classList.add('scale-way-red');
    }, 11000);
    setTimeout(function () {
      resultsScaleWayBack();
    }, 12000);
  }, 1000);
}

function resultsScaleWayBack() {
  wayScaleFour.classList.remove('scale-way-red');
  wayScaleFour.classList.add('scale-way-white');
  NumeralCircleBoxThree[0].style.animationName = '';
  NumeralCircleBoxThree[1].style.animationName = '';
  NumeralCircleBoxThree[2].style.animationName = '';
  setTimeout(function () {
    NumeralCircleBoxThree[0].style.animationName = 'pulse1';
    NumeralCircleBoxThree[1].style.animationName = 'pulse2';
    NumeralCircleBoxThree[2].style.animationName = 'pulse3';
    setTimeout(function () {
      wayScaleThree.classList.remove('scale-way-red');
      wayScaleThree.classList.add('scale-way-white');
    }, 3000);
    setTimeout(function () {
      NumeralCircleBoxThree[0].style.animationName = '';
      NumeralCircleBoxThree[1].style.animationName = '';
      NumeralCircleBoxThree[2].style.animationName = '';
      NumeralCircleBoxTwo[0].style.animationName = 'pulse1';
      NumeralCircleBoxTwo[1].style.animationName = 'pulse2';
      NumeralCircleBoxTwo[2].style.animationName = 'pulse3';
    }, 4000);
    setTimeout(function () {
      wayScaleTwo.classList.remove('scale-way-red');
      wayScaleTwo.classList.add('scale-way-white');
    }, 7000);
    setTimeout(function () {
      NumeralCircleBoxTwo[0].style.animationName = '';
      NumeralCircleBoxTwo[1].style.animationName = '';
      NumeralCircleBoxTwo[2].style.animationName = '';
      NumeralCircleBoxOne[0].style.animationName = 'pulse1';
      NumeralCircleBoxOne[1].style.animationName = 'pulse2';
      NumeralCircleBoxOne[2].style.animationName = 'pulse3';
    }, 8000);
    setTimeout(function () {
      wayScaleOne.classList.remove('scale-way-red');
      wayScaleOne.classList.add('scale-way-white');
    }, 11000);
    setTimeout(function () {
      resultsScaleWayForward();
    }, 12000);
  }, 1000);
}
"use strict";

var html = document.querySelector('html');
var subMenu = document.querySelector('.dropdown-content');
var burger = document.querySelector('.burger-btn');

function onChange(e) {
  e.classList.toggle('change');
  subMenu.classList.toggle('show');
}

document.addEventListener('click', function (event) {
  if (!burger.contains(event.target) && !subMenu.contains(event.target)) {
    burger.classList.remove('change');
    subMenu.classList.remove('show');
  }
});

function hideSub(e) {
  if (window.screen.width > 768) {
    return;
  } else {
    burger.classList.remove('change');
    subMenu.classList.remove('show');
  }
}
"use strict";

function getColor(i) {
  var nodeBgImage = document.querySelectorAll('.bgimage');
  var bgImage = Array.from(nodeBgImage);
  var darkColor = 'dark';
  var brightColor = 'bright';
  var currentColor = bgImage[i].getAttribute('data-bgc');
  var nodeMenuListColorOnChange = document.querySelectorAll('[data-color="text change"]');
  var menuListColorOnChange = Array.from(nodeMenuListColorOnChange);
  var menuListSvgColorOnChange = document.querySelector('[data-color="svg change"]');
  var menuPhoneColorOnChange = document.querySelector('[data-color="phone change"]');
  var logo = document.querySelector('.Hmenu-logo');

  if (currentColor === darkColor) {
    for (var count = 0; count < menuListColorOnChange.length; count++) {
      menuListColorOnChange[count].classList.remove('grey');
      menuListColorOnChange[count].classList.add('white-text');
    }

    menuPhoneColorOnChange.classList.remove('nearly-black');
    menuPhoneColorOnChange.classList.add('white-text');
    menuListSvgColorOnChange.style.stroke = 'white';
    logo.src = './images/logo_hover.png';
  } else {
    for (var _count = 0; _count < menuListColorOnChange.length; _count++) {
      menuListColorOnChange[_count].classList.add('grey');
    }

    menuPhoneColorOnChange.classList.add('nearly-black');
    menuListSvgColorOnChange.style.stroke = '';
    logo.src = './images/logo.png';
  }
}
"use strict";

function clientNumber() {
  var clientNumber = document.querySelector('.input-phone');
  var line = document.querySelector('.phone-line'); // Пример условия под точный формат номера телефона +38 012 345 67 89

  /*   let re = /^\+[\d]{2}\ [\d]{3} [\d]{2,3} [\d]{2,3} [\d]{2,3}$/; */
  // Разрешаем все, кроме букв (от 4 до 40 символов)

  var re = /^[+\d\(\)\s\/\\-]{4,40}\d$/;
  var valid = re.test(clientNumber.value);

  if (valid) {
    alert('Ваш номер телефона ' + clientNumber.value + ' успешно отправлен менеджеру QWERTY studio! \n\r Мы свяжемся с Вами в ближайшее время');
    line.classList.remove('red-bg');
    clientNumber.value = '';
    return;
  } else {
    line.classList.add('red-bg');
    return;
  }
}
"use strict";

var rusContent = document.querySelectorAll('[data-leng="rus"]');
var engContent = document.querySelectorAll('[data-leng="eng"]');
var rusFlag = document.getElementById('cover-flag_rus');
var engFlag = document.getElementById('cover-flag_eng');
var arrRusContent = Array.from(rusContent);
var arrEngContent = Array.from(engContent);

function onChangeRus(e) {
  /*  preloadStart(); */
  console.log(engFlag);
  engFlag.classList.remove('cover-flag');
  engFlag.classList.add('cover-flag_onload');
  rusFlag.classList.remove('cover-flag_onload');
  rusFlag.classList.add('cover-flag');

  for (var count = 0; count < arrRusContent.length; count++) {
    arrRusContent[count].classList.remove('hide');
  }

  for (var _count = 0; _count < arrEngContent.length; _count++) {
    arrEngContent[_count].classList.add('hide');
  }
}

function onChangeEng(e) {
  rusFlag.classList.remove('cover-flag');
  rusFlag.classList.add('cover-flag_onload');
  engFlag.classList.remove('cover-flag_onload');
  engFlag.classList.add('cover-flag');
  /*   e.classList.add('cover-flag_onload');
  rusFlag.classList.remove('cover-flag_onload'); */

  /*   console.log(rusFlag); */

  /*  preloadStart(); */

  for (var count = 0; count < arrRusContent.length; count++) {
    arrRusContent[count].classList.add('hide');
  }

  for (var _count2 = 0; _count2 < arrEngContent.length; _count2++) {
    arrEngContent[_count2].classList.remove('hide');
  }
}
"use strict";

var images = document.images;
var imagesTotalCount = images.length;
var imagesLoadedCount = 0;
var preloader = document.getElementById('page-preloader');
var percentageDisplay = document.getElementById('load-percentage');
preloadStart();

function preloadStart() {
  /* preloader.classList.remove('done'); */

  /*   console.log('Я подключился'); */
  if (imagesTotalCount === 0) {
    percentageDisplay.style.width = '100%';
    exitPreloader();
  }

  for (var i = 0; i < imagesTotalCount; i++) {
    var imageClone = new Image();
    imageClone.onload = imageLoaded;
    imageClone.onerror = imageLoaded;
    imageClone.src = images[i].src;
  }

  imageLoaded();
}

function imageLoaded() {
  /*  console.log('Я подключился во 2й функции'); */
  imagesLoadedCount++;
  var widthPreloader = (100 / imagesTotalCount * imagesLoadedCount << 0) + '%';
  percentageDisplay.style.width = widthPreloader;

  if (imagesLoadedCount >= imagesTotalCount) {
    exitPreloader();
  }
}

function exitPreloader() {
  /*  console.log('Я подключился во 3й функции'); */
  document.body.onload = function () {
    /*  console.log('Я подключился во 4й функции'); */
    setTimeout(function () {
      if (!preloader.classList.contains('done')) {
        preloader.classList.add('done');
        var top = anchorsArray[0].offsetTop;
        window.scrollTo({
          top: top,
          behavior: 'instant'
        });
      }
    }, 1000);
  };
}
"use strict";

if (screen.width <= 650) {
  window.location.href = 'https://q-studio.com.ua/mob';
}
"use strict";

function totalPagesInner(arrLength) {
  var totalPages = document.getElementById('total-pages');
  totalPages.innerHTML = arrLength;
}

function currentPageInner(i) {
  var currentPage = document.getElementById('current-page');
  i = i + 1;

  if (i < 10) {
    currentPage.innerHTML = '0' + i;
  } else {
    currentPage.innerHTML = i;
  }
}

function scaleListInner(arrLength) {
  var scaleList = document.getElementById('scale-list');

  for (var a = 0; a < arrLength; a = a + 1) {
    var circle = document.createElement('div');
    var hrefNavCircle = document.createElement('a');
    var li = document.createElement('li');
    li.className = 'li-scale';
    hrefNavCircle.className = 'scale-href';
    hrefNavCircle.href = anchorsArray[a].hash;
    li.appendChild(hrefNavCircle);
    circle.className = 'scale-circle';
    hrefNavCircle.appendChild(circle);
    li.setAttribute('onclick', 'changeCircleScale(this) ');
    scaleList.appendChild(li);
  }
}
/* function onChangeScaleCircleDawn(i) {
  const nodeCircle = document.querySelectorAll('.scale-circle');
  const arrCircle = Array.from(nodeCircle);
  for (let a = 0; a < arrCircle.length; a++) {
    arrCircle[a].classList.remove('active');
  }
  arrCircle[i].classList.add('active');

  if (i === 0) {
    return;
  }
} */


function onChangeScaleCircle(i) {
  var nodeCircle = document.querySelectorAll('.scale-circle');
  var arrCircle = Array.from(nodeCircle);

  for (var a = 0; a < arrCircle.length; a++) {
    arrCircle[a].classList.remove('active');
  }

  arrCircle[i].classList.add('active');

  if (i === 0) {
    return;
  }
}
/* function onChangeScaleCircleUp(i) {
  const nodeCircle = document.querySelectorAll('.scale-circle');
  const arrCircle = Array.from(nodeCircle);
  for (let a = 0; a < arrCircle.length; a++) {
    arrCircle[a].classList.remove('active');
  }
  arrCircle[i].classList.add('active');
  i = i + 1;
  arrCircle[i].classList.remove('active');
} */


function changeCircleScale(e) {
  var a = 0;

  for (a = 0; a < anchorsArray.length; a++) {
    if (anchorsArray[a].hash === e.children[0].hash) {
      if (a === 0) {
        showMenuItems();
      } else {
        hideMenuItems();
      }

      i = a;
      currentPageInner(i);
      onChangeScaleCircle(i);
      getColor(i);
    }
  }
}
"use strict";

var nodeList = document.querySelectorAll('a[href*="#"]');
var anchorsArray = Array.from(nodeList);
var arrLength = anchorsArray.length;
var i = 0;
currentPageInner(i);
totalPagesInner(arrLength);
scaleListInner(arrLength);
onChangeScaleCircle(i);
window.addEventListener('mousewheel', throttle(callback, 800));

function throttle(fn, wait) {
  var time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

function callback() {
  if (event.deltaY > 0) {
    scroll();
  } else {
    scrollTop();
  }
}

function scroll() {
  if (i >= anchorsArray.length - 1) {
    i = anchorsArray.length - 1;
  } else {
    i = i + 1;
  }

  if (i > 0) {
    hideMenuItems();
  }

  location = anchorsArray[i].hash;
  currentPageInner(i);
  onChangeScaleCircle(i);
  getColor(i);
}

function scrollTop() {
  i = i - 1;

  if (i === 0) {
    showMenuItems();
  }

  if (i < 0) {
    i = 0;
  }

  location = anchorsArray[i].hash;
  currentPageInner(i);
  onChangeScaleCircle(i);
  getColor(i);
}

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 38:
      scrollTop();
      break;

    case 40:
      scroll();
      break;
  }
};

function hideMenuItems() {
  document.querySelector('.messengers').classList.add('none');
  document.querySelector('.schedule').classList.add('none');
}

function showMenuItems() {
  document.querySelector('.messengers').classList.remove('none');
  document.querySelector('.schedule').classList.remove('none');
}