/*
add your own list of websites in the array.
*/

let blockedSites = [
  "www.facebook.com",
  "www.instagram.com",
  "www.linkedin.com",
  "www.ekstrabladet.dk",
];

if (blockedSites.includes(window.location.hostname)) {
  console.log(`Focus up, you shouldn't be on: ${window.location.hostname}`);
  document.body.innerHTML = `<div style="position:relative; height:100vh; width: 100%;">
  <h2 style="position:absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">Focus.</h2> <br>
  </div>`;

  setTimeout(() => {
    window.close();
  }, 2500);
}
