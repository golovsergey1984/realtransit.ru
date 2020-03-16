const nodeList = document.querySelectorAll('a[href*="#"]');
const anchorsArray = Array.from(nodeList);
const arrLength = anchorsArray.length;

var i = 0;
currentPageInner(i);
totalPagesInner(arrLength);
scaleListInner(arrLength);
onChangeScaleCircle(i);
/* onChangeScaleCircleDawn(i); */
window.addEventListener('mousewheel', throttle(callback, 800));

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
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
  /* onChangeScaleCircleDawn(i); */
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
  /* onChangeScaleCircleUp(i); */
}

document.onkeydown = function(e) {
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
