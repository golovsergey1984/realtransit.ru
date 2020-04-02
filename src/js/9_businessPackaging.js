const dbBpackingMainPage = [
  {
    bpackingMainTitleRUS: 'Слои упаковки Вашего бизнеса в интернете',
    bpackingMainTitleENG: 'Layers packaging of your business',
    bpackingbuttonsBox: [
      {
        bPackingCaseDataName: '', // Указываем название Базы Данных (переменная), в которой лежат кэйсы по данной ссылке
        bPackingBtnBoxPosition: 'bpacking-box-btn-pos-1 ',
        bPackingBtnBoxRUS: 'Конверсионный',
        bPackingBtnBoxENG: 'Conversion',
        bPackingBtnBoxURL: 'images/Business_pack/box_1.png',
        bPackingBtnDetailTxtRUS: 'Текст секции "Конверсионный"',
        bPackingBtnDetailTxtENG: 'Some text of "Conversion" section',
      },
      {
        bPackingCaseDataName: '', // Указываем название Базы Данных (переменная), в которой лежат кэйсы по данной ссылке
        bPackingBtnBoxPosition: 'bpacking-box-btn-pos-2 ',
        bPackingBtnBoxRUS: 'Технологический',
        bPackingBtnBoxENG: 'Technological',
        bPackingBtnBoxURL: 'images/Business_pack/box_2.png',
        /*         bPackingBtnDetailTxtRUS: 'Текст секции "Визуальный"',
        bPackingBtnDetailTxtENG: 'Some text of "Visual" section', */
      },
      {
        bPackingCaseDataName: '', // Указываем название Базы Данных (переменная), в которой лежат кэйсы по данной ссылке
        bPackingBtnBoxPosition: 'bpacking-box-btn-pos-3 ',
        bPackingBtnBoxRUS: 'Смысловой',
        bPackingBtnBoxENG: 'Semantic',
        bPackingBtnBoxURL: 'images/Business_pack/box_3.png',
        /*         bPackingBtnDetailTxtRUS: 'Текст секции "Смысловой"',
        bPackingBtnDetailTxtENG: 'Some text of "Semantic" section', */
      },
      {
        bPackingCaseDataName: '', // Указываем название Базы Данных (переменная), в которой лежат кэйсы по данной ссылке
        bPackingBtnBoxPosition: 'bpacking-box-btn-pos-4 ',
        bPackingBtnBoxRUS: 'Визуальный',
        bPackingBtnBoxENG: 'Visual',
        bPackingBtnBoxURL: 'images/Business_pack/box_4.png',
        /*         bPackingBtnDetailTxtRUS: 'Текст секции "Технологический"',
        bPackingBtnDetailTxtENG: 'Some text of "Technological" section', */
      },
      {
        bPackingCaseDataName: '', // Указываем название Базы Данных (переменная), в которой лежат кэйсы по данной ссылке
        bPackingBtnBoxPosition: 'bpacking-box-btn-pos-5 ',
        bPackingBtnBoxRUS: 'Аналитический',
        bPackingBtnBoxENG: 'Analytical',
        bPackingBtnBoxURL: 'images/Business_pack/box_5.png',
        /*         bPackingBtnDetailTxtRUS: 'Текст секции "Аналитический"',
        bPackingBtnDetailTxtENG: 'Some text of "Analytical" section', */
      },
    ],
    bpackingbuttonsDetail: [
      {
        bPackingBtnDetailRUS: 'Подробнее',
        bPackingBtnDetailENG: 'more details',
      },
    ],
  },
];

//Заполняем шаблон страницы
const sourcebPackingButtons = document.getElementById('bpacking-main-wrapper')
  .innerHTML;
let bPackingitemsTemplate = Handlebars.compile(sourcebPackingButtons);

bpackingBuildMainPage(dbBpackingMainPage);
function bpackingBuildMainPage(items) {
  const markup = items.map(item => bPackingitemsTemplate(item)).join('');
  document
    .querySelector('.bpacking-box')
    .insertAdjacentHTML('beforeend', markup);
}

// Определяем, какая кнопка нажата и запускаем модалку
function bPackingBtnBoxClick(event) {}

// Определяем, над какой кнопкой курсор, меняем коробку, меняем цвет кнопки, вставляем текст

const nodeBpackingBtnsBox = document.querySelectorAll('.bpacking-box-btn');
const bPackingBtnsBox = Array.from(nodeBpackingBtnsBox);
/* const bPackingDetailBoxTxt = document.querySelector(
  '.bpacking-box-details-txt',
); */
for (const bPackingCurrentBtnBox of bPackingBtnsBox) {
  bPackingCurrentBtnBox.addEventListener('mouseover', function(event) {
    const bPackingBtnBoxMouseOverHref = bPackingCurrentBtnBox.getAttribute(
      'href',
    );
    /*     const bPackingDetailBoxTxtData = bPackingCurrentBtnBox.getAttribute(
      'data-txt',
    ); */
    for (let z = 0; z < bPackingBtnsBox.length; z++) {
      bPackingBtnsBox[z].classList.remove('bpacking-box-btn-active');
    }
    bPackingCurrentBtnBox.classList.add('bpacking-box-btn-active');
    const bPackingCurrentBoxImg = document.querySelector('.bpacking-box-img');
    bPackingCurrentBoxImg.style.backgroundImage =
      'url(' + bPackingBtnBoxMouseOverHref + ')';
    /*    const bPackingDetailBoxTxt = document.querySelector(
      '.bpacking-box-details-txt',
    ); */

    /* bPackingDetailBoxTxt.innerHTML = bPackingDetailBoxTxtData; */
  });
}
bPackingOnLoad();
function bPackingOnLoad() {
  bPackingBtnsBox[0].classList.add('bpacking-box-btn-active');
  /*  bPackingDetailBoxTxt.innerHTML = bPackingBtnsBox[0].getAttribute('data-txt'); */
}
