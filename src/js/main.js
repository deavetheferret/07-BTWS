import gsap from "gsap";

let $cursor = document.querySelector(".cursor");
let $buttons = document.querySelectorAll(".interactable");
const $cursorTail = document.querySelector(".cursor-tail");

document.body.addEventListener("mousemove", onMouseMove);

$buttons.forEach((e) => {
  let result = "";

  e.addEventListener("mouseenter", () => {
    $cursor.classList.add("focus-cursor");
    $cursorTail.classList.add("focus-cursor");
  });

  e.addEventListener("mouseleave", () => {
    $cursor.classList.remove("focus-cursor");
    $cursorTail.classList.remove("focus-cursor");
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

let $placeholder = document.querySelector(".placeholder");
const countdownDate = new Date("September 1, 2024 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

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

  // Display the countdown
  $placeholder.textContent = `${days} : ${hours} : ${minutes} : ${seconds}`;

  // Check if the countdown has ended
  if (distance < 0) {
    clearInterval(countdownInterval);
    $placeholder.textContent = "aiaiai est là!";
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial update
updateCountdown();
