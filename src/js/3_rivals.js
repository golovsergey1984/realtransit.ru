//Данные для шаблона модалки
const dbRivalsModal = [
  {
    rivalsModalTitleRUS: 'Теплоэнергетика - Конверсия - 7.6%',
    rivalsModalTitleENG: 'Heat power engineering - Conversion rate - 7.6%',
    rivalsModalCustumerRUS:
      'Заказчик: ООО "Дженси" Украина, г. Киев 05.09.2019.',
    rivalsModalCustumerENG:
      'Ordered by: "Dzhensi" LLC Ukraine, Kyiv 05.09.2019.',
    rivalsModalTxtWasRUS: 'Было: 5-10 заявок в месяц',
    rivalsModalTxtWasENG: 'There were: 5-10 applications per month',
    rivalsModalTxtBecomeRUS:
      'Стало: результат работы за первый месяц - 36 заявок!',
    rivalsModalTxtBecomeENG:
      'After: the result of work for the first month - 36 applications!',
    rivalsModalResRUS:
      'О результате: Всё сделали очень быстро и толково. Особенно порадовала оперативная интеграция с CRM Битрикс-24',
    rivalsModalResENG:
      'Result: Everything was done very quickly and intelligently. Particularly pleased with the operational integration with Bitrix-24 CRM',
    rivalsModalImg: './images/rivals/Modal/slide_1.png',
    rivalsModalUrlTxt: 'dzhensi.com.ua',
    rivalsModalUrlHref: 'https://dzhensi.com.ua/',
  },
  {
    rivalsModalTitleRUS: 'Сборные беседки - Конверсия - 8.2%',
    rivalsModalTitleENG: 'Prefabricated arbors - Conversion rate - 8.2%',
    rivalsModalCustumerRUS: 'Заказчик:ООО "Мск инвест", г.Минск, 04.02.2019.',
    rivalsModalCustumerENG: 'Ordered by:"Msk Invest" LLC, Minsk, 04.02.2019.',
    rivalsModalTxtWasRUS: 'Было: 20-30 заявок в месяц',
    rivalsModalTxtWasENG: 'There were: 20-30 applications per month',
    rivalsModalTxtBecomeRUS:
      'Стало: За первые пол года работы сайт принёс  752 заказа и 114 304$ выручки.',
    rivalsModalTxtBecomeENG:
      'After: For the first half of the year, the site brought 752 orders and $ 114,304 in revenue.',
    rivalsModalResRUS:
      'О результате: Все расходы на сайт и рекламу окупились в первый месяц! Отличный сайт, мы очень довольны! ',
    rivalsModalResENG:
      'Result: All expenses on the site and advertising paid off during the first month! Great site, we are satisfied!',
    rivalsModalImg: './images/rivals/Modal/slide_1.png',
    rivalsModalUrlTxt: 'беседкитут.бел',
    rivalsModalUrlHref: 'https://xn--90agcaql0cmaj.xn--90ais/',
  },
  {
    rivalsModalTitleRUS: 'Бурение скважин - Конверсия - 9.7%',
    rivalsModalTitleENG: 'Borehole drilling - Conversion rate - 9.7%',
    rivalsModalCustumerRUS:
      'Заказчик: ИП Яроцкий Александр, г.Минск, 07.05.2019.',
    rivalsModalCustumerENG:
      'Ordered by: SE Alexander Yarotsky, Minsk , 07.05.2019.',
    rivalsModalTxtWasRUS:
      'Было: Заказов у меня было немного, решил заказать сайт.',
    rivalsModalTxtWasENG:
      'Before: I did not have many orders, so I decided to order a website.',
    rivalsModalTxtBecomeRUS:
      'Стало: Сайт стал источником нескольких, очень крупных заказов, в течение первого месяца.',
    rivalsModalTxtBecomeENG:
      'After: Several large orders came thought the website during the first month.',
    rivalsModalResRUS:
      'О результате: Симпатичный получился сайт, мне нравится. Спасибо QWERTY STUDIO за качественную, оперативную работу!',
    rivalsModalResENG:
      'Result: The website is nice, I like it. I am thankful to QWERTY STUDIO for high-quality and  operational work!',
    rivalsModalImg: './images/rivals/Modal/slide_3.png',
    rivalsModalUrlTxt: 'burenieminsk.by',
    rivalsModalUrlHref: 'https://burenieminsk.by/',
  },
  {
    rivalsModalTitleRUS: 'Фэйсбук - Конверсия - 15.0%',
    rivalsModalTitleENG: 'Facebook - Сonversion - 15.0%',
    rivalsModalCustumerRUS:
      'Заказчик: ООО "Фэйсбук" США, г. Пало-Альто 22.08.2017.',
    rivalsModalCustumerENG: 'Ordered by: "Facebook" LLC, Minsk, 04.02.2019.',
    rivalsModalTxtWasRUS: 'Было: 5-10 заявок в месяц',
    rivalsModalTxtWasENG: 'Before: 5-10 applications per month',
    rivalsModalTxtBecomeRUS:
      'Стало: результат работы за первый месяц - 36 заявок!',
    rivalsModalTxtBecomeENG:
      'After: the result of work for the first month - 36 applications!',
    rivalsModalResRUS:
      'О результате: Всё сделали очень быстро и толково. Особенно порадовала оперативная интеграция с CRM Битрикс-24',
    rivalsModalResENG:
      'Result: Everything was done very quickly and intelligently. Particularly pleased with the operational integration with Bitrix-24 CRM',
    rivalsModalImg: './images/rivals/Modal/slide_1.png',
    rivalsModalUrlTxt: 'facebook.com',
    rivalsModalUrlHref: 'https://uk-ua.facebook.com/',
  },
];

