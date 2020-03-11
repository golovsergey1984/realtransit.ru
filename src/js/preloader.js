var images = document.images;
var imagesTotalCount = images.length;
var imagesLoadedCount = 0;
var preloader = document.getElementById('page-preloader');
var percentageDisplay = document.getElementById('load-percentage');

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

function imageLoaded() {
  imagesLoadedCount++;

  let widthPreloader =
    (((100 / imagesTotalCount) * imagesLoadedCount) << 0) + '%';

  percentageDisplay.style.width = widthPreloader;

  if (imagesLoadedCount >= imagesTotalCount) {
    exitPreloader();
  }
}
function exitPreloader() {
  document.body.onload = function() {
    setTimeout(function() {
      if (!preloader.classList.contains('done')) {
        preloader.classList.add('done');
        location = anchorsArray[0].hash;
        var top = anchorsArray[0].offsetTop;
        window.scrollTo({ top: top, behavior: 'instant' });
      }
    }, 1000);
  };
}
