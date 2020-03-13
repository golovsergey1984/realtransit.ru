const rusContent = document.querySelectorAll('[data-leng="rus"]');
const engContent = document.querySelectorAll('[data-leng="eng"]');
const arrRusContent = Array.from(rusContent);
const arrEngContent = Array.from(engContent);

function onChangeRus(e) {
  preloadStart();
  console.log(e);
  e.classList.add('onLoad');
  for (let count = 0; count < arrRusContent.length; count++) {
    arrRusContent[count].classList.remove('hide');
  }
  for (let count = 0; count < arrEngContent.length; count++) {
    arrEngContent[count].classList.add('hide');
  }
}

function onChangeEng(e) {
  preloadStart();
  console.log(e);
  for (let count = 0; count < arrRusContent.length; count++) {
    arrRusContent[count].classList.add('hide');
  }
  for (let count = 0; count < arrEngContent.length; count++) {
    arrEngContent[count].classList.remove('hide');
  }
}