//Заполняем шаблон страницы
const sourcebRivalsButtons = document.getElementById('rivals-modal').innerHTML;
let rivalsitemsTemplate = Handlebars.compile(sourcebRivalsButtons);

rivalsBuildMModalPage(dbRivalsModal);
function rivalsBuildMModalPage(items) {
  const markup = items.map(item => rivalsitemsTemplate(item)).join('');
  document
    .querySelector('.rivalsModal')
    .insertAdjacentHTML('beforeend', markup);
}

const rivalCar = document.getElementById('rival car');
const rivalScale = document.querySelector('.rivals-circle-nav');
const nodeRivalScaleCircle = document.querySelectorAll('.nav-rivals-li');
const rivalScaleCircle = Array.from(nodeRivalScaleCircle);
const nodeRivalPoint = document.querySelectorAll('.chek-point-color');
const rivalPoint = Array.from(nodeRivalPoint);
const nodeCircleSvg = document.querySelectorAll('.rivals-case-svg');
const circleSvg = Array.from(nodeCircleSvg);

const nodeSiteName = document.querySelectorAll(
  '[data-name="rivals-site-name"]',
);
const siteName = Array.from(nodeSiteName);

innerImgCase(0);
var countMove = 0;

rivalScale.onclick = function(event) {
  let target = event.target;
  let count = target.getAttribute('data-name');
  const countNumberCircle = Number(count);
  // НАЗАД: машинка едет с 4й секции на 1ю
  if (
    (countMove == -1 && countNumberCircle == 0) ||
    (countMove == 4 && countNumberCircle == 3) ||
    (countMove == 3 && countNumberCircle == 0)
  ) {
    if (countMove == 4) {
      countMove = 0;
    } else {
      countMove = countNumberCircle + 4;
    }

    for (let z = 0; z < rivalPoint.length; z++) {
      rivalPoint[z].classList.remove('red-point');
      rivalPoint[z].classList.add('grey-point');
    }
    innerImgCase(0);
    rivalCar.className = 'rivals-car move-car-fwd-section-' + countMove;
  }

  if (
    countMove - 1 == countNumberCircle ||
    (countMove == -1 && countNumberCircle == 2)
  ) {
    if (countMove == -1) {
      countMove = 3;
    }
    rivalCar.className = 'rivals-car move-car-back-section-' + countMove;
    countMove = countNumberCircle;
    rivalPoint[countMove].classList.add('grey-point');
    rivalPoint[countMove].classList.remove('red-point');
    innerImgCase(countMove);
  }
  if (
    countMove + 1 == countNumberCircle ||
    (countMove == 4 && countNumberCircle == 1)
  ) {
    // ВПЕРЕД: машинка едет по шкале на 1н шаг вперед
    if (countMove == 4) {
      countMove = 0;
    }
    rivalPoint[countMove].classList.remove('grey-point');
    rivalPoint[countMove].classList.add('red-point');
    countMove = countNumberCircle;
    rivalCar.className = 'rivals-car move-car-fwd-section-' + countMove;
    innerImgCase(countMove);
  }

  // НАЗАД: машинка едет с 4й секции на 2ю
  if (
    (countMove == 3 && countNumberCircle == 1) ||
    (countMove == -1 && countNumberCircle == 1)
  ) {
    for (let z = 1; z < rivalPoint.length; z++) {
      rivalPoint[z].classList.remove('red-point');
      rivalPoint[z].classList.add('grey-point');
    }
    rivalCar.className = 'rivals-car move-car-fwd-section-' + 7;
    countMove = countNumberCircle;
    innerImgCase(countMove);
  }
  // НАЗАД: машинка едет с 3й секции на 1ю
  if (countMove == 2 && countNumberCircle == 0) {
    for (let z = 0; z < rivalPoint.length - 1; z++) {
      rivalPoint[z].classList.remove('red-point');
      rivalPoint[z].classList.add('grey-point');
    }
    rivalCar.className = 'rivals-car move-car-fwd-section-' + 8;
    countMove = countNumberCircle;
    innerImgCase(countMove);
  }

  // ВПЕРЕД: машинка едет с 1й секции на 3ю
  if (
    (countMove == 0 && countNumberCircle == 2) ||
    (countMove == 4 && countNumberCircle == 2)
  ) {
    for (let z = 0; z < rivalPoint.length - 1; z++) {
      rivalPoint[z].classList.add('red-point');
      rivalPoint[z].classList.remove('grey-point');
    }

    rivalCar.className = 'rivals-car move-car-fwd-section-' + 5;
    countMove = countNumberCircle;
    innerImgCase(countMove);
  }
  // ВПЕРЕД: машинка едет с 2й секции на 4ю
  if (countMove == 1 && countNumberCircle == 3) {
    for (let z = 1; z < rivalPoint.length; z++) {
      rivalPoint[z].classList.add('red-point');
      rivalPoint[z].classList.remove('grey-point');
    }

    rivalCar.className = 'rivals-car move-car-fwd-section-' + 6;
    countMove = countNumberCircle;
    innerImgCase(countMove);
  }

  if (countMove < 0 || countMove > 3) {
    countMove = countNumberCircle;
  }

  // ВПЕРЕД: машинка едет с 1й секции на 4ю
  if (countMove == 0 && countNumberCircle == 3) {
    for (let z = 0; z < rivalPoint.length; z++) {
      rivalPoint[z].classList.add('red-point');
      rivalPoint[z].classList.remove('grey-point');
    }
    rivalCar.className = 'rivals-car move-car-back-section-' + countMove;
    innerImgCase(3);
    countMove = countMove - 1;
  }
};

