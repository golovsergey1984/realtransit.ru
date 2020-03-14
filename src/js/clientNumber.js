function clientNumber() {
  let clientNumber = document.querySelector('.input-phone');
  let line = document.querySelector('.phone-line');
  if (clientNumber.value == '') {
    line.classList.add('red-bg');
    return;
  }

  alert(clientNumber.value);
  line.classList.remove('red-bg');
  clientNumber.value = '';
}
