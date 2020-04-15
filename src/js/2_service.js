const serviceModalWindow = document.querySelector('.serviceModal');
const nodeServiceModalVideoClip = document.getElementsByTagName("iframe");
const serviceModalVideoClip = Array.from(nodeServiceModalVideoClip);
// Функция открытия модального окна
function serviceOpenVideoClip(event) {
    serviceModalVideoClip[0].src = "https://www.youtube.com/embed/5Wg9wRdvRMw?&autoplay=1";
    serviceModalWindow.classList.remove('hide');
    serviveScrollOff();
}

// Функция закрытия модального окна
function serviceModalClose(event) {
    serviceModalVideoClip[0].src = "";
    serviceModalWindow.classList.add('hide');
}

// Отключаем скролл body под модальным окном
function serviveScrollOff() {
    serviceModalWindow.addEventListener('mousewheel', function (e) {
        e.wheelDeltaY ||
            (e.originalEvent &&
                (e.originalEvent.wheelDeltaY || e.originalEvent.wheelDelta)) ||
            e.wheelDelta ||
            0;
        e.stopPropagation();
        e.preventDefault();
    });
}

// Функция закрытия модалки по клику в не его
serviceModalWindow.addEventListener('click', function (event) {
    if (
        serviceModalVideoClip[0].contains(event.target)
    ) {
        return;
    } else {
        serviceModalClose();
    }
});