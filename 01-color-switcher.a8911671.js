const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body"),intervalId:null};function e(){t.intervalId&&(t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`)}t.startBtn.addEventListener("click",(function(){t.intervalId||(t.intervalId=setInterval(e,1e3),t.startBtn.setAttribute("disabled",!0))})),t.stopBtn.addEventListener("click",(function(){clearInterval(t.intervalId),t.body.style.backgroundColor="",t.startBtn.removeAttribute("disabled"),t.intervalId=null}));
//# sourceMappingURL=01-color-switcher.a8911671.js.map
