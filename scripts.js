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

//Move Eyes
//  left: 31%;
// bottom: 49%;
let currentX = "31%";
let currentY = "49%";

document.querySelector(".eyeball").style.setProperty("--x-pos", currentX);
document.querySelector(".eyeball").style.setProperty("--y-pos", currentY);

document.addEventListener("mousemove", change);

function change(e) {
  let x = 31 + (e.clientX / window.innerWidth) * 2;
  currentX = `${x}%`;
  let y = 50 - (e.clientY / window.innerWidth) * 2;
  currentY = `${y}%`;

  document.querySelector(".eyeball").style.setProperty("--x-pos", currentX);
  document.querySelector(".eyeball").style.setProperty("--y-pos", currentY);
}
