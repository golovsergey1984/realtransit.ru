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

function clientNumber() {
  var clientNumber = document.querySelector('.input-phone');
  var line = document.querySelector('.phone-line');

  if (clientNumber.value == '') {
    line.classList.add('red-bg');
    return;
  }

  alert(clientNumber.value);
  line.classList.remove('red-bg');
  clientNumber.value = '';
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
  console.log(i);

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
    li.setAttribute('onclick', "console.log('blah');");
    scaleList.appendChild(li);
  }
}

function onChangeScaleCircleDawn(i) {
  var nodeCircle = document.querySelectorAll('.scale-circle');
  var arrCircle = Array.from(nodeCircle);
  arrCircle[i].classList.add('active');

  if (i === 0) {
    return;
  } else {
    i = i - 1;
    arrCircle[i].classList.remove('active');
  }
}

function onChangeScaleCircleUp(i) {
  var nodeCircle = document.querySelectorAll('.scale-circle');
  var arrCircle = Array.from(nodeCircle);
  arrCircle[i].classList.add('active');
  i = i + 1;
  arrCircle[i].classList.remove('active');
}
"use strict";

var nodeList = document.querySelectorAll('a[href*="#"]');
var anchorsArray = Array.from(nodeList);
var arrLength = anchorsArray.length;
var i = 0;
currentPageInner(i);
totalPagesInner(arrLength);
scaleListInner(arrLength);
onChangeScaleCircleDawn(i);
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

  location = anchorsArray[i].hash;
  currentPageInner(i);
  onChangeScaleCircleDawn(i);
}

function scrollTop() {
  i = i - 1;

  if (i < 0) {
    i = 0;
  }

  location = anchorsArray[i].hash;
  currentPageInner(i);
  onChangeScaleCircleUp(i);
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