import gsap from "gsap";

let $cursor = document.querySelector(".cursor");
let $buttons = document.querySelectorAll(".interactable");
const $cursorTail = document.querySelector(".cursor-tail");

document.body.addEventListener("mousemove", onMouseMove);

$buttons.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    $cursor.classList.add("focus-cursor");
    $cursorTail.classList.add("focus-cursor");
    let $r = document.querySelector(".roller");

    $r.classList.remove("focus-roller");
  });

  e.addEventListener("mouseleave", () => {
    $cursor.classList.remove("focus-cursor");
    $cursorTail.classList.remove("focus-cursor");
    let $r = document.querySelector(".roller");

    $r.classList.remove("focus-roller");
  });
});

function onMouseMove(e) {
  gsap.to($cursorTail, 0.4, {
    x: e.clientX,
    y: e.clientY,
  });
  gsap.to($cursor, 0.15, {
    x: e.clientX,
    y: e.clientY,
  });
}

let menu = document.querySelector(".menu");
let menuTrigger = document.querySelector(".menu-trigger");

menuTrigger.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});

let $rollers = document.querySelectorAll(".roller-head-container");

$rollers.forEach((roller) => {
  const img = roller.querySelector("img");
  console.log(img);
  if (img && img.src.endsWith("#")) {
    img.style.display = "none";
    console.log("no image found");
  }
});

let $placeholder = document.querySelector(".placeholder");
const countdownDate = new Date("September 1, 2024 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  let centiseconds = Math.floor((distance % (1000 * 1)) / 10);

  if (days < 10) {
    days = "0" + days;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (centiseconds < 10) {
    centiseconds = "0" + centiseconds;
  }

  $placeholder.textContent = `${days} : ${hours} : ${minutes} : ${seconds} : ${centiseconds}`;

  if (distance < 0) {
    clearInterval(countdownInterval);
    $placeholder.textContent = "aiaiai est là!";
  }
}

const countdownInterval = setInterval(updateCountdown, 10);

updateCountdown();

const detectDevTools = () => {
  const isDevToolsOpened = /./;
  isDevToolsOpened.toString = () => {
    console.log(
      "💀\n≤))≥\n_||_ Wanna see the backstages ?\n\n Try by understand my code haha"
    );
    return "Looking something in my code...";
  };

  console.log(isDevToolsOpened);
};

detectDevTools();
