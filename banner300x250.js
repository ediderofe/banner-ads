(function(){
  var img = "https://static.wixstatic.com/media/7410a8_e132fbe1ab584149a76ac24d2b48d4ac~mv2.gif";
  var click = "https://playfast.games";

  var el = document.currentScript;
  var ad = document.createElement("a");
  ad.href = click;
  ad.target = "_blank";
  ad.rel = "noopener noreferrer";
  ad.innerHTML = '<img src="'+img+'" width="300" height="250" style="border:0;display:block;">';

  var wrap = document.createElement("div");
  wrap.style="width:300px;height:250px;overflow:hidden;";
  wrap.appendChild(ad);

  el.parentNode.insertBefore(wrap, el);
})();
