const body = document.querySelector("body");
const themeselect = document.querySelector("#theme_sel");
const langselect = document.querySelector("#lan_sel");
const eyeball = document.querySelector(".eyeball");
const eyeballBig = document.querySelector(".eyeball_big");
const allSections = document.querySelectorAll(".noshow");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

allSections.forEach((element) => observer.observe(element));

window.addEventListener("load", start);

function start() {
  body.dataset.theme = "dark";
  themeselect.value = "dark";
  themeselect.addEventListener("change", changeTheme);
  themeselect.addEventListener("mouseover", () => {
    eyeball.style.display = "none";
    eyeballBig.style.display = "block";
  });
  themeselect.addEventListener("mouseout", () => {
    eyeball.style.display = "block";
    eyeballBig.style.display = "none";
  });
  langselect.value = "da";
  langselect.addEventListener("change", changeLanguage);

  document.querySelector(".cat").addEventListener("mouseover", () => {
    eyeball.style.display = "none";
    eyeballBig.style.display = "block";
  });
  document.querySelector(".cat").addEventListener("mouseout", () => {
    eyeball.style.display = "block";
    eyeballBig.style.display = "none";
  });
}

//Theme switcher and language
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
function changeLanguage(evt) {
  console.log("changeLanguage");

  if (evt.target.value === "en") {
    document.querySelector("#da").classList.add("hide");
    document.querySelector("#en").classList.remove("hide");
  } else {
    document.querySelector("#da").classList.remove("hide");
    document.querySelector("#en").classList.add("hide");
  }
}

//Move Eyes
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
