const title = document.querySelector(".hello h1");
function handleTitleClick() {
  console.log("clicked");
}

function handleTitleMouse() {
  title.style.color = "purple";
  title.innerText = "Mouse is here";
}

function handleMouseLeave() {
  title.innerText = "Mouse  is gone";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleTitleMouse);
title.addEventListener("mouseleave", handleMouseLeave);
