const _0x101215 = _0x15a5;
(function (_0x59505e, _0x29d11b) {
  const _0x55e76f = _0x15a5;
  const _0x1ef3b6 = _0x59505e();
  while (!![]) {
    try {
      const _0xafcffa =
        -parseInt(_0x55e76f(0xe0)) / 0x1 +
        (parseInt(_0x55e76f(0xdf)) / 0x2) * (-parseInt(_0x55e76f(0xe8)) / 0x3) +
        (-parseInt(_0x55e76f(0xea)) / 0x4) * (parseInt(_0x55e76f(0xd4)) / 0x5) +
        parseInt(_0x55e76f(0xec)) / 0x6 +
        (-parseInt(_0x55e76f(0xf3)) / 0x7) *
          (-parseInt(_0x55e76f(0xd7)) / 0x8) +
        -parseInt(_0x55e76f(0xdd)) / 0x9 +
        parseInt(_0x55e76f(0xf2)) / 0xa;
      if (_0xafcffa === _0x29d11b) {
        break;
      } else {
        _0x1ef3b6["push"](_0x1ef3b6["shift"]());
      }
    } catch (_0x46b8a4) {
      _0x1ef3b6["push"](_0x1ef3b6["shift"]());
    }
  }
})(_0x3156, 0x866eb);
function _0x15a5(_0x361fe2, _0x52fdc4) {
  const _0x31563c = _0x3156();
  _0x15a5 = function (_0x15a5db, _0x16d855) {
    _0x15a5db = _0x15a5db - 0xd3;
    let _0xd17160 = _0x31563c[_0x15a5db];
    return _0xd17160;
  };
  return _0x15a5(_0x361fe2, _0x52fdc4);
}
import _0x24b1ee from "gsap";
let $cursor = document["querySelector"](".cursor");
function _0x3156() {
  const _0x7c5e0b = [
    ".roller",
    "floor",
    "8UosMLD",
    "textContent",
    "querySelector",
    ".cursor-tail",
    "querySelectorAll",
    "forEach",
    "2453742FoXcgX",
    "body",
    "1111486EskqZC",
    "589777xGfJQP",
    "focus-roller",
    "remove",
    "classList",
    "\x20:\x20",
    "mouseenter",
    "September\x201,\x202024\x2000:00:00",
    "add",
    "3BvzdVh",
    ".placeholder",
    "588hWkddy",
    "clientX",
    "880656ilSAzE",
    "focus-cursor",
    "clientY",
    "Looking\x20something\x20in\x20my\x20code...",
    "addEventListener",
    "toString",
    "20169400nGnDNG",
    "2116646ldnkkI",
    "getTime",
    "16915SwHcnt",
  ];
  _0x3156 = function () {
    return _0x7c5e0b;
  };
  return _0x3156();
}
let $buttons = document[_0x101215(0xdb)](".interactable");
const $cursorTail = document["querySelector"](_0x101215(0xda));
document[_0x101215(0xde)][_0x101215(0xf0)]("mousemove", onMouseMove);
$buttons[_0x101215(0xdc)]((_0x2da951) => {
  const _0x45e8b8 = _0x101215;
  _0x2da951["addEventListener"](_0x45e8b8(0xe5), () => {
    const _0x563980 = _0x45e8b8;
    $cursor[_0x563980(0xe3)][_0x563980(0xe7)]("focus-cursor");
    $cursorTail[_0x563980(0xe3)][_0x563980(0xe7)](_0x563980(0xed));
    let _0x422f1f = document[_0x563980(0xd9)](_0x563980(0xd5));
    _0x422f1f["classList"][_0x563980(0xe2)]("focus-roller");
  });
  _0x2da951[_0x45e8b8(0xf0)]("mouseleave", () => {
    const _0x334e47 = _0x45e8b8;
    $cursor["classList"][_0x334e47(0xe2)](_0x334e47(0xed));
    $cursorTail[_0x334e47(0xe3)][_0x334e47(0xe2)](_0x334e47(0xed));
    let _0x5abcb2 = document["querySelector"](_0x334e47(0xd5));
    _0x5abcb2[_0x334e47(0xe3)][_0x334e47(0xe2)](_0x334e47(0xe1));
  });
});
function onMouseMove(_0x4a878f) {
  const _0xabb1e0 = _0x101215;
  _0x24b1ee["to"]($cursorTail, 0.4, {
    x: _0x4a878f[_0xabb1e0(0xeb)],
    y: _0x4a878f[_0xabb1e0(0xee)],
  });
  _0x24b1ee["to"]($cursor, 0.15, {
    x: _0x4a878f[_0xabb1e0(0xeb)],
    y: _0x4a878f["clientY"],
  });
}
let $placeholder = document[_0x101215(0xd9)](_0x101215(0xe9));
const countdownDate = new Date(_0x101215(0xe6))[_0x101215(0xd3)]();
function updateCountdown() {
  const _0x175274 = _0x101215;
  const _0x1a14b1 = new Date()["getTime"]();
  const _0x31384d = countdownDate - _0x1a14b1;
  let _0x4acffe = Math[_0x175274(0xd6)](
    _0x31384d / (0x3e8 * 0x3c * 0x3c * 0x18)
  );
  let _0x88f474 = Math[_0x175274(0xd6)](
    (_0x31384d % (0x3e8 * 0x3c * 0x3c * 0x18)) / (0x3e8 * 0x3c * 0x3c)
  );
  let _0x31ea32 = Math[_0x175274(0xd6)](
    (_0x31384d % (0x3e8 * 0x3c * 0x3c)) / (0x3e8 * 0x3c)
  );
  let _0x12b2e2 = Math["floor"]((_0x31384d % (0x3e8 * 0x3c)) / 0x3e8);
  let _0x4523e9 = Math[_0x175274(0xd6)]((_0x31384d % (0x3e8 * 0x1)) / 0xa);
  if (_0x4acffe < 0xa) {
    _0x4acffe = "0" + _0x4acffe;
  }
  if (_0x88f474 < 0xa) {
    _0x88f474 = "0" + _0x88f474;
  }
  if (_0x31ea32 < 0xa) {
    _0x31ea32 = "0" + _0x31ea32;
  }
  if (_0x12b2e2 < 0xa) {
    _0x12b2e2 = "0" + _0x12b2e2;
  }
  if (_0x4523e9 < 0xa) {
    _0x4523e9 = "0" + _0x4523e9;
  }
  $placeholder[_0x175274(0xd8)] =
    _0x4acffe +
    "\x20:\x20" +
    _0x88f474 +
    _0x175274(0xe4) +
    _0x31ea32 +
    "\x20:\x20" +
    _0x12b2e2 +
    _0x175274(0xe4) +
    _0x4523e9;
  if (_0x31384d < 0x0) {
    clearInterval(countdownInterval);
    $placeholder["textContent"] = "aiaiai\x20est\x20là!";
  }
}
const countdownInterval = setInterval(updateCountdown, 0xa);
updateCountdown();
const detectDevTools = () => {
  const _0x55cb25 = _0x101215;
  const _0x20c081 = /./;
  _0x20c081[_0x55cb25(0xf1)] = () => {
    const _0x1c82b4 = _0x55cb25;
    console["log"](
      "💀\x0a≤))≥\x0a_||_\x20Wanna\x20see\x20the\x20backstages\x20?\x0a\x0a\x20Try\x20to\x20understand\x20my\x20code\x20haha\x0a\x0a\x20btw\x20I'm\x20afrank.dev\x20so\x20if\x20you\x20wanted\x20to\x20know\x20who\x20does\x20this\x20incredible\x20website.\x20\x20That's\x20me."
    );
    return _0x1c82b4(0xef);
  };
  console["log"](_0x20c081);
};
detectDevTools();
