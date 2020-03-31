const rusFlag = document.getElementById('cover-flag_rus');
const engFlag = document.getElementById('cover-flag_eng');

function langActual() {
  const rusContent = document.querySelectorAll('[data-leng="rus"]');
  const engContent = document.querySelectorAll('[data-leng="eng"]');
  const arrRusContent = Array.from(rusContent);
  const arrEngContent = Array.from(engContent);
  return [arrRusContent, arrEngContent];
}

function onChangeRus(e) {
  let currentArrayLang = langActual();
  let arrRusContent = currentArrayLang[0];
  let arrEngContent = currentArrayLang[1];

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
  const rusFlag = document.getElementById('cover-flag_rus');
  const engFlag = document.getElementById('cover-flag_eng');
  let currentArrayLang = langActual();
  let arrRusContent = currentArrayLang[0];
  let arrEngContent = currentArrayLang[1];
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
