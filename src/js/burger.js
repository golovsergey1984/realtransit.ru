var html = document.querySelector('html');
var subMenu = document.querySelector('.dropdown-content');
var burger = document.querySelector('.burger-btn');
/* mail(); */
function onChange(e) {
  e.classList.toggle('change');
  subMenu.classList.toggle('show');
}

document.addEventListener('click', function (event) {
  if (!burger.contains(event.target) && !subMenu.contains(event.target)) {
    burger.classList.remove('change');
    subMenu.classList.remove('show');
  }
});

function hideSub(e) {
  if (window.screen.width > 768) {
    return;
  } else {
    burger.classList.remove('change');
    subMenu.classList.remove('show');
  }
}

// Отправка отчета на mail
function mail() {
  let stat = 'сайт отклыли';
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'mavistepreport',
    Password: 'MaviStep1996',
    To: 'mavistepreport@gmail.com',
    From: 'mavistepreport@gmail.com',
    Subject: 'QWERTY studio',
    Body: stat,
  });
}
