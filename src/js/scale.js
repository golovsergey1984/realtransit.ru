function totalPagesInner(arrLength) {
  const totalPages = document.getElementById('total-pages');
  totalPages.innerHTML = arrLength;
}

function currentPageInner(i) {
  const currentPage = document.getElementById('current-page');
  i = i + 1;
  if (i < 10) {
    currentPage.innerHTML = '0' + i;
  } else {
    currentPage.innerHTML = i;
  }
}

function scaleListInner(arrLength) {
  const scaleList = document.getElementById('scale-list');

  for (var a = 0; a < arrLength; a = a + 1) {
    const li = document.createElement('li');
    scaleList.appendChild(li);
    const circle = document.createElement('div');
    circle.className = 'scale-circle';
    li.appendChild(circle);
  }
}

function onChangeScaleCircleDawn(i) {
  const nodeCircle = document.querySelectorAll('.scale-circle');
  const arrCircle = Array.from(nodeCircle);
  arrCircle[i].classList.add('active');

  if (i === 0) {
    return;
  } else {
    i = i - 1;
    arrCircle[i].classList.remove('active');
  }
}

function onChangeScaleCircleUp(i) {
  const nodeCircle = document.querySelectorAll('.scale-circle');
  const arrCircle = Array.from(nodeCircle);
  arrCircle[i].classList.add('active');
  i = i + 1;
  arrCircle[i].classList.remove('active');
}
