const _0x51f8e4 = _0x27a8;
function _0x5771() {
  const _0x36e0ac = [
    "touchmove",
    "1233810tJVZLw",
    "canvas",
    "lineCap",
    "resize",
    "lineWidth",
    "49200vYBzbk",
    "pageY",
    "pageX",
    "strokeStyle",
    "friction",
    "getContext",
    "735060ryoUVL",
    "#ff5f9b",
    "length",
    "widthFactor",
    "innerHeight",
    ".lost-canva",
    "1600398AlmMsk",
    "36tSevbd",
    "targetTouches",
    "4732jiwUDq",
    "innerWidth",
    "cos",
    "height",
    "moveTo",
    "beginPath",
    "lineTo",
    "16826HvzuVq",
    "quadraticCurveTo",
    "pointsNumber",
    "sin",
    "spring",
    "592AzstNO",
    "querySelector",
    "addEventListener",
    "5HXZMMf",
    "round",
    "forEach",
    "mousemove",
    "width",
    "123396JUjaev",
  ];
  _0x5771 = function () {
    return _0x36e0ac;
  };
  return _0x5771();
}
(function (_0x27a70b, _0x26beb6) {
  const _0x2a1f65 = _0x27a8;
  const _0x23b7d4 = _0x27a70b();
  while (!![]) {
    try {
      const _0x3b8921 =
        parseInt(_0x2a1f65(0x8b)) / 0x1 +
        (-parseInt(_0x2a1f65(0x77)) / 0x2) *
          (-parseInt(_0x2a1f65(0x6e)) / 0x3) +
        -parseInt(_0x2a1f65(0x84)) / 0x4 +
        (parseInt(_0x2a1f65(0x7f)) / 0x5) * (parseInt(_0x2a1f65(0x91)) / 0x6) +
        (parseInt(_0x2a1f65(0x70)) / 0x7) * (-parseInt(_0x2a1f65(0x7c)) / 0x8) +
        -parseInt(_0x2a1f65(0x6d)) / 0x9 +
        parseInt(_0x2a1f65(0x86)) / 0xa;
      if (_0x3b8921 === _0x26beb6) {
        break;
      } else {
        _0x23b7d4["push"](_0x23b7d4["shift"]());
      }
    } catch (_0x1e464f) {
      _0x23b7d4["push"](_0x23b7d4["shift"]());
    }
  }
})(_0x5771, 0x21888);
let $lostCanva = document[_0x51f8e4(0x7d)](_0x51f8e4(0x6c));
const canvas = $lostCanva["querySelector"](_0x51f8e4(0x87));
const ctx = canvas[_0x51f8e4(0x90)]("2d");
let mouseMoved = ![];
function _0x27a8(_0x228154, _0x3e4397) {
  const _0x577143 = _0x5771();
  _0x27a8 = function (_0x27a8ca, _0x2eeb7e) {
    _0x27a8ca = _0x27a8ca - 0x6b;
    let _0x5e5db2 = _0x577143[_0x27a8ca];
    return _0x5e5db2;
  };
  return _0x27a8(_0x228154, _0x3e4397);
}
const pointer = {
  x: 0.5 * window[_0x51f8e4(0x71)],
  y: 0.5 * window[_0x51f8e4(0x6b)],
};
const params = {
  pointsNumber: 0xc8,
  widthFactor: 0.1,
  mouseThreshold: 0.01,
  spring: 0.6,
  friction: 0.4,
};
const trail = new Array(params[_0x51f8e4(0x79)]);
for (let i = 0x0; i < params["pointsNumber"]; i++) {
  trail[i] = {
    x: pointer["x"],
    y: pointer["y"],
    dx: 0x0,
    dy: 0x0,
  };
}
window[_0x51f8e4(0x7e)]("click", (_0x1794ee) => {
  updateMousePosition(_0x1794ee["pageX"], _0x1794ee["pageY"]);
});
window[_0x51f8e4(0x7e)](_0x51f8e4(0x82), (_0x45371d) => {
  const _0x8ffc95 = _0x51f8e4;
  mouseMoved = !![];
  updateMousePosition(_0x45371d["pageX"], _0x45371d[_0x8ffc95(0x8c)]);
});
window[_0x51f8e4(0x7e)](_0x51f8e4(0x85), (_0x2d856a) => {
  const _0x2c4550 = _0x51f8e4;
  mouseMoved = !![];
  updateMousePosition(
    _0x2d856a[_0x2c4550(0x6f)][0x0][_0x2c4550(0x8d)],
    _0x2d856a[_0x2c4550(0x6f)][0x0][_0x2c4550(0x8c)]
  );
});
function updateMousePosition(_0x1f7c9f, _0x4b182b) {
  pointer["x"] = _0x1f7c9f;
  pointer["y"] = _0x4b182b;
}
setupCanvas();
update(0x0);
window["addEventListener"](_0x51f8e4(0x89), setupCanvas);
function update(_0xec54fb) {
  const _0x21a557 = _0x51f8e4;
  if (!mouseMoved) {
    pointer["x"] =
      (0.5 +
        0.3 *
          Math[_0x21a557(0x72)](0.002 * _0xec54fb) *
          Math[_0x21a557(0x7a)](0.005 * _0xec54fb)) *
      window[_0x21a557(0x71)];
    pointer["y"] =
      (0.5 +
        0.2 * Math["cos"](0.005 * _0xec54fb) +
        0.1 * Math["cos"](0.01 * _0xec54fb)) *
      window[_0x21a557(0x6b)];
  }
  ctx["clearRect"](0x0, 0x0, canvas[_0x21a557(0x83)], canvas["height"]);
  trail[_0x21a557(0x81)]((_0x130fbd, _0x34c04a) => {
    const _0x33b99c = _0x21a557;
    const _0x47d2e8 = _0x34c04a === 0x0 ? pointer : trail[_0x34c04a - 0x1];
    const _0x3d58f8 =
      _0x34c04a === 0x0
        ? 0.4 * params[_0x33b99c(0x7b)]
        : params[_0x33b99c(0x7b)];
    _0x130fbd["dx"] += (_0x47d2e8["x"] - _0x130fbd["x"]) * _0x3d58f8;
    _0x130fbd["dy"] += (_0x47d2e8["y"] - _0x130fbd["y"]) * _0x3d58f8;
    _0x130fbd["dx"] *= params[_0x33b99c(0x8f)];
    _0x130fbd["dy"] *= params["friction"];
    _0x130fbd["x"] += _0x130fbd["dx"];
    _0x130fbd["y"] += _0x130fbd["dy"];
  });
  ctx[_0x21a557(0x88)] = _0x21a557(0x80);
  ctx[_0x21a557(0x75)]();
  ctx[_0x21a557(0x74)](trail[0x0]["x"], trail[0x0]["y"]);
  for (
    let _0x5c6237 = 0x1;
    _0x5c6237 < trail[_0x21a557(0x93)] - 0x1;
    _0x5c6237++
  ) {
    const _0x40ebbc =
      0.5 * (trail[_0x5c6237]["x"] + trail[_0x5c6237 + 0x1]["x"]);
    const _0x1ba663 =
      0.5 * (trail[_0x5c6237]["y"] + trail[_0x5c6237 + 0x1]["y"]);
    ctx[_0x21a557(0x78)](
      trail[_0x5c6237]["x"],
      trail[_0x5c6237]["y"],
      _0x40ebbc,
      _0x1ba663
    );
    ctx[_0x21a557(0x8a)] =
      params[_0x21a557(0x94)] * (params[_0x21a557(0x79)] - _0x5c6237);
    ctx["stroke"]();
  }
  ctx[_0x21a557(0x76)](
    trail[trail[_0x21a557(0x93)] - 0x1]["x"],
    trail[trail[_0x21a557(0x93)] - 0x1]["y"]
  );
  ctx["stroke"]();
  window["requestAnimationFrame"](update);
}
function setupCanvas() {
  const _0x46430d = _0x51f8e4;
  canvas[_0x46430d(0x83)] = window[_0x46430d(0x71)];
  canvas[_0x46430d(0x73)] = window[_0x46430d(0x6b)];
  ctx[_0x46430d(0x8e)] = _0x46430d(0x92);
}
