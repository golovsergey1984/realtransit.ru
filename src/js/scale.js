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
    const circle = document.createElement('div');
    const hrefNavCircle = document.createElement('a');
    const li = document.createElement('li');
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
  const nodeCircle = document.querySelectorAll('.scale-circle');
  const arrCircle = Array.from(nodeCircle);
  for (let a = 0; a < arrCircle.length; a++) {
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

      currentPageInner(a);
      onChangeScaleCircle(a);
    }
  }
}
