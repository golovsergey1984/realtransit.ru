const nodeList = document.querySelectorAll('a[href*="#"]');
const anchorsArray = Array.from(nodeList);
const arrLength = anchorsArray.length;

var i = 0;
currentPageInner(i);
totalPagesInner(arrLength);
scaleListInner(arrLength);
onChangeScaleCircleDawn(i);
window.addEventListener('mousewheel', throttle(callback, 900));

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
