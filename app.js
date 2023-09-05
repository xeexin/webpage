const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  const clickClass = "clicked";

  //   if (h1.classList.contains(clickClass)) {
  //     h1.classList.remove(clickClass);
  //   } else {
  //     h1.classList.add(clickClass);
  //   }

  h1.classList.toggle(clickClass);
}

h1.addEventListener("click", handleTitleClick);
