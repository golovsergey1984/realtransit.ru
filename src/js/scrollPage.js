const nodeList = document.querySelectorAll('a[href*="#"]');
const anchorsArray = Array.from(nodeList);

var i = 0;

window.addEventListener('wheel', throttle(callback, 2000));

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

window.onmousewheel = function() {
  document.body.style.overflow = 'hidden';
};

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

  setTimeout(function() {
    location = anchorsArray[i].hash;
  }, 1000);
}

function scrollTop() {
  i = i - 1;
  if (i < 0) {
    i = 0;
  }

  setTimeout(function() {
    location = anchorsArray[i].hash;
  }, 1000);
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
