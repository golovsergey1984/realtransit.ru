"use strict";

var nodeGeographyCirclesOne = document.querySelectorAll('.geography-svg-circle-one');
var geographyCirclesOne = Array.from(nodeGeographyCirclesOne);
var nodeGeographyCirclesTwo = document.querySelectorAll('.geography-svg-circle-two');
var geographyCirclesTwo = Array.from(nodeGeographyCirclesTwo);
var geographyCircleOnChange = 0;
geographyCircleImpulseStart(geographyCircleOnChange);

function geographyCircleImpulseStart(i) {
  geographyCirclesOne[geographyCircleOnChange].style.animationName = 'pulse111';
  geographyCirclesTwo[geographyCircleOnChange].style.animationName = 'pulse112';
  geographyLoopCircles();
}

function geographyLoopCircles() {
  setTimeout(function () {
    geographyCirclesOne[geographyCircleOnChange].style.animationName = '';
    geographyCirclesTwo[geographyCircleOnChange].style.animationName = '';

    if (geographyCircleOnChange === geographyCirclesTwo.length - 1) {
      geographyCircleOnChange = 0;
    } else {
      geographyCircleOnChange++;
    }

    geographyCirclesOne[geographyCircleOnChange].style.animationName = 'pulse111';
    geographyCirclesTwo[geographyCircleOnChange].style.animationName = 'pulse112';
  }, 3000);
  setTimeout(function () {
    geographyLoopCircles();
  }, 3000);
}
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
  var countNumberCircle = Number(count); // НАЗАД: машинка едет с 4й секции на 1ю

  if (countMove == -1 && countNumberCircle == 0 || countMove == 4 && countNumberCircle == 3 || countMove == 3 && countNumberCircle == 0) {
    if (countMove == 4) {
      countMove = 0;
    } else {
      countMove = countNumberCircle + 4;
    }

    for (var z = 0; z < rivalPoint.length; z++) {
      rivalPoint[z].classList.remove('red-point');
      rivalPoint[z].classList.add('grey-point');
    }

    innerImgCase(0);
    rivalCar.className = 'rivals-car move-car-fwd-section-' + countMove;
  }

  if (countMove - 1 == countNumberCircle || countMove == -1 && countNumberCircle == 2) {
    if (countMove == -1) {
      countMove = 3;
    }

    rivalCar.className = 'rivals-car move-car-back-section-' + countMove;
    countMove = countNumberCircle;
    rivalPoint[countMove].classList.add('grey-point');
    rivalPoint[countMove].classList.remove('red-point');
    innerImgCase(countMove);
  }

  if (countMove + 1 == countNumberCircle || countMove == 4 && countNumberCircle == 1) {
    // ВПЕРЕД: машинка едет по шкале на 1н шаг вперед
    if (countMove == 4) {
      countMove = 0;
    }

    rivalPoint[countMove].classList.remove('grey-point');
    rivalPoint[countMove].classList.add('red-point');
    countMove = countNumberCircle;
    rivalCar.className = 'rivals-car move-car-fwd-section-' + countMove;
    innerImgCase(countMove);
  } // НАЗАД: машинка едет с 4й секции на 2ю


  if (countMove == 3 && countNumberCircle == 1 || countMove == -1 && countNumberCircle == 1) {
    for (var _z = 1; _z < rivalPoint.length; _z++) {
      rivalPoint[_z].classList.remove('red-point');

      rivalPoint[_z].classList.add('grey-point');
    }

    rivalCar.className = 'rivals-car move-car-fwd-section-' + 7;
    countMove = countNumberCircle;
    innerImgCase(countMove);
  } // НАЗАД: машинка едет с 3й секции на 1ю


  if (countMove == 2 && countNumberCircle == 0) {
    for (var _z2 = 0; _z2 < rivalPoint.length - 1; _z2++) {
      rivalPoint[_z2].classList.remove('red-point');

      rivalPoint[_z2].classList.add('grey-point');
    }

    rivalCar.className = 'rivals-car move-car-fwd-section-' + 8;
    countMove = countNumberCircle;
    innerImgCase(countMove);
  } // ВПЕРЕД: машинка едет с 1й секции на 3ю


  if (countMove == 0 && countNumberCircle == 2 || countMove == 4 && countNumberCircle == 2) {
    for (var _z3 = 0; _z3 < rivalPoint.length - 1; _z3++) {
      rivalPoint[_z3].classList.add('red-point');

      rivalPoint[_z3].classList.remove('grey-point');
    }

    rivalCar.className = 'rivals-car move-car-fwd-section-' + 5;
    countMove = countNumberCircle;
    innerImgCase(countMove);
  } // ВПЕРЕД: машинка едет с 2й секции на 4ю


  if (countMove == 1 && countNumberCircle == 3) {
    for (var _z4 = 1; _z4 < rivalPoint.length; _z4++) {
      rivalPoint[_z4].classList.add('red-point');

      rivalPoint[_z4].classList.remove('grey-point');
    }

    rivalCar.className = 'rivals-car move-car-fwd-section-' + 6;
    countMove = countNumberCircle;
    innerImgCase(countMove);
  }

  if (countMove < 0 || countMove > 3) {
    countMove = countNumberCircle;
  } // ВПЕРЕД: машинка едет с 1й секции на 4ю


  if (countMove == 0 && countNumberCircle == 3) {
    for (var _z5 = 0; _z5 < rivalPoint.length; _z5++) {
      rivalPoint[_z5].classList.add('red-point');

      rivalPoint[_z5].classList.remove('grey-point');
    }

    rivalCar.className = 'rivals-car move-car-back-section-' + countMove;
    innerImgCase(3);
    countMove = countMove - 1;
  }
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
      for (var _z6 = 0; _z6 < rivalPoint.length; _z6++) {
        rivalPoint[_z6].classList.remove('grey-point');

        rivalPoint[_z6].classList.add('red-point');
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
var pointImpulse = document.querySelector('.numeral-point-impulse');
var NumeralCircleBoxOne = document.querySelectorAll('[data-name="numeral circle one"]');
var NumeralCircleBoxTwo = document.querySelectorAll('[data-name="numeral circle two"]');
var NumeralCircleBoxThree = document.querySelectorAll('[data-name="numeral circle three"]');
resultsScaleWayForward();

function resultsScaleWayForward() {
  NumeralCircleBoxOne[0].style.animationName = '';
  NumeralCircleBoxOne[1].style.animationName = '';
  NumeralCircleBoxOne[2].style.animationName = '';
  pointImpulse.classList.remove('hide');
  wayScaleOne.classList.remove('scale-way-white');
  pointImpulse.style.animationName = 'impulse1';
  wayScaleOne.classList.add('scale-way-red');
  setTimeout(function () {
    pointImpulse.classList.add('hide');
    NumeralCircleBoxOne[0].style.animationName = 'pulse31';
    NumeralCircleBoxOne[1].style.animationName = 'pulse32';
    NumeralCircleBoxOne[2].style.animationName = 'pulse33';
    setTimeout(function () {
      wayScaleTwo.classList.remove('scale-way-white');
      pointImpulse.classList.remove('hide');
      wayScaleTwo.classList.add('scale-way-red');
      pointImpulse.style.animationName = 'impulse2';
    }, 3000);
    setTimeout(function () {
      pointImpulse.classList.add('hide');
      NumeralCircleBoxOne[0].style.animationName = '';
      NumeralCircleBoxOne[1].style.animationName = '';
      NumeralCircleBoxOne[2].style.animationName = '';
      NumeralCircleBoxTwo[0].style.animationName = 'pulse31';
      NumeralCircleBoxTwo[1].style.animationName = 'pulse32';
      NumeralCircleBoxTwo[2].style.animationName = 'pulse33';
    }, 4000);
    setTimeout(function () {
      pointImpulse.classList.remove('hide');
      pointImpulse.style.animationName = 'impulse3';
      wayScaleThree.classList.remove('scale-way-white');
      wayScaleThree.classList.add('scale-way-red');
    }, 7000);
    setTimeout(function () {
      pointImpulse.classList.add('hide');
      NumeralCircleBoxTwo[0].style.animationName = '';
      NumeralCircleBoxTwo[1].style.animationName = '';
      NumeralCircleBoxTwo[2].style.animationName = '';
      NumeralCircleBoxThree[0].style.animationName = 'pulse31';
      NumeralCircleBoxThree[1].style.animationName = 'pulse32';
      NumeralCircleBoxThree[2].style.animationName = 'pulse33';
    }, 8000);
    setTimeout(function () {
      pointImpulse.classList.remove('hide');
      wayScaleFour.classList.remove('scale-way-white');
      wayScaleFour.classList.add('scale-way-red');
      pointImpulse.style.animationName = 'impulse4';
    }, 11000);
    setTimeout(function () {
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
  setTimeout(function () {
    pointImpulse.classList.add('hide');
    NumeralCircleBoxThree[0].style.animationName = 'pulse31';
    NumeralCircleBoxThree[1].style.animationName = 'pulse32';
    NumeralCircleBoxThree[2].style.animationName = 'pulse33';
    setTimeout(function () {
      wayScaleThree.classList.remove('scale-way-red');
      pointImpulse.classList.remove('hide');
      pointImpulse.style.animationName = 'impulse4-3';
      wayScaleThree.classList.add('scale-way-white');
    }, 3000);
    setTimeout(function () {
      pointImpulse.classList.add('hide');
      NumeralCircleBoxThree[0].style.animationName = '';
      NumeralCircleBoxThree[1].style.animationName = '';
      NumeralCircleBoxThree[2].style.animationName = '';
      NumeralCircleBoxTwo[0].style.animationName = 'pulse31';
      NumeralCircleBoxTwo[1].style.animationName = 'pulse32';
      NumeralCircleBoxTwo[2].style.animationName = 'pulse33';
    }, 4000);
    setTimeout(function () {
      wayScaleTwo.classList.remove('scale-way-red');
      pointImpulse.classList.remove('hide');
      pointImpulse.style.animationName = 'impulse4-2';
      wayScaleTwo.classList.add('scale-way-white');
    }, 7000);
    setTimeout(function () {
      pointImpulse.classList.add('hide');
      NumeralCircleBoxTwo[0].style.animationName = '';
      NumeralCircleBoxTwo[1].style.animationName = '';
      NumeralCircleBoxTwo[2].style.animationName = '';
      NumeralCircleBoxOne[0].style.animationName = 'pulse31';
      NumeralCircleBoxOne[1].style.animationName = 'pulse32';
      NumeralCircleBoxOne[2].style.animationName = 'pulse33';
    }, 8000);
    setTimeout(function () {
      wayScaleOne.classList.remove('scale-way-red');
      pointImpulse.classList.remove('hide');
      pointImpulse.style.animationName = 'impulse4-1';
      wayScaleOne.classList.add('scale-way-white');
    }, 11000);
    setTimeout(function () {
      pointImpulse.classList.add('hide');
      resultsScaleWayForward();
    }, 12000);
  }, 1000);
}
"use strict";

var dbwebWorkingGallery = [
/*  {
  webWorkingTitleRUS: 'Заставьте сайт работать на вас!',
  webWorkingTitleENG: 'Make the site work for you!',
  webWorkingSubTitleRUS:
    'Внимание! Все сайты на этой страницевыполнены профессионалами. Не пытайтесь повторить это самостояельно! =)',
  webWorkingSubTitleENG:
    'Attention! All sites on this page are made by professionals. Do not try to repeat it yourself! =)',
  webWorkingGallery: [ */
{
  webWorkingItemCompanyRUS: 'Гуугл',
  webWorkingItemCompanyENG: 'Google',
  webWorkingItemDescriptionRUS: 'Поисковой портал',
  webWorkingItemDescriptionENG: 'Search portal',
  webWorkingItemDFormatRUS: 'Лендинг',
  webWorkingItemFormatENG: 'Landing',
  webWorkingItemHref: 'https://www.google.com.ua/',
  webWorkingItemImg: 'images/Web_working/slide_1.png',
  webWorkingItemIMGDisplay: 'web-slide-tall' //web-slide-tall или web-slide-wide (по одному на каждые 6ть шт) или оставляй пустым

}, {
  webWorkingItemCompanyRUS: 'Фэйсбук',
  webWorkingItemCompanyENG: 'FACEBOOK',
  webWorkingItemDescriptionRUS: 'Социальные сети',
  webWorkingItemDescriptionENG: 'Social networks',
  webWorkingItemDFormatRUS: 'Корпоративный сайт',
  webWorkingItemFormatENG: 'Corporate website',
  webWorkingItemHref: 'https://uk-ua.facebook.com/',
  webWorkingItemImg: 'images/Web_working/slide_2.png',
  webWorkingItemIMGDisplay: '' //web-slide-tall или web-slide-wide (по одному на каждые 6ть шт)

}, {
  webWorkingItemCompanyRUS: 'Инстаграмм',
  webWorkingItemCompanyENG: 'instagram',
  webWorkingItemDescriptionRUS: 'Социальные сети',
  webWorkingItemDescriptionENG: 'Social networks',
  webWorkingItemDFormatRUS: 'Лендинг',
  webWorkingItemFormatENG: 'Landing',
  webWorkingItemHref: 'https://www.instagram.com/',
  webWorkingItemImg: 'images/Web_working/slide_6.png',
  webWorkingItemIMGDisplay: '' //web-slide-tall или web-slide-wide (по одному на каждые 6ть шт)

}, {
  webWorkingItemCompanyRUS: 'вайбер',
  webWorkingItemCompanyENG: 'VIBER',
  webWorkingItemDescriptionRUS: 'Мессенджер',
  webWorkingItemDescriptionENG: 'Messenger',
  webWorkingItemDFormatRUS: 'Интернет магазин',
  webWorkingItemFormatENG: 'Online store',
  webWorkingItemHref: 'https://www.viber.com/ru/',
  webWorkingItemImg: 'images/Web_working/slide_3.png',
  webWorkingItemIMGDisplay: '' //web-slide-tall или web-slide-wide (по одному на каждые 6ть шт)

}, {
  webWorkingItemCompanyRUS: 'телеграм',
  webWorkingItemCompanyENG: 'telegram',
  webWorkingItemDescriptionRUS: 'Мессенджер',
  webWorkingItemDescriptionENG: 'Messenger',
  webWorkingItemDFormatRUS: 'Корпоративный сайт',
  webWorkingItemFormatENG: 'Corporate website',
  webWorkingItemHref: 'https://telegram.org/',
  webWorkingItemImg: 'images/Web_working/slide_5.png',
  webWorkingItemIMGDisplay: '' //web-slide-tall или web-slide-wide (по одному на каждые 6ть шт)

}, {
  webWorkingItemCompanyRUS: 'скайп',
  webWorkingItemCompanyENG: 'skype',
  webWorkingItemDescriptionRUS: 'Видео связь',
  webWorkingItemDescriptionENG: 'Video communication',
  webWorkingItemDFormatRUS: 'Корпоративный портал',
  webWorkingItemFormatENG: 'corporate portal',
  webWorkingItemHref: 'https://www.skype.com/ru/',
  webWorkingItemImg: 'images/Web_working/slide_4.png',
  webWorkingItemIMGDisplay: 'web-slide-wide' //web-slide-tall или web-slide-wide (по одному на каждые 6ть шт)

}, {
  webWorkingItemCompanyRUS: 'Компания 1',
  webWorkingItemCompanyENG: 'Company 1',
  webWorkingItemDescriptionRUS: 'Какое-то описание 1',
  webWorkingItemDescriptionENG: 'Some description 1',
  webWorkingItemDFormatRUS: 'Какой-то сайт 1',
  webWorkingItemFormatENG: 'Some site 1',
  webWorkingItemHref: 'https://www.google.com.ua/',
  webWorkingItemImg: 'images/Order_us/Online_store/img_1.png',
  webWorkingItemIMGDisplay: 'web-slide-tall' //web-slide-tall или web-slide-wide (по одному на каждые 6ть шт)

}, {
  webWorkingItemCompanyRUS: 'Компания 2',
  webWorkingItemCompanyENG: 'Company 2',
  webWorkingItemDescriptionRUS: 'Какое-то описание 2',
  webWorkingItemDescriptionENG: 'Some description 2',
  webWorkingItemDFormatRUS: 'Какой-то сайт 2',
  webWorkingItemFormatENG: 'Some site 2',
  webWorkingItemHref: 'https://www.google.com.ua/',
  webWorkingItemImg: 'images/Order_us/Online_store/pic_2.png',
  webWorkingItemIMGDisplay: '' //web-slide-tall или web-slide-wide (по одному на каждые 6ть шт)

}, {
  webWorkingItemCompanyRUS: 'Компания 3',
  webWorkingItemCompanyENG: 'Company 3',
  webWorkingItemDescriptionRUS: 'Какое-то описание 3',
  webWorkingItemDescriptionENG: 'Some description 3',
  webWorkingItemDFormatRUS: 'Какой-то сайт 3',
  webWorkingItemFormatENG: 'Some site 3',
  webWorkingItemHref: 'https://www.google.com.ua/',
  webWorkingItemImg: 'images/Order_us/Online_store/pic_3.png',
  webWorkingItemIMGDisplay: 'web-slide-wide' //web-slide-tall или web-slide-wide (по одному на каждые 6ть шт)

}
/*     ],
}, */
]; // Строим шаблонную галлерею

var webWorkingGallerysource = document.getElementById('web-working-img-box').innerHTML;
var webWorkingItemsTemplate = Handlebars.compile(webWorkingGallerysource);
var webWorkingGalleryLimit = 6;
/* const webWorkingLimitCorrect = 6; // должен изначально равняться webWorkingGalleryLimit */

var webWorkingCountStart = 0; //Считаем, сколько страниц отображено

var webWorkingPagesShown = 1; //Определяем количество полных страниц для Галлереи

var webWorkingtotalFullPages = Math.ceil(dbwebWorkingGallery.length / webWorkingGalleryLimit);
console.log('Полных страниц: ' + webWorkingtotalFullPages);
webWorkingBuildGallery(dbwebWorkingGallery);
/* console.log(webWorkingCountStart);
console.log(webWorkingGalleryLimit); */

function webWorkingBuildGallery(items) {
  for (webWorkingCountStart; webWorkingCountStart < webWorkingGalleryLimit; webWorkingCountStart++) {
    var currentPageToInsert = items[webWorkingCountStart];
    var currentPagePrint = webWorkingItemsTemplate(currentPageToInsert);
    document.querySelector('.web-working-img-container').insertAdjacentHTML('beforeend', currentPagePrint);
  }
}

var webWorkingLimitCorrect = 6; // должен изначально равняться webWorkingGalleryLimit

function webWorkingArrowRight() {
  webWorkingPagesShown++;

  if (webWorkingPagesShown > webWorkingtotalFullPages) {
    webWorkingPagesShown--;
    console.log(webWorkingPagesShown);
    return;
  } else {
    /*     console.log(webWorkingCountStart);
    console.log(webWorkingtotalFullPages); */
    webWorkingDeleteGallery();
    webWorkingGalleryLimit = webWorkingGalleryLimit + webWorkingLimitCorrect;
    webWorkingBuildGallery(dbwebWorkingGallery);
  }
}

function webWorkingArrowLeft() {
  webWorkingPagesShown--;
  console.log(webWorkingPagesShown);

  if (webWorkingPagesShown < 1) {
    webWorkingPagesShown++;
    return;
  } else {
    webWorkingDeleteGallery();
    webWorkingGalleryLimit = webWorkingGalleryLimit - webWorkingLimitCorrect;
    webWorkingCountStart = webWorkingCountStart - webWorkingLimitCorrect * 2;
    webWorkingBuildGallery(dbwebWorkingGallery);
  }
} //Удаляем текущие слайды


function webWorkingDeleteGallery() {
  var nodeWebWorkingActiveSlides = document.querySelectorAll('.web-slide-box');
  var webWorkingActiveSlides = Array.from(nodeWebWorkingActiveSlides);

  for (var i = 0; i < webWorkingActiveSlides.length; i++) {
    webWorkingActiveSlides[i].remove();
  }
}

function mouseEnterSlide(elem) {
  var edge = closestEdge(event, elem);
  var currentSlideOver = elem.firstElementChild;
  var currentSlideifo = currentSlideOver.firstElementChild;
  currentSlideOver.style.animationName = '';

  if (edge === 'Верх') {
    currentSlideOver.style.animationName = 'to-bottom-in';
    currentSlideifo.classList.remove('hide');
  }

  if (edge === 'Низ') {
    currentSlideOver.style.animationName = 'to-top-in';
    currentSlideifo.classList.remove('hide');
  }

  if (edge === 'Право') {
    currentSlideOver.style.animationName = 'to-right-in';
    currentSlideifo.classList.remove('hide');
  }

  if (edge === 'Лево') {
    currentSlideOver.style.animationName = 'to-left-in';
    currentSlideifo.classList.remove('hide');
  }
} // делаем интеракивную заливку слайда


function mouseleaveSlide(elem) {
  var currentSlideOver = elem.firstElementChild;
  var currentSlideifo = currentSlideOver.firstElementChild;
  var edge = closestEdge(event, elem);
  currentSlideOver.style.animationName = '';

  if (edge === 'Верх') {
    currentSlideOver.style.animationName = 'to-top-out';
    currentSlideifo.classList.add('hide');
  }

  if (edge === 'Низ') {
    currentSlideOver.style.animationName = 'to-bottom-out';
    currentSlideifo.classList.add('hide');
  }

  if (edge === 'Право') {
    currentSlideOver.style.animationName = 'to-right-out';
    currentSlideifo.classList.add('hide');
  }

  if (edge === 'Лево') {
    currentSlideOver.style.animationName = 'to-left-out';
    currentSlideifo.classList.add('hide');
  }
} // Определяем заход мышки


function closestEdge(mouse, elem) {
  var elemBounding = elem.getBoundingClientRect();
  var elementLeftEdge = elemBounding.left;
  var elementTopEdge = elemBounding.top;
  var elementRightEdge = elemBounding.right;
  var elementBottomEdge = elemBounding.bottom;
  var mouseX = mouse.clientX;
  var mouseY = mouse.clientY;
  var topEdgeDist = Math.abs(elementTopEdge - mouseY);
  var bottomEdgeDist = Math.abs(elementBottomEdge - mouseY);
  var leftEdgeDist = Math.abs(elementLeftEdge - mouseX);
  var rightEdgeDist = Math.abs(elementRightEdge - mouseX);
  var min = Math.min(topEdgeDist, bottomEdgeDist, leftEdgeDist, rightEdgeDist);

  switch (min) {
    case leftEdgeDist:
      return 'Лево';

    case rightEdgeDist:
      return 'Право';

    case topEdgeDist:
      return 'Верх';

    case bottomEdgeDist:
      return 'Низ';
  }
}

function webRedirectCase(event) {
  event.setAttribute('rel', 'noopener noreferrer');
  var url = event.getAttribute('href');
  var otherWindow = window.open();
  otherWindow.opener = null;
  otherWindow.location = url;
}
"use strict";

var dbWhyWe = [{
  whyWetitleRUS: '6 причин заказать сайт у нас:',
  whyWetitleENG: '6 reasons to order a website from us:',
  whyWequoteRUS: '"Вести бизнес, не делая рекламы, - равносильно подмигиванию девушке в полной темноте. Только Вы знаете, что Вы делаете"',
  whyWequoteENG: '"Doing business without advertising is like winking at a girl in the dark. You know what you are doing but nobody else does"',
  whyWequoteAutherRUS: '(с) Стюарт Хендесон Брит',
  whyWequoteAutherENG: '(с) Steuart Henderson Britt'
}]; //Данные для шаблона бокса

var dbWhyyWeInfoBox = [{
  whyWeBoxtitleRUS: 'Ваш сайт, который продает',
  whyWeBoxtitleENG: 'Your website that sells',
  whyWeBoxSubtitleRUS: 'Мы смотрим на сайт прежде всего глазами предпринимателей и...',
  whyWeBoxSubtitleENG: 'We look at the site primarily through the eyes of entrepreneurs and...',
  whyWeCircleNumber: '1',
  whyWeDataNumberModalPage: 0
}, {
  whyWeBoxtitleRUS: 'Ваша реклама, которая продаёт',
  whyWeBoxtitleENG: 'Your ads that sell',
  whyWeBoxSubtitleRUS: 'Для создания качественной продающей рекламы, точно отвечающей...',
  whyWeBoxSubtitleENG: 'To create high-quality selling ads that accurately meets the needs...',
  whyWeCircleNumber: '2',
  whyWeDataNumberModalPage: 1
}, {
  whyWeBoxtitleRUS: 'Быстрая окупаемость инвестиций',
  whyWeBoxtitleENG: 'Short payback period',
  whyWeBoxSubtitleRUS: 'Заказывая сайт у нас, Вы не тратите деньги, а инвестируете их...',
  whyWeBoxSubtitleENG: 'If you order a website from us, you do not spend money, but invest it',
  whyWeCircleNumber: '3',
  whyWeDataNumberModalPage: 2
}, {
  whyWeBoxtitleRUS: 'Уникальные и простые продающие решения',
  whyWeBoxtitleENG: 'Unique and simple selling solutions',
  whyWeBoxSubtitleRUS: 'Вы получаете 100% уникальный дизайн, а также возможность... ',
  whyWeBoxSubtitleENG: 'You get a 100% unique design, as well as the ability',
  whyWeCircleNumber: '4',
  whyWeDataNumberModalPage: 3
}, {
  whyWeBoxtitleRUS: 'Работаем по принципу "всё включено"',
  whyWeBoxtitleENG: 'We work on the principle of "all inclusive"',
  whyWeBoxSubtitleRUS: 'Заказывая сайт у нас, Вам не придётся думать о том, как дополнительно... ',
  whyWeBoxSubtitleENG: 'If you order a website from us, you do not have to think about how',
  whyWeCircleNumber: '5',
  whyWeDataNumberModalPage: 4
}, {
  whyWeBoxtitleRUS: 'Мы помогаем Вашему проекту рости после создания',
  whyWeBoxtitleENG: 'We help your project  grow after we create it',
  whyWeBoxSubtitleRUS: 'Мы продолжаем вести Ваш проект даже после создания... ',
  whyWeBoxSubtitleENG: 'We continue to lead your project even after we create it',
  whyWeCircleNumber: '6',
  whyWeDataNumberModalPage: 5
}]; //Данные для шаблона модалки

var dbWhyWeModal = [{
  whyWeModalTitleRUS: 'Ваш сайт, который продает',
  whyWeModalTitleENG: 'Your website that sells',
  whyWeModalParagraphRUS1: 'Мы смотрим на сайт прежде всего глазами предпринимателей и маркетологов, а не только как программисты и дизайнеры. Многие программисты и дизайнеры делают крутые сайты, которые почему-то не продают. Мы же берем за основу сайта Вашу бизнес-модель и исходя из этого делаем продающую концепцию.',
  whyWeModalParagraphRUS2: 'Мы делаем сайты с продающими триггерами и фишками, которые вызывают желание купить у потенциального клиента. Поэтому Вы быстро окупаете инвестиции в создание сайта.',
  whyWeModalParagraphENG1: 'We look at the site primarily through the eyes of entrepreneurs and marketers, not just as programmers and designers. Many programmers and designers make cool sites that for some reason do not sell. We take your business model as the basis of the site and based on this we make a selling concept.',
  whyWeModalParagraphENG2: 'We make sites with selling triggers and chips that make a potential customer want to buy. Therefore, you quickly recoup your investment in creating a website.',
  whyWeModalCircleNumber: '1',
  whyweModalIMG: './images/Why_we/Modal/man_1.png',
  coorectPositionImg: 'whywe-correct-position-1'
}, {
  whyWeModalTitleRUS: 'Ваша реклама, которая продает',
  whyWeModalTitleENG: 'Your ads that sell',
  whyWeModalParagraphRUS1: 'Для создания качественной продающей рекламы, точно отвечающей запросам целевой аудитории, нужно глубоко изучить Ваш бизнес, конкурентов, целевую аудиторию, настроить рекламу и провести тестирование объявлений, рекламных площадок, околоцелевого трафика и ещё много других нюансов.',
  whyWeModalParagraphRUS2: 'Это позволяет найти оптимальный трафик, который будет приносить Вам наибольшую прибыль.Другими словами - мы стремимся найти золотую середину между тем, чтобы максимально уменьшить Ваши расходы на рекламу, сохранив при этом её высокую эффективность. ',
  whyWeModalParagraphENG1: 'To create high-quality selling ads that accurately meets the needs of the target audience, you need to make in-depth analysis of your business, competitors, target audience, set up and test ads, advertising platforms, near-target traffic and many other aspects.',
  whyWeModalParagraphENG2: 'This allows you to find the optimal traffic that will bring you the greatest profit.In other words, we strive to find a golden mean between reducing your advertising costs as much as possible, while maintaining its high efficiency.',
  whyWeModalCircleNumber: '2',
  whyweModalIMG: './images/Why_we/Modal/man_2.png',
  coorectPositionImg: 'whywe-correct-position-2'
}, {
  whyWeModalTitleRUS: 'Быстрая окупаемость инвестиций',
  whyWeModalTitleENG: 'Short payback period',
  whyWeModalParagraphRUS1: 'Заказывая сайт у нас, Вы не тратите деньги, а инвестируете их. Эти инвестиции окупятся, всего за пару месяцев. Нам крайне важно, чтобы Ваш сайт продавал. Потому что если сайт приносит прибыль, в него вкладывают деньги, соответственно мы зарабатываем.',
  whyWeModalParagraphRUS2: '',
  whyWeModalParagraphENG1: 'If you order a website from us, you do not spend money, but invest it. This investment will pay off in just a couple of months. It is extremely important for us to make your dite sell. Because if the site makes a profit, it attraсts investments, so, we also gain profits.',
  whyWeModalParagraphENG2: '',
  whyWeModalCircleNumber: '3',
  whyweModalIMG: './images/Why_we/Modal/man_3.png',
  coorectPositionImg: 'whywe-correct-position-3'
}, {
  whyWeModalTitleRUS: 'Уникальные и простые продающие решения',
  whyWeModalTitleENG: 'Unique and simple selling solutions',
  whyWeModalParagraphRUS1: 'Вы получаете 100% уникальный дизайн, а также возможность самостоятельно вносить коррективы во внешний вид и наполнение сайта. Мы делаем сайты на популярной CMS, сделать правки в которой может даже ребенок.',
  whyWeModalParagraphRUS2: 'Создавая Ваш сайт, мы "не изобретаем велосипед", а опираемся на опыт и статистику, полученную при аналитике множества других проектов.',
  whyWeModalParagraphENG1: 'You get a 100% unique design, as well as the ability to make adjustments to the design and content of the site. We make sites on the popular CMS, make edits in which even a child can.',
  whyWeModalParagraphENG2: 'When we create you website, we "do not reinvent the wheel", but rely on the experience and statistics that we get from analysing other projects.',
  whyWeModalCircleNumber: '4',
  whyweModalIMG: './images/Why_we/Modal/man_4.png',
  coorectPositionImg: 'whywe-correct-position-4'
}, {
  whyWeModalTitleRUS: 'Работаем по принципу "всё включено"',
  whyWeModalTitleENG: 'We work on the principle of "all inclusive"',
  whyWeModalParagraphRUS1: 'Заказывая сайт у нас, Вам не придётся думать о том, как дополнительно к нему приобрести домен, хостинг, подключить к сайту системы аналитики и статистики посещений, провести интеграцию с CRM-системой, настроить оповещения о заявках приходящих с сайта и т.д. - всё уже включено. Кроме того, вы получаете доступ к визуальному редактору сайта и круглосуточную техническую поддержку!',
  whyWeModalParagraphRUS2: '',
  whyWeModalParagraphENG1: 'If you order a website from us, you do not have to think about how to purchase a domain, hosting, connect the analytics and statistics of visits, integrate with the CRM system, set up notifications about requests coming from the site, etc.-everything is already included. In addition, you get access to the visual editor of the site and round-the-clock technical support!',
  whyWeModalParagraphENG2: '',
  whyWeModalCircleNumber: '5',
  whyweModalIMG: './images/Why_we/Modal/man_5.png'
}, {
  whyWeModalTitleRUS: 'Мы помогаем вашему проекту расти после создания',
  whyWeModalTitleENG: 'We help your project  grow after we create it',
  whyWeModalParagraphRUS1: 'Мы продолжаем вести ваш проект даже после создания. Постоянно следим за его состоянием, работоспособностью, вовремя вносим коррективы, подключаем системы аналитики и статистики посещений, проводим тесты, если это требуется для увеличения ваших продаж. Для повышения качества сайта, мы применяем современные технологии, подробнее о которых, вы можете узнать на нашей странице - технологии',
  whyWeModalParagraphRUS2: '',
  whyWeModalParagraphENG1: 'We continue to lead your project even after we create it. We constantly monitor its condition, performance, make adjustments on time, connect the analytics and statistics of visits, conduct tests, if necessary, to increase your sales. To improve the quality of the site, we use modern technologies, more about which you can find on our Technologies page.',
  whyWeModalParagraphENG2: '',
  whyWeModalCircleNumber: '6',
  whyweModalIMG: './images/Why_we/Modal/man_6.png'
}]; //Шаблон Title

var sourceTitle = document.getElementById('why-we-title').innerHTML;
var itemsTemplate = Handlebars.compile(sourceTitle);
buildSectionWhyWeTitle(dbWhyWe);

function buildSectionWhyWeTitle(items) {
  var markup = items.map(function (item) {
    return itemsTemplate(item);
  }).join('');
  document.querySelector('.why-we-title').insertAdjacentHTML('beforeend', markup);
} //Шаблон цитата


var sourceQuote = document.getElementById('why-we-quote').innerHTML;
itemsTemplate = Handlebars.compile(sourceQuote);
buildSectionWhyWeSubtitle(dbWhyWe);

function buildSectionWhyWeSubtitle(items) {
  var markup = items.map(function (item) {
    return itemsTemplate(item);
  }).join('');
  document.querySelector('.why-we-qoute').insertAdjacentHTML('beforeend', markup);
} // Шаблон бокс


var sourceInfoBox = document.getElementById('why-we-info-box').innerHTML;
itemsTemplate = Handlebars.compile(sourceInfoBox);
buildSectionWhyWeInfoBox(dbWhyyWeInfoBox);

function buildSectionWhyWeInfoBox(items) {
  var markup = items.map(function (item) {
    return itemsTemplate(item);
  }).join('');
  document.querySelector('.why-we-info-box').insertAdjacentHTML('beforeend', markup);
} //запускаем асинхронное мигание колец


var whyWeSlide = document.querySelector('.whywe-box');
var nodewhyWeImpulseCircle = document.querySelectorAll('.why-we-circle-box');
var whyWeImpulseCircle = Array.from(nodewhyWeImpulseCircle);
var r = 0;

function whyWeSlideVisible() {
  whyWeImpulseCircle[r].children[0].style.animationName = 'pulse63';
  whyWeImpulseCircle[r].children[0].children[0].style.animationName = 'pulse62';
  whyWeImpulseCircle[r].children[0].children[0].children[0].style.animationName = 'pulse61';
  whyWeLoopCircles();
}

function whyWeLoopCircles() {
  setTimeout(function () {
    whyWeImpulseCircle[r].children[0].style.animationName = '';
    whyWeImpulseCircle[r].children[0].children[0].style.animationName = '';
    whyWeImpulseCircle[r].children[0].children[0].children[0].style.animationName = '';

    if (r === whyWeImpulseCircle.length - 1) {
      r = 0;
    } else {
      r++;
    }

    whyWeImpulseCircle[r].children[0].style.animationName = 'pulse63';
    whyWeImpulseCircle[r].children[0].children[0].style.animationName = 'pulse62';
    whyWeImpulseCircle[r].children[0].children[0].children[0].style.animationName = 'pulse61';
  }, 3000);
  setTimeout(function () {
    whyWeLoopCircles();
  }, 3000);
}

var j = 0; //Intersection Observer API: функция, которая наблюдает за элементом и его появлением в браузере при пролистывании

var whyWeObserver = new IntersectionObserver(function (entries) {
  if (j === 0) {
    if (entries[0].isIntersecting === true) {
      j++;
      whyWeSlideVisible();
    } else {
      return;
    }
  } else {
    return;
  }
}, {
  threshold: [1]
});
whyWeObserver.observe(whyWeSlide); // Шаблон Модалки

var sourceModalBox = document.getElementById('why-we-modal').innerHTML;
itemsTemplate = Handlebars.compile(sourceModalBox);
buildModalWhyWeInfoBox(dbWhyWeModal);

function buildModalWhyWeInfoBox(items) {
  var markup = items.map(function (item) {
    return itemsTemplate(item);
  }).join('');
  document.querySelector('.whyweModal').insertAdjacentHTML('beforeend', markup);
}

var nodewhyweModalWindow = document.querySelectorAll('.whywe-modal-container');
var whyweModalWindow = Array.from(nodewhyweModalWindow); // Отключаем скролл body под модальным окном

function whyweScrollOff() {
  whyWeModalContainer.addEventListener('mousewheel', function (e) {
    e.wheelDeltaY || e.originalEvent && (e.originalEvent.wheelDeltaY || e.originalEvent.wheelDelta) || e.wheelDelta || 0;
    e.stopPropagation();
    e.preventDefault();
  });
}

var nodeCurrentReasonOnClick = document.querySelectorAll('.why-we-wrapper');
var currentReasonOnClick = Array.from(nodeCurrentReasonOnClick);
var wyweDataNameCurrentEvent = null;

var _loop = function _loop() {
  var whyWecurrentModal = _currentReasonOnClick[_i];
  whyWecurrentModal.addEventListener('click', function (event) {
    wyweDataNameCurrentEvent = whyWecurrentModal.getAttribute('data-name');
    whyweModalWindow[wyweDataNameCurrentEvent].classList.remove('hide');
    whyweModalWindow[wyweDataNameCurrentEvent].parentElement.classList.remove('hide', whyweScrollOff());
  });
};

for (var _i = 0, _currentReasonOnClick = currentReasonOnClick; _i < _currentReasonOnClick.length; _i++) {
  _loop();
} // Функция закрытия модального окна


var whyWeModalContainer = document.querySelector('.whyweModal');

function whyweModalClose(event) {
  whyWeModalContainer.classList.add('hide');
  whyweModalWindow[wyweDataNameCurrentEvent].classList.add('hide');
}

var nodeWhyWeModalContentBox = document.querySelectorAll('.whywe-modal-container');
var whyWeModalContentBox = Array.from(nodeWhyWeModalContentBox);
whyWeModalContainer.addEventListener('click', function (event) {
  if (whyWeModalContentBox[wyweDataNameCurrentEvent].contains(event.target)) {
    return;
  } else {
    whyweModalClose();
  }
});
"use strict";

var dbOrderUsButtons = [{
  buttons: [{
    orderUsCaseDataName: 'dbOrderUsOnePage',
    // Указываем название Базы Данных (переменная), в которой лежат кэйсы по данной ссылке
    orderUsBtnTitleRUS: 'Одностраничный сайт',
    orderUsBtnTitleENG: 'Landing page',
    orderUsBtnActive: 'orderus-button-case-svg-active',
    orderUsBtnSVG: 'graphs'
  }, {
    orderUsCaseDataName: 'dbOrderUsMultiPage',
    // Указываем название Базы Данных (переменная), в которой лежат кэйсы по данной ссылке
    orderUsBtnTitleRUS: 'Многостраничный сайт',
    orderUsBtnTitleENG: 'Multi-page site',
    orderUsBtnSVG: 'laptop',
    orderUsBtnActive: ''
  }, {
    orderUsCaseDataName: 'dbOrderUsOnlineStore',
    // Указываем название Базы Данных (переменная), в которой лежат кэйсы по данной ссылке
    orderUsBtnTitleRUS: 'Интернет-магазин',
    orderUsBtnTitleENG: 'Online store',
    orderUsBtnActive: '',
    orderUsBtnSVG: 'storebasket'
  }, {
    orderUsCaseDataName: 'dbOrderUsContextAdv',
    // Указываем название Базы Данных (переменная), в которой лежат кэйсы по данной ссылке
    orderUsBtnTitleRUS: 'Контекстная реклама',
    orderUsBtnTitleENG: 'Сontextual advertising',
    orderUsBtnActive: '',
    orderUsBtnSVG: 'advertising'
  }, {
    orderUsCaseDataName: 'dbOrderUsSEO',
    // Указываем название Базы Данных (переменная), в которой лежат кэйсы по данной ссылке
    orderUsBtnTitleRUS: 'CEO продвижение',
    orderUsBtnTitleENG: 'SEO promotion',
    orderUsBtnActive: '',
    orderUsBtnSVG: 'wand'
  }],
  orderUsBtnQouteRUS: 'Если Вас нет в интернете, значит, вас нет в бизнесе!',
  orderUsBtnAutherRUS: '(с) Билл Гейтс - обладатель 92.000.000.000$',
  orderUsBtnQouteENG: 'If your business is not on the internet, then your business will be out of business',
  orderUsBtnAutherENG: '(с) Bill Gates - owns 92.000.000.000$'
}];
var dbOrderUsOnePage = [{
  cases: [{
    orderUsCaseImg: 'images/Order_us/Landing_page/man_1.png',
    orderUsCaseImgAdvRUS: 'images/Order_us/adv.png',
    orderUsCaseImgAdvENG: '',
    orderUsBtnCaseTitleRUS: 'Лендинг VIP',
    orderUsBtnCaseTitleENG: 'Landing VIP',
    orderusTabelDataRUS: ['Одностраничный сайт с уникальным дизайном', 'Домен + хостинг на 1 год', 'Настройка рекламы в Яндекс+Google', 'Мобильная версия', 'Срок разработки 15 дней'],
    orderusTabelDataENG: ['One-page site with a unique design', 'Domain + hosting for 1 year', 'Yandex&Google Ads Setup', 'Mobile version', 'Development period is 15 days'],
    orderUsBtnCasePriceRUS: '790 руб.',
    orderUsBtnCasePriceENG: '790 usd.',
    orderUsBtnCaseBtnTxtRUS: 'оставить заявку',
    orderUsBtnCaseBtnTxtENG: 'Leave a request'
  }, {
    orderUsCaseImg: 'images/Order_us/Landing_page/man_2.png',
    orderUsCaseImgAdvRUS: '',
    orderUsCaseImgAdvENG: '',
    orderUsBtnCaseTitleRUS: 'Лендинг Бизнес',
    orderUsBtnCaseTitleENG: 'Landing business',
    orderusTabelDataRUS: ['Одностраничный сайт с уникальным дизайном', 'Домен + хостинг на 1 год', 'Настройка рекламы в Яндекс', 'Срок разработки 10 дней'],
    orderusTabelDataENG: ['One-page site with a unique design', 'Domain + hosting for 1 year', 'Site ads setup on Yandex', 'Development period is 10 days'],
    orderUsBtnCasePriceRUS: '690 руб.',
    orderUsBtnCasePriceENG: '690 usd.',
    orderUsBtnCaseBtnTxtRUS: 'оставить заявку',
    orderUsBtnCaseBtnTxtENG: 'Leave a request'
  }, {
    orderUsCaseImg: 'images/Order_us/Landing_page/man_3.png',
    orderUsCaseImgAdvRUS: '',
    orderUsCaseImgAdvENG: '',
    orderUsBtnCaseTitleRUS: 'Лендинг Экспресс',
    orderUsBtnCaseTitleENG: 'Landing Express',
    orderusTabelDataRUS: ['Одностраничный сайт с уникальным дизайном', 'Домен + хостинг на 1 год', 'Срок разработки 5 дней'],
    orderusTabelDataENG: ['One-page site with a unique design', 'Domain + hosting for 1 year', 'Development period is 5 days'],
    orderUsBtnCasePriceRUS: '590 руб.',
    orderUsBtnCasePriceENG: '590 usd.',
    orderUsBtnCaseBtnTxtRUS: 'оставить заявку',
    orderUsBtnCaseBtnTxtENG: 'Leave a request'
  }]
}];
var dbOrderUsMultiPage = [{
  cases: [{
    orderUsCaseImg: 'images/Order_us/Multi_page/man_1.png',
    orderUsCaseImgAdvRUS: 'images/Order_us/adv.png',
    orderUsCaseImgAdvENG: '',
    orderUsBtnCaseTitleRUS: 'Сайт Визитка',
    orderUsBtnCaseTitleENG: 'Business card site',
    orderusTabelDataRUS: ['Сайт визитка (5-7стр.) с уникальным дизайном', 'Домен + хостинг на 1 год', 'Срок разработки - от 10 дней'],
    orderusTabelDataENG: ['Business card site (5-7pages) with a unique design', 'Domain + hosting for 1 year', 'Development period from 10 days'],
    orderUsBtnCasePriceRUS: 'от 790 руб.',
    orderUsBtnCasePriceENG: 'from 790 usd.',
    orderUsBtnCaseBtnTxtRUS: 'оставить заявку',
    orderUsBtnCaseBtnTxtENG: 'Leave a request'
  }, {
    orderUsCaseImg: 'images/Order_us/Multi_page/man_2.png',
    orderUsCaseImgAdvRUS: '',
    orderUsCaseImgAdvENG: '',
    orderUsBtnCaseTitleRUS: 'Корпоративный сайт',
    orderUsBtnCaseTitleENG: 'Corporate website',
    orderusTabelDataRUS: ['Корпоративный сайт с уникальным дизайном', 'Домен + хостинг на 1 год', 'Срок разработки - от 15 дней'],
    orderusTabelDataENG: ['Corporate website with a unique design', 'Domain + hosting for 1 year', 'Development period from 15 days'],
    orderUsBtnCasePriceRUS: 'от 1490 руб.',
    orderUsBtnCasePriceENG: 'from 1490 usd.',
    orderUsBtnCaseBtnTxtRUS: 'оставить заявку',
    orderUsBtnCaseBtnTxtENG: 'Leave a request'
  }, {
    orderUsCaseImg: 'images/Order_us/Multi_page/man_3.png',
    orderUsCaseImgAdvRUS: '',
    orderUsCaseImgAdvENG: '',
    orderUsBtnCaseTitleRUS: 'Интернет портал',
    orderUsBtnCaseTitleENG: 'Internet portal',
    orderusTabelDataRUS: ['Интернет портал с уникальным дизайном', 'Домен + хостинг на 1 год', 'Срок разработки - от 20 дней'],
    orderusTabelDataENG: ['Internet portal with a unique design', 'Domain + hosting for 1 year', 'Development period from 20 days'],
    orderUsBtnCasePriceRUS: 'от 1990 руб.',
    orderUsBtnCasePriceENG: 'from 1990 usd.',
    orderUsBtnCaseBtnTxtRUS: 'оставить заявку',
    orderUsBtnCaseBtnTxtENG: 'Leave a request'
  }]
}];
var dbOrderUsOnlineStore = [{
  cases: [{
    orderUsCaseImg: 'images/Order_us/Online_store/img_1.png',
    orderUsCaseImgAdvRUS: 'images/Order_us/adv.png',
    orderUsCaseImgAdvENG: '',
    orderUsBtnCaseTitleRUS: 'Магазин VIP',
    orderUsBtnCaseTitleENG: 'Store VIP',
    orderusTabelDataRUS: ['Интернет магазин с уникальным дизайном', 'Домен + хостинг на 1 год', 'SEO оптимизация', 'Программирование', 'Срок разработки - от 25 дней'],
    orderusTabelDataENG: ['Online store with a unique design', 'Domain + hosting for 1 year', 'SEO optimization', 'Programming', 'Development period from 25 days'],
    orderUsBtnCasePriceRUS: 'от 1990 руб.',
    orderUsBtnCasePriceENG: 'from 1990 usd.',
    orderUsBtnCaseBtnTxtRUS: 'оставить заявку',
    orderUsBtnCaseBtnTxtENG: 'Leave a request'
  }, {
    orderUsCaseImg: 'images/Order_us/Online_store/pic_2.png',
    orderUsCaseImgAdvRUS: '',
    orderUsCaseImgAdvENG: '',
    orderUsBtnCaseTitleRUS: 'Магазин Бизнес',
    orderUsBtnCaseTitleENG: 'Store Business',
    orderusTabelDataRUS: ['Интернет магазин (редизайн шаблона)', 'Домен + хостинг на 1 год', 'SEO оптимизация', 'Срок разработки - от 15 дней'],
    orderusTabelDataENG: ['Online store (template redesign)', 'Domain + hosting for 1 year', 'SEO optimization', 'Development period from 15 days'],
    orderUsBtnCasePriceRUS: 'от 1490 руб.',
    orderUsBtnCasePriceENG: 'from 1490 usd.',
    orderUsBtnCaseBtnTxtRUS: 'оставить заявку',
    orderUsBtnCaseBtnTxtENG: 'Leave a request'
  }, {
    orderUsCaseImg: 'images/Order_us/Online_store/pic_3.png',
    orderUsCaseImgAdvRUS: '',
    orderUsCaseImgAdvENG: '',
    orderUsBtnCaseTitleRUS: 'Магазин Экспресс',
    orderUsBtnCaseTitleENG: 'Store Express',
    orderusTabelDataRUS: ['Интернет магазин (шаблонный дизайн)', 'Домен + хостинг на 1 год', 'Срок разработки - от 10 дней'],
    orderusTabelDataENG: ['Online store (template design)', 'Domain + hosting for 1 year', 'SEO optimization', 'Development period from 10 days'],
    orderUsBtnCasePriceRUS: 'от 790 руб.',
    orderUsBtnCasePriceENG: 'from 790 usd.',
    orderUsBtnCaseBtnTxtRUS: 'оставить заявку',
    orderUsBtnCaseBtnTxtENG: 'Leave a request'
  }]
}];
var dbOrderUsContextAdv = [{
  cases: [{
    orderUsCaseImg: 'images/Order_us/Context_adv/pic_1.png',
    orderUsCaseImgAdvRUS: 'images/Order_us/adv.png',
    orderUsCaseImgAdvENG: '',
    orderUsBtnCaseTitleRUS: 'Яндекс+Google',
    orderUsBtnCaseTitleENG: 'Yandex+Google',
    orderusTabelDataRUS: ['Настройка рекламы на поиске Яндекс+Google', 'РСЯ Яндекс', 'КМС Google', 'Срок настройки 10 дней'],
    orderusTabelDataENG: ['Setting up ads on Yandex+Google search', 'Yandex Advertising Network', 'Google contextual media net setup', 'Setup time 10 days'],
    orderUsBtnCasePriceRUS: 'от 290 руб.',
    orderUsBtnCasePriceENG: 'from 290 usd.',
    orderUsBtnCaseBtnTxtRUS: 'оставить заявку',
    orderUsBtnCaseBtnTxtENG: 'Leave a request'
  }, {
    orderUsCaseImg: 'images/Order_us/Context_adv/pic_2.png',
    orderUsCaseImgAdvRUS: '',
    orderUsCaseImgAdvENG: '',
    orderUsBtnCaseTitleRUS: 'Яндекс',
    orderUsBtnCaseTitleENG: 'Yandex',
    orderusTabelDataRUS: ['Настройка рекламы на поиске Яндекс', 'РСЯ Яндекс', 'Срок настройки 5 дней'],
    orderusTabelDataENG: ['Setting up ads on Yandex search', 'Yandex Advertising Network', 'Setup time 5 days'],
    orderUsBtnCasePriceRUS: 'от 200 руб.',
    orderUsBtnCasePriceENG: 'from 200 usd.',
    orderUsBtnCaseBtnTxtRUS: 'оставить заявку',
    orderUsBtnCaseBtnTxtENG: 'Leave a request'
  }, {
    orderUsCaseImg: 'images/Order_us/Context_adv/pic_3.png',
    orderUsCaseImgAdvRUS: '',
    orderUsCaseImgAdvENG: '',
    orderUsBtnCaseTitleRUS: 'Google',
    orderUsBtnCaseTitleENG: 'Google',
    orderusTabelDataRUS: ['Настройка рекламы на поиске Google', 'КМС Google', 'Срок настройки 5 дней'],
    orderusTabelDataENG: ['Setting up ads on Google search', 'Google contextual media net setup', 'Setup time 5 days'],
    orderUsBtnCasePriceRUS: 'от 200 руб.',
    orderUsBtnCasePriceENG: 'from 200 usd.',
    orderUsBtnCaseBtnTxtRUS: 'оставить заявку',
    orderUsBtnCaseBtnTxtENG: 'Leave a request'
  }]
}];
var dbOrderUsSEO = [{
  cases: [{
    orderUsCaseImg: 'images/Order_us/SEO_prom/man_1.png',
    orderUsCaseImgAdvRUS: 'images/Order_us/adv.png',
    orderUsCaseImgAdvENG: '',
    orderUsBtnCaseTitleRUS: 'По позициям',
    orderUsBtnCaseTitleENG: 'By position',
    orderusTabelDataRUS: ['Классический и самый распространненный способ продвижения сайтов. Для тех, кто хочет видеть свой сайт на высоких позициях в поисковике'],
    orderusTabelDataENG: ['The classic and most common way to promote sites. For those who want to see their site in high positions in the search engine'],
    orderUsBtnCasePriceRUS: 'от 600 руб/мес',
    orderUsBtnCasePriceENG: 'from 600 usd/month',
    orderUsBtnCaseBtnTxtRUS: 'оставить заявку',
    orderUsBtnCaseBtnTxtENG: 'Leave a request'
  }, {
    orderUsCaseImg: 'images/Order_us/SEO_prom/pic_2.png',
    orderUsCaseImgAdvRUS: '',
    orderUsCaseImgAdvENG: '',
    orderUsCaseImgAdv: '',
    orderUsBtnCaseTitleRUS: 'По трафику',
    orderUsBtnCaseTitleENG: 'By traffic',
    orderusTabelDataRUS: ['Подходит крупным посещаемым сайтам, тем кто готов платить за увеличение объма целевого трафика'],
    orderusTabelDataENG: ['Suitable for large visited sites, those who are willing to pay for increasing the volume of targeted traffic'],
    orderUsBtnCasePriceRUS: 'от 600 руб/мес',
    orderUsBtnCasePriceENG: 'from 600 usd/month',
    orderUsBtnCaseBtnTxtRUS: 'оставить заявку',
    orderUsBtnCaseBtnTxtENG: 'Leave a request'
  }, {
    orderUsCaseImg: 'images/Order_us/SEO_prom/pic_3.png',
    orderUsCaseImgAdvRUS: '',
    orderUsCaseImgAdvENG: '',
    orderUsBtnCaseTitleRUS: 'По лидам',
    orderUsBtnCaseTitleENG: 'By leads',
    orderusTabelDataRUS: ['Продвижение ресурса по лидам - схема, при которой основным KPI выступает совершение посетителями сайта целевого действия (звонок или заявка)'],
    orderusTabelDataENG: ['Promotion of a resource by leads is a scheme in which the main KPI is the completion by the site visitors of the target action (call or request)'],
    orderUsBtnCasePriceRUS: 'от 600 руб/мес',
    orderUsBtnCasePriceENG: 'from 600 usd/month',
    orderUsBtnCaseBtnTxtRUS: 'оставить заявку',
    orderUsBtnCaseBtnTxtENG: 'Leave a request'
  }]
}];
var source = document.getElementById('orderus-button-wrapper').innerHTML;
var itemsTemplate = Handlebars.compile(source);
orderUsBuildBtnPrice(dbOrderUsButtons);

function orderUsBuildBtnPrice(items) {
  var markup = items.map(function (item) {
    return itemsTemplate(item);
  }).join('');
  document.querySelector('.orderus-button-wrapper').insertAdjacentHTML('beforeend', markup);
}

var sourceCase = document.getElementById('orderus-case-wrapper').innerHTML;
itemsTemplate = Handlebars.compile(sourceCase);
orderUsBuildCaseBox(dbOrderUsOnePage); //Функция построения блока карточек

function orderUsBuildCaseBox(items) {
  var markup = items.map(function (item) {
    return itemsTemplate(item);
  }).join('');
  document.querySelector('.orderus-case-wrapper').insertAdjacentHTML('beforeend', markup);
  var currentLengOnPage = document.querySelector('.orderus-button-case-price').classList.contains('hide');

  if (currentLengOnPage === true) {
    onChangeEng(sourceCase);
  }
}

var nodeOrderUsBtnsPrices = document.querySelectorAll('.orderus-button-case-price');
var orderUsBtnsPrices = Array.from(nodeOrderUsBtnsPrices);
var nodeOrderUsBtnsPricesSVG = document.querySelectorAll('.orderus-button-case-svg');
var orderUsBtnsPricesSVG = Array.from(nodeOrderUsBtnsPricesSVG);

function orderUsCasePriceClick(event) {
  //Удаляем выделение всех активных кнопок
  for (var z = 0; z < orderUsBtnsPrices.length; z++) {
    orderUsBtnsPricesSVG[z].classList.remove('orderus-button-case-svg-active');
  } //Добавляем текущей кнопке статус active


  event.children[0].classList.add('orderus-button-case-svg-active'); //Определяем текущей язык

  var orderUsCurrentLang = event.getAttribute('data-leng'); // Если текущий язык - русский, активируем статус у нижнего соседненго элемента, иначе у верхнего

  if (orderUsCurrentLang == 'rus') {
    event.nextElementSibling.children[0].classList.add('orderus-button-case-svg-active');
  } else {
    event.previousElementSibling.children[0].classList.add('orderus-button-case-svg-active');
  } // Берем массив всех активных в данный момент карточек и удаляем их


  var nodeOrderUsCardBox = document.querySelectorAll('.orderus-item-card-box');
  var orderUsCardBox = Array.from(nodeOrderUsCardBox);
  var orderUsActiveBtn = event.getAttribute('data-name');

  for (var _z = 0; _z < orderUsCardBox.length; _z++) {
    orderUsCardBox[_z].remove();
  } // По атрибуту data-name определяем бд, которую надо подключить


  switch (orderUsActiveBtn) {
    case 'dbOrderUsOnePage':
      return orderUsBuildCaseBox(dbOrderUsOnePage);

    case 'dbOrderUsMultiPage':
      return orderUsBuildCaseBox(dbOrderUsMultiPage);

    case 'dbOrderUsOnlineStore':
      return orderUsBuildCaseBox(dbOrderUsOnlineStore);

    case 'dbOrderUsContextAdv':
      return orderUsBuildCaseBox(dbOrderUsContextAdv);

    case 'dbOrderUsSEO':
      return orderUsBuildCaseBox(dbOrderUsSEO);
  }
}
"use strict";

var yourDreameSlide = document.querySelector('.yourdreame-box');
var nodeYourDreameSVG = document.querySelectorAll('.yourdreame-bg-main-box-SVG');
var yourDreameSVG = Array.from(nodeYourDreameSVG);
var yourDreameSVGCount = 1;

function yourDreameSlideVisible() {
  yourDreameSVG[0].children[0].style.animationName = 'change_fill_active';
  yourDreameSVG[0].children[0].style.animationDuration = '4s';
  setTimeout(function () {
    yourDreameSVG[yourDreameSVGCount].children[0].style.animationName = 'change_fill_active';
    yourDreameSVG[yourDreameSVGCount].children[0].style.animationDuration = '4s';
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
  for (var z = 0; z < yourDreameSVG.length; z++) {
    yourDreameSVG[z].children[0].style.animationName = 'change_fill_passive';
    yourDreameSVG[z].children[0].style.animationDuration = '1s';
    yourDreameSVGCount = 0;
  }
} //Intersection Observer API: функция, которая наблюдает за элементом и его появлением в браузере при пролистывании


var yourDreameObserver = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting === true) {
    yourDreameSlideVisible();
  } else {
    yourDreameSlideUnVisible();
  }
}, {
  threshold: [1]
});
yourDreameObserver.observe(yourDreameSlide);
"use strict";

var dbBpackingMainPage = [{
  bpackingMainTitleRUS: 'Слои упаковки Вашего бизнеса в интернете',
  bpackingMainTitleENG: 'Layers packaging of your business',
  bpackingbuttonsBox: [{
    bPackingCaseDataName: '',
    // Указываем название Базы Данных (переменная), в которой лежат кэйсы по данной ссылке
    bPackingBtnBoxPosition: 'bpacking-box-btn-pos-1 ',
    bPackingBtnBoxRUS: 'Конверсионный',
    bPackingBtnBoxENG: 'Conversion',
    bPackingBtnBoxURL: 'images/Business_pack/box_1.png',
    bPackingBtnDetailTxtRUS: 'Текст секции "Конверсионный"',
    bPackingBtnDetailTxtENG: 'Some text of "Conversion" section'
  }, {
    bPackingCaseDataName: '',
    // Указываем название Базы Данных (переменная), в которой лежат кэйсы по данной ссылке
    bPackingBtnBoxPosition: 'bpacking-box-btn-pos-2 ',
    bPackingBtnBoxRUS: 'Технологический',
    bPackingBtnBoxENG: 'Technological',
    bPackingBtnBoxURL: 'images/Business_pack/box_2.png'
    /*         bPackingBtnDetailTxtRUS: 'Текст секции "Визуальный"',
    bPackingBtnDetailTxtENG: 'Some text of "Visual" section', */

  }, {
    bPackingCaseDataName: '',
    // Указываем название Базы Данных (переменная), в которой лежат кэйсы по данной ссылке
    bPackingBtnBoxPosition: 'bpacking-box-btn-pos-3 ',
    bPackingBtnBoxRUS: 'Смысловой',
    bPackingBtnBoxENG: 'Semantic',
    bPackingBtnBoxURL: 'images/Business_pack/box_3.png'
    /*         bPackingBtnDetailTxtRUS: 'Текст секции "Смысловой"',
    bPackingBtnDetailTxtENG: 'Some text of "Semantic" section', */

  }, {
    bPackingCaseDataName: '',
    // Указываем название Базы Данных (переменная), в которой лежат кэйсы по данной ссылке
    bPackingBtnBoxPosition: 'bpacking-box-btn-pos-4 ',
    bPackingBtnBoxRUS: 'Визуальный',
    bPackingBtnBoxENG: 'Visual',
    bPackingBtnBoxURL: 'images/Business_pack/box_4.png'
    /*         bPackingBtnDetailTxtRUS: 'Текст секции "Технологический"',
    bPackingBtnDetailTxtENG: 'Some text of "Technological" section', */

  }, {
    bPackingCaseDataName: '',
    // Указываем название Базы Данных (переменная), в которой лежат кэйсы по данной ссылке
    bPackingBtnBoxPosition: 'bpacking-box-btn-pos-5 ',
    bPackingBtnBoxRUS: 'Аналитический',
    bPackingBtnBoxENG: 'Analytical',
    bPackingBtnBoxURL: 'images/Business_pack/box_5.png'
    /*         bPackingBtnDetailTxtRUS: 'Текст секции "Аналитический"',
    bPackingBtnDetailTxtENG: 'Some text of "Analytical" section', */

  }],
  bpackingbuttonsDetail: [{
    bPackingBtnDetailRUS: 'Подробнее',
    bPackingBtnDetailENG: 'more details'
  }]
}]; //Заполняем шаблон страницы

var sourcebPackingButtons = document.getElementById('bpacking-main-wrapper').innerHTML;
var bPackingitemsTemplate = Handlebars.compile(sourcebPackingButtons);
bpackingBuildMainPage(dbBpackingMainPage);

function bpackingBuildMainPage(items) {
  var markup = items.map(function (item) {
    return bPackingitemsTemplate(item);
  }).join('');
  document.querySelector('.bpacking-box').insertAdjacentHTML('beforeend', markup);
} // Определяем, какая кнопка нажата и запускаем модалку


function bPackingBtnBoxClick(event) {} // Определяем, над какой кнопкой курсор, меняем коробку, меняем цвет кнопки, вставляем текст


var nodeBpackingBtnsBox = document.querySelectorAll('.bpacking-box-btn');
var bPackingBtnsBox = Array.from(nodeBpackingBtnsBox);
/* const bPackingDetailBoxTxt = document.querySelector(
  '.bpacking-box-details-txt',
); */

var _loop = function _loop() {
  var bPackingCurrentBtnBox = _bPackingBtnsBox[_i];
  bPackingCurrentBtnBox.addEventListener('mouseover', function (event) {
    var bPackingBtnBoxMouseOverHref = bPackingCurrentBtnBox.getAttribute('href');
    /*     const bPackingDetailBoxTxtData = bPackingCurrentBtnBox.getAttribute(
      'data-txt',
    ); */

    for (var z = 0; z < bPackingBtnsBox.length; z++) {
      bPackingBtnsBox[z].classList.remove('bpacking-box-btn-active');
    }

    bPackingCurrentBtnBox.classList.add('bpacking-box-btn-active');
    var bPackingCurrentBoxImg = document.querySelector('.bpacking-box-img');
    bPackingCurrentBoxImg.style.backgroundImage = 'url(' + bPackingBtnBoxMouseOverHref + ')';
    /*    const bPackingDetailBoxTxt = document.querySelector(
      '.bpacking-box-details-txt',
    ); */

    /* bPackingDetailBoxTxt.innerHTML = bPackingDetailBoxTxtData; */
  });
};

for (var _i = 0, _bPackingBtnsBox = bPackingBtnsBox; _i < _bPackingBtnsBox.length; _i++) {
  _loop();
}

bPackingOnLoad();

function bPackingOnLoad() {
  bPackingBtnsBox[0].classList.add('bpacking-box-btn-active');
  /*  bPackingDetailBoxTxt.innerHTML = bPackingBtnsBox[0].getAttribute('data-txt'); */
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

var rusFlag = document.getElementById('cover-flag_rus');
var engFlag = document.getElementById('cover-flag_eng');

function langActual() {
  var rusContent = document.querySelectorAll('[data-leng="rus"]');
  var engContent = document.querySelectorAll('[data-leng="eng"]');
  var arrRusContent = Array.from(rusContent);
  var arrEngContent = Array.from(engContent);
  return [arrRusContent, arrEngContent];
}

function onChangeRus(e) {
  var currentArrayLang = langActual();
  var arrRusContent = currentArrayLang[0];
  var arrEngContent = currentArrayLang[1];
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
  var rusFlag = document.getElementById('cover-flag_rus');
  var engFlag = document.getElementById('cover-flag_eng');
  var currentArrayLang = langActual();
  var arrRusContent = currentArrayLang[0];
  var arrEngContent = currentArrayLang[1];
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
/* if (screen.width <= 650) {
  window.location.href = 'https://q-studio.com.ua/mob';
}
 */
"use strict";
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