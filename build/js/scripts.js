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
"use strict";

var images = document.images;
var imagesTotalCount = images.length;
var imagesLoadedCount = 0;
var preloader = document.getElementById('page-preloader');
var percentageDisplay = document.getElementById('load-percentage');

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

function imageLoaded() {
  imagesLoadedCount++;
  var widthPreloader = (100 / imagesTotalCount * imagesLoadedCount << 0) + '%';
  percentageDisplay.style.width = widthPreloader;

  if (imagesLoadedCount >= imagesTotalCount) {
    exitPreloader();
  }
}

function exitPreloader() {
  document.body.onload = function () {
    setTimeout(function () {
      if (!preloader.classList.contains('done')) {
        preloader.classList.add('done');
        location = anchorsArray[0].hash;
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

  for (var a = 0; a < arrLength; a = a + 1) {
    var li = document.createElement('li');
    scaleList.appendChild(li);
    var circle = document.createElement('div');
    circle.className = 'scale-circle';
    li.appendChild(circle);
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
window.addEventListener('mousewheel', throttle(callback, 1000));

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
  /*   setTimeout(function() {
    
  }, 0); */
}

function scrollTop() {
  i = i - 1;

  if (i < 0) {
    i = 0;
  }

  location = anchorsArray[i].hash;
  currentPageInner(i);
  onChangeScaleCircleUp(i);
  /*  setTimeout(function() {
    
  }, 0); */
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