function rivalInfoMove(e) {
  if (e.name === 'rivalInfoRight') {
    if (countMove < 0) {
      countMove = 3;
    }
    if (countMove == 4) {
      countMove = 0;
    }
    if (countMove == 3) {
      for (let z = 0; z < rivalPoint.length; z++) {
        rivalPoint[z].classList.remove('red-point');
        rivalPoint[z].classList.add('grey-point');
      }
      innerImgCase(0);
      countMove = countMove + 1;
      rivalCar.className = 'rivals-car move-car-fwd-section-' + countMove;
    } else {
      rivalPoint[countMove].classList.remove('grey-point');
      rivalPoint[countMove].classList.add('red-point');
      countMove = countMove + 1;
      rivalCar.className = 'rivals-car move-car-fwd-section-' + countMove;
      innerImgCase(countMove);
    }
  }
  if (e.name === 'rivalInfoLeft') {
    if (countMove > 3) {
      countMove = 0;
    }
    if (countMove < 0) {
      countMove = 3;
    }

    if (countMove == 0) {
      for (let z = 0; z < rivalPoint.length; z++) {
        rivalPoint[z].classList.remove('grey-point');
        rivalPoint[z].classList.add('red-point');
      }
      rivalCar.className = 'rivals-car move-car-back-section-' + countMove;

      innerImgCase(3);
      countMove = countMove - 1;
    } else {
      rivalCar.className = 'rivals-car move-car-back-section-' + countMove;
      countMove = countMove - 1;
      rivalPoint[countMove].classList.remove('red-point');
      rivalPoint[countMove].classList.add('grey-point');
      innerImgCase(countMove);
    }
  }
}

