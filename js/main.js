// Disable Right Click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();

  window.alert(
    "Sorry, right click is disabled to prevent leakage of 			confidential functions"
  );
});

//-------------------------------
//  Scroll To Top

let span = document.querySelector(".up");

window.onscroll = function () {
  window.scrollY <= 100
    ? span.classList.remove("show")
    : span.classList.add("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
//------------------------------------------

//---------------------------------------
// Click Toggle
let toggler = document.querySelector(".toggle");
let nav = document.querySelector(" nav");
let close = document.querySelector(".close");

toggler.onclick = function () {
  nav.classList.add("open");
};

close.onclick = function () {
  this.parentElement.classList.remove("open");
};

document.onkeyup = function (e) {
  if (e.key === "Escape") {
    nav.classList.remove("open");
  }
};

//skills Progress
let skills = document.querySelector(".skills-sec");
let progSpans = document.querySelectorAll(".progSpan");

window.onscroll = function () {
  if (window.scrollY >= skills.offsetTop - 100) {
    progSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
//Switcher
let switcherLis = document.querySelectorAll(".switcher li");
// let imgs = Array.from(document.images);
let imgs = document.querySelectorAll(".gallery img");
let boxes = document.querySelectorAll(".gallery box");
switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

//Remove Active Class From All Lis And Add To Current
function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

// Manage Imgs
function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
