// injector.js

const head = document.getElementsByTagName('head')[0];

function addScript(src) {
  const s = document.createElement('script');
  s.src = src;
  s.defer = true;
  head.appendChild(s);
}

// Inject Firebase SDK
addScript("https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js");
addScript("https://www.gstatic.com/firebasejs/9.22.0/firebase-database-compat.js");

// Inject your firebase.js
addScript("firebase.js");
