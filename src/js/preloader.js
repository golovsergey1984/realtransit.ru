var images = document.images;
var imagesTotalCount = images.length;
var imagesLoadedCount = 0;
var preloader = document.getElementById('page-preloader');
var percentageDisplay = document.getElementById('load-percentage');

preloadStart();

function preloadStart() {
  /* preloader.classList.remove('done'); */
  /*   console.log('Я подключился'); */
  if (imagesTotalCount === 0) {
    percentageDisplay.style.width = '100%';
    exitPreloader();
  }
  for (let i = 0; i < imagesTotalCount; i++) {
    var imageClone = new Image();
    imageClone.onload = imageLoaded;
    imageClone.onerror = imageLoaded;
    imageClone.src = images[i].src;
  }
  imageLoaded();
}

function imageLoaded() {
  /*  console.log('Я подключился во 2й функции'); */
  imagesLoadedCount++;

  let widthPreloader =
    (((100 / imagesTotalCount) * imagesLoadedCount) << 0) + '%';

  percentageDisplay.style.width = widthPreloader;

  if (imagesLoadedCount >= imagesTotalCount) {
    exitPreloader();
  }
}
function exitPreloader() {
  /*  console.log('Я подключился во 3й функции'); */
  document.body.onload = function() {
    /*  console.log('Я подключился во 4й функции'); */
    setTimeout(function() {
      if (!preloader.classList.contains('done')) {
        preloader.classList.add('done');
        var top = anchorsArray[0].offsetTop;
        window.scrollTo({ top: top, behavior: 'instant' });
      }
    }, 1000);
  };
}
