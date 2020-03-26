function mouseEnterSlide(elem) {
  var edge = closestEdge(event, elem);

  const currentSlideOver = elem.firstElementChild;
  const currentSlideifo = currentSlideOver.firstElementChild;

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
}

function mouseleaveSlide(elem) {
  const currentSlideOver = elem.firstElementChild;
  const currentSlideifo = currentSlideOver.firstElementChild;
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
}

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
  let url = event.getAttribute('href');
  let otherWindow = window.open();
  otherWindow.opener = null;
  otherWindow.location = url;
}
