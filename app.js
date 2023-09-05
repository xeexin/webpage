const h1 = document.querySelector(".hello h1");
function handleTitleClick() {
  console.log("clicked");
}

function handleTitleMouse() {
  h1.style.color = "purple";
  h1.innerText = "Mouse is here";
}

function handleMouseLeave() {
  h1.innerText = "Mouse  is gone";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "pink";
}

function handleH1Copy() {
  alert("YOU 🚨");
}
function handleWindowOffline() {
  alert("NO WIFI");
}
function handleOnline() {
  alert("Connected");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleTitleMouse);
h1.addEventListener("mouseleave", handleMouseLeave);
h1.addEventListener("copy", handleH1Copy);

window.addEventListener("resize", handleWindowResize);

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleOnline);