function innerImgCase(e) {
  for (let a = 0; a < circleSvg.length; a++) {
    circleSvg[a].classList.add('hide');
    siteName[a].classList.add('hide');
    rivalScaleCircle[a].classList.remove('nav-li-active');
  }

  circleSvg[e].classList.remove('hide');
  siteName[e].classList.remove('hide');
  rivalScaleCircle[e].classList.add('nav-li-active');
}

const noderivalsModalContainers = document.querySelectorAll(
  '.rivals-modal-container',
);
var rivalsModalContainers = Array.from(noderivalsModalContainers);
// Открываем текущее модальное окно
function rivalModal() {
  if (countMove < 0) {
    countMove = 3;
  }
  if (countMove > 3) {
    countMove = 0;
  }
  rivalsModalContainers[countMove].classList.remove('hide');
  rivalsModalContainers[countMove].parentElement.classList.remove('hide');
  scrollOff(countMove);
}

// Функция закрытия модального окна
const rivalsModalWindow = document.querySelector('.rivalsModal');
function rivalsModalClose(event) {
  rivalsModalWindow.classList.add('hide');
  rivalsModalContainers[countMove].classList.add('hide');
}

rivalsModalWindow.addEventListener('click', function(event) {
  if (rivalsModalContainers[countMove].contains(event.target)) {
    return;
  } else {
    rivalsModalClose();
  }
});

// Отключаем скролл body под модальным окном
function scrollOff() {
  rivalsModalWindow.addEventListener('mousewheel', function(e) {
    e.wheelDeltaY ||
      (e.originalEvent &&
        (e.originalEvent.wheelDeltaY || e.originalEvent.wheelDelta)) ||
      e.wheelDelta ||
      0;
    e.stopPropagation();
    e.preventDefault();
  });
}
/* function innerImgCase(e) {
    for (let a = 0; a < circleSvg.length; a++) {
      circleSvg[a].classList.add('hide-case');
      siteName[a].classList.add('hide-case');
    }
    setTimeout(function() {
      for (let a = 0; a < circleSvg.length; a++) {
        circleSvg[a].classList.add('hide');
        siteName[a].classList.add('hide');
        rivalScaleCircle[a].classList.remove('nav-li-active');
      }
    }, 1000);
    setTimeout(function() {
      circleSvg[e].classList.remove('hide', 'hide-case');
      siteName[e].classList.remove('hide', 'hide-case');
      rivalScaleCircle[e].classList.add('nav-li-active');
    }, 1000);
  } */

// Переход на сайт по клику "Смотреть"
function onSubmitWatchUrl(event) {
  event.setAttribute('rel', 'noopener noreferrer');
  let url = event.getAttribute('href');
  let otherWindow = window.open();
  otherWindow.opener = null;
  otherWindow.location = url;
}
