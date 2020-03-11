"use strict";var html=document.querySelector("html"),subMenu=document.querySelector(".dropdown-content"),burger=document.querySelector(".burger-btn");function onChange(e){e.classList.toggle("change"),subMenu.classList.toggle("show")}document.addEventListener("click",function(e){burger.contains(e.target)||subMenu.contains(e.target)||(burger.classList.remove("change"),subMenu.classList.remove("show"))});var images=document.images,imagesTotalCount=images.length,imagesLoadedCount=0,preloader=document.getElementById("page-preloader"),percentageDisplay=document.getElementById("load-percentage");0===imagesTotalCount&&(percentageDisplay.style.width="100%",exitPreloader());for(var i=0;i<imagesTotalCount;i++){var imageClone=new Image;imageClone.onload=imageLoaded,imageClone.onerror=imageLoaded,imageClone.src=images[i].src}function imageLoaded(){var e=(100/imagesTotalCount*++imagesLoadedCount<<0)+"%";percentageDisplay.style.width=e,imagesTotalCount<=imagesLoadedCount&&exitPreloader()}function exitPreloader(){document.body.onload=function(){setTimeout(function(){if(!preloader.classList.contains("done")){preloader.classList.add("done"),location=anchorsArray[0].hash;var e=anchorsArray[0].offsetTop;window.scrollTo({top:e,behavior:"instant"})}},1e3)}}var nodeList=document.querySelectorAll('a[href*="#"]'),anchorsArray=Array.from(nodeList);i=0;function throttle(e,o){var n=Date.now();return function(){n+o-Date.now()<0&&(e(),n=Date.now())}}function callback(){0<event.deltaY?scroll():scrollTop()}function scroll(){i>=anchorsArray.length-1?i=anchorsArray.length-1:i+=1,setTimeout(function(){location=anchorsArray[i].hash},1e3)}function scrollTop(){(i-=1)<0&&(i=0),setTimeout(function(){location=anchorsArray[i].hash},1e3)}window.addEventListener("wheel",throttle(callback,2e3)),window.onmousewheel=function(){document.body.style.overflow="hidden"},document.onkeydown=function(e){switch(e.keyCode){case 38:scrollTop();break;case 40:scroll()}};