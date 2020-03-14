const rusContent = document.querySelectorAll('[data-leng="rus"]');
const engContent = document.querySelectorAll('[data-leng="eng"]');
const rusFlag = document.getElementById('cover-flag_rus');
const engFlag = document.getElementById('cover-flag_eng');
const arrRusContent = Array.from(rusContent);
const arrEngContent = Array.from(engContent);

function onChangeRus(e) {
  /*  preloadStart(); */
  console.log(engFlag);
  engFlag.classList.remove('cover-flag');
  engFlag.classList.add('cover-flag_onload');
  rusFlag.classList.remove('cover-flag_onload');
  rusFlag.classList.add('cover-flag');
  for (let count = 0; count < arrRusContent.length; count++) {
    arrRusContent[count].classList.remove('hide');
  }
  for (let count = 0; count < arrEngContent.length; count++) {
    arrEngContent[count].classList.add('hide');
  }
}

function onChangeEng(e) {
  rusFlag.classList.remove('cover-flag');
  rusFlag.classList.add('cover-flag_onload');
  engFlag.classList.remove('cover-flag_onload');
  engFlag.classList.add('cover-flag');
  /*   e.classList.add('cover-flag_onload');
  rusFlag.classList.remove('cover-flag_onload'); */
  /*   console.log(rusFlag); */
  /*  preloadStart(); */

  for (let count = 0; count < arrRusContent.length; count++) {
    arrRusContent[count].classList.add('hide');
  }
  for (let count = 0; count < arrEngContent.length; count++) {
    arrEngContent[count].classList.remove('hide');
  }
}
