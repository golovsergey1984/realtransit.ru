"use strict";var rivalCar=document.getElementById("rival car"),rivalScale=document.querySelector(".rivals-circle-nav"),nodeRivalScaleCircle=document.querySelectorAll(".nav-rivals-li"),rivalScaleCircle=Array.from(nodeRivalScaleCircle),nodeRivalPoint=document.querySelectorAll(".chek-point-color"),rivalPoint=Array.from(nodeRivalPoint),nodeCircleSvg=document.querySelectorAll(".rivals-case-svg"),circleSvg=Array.from(nodeCircleSvg),nodeRivalModalWindows=document.querySelectorAll(".rivalsModal, hide"),rivalModalWindow=Array.from(nodeRivalModalWindows),nodeSiteName=document.querySelectorAll('[data-name="rivals-site-name"]'),siteName=Array.from(nodeSiteName);innerImgCase(0);var countMove=0;function rivalInfoMove(e){if("rivalInfoRight"===e.name)if(countMove<0&&(countMove=3),4==countMove&&(countMove=0),3==countMove){for(var o=0;o<rivalPoint.length;o++)rivalPoint[o].classList.remove("red-point"),rivalPoint[o].classList.add("grey-point");innerImgCase(0),countMove+=1,rivalCar.className="rivals-car move-car-fwd-section-"+countMove}else rivalPoint[countMove].classList.remove("grey-point"),rivalPoint[countMove].classList.add("red-point"),countMove+=1,rivalCar.className="rivals-car move-car-fwd-section-"+countMove,innerImgCase(countMove);if("rivalInfoLeft"===e.name)if(3<countMove&&(countMove=0),countMove<0&&(countMove=3),0==countMove){for(var a=0;a<rivalPoint.length;a++)rivalPoint[a].classList.remove("grey-point"),rivalPoint[a].classList.add("red-point");rivalCar.className="rivals-car move-car-back-section-"+countMove,innerImgCase(3),countMove-=1}else rivalCar.className="rivals-car move-car-back-section-"+countMove,rivalPoint[countMove-=1].classList.remove("red-point"),rivalPoint[countMove].classList.add("grey-point"),innerImgCase(countMove)}function innerImgCase(e){for(var o=0;o<circleSvg.length;o++)circleSvg[o].classList.add("hide"),siteName[o].classList.add("hide"),rivalScaleCircle[o].classList.remove("nav-li-active");circleSvg[e].classList.remove("hide"),siteName[e].classList.remove("hide"),rivalScaleCircle[e].classList.add("nav-li-active")}function rivalModal(){countMove<0&&(countMove=3),3<countMove&&(countMove=0),console.log(rivalModalWindow),rivalModalWindow[countMove].classList.remove("hide"),scrollOff(countMove)}function scrollOff(e){rivalModalWindow[e].addEventListener("mousewheel",function(e){e.wheelDeltaY||e.originalEvent&&(e.originalEvent.wheelDeltaY||e.originalEvent.wheelDelta)||e.wheelDelta,e.stopPropagation(),e.preventDefault()})}function onSubmitWatchUrl(e){e.setAttribute("rel","noopener noreferrer");var o=e.getAttribute("href"),a=window.open();a.opener=null,a.location=o}function modalClose(){rivalModalWindow[countMove].classList.add("hide")}rivalScale.onclick=function(e){var o=e.target.getAttribute("data-name"),a=Number(o);console.log(a),console.log(countMove),rivalScaleCircle[countMove].classList.remove("nav-li-active"),rivalScaleCircle[a].classList.add("nav-li-active"),innerImgCase(countMove=a),rivalCar.className="rivals-car move-car-fwd-section-"+countMove};var html=document.querySelector("html"),subMenu=document.querySelector(".dropdown-content"),burger=document.querySelector(".burger-btn");function onChange(e){e.classList.toggle("change"),subMenu.classList.toggle("show")}function hideSub(e){768<window.screen.width||(burger.classList.remove("change"),subMenu.classList.remove("show"))}function getColor(e){var o=document.querySelectorAll(".bgimage"),a=Array.from(o)[e].getAttribute("data-bgc"),n=document.querySelectorAll('[data-color="text change"]'),r=Array.from(n),t=document.querySelector('[data-color="svg change"]'),l=document.querySelector('[data-color="phone change"]'),c=document.querySelector(".Hmenu-logo");if("dark"===a){for(var i=0;i<r.length;i++)r[i].classList.remove("grey"),r[i].classList.add("white-text");l.classList.remove("nearly-black"),l.classList.add("white-text"),t.style.stroke="white",c.src="./images/logo_hover.png"}else{for(var s=0;s<r.length;s++)r[s].classList.add("grey");l.classList.add("nearly-black"),t.style.stroke="",c.src="./images/logo.png"}}function clientNumber(){var e=document.querySelector(".input-phone"),o=document.querySelector(".phone-line");return/^[+\d\(\)\s\/\\-]{4,40}\d$/.test(e.value)?(alert("Ваш номер телефона "+e.value+" успешно отправлен менеджеру QWERTY studio! \n\r Мы свяжемся с Вами в ближайшее время"),o.classList.remove("red-bg"),void(e.value="")):void o.classList.add("red-bg")}document.addEventListener("click",function(e){burger.contains(e.target)||subMenu.contains(e.target)||(burger.classList.remove("change"),subMenu.classList.remove("show"))});var rusContent=document.querySelectorAll('[data-leng="rus"]'),engContent=document.querySelectorAll('[data-leng="eng"]'),rusFlag=document.getElementById("cover-flag_rus"),engFlag=document.getElementById("cover-flag_eng"),arrRusContent=Array.from(rusContent),arrEngContent=Array.from(engContent);function onChangeRus(e){console.log(engFlag),engFlag.classList.remove("cover-flag"),engFlag.classList.add("cover-flag_onload"),rusFlag.classList.remove("cover-flag_onload"),rusFlag.classList.add("cover-flag");for(var o=0;o<arrRusContent.length;o++)arrRusContent[o].classList.remove("hide");for(var a=0;a<arrEngContent.length;a++)arrEngContent[a].classList.add("hide")}function onChangeEng(e){rusFlag.classList.remove("cover-flag"),rusFlag.classList.add("cover-flag_onload"),engFlag.classList.remove("cover-flag_onload"),engFlag.classList.add("cover-flag");for(var o=0;o<arrRusContent.length;o++)arrRusContent[o].classList.add("hide");for(var a=0;a<arrEngContent.length;a++)arrEngContent[a].classList.remove("hide")}var images=document.images,imagesTotalCount=images.length,imagesLoadedCount=0,preloader=document.getElementById("page-preloader"),percentageDisplay=document.getElementById("load-percentage");function preloadStart(){0===imagesTotalCount&&(percentageDisplay.style.width="100%",exitPreloader());for(var e=0;e<imagesTotalCount;e++){var o=new Image;o.onload=imageLoaded,o.onerror=imageLoaded,o.src=images[e].src}imageLoaded()}function imageLoaded(){var e=(100/imagesTotalCount*++imagesLoadedCount<<0)+"%";percentageDisplay.style.width=e,imagesTotalCount<=imagesLoadedCount&&exitPreloader()}function exitPreloader(){document.body.onload=function(){setTimeout(function(){if(!preloader.classList.contains("done")){preloader.classList.add("done");var e=anchorsArray[0].offsetTop;window.scrollTo({top:e,behavior:"instant"})}},1e3)}}function totalPagesInner(e){document.getElementById("total-pages").innerHTML=e}function currentPageInner(e){var o=document.getElementById("current-page");e+=1,o.innerHTML=e<10?"0"+e:e}function scaleListInner(e){for(var o=document.getElementById("scale-list"),a=0;a<e;a+=1){var n=document.createElement("div"),r=document.createElement("a"),t=document.createElement("li");t.className="li-scale",r.className="scale-href",r.href=anchorsArray[a].hash,t.appendChild(r),n.className="scale-circle",r.appendChild(n),t.setAttribute("onclick","changeCircleScale(this) "),o.appendChild(t)}}function onChangeScaleCircle(e){for(var o=document.querySelectorAll(".scale-circle"),a=Array.from(o),n=0;n<a.length;n++)a[n].classList.remove("active");a[e].classList.add("active")}function changeCircleScale(e){var o=0;for(o=0;o<anchorsArray.length;o++)anchorsArray[o].hash===e.children[0].hash&&(0===o?showMenuItems():hideMenuItems(),currentPageInner(i=o),onChangeScaleCircle(i),getColor(i))}preloadStart(),screen.width<=650&&(window.location.href="https://q-studio.com.ua/mob");var nodeList=document.querySelectorAll('a[href*="#"]'),anchorsArray=Array.from(nodeList),arrLength=anchorsArray.length,i=0;function throttle(e,o){var a=Date.now();return function(){a+o-Date.now()<0&&(e(),a=Date.now())}}function callback(){0<event.deltaY?scroll():scrollTop()}function scroll(){i>=anchorsArray.length-1?i=anchorsArray.length-1:i+=1,0<i&&hideMenuItems(),location=anchorsArray[i].hash,currentPageInner(i),onChangeScaleCircle(i),getColor(i)}function scrollTop(){0===(i-=1)&&showMenuItems(),i<0&&(i=0),location=anchorsArray[i].hash,currentPageInner(i),onChangeScaleCircle(i),getColor(i)}function hideMenuItems(){document.querySelector(".messengers").classList.add("none"),document.querySelector(".schedule").classList.add("none")}function showMenuItems(){document.querySelector(".messengers").classList.remove("none"),document.querySelector(".schedule").classList.remove("none")}currentPageInner(i),totalPagesInner(arrLength),scaleListInner(arrLength),onChangeScaleCircle(i),window.addEventListener("mousewheel",throttle(callback,800)),document.onkeydown=function(e){switch(e.keyCode){case 38:scrollTop();break;case 40:scroll()}};