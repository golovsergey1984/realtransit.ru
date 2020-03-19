const rivalCar = document.getElementById('rival car');
const rivalScale = document.querySelector('.rivals-circle-nav');
const nodeRivalPoint = document.querySelectorAll('[data-way-point]');
const rivalPoint = Array.from(nodeRivalPoint);
var countMove = 0;

rivalScale.onclick = function(event) {
  let target = event.target;
  let count = target.getAttribute('data-name');

  const countNumberCircle = Number(count);
  console.log(countNumberCircle);
  /*   console.log(countNumberCircle);
  console.log(countMove); */
  countMove = countNumberCircle;
  rivalCar.className = 'rivals-car move-car-fwd-section-' + countMove;
};

function rivalInfoMove(e) {
  if (e.name === 'rivalInfoRight') {
    console.log('Вправо ' + countMove);
    if (countMove < 0) {
      countMove = 3;
      console.log('Вправо ' + countMove);
    }
    if (countMove == 4) {
      countMove = 0;
      console.log('Вправо ' + countMove);
    }
    /*     rivalPoint[countMove].classList.remove('grey-point');
    rivalPoint[countMove].classList.add('red-point'); */
    countMove = countMove + 1;
    rivalCar.className = 'rivals-car move-car-fwd-section-' + countMove;
  }
  if (e.name === 'rivalInfoLeft') {
    if (countMove > 3) {
      countMove = 0;
    }
    if (countMove < 0) {
      countMove = 3;
      console.log('Влево ' + countMove);
    }
    console.log('Влево ' + countMove);

    rivalCar.className = 'rivals-car move-car-back-section-' + countMove;
    countMove = countMove - 1;
    console.log('Влево ' + countMove);
    /*     rivalPoint[countMove].classList.remove('red-point');
    rivalPoint[countMove].classList.add('grey-point'); */
  }
}

/* function rivalInfoGo(e) {
  rivalCar.className = 'rivals-car move-car-fwd-section-' + e;
} */
