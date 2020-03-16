function getColor(i) {
  var nodeBgImage = document.querySelectorAll('.bgimage');
  const bgImage = Array.from(nodeBgImage);

  var style = document.defaultView
    .getComputedStyle(bgImage[i], null)
    .getPropertyValue('background-color');

  console.log(document.defaultView.getComputedStyle(bgImage[i], null));
  let darkColor = 'rgba(0, 0, 0, 0)';
  let brightСolor = 'rgb(246, 246, 246)';
  if (style === darkColor) {
    console.log('Темный фон: ' + darkColor);
  } else {
    console.log('Светлый фон: ' + brightСolor);
  }
}
