function clientNumber() {
  let clientNumber = document.querySelector('.input-phone');
  let line = document.querySelector('.phone-line');
  // Пример условия под точный формат номера телефона +38 012 345 67 89
  /*   let re = /^\+[\d]{2}\ [\d]{3} [\d]{2,3} [\d]{2,3} [\d]{2,3}$/; */

  // Разрешаем все, кроме букв (от 4 до 40 символов)
  let re = /^[+\d\(\)\s\/\\-]{4,40}\d$/;
  let valid = re.test(clientNumber.value);
  if (valid) {
    alert(
      'Ваш номер телефона ' +
        clientNumber.value +
        ' успешно отправлен менеджеру QWERTY studio! \n\r Мы свяжемся с Вами в ближайшее время',
    );
    line.classList.remove('red-bg');
    clientNumber.value = '';
    return;
  } else {
    line.classList.add('red-bg');
    return;
  }
}
