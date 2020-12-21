(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";require("./videoPlayer");

},{"./videoPlayer":2}],2:[function(require,module,exports){
"use strict";var percentage,resultPercentage,videoPlayer=document.getElementById("jsVideoPlayer"),video=document.getElementById("jsVideo"),playBtn=document.getElementById("jsPlayBtn"),fullScreenBtn=document.getElementById("jsFullScreenBtn"),volumeBtn=document.getElementById("jsVolumeBtn"),volumeRange=document.getElementById("jsVolumeRange"),volumeBar=document.getElementById("jsVolumeRangeBar"),cTime=document.getElementById("jsCurrentTime"),dTime=document.getElementById("jsDurationTime"),playerJuice=document.getElementById("jsPlayerJuice"),playerBottle=document.getElementById("jsPlayerBottle"),drag=!1;function handleVideoPlay(){!0===video.paused?(video.play(),playBtn.innerHTML='<i class="fas fa-pause"></i>'):(video.pause(),playBtn.innerHTML='<i class="fas fa-play"></i>')}function videoFinished(){!0===video.paused&&(playBtn.innerHTML='<i class="fas fa-sync-alt"></i>',playBtn.addEventListener("click",function(){video.play()}))}function handleVolumeMute(){!0===video.muted?(video.muted=!1,volumeBar.style.width=100*video.volume+"%",volumeBtn.innerHTML='<i class="fas fa-volume-up"></i>'):(video.muted=!0,volumeBar.style.width="0%",volumeBtn.innerHTML='<i class="fas fa-volume-mute"></i>')}function handleVolumeDown(e){drag=!0,updateBar(e.offsetX)}function handleVolumeDrag(e){drag&&updateBar(e.offsetX)}function handleVolumeUp(){drag=!1}function updateBar(e){e&&(percentage=100*e/volumeRange.clientWidth);percentage>100&&(percentage=100),percentage<0&&(percentage=0),volumeBar.style.width=percentage+"%",video.volume=percentage/100}function getVideoTime(){dTime.innerHTML=formatData(video.duration),setInterval(getCurrentTime,1e3)}function getCurrentTime(){cTime.innerHTML=formatData(video.currentTime)}function mommyCanIGetJuice(){var e=video.currentTime,n=video.duration;resultPercentage=100/n*e,playerJuice.style.width=resultPercentage+"%"}function handlePlayerBarDown(e){updateJuiceBar(e.offsetX)}function updateJuiceBar(e){var n=100*e/playerBottle.clientWidth;playerJuice.style.width=n+"%"}function formatData(e){var n=parseInt(e,10),t=Math.floor(n/3600),a=Math.floor(n/60),i=n-3600*t-60*a;return t<10&&(t="0".concat(t)),a<10&&(a="0".concat(a)),e<10&&(i="0".concat(i)),"".concat(t,":").concat(a,":").concat(i)}function exitFullScreen(){fullScreenBtn.innerHTML='<i class="fas fa-expand"></i>',fullScreenBtn.addEventListener("click",goFullScreen),document.webkitExitFullscreen()}function goFullScreen(){videoPlayer.webkitRequestFullscreen(),fullScreenBtn.innerHTML='<i class="fas fa-compress"></i>',fullScreenBtn.removeEventListener("click",goFullScreen),fullScreenBtn.addEventListener("click",exitFullScreen)}function init(){document.addEventListener("keydown",function(e){e.preventDefault(),"Space"===e.code&&(!0===video.paused?(video.play(),playBtn.innerHTML='<i class="fas fa-pause"></i>'):(video.pause(),playBtn.innerHTML='<i class="fas fa-play"></i>'))}),document.addEventListener("keydown",function(e){if(e.preventDefault(),"ArrowUp"===e.code)if(video){video.volume+=.1;var n=video.volume;volumeBar.style.width=100*n+"%"}else console.log("There is no video")}),document.addEventListener("keydown",function(e){if(e.preventDefault(),"ArrowDown"===e.code)if(video){video.volume-=.1;var n=video.volume;volumeBar.style.width=100*n+"%"}else console.log("There is no video")}),video.addEventListener("click",handleVideoPlay),playBtn.addEventListener("click",handleVideoPlay),volumeBtn.addEventListener("click",handleVolumeMute),volumeRange.addEventListener("mousedown",handleVolumeDown),volumeRange.addEventListener("mousemove",handleVolumeDrag),document.addEventListener("mouseup",handleVolumeUp),video.addEventListener("loadedmetadata",getVideoTime),video.addEventListener("timeupdate",mommyCanIGetJuice),video.addEventListener("ended",videoFinished),playerBottle.addEventListener("mousedown",handlePlayerBarDown),fullScreenBtn.addEventListener("click",goFullScreen)}videoPlayer&&(video.volume=.5,volumeBar.style.width=100*video.volume+"%",playerJuice.style.width="0%",init());

},{}]},{},[1]);