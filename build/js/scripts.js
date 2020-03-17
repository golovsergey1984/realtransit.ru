"use strict";var html=document.querySelector("html"),subMenu=document.querySelector(".dropdown-content"),burger=document.querySelector(".burger-btn");function onChange(e){e.classList.toggle("change"),subMenu.classList.toggle("show")}function hideSub(e){768<window.screen.width||(burger.classList.remove("change"),subMenu.classList.remove("show"))}function getColor(e){var n=document.querySelectorAll(".bgimage"),t=Array.from(n)[e].getAttribute("data-bgc"),r=document.querySelectorAll('[data-color="text change"]'),a=Array.from(r),o=document.querySelector('[data-color="svg change"]'),s=document.querySelector('[data-color="phone change"]'),c=document.querySelector(".Hmenu-logo");if("dark"===t){for(var l=0;l<a.length;l++)a[l].classList.remove("grey"),a[l].classList.add("white-text");s.classList.remove("nearly-black"),s.classList.add("white-text"),o.style.stroke="white",c.src="./images/logo_hover.png"}else{for(var i=0;i<a.length;i++)a[i].classList.add("grey");s.classList.add("nearly-black"),o.style.stroke="",c.src="./images/logo.png"}}function clientNumber(){var e=document.querySelector(".input-phone"),n=document.querySelector(".phone-line");""!=e.value?(alert(e.value),n.classList.remove("red-bg"),e.value=""):n.classList.add("red-bg")}document.addEventListener("click",function(e){burger.contains(e.target)||subMenu.contains(e.target)||(burger.classList.remove("change"),subMenu.classList.remove("show"))});var rusContent=document.querySelectorAll('[data-leng="rus"]'),engContent=document.querySelectorAll('[data-leng="eng"]'),rusFlag=document.getElementById("cover-flag_rus"),engFlag=document.getElementById("cover-flag_eng"),arrRusContent=Array.from(rusContent),arrEngContent=Array.from(engContent);function onChangeRus(e){console.log(engFlag),engFlag.classList.remove("cover-flag"),engFlag.classList.add("cover-flag_onload"),rusFlag.classList.remove("cover-flag_onload"),rusFlag.classList.add("cover-flag");for(var n=0;n<arrRusContent.length;n++)arrRusContent[n].classList.remove("hide");for(var t=0;t<arrEngContent.length;t++)arrEngContent[t].classList.add("hide")}function onChangeEng(e){rusFlag.classList.remove("cover-flag"),rusFlag.classList.add("cover-flag_onload"),engFlag.classList.remove("cover-flag_onload"),engFlag.classList.add("cover-flag");for(var n=0;n<arrRusContent.length;n++)arrRusContent[n].classList.add("hide");for(var t=0;t<arrEngContent.length;t++)arrEngContent[t].classList.remove("hide")}var images=document.images,imagesTotalCount=images.length,imagesLoadedCount=0,preloader=document.getElementById("page-preloader"),percentageDisplay=document.getElementById("load-percentage");function preloadStart(){0===imagesTotalCount&&(percentageDisplay.style.width="100%",exitPreloader());for(var e=0;e<imagesTotalCount;e++){var n=new Image;n.onload=imageLoaded,n.onerror=imageLoaded,n.src=images[e].src}imageLoaded()}function imageLoaded(){var e=(100/imagesTotalCount*++imagesLoadedCount<<0)+"%";percentageDisplay.style.width=e,imagesTotalCount<=imagesLoadedCount&&exitPreloader()}function exitPreloader(){document.body.onload=function(){setTimeout(function(){if(!preloader.classList.contains("done")){preloader.classList.add("done");var e=anchorsArray[0].offsetTop;window.scrollTo({top:e,behavior:"instant"})}},1e3)}}function totalPagesInner(e){document.getElementById("total-pages").innerHTML=e}function currentPageInner(e){var n=document.getElementById("current-page");e+=1,n.innerHTML=e<10?"0"+e:e}function scaleListInner(e){for(var n=document.getElementById("scale-list"),t=0;t<e;t+=1){var r=document.createElement("div"),a=document.createElement("a"),o=document.createElement("li");o.className="li-scale",a.className="scale-href",a.href=anchorsArray[t].hash,o.appendChild(a),r.className="scale-circle",a.appendChild(r),o.setAttribute("onclick","changeCircleScale(this) "),n.appendChild(o)}}function onChangeScaleCircle(e){for(var n=document.querySelectorAll(".scale-circle"),t=Array.from(n),r=0;r<t.length;r++)t[r].classList.remove("active");t[e].classList.add("active")}function changeCircleScale(e){var n=0;for(n=0;n<anchorsArray.length;n++)anchorsArray[n].hash===e.children[0].hash&&(0===n?showMenuItems():hideMenuItems(),currentPageInner(n),onChangeScaleCircle(n))}preloadStart();var nodeList=document.querySelectorAll('a[href*="#"]'),anchorsArray=Array.from(nodeList),arrLength=anchorsArray.length,i=0;function throttle(e,n){var t=Date.now();return function(){t+n-Date.now()<0&&(e(),t=Date.now())}}function callback(){0<event.deltaY?scroll():scrollTop()}function scroll(){i>=anchorsArray.length-1?i=anchorsArray.length-1:i+=1,0<i&&hideMenuItems(),location=anchorsArray[i].hash,currentPageInner(i),onChangeScaleCircle(i),getColor(i)}function scrollTop(){0===(i-=1)&&showMenuItems(),i<0&&(i=0),location=anchorsArray[i].hash,currentPageInner(i),onChangeScaleCircle(i),getColor(i)}function hideMenuItems(){document.querySelector(".messengers").classList.add("none"),document.querySelector(".schedule").classList.add("none"),document.querySelector(".contant-phone").classList.add("none"),document.querySelector('[data-color="contact number"]').classList.add("none")}function showMenuItems(){document.querySelector(".messengers").classList.remove("none"),document.querySelector(".schedule").classList.remove("none"),document.querySelector(".contant-phone").classList.remove("none"),document.querySelector('[data-color="contact number"]').classList.remove("none")}currentPageInner(i),totalPagesInner(arrLength),scaleListInner(arrLength),onChangeScaleCircle(i),window.addEventListener("mousewheel",throttle(callback,800)),document.onkeydown=function(e){switch(e.keyCode){case 38:scrollTop();break;case 40:scroll()}};