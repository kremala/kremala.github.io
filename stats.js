// stats.js — do not modify kremala.js
(function () {
  var SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxKrxoxsEJKWxy_0hP_O4jlBpFjaSpG1hETgajY--wWe7GwP1_isaiVbn9rDoNlnH355w/exec"; // ← paste your URL

  function getOS() {
    var ua = navigator.userAgent;
    if (/Windows/.test(ua)) return "Windows";
    if (/Android/.test(ua)) return "Android";
    if (/iPhone|iPad|iPod/.test(ua)) return "iOS";
    if (/Mac/.test(ua)) return "macOS";
    if (/Linux/.test(ua)) return "Linux";
    return "Unknown";
  }

  function getBrowser() {
    var ua = navigator.userAgent;
    if (/Edg\//.test(ua)) return "Edge";
    if (/OPR\/|Opera/.test(ua)) return "Opera";
    if (/Chrome/.test(ua)) return "Chrome";
    if (/Firefox/.test(ua)) return "Firefox";
    if (/Safari/.test(ua)) return "Safari";
    return "Unknown";
  }

  function sendStats(ip) {
    var payload = {
      ip:         ip,
      screenW:    screen.width,
      screenH:    screen.height,
      windowW:    window.innerWidth,
      windowH:    window.innerHeight,
      os:         getOS(),
      browser:    getBrowser(),
      pixelRatio: window.devicePixelRatio || 1
    };

    fetch(SCRIPT_URL, {
      method:  "POST",
      mode:    "no-cors",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(payload)
    });
  }

  function hookPaixnidi() {
    var original = window.paixnidi;
    window.paixnidi = function () {
      // Fetch public IP, then send stats, then run the game
      fetch("https://api.ipify.org?format=json")
        .then(function (r) { return r.json(); })
        .then(function (d) { sendStats(d.ip); })
        .catch(function ()  { sendStats("unavailable"); });
      original.apply(this, arguments);
    };
  }

  // Wait until paixnidi() is defined (it's in kremala.js)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", hookPaixnidi);
  } else {
    hookPaixnidi();
  }
})();