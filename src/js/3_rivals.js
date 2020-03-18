const rivalCar = document.getElementById('rival car');
const rivalScale = document.querySelector('.rivals-circle-nav');
var countMove = 0;

rivalScale.onclick = function(event) {
  let target = event.target;
  let count = target.getAttribute('data-name');
  /* console.log(target.getAttribute('data-name'));
   */
  const numberCount = Number(count);

  rivalInfoGo(numberCount);
};

function rivalInfoMove(e) {
  /*   if (e > countMove) {
    console.log(e);
    console.log(countMove);
    rivalInfoGo(e);
    countMove = e;
  } */

  if (e.name === 'rivalInfoRight') {
    countMove = countMove + 1;

    rivalCar.classList.remove('move-car-fwd-section-' + (countMove - 1));
    if (countMove > 4) {
      countMove = 1;
    }
    rivalInfoGo(countMove);
  }
  if (e.name === 'rivalInfoLeft') {
    countMove = countMove - 1;
    rivalCar.classList.remove('move-car-back-section-' + (countMove + 1));
    console.log(countMove);
  }
}

function rivalInfoGo(e) {
  rivalCar.classList.add('move-car-fwd-section-' + e);
}
