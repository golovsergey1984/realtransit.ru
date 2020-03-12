var html = document.querySelector('html');
var subMenu = document.querySelector('.dropdown-content');
var burger = document.querySelector('.burger-btn');

function onChange(e) {
  e.classList.toggle('change');
  subMenu.classList.toggle('show');
}

document.addEventListener('click', function(event) {
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
