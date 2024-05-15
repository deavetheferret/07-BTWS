import gsap from "gsap";

let $cursor = document.querySelector(".cursor");
let $buttons = document.querySelectorAll(".interactable");
const $cursorTail = document.querySelector(".cursor-tail");

document.body.addEventListener("mousemove", onMouseMove);

$buttons.forEach((element) => {
  let result = "";
  let icon = "";

  element.addEventListener("mouseenter", () => {
    $cursor.classList.add("focus-cursor");
    $cursorTail.classList.add("focus-cursor");
  });

  element.addEventListener("mouseleave", () => {
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
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  $placeholder.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Check if the countdown has ended
  if (distance < 0) {
    clearInterval(countdownInterval);
    $placeholder.textContent = "Countdown has ended";
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial update
updateCountdown();
