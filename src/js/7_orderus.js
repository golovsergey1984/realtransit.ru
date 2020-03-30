const dbOrderUsButtons = [
  {
    orderUsBtnTitleRUS: 'Landing page',
    orderUsBtnTitleENG: 'Landing page',
  },
  {
    orderUsBtnTitleRUS: 'Сайт визитка',
    orderUsBtnTitleENG: 'Business card site',
  },
  {
    orderUsBtnTitleRUS: 'Интернет-магазин',
    orderUsBtnTitleENG: 'Online store',
  },
  {
    orderUsBtnTitleRUS: 'Контекстная реклама',
    orderUsBtnTitleENG: 'contextual advertising',
  },
  {
    orderUsBtnTitleRUS: 'CEO продвижение',
    orderUsBtnTitleENG: 'SEO promotion',
  },
];

var source = document.getElementById('orderus-button-wrapper').innerHTML;
var itemsTemplate = Handlebars.compile(source);

orderUsBuildBtnPrice(dbOrderUsButtons);
function orderUsBuildBtnPrice(items) {
  const markup = items.map(item => itemsTemplate(item)).join('');
  document
    .querySelector('.orderus-button-wrapper')
    .insertAdjacentHTML('beforeend', markup);
}
