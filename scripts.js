const body = document.querySelector("body");
const select = document.querySelector("#select");

window.addEventListener("load", start);

function start() {
  body.dataset.theme = "dark";
  select.value = "dark";
  select.addEventListener("change", changeTheme);
}

//Theme switcher
function changeTheme(evt) {
  console.log("changeTheme");

  if (evt.target.value === "dark") {
    body.dataset.theme = "dark";
    document.querySelector(".cat").classList.remove("hide");
    document.querySelector(".sun").classList.add("hide");
  } else {
    body.dataset.theme = "light";
    document.querySelector(".cat").classList.add("hide");
    document.querySelector(".sun").classList.remove("hide");
  }
}
