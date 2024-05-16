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

var daysContainer = document.querySelector(".days");
var hoursContainer = document.querySelector(".hours");
var minutesContainer = document.querySelector(".minutes");
var secondsContainer = document.querySelector(".seconds");
var tickElements = Array.from(document.querySelectorAll(".tick"));

var endDate = new Date(new Date().getFullYear(), 8, 1); // 1er septembre de l'année en cours
var tickState = true;

function updateTime() {
  var now = new Date();
  var timeDifference = endDate - now;

  if (timeDifference <= 0) {
    // Le compte à rebours est terminé
    clearInterval(interval);
    return;
  }

  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)).toString();
  var hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24).toString();
  var minutes = Math.floor((timeDifference / (1000 * 60)) % 60).toString();
  var seconds = Math.floor((timeDifference / 1000) % 60).toString();

  updateContainer(daysContainer, days);
  updateContainer(hoursContainer, hours);
  updateContainer(minutesContainer, minutes);
  updateContainer(secondsContainer, seconds);
}

function tick() {
  tickElements.forEach((t) => t.classList.toggle("tick-hidden"));
}

function updateContainer(container, newTime) {
  var time = newTime.split("");

  while (time.length < 2) {
    time.unshift("0");
  }

  // Handle containers with more than 2 digits
  if (container.children.length > 2) {
    var diff = container.children.length - time.length;
    for (var i = 0; i < diff; i++) {
      time.unshift("0");
    }
  }

  var children = Array.from(container.children);
  for (var i = 0; i < children.length; i++) {
    if (children[i].lastElementChild.textContent !== time[i]) {
      updateNumber(children[i], time[i]);
    }
  }
}

function updateNumber(element, number) {
  var second = element.lastElementChild.cloneNode(true);
  second.textContent = number;

  element.appendChild(second);
  element.classList.add("move");

  setTimeout(function () {
    element.classList.remove("move");
  }, 990);
  setTimeout(function () {
    element.removeChild(element.firstElementChild);
  }, 990);
}

var interval = setInterval(updateTime, 1000);
updateTime();
