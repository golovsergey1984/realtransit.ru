function clientNumber(event) {
  const nodeClientNumber = document.querySelectorAll('.input-phone');
  const clientNumber = Array.from(nodeClientNumber);
  let line = document.querySelector('.phone-line');
  let createWebCount = null;
  // Пример условия под точный формат номера телефона +38 012 345 67 89
  /*   let re = /^\+[\d]{2}\ [\d]{3} [\d]{2,3} [\d]{2,3} [\d]{2,3}$/; */

  console.log(event);
  console.log(event.previousElementSibling);
  const createWebCurrentLang = event.previousElementSibling;
  if (createWebCurrentLang.classList.contains('hide')) {
    createWebCount = 0;
  } else {
    createWebCount = 1;
  }

  // Разрешаем все, кроме букв (от 4 до 40 символов)
  let re = /^[+\d\(\)\s\/\\-]{4,40}\d$/;
  let valid = re.test(clientNumber[createWebCount].value);
  if (valid) {
    alert(
      'Ваш номер телефона ' +
        clientNumber[createWebCount].value +
        ' успешно отправлен менеджеру QWERTY studio! \n\r Мы свяжемся с Вами в ближайшее время',
    );
    line.classList.remove('red-bg');
    clientNumber[createWebCount].value = '';
    return;
  } else {
    line.classList.add('red-bg');
    return;
  }
}
