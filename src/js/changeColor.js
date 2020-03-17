function getColor(i) {
  var nodeBgImage = document.querySelectorAll('.bgimage');
  const bgImage = Array.from(nodeBgImage);

  const darkColor = 'dark';
  const brightColor = 'bright';

  const currentColor = bgImage[i].getAttribute('data-bgc');
  const nodeMenuListColorOnChange = document.querySelectorAll(
    '[data-color="text change"]',
  );
  const menuListColorOnChange = Array.from(nodeMenuListColorOnChange);

  const menuListSvgColorOnChange = document.querySelector(
    '[data-color="svg change"]',
  );
  const menuPhoneColorOnChange = document.querySelector(
    '[data-color="phone change"]',
  );

  const logo = document.querySelector('.Hmenu-logo');

  if (currentColor === darkColor) {
    for (let count = 0; count < menuListColorOnChange.length; count++) {
      menuListColorOnChange[count].classList.remove('grey');
      menuListColorOnChange[count].classList.add('white-text');
    }
    menuPhoneColorOnChange.classList.remove('nearly-black');
    menuPhoneColorOnChange.classList.add('white-text');
    menuListSvgColorOnChange.style.stroke = 'white';
    logo.src = './images/logo_hover.png';
  } else {
    for (let count = 0; count < menuListColorOnChange.length; count++) {
      menuListColorOnChange[count].classList.add('grey');
    }
    menuPhoneColorOnChange.classList.add('nearly-black');
    menuListSvgColorOnChange.style.stroke = '';
    logo.src = './images/logo.png';
  }
}
