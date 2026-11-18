var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { c as nf, r as af, a as p, b as Ee, g as Tn, d as wr, R as of, i as rr, e as iP, f as Hd, j as H, h as ry, k as aP, l as Hn, m as Bt, n as as, o as oP, p as uP, q as os, s as sP, u as lP, t as ny, v as cP, w as fP, x as dP, y as uf, z as hP, A as pP, B as vP, C as mP, D as gP, E as yP, F as Qa, G as Yd, H as Gd, I as bP, J as wP, K as su, L as xP, M as OP } from "./index-Djq12-hy.js";
const PP = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], SP = nf("chevron-down", PP);
const EP = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], AP = nf("chevron-up", EP);
const CP = [["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }], ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]], TP = nf("chevrons-up-down", CP);
var us = { exports: {} }, ss = {};
var Xd;
function IP() {
  if (Xd) return ss;
  Xd = 1;
  var e3 = af();
  function t(f, d) {
    return f === d && (f !== 0 || 1 / f === 1 / d) || f !== f && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e3.useState, i = e3.useEffect, a = e3.useLayoutEffect, o = e3.useDebugValue;
  function u(f, d) {
    var h = d(), v = n({ inst: { value: h, getSnapshot: d } }), g = v[0].inst, m = v[1];
    return a(function() {
      g.value = h, g.getSnapshot = d, s(g) && m({ inst: g });
    }, [f, h, d]), i(function() {
      return s(g) && m({ inst: g }), f(function() {
        s(g) && m({ inst: g });
      });
    }, [f]), o(h), h;
  }
  function s(f) {
    var d = f.getSnapshot;
    f = f.value;
    try {
      var h = d();
      return !r(f, h);
    } catch {
      return true;
    }
  }
  function l(f, d) {
    return d();
  }
  var c = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : u;
  return ss.useSyncExternalStore = e3.useSyncExternalStore !== void 0 ? e3.useSyncExternalStore : c, ss;
}
var Zd;
function _P() {
  return Zd || (Zd = 1, us.exports = IP()), us.exports;
}
var MP = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
function sf(e3) {
  if (typeof e3 != "string") return false;
  var t = MP;
  return t.includes(e3);
}
var kP = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"], jP = new Set(kP);
function iy(e3) {
  return typeof e3 != "string" ? false : jP.has(e3);
}
function ay(e3) {
  return typeof e3 == "string" && e3.startsWith("data-");
}
function xr(e3) {
  if (typeof e3 != "object" || e3 === null) return {};
  var t = {};
  for (var r in e3) Object.prototype.hasOwnProperty.call(e3, r) && (iy(r) || ay(r)) && (t[r] = e3[r]);
  return t;
}
function lu(e3) {
  if (e3 == null) return null;
  if (p.isValidElement(e3) && typeof e3.props == "object" && e3.props !== null) {
    var t = e3.props;
    return xr(t);
  }
  return typeof e3 == "object" && !Array.isArray(e3) ? xr(e3) : null;
}
function vt(e3) {
  var t = {};
  for (var r in e3) Object.prototype.hasOwnProperty.call(e3, r) && (iy(r) || ay(r) || sf(r)) && (t[r] = e3[r]);
  return t;
}
function RP(e3) {
  return e3 == null ? null : p.isValidElement(e3) ? vt(e3.props) : typeof e3 == "object" && !Array.isArray(e3) ? vt(e3) : null;
}
var DP = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Zl() {
  return Zl = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Zl.apply(null, arguments);
}
function NP(e3, t) {
  if (e3 == null) return {};
  var r, n, i = LP(e3, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function LP(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var oy = p.forwardRef((e3, t) => {
  var { children: r, width: n, height: i, viewBox: a, className: o, style: u, title: s, desc: l } = e3, c = NP(e3, DP), f = a || { width: n, height: i, x: 0, y: 0 }, d = Ee("recharts-surface", o);
  return p.createElement("svg", Zl({}, vt(c), { className: d, width: n, height: i, style: u, viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height), ref: t }), p.createElement("title", null, s), p.createElement("desc", null, l), r);
}), $P = ["children", "className"];
function Ql() {
  return Ql = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Ql.apply(null, arguments);
}
function FP(e3, t) {
  if (e3 == null) return {};
  var r, n, i = BP(e3, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function BP(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var Or = p.forwardRef((e3, t) => {
  var { children: r, className: n } = e3, i = FP(e3, $P), a = Ee("recharts-layer", n);
  return p.createElement("g", Ql({ className: a }, vt(i), { ref: t }), r);
}), zP = p.createContext(null);
function Ae(e3) {
  return function() {
    return e3;
  };
}
const uy = Math.cos, oo = Math.sin, Ht = Math.sqrt, uo = Math.PI, cu = 2 * uo, Jl = Math.PI, ec = 2 * Jl, ln = 1e-6, WP = ec - ln;
function sy(e3) {
  this._ += e3[0];
  for (let t = 1, r = e3.length; t < r; ++t) this._ += arguments[t] + e3[t];
}
function UP(e3) {
  let t = Math.floor(e3);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e3}`);
  if (t > 15) return sy;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i) this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class qP {
  constructor(t) {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = t == null ? sy : UP(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, u = this._y1, s = n - t, l = i - r, c = o - t, f = u - r, d = c * c + f * f;
    if (this._x1 === null) this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > ln) if (!(Math.abs(f * s - l * c) > ln) || !a) this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let h = n - o, v = i - u, g = s * s + l * l, m = h * h + v * v, y = Math.sqrt(g), x = Math.sqrt(d), b = a * Math.tan((Jl - Math.acos((g + d - m) / (2 * y * x))) / 2), w = b / x, O = b / y;
      Math.abs(w - 1) > ln && this._append`L${t + w * c},${r + w * f}`, this._append`A${a},${a},0,0,${+(f * h > c * v)},${this._x1 = t + O * s},${this._y1 = r + O * l}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i), s = n * Math.sin(i), l = t + u, c = r + s, f = 1 ^ o, d = o ? i - a : a - i;
    this._x1 === null ? this._append`M${l},${c}` : (Math.abs(this._x1 - l) > ln || Math.abs(this._y1 - c) > ln) && this._append`L${l},${c}`, n && (d < 0 && (d = d % ec + ec), d > WP ? this._append`A${n},${n},0,1,${f},${t - u},${r - s}A${n},${n},0,1,${f},${this._x1 = l},${this._y1 = c}` : d > ln && this._append`A${n},${n},0,${+(d >= Jl)},${f},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function lf(e3) {
  let t = 3;
  return e3.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null) t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e3;
  }, () => new qP(t);
}
function cf(e3) {
  return typeof e3 == "object" && "length" in e3 ? e3 : Array.from(e3);
}
function ly(e3) {
  this._context = e3;
}
ly.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e3, t) {
  switch (e3 = +e3, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e3, t) : this._context.moveTo(e3, t);
      break;
    case 1:
      this._point = 2;
    default:
      this._context.lineTo(e3, t);
      break;
  }
} };
function fu(e3) {
  return new ly(e3);
}
function cy(e3) {
  return e3[0];
}
function fy(e3) {
  return e3[1];
}
function dy(e3, t) {
  var r = Ae(true), n = null, i = fu, a = null, o = lf(u);
  e3 = typeof e3 == "function" ? e3 : e3 === void 0 ? cy : Ae(e3), t = typeof t == "function" ? t : t === void 0 ? fy : Ae(t);
  function u(s) {
    var l, c = (s = cf(s)).length, f, d = false, h;
    for (n == null && (a = i(h = o())), l = 0; l <= c; ++l) !(l < c && r(f = s[l], l, s)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e3(f, l, s), +t(f, l, s));
    if (h) return a = null, h + "" || null;
  }
  return u.x = function(s) {
    return arguments.length ? (e3 = typeof s == "function" ? s : Ae(+s), u) : e3;
  }, u.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : Ae(+s), u) : t;
  }, u.defined = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : Ae(!!s), u) : r;
  }, u.curve = function(s) {
    return arguments.length ? (i = s, n != null && (a = i(n)), u) : i;
  }, u.context = function(s) {
    return arguments.length ? (s == null ? n = a = null : a = i(n = s), u) : n;
  }, u;
}
function Aa(e3, t, r) {
  var n = null, i = Ae(true), a = null, o = fu, u = null, s = lf(l);
  e3 = typeof e3 == "function" ? e3 : e3 === void 0 ? cy : Ae(+e3), t = typeof t == "function" ? t : Ae(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? fy : Ae(+r);
  function l(f) {
    var d, h, v, g = (f = cf(f)).length, m, y = false, x, b = new Array(g), w = new Array(g);
    for (a == null && (u = o(x = s())), d = 0; d <= g; ++d) {
      if (!(d < g && i(m = f[d], d, f)) === y) if (y = !y) h = d, u.areaStart(), u.lineStart();
      else {
        for (u.lineEnd(), u.lineStart(), v = d - 1; v >= h; --v) u.point(b[v], w[v]);
        u.lineEnd(), u.areaEnd();
      }
      y && (b[d] = +e3(m, d, f), w[d] = +t(m, d, f), u.point(n ? +n(m, d, f) : b[d], r ? +r(m, d, f) : w[d]));
    }
    if (x) return u = null, x + "" || null;
  }
  function c() {
    return dy().defined(i).curve(o).context(a);
  }
  return l.x = function(f) {
    return arguments.length ? (e3 = typeof f == "function" ? f : Ae(+f), n = null, l) : e3;
  }, l.x0 = function(f) {
    return arguments.length ? (e3 = typeof f == "function" ? f : Ae(+f), l) : e3;
  }, l.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : Ae(+f), l) : n;
  }, l.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Ae(+f), r = null, l) : t;
  }, l.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Ae(+f), l) : t;
  }, l.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Ae(+f), l) : r;
  }, l.lineX0 = l.lineY0 = function() {
    return c().x(e3).y(t);
  }, l.lineY1 = function() {
    return c().x(e3).y(r);
  }, l.lineX1 = function() {
    return c().x(n).y(t);
  }, l.defined = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Ae(!!f), l) : i;
  }, l.curve = function(f) {
    return arguments.length ? (o = f, a != null && (u = o(a)), l) : o;
  }, l.context = function(f) {
    return arguments.length ? (f == null ? a = u = null : u = o(a = f), l) : a;
  }, l;
}
class hy {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function KP(e3) {
  return new hy(e3, true);
}
function VP(e3) {
  return new hy(e3, false);
}
const ff = { draw(e3, t) {
  const r = Ht(t / uo);
  e3.moveTo(r, 0), e3.arc(0, 0, r, 0, cu);
} }, HP = { draw(e3, t) {
  const r = Ht(t / 5) / 2;
  e3.moveTo(-3 * r, -r), e3.lineTo(-r, -r), e3.lineTo(-r, -3 * r), e3.lineTo(r, -3 * r), e3.lineTo(r, -r), e3.lineTo(3 * r, -r), e3.lineTo(3 * r, r), e3.lineTo(r, r), e3.lineTo(r, 3 * r), e3.lineTo(-r, 3 * r), e3.lineTo(-r, r), e3.lineTo(-3 * r, r), e3.closePath();
} }, py = Ht(1 / 3), YP = py * 2, GP = { draw(e3, t) {
  const r = Ht(t / YP), n = r * py;
  e3.moveTo(0, -r), e3.lineTo(n, 0), e3.lineTo(0, r), e3.lineTo(-n, 0), e3.closePath();
} }, XP = { draw(e3, t) {
  const r = Ht(t), n = -r / 2;
  e3.rect(n, n, r, r);
} }, ZP = 0.8908130915292852, vy = oo(uo / 10) / oo(7 * uo / 10), QP = oo(cu / 10) * vy, JP = -uy(cu / 10) * vy, e1 = { draw(e3, t) {
  const r = Ht(t * ZP), n = QP * r, i = JP * r;
  e3.moveTo(0, -r), e3.lineTo(n, i);
  for (let a = 1; a < 5; ++a) {
    const o = cu * a / 5, u = uy(o), s = oo(o);
    e3.lineTo(s * r, -u * r), e3.lineTo(u * n - s * i, s * n + u * i);
  }
  e3.closePath();
} }, ls = Ht(3), t1 = { draw(e3, t) {
  const r = -Ht(t / (ls * 3));
  e3.moveTo(0, r * 2), e3.lineTo(-ls * r, -r), e3.lineTo(ls * r, -r), e3.closePath();
} }, Mt = -0.5, kt = Ht(3) / 2, tc = 1 / Ht(12), r1 = (tc / 2 + 1) * 3, n1 = { draw(e3, t) {
  const r = Ht(t / r1), n = r / 2, i = r * tc, a = n, o = r * tc + r, u = -a, s = o;
  e3.moveTo(n, i), e3.lineTo(a, o), e3.lineTo(u, s), e3.lineTo(Mt * n - kt * i, kt * n + Mt * i), e3.lineTo(Mt * a - kt * o, kt * a + Mt * o), e3.lineTo(Mt * u - kt * s, kt * u + Mt * s), e3.lineTo(Mt * n + kt * i, Mt * i - kt * n), e3.lineTo(Mt * a + kt * o, Mt * o - kt * a), e3.lineTo(Mt * u + kt * s, Mt * s - kt * u), e3.closePath();
} };
function i1(e3, t) {
  let r = null, n = lf(i);
  e3 = typeof e3 == "function" ? e3 : Ae(e3 || ff), t = typeof t == "function" ? t : Ae(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e3.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e3 = typeof a == "function" ? a : Ae(a), i) : e3;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : Ae(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function so() {
}
function lo(e3, t, r) {
  e3._context.bezierCurveTo((2 * e3._x0 + e3._x1) / 3, (2 * e3._y0 + e3._y1) / 3, (e3._x0 + 2 * e3._x1) / 3, (e3._y0 + 2 * e3._y1) / 3, (e3._x0 + 4 * e3._x1 + t) / 6, (e3._y0 + 4 * e3._y1 + r) / 6);
}
function my(e3) {
  this._context = e3;
}
my.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 3:
      lo(this, this._x1, this._y1);
    case 2:
      this._context.lineTo(this._x1, this._y1);
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e3, t) {
  switch (e3 = +e3, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e3, t) : this._context.moveTo(e3, t);
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
    default:
      lo(this, e3, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e3, this._y0 = this._y1, this._y1 = t;
} };
function a1(e3) {
  return new my(e3);
}
function gy(e3) {
  this._context = e3;
}
gy.prototype = { areaStart: so, areaEnd: so, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 1: {
      this._context.moveTo(this._x2, this._y2), this._context.closePath();
      break;
    }
    case 2: {
      this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
      break;
    }
    case 3: {
      this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
      break;
    }
  }
}, point: function(e3, t) {
  switch (e3 = +e3, t = +t, this._point) {
    case 0:
      this._point = 1, this._x2 = e3, this._y2 = t;
      break;
    case 1:
      this._point = 2, this._x3 = e3, this._y3 = t;
      break;
    case 2:
      this._point = 3, this._x4 = e3, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e3) / 6, (this._y0 + 4 * this._y1 + t) / 6);
      break;
    default:
      lo(this, e3, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e3, this._y0 = this._y1, this._y1 = t;
} };
function o1(e3) {
  return new gy(e3);
}
function yy(e3) {
  this._context = e3;
}
yy.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e3, t) {
  switch (e3 = +e3, t = +t, this._point) {
    case 0:
      this._point = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3;
      var r = (this._x0 + 4 * this._x1 + e3) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
      this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
      break;
    case 3:
      this._point = 4;
    default:
      lo(this, e3, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e3, this._y0 = this._y1, this._y1 = t;
} };
function u1(e3) {
  return new yy(e3);
}
function by(e3) {
  this._context = e3;
}
by.prototype = { areaStart: so, areaEnd: so, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  this._point && this._context.closePath();
}, point: function(e3, t) {
  e3 = +e3, t = +t, this._point ? this._context.lineTo(e3, t) : (this._point = 1, this._context.moveTo(e3, t));
} };
function s1(e3) {
  return new by(e3);
}
function Qd(e3) {
  return e3 < 0 ? -1 : 1;
}
function Jd(e3, t, r) {
  var n = e3._x1 - e3._x0, i = t - e3._x1, a = (e3._y1 - e3._y0) / (n || i < 0 && -0), o = (r - e3._y1) / (i || n < 0 && -0), u = (a * i + o * n) / (n + i);
  return (Qd(a) + Qd(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0;
}
function eh(e3, t) {
  var r = e3._x1 - e3._x0;
  return r ? (3 * (e3._y1 - e3._y0) / r - t) / 2 : t;
}
function cs(e3, t, r) {
  var n = e3._x0, i = e3._y0, a = e3._x1, o = e3._y1, u = (a - n) / 3;
  e3._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function co(e3) {
  this._context = e3;
}
co.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 2:
      this._context.lineTo(this._x1, this._y1);
      break;
    case 3:
      cs(this, this._t0, eh(this, this._t0));
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e3, t) {
  var r = NaN;
  if (e3 = +e3, t = +t, !(e3 === this._x1 && t === this._y1)) {
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e3, t) : this._context.moveTo(e3, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, cs(this, eh(this, r = Jd(this, e3, t)), r);
        break;
      default:
        cs(this, this._t0, r = Jd(this, e3, t));
        break;
    }
    this._x0 = this._x1, this._x1 = e3, this._y0 = this._y1, this._y1 = t, this._t0 = r;
  }
} };
function wy(e3) {
  this._context = new xy(e3);
}
(wy.prototype = Object.create(co.prototype)).point = function(e3, t) {
  co.prototype.point.call(this, t, e3);
};
function xy(e3) {
  this._context = e3;
}
xy.prototype = { moveTo: function(e3, t) {
  this._context.moveTo(t, e3);
}, closePath: function() {
  this._context.closePath();
}, lineTo: function(e3, t) {
  this._context.lineTo(t, e3);
}, bezierCurveTo: function(e3, t, r, n, i, a) {
  this._context.bezierCurveTo(t, e3, n, r, a, i);
} };
function l1(e3) {
  return new co(e3);
}
function c1(e3) {
  return new wy(e3);
}
function Oy(e3) {
  this._context = e3;
}
Oy.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = [], this._y = [];
}, lineEnd: function() {
  var e3 = this._x, t = this._y, r = e3.length;
  if (r) if (this._line ? this._context.lineTo(e3[0], t[0]) : this._context.moveTo(e3[0], t[0]), r === 2) this._context.lineTo(e3[1], t[1]);
  else for (var n = th(e3), i = th(t), a = 0, o = 1; o < r; ++a, ++o) this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e3[o], t[o]);
  (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
}, point: function(e3, t) {
  this._x.push(+e3), this._y.push(+t);
} };
function th(e3) {
  var t, r = e3.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e3[0] + 2 * e3[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e3[t] + 2 * e3[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e3[r - 1] + e3[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e3[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e3[t + 1] - i[t + 1];
  return [i, a];
}
function f1(e3) {
  return new Oy(e3);
}
function du(e3, t) {
  this._context = e3, this._t = t;
}
du.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = this._y = NaN, this._point = 0;
}, lineEnd: function() {
  0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
}, point: function(e3, t) {
  switch (e3 = +e3, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e3, t) : this._context.moveTo(e3, t);
      break;
    case 1:
      this._point = 2;
    default: {
      if (this._t <= 0) this._context.lineTo(this._x, t), this._context.lineTo(e3, t);
      else {
        var r = this._x * (1 - this._t) + e3 * this._t;
        this._context.lineTo(r, this._y), this._context.lineTo(r, t);
      }
      break;
    }
  }
  this._x = e3, this._y = t;
} };
function d1(e3) {
  return new du(e3, 0.5);
}
function h1(e3) {
  return new du(e3, 0);
}
function p1(e3) {
  return new du(e3, 1);
}
function wn(e3, t) {
  if ((o = e3.length) > 1) for (var r = 1, n, i, a = e3[t[0]], o, u = a.length; r < o; ++r) for (i = a, a = e3[t[r]], n = 0; n < u; ++n) a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function rc(e3) {
  for (var t = e3.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function v1(e3, t) {
  return e3[t];
}
function m1(e3) {
  const t = [];
  return t.key = e3, t;
}
function g1() {
  var e3 = Ae([]), t = rc, r = wn, n = v1;
  function i(a) {
    var o = Array.from(e3.apply(this, arguments), m1), u, s = o.length, l = -1, c;
    for (const f of a) for (u = 0, ++l; u < s; ++u) (o[u][l] = [0, +n(f, o[u].key, l, a)]).data = f;
    for (u = 0, c = cf(t(o)); u < s; ++u) o[c[u]].index = u;
    return r(o, c), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e3 = typeof a == "function" ? a : Ae(Array.from(a)), i) : e3;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : Ae(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? rc : typeof a == "function" ? a : Ae(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? wn, i) : r;
  }, i;
}
function y1(e3, t) {
  if ((n = e3.length) > 0) {
    for (var r, n, i = 0, a = e3[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e3[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e3[r][i][1] /= o;
    }
    wn(e3, t);
  }
}
function b1(e3, t) {
  if ((i = e3.length) > 0) {
    for (var r = 0, n = e3[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e3[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    wn(e3, t);
  }
}
function w1(e3, t) {
  if (!(!((o = e3.length) > 0) || !((a = (i = e3[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, s = 0, l = 0; u < o; ++u) {
        for (var c = e3[t[u]], f = c[n][1] || 0, d = c[n - 1][1] || 0, h = (f - d) / 2, v = 0; v < u; ++v) {
          var g = e3[t[v]], m = g[n][1] || 0, y = g[n - 1][1] || 0;
          h += m - y;
        }
        s += f, l += h * f;
      }
      i[n - 1][1] += i[n - 1][0] = r, s && (r -= l / s);
    }
    i[n - 1][1] += i[n - 1][0] = r, wn(e3, t);
  }
}
var fs = {}, ds = {}, rh;
function x1() {
  return rh || (rh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r === "__proto__";
    }
    e3.isUnsafeProperty = t;
  })(ds)), ds;
}
var hs = {}, nh;
function Py() {
  return nh || (nh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      switch (typeof r) {
        case "number":
        case "symbol":
          return false;
        case "string":
          return r.includes(".") || r.includes("[") || r.includes("]");
      }
    }
    e3.isDeepKey = t;
  })(hs)), hs;
}
var ps = {}, ih;
function df() {
  return ih || (ih = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      var _a2;
      return typeof r == "string" || typeof r == "symbol" ? r : Object.is((_a2 = r == null ? void 0 : r.valueOf) == null ? void 0 : _a2.call(r), -0) ? "-0" : String(r);
    }
    e3.toKey = t;
  })(ps)), ps;
}
var vs = {}, ms = {}, ah;
function O1() {
  return ah || (ah = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      if (r == null) return "";
      if (typeof r == "string") return r;
      if (Array.isArray(r)) return r.map(t).join(",");
      const n = String(r);
      return n === "0" && Object.is(Number(r), -0) ? "-0" : n;
    }
    e3.toString = t;
  })(ms)), ms;
}
var oh;
function hf() {
  return oh || (oh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = O1(), r = df();
    function n(i) {
      if (Array.isArray(i)) return i.map(r.toKey);
      if (typeof i == "symbol") return [i];
      i = t.toString(i);
      const a = [], o = i.length;
      if (o === 0) return a;
      let u = 0, s = "", l = "", c = false;
      for (i.charCodeAt(0) === 46 && (a.push(""), u++); u < o; ) {
        const f = i[u];
        l ? f === "\\" && u + 1 < o ? (u++, s += i[u]) : f === l ? l = "" : s += f : c ? f === '"' || f === "'" ? l = f : f === "]" ? (c = false, a.push(s), s = "") : s += f : f === "[" ? (c = true, s && (a.push(s), s = "")) : f === "." ? s && (a.push(s), s = "") : s += f, u++;
      }
      return s && a.push(s), a;
    }
    e3.toPath = n;
  })(vs)), vs;
}
var uh;
function pf() {
  return uh || (uh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = x1(), r = Py(), n = df(), i = hf();
    function a(u, s, l) {
      if (u == null) return l;
      switch (typeof s) {
        case "string": {
          if (t.isUnsafeProperty(s)) return l;
          const c = u[s];
          return c === void 0 ? r.isDeepKey(s) ? a(u, i.toPath(s), l) : l : c;
        }
        case "number":
        case "symbol": {
          typeof s == "number" && (s = n.toKey(s));
          const c = u[s];
          return c === void 0 ? l : c;
        }
        default: {
          if (Array.isArray(s)) return o(u, s, l);
          if (Object.is(s == null ? void 0 : s.valueOf(), -0) ? s = "-0" : s = String(s), t.isUnsafeProperty(s)) return l;
          const c = u[s];
          return c === void 0 ? l : c;
        }
      }
    }
    function o(u, s, l) {
      if (s.length === 0) return l;
      let c = u;
      for (let f = 0; f < s.length; f++) {
        if (c == null || t.isUnsafeProperty(s[f])) return l;
        c = c[s[f]];
      }
      return c === void 0 ? l : c;
    }
    e3.get = a;
  })(fs)), fs;
}
var gs, sh;
function P1() {
  return sh || (sh = 1, gs = pf().get), gs;
}
var S1 = P1();
const hu = Tn(S1);
var E1 = 4;
function Kr(e3) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : E1, r = 10 ** t, n = Math.round(e3 * r) / r;
  return Object.is(n, -0) ? 0 : n;
}
function De(e3) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return e3.reduce((i, a, o) => {
    var u = r[o - 1];
    return typeof u == "string" ? i + u + a : u !== void 0 ? i + Kr(u) + a : i + a;
  }, "");
}
var Kt = (e3) => e3 === 0 ? 0 : e3 > 0 ? 1 : -1, Pr = (e3) => typeof e3 == "number" && e3 != +e3, xn = (e3) => typeof e3 == "string" && e3.indexOf("%") === e3.length - 1, ue = (e3) => (typeof e3 == "number" || e3 instanceof Number) && !Pr(e3), sr = (e3) => ue(e3) || typeof e3 == "string", A1 = 0, Wi = (e3) => {
  var t = ++A1;
  return "".concat(e3 || "").concat(t);
}, Zr = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (!ue(t) && typeof t != "string") return n;
  var a;
  if (xn(t)) {
    if (r == null) return n;
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else a = +t;
  return Pr(a) && (a = n), i && r != null && a > r && (a = r), a;
}, Sy = (e3) => {
  if (!Array.isArray(e3)) return false;
  for (var t = e3.length, r = {}, n = 0; n < t; n++) if (!r[String(e3[n])]) r[String(e3[n])] = true;
  else return true;
  return false;
};
function bt(e3, t, r) {
  return ue(e3) && ue(t) ? Kr(e3 + r * (t - e3)) : t;
}
function Ey(e3, t, r) {
  if (!(!e3 || !e3.length)) return e3.find((n) => n && (typeof t == "function" ? t(n) : hu(n, t)) === r);
}
var Xe = (e3) => e3 === null || typeof e3 > "u", oa = (e3) => Xe(e3) ? e3 : "".concat(e3.charAt(0).toUpperCase()).concat(e3.slice(1));
function nr(e3) {
  return e3 != null;
}
function ai() {
}
var C1 = ["type", "size", "sizeType"];
function nc() {
  return nc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, nc.apply(null, arguments);
}
function lh(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ch(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lh(Object(r), true).forEach(function(n) {
      T1(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : lh(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function T1(e3, t, r) {
  return (t = I1(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function I1(e3) {
  var t = _1(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function _1(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function M1(e3, t) {
  if (e3 == null) return {};
  var r, n, i = k1(e3, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function k1(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var Ay = { symbolCircle: ff, symbolCross: HP, symbolDiamond: GP, symbolSquare: XP, symbolStar: e1, symbolTriangle: t1, symbolWye: n1 }, j1 = Math.PI / 180, R1 = (e3) => {
  var t = "symbol".concat(oa(e3));
  return Ay[t] || ff;
}, D1 = (e3, t, r) => {
  if (t === "area") return e3;
  switch (r) {
    case "cross":
      return 5 * e3 * e3 / 9;
    case "diamond":
      return 0.5 * e3 * e3 / Math.sqrt(3);
    case "square":
      return e3 * e3;
    case "star": {
      var n = 18 * j1;
      return 1.25 * e3 * e3 * (Math.tan(n) - Math.tan(n * 2) * Math.tan(n) ** 2);
    }
    case "triangle":
      return Math.sqrt(3) * e3 * e3 / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e3 * e3 / 8;
    default:
      return Math.PI * e3 * e3 / 4;
  }
}, N1 = (e3, t) => {
  Ay["symbol".concat(oa(e3))] = t;
}, Cy = (e3) => {
  var { type: t = "circle", size: r = 64, sizeType: n = "area" } = e3, i = M1(e3, C1), a = ch(ch({}, i), {}, { type: t, size: r, sizeType: n }), o = "circle";
  typeof t == "string" && (o = t);
  var u = () => {
    var d = R1(o), h = i1().type(d).size(D1(r, n, o)), v = h();
    if (v !== null) return v;
  }, { className: s, cx: l, cy: c } = a, f = vt(a);
  return ue(l) && ue(c) && ue(r) ? p.createElement("path", nc({}, f, { className: Ee("recharts-symbols", s), transform: "translate(".concat(l, ", ").concat(c, ")"), d: u() })) : null;
};
Cy.registerSymbol = N1;
var Ty = (e3) => "radius" in e3 && "startAngle" in e3 && "endAngle" in e3, vf = (e3, t) => {
  if (!e3 || typeof e3 == "function" || typeof e3 == "boolean") return null;
  var r = e3;
  if (p.isValidElement(e3) && (r = e3.props), typeof r != "object" && typeof r != "function") return null;
  var n = {};
  return Object.keys(r).forEach((i) => {
    sf(i) && typeof r[i] == "function" && (n[i] = ((a) => r[i](r, a)));
  }), n;
}, L1 = (e3, t, r) => (n) => (e3(t, r, n), null), $1 = (e3, t, r) => {
  if (e3 === null || typeof e3 != "object" && typeof e3 != "function") return null;
  var n = null;
  return Object.keys(e3).forEach((i) => {
    var a = e3[i];
    sf(i) && typeof a == "function" && (n || (n = {}), n[i] = L1(a, t, r));
  }), n;
};
function fh(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function F1(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fh(Object(r), true).forEach(function(n) {
      B1(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : fh(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function B1(e3, t, r) {
  return (t = z1(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function z1(e3) {
  var t = W1(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function W1(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function Tt(e3, t) {
  var r = F1({}, e3), n = t, i = Object.keys(t), a = i.reduce((o, u) => (o[u] === void 0 && n[u] !== void 0 && (o[u] = n[u]), o), r);
  return a;
}
var ys = {}, bs = {}, dh;
function U1() {
  return dh || (dh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      const i = /* @__PURE__ */ new Map();
      for (let a = 0; a < r.length; a++) {
        const o = r[a], u = n(o, a, r);
        i.has(u) || i.set(u, o);
      }
      return Array.from(i.values());
    }
    e3.uniqBy = t;
  })(bs)), bs;
}
var ws = {}, hh;
function q1() {
  return hh || (hh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return function(...i) {
        return r.apply(this, i.slice(0, n));
      };
    }
    e3.ary = t;
  })(ws)), ws;
}
var xs = {}, ph;
function Iy() {
  return ph || (ph = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r;
    }
    e3.identity = t;
  })(xs)), xs;
}
var Os = {}, Ps = {}, Ss = {}, vh;
function K1() {
  return vh || (vh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Number.isSafeInteger(r) && r >= 0;
    }
    e3.isLength = t;
  })(Ss)), Ss;
}
var mh;
function _y() {
  return mh || (mh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = K1();
    function r(n) {
      return n != null && typeof n != "function" && t.isLength(n.length);
    }
    e3.isArrayLike = r;
  })(Ps)), Ps;
}
var Es = {}, gh;
function V1() {
  return gh || (gh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "object" && r !== null;
    }
    e3.isObjectLike = t;
  })(Es)), Es;
}
var yh;
function H1() {
  return yh || (yh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = _y(), r = V1();
    function n(i) {
      return r.isObjectLike(i) && t.isArrayLike(i);
    }
    e3.isArrayLikeObject = n;
  })(Os)), Os;
}
var As = {}, Cs = {}, bh;
function Y1() {
  return bh || (bh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = pf();
    function r(n) {
      return function(i) {
        return t.get(i, n);
      };
    }
    e3.property = r;
  })(Cs)), Cs;
}
var Ts = {}, Is = {}, _s = {}, Ms = {}, wh;
function My() {
  return wh || (wh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r !== null && (typeof r == "object" || typeof r == "function");
    }
    e3.isObject = t;
  })(Ms)), Ms;
}
var ks = {}, xh;
function ky() {
  return xh || (xh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null || typeof r != "object" && typeof r != "function";
    }
    e3.isPrimitive = t;
  })(ks)), ks;
}
var js = {}, Oh;
function jy() {
  return Oh || (Oh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return r === n || Number.isNaN(r) && Number.isNaN(n);
    }
    e3.isEqualsSameValueZero = t;
  })(js)), js;
}
var Ph;
function G1() {
  return Ph || (Ph = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = My(), r = ky(), n = jy();
    function i(c, f, d) {
      return typeof d != "function" ? i(c, f, () => {
      }) : a(c, f, function h(v, g, m, y, x, b) {
        const w = d(v, g, m, y, x, b);
        return w !== void 0 ? !!w : a(v, g, h, b);
      }, /* @__PURE__ */ new Map());
    }
    function a(c, f, d, h) {
      if (f === c) return true;
      switch (typeof f) {
        case "object":
          return o(c, f, d, h);
        case "function":
          return Object.keys(f).length > 0 ? a(c, { ...f }, d, h) : n.isEqualsSameValueZero(c, f);
        default:
          return t.isObject(c) ? typeof f == "string" ? f === "" : true : n.isEqualsSameValueZero(c, f);
      }
    }
    function o(c, f, d, h) {
      if (f == null) return true;
      if (Array.isArray(f)) return s(c, f, d, h);
      if (f instanceof Map) return u(c, f, d, h);
      if (f instanceof Set) return l(c, f, d, h);
      const v = Object.keys(f);
      if (c == null || r.isPrimitive(c)) return v.length === 0;
      if (v.length === 0) return true;
      if (h == null ? void 0 : h.has(f)) return h.get(f) === c;
      h == null ? void 0 : h.set(f, c);
      try {
        for (let g = 0; g < v.length; g++) {
          const m = v[g];
          if (!r.isPrimitive(c) && !(m in c) || f[m] === void 0 && c[m] !== void 0 || f[m] === null && c[m] !== null || !d(c[m], f[m], m, c, f, h)) return false;
        }
        return true;
      } finally {
        h == null ? void 0 : h.delete(f);
      }
    }
    function u(c, f, d, h) {
      if (f.size === 0) return true;
      if (!(c instanceof Map)) return false;
      for (const [v, g] of f.entries()) {
        const m = c.get(v);
        if (d(m, g, v, c, f, h) === false) return false;
      }
      return true;
    }
    function s(c, f, d, h) {
      if (f.length === 0) return true;
      if (!Array.isArray(c)) return false;
      const v = /* @__PURE__ */ new Set();
      for (let g = 0; g < f.length; g++) {
        const m = f[g];
        let y = false;
        for (let x = 0; x < c.length; x++) {
          if (v.has(x)) continue;
          const b = c[x];
          let w = false;
          if (d(b, m, g, c, f, h) && (w = true), w) {
            v.add(x), y = true;
            break;
          }
        }
        if (!y) return false;
      }
      return true;
    }
    function l(c, f, d, h) {
      return f.size === 0 ? true : c instanceof Set ? s([...c], [...f], d, h) : false;
    }
    e3.isMatchWith = i, e3.isSetMatch = l;
  })(_s)), _s;
}
var Sh;
function Ry() {
  return Sh || (Sh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = G1();
    function r(n, i) {
      return t.isMatchWith(n, i, () => {
      });
    }
    e3.isMatch = r;
  })(Is)), Is;
}
var Rs = {}, Ds = {}, Ns = {}, Eh;
function X1() {
  return Eh || (Eh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Object.getOwnPropertySymbols(r).filter((n) => Object.prototype.propertyIsEnumerable.call(r, n));
    }
    e3.getSymbols = t;
  })(Ns)), Ns;
}
var Ls = {}, Ah;
function mf() {
  return Ah || (Ah = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
    }
    e3.getTag = t;
  })(Ls)), Ls;
}
var $s = {}, Ch;
function Dy() {
  return Ch || (Ch = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = "[object RegExp]", r = "[object String]", n = "[object Number]", i = "[object Boolean]", a = "[object Arguments]", o = "[object Symbol]", u = "[object Date]", s = "[object Map]", l = "[object Set]", c = "[object Array]", f = "[object Function]", d = "[object ArrayBuffer]", h = "[object Object]", v = "[object Error]", g = "[object DataView]", m = "[object Uint8Array]", y = "[object Uint8ClampedArray]", x = "[object Uint16Array]", b = "[object Uint32Array]", w = "[object BigUint64Array]", O = "[object Int8Array]", P = "[object Int16Array]", S = "[object Int32Array]", E = "[object BigInt64Array]", N = "[object Float32Array]", k = "[object Float64Array]";
    e3.argumentsTag = a, e3.arrayBufferTag = d, e3.arrayTag = c, e3.bigInt64ArrayTag = E, e3.bigUint64ArrayTag = w, e3.booleanTag = i, e3.dataViewTag = g, e3.dateTag = u, e3.errorTag = v, e3.float32ArrayTag = N, e3.float64ArrayTag = k, e3.functionTag = f, e3.int16ArrayTag = P, e3.int32ArrayTag = S, e3.int8ArrayTag = O, e3.mapTag = s, e3.numberTag = n, e3.objectTag = h, e3.regexpTag = t, e3.setTag = l, e3.stringTag = r, e3.symbolTag = o, e3.uint16ArrayTag = x, e3.uint32ArrayTag = b, e3.uint8ArrayTag = m, e3.uint8ClampedArrayTag = y;
  })($s)), $s;
}
var Fs = {}, Th;
function Z1() {
  return Th || (Th = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return ArrayBuffer.isView(r) && !(r instanceof DataView);
    }
    e3.isTypedArray = t;
  })(Fs)), Fs;
}
var Ih;
function Ny() {
  return Ih || (Ih = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = X1(), r = mf(), n = Dy(), i = ky(), a = Z1();
    function o(c, f) {
      return u(c, void 0, c, /* @__PURE__ */ new Map(), f);
    }
    function u(c, f, d, h = /* @__PURE__ */ new Map(), v = void 0) {
      const g = v == null ? void 0 : v(c, f, d, h);
      if (g !== void 0) return g;
      if (i.isPrimitive(c)) return c;
      if (h.has(c)) return h.get(c);
      if (Array.isArray(c)) {
        const m = new Array(c.length);
        h.set(c, m);
        for (let y = 0; y < c.length; y++) m[y] = u(c[y], y, d, h, v);
        return Object.hasOwn(c, "index") && (m.index = c.index), Object.hasOwn(c, "input") && (m.input = c.input), m;
      }
      if (c instanceof Date) return new Date(c.getTime());
      if (c instanceof RegExp) {
        const m = new RegExp(c.source, c.flags);
        return m.lastIndex = c.lastIndex, m;
      }
      if (c instanceof Map) {
        const m = /* @__PURE__ */ new Map();
        h.set(c, m);
        for (const [y, x] of c) m.set(y, u(x, y, d, h, v));
        return m;
      }
      if (c instanceof Set) {
        const m = /* @__PURE__ */ new Set();
        h.set(c, m);
        for (const y of c) m.add(u(y, void 0, d, h, v));
        return m;
      }
      if (typeof Buffer < "u" && Buffer.isBuffer(c)) return c.subarray();
      if (a.isTypedArray(c)) {
        const m = new (Object.getPrototypeOf(c)).constructor(c.length);
        h.set(c, m);
        for (let y = 0; y < c.length; y++) m[y] = u(c[y], y, d, h, v);
        return m;
      }
      if (c instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && c instanceof SharedArrayBuffer) return c.slice(0);
      if (c instanceof DataView) {
        const m = new DataView(c.buffer.slice(0), c.byteOffset, c.byteLength);
        return h.set(c, m), s(m, c, d, h, v), m;
      }
      if (typeof File < "u" && c instanceof File) {
        const m = new File([c], c.name, { type: c.type });
        return h.set(c, m), s(m, c, d, h, v), m;
      }
      if (typeof Blob < "u" && c instanceof Blob) {
        const m = new Blob([c], { type: c.type });
        return h.set(c, m), s(m, c, d, h, v), m;
      }
      if (c instanceof Error) {
        const m = structuredClone(c);
        return h.set(c, m), m.message = c.message, m.name = c.name, m.stack = c.stack, m.cause = c.cause, m.constructor = c.constructor, s(m, c, d, h, v), m;
      }
      if (c instanceof Boolean) {
        const m = new Boolean(c.valueOf());
        return h.set(c, m), s(m, c, d, h, v), m;
      }
      if (c instanceof Number) {
        const m = new Number(c.valueOf());
        return h.set(c, m), s(m, c, d, h, v), m;
      }
      if (c instanceof String) {
        const m = new String(c.valueOf());
        return h.set(c, m), s(m, c, d, h, v), m;
      }
      if (typeof c == "object" && l(c)) {
        const m = Object.create(Object.getPrototypeOf(c));
        return h.set(c, m), s(m, c, d, h, v), m;
      }
      return c;
    }
    function s(c, f, d = c, h, v) {
      const g = [...Object.keys(f), ...t.getSymbols(f)];
      for (let m = 0; m < g.length; m++) {
        const y = g[m], x = Object.getOwnPropertyDescriptor(c, y);
        (x == null || x.writable) && (c[y] = u(f[y], y, d, h, v));
      }
    }
    function l(c) {
      switch (r.getTag(c)) {
        case n.argumentsTag:
        case n.arrayTag:
        case n.arrayBufferTag:
        case n.dataViewTag:
        case n.booleanTag:
        case n.dateTag:
        case n.float32ArrayTag:
        case n.float64ArrayTag:
        case n.int8ArrayTag:
        case n.int16ArrayTag:
        case n.int32ArrayTag:
        case n.mapTag:
        case n.numberTag:
        case n.objectTag:
        case n.regexpTag:
        case n.setTag:
        case n.stringTag:
        case n.symbolTag:
        case n.uint8ArrayTag:
        case n.uint8ClampedArrayTag:
        case n.uint16ArrayTag:
        case n.uint32ArrayTag:
          return true;
        default:
          return false;
      }
    }
    e3.cloneDeepWith = o, e3.cloneDeepWithImpl = u, e3.copyProperties = s;
  })(Ds)), Ds;
}
var _h;
function Q1() {
  return _h || (_h = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = Ny();
    function r(n) {
      return t.cloneDeepWithImpl(n, void 0, n, /* @__PURE__ */ new Map(), void 0);
    }
    e3.cloneDeep = r;
  })(Rs)), Rs;
}
var Mh;
function J1() {
  return Mh || (Mh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = Ry(), r = Q1();
    function n(i) {
      return i = r.cloneDeep(i), (a) => t.isMatch(a, i);
    }
    e3.matches = n;
  })(Ts)), Ts;
}
var Bs = {}, zs = {}, Ws = {}, kh;
function eS() {
  return kh || (kh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = Ny(), r = mf(), n = Dy();
    function i(a, o) {
      return t.cloneDeepWith(a, (u, s, l, c) => {
        const f = o == null ? void 0 : o(u, s, l, c);
        if (f !== void 0) return f;
        if (typeof a == "object") {
          if (r.getTag(a) === n.objectTag && typeof a.constructor != "function") {
            const d = {};
            return c.set(a, d), t.copyProperties(d, a, l, c), d;
          }
          switch (Object.prototype.toString.call(a)) {
            case n.numberTag:
            case n.stringTag:
            case n.booleanTag: {
              const d = new a.constructor(a == null ? void 0 : a.valueOf());
              return t.copyProperties(d, a), d;
            }
            case n.argumentsTag: {
              const d = {};
              return t.copyProperties(d, a), d.length = a.length, d[Symbol.iterator] = a[Symbol.iterator], d;
            }
            default:
              return;
          }
        }
      });
    }
    e3.cloneDeepWith = i;
  })(Ws)), Ws;
}
var jh;
function tS() {
  return jh || (jh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = eS();
    function r(n) {
      return t.cloneDeepWith(n);
    }
    e3.cloneDeep = r;
  })(zs)), zs;
}
var Us = {}, qs = {}, Rh;
function Ly() {
  return Rh || (Rh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = /^(?:0|[1-9]\d*)$/;
    function r(n, i = Number.MAX_SAFE_INTEGER) {
      switch (typeof n) {
        case "number":
          return Number.isInteger(n) && n >= 0 && n < i;
        case "symbol":
          return false;
        case "string":
          return t.test(n);
      }
    }
    e3.isIndex = r;
  })(qs)), qs;
}
var Ks = {}, Dh;
function rS() {
  return Dh || (Dh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = mf();
    function r(n) {
      return n !== null && typeof n == "object" && t.getTag(n) === "[object Arguments]";
    }
    e3.isArguments = r;
  })(Ks)), Ks;
}
var Nh;
function nS() {
  return Nh || (Nh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = Py(), r = Ly(), n = rS(), i = hf();
    function a(o, u) {
      let s;
      if (Array.isArray(u) ? s = u : typeof u == "string" && t.isDeepKey(u) && (o == null ? void 0 : o[u]) == null ? s = i.toPath(u) : s = [u], s.length === 0) return false;
      let l = o;
      for (let c = 0; c < s.length; c++) {
        const f = s[c];
        if ((l == null || !Object.hasOwn(l, f)) && !((Array.isArray(l) || n.isArguments(l)) && r.isIndex(f) && f < l.length)) return false;
        l = l[f];
      }
      return true;
    }
    e3.has = a;
  })(Us)), Us;
}
var Lh;
function iS() {
  return Lh || (Lh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = Ry(), r = df(), n = tS(), i = pf(), a = nS();
    function o(u, s) {
      switch (typeof u) {
        case "object": {
          Object.is(u == null ? void 0 : u.valueOf(), -0) && (u = "-0");
          break;
        }
        case "number": {
          u = r.toKey(u);
          break;
        }
      }
      return s = n.cloneDeep(s), function(l) {
        const c = i.get(l, u);
        return c === void 0 ? a.has(l, u) : s === void 0 ? c === void 0 : t.isMatch(c, s);
      };
    }
    e3.matchesProperty = o;
  })(Bs)), Bs;
}
var $h;
function aS() {
  return $h || ($h = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = Iy(), r = Y1(), n = J1(), i = iS();
    function a(o) {
      if (o == null) return t.identity;
      switch (typeof o) {
        case "function":
          return o;
        case "object":
          return Array.isArray(o) && o.length === 2 ? i.matchesProperty(o[0], o[1]) : n.matches(o);
        case "string":
        case "symbol":
        case "number":
          return r.property(o);
      }
    }
    e3.iteratee = a;
  })(As)), As;
}
var Fh;
function oS() {
  return Fh || (Fh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = U1(), r = q1(), n = Iy(), i = H1(), a = aS();
    function o(u, s = n.identity) {
      return i.isArrayLikeObject(u) ? t.uniqBy(Array.from(u), r.ary(a.iteratee(s), 1)) : [];
    }
    e3.uniqBy = o;
  })(ys)), ys;
}
var Vs, Bh;
function uS() {
  return Bh || (Bh = 1, Vs = oS().uniqBy), Vs;
}
var sS = uS();
const zh = Tn(sS);
function lS(e3, t, r) {
  return t === true ? zh(e3, r) : typeof t == "function" ? zh(e3, t) : e3;
}
var Hs = { exports: {} }, Ys = {};
var Wh;
function cS() {
  if (Wh) return Ys;
  Wh = 1;
  var e3 = af(), t = _P();
  function r(l, c) {
    return l === c && (l !== 0 || 1 / l === 1 / c) || l !== l && c !== c;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, a = e3.useRef, o = e3.useEffect, u = e3.useMemo, s = e3.useDebugValue;
  return Ys.useSyncExternalStoreWithSelector = function(l, c, f, d, h) {
    var v = a(null);
    if (v.current === null) {
      var g = { hasValue: false, value: null };
      v.current = g;
    } else g = v.current;
    v = u(function() {
      function y(P) {
        if (!x) {
          if (x = true, b = P, P = d(P), h !== void 0 && g.hasValue) {
            var S = g.value;
            if (h(S, P)) return w = S;
          }
          return w = P;
        }
        if (S = w, n(b, P)) return S;
        var E = d(P);
        return h !== void 0 && h(S, E) ? (b = P, S) : (b = P, w = E);
      }
      var x = false, b, w, O = f === void 0 ? null : f;
      return [function() {
        return y(c());
      }, O === null ? void 0 : function() {
        return y(O());
      }];
    }, [c, f, d, h]);
    var m = i(l, v[0], v[1]);
    return o(function() {
      g.hasValue = true, g.value = m;
    }, [m]), s(m), m;
  }, Ys;
}
var Uh;
function fS() {
  return Uh || (Uh = 1, Hs.exports = cS()), Hs.exports;
}
var $y = fS(), gf = p.createContext(null), dS = (e3) => e3, Le = () => {
  var e3 = p.useContext(gf);
  return e3 ? e3.store.dispatch : dS;
}, Ja = () => {
}, hS = () => Ja, pS = (e3, t) => e3 === t;
function se(e3) {
  var t = p.useContext(gf), r = p.useMemo(() => t ? (n) => {
    if (n != null) return e3(n);
  } : Ja, [t, e3]);
  return $y.useSyncExternalStoreWithSelector(t ? t.subscription.addNestedSub : hS, t ? t.store.getState : Ja, t ? t.store.getState : Ja, r, pS);
}
var fo = Symbol("NOT_FOUND");
function vS(e3, t = `expected a function, instead received ${typeof e3}`) {
  if (typeof e3 != "function") throw new TypeError(t);
}
function mS(e3, t = `expected an object, instead received ${typeof e3}`) {
  if (typeof e3 != "object") throw new TypeError(t);
}
function gS(e3, t = "expected all items to be functions, instead received the following types: ") {
  if (!e3.every((r) => typeof r == "function")) {
    const r = e3.map((n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var qh = (e3) => Array.isArray(e3) ? e3 : [e3];
function yS(e3) {
  const t = Array.isArray(e3[0]) ? e3[0] : e3;
  return gS(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t;
}
function bS(e3, t) {
  const r = [], { length: n } = e3;
  for (let i = 0; i < n; i++) r.push(e3[i].apply(null, t));
  return r;
}
function wS(e3) {
  let t;
  return { get(r) {
    return t && e3(t.key, r) ? t.value : fo;
  }, put(r, n) {
    t = { key: r, value: n };
  }, getEntries() {
    return t ? [t] : [];
  }, clear() {
    t = void 0;
  } };
}
function xS(e3, t) {
  let r = [];
  function n(u) {
    const s = r.findIndex((l) => t(u, l.key));
    if (s > -1) {
      const l = r[s];
      return s > 0 && (r.splice(s, 1), r.unshift(l)), l.value;
    }
    return fo;
  }
  function i(u, s) {
    n(u) === fo && (r.unshift({ key: u, value: s }), r.length > e3 && r.pop());
  }
  function a() {
    return r;
  }
  function o() {
    r = [];
  }
  return { get: n, put: i, getEntries: a, clear: o };
}
var OS = (e3, t) => e3 === t;
function PS(e3) {
  return function(r, n) {
    if (r === null || n === null || r.length !== n.length) return false;
    const { length: i } = r;
    for (let a = 0; a < i; a++) if (!e3(r[a], n[a])) return false;
    return true;
  };
}
function SS(e3, t) {
  const r = typeof t == "object" ? t : { equalityCheck: t }, { equalityCheck: n = OS, maxSize: i = 1, resultEqualityCheck: a } = r, o = PS(n);
  let u = 0;
  const s = i <= 1 ? wS(o) : xS(i, o);
  function l() {
    let c = s.get(arguments);
    if (c === fo) {
      if (c = e3.apply(null, arguments), u++, a) {
        const d = s.getEntries().find((h) => a(h.value, c));
        d && (c = d.value, u !== 0 && u--);
      }
      s.put(arguments, c);
    }
    return c;
  }
  return l.clearCache = () => {
    s.clear(), l.resetResultsCount();
  }, l.resultsCount = () => u, l.resetResultsCount = () => {
    u = 0;
  }, l;
}
var ES = class {
  constructor(e3) {
    this.value = e3;
  }
  deref() {
    return this.value;
  }
}, AS = typeof WeakRef < "u" ? WeakRef : ES, CS = 0, Kh = 1;
function Ca() {
  return { s: CS, v: void 0, o: null, p: null };
}
function Fy(e3, t = {}) {
  let r = Ca();
  const { resultEqualityCheck: n } = t;
  let i, a = 0;
  function o() {
    var _a2;
    let u = r;
    const { length: s } = arguments;
    for (let f = 0, d = s; f < d; f++) {
      const h = arguments[f];
      if (typeof h == "function" || typeof h == "object" && h !== null) {
        let v = u.o;
        v === null && (u.o = v = /* @__PURE__ */ new WeakMap());
        const g = v.get(h);
        g === void 0 ? (u = Ca(), v.set(h, u)) : u = g;
      } else {
        let v = u.p;
        v === null && (u.p = v = /* @__PURE__ */ new Map());
        const g = v.get(h);
        g === void 0 ? (u = Ca(), v.set(h, u)) : u = g;
      }
    }
    const l = u;
    let c;
    if (u.s === Kh) c = u.v;
    else if (c = e3.apply(null, arguments), a++, n) {
      const f = ((_a2 = i == null ? void 0 : i.deref) == null ? void 0 : _a2.call(i)) ?? i;
      f != null && n(f, c) && (c = f, a !== 0 && a--), i = typeof c == "object" && c !== null || typeof c == "function" ? new AS(c) : c;
    }
    return l.s = Kh, l.v = c, c;
  }
  return o.clearCache = () => {
    r = Ca(), o.resetResultsCount();
  }, o.resultsCount = () => a, o.resetResultsCount = () => {
    a = 0;
  }, o;
}
function By(e3, ...t) {
  const r = typeof e3 == "function" ? { memoize: e3, memoizeOptions: t } : e3, n = (...i) => {
    let a = 0, o = 0, u, s = {}, l = i.pop();
    typeof l == "object" && (s = l, l = i.pop()), vS(l, `createSelector expects an output function after the inputs, but received: [${typeof l}]`);
    const c = { ...r, ...s }, { memoize: f, memoizeOptions: d = [], argsMemoize: h = Fy, argsMemoizeOptions: v = [] } = c, g = qh(d), m = qh(v), y = yS(i), x = f(function() {
      return a++, l.apply(null, arguments);
    }, ...g), b = h(function() {
      o++;
      const O = bS(y, arguments);
      return u = x.apply(null, O), u;
    }, ...m);
    return Object.assign(b, { resultFunc: l, memoizedResultFunc: x, dependencies: y, dependencyRecomputations: () => o, resetDependencyRecomputations: () => {
      o = 0;
    }, lastResult: () => u, recomputations: () => a, resetRecomputations: () => {
      a = 0;
    }, memoize: f, argsMemoize: h });
  };
  return Object.assign(n, { withTypes: () => n }), n;
}
var T = By(Fy), TS = Object.assign((e3, t = T) => {
  mS(e3, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e3}`);
  const r = Object.keys(e3), n = r.map((a) => e3[a]);
  return t(n, (...a) => a.reduce((o, u, s) => (o[r[s]] = u, o), {}));
}, { withTypes: () => TS }), Gs = {}, Xs = {}, Zs = {}, Vh;
function IS() {
  return Vh || (Vh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    function t(n) {
      return typeof n == "symbol" ? 1 : n === null ? 2 : n === void 0 ? 3 : n !== n ? 4 : 0;
    }
    const r = (n, i, a) => {
      if (n !== i) {
        const o = t(n), u = t(i);
        if (o === u && o === 0) {
          if (n < i) return a === "desc" ? 1 : -1;
          if (n > i) return a === "desc" ? -1 : 1;
        }
        return a === "desc" ? u - o : o - u;
      }
      return 0;
    };
    e3.compareValues = r;
  })(Zs)), Zs;
}
var Qs = {}, Js = {}, Hh;
function zy() {
  return Hh || (Hh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "symbol" || r instanceof Symbol;
    }
    e3.isSymbol = t;
  })(Js)), Js;
}
var Yh;
function _S() {
  return Yh || (Yh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = zy(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
    function i(a, o) {
      return Array.isArray(a) ? false : typeof a == "number" || typeof a == "boolean" || a == null || t.isSymbol(a) ? true : typeof a == "string" && (n.test(a) || !r.test(a)) || o != null && Object.hasOwn(o, a);
    }
    e3.isKey = i;
  })(Qs)), Qs;
}
var Gh;
function MS() {
  return Gh || (Gh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = IS(), r = _S(), n = hf();
    function i(a, o, u, s) {
      if (a == null) return [];
      u = s ? void 0 : u, Array.isArray(a) || (a = Object.values(a)), Array.isArray(o) || (o = o == null ? [null] : [o]), o.length === 0 && (o = [null]), Array.isArray(u) || (u = u == null ? [] : [u]), u = u.map((h) => String(h));
      const l = (h, v) => {
        let g = h;
        for (let m = 0; m < v.length && g != null; ++m) g = g[v[m]];
        return g;
      }, c = (h, v) => v == null || h == null ? v : typeof h == "object" && "key" in h ? Object.hasOwn(v, h.key) ? v[h.key] : l(v, h.path) : typeof h == "function" ? h(v) : Array.isArray(h) ? l(v, h) : typeof v == "object" ? v[h] : v, f = o.map((h) => (Array.isArray(h) && h.length === 1 && (h = h[0]), h == null || typeof h == "function" || Array.isArray(h) || r.isKey(h) ? h : { key: h, path: n.toPath(h) }));
      return a.map((h) => ({ original: h, criteria: f.map((v) => c(v, h)) })).slice().sort((h, v) => {
        for (let g = 0; g < f.length; g++) {
          const m = t.compareValues(h.criteria[g], v.criteria[g], u[g]);
          if (m !== 0) return m;
        }
        return 0;
      }).map((h) => h.original);
    }
    e3.orderBy = i;
  })(Xs)), Xs;
}
var el = {}, Xh;
function kS() {
  return Xh || (Xh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    function t(r, n = 1) {
      const i = [], a = Math.floor(n), o = (u, s) => {
        for (let l = 0; l < u.length; l++) {
          const c = u[l];
          Array.isArray(c) && s < a ? o(c, s + 1) : i.push(c);
        }
      };
      return o(r, 0), i;
    }
    e3.flatten = t;
  })(el)), el;
}
var tl = {}, Zh;
function Wy() {
  return Zh || (Zh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = Ly(), r = _y(), n = My(), i = jy();
    function a(o, u, s) {
      return n.isObject(s) && (typeof u == "number" && r.isArrayLike(s) && t.isIndex(u) && u < s.length || typeof u == "string" && u in s) ? i.isEqualsSameValueZero(s[u], o) : false;
    }
    e3.isIterateeCall = a;
  })(tl)), tl;
}
var Qh;
function jS() {
  return Qh || (Qh = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = MS(), r = kS(), n = Wy();
    function i(a, ...o) {
      const u = o.length;
      return u > 1 && n.isIterateeCall(a, o[0], o[1]) ? o = [] : u > 2 && n.isIterateeCall(o[0], o[1], o[2]) && (o = [o[0]]), t.orderBy(a, r.flatten(o), ["asc"]);
    }
    e3.sortBy = i;
  })(Gs)), Gs;
}
var rl, Jh;
function RS() {
  return Jh || (Jh = 1, rl = jS().sortBy), rl;
}
var DS = RS();
const pu = Tn(DS);
var Uy = (e3) => e3.legend.settings, NS = (e3) => e3.legend.size, LS = (e3) => e3.legend.payload;
T([LS, Uy], (e3, t) => {
  var { itemSorter: r } = t, n = e3.flat(1);
  return r ? pu(n, r) : n;
});
var Ta = 1;
function $S() {
  var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], [t, r] = p.useState({ height: 0, left: 0, top: 0, width: 0 }), n = p.useCallback((i) => {
    if (i != null) {
      var a = i.getBoundingClientRect(), o = { height: a.height, left: a.left, top: a.top, width: a.width };
      (Math.abs(o.height - t.height) > Ta || Math.abs(o.left - t.left) > Ta || Math.abs(o.top - t.top) > Ta || Math.abs(o.width - t.width) > Ta) && r({ height: o.height, left: o.left, top: o.top, width: o.width });
    }
  }, [t.width, t.height, t.top, t.left, ...e3]);
  return [t, n];
}
function rt(e3) {
  return `Minified Redux error #${e3}; visit https://redux.js.org/Errors?code=${e3} for the full message or use the non-minified dev environment for full errors. `;
}
var FS = typeof Symbol == "function" && Symbol.observable || "@@observable", ep = FS, nl = () => Math.random().toString(36).substring(7).split("").join("."), BS = { INIT: `@@redux/INIT${nl()}`, REPLACE: `@@redux/REPLACE${nl()}`, PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${nl()}` }, ho = BS;
function yf(e3) {
  if (typeof e3 != "object" || e3 === null) return false;
  let t = e3;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e3) === t || Object.getPrototypeOf(e3) === null;
}
function qy(e3, t, r) {
  if (typeof e3 != "function") throw new Error(rt(2));
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function") throw new Error(rt(0));
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function") throw new Error(rt(1));
    return r(qy)(e3, t);
  }
  let n = e3, i = t, a = /* @__PURE__ */ new Map(), o = a, u = 0, s = false;
  function l() {
    o === a && (o = /* @__PURE__ */ new Map(), a.forEach((m, y) => {
      o.set(y, m);
    }));
  }
  function c() {
    if (s) throw new Error(rt(3));
    return i;
  }
  function f(m) {
    if (typeof m != "function") throw new Error(rt(4));
    if (s) throw new Error(rt(5));
    let y = true;
    l();
    const x = u++;
    return o.set(x, m), function() {
      if (y) {
        if (s) throw new Error(rt(6));
        y = false, l(), o.delete(x), a = null;
      }
    };
  }
  function d(m) {
    if (!yf(m)) throw new Error(rt(7));
    if (typeof m.type > "u") throw new Error(rt(8));
    if (typeof m.type != "string") throw new Error(rt(17));
    if (s) throw new Error(rt(9));
    try {
      s = true, i = n(i, m);
    } finally {
      s = false;
    }
    return (a = o).forEach((x) => {
      x();
    }), m;
  }
  function h(m) {
    if (typeof m != "function") throw new Error(rt(10));
    n = m, d({ type: ho.REPLACE });
  }
  function v() {
    const m = f;
    return { subscribe(y) {
      if (typeof y != "object" || y === null) throw new Error(rt(11));
      function x() {
        const w = y;
        w.next && w.next(c());
      }
      return x(), { unsubscribe: m(x) };
    }, [ep]() {
      return this;
    } };
  }
  return d({ type: ho.INIT }), { dispatch: d, subscribe: f, getState: c, replaceReducer: h, [ep]: v };
}
function zS(e3) {
  Object.keys(e3).forEach((t) => {
    const r = e3[t];
    if (typeof r(void 0, { type: ho.INIT }) > "u") throw new Error(rt(12));
    if (typeof r(void 0, { type: ho.PROBE_UNKNOWN_ACTION() }) > "u") throw new Error(rt(13));
  });
}
function Ky(e3) {
  const t = Object.keys(e3), r = {};
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    typeof e3[o] == "function" && (r[o] = e3[o]);
  }
  const n = Object.keys(r);
  let i;
  try {
    zS(r);
  } catch (a) {
    i = a;
  }
  return function(o = {}, u) {
    if (i) throw i;
    let s = false;
    const l = {};
    for (let c = 0; c < n.length; c++) {
      const f = n[c], d = r[f], h = o[f], v = d(h, u);
      if (typeof v > "u") throw u && u.type, new Error(rt(14));
      l[f] = v, s = s || v !== h;
    }
    return s = s || n.length !== Object.keys(o).length, s ? l : o;
  };
}
function po(...e3) {
  return e3.length === 0 ? (t) => t : e3.length === 1 ? e3[0] : e3.reduce((t, r) => (...n) => t(r(...n)));
}
function WS(...e3) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let a = () => {
      throw new Error(rt(15));
    };
    const o = { getState: i.getState, dispatch: (s, ...l) => a(s, ...l) }, u = e3.map((s) => s(o));
    return a = po(...u)(i.dispatch), { ...i, dispatch: a };
  };
}
function Vy(e3) {
  return yf(e3) && "type" in e3 && typeof e3.type == "string";
}
var Hy = Symbol.for("immer-nothing"), tp = Symbol.for("immer-draftable"), mt = Symbol.for("immer-state");
function zt(e3, ...t) {
  throw new Error(`[Immer] minified error nr: ${e3}. Full error at: https://bit.ly/3cXEKWf`);
}
var Pt = Object, Yn = Pt.getPrototypeOf, vo = "constructor", vu = "prototype", ic = "configurable", mo = "enumerable", eo = "writable", Ui = "value", Sr = (e3) => !!e3 && !!e3[mt];
function Vt(e3) {
  var _a2;
  return e3 ? Yy(e3) || gu(e3) || !!e3[tp] || !!((_a2 = e3[vo]) == null ? void 0 : _a2[tp]) || yu(e3) || bu(e3) : false;
}
var US = Pt[vu][vo].toString(), rp = /* @__PURE__ */ new WeakMap();
function Yy(e3) {
  if (!e3 || !bf(e3)) return false;
  const t = Yn(e3);
  if (t === null || t === Pt[vu]) return true;
  const r = Pt.hasOwnProperty.call(t, vo) && t[vo];
  if (r === Object) return true;
  if (!Fn(r)) return false;
  let n = rp.get(r);
  return n === void 0 && (n = Function.toString.call(r), rp.set(r, n)), n === US;
}
function mu(e3, t, r = true) {
  ua(e3) === 0 ? (r ? Reflect.ownKeys(e3) : Pt.keys(e3)).forEach((i) => {
    t(i, e3[i], e3);
  }) : e3.forEach((n, i) => t(i, n, e3));
}
function ua(e3) {
  const t = e3[mt];
  return t ? t.type_ : gu(e3) ? 1 : yu(e3) ? 2 : bu(e3) ? 3 : 0;
}
var np = (e3, t, r = ua(e3)) => r === 2 ? e3.has(t) : Pt[vu].hasOwnProperty.call(e3, t), ac = (e3, t, r = ua(e3)) => r === 2 ? e3.get(t) : e3[t], go = (e3, t, r, n = ua(e3)) => {
  n === 2 ? e3.set(t, r) : n === 3 ? e3.add(r) : e3[t] = r;
};
function qS(e3, t) {
  return e3 === t ? e3 !== 0 || 1 / e3 === 1 / t : e3 !== e3 && t !== t;
}
var gu = Array.isArray, yu = (e3) => e3 instanceof Map, bu = (e3) => e3 instanceof Set, bf = (e3) => typeof e3 == "object", Fn = (e3) => typeof e3 == "function", il = (e3) => typeof e3 == "boolean";
function KS(e3) {
  const t = +e3;
  return Number.isInteger(t) && String(t) === e3;
}
var pr = (e3) => e3.copy_ || e3.base_, wf = (e3) => e3.modified_ ? e3.copy_ : e3.base_;
function oc(e3, t) {
  if (yu(e3)) return new Map(e3);
  if (bu(e3)) return new Set(e3);
  if (gu(e3)) return Array[vu].slice.call(e3);
  const r = Yy(e3);
  if (t === true || t === "class_only" && !r) {
    const n = Pt.getOwnPropertyDescriptors(e3);
    delete n[mt];
    let i = Reflect.ownKeys(n);
    for (let a = 0; a < i.length; a++) {
      const o = i[a], u = n[o];
      u[eo] === false && (u[eo] = true, u[ic] = true), (u.get || u.set) && (n[o] = { [ic]: true, [eo]: true, [mo]: u[mo], [Ui]: e3[o] });
    }
    return Pt.create(Yn(e3), n);
  } else {
    const n = Yn(e3);
    if (n !== null && r) return { ...e3 };
    const i = Pt.create(n);
    return Pt.assign(i, e3);
  }
}
function xf(e3, t = false) {
  return wu(e3) || Sr(e3) || !Vt(e3) || (ua(e3) > 1 && Pt.defineProperties(e3, { set: Ia, add: Ia, clear: Ia, delete: Ia }), Pt.freeze(e3), t && mu(e3, (r, n) => {
    xf(n, true);
  }, false)), e3;
}
function VS() {
  zt(2);
}
var Ia = { [Ui]: VS };
function wu(e3) {
  return e3 === null || !bf(e3) ? true : Pt.isFrozen(e3);
}
var yo = "MapSet", uc = "Patches", ip = "ArrayMethods", Gy = {};
function On(e3) {
  const t = Gy[e3];
  return t || zt(0, e3), t;
}
var ap = (e3) => !!Gy[e3], qi, Xy = () => qi, HS = (e3, t) => ({ drafts_: [], parent_: e3, immer_: t, canAutoFreeze_: true, unfinalizedDrafts_: 0, handledSet_: /* @__PURE__ */ new Set(), processedForPatches_: /* @__PURE__ */ new Set(), mapSetPlugin_: ap(yo) ? On(yo) : void 0, arrayMethodsPlugin_: ap(ip) ? On(ip) : void 0 });
function op(e3, t) {
  t && (e3.patchPlugin_ = On(uc), e3.patches_ = [], e3.inversePatches_ = [], e3.patchListener_ = t);
}
function sc(e3) {
  lc(e3), e3.drafts_.forEach(YS), e3.drafts_ = null;
}
function lc(e3) {
  e3 === qi && (qi = e3.parent_);
}
var up = (e3) => qi = HS(qi, e3);
function YS(e3) {
  const t = e3[mt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = true;
}
function sp(e3, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  if (e3 !== void 0 && e3 !== r) {
    r[mt].modified_ && (sc(t), zt(4)), Vt(e3) && (e3 = lp(t, e3));
    const { patchPlugin_: i } = t;
    i && i.generateReplacementPatches_(r[mt].base_, e3, t);
  } else e3 = lp(t, r);
  return GS(t, e3, true), sc(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e3 !== Hy ? e3 : void 0;
}
function lp(e3, t) {
  if (wu(t)) return t;
  const r = t[mt];
  if (!r) return bo(t, e3.handledSet_, e3);
  if (!xu(r, e3)) return t;
  if (!r.modified_) return r.base_;
  if (!r.finalized_) {
    const { callbacks_: n } = r;
    if (n) for (; n.length > 0; ) n.pop()(e3);
    Jy(r, e3);
  }
  return r.copy_;
}
function GS(e3, t, r = false) {
  !e3.parent_ && e3.immer_.autoFreeze_ && e3.canAutoFreeze_ && xf(t, r);
}
function Zy(e3) {
  e3.finalized_ = true, e3.scope_.unfinalizedDrafts_--;
}
var xu = (e3, t) => e3.scope_ === t, XS = [];
function Qy(e3, t, r, n) {
  const i = pr(e3), a = e3.type_;
  if (n !== void 0 && ac(i, n, a) === t) {
    go(i, n, r, a);
    return;
  }
  if (!e3.draftLocations_) {
    const u = e3.draftLocations_ = /* @__PURE__ */ new Map();
    mu(i, (s, l) => {
      if (Sr(l)) {
        const c = u.get(l) || [];
        c.push(s), u.set(l, c);
      }
    });
  }
  const o = e3.draftLocations_.get(t) ?? XS;
  for (const u of o) go(i, u, r, a);
}
function ZS(e3, t, r) {
  e3.callbacks_.push(function(i) {
    var _a2;
    const a = t;
    if (!a || !xu(a, i)) return;
    (_a2 = i.mapSetPlugin_) == null ? void 0 : _a2.fixSetContents(a);
    const o = wf(a);
    Qy(e3, a.draft_ ?? a, o, r), Jy(a, i);
  });
}
function Jy(e3, t) {
  var _a2;
  if (e3.modified_ && !e3.finalized_ && (e3.type_ === 3 || e3.type_ === 1 && e3.allIndicesReassigned_ || (((_a2 = e3.assigned_) == null ? void 0 : _a2.size) ?? 0) > 0)) {
    const { patchPlugin_: n } = t;
    if (n) {
      const i = n.getPath(e3);
      i && n.generatePatches_(e3, i, t);
    }
    Zy(e3);
  }
}
function QS(e3, t, r) {
  const { scope_: n } = e3;
  if (Sr(r)) {
    const i = r[mt];
    xu(i, n) && i.callbacks_.push(function() {
      to(e3);
      const o = wf(i);
      Qy(e3, r, o, t);
    });
  } else Vt(r) && e3.callbacks_.push(function() {
    const a = pr(e3);
    e3.type_ === 3 ? a.has(r) && bo(r, n.handledSet_, n) : ac(a, t, e3.type_) === r && n.drafts_.length > 1 && (e3.assigned_.get(t) ?? false) === true && e3.copy_ && bo(ac(e3.copy_, t, e3.type_), n.handledSet_, n);
  });
}
function bo(e3, t, r) {
  return !r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1 || Sr(e3) || t.has(e3) || !Vt(e3) || wu(e3) || (t.add(e3), mu(e3, (n, i) => {
    if (Sr(i)) {
      const a = i[mt];
      if (xu(a, r)) {
        const o = wf(a);
        go(e3, n, o, e3.type_), Zy(a);
      }
    } else Vt(i) && bo(i, t, r);
  })), e3;
}
function JS(e3, t) {
  const r = gu(e3), n = { type_: r ? 1 : 0, scope_: t ? t.scope_ : Xy(), modified_: false, finalized_: false, assigned_: void 0, parent_: t, base_: e3, draft_: null, copy_: null, revoke_: null, isManual_: false, callbacks_: void 0 };
  let i = n, a = wo;
  r && (i = [n], a = Ki);
  const { revoke: o, proxy: u } = Proxy.revocable(i, a);
  return n.draft_ = u, n.revoke_ = o, [u, n];
}
var wo = { get(e3, t) {
  if (t === mt) return e3;
  let r = e3.scope_.arrayMethodsPlugin_;
  const n = e3.type_ === 1 && typeof t == "string";
  if (n && (r == null ? void 0 : r.isArrayOperationMethod(t))) return r.createMethodInterceptor(e3, t);
  const i = pr(e3);
  if (!np(i, t, e3.type_)) return eE(e3, i, t);
  const a = i[t];
  if (e3.finalized_ || !Vt(a) || n && e3.operationMethod && (r == null ? void 0 : r.isMutatingArrayMethod(e3.operationMethod)) && KS(t)) return a;
  if (a === al(e3.base_, t)) {
    to(e3);
    const o = e3.type_ === 1 ? +t : t, u = fc(e3.scope_, a, e3, o);
    return e3.copy_[o] = u;
  }
  return a;
}, has(e3, t) {
  return t in pr(e3);
}, ownKeys(e3) {
  return Reflect.ownKeys(pr(e3));
}, set(e3, t, r) {
  const n = eb(pr(e3), t);
  if (n == null ? void 0 : n.set) return n.set.call(e3.draft_, r), true;
  if (!e3.modified_) {
    const i = al(pr(e3), t), a = i == null ? void 0 : i[mt];
    if (a && a.base_ === r) return e3.copy_[t] = r, e3.assigned_.set(t, false), true;
    if (qS(r, i) && (r !== void 0 || np(e3.base_, t, e3.type_))) return true;
    to(e3), cc(e3);
  }
  return e3.copy_[t] === r && (r !== void 0 || t in e3.copy_) || Number.isNaN(r) && Number.isNaN(e3.copy_[t]) || (e3.copy_[t] = r, e3.assigned_.set(t, true), QS(e3, t, r)), true;
}, deleteProperty(e3, t) {
  return to(e3), al(e3.base_, t) !== void 0 || t in e3.base_ ? (e3.assigned_.set(t, false), cc(e3)) : e3.assigned_.delete(t), e3.copy_ && delete e3.copy_[t], true;
}, getOwnPropertyDescriptor(e3, t) {
  const r = pr(e3), n = Reflect.getOwnPropertyDescriptor(r, t);
  return n && { [eo]: true, [ic]: e3.type_ !== 1 || t !== "length", [mo]: n[mo], [Ui]: r[t] };
}, defineProperty() {
  zt(11);
}, getPrototypeOf(e3) {
  return Yn(e3.base_);
}, setPrototypeOf() {
  zt(12);
} }, Ki = {};
for (let e3 in wo) {
  let t = wo[e3];
  Ki[e3] = function() {
    const r = arguments;
    return r[0] = r[0][0], t.apply(this, r);
  };
}
Ki.deleteProperty = function(e3, t) {
  return Ki.set.call(this, e3, t, void 0);
};
Ki.set = function(e3, t, r) {
  return wo.set.call(this, e3[0], t, r, e3[0]);
};
function al(e3, t) {
  const r = e3[mt];
  return (r ? pr(r) : e3)[t];
}
function eE(e3, t, r) {
  var _a2;
  const n = eb(t, r);
  return n ? Ui in n ? n[Ui] : (_a2 = n.get) == null ? void 0 : _a2.call(e3.draft_) : void 0;
}
function eb(e3, t) {
  if (!(t in e3)) return;
  let r = Yn(e3);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = Yn(r);
  }
}
function cc(e3) {
  e3.modified_ || (e3.modified_ = true, e3.parent_ && cc(e3.parent_));
}
function to(e3) {
  e3.copy_ || (e3.assigned_ = /* @__PURE__ */ new Map(), e3.copy_ = oc(e3.base_, e3.scope_.immer_.useStrictShallowCopy_));
}
var tE = class {
  constructor(t) {
    this.autoFreeze_ = true, this.useStrictShallowCopy_ = false, this.useStrictIteration_ = false, this.produce = (r, n, i) => {
      if (Fn(r) && !Fn(n)) {
        const o = n;
        n = r;
        const u = this;
        return function(l = o, ...c) {
          return u.produce(l, (f) => n.call(this, f, ...c));
        };
      }
      Fn(n) || zt(6), i !== void 0 && !Fn(i) && zt(7);
      let a;
      if (Vt(r)) {
        const o = up(this), u = fc(o, r, void 0);
        let s = true;
        try {
          a = n(u), s = false;
        } finally {
          s ? sc(o) : lc(o);
        }
        return op(o, i), sp(a, o);
      } else if (!r || !bf(r)) {
        if (a = n(r), a === void 0 && (a = r), a === Hy && (a = void 0), this.autoFreeze_ && xf(a, true), i) {
          const o = [], u = [];
          On(uc).generateReplacementPatches_(r, a, { patches_: o, inversePatches_: u }), i(o, u);
        }
        return a;
      } else zt(1, r);
    }, this.produceWithPatches = (r, n) => {
      if (Fn(r)) return (u, ...s) => this.produceWithPatches(u, (l) => r(l, ...s));
      let i, a;
      return [this.produce(r, n, (u, s) => {
        i = u, a = s;
      }), i, a];
    }, il(t == null ? void 0 : t.autoFreeze) && this.setAutoFreeze(t.autoFreeze), il(t == null ? void 0 : t.useStrictShallowCopy) && this.setUseStrictShallowCopy(t.useStrictShallowCopy), il(t == null ? void 0 : t.useStrictIteration) && this.setUseStrictIteration(t.useStrictIteration);
  }
  createDraft(t) {
    Vt(t) || zt(8), Sr(t) && (t = Dt(t));
    const r = up(this), n = fc(r, t, void 0);
    return n[mt].isManual_ = true, lc(r), n;
  }
  finishDraft(t, r) {
    const n = t && t[mt];
    (!n || !n.isManual_) && zt(9);
    const { scope_: i } = n;
    return op(i, r), sp(void 0, i);
  }
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  setUseStrictIteration(t) {
    this.useStrictIteration_ = t;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(t, r) {
    let n;
    for (n = r.length - 1; n >= 0; n--) {
      const a = r[n];
      if (a.path.length === 0 && a.op === "replace") {
        t = a.value;
        break;
      }
    }
    n > -1 && (r = r.slice(n + 1));
    const i = On(uc).applyPatches_;
    return Sr(t) ? i(t, r) : this.produce(t, (a) => i(a, r));
  }
};
function fc(e3, t, r, n) {
  const [i, a] = yu(t) ? On(yo).proxyMap_(t, r) : bu(t) ? On(yo).proxySet_(t, r) : JS(t, r);
  return ((r == null ? void 0 : r.scope_) ?? Xy()).drafts_.push(i), a.callbacks_ = (r == null ? void 0 : r.callbacks_) ?? [], a.key_ = n, r && n !== void 0 ? ZS(r, a, n) : a.callbacks_.push(function(s) {
    var _a2;
    (_a2 = s.mapSetPlugin_) == null ? void 0 : _a2.fixSetContents(a);
    const { patchPlugin_: l } = s;
    a.modified_ && l && l.generatePatches_(a, [], s);
  }), i;
}
function Dt(e3) {
  return Sr(e3) || zt(10, e3), tb(e3);
}
function tb(e3) {
  if (!Vt(e3) || wu(e3)) return e3;
  const t = e3[mt];
  let r, n = true;
  if (t) {
    if (!t.modified_) return t.base_;
    t.finalized_ = true, r = oc(e3, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else r = oc(e3, true);
  return mu(r, (i, a) => {
    go(r, i, tb(a));
  }, n), t && (t.finalized_ = false), r;
}
var rE = new tE(), rb = rE.produce;
function nb(e3) {
  return ({ dispatch: r, getState: n }) => (i) => (a) => typeof a == "function" ? a(r, n, e3) : i(a);
}
var nE = nb(), iE = nb, aE = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0) return typeof arguments[0] == "object" ? po : po.apply(null, arguments);
};
function At(e3, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i) throw new Error(Et(0));
      return { type: e3, payload: i.payload, ..."meta" in i && { meta: i.meta }, ..."error" in i && { error: i.error } };
    }
    return { type: e3, payload: n[0] };
  }
  return r.toString = () => `${e3}`, r.type = e3, r.match = (n) => Vy(n) && n.type === e3, r;
}
var ib = class Ii extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Ii.prototype);
  }
  static get [Symbol.species]() {
    return Ii;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Ii(...t[0].concat(this)) : new Ii(...t.concat(this));
  }
};
function cp(e3) {
  return Vt(e3) ? rb(e3, () => {
  }) : e3;
}
function _a(e3, t, r) {
  return e3.has(t) ? e3.get(t) : e3.set(t, r(t)).get(t);
}
function oE(e3) {
  return typeof e3 == "boolean";
}
var uE = () => function(t) {
  const { thunk: r = true, immutableCheck: n = true, serializableCheck: i = true, actionCreatorCheck: a = true } = t ?? {};
  let o = new ib();
  return r && (oE(r) ? o.push(nE) : o.push(iE(r.extraArgument))), o;
}, ab = "RTK_autoBatch", Ce = () => (e3) => ({ payload: e3, meta: { [ab]: true } }), fp = (e3) => (t) => {
  setTimeout(t, e3);
}, ob = (e3 = { type: "raf" }) => (t) => (...r) => {
  const n = t(...r);
  let i = true, a = false, o = false;
  const u = /* @__PURE__ */ new Set(), s = e3.type === "tick" ? queueMicrotask : e3.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : fp(10) : e3.type === "callback" ? e3.queueNotification : fp(e3.timeout), l = () => {
    o = false, a && (a = false, u.forEach((c) => c()));
  };
  return Object.assign({}, n, { subscribe(c) {
    const f = () => i && c(), d = n.subscribe(f);
    return u.add(c), () => {
      d(), u.delete(c);
    };
  }, dispatch(c) {
    var _a2;
    try {
      return i = !((_a2 = c == null ? void 0 : c.meta) == null ? void 0 : _a2[ab]), a = !i, a && (o || (o = true, s(l))), n.dispatch(c);
    } finally {
      i = true;
    }
  } });
}, sE = (e3) => function(r) {
  const { autoBatch: n = true } = r ?? {};
  let i = new ib(e3);
  return n && i.push(ob(typeof n == "object" ? n : void 0)), i;
};
function lE(e3) {
  const t = uE(), { reducer: r = void 0, middleware: n, devTools: i = true, preloadedState: a = void 0, enhancers: o = void 0 } = e3 || {};
  let u;
  if (typeof r == "function") u = r;
  else if (yf(r)) u = Ky(r);
  else throw new Error(Et(1));
  let s;
  typeof n == "function" ? s = n(t) : s = t();
  let l = po;
  i && (l = aE({ trace: false, ...typeof i == "object" && i }));
  const c = WS(...s), f = sE(c);
  let d = typeof o == "function" ? o(f) : f();
  const h = l(...d);
  return qy(u, a, h);
}
function ub(e3) {
  const t = {}, r = [];
  let n;
  const i = { addCase(a, o) {
    const u = typeof a == "string" ? a : a.type;
    if (!u) throw new Error(Et(28));
    if (u in t) throw new Error(Et(29));
    return t[u] = o, i;
  }, addAsyncThunk(a, o) {
    return o.pending && (t[a.pending.type] = o.pending), o.rejected && (t[a.rejected.type] = o.rejected), o.fulfilled && (t[a.fulfilled.type] = o.fulfilled), o.settled && r.push({ matcher: a.settled, reducer: o.settled }), i;
  }, addMatcher(a, o) {
    return r.push({ matcher: a, reducer: o }), i;
  }, addDefaultCase(a) {
    return n = a, i;
  } };
  return e3(i), [t, r, n];
}
function cE(e3) {
  return typeof e3 == "function";
}
function fE(e3, t) {
  let [r, n, i] = ub(t), a;
  if (cE(e3)) a = () => cp(e3());
  else {
    const u = cp(e3);
    a = () => u;
  }
  function o(u = a(), s) {
    let l = [r[s.type], ...n.filter(({ matcher: c }) => c(s)).map(({ reducer: c }) => c)];
    return l.filter((c) => !!c).length === 0 && (l = [i]), l.reduce((c, f) => {
      if (f) if (Sr(c)) {
        const h = f(c, s);
        return h === void 0 ? c : h;
      } else {
        if (Vt(c)) return rb(c, (d) => f(d, s));
        {
          const d = f(c, s);
          if (d === void 0) {
            if (c === null) return c;
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return d;
        }
      }
      return c;
    }, u);
  }
  return o.getInitialState = a, o;
}
var dE = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", hE = (e3 = 21) => {
  let t = "", r = e3;
  for (; r--; ) t += dE[Math.random() * 64 | 0];
  return t;
}, pE = Symbol.for("rtk-slice-createasyncthunk");
function vE(e3, t) {
  return `${e3}/${t}`;
}
function mE({ creators: e3 } = {}) {
  var _a2;
  const t = (_a2 = e3 == null ? void 0 : e3.asyncThunk) == null ? void 0 : _a2[pE];
  return function(n) {
    const { name: i, reducerPath: a = i } = n;
    if (!i) throw new Error(Et(11));
    const o = (typeof n.reducers == "function" ? n.reducers(yE()) : n.reducers) || {}, u = Object.keys(o), s = { sliceCaseReducersByName: {}, sliceCaseReducersByType: {}, actionCreators: {}, sliceMatchers: [] }, l = { addCase(b, w) {
      const O = typeof b == "string" ? b : b.type;
      if (!O) throw new Error(Et(12));
      if (O in s.sliceCaseReducersByType) throw new Error(Et(13));
      return s.sliceCaseReducersByType[O] = w, l;
    }, addMatcher(b, w) {
      return s.sliceMatchers.push({ matcher: b, reducer: w }), l;
    }, exposeAction(b, w) {
      return s.actionCreators[b] = w, l;
    }, exposeCaseReducer(b, w) {
      return s.sliceCaseReducersByName[b] = w, l;
    } };
    u.forEach((b) => {
      const w = o[b], O = { reducerName: b, type: vE(i, b), createNotation: typeof n.reducers == "function" };
      wE(w) ? OE(O, w, l, t) : bE(O, w, l);
    });
    function c() {
      const [b = {}, w = [], O = void 0] = typeof n.extraReducers == "function" ? ub(n.extraReducers) : [n.extraReducers], P = { ...b, ...s.sliceCaseReducersByType };
      return fE(n.initialState, (S) => {
        for (let E in P) S.addCase(E, P[E]);
        for (let E of s.sliceMatchers) S.addMatcher(E.matcher, E.reducer);
        for (let E of w) S.addMatcher(E.matcher, E.reducer);
        O && S.addDefaultCase(O);
      });
    }
    const f = (b) => b, d = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new WeakMap();
    let v;
    function g(b, w) {
      return v || (v = c()), v(b, w);
    }
    function m() {
      return v || (v = c()), v.getInitialState();
    }
    function y(b, w = false) {
      function O(S) {
        let E = S[b];
        return typeof E > "u" && w && (E = _a(h, O, m)), E;
      }
      function P(S = f) {
        const E = _a(d, w, () => /* @__PURE__ */ new WeakMap());
        return _a(E, S, () => {
          const N = {};
          for (const [k, R] of Object.entries(n.selectors ?? {})) N[k] = gE(R, S, () => _a(h, S, m), w);
          return N;
        });
      }
      return { reducerPath: b, getSelectors: P, get selectors() {
        return P(O);
      }, selectSlice: O };
    }
    const x = { name: i, reducer: g, actions: s.actionCreators, caseReducers: s.sliceCaseReducersByName, getInitialState: m, ...y(a), injectInto(b, { reducerPath: w, ...O } = {}) {
      const P = w ?? a;
      return b.inject({ reducerPath: P, reducer: g }, O), { ...x, ...y(P, true) };
    } };
    return x;
  };
}
function gE(e3, t, r, n) {
  function i(a, ...o) {
    let u = t(a);
    return typeof u > "u" && n && (u = r()), e3(u, ...o);
  }
  return i.unwrapped = e3, i;
}
var ft = mE();
function yE() {
  function e3(t, r) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...r };
  }
  return e3.withTypes = () => e3, { reducer(t) {
    return Object.assign({ [t.name](...r) {
      return t(...r);
    } }[t.name], { _reducerDefinitionType: "reducer" });
  }, preparedReducer(t, r) {
    return { _reducerDefinitionType: "reducerWithPrepare", prepare: t, reducer: r };
  }, asyncThunk: e3 };
}
function bE({ type: e3, reducerName: t, createNotation: r }, n, i) {
  let a, o;
  if ("reducer" in n) {
    if (r && !xE(n)) throw new Error(Et(17));
    a = n.reducer, o = n.prepare;
  } else a = n;
  i.addCase(e3, a).exposeCaseReducer(t, a).exposeAction(t, o ? At(e3, o) : At(e3));
}
function wE(e3) {
  return e3._reducerDefinitionType === "asyncThunk";
}
function xE(e3) {
  return e3._reducerDefinitionType === "reducerWithPrepare";
}
function OE({ type: e3, reducerName: t }, r, n, i) {
  if (!i) throw new Error(Et(18));
  const { payloadCreator: a, fulfilled: o, pending: u, rejected: s, settled: l, options: c } = r, f = i(e3, a, c);
  n.exposeAction(t, f), o && n.addCase(f.fulfilled, o), u && n.addCase(f.pending, u), s && n.addCase(f.rejected, s), l && n.addMatcher(f.settled, l), n.exposeCaseReducer(t, { fulfilled: o || Ma, pending: u || Ma, rejected: s || Ma, settled: l || Ma });
}
function Ma() {
}
var PE = "task", sb = "listener", lb = "completed", Of = "cancelled", SE = `task-${Of}`, EE = `task-${lb}`, dc = `${sb}-${Of}`, AE = `${sb}-${lb}`, Ou = class {
  constructor(e3) {
    __publicField(this, "name", "TaskAbortError");
    __publicField(this, "message");
    this.code = e3, this.message = `${PE} ${Of} (reason: ${e3})`;
  }
}, Pf = (e3, t) => {
  if (typeof e3 != "function") throw new TypeError(Et(32));
}, xo = () => {
}, cb = (e3, t = xo) => (e3.catch(t), e3), fb = (e3, t) => (e3.addEventListener("abort", t, { once: true }), () => e3.removeEventListener("abort", t)), mn = (e3) => {
  if (e3.aborted) throw new Ou(e3.reason);
};
function db(e3, t) {
  let r = xo;
  return new Promise((n, i) => {
    const a = () => i(new Ou(e3.reason));
    if (e3.aborted) {
      a();
      return;
    }
    r = fb(e3, a), t.finally(() => r()).then(n, i);
  }).finally(() => {
    r = xo;
  });
}
var CE = async (e3, t) => {
  try {
    return await Promise.resolve(), { status: "ok", value: await e3() };
  } catch (r) {
    return { status: r instanceof Ou ? "cancelled" : "rejected", error: r };
  } finally {
    t == null ? void 0 : t();
  }
}, Oo = (e3) => (t) => cb(db(e3, t).then((r) => (mn(e3), r))), hb = (e3) => {
  const t = Oo(e3);
  return (r) => t(new Promise((n) => setTimeout(n, r)));
}, { assign: Wn } = Object, dp = {}, Pu = "listenerMiddleware", TE = (e3, t) => {
  const r = (n) => fb(e3, () => n.abort(e3.reason));
  return (n, i) => {
    Pf(n);
    const a = new AbortController();
    r(a);
    const o = CE(async () => {
      mn(e3), mn(a.signal);
      const u = await n({ pause: Oo(a.signal), delay: hb(a.signal), signal: a.signal });
      return mn(a.signal), u;
    }, () => a.abort(EE));
    return (i == null ? void 0 : i.autoJoin) && t.push(o.catch(xo)), { result: Oo(e3)(o), cancel() {
      a.abort(SE);
    } };
  };
}, IE = (e3, t) => {
  const r = async (n, i) => {
    mn(t);
    let a = () => {
    };
    const u = [new Promise((s, l) => {
      let c = e3({ predicate: n, effect: (f, d) => {
        d.unsubscribe(), s([f, d.getState(), d.getOriginalState()]);
      } });
      a = () => {
        c(), l();
      };
    })];
    i != null && u.push(new Promise((s) => setTimeout(s, i, null)));
    try {
      const s = await db(t, Promise.race(u));
      return mn(t), s;
    } finally {
      a();
    }
  };
  return (n, i) => cb(r(n, i));
}, pb = (e3) => {
  let { type: t, actionCreator: r, matcher: n, predicate: i, effect: a } = e3;
  if (t) i = At(t).match;
  else if (r) t = r.type, i = r.match;
  else if (n) i = n;
  else if (!i) throw new Error(Et(21));
  return Pf(a), { predicate: i, type: t, effect: a };
}, vb = Wn((e3) => {
  const { type: t, predicate: r, effect: n } = pb(e3);
  return { id: hE(), effect: n, type: t, predicate: r, pending: /* @__PURE__ */ new Set(), unsubscribe: () => {
    throw new Error(Et(22));
  } };
}, { withTypes: () => vb }), hp = (e3, t) => {
  const { type: r, effect: n, predicate: i } = pb(t);
  return Array.from(e3.values()).find((a) => (typeof r == "string" ? a.type === r : a.predicate === i) && a.effect === n);
}, hc = (e3) => {
  e3.pending.forEach((t) => {
    t.abort(dc);
  });
}, _E = (e3, t) => () => {
  for (const r of t.keys()) hc(r);
  e3.clear();
}, pp = (e3, t, r) => {
  try {
    e3(t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    }, 0);
  }
}, mb = Wn(At(`${Pu}/add`), { withTypes: () => mb }), ME = At(`${Pu}/removeAll`), gb = Wn(At(`${Pu}/remove`), { withTypes: () => gb }), kE = (...e3) => {
  console.error(`${Pu}/error`, ...e3);
}, sa = (e3 = {}) => {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = (h) => {
    const v = r.get(h) ?? 0;
    r.set(h, v + 1);
  }, i = (h) => {
    const v = r.get(h) ?? 1;
    v === 1 ? r.delete(h) : r.set(h, v - 1);
  }, { extra: a, onError: o = kE } = e3;
  Pf(o);
  const u = (h) => (h.unsubscribe = () => t.delete(h.id), t.set(h.id, h), (v) => {
    h.unsubscribe(), (v == null ? void 0 : v.cancelActive) && hc(h);
  }), s = (h) => {
    const v = hp(t, h) ?? vb(h);
    return u(v);
  };
  Wn(s, { withTypes: () => s });
  const l = (h) => {
    const v = hp(t, h);
    return v && (v.unsubscribe(), h.cancelActive && hc(v)), !!v;
  };
  Wn(l, { withTypes: () => l });
  const c = async (h, v, g, m) => {
    const y = new AbortController(), x = IE(s, y.signal), b = [];
    try {
      h.pending.add(y), n(h), await Promise.resolve(h.effect(v, Wn({}, g, { getOriginalState: m, condition: (w, O) => x(w, O).then(Boolean), take: x, delay: hb(y.signal), pause: Oo(y.signal), extra: a, signal: y.signal, fork: TE(y.signal, b), unsubscribe: h.unsubscribe, subscribe: () => {
        t.set(h.id, h);
      }, cancelActiveListeners: () => {
        h.pending.forEach((w, O, P) => {
          w !== y && (w.abort(dc), P.delete(w));
        });
      }, cancel: () => {
        y.abort(dc), h.pending.delete(y);
      }, throwIfCancelled: () => {
        mn(y.signal);
      } })));
    } catch (w) {
      w instanceof Ou || pp(o, w, { raisedBy: "effect" });
    } finally {
      await Promise.all(b), y.abort(AE), i(h), h.pending.delete(y);
    }
  }, f = _E(t, r);
  return { middleware: (h) => (v) => (g) => {
    if (!Vy(g)) return v(g);
    if (mb.match(g)) return s(g.payload);
    if (ME.match(g)) {
      f();
      return;
    }
    if (gb.match(g)) return l(g.payload);
    let m = h.getState();
    const y = () => {
      if (m === dp) throw new Error(Et(23));
      return m;
    };
    let x;
    try {
      if (x = v(g), t.size > 0) {
        const b = h.getState(), w = Array.from(t.values());
        for (const O of w) {
          let P = false;
          try {
            P = O.predicate(g, b, m);
          } catch (S) {
            P = false, pp(o, S, { raisedBy: "predicate" });
          }
          P && c(O, g, h, y);
        }
      }
    } finally {
      m = dp;
    }
    return x;
  }, startListening: s, stopListening: l, clearListeners: f };
};
function Et(e3) {
  return `Minified Redux Toolkit error #${e3}; visit https://redux-toolkit.js.org/Errors?code=${e3} for the full message or use the non-minified dev environment for full errors. `;
}
var jE = { layoutType: "horizontal", width: 0, height: 0, margin: { top: 5, right: 5, bottom: 5, left: 5 }, scale: 1 }, yb = ft({ name: "chartLayout", initialState: jE, reducers: { setLayout(e3, t) {
  e3.layoutType = t.payload;
}, setChartSize(e3, t) {
  e3.width = t.payload.width, e3.height = t.payload.height;
}, setMargin(e3, t) {
  var r, n, i, a;
  e3.margin.top = (r = t.payload.top) !== null && r !== void 0 ? r : 0, e3.margin.right = (n = t.payload.right) !== null && n !== void 0 ? n : 0, e3.margin.bottom = (i = t.payload.bottom) !== null && i !== void 0 ? i : 0, e3.margin.left = (a = t.payload.left) !== null && a !== void 0 ? a : 0;
}, setScale(e3, t) {
  e3.scale = t.payload;
} } }), { setMargin: RE, setLayout: DE, setChartSize: NE, setScale: LE } = yb.actions, $E = yb.reducer;
function bb(e3, t, r) {
  return Array.isArray(e3) && e3 && t + r !== 0 ? e3.slice(t, r + 1) : e3;
}
function Oe(e3) {
  return Number.isFinite(e3);
}
function Qr(e3) {
  return typeof e3 == "number" && e3 > 0 && Number.isFinite(e3);
}
function vp(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bn(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vp(Object(r), true).forEach(function(n) {
      FE(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : vp(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function FE(e3, t, r) {
  return (t = BE(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function BE(e3) {
  var t = zE(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function zE(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function Ge(e3, t, r) {
  return Xe(e3) || Xe(t) ? r : sr(t) ? hu(e3, t, r) : typeof t == "function" ? t(e3) : r;
}
var WE = (e3, t, r) => {
  if (t && r) {
    var { width: n, height: i } = r, { align: a, verticalAlign: o, layout: u } = t;
    if ((u === "vertical" || u === "horizontal" && o === "middle") && a !== "center" && ue(e3[a])) return Bn(Bn({}, e3), {}, { [a]: e3[a] + (n || 0) });
    if ((u === "horizontal" || u === "vertical" && a === "center") && o !== "middle" && ue(e3[o])) return Bn(Bn({}, e3), {}, { [o]: e3[o] + (i || 0) });
  }
  return e3;
}, Ir = (e3, t) => e3 === "horizontal" && t === "xAxis" || e3 === "vertical" && t === "yAxis" || e3 === "centric" && t === "angleAxis" || e3 === "radial" && t === "radiusAxis", UE = (e3) => {
  var t, r = e3.length;
  if (!(r <= 0)) {
    var n = (t = e3[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0)) for (var i = 0; i < n; ++i) for (var a = 0, o = 0, u = 0; u < r; ++u) {
      var s = e3[u], l = s == null ? void 0 : s[i];
      if (l != null) {
        var c = l[1], f = l[0], d = Pr(c) ? f : c;
        d >= 0 ? (l[0] = a, a += d, l[1] = a) : (l[0] = o, o += d, l[1] = o);
      }
    }
  }
}, qE = (e3) => {
  var t, r = e3.length;
  if (!(r <= 0)) {
    var n = (t = e3[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0)) for (var i = 0; i < n; ++i) for (var a = 0, o = 0; o < r; ++o) {
      var u = e3[o], s = u == null ? void 0 : u[i];
      if (s != null) {
        var l = Pr(s[1]) ? s[0] : s[1];
        l >= 0 ? (s[0] = a, a += l, s[1] = a) : (s[0] = 0, s[1] = 0);
      }
    }
  }
}, KE = { sign: UE, expand: y1, none: wn, silhouette: b1, wiggle: w1, positive: qE }, VE = (e3, t, r) => {
  var n, i = (n = KE[r]) !== null && n !== void 0 ? n : wn, a = g1().keys(t).value((u, s) => Number(Ge(u, s, 0))).order(rc).offset(i), o = a(e3);
  return o.forEach((u, s) => {
    u.forEach((l, c) => {
      var f = Ge(e3[c], t[s], 0);
      Array.isArray(f) && f.length === 2 && ue(f[0]) && ue(f[1]) && (l[0] = f[0], l[1] = f[1]);
    });
  }), o;
};
function mp(e3) {
  var { axis: t, ticks: r, bandSize: n, entry: i, index: a, dataKey: o } = e3;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Xe(i[t.dataKey])) {
      var u = Ey(r, "value", i[t.dataKey]);
      if (u) return u.coordinate + n / 2;
    }
    return r != null && r[a] ? r[a].coordinate + n / 2 : null;
  }
  var s = Ge(i, Xe(o) ? t.dataKey : o), l = t.scale.map(s);
  return ue(l) ? l : null;
}
var HE = (e3) => {
  var t = e3.flat(2).filter(ue);
  return [Math.min(...t), Math.max(...t)];
}, YE = (e3) => [e3[0] === 1 / 0 ? 0 : e3[0], e3[1] === -1 / 0 ? 0 : e3[1]], GE = (e3, t, r) => {
  if (e3 != null) return YE(Object.keys(e3).reduce((n, i) => {
    var a = e3[i];
    if (!a) return n;
    var { stackedData: o } = a, u = o.reduce((s, l) => {
      var c = bb(l, t, r), f = HE(c);
      return !Oe(f[0]) || !Oe(f[1]) ? s : [Math.min(s[0], f[0]), Math.max(s[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(u[0], n[0]), Math.max(u[1], n[1])];
  }, [1 / 0, -1 / 0]));
}, gp = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, yp = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Po = (e3, t, r) => {
  if (e3 && e3.scale && e3.scale.bandwidth) {
    var n = e3.scale.bandwidth();
    if (!r || n > 0) return n;
  }
  if (e3 && t && t.length >= 2) {
    for (var i = pu(t, (c) => c.coordinate), a = 1 / 0, o = 1, u = i.length; o < u; o++) {
      var s = i[o], l = i[o - 1];
      a = Math.min(((s == null ? void 0 : s.coordinate) || 0) - ((l == null ? void 0 : l.coordinate) || 0), a);
    }
    return a === 1 / 0 ? 0 : a;
  }
  return r ? void 0 : 0;
};
function bp(e3) {
  var { tooltipEntrySettings: t, dataKey: r, payload: n, value: i, name: a } = e3;
  return Bn(Bn({}, t), {}, { dataKey: r, payload: n, value: i, name: a });
}
function wb(e3, t) {
  if (e3) return String(e3);
  if (typeof t == "string") return t;
}
var XE = (e3, t) => {
  if (t === "horizontal") return e3.relativeX;
  if (t === "vertical") return e3.relativeY;
}, ZE = (e3, t) => t === "centric" ? e3.angle : e3.radius, _r = (e3) => e3.layout.width, Mr = (e3) => e3.layout.height, QE = (e3) => e3.layout.scale, xb = (e3) => e3.layout.margin, Su = T((e3) => e3.cartesianAxis.xAxis, (e3) => Object.values(e3)), Eu = T((e3) => e3.cartesianAxis.yAxis, (e3) => Object.values(e3)), JE = "data-recharts-item-index", eA = "data-recharts-item-id", la = 60;
function wp(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ka(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wp(Object(r), true).forEach(function(n) {
      tA(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : wp(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function tA(e3, t, r) {
  return (t = rA(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function rA(e3) {
  var t = nA(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function nA(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var iA = (e3) => e3.brush.height;
function aA(e3) {
  var t = Eu(e3);
  return t.reduce((r, n) => {
    if (n.orientation === "left" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : la;
      return r + i;
    }
    return r;
  }, 0);
}
function oA(e3) {
  var t = Eu(e3);
  return t.reduce((r, n) => {
    if (n.orientation === "right" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : la;
      return r + i;
    }
    return r;
  }, 0);
}
function uA(e3) {
  var t = Su(e3);
  return t.reduce((r, n) => n.orientation === "top" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
function sA(e3) {
  var t = Su(e3);
  return t.reduce((r, n) => n.orientation === "bottom" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
var at = T([_r, Mr, xb, iA, aA, oA, uA, sA, Uy, NS], (e3, t, r, n, i, a, o, u, s, l) => {
  var c = { left: (r.left || 0) + i, right: (r.right || 0) + a }, f = { top: (r.top || 0) + o, bottom: (r.bottom || 0) + u }, d = ka(ka({}, f), c), h = d.bottom;
  d.bottom += n, d = WE(d, s, l);
  var v = e3 - d.left - d.right, g = t - d.top - d.bottom;
  return ka(ka({ brushBottom: h }, d), {}, { width: Math.max(v, 0), height: Math.max(g, 0) });
}), lA = T(at, (e3) => ({ x: e3.left, y: e3.top, width: e3.width, height: e3.height })), Ob = T(_r, Mr, (e3, t) => ({ x: 0, y: 0, width: e3, height: t })), cA = p.createContext(null), It = () => p.useContext(cA) != null, Au = (e3) => e3.brush, Cu = T([Au, at, xb], (e3, t, r) => ({ height: e3.height, x: ue(e3.x) ? e3.x : t.left, y: ue(e3.y) ? e3.y : t.top + t.height + t.brushBottom - ((r == null ? void 0 : r.bottom) || 0), width: ue(e3.width) ? e3.width : t.width })), ol = {}, ul = {}, sl = {}, xp;
function fA() {
  return xp || (xp = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    function t(r, n, { signal: i, edges: a } = {}) {
      let o, u = null;
      const s = a != null && a.includes("leading"), l = a == null || a.includes("trailing"), c = () => {
        u !== null && (r.apply(o, u), o = void 0, u = null);
      }, f = () => {
        l && c(), g();
      };
      let d = null;
      const h = () => {
        d != null && clearTimeout(d), d = setTimeout(() => {
          d = null, f();
        }, n);
      }, v = () => {
        d !== null && (clearTimeout(d), d = null);
      }, g = () => {
        v(), o = void 0, u = null;
      }, m = () => {
        c();
      }, y = function(...x) {
        if (i == null ? void 0 : i.aborted) return;
        o = this, u = x;
        const b = d == null;
        h(), s && b && c();
      };
      return y.schedule = h, y.cancel = g, y.flush = m, i == null ? void 0 : i.addEventListener("abort", g, { once: true }), y;
    }
    e3.debounce = t;
  })(sl)), sl;
}
var Op;
function dA() {
  return Op || (Op = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = fA();
    function r(n, i = 0, a = {}) {
      typeof a != "object" && (a = {});
      const { leading: o = false, trailing: u = true, maxWait: s } = a, l = Array(2);
      o && (l[0] = "leading"), u && (l[1] = "trailing");
      let c, f = null;
      const d = t.debounce(function(...g) {
        c = n.apply(this, g), f = null;
      }, i, { edges: l }), h = function(...g) {
        return s != null && (f === null && (f = Date.now()), Date.now() - f >= s) ? (c = n.apply(this, g), f = Date.now(), d.cancel(), d.schedule(), c) : (d.apply(this, g), c);
      }, v = () => (d.flush(), c);
      return h.cancel = d.cancel, h.flush = v, h;
    }
    e3.debounce = r;
  })(ul)), ul;
}
var Pp;
function hA() {
  return Pp || (Pp = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = dA();
    function r(n, i = 0, a = {}) {
      const { leading: o = true, trailing: u = true } = a;
      return t.debounce(n, i, { leading: o, maxWait: i, trailing: u });
    }
    e3.throttle = r;
  })(ol)), ol;
}
var ll, Sp;
function pA() {
  return Sp || (Sp = 1, ll = hA().throttle), ll;
}
var vA = pA();
const mA = Tn(vA);
var Ep = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) i[a - 2] = arguments[a];
  if (typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t)) if (r === void 0) console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
  else {
    var o = 0;
    console.warn(r.replace(/%s/g, () => i[o++]));
  }
}, ir = { width: "100%", height: "100%", debounce: 0, minWidth: 0, initialDimension: { width: -1, height: -1 } }, Pb = (e3, t, r) => {
  var { width: n = ir.width, height: i = ir.height, aspect: a, maxHeight: o } = r, u = xn(n) ? e3 : Number(n), s = xn(i) ? t : Number(i);
  return a && a > 0 && (u ? s = u / a : s && (u = s * a), o && s != null && s > o && (s = o)), { calculatedWidth: u, calculatedHeight: s };
}, gA = { width: 0, height: 0, overflow: "visible" }, yA = { width: 0, overflowX: "visible" }, bA = { height: 0, overflowY: "visible" }, wA = {}, xA = (e3) => {
  var { width: t, height: r } = e3, n = xn(t), i = xn(r);
  return n && i ? gA : n ? yA : i ? bA : wA;
};
function OA(e3) {
  var { width: t, height: r, aspect: n } = e3, i = t, a = r;
  return i === void 0 && a === void 0 ? (i = ir.width, a = ir.height) : i === void 0 ? i = n && n > 0 ? void 0 : ir.width : a === void 0 && (a = n && n > 0 ? void 0 : ir.height), { width: i, height: a };
}
function pc() {
  return pc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, pc.apply(null, arguments);
}
function Ap(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cp(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ap(Object(r), true).forEach(function(n) {
      PA(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Ap(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function PA(e3, t, r) {
  return (t = SA(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function SA(e3) {
  var t = EA(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function EA(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var Sb = p.createContext(ir.initialDimension);
function AA(e3) {
  return Qr(e3.width) && Qr(e3.height);
}
function Eb(e3) {
  var { children: t, width: r, height: n } = e3, i = p.useMemo(() => ({ width: r, height: n }), [r, n]);
  return AA(i) ? p.createElement(Sb.Provider, { value: i }, t) : null;
}
var Sf = () => p.useContext(Sb), CA = p.forwardRef((e3, t) => {
  var { aspect: r, initialDimension: n = ir.initialDimension, width: i, height: a, minWidth: o = ir.minWidth, minHeight: u, maxHeight: s, children: l, debounce: c = ir.debounce, id: f, className: d, onResize: h, style: v = {} } = e3, g = p.useRef(null), m = p.useRef();
  m.current = h, p.useImperativeHandle(t, () => g.current);
  var [y, x] = p.useState({ containerWidth: n.width, containerHeight: n.height }), b = p.useCallback((E, N) => {
    x((k) => {
      var R = Math.round(E), C = Math.round(N);
      return k.containerWidth === R && k.containerHeight === C ? k : { containerWidth: R, containerHeight: C };
    });
  }, []);
  p.useEffect(() => {
    if (g.current == null || typeof ResizeObserver > "u") return ai;
    var E = (C) => {
      var F, L = C[0];
      if (L != null) {
        var { width: M, height: $ } = L.contentRect;
        b(M, $), (F = m.current) === null || F === void 0 || F.call(m, M, $);
      }
    };
    c > 0 && (E = mA(E, c, { trailing: true, leading: false }));
    var N = new ResizeObserver(E), { width: k, height: R } = g.current.getBoundingClientRect();
    return b(k, R), N.observe(g.current), () => {
      N.disconnect();
    };
  }, [b, c]);
  var { containerWidth: w, containerHeight: O } = y;
  Ep(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
  var { calculatedWidth: P, calculatedHeight: S } = Pb(w, O, { width: i, height: a, aspect: r, maxHeight: s });
  return Ep(P != null && P > 0 || S != null && S > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, P, S, i, a, o, u, r), p.createElement("div", { id: f ? "".concat(f) : void 0, className: Ee("recharts-responsive-container", d), style: Cp(Cp({}, v), {}, { width: i, height: a, minWidth: o, minHeight: u, maxHeight: s }), ref: g }, p.createElement("div", { style: xA({ width: i, height: a }) }, p.createElement(Eb, { width: P, height: S }, l)));
}), TA = p.forwardRef((e3, t) => {
  var r = Sf();
  if (Qr(r.width) && Qr(r.height)) return e3.children;
  var { width: n, height: i } = OA({ width: e3.width, height: e3.height, aspect: e3.aspect }), { calculatedWidth: a, calculatedHeight: o } = Pb(void 0, void 0, { width: n, height: i, aspect: e3.aspect, maxHeight: e3.maxHeight });
  return ue(a) && ue(o) ? p.createElement(Eb, { width: a, height: o }, e3.children) : p.createElement(CA, pc({}, e3, { width: n, height: i, ref: t }));
});
function Ef(e3) {
  if (e3) return { x: e3.x, y: e3.y, upperWidth: "upperWidth" in e3 ? e3.upperWidth : e3.width, lowerWidth: "lowerWidth" in e3 ? e3.lowerWidth : e3.width, width: e3.width, height: e3.height };
}
var Tu = () => {
  var e3, t = It(), r = se(lA), n = se(Cu), i = (e3 = se(Au)) === null || e3 === void 0 ? void 0 : e3.padding;
  return !t || !n || !i ? r : { width: n.width - i.left - i.right, height: n.height - i.top - i.bottom, x: i.left, y: i.top };
}, IA = { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0, brushBottom: 0 }, _A = () => {
  var e3;
  return (e3 = se(at)) !== null && e3 !== void 0 ? e3 : IA;
}, MA = () => se(_r), kA = () => se(Mr), je = (e3) => e3.layout.layoutType, oi = () => se(je), Ab = () => {
  var e3 = oi();
  if (e3 === "horizontal" || e3 === "vertical") return e3;
}, Cb = (e3) => {
  var t = e3.layout.layoutType;
  if (t === "centric" || t === "radial") return t;
}, jA = () => {
  var e3 = oi();
  return e3 !== void 0;
}, ca = (e3) => {
  var t = Le(), r = It(), { width: n, height: i } = e3, a = Sf(), o = n, u = i;
  return a && (o = a.width > 0 ? a.width : n, u = a.height > 0 ? a.height : i), p.useEffect(() => {
    !r && Qr(o) && Qr(u) && t(NE({ width: o, height: u }));
  }, [t, r, o, u]), null;
}, Tb = Symbol.for("immer-nothing"), Tp = Symbol.for("immer-draftable"), Ct = Symbol.for("immer-state");
function Wt(e3, ...t) {
  throw new Error(`[Immer] minified error nr: ${e3}. Full error at: https://bit.ly/3cXEKWf`);
}
var Vi = Object.getPrototypeOf;
function Gn(e3) {
  return !!e3 && !!e3[Ct];
}
function Pn(e3) {
  var _a2;
  return e3 ? Ib(e3) || Array.isArray(e3) || !!e3[Tp] || !!((_a2 = e3.constructor) == null ? void 0 : _a2[Tp]) || fa(e3) || _u(e3) : false;
}
var RA = Object.prototype.constructor.toString(), Ip = /* @__PURE__ */ new WeakMap();
function Ib(e3) {
  if (!e3 || typeof e3 != "object") return false;
  const t = Object.getPrototypeOf(e3);
  if (t === null || t === Object.prototype) return true;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  if (r === Object) return true;
  if (typeof r != "function") return false;
  let n = Ip.get(r);
  return n === void 0 && (n = Function.toString.call(r), Ip.set(r, n)), n === RA;
}
function So(e3, t, r = true) {
  Iu(e3) === 0 ? (r ? Reflect.ownKeys(e3) : Object.keys(e3)).forEach((i) => {
    t(i, e3[i], e3);
  }) : e3.forEach((n, i) => t(i, n, e3));
}
function Iu(e3) {
  const t = e3[Ct];
  return t ? t.type_ : Array.isArray(e3) ? 1 : fa(e3) ? 2 : _u(e3) ? 3 : 0;
}
function vc(e3, t) {
  return Iu(e3) === 2 ? e3.has(t) : Object.prototype.hasOwnProperty.call(e3, t);
}
function _b(e3, t, r) {
  const n = Iu(e3);
  n === 2 ? e3.set(t, r) : n === 3 ? e3.add(r) : e3[t] = r;
}
function DA(e3, t) {
  return e3 === t ? e3 !== 0 || 1 / e3 === 1 / t : e3 !== e3 && t !== t;
}
function fa(e3) {
  return e3 instanceof Map;
}
function _u(e3) {
  return e3 instanceof Set;
}
function cn(e3) {
  return e3.copy_ || e3.base_;
}
function mc(e3, t) {
  if (fa(e3)) return new Map(e3);
  if (_u(e3)) return new Set(e3);
  if (Array.isArray(e3)) return Array.prototype.slice.call(e3);
  const r = Ib(e3);
  if (t === true || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e3);
    delete n[Ct];
    let i = Reflect.ownKeys(n);
    for (let a = 0; a < i.length; a++) {
      const o = i[a], u = n[o];
      u.writable === false && (u.writable = true, u.configurable = true), (u.get || u.set) && (n[o] = { configurable: true, writable: true, enumerable: u.enumerable, value: e3[o] });
    }
    return Object.create(Vi(e3), n);
  } else {
    const n = Vi(e3);
    if (n !== null && r) return { ...e3 };
    const i = Object.create(n);
    return Object.assign(i, e3);
  }
}
function Af(e3, t = false) {
  return Mu(e3) || Gn(e3) || !Pn(e3) || (Iu(e3) > 1 && Object.defineProperties(e3, { set: ja, add: ja, clear: ja, delete: ja }), Object.freeze(e3), t && Object.values(e3).forEach((r) => Af(r, true))), e3;
}
function NA() {
  Wt(2);
}
var ja = { value: NA };
function Mu(e3) {
  return e3 === null || typeof e3 != "object" ? true : Object.isFrozen(e3);
}
var LA = {};
function Sn(e3) {
  const t = LA[e3];
  return t || Wt(0, e3), t;
}
var Hi;
function Mb() {
  return Hi;
}
function $A(e3, t) {
  return { drafts_: [], parent_: e3, immer_: t, canAutoFreeze_: true, unfinalizedDrafts_: 0 };
}
function _p(e3, t) {
  t && (Sn("Patches"), e3.patches_ = [], e3.inversePatches_ = [], e3.patchListener_ = t);
}
function gc(e3) {
  yc(e3), e3.drafts_.forEach(FA), e3.drafts_ = null;
}
function yc(e3) {
  e3 === Hi && (Hi = e3.parent_);
}
function Mp(e3) {
  return Hi = $A(Hi, e3);
}
function FA(e3) {
  const t = e3[Ct];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = true;
}
function kp(e3, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e3 !== void 0 && e3 !== r ? (r[Ct].modified_ && (gc(t), Wt(4)), Pn(e3) && (e3 = Eo(t, e3), t.parent_ || Ao(t, e3)), t.patches_ && Sn("Patches").generateReplacementPatches_(r[Ct].base_, e3, t.patches_, t.inversePatches_)) : e3 = Eo(t, r, []), gc(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e3 !== Tb ? e3 : void 0;
}
function Eo(e3, t, r) {
  if (Mu(t)) return t;
  const n = e3.immer_.shouldUseStrictIteration(), i = t[Ct];
  if (!i) return So(t, (a, o) => jp(e3, i, t, a, o, r), n), t;
  if (i.scope_ !== e3) return t;
  if (!i.modified_) return Ao(e3, i.base_, true), i.base_;
  if (!i.finalized_) {
    i.finalized_ = true, i.scope_.unfinalizedDrafts_--;
    const a = i.copy_;
    let o = a, u = false;
    i.type_ === 3 && (o = new Set(a), a.clear(), u = true), So(o, (s, l) => jp(e3, i, a, s, l, r, u), n), Ao(e3, a, false), r && e3.patches_ && Sn("Patches").generatePatches_(i, r, e3.patches_, e3.inversePatches_);
  }
  return i.copy_;
}
function jp(e3, t, r, n, i, a, o) {
  if (i == null || typeof i != "object" && !o) return;
  const u = Mu(i);
  if (!(u && !o)) {
    if (Gn(i)) {
      const s = a && t && t.type_ !== 3 && !vc(t.assigned_, n) ? a.concat(n) : void 0, l = Eo(e3, i, s);
      if (_b(r, n, l), Gn(l)) e3.canAutoFreeze_ = false;
      else return;
    } else o && r.add(i);
    if (Pn(i) && !u) {
      if (!e3.immer_.autoFreeze_ && e3.unfinalizedDrafts_ < 1 || t && t.base_ && t.base_[n] === i && u) return;
      Eo(e3, i), (!t || !t.scope_.parent_) && typeof n != "symbol" && (fa(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && Ao(e3, i);
    }
  }
}
function Ao(e3, t, r = false) {
  !e3.parent_ && e3.immer_.autoFreeze_ && e3.canAutoFreeze_ && Af(t, r);
}
function BA(e3, t) {
  const r = Array.isArray(e3), n = { type_: r ? 1 : 0, scope_: t ? t.scope_ : Mb(), modified_: false, finalized_: false, assigned_: {}, parent_: t, base_: e3, draft_: null, copy_: null, revoke_: null, isManual_: false };
  let i = n, a = Cf;
  r && (i = [n], a = Yi);
  const { revoke: o, proxy: u } = Proxy.revocable(i, a);
  return n.draft_ = u, n.revoke_ = o, u;
}
var Cf = { get(e3, t) {
  if (t === Ct) return e3;
  const r = cn(e3);
  if (!vc(r, t)) return zA(e3, r, t);
  const n = r[t];
  return e3.finalized_ || !Pn(n) ? n : n === cl(e3.base_, t) ? (fl(e3), e3.copy_[t] = wc(n, e3)) : n;
}, has(e3, t) {
  return t in cn(e3);
}, ownKeys(e3) {
  return Reflect.ownKeys(cn(e3));
}, set(e3, t, r) {
  const n = kb(cn(e3), t);
  if (n == null ? void 0 : n.set) return n.set.call(e3.draft_, r), true;
  if (!e3.modified_) {
    const i = cl(cn(e3), t), a = i == null ? void 0 : i[Ct];
    if (a && a.base_ === r) return e3.copy_[t] = r, e3.assigned_[t] = false, true;
    if (DA(r, i) && (r !== void 0 || vc(e3.base_, t))) return true;
    fl(e3), bc(e3);
  }
  return e3.copy_[t] === r && (r !== void 0 || t in e3.copy_) || Number.isNaN(r) && Number.isNaN(e3.copy_[t]) || (e3.copy_[t] = r, e3.assigned_[t] = true), true;
}, deleteProperty(e3, t) {
  return cl(e3.base_, t) !== void 0 || t in e3.base_ ? (e3.assigned_[t] = false, fl(e3), bc(e3)) : delete e3.assigned_[t], e3.copy_ && delete e3.copy_[t], true;
}, getOwnPropertyDescriptor(e3, t) {
  const r = cn(e3), n = Reflect.getOwnPropertyDescriptor(r, t);
  return n && { writable: true, configurable: e3.type_ !== 1 || t !== "length", enumerable: n.enumerable, value: r[t] };
}, defineProperty() {
  Wt(11);
}, getPrototypeOf(e3) {
  return Vi(e3.base_);
}, setPrototypeOf() {
  Wt(12);
} }, Yi = {};
So(Cf, (e3, t) => {
  Yi[e3] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Yi.deleteProperty = function(e3, t) {
  return Yi.set.call(this, e3, t, void 0);
};
Yi.set = function(e3, t, r) {
  return Cf.set.call(this, e3[0], t, r, e3[0]);
};
function cl(e3, t) {
  const r = e3[Ct];
  return (r ? cn(r) : e3)[t];
}
function zA(e3, t, r) {
  var _a2;
  const n = kb(t, r);
  return n ? "value" in n ? n.value : (_a2 = n.get) == null ? void 0 : _a2.call(e3.draft_) : void 0;
}
function kb(e3, t) {
  if (!(t in e3)) return;
  let r = Vi(e3);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = Vi(r);
  }
}
function bc(e3) {
  e3.modified_ || (e3.modified_ = true, e3.parent_ && bc(e3.parent_));
}
function fl(e3) {
  e3.copy_ || (e3.copy_ = mc(e3.base_, e3.scope_.immer_.useStrictShallowCopy_));
}
var WA = class {
  constructor(e3) {
    this.autoFreeze_ = true, this.useStrictShallowCopy_ = false, this.useStrictIteration_ = true, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const a = r;
        r = t;
        const o = this;
        return function(s = a, ...l) {
          return o.produce(s, (c) => r.call(this, c, ...l));
        };
      }
      typeof r != "function" && Wt(6), n !== void 0 && typeof n != "function" && Wt(7);
      let i;
      if (Pn(t)) {
        const a = Mp(this), o = wc(t, void 0);
        let u = true;
        try {
          i = r(o), u = false;
        } finally {
          u ? gc(a) : yc(a);
        }
        return _p(a, n), kp(i, a);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === Tb && (i = void 0), this.autoFreeze_ && Af(i, true), n) {
          const a = [], o = [];
          Sn("Patches").generateReplacementPatches_(t, i, a, o), n(a, o);
        }
        return i;
      } else Wt(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function") return (o, ...u) => this.produceWithPatches(o, (s) => t(s, ...u));
      let n, i;
      return [this.produce(t, r, (o, u) => {
        n = o, i = u;
      }), n, i];
    }, typeof (e3 == null ? void 0 : e3.autoFreeze) == "boolean" && this.setAutoFreeze(e3.autoFreeze), typeof (e3 == null ? void 0 : e3.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e3.useStrictShallowCopy), typeof (e3 == null ? void 0 : e3.useStrictIteration) == "boolean" && this.setUseStrictIteration(e3.useStrictIteration);
  }
  createDraft(e3) {
    Pn(e3) || Wt(8), Gn(e3) && (e3 = UA(e3));
    const t = Mp(this), r = wc(e3, void 0);
    return r[Ct].isManual_ = true, yc(t), r;
  }
  finishDraft(e3, t) {
    const r = e3 && e3[Ct];
    (!r || !r.isManual_) && Wt(9);
    const { scope_: n } = r;
    return _p(n, t), kp(void 0, n);
  }
  setAutoFreeze(e3) {
    this.autoFreeze_ = e3;
  }
  setUseStrictShallowCopy(e3) {
    this.useStrictShallowCopy_ = e3;
  }
  setUseStrictIteration(e3) {
    this.useStrictIteration_ = e3;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(e3, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e3 = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = Sn("Patches").applyPatches_;
    return Gn(e3) ? n(e3, t) : this.produce(e3, (i) => n(i, t));
  }
};
function wc(e3, t) {
  const r = fa(e3) ? Sn("MapSet").proxyMap_(e3, t) : _u(e3) ? Sn("MapSet").proxySet_(e3, t) : BA(e3, t);
  return (t ? t.scope_ : Mb()).drafts_.push(r), r;
}
function UA(e3) {
  return Gn(e3) || Wt(10, e3), jb(e3);
}
function jb(e3) {
  if (!Pn(e3) || Mu(e3)) return e3;
  const t = e3[Ct];
  let r, n = true;
  if (t) {
    if (!t.modified_) return t.base_;
    t.finalized_ = true, r = mc(e3, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else r = mc(e3, true);
  return So(r, (i, a) => {
    _b(r, i, jb(a));
  }, n), t && (t.finalized_ = false), r;
}
var qA = new WA();
qA.produce;
var KA = { settings: { layout: "horizontal", align: "center", verticalAlign: "middle", itemSorter: "value" }, size: { width: 0, height: 0 }, payload: [] }, Rb = ft({ name: "legend", initialState: KA, reducers: { setLegendSize(e3, t) {
  e3.size.width = t.payload.width, e3.size.height = t.payload.height;
}, setLegendSettings(e3, t) {
  e3.settings.align = t.payload.align, e3.settings.layout = t.payload.layout, e3.settings.verticalAlign = t.payload.verticalAlign, e3.settings.itemSorter = t.payload.itemSorter;
}, addLegendPayload: { reducer(e3, t) {
  e3.payload.push(t.payload);
}, prepare: Ce() }, replaceLegendPayload: { reducer(e3, t) {
  var { prev: r, next: n } = t.payload, i = Dt(e3).payload.indexOf(r);
  i > -1 && (e3.payload[i] = n);
}, prepare: Ce() }, removeLegendPayload: { reducer(e3, t) {
  var r = Dt(e3).payload.indexOf(t.payload);
  r > -1 && e3.payload.splice(r, 1);
}, prepare: Ce() } } }), { setLegendSize: OW, setLegendSettings: PW, addLegendPayload: VA, replaceLegendPayload: HA, removeLegendPayload: YA } = Rb.actions, GA = Rb.reducer, dl = { exports: {} }, hl = {};
var Rp;
function XA() {
  if (Rp) return hl;
  Rp = 1;
  var e3 = af();
  function t(s, l) {
    return s === l && (s !== 0 || 1 / s === 1 / l) || s !== s && l !== l;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e3.useSyncExternalStore, i = e3.useRef, a = e3.useEffect, o = e3.useMemo, u = e3.useDebugValue;
  return hl.useSyncExternalStoreWithSelector = function(s, l, c, f, d) {
    var h = i(null);
    if (h.current === null) {
      var v = { hasValue: false, value: null };
      h.current = v;
    } else v = h.current;
    h = o(function() {
      function m(O) {
        if (!y) {
          if (y = true, x = O, O = f(O), d !== void 0 && v.hasValue) {
            var P = v.value;
            if (d(P, O)) return b = P;
          }
          return b = O;
        }
        if (P = b, r(x, O)) return P;
        var S = f(O);
        return d !== void 0 && d(P, S) ? (x = O, P) : (x = O, b = S);
      }
      var y = false, x, b, w = c === void 0 ? null : c;
      return [function() {
        return m(l());
      }, w === null ? void 0 : function() {
        return m(w());
      }];
    }, [l, c, f, d]);
    var g = n(s, h[0], h[1]);
    return a(function() {
      v.hasValue = true, v.value = g;
    }, [g]), u(g), g;
  }, hl;
}
var Dp;
function ZA() {
  return Dp || (Dp = 1, dl.exports = XA()), dl.exports;
}
ZA();
function QA(e3) {
  e3();
}
function JA() {
  let e3 = null, t = null;
  return { clear() {
    e3 = null, t = null;
  }, notify() {
    QA(() => {
      let r = e3;
      for (; r; ) r.callback(), r = r.next;
    });
  }, get() {
    const r = [];
    let n = e3;
    for (; n; ) r.push(n), n = n.next;
    return r;
  }, subscribe(r) {
    let n = true;
    const i = t = { callback: r, next: null, prev: t };
    return i.prev ? i.prev.next = i : e3 = i, function() {
      !n || e3 === null || (n = false, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e3 = i.next);
    };
  } };
}
var Np = { notify() {
}, get: () => [] };
function eC(e3, t) {
  let r, n = Np, i = 0, a = false;
  function o(g) {
    c();
    const m = n.subscribe(g);
    let y = false;
    return () => {
      y || (y = true, m(), f());
    };
  }
  function u() {
    n.notify();
  }
  function s() {
    v.onStateChange && v.onStateChange();
  }
  function l() {
    return a;
  }
  function c() {
    i++, r || (r = e3.subscribe(s), n = JA());
  }
  function f() {
    i--, r && i === 0 && (r(), r = void 0, n.clear(), n = Np);
  }
  function d() {
    a || (a = true, c());
  }
  function h() {
    a && (a = false, f());
  }
  const v = { addNestedSub: o, notifyNestedSubs: u, handleChangeWrapper: s, isSubscribed: l, trySubscribe: d, tryUnsubscribe: h, getListeners: () => n };
  return v;
}
var tC = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", rC = tC(), nC = () => typeof navigator < "u" && navigator.product === "ReactNative", iC = nC(), aC = () => rC || iC ? p.useLayoutEffect : p.useEffect, oC = aC();
function Lp(e3, t) {
  return e3 === t ? e3 !== 0 || t !== 0 || 1 / e3 === 1 / t : e3 !== e3 && t !== t;
}
function uC(e3, t) {
  if (Lp(e3, t)) return true;
  if (typeof e3 != "object" || e3 === null || typeof t != "object" || t === null) return false;
  const r = Object.keys(e3), n = Object.keys(t);
  if (r.length !== n.length) return false;
  for (let i = 0; i < r.length; i++) if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !Lp(e3[r[i]], t[r[i]])) return false;
  return true;
}
var sC = Symbol.for("react-redux-context"), lC = typeof globalThis < "u" ? globalThis : {};
function cC() {
  if (!p.createContext) return {};
  const e3 = lC[sC] ?? (lC[sC] = /* @__PURE__ */ new Map());
  let t = e3.get(p.createContext);
  return t || (t = p.createContext(null), e3.set(p.createContext, t)), t;
}
var fC = cC();
function dC(e3) {
  const { children: t, context: r, serverState: n, store: i } = e3, a = p.useMemo(() => {
    const s = eC(i);
    return { store: i, subscription: s, getServerState: n ? () => n : void 0 };
  }, [i, n]), o = p.useMemo(() => i.getState(), [i]);
  oC(() => {
    const { subscription: s } = a;
    return s.onStateChange = s.notifyNestedSubs, s.trySubscribe(), o !== i.getState() && s.notifyNestedSubs(), () => {
      s.tryUnsubscribe(), s.onStateChange = void 0;
    };
  }, [a, o]);
  const u = r || fC;
  return p.createElement(u.Provider, { value: a }, t);
}
var hC = dC, pC = /* @__PURE__ */ new Set(["axisLine", "tickLine", "activeBar", "activeDot", "activeLabel", "activeShape", "allowEscapeViewBox", "background", "cursor", "dot", "label", "line", "margin", "padding", "position", "shape", "style", "tick", "wrapperStyle", "radius", "throttledEvents"]);
function vC(e3, t) {
  return e3 == null && t == null ? true : typeof e3 == "number" && typeof t == "number" ? e3 === t || e3 !== e3 && t !== t : e3 === t;
}
function ku(e3, t) {
  var r = /* @__PURE__ */ new Set([...Object.keys(e3), ...Object.keys(t)]);
  for (var n of r) if (pC.has(n)) {
    if (e3[n] == null && t[n] == null) continue;
    if (!uC(e3[n], t[n])) return false;
  } else if (!vC(e3[n], t[n])) return false;
  return true;
}
function xc() {
  return xc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, xc.apply(null, arguments);
}
function $p(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gi(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $p(Object(r), true).forEach(function(n) {
      mC(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : $p(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function mC(e3, t, r) {
  return (t = gC(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function gC(e3) {
  var t = yC(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function yC(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function bC(e3) {
  return Array.isArray(e3) && sr(e3[0]) && sr(e3[1]) ? e3.join(" ~ ") : e3;
}
var kn = { separator: " : ", contentStyle: { margin: 0, padding: 10, backgroundColor: "#fff", border: "1px solid #ccc", whiteSpace: "nowrap" }, itemStyle: { display: "block", paddingTop: 4, paddingBottom: 4, color: "#000" }, labelStyle: {}, accessibilityLayer: false };
function wC(e3, t) {
  return t == null ? e3 : pu(e3, t);
}
var xC = (e3) => {
  var { separator: t = kn.separator, contentStyle: r, itemStyle: n, labelStyle: i = kn.labelStyle, payload: a, formatter: o, itemSorter: u, wrapperClassName: s, labelClassName: l, label: c, labelFormatter: f, accessibilityLayer: d = kn.accessibilityLayer } = e3, h = () => {
    if (a && a.length) {
      var O = { padding: 0, margin: 0 }, P = wC(a, u), S = P.map((E, N) => {
        if (!E || E.type === "none") return null;
        var k = E.formatter || o || bC, { value: R, name: C } = E, F = R, L = C;
        if (k) {
          var M = k(R, C, E, N, a);
          if (Array.isArray(M)) [F, L] = M;
          else if (M != null) F = M;
          else return null;
        }
        var $ = gi(gi({}, kn.itemStyle), {}, { color: E.color || kn.itemStyle.color }, n);
        return p.createElement("li", { className: "recharts-tooltip-item", key: "tooltip-item-".concat(N), style: $ }, sr(L) ? p.createElement("span", { className: "recharts-tooltip-item-name" }, L) : null, sr(L) ? p.createElement("span", { className: "recharts-tooltip-item-separator" }, t) : null, p.createElement("span", { className: "recharts-tooltip-item-value" }, F), p.createElement("span", { className: "recharts-tooltip-item-unit" }, E.unit || ""));
      });
      return p.createElement("ul", { className: "recharts-tooltip-item-list", style: O }, S);
    }
    return null;
  }, v = gi(gi({}, kn.contentStyle), r), g = gi({ margin: 0 }, i), m = !Xe(c), y = m ? c : "", x = Ee("recharts-default-tooltip", s), b = Ee("recharts-tooltip-label", l);
  m && f && a !== void 0 && a !== null && (y = f(c, a));
  var w = d ? { role: "status", "aria-live": "assertive" } : {};
  return p.createElement("div", xc({ className: x, style: v }, w), p.createElement("p", { className: b, style: g }, p.isValidElement(y) ? y : "".concat(y)), h());
}, yi = "recharts-tooltip-wrapper", OC = { visibility: "hidden" };
function PC(e3) {
  var { coordinate: t, translateX: r, translateY: n } = e3;
  return Ee(yi, { ["".concat(yi, "-right")]: ue(r) && t && ue(t.x) && r >= t.x, ["".concat(yi, "-left")]: ue(r) && t && ue(t.x) && r < t.x, ["".concat(yi, "-bottom")]: ue(n) && t && ue(t.y) && n >= t.y, ["".concat(yi, "-top")]: ue(n) && t && ue(t.y) && n < t.y });
}
function Fp(e3) {
  var { allowEscapeViewBox: t, coordinate: r, key: n, offset: i, position: a, reverseDirection: o, tooltipDimension: u, viewBox: s, viewBoxDimension: l } = e3;
  if (a && ue(a[n])) return a[n];
  var c = r[n] - u - (i > 0 ? i : 0), f = r[n] + i;
  if (t[n]) return o[n] ? c : f;
  var d = s[n];
  if (d == null) return 0;
  if (o[n]) {
    var h = c, v = d;
    return h < v ? Math.max(f, d) : Math.max(c, d);
  }
  if (l == null) return 0;
  var g = f + u, m = d + l;
  return g > m ? Math.max(c, d) : Math.max(f, d);
}
function SC(e3) {
  var { translateX: t, translateY: r, useTranslate3d: n } = e3;
  return { transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)") };
}
function EC(e3) {
  var { allowEscapeViewBox: t, coordinate: r, offsetTop: n, offsetLeft: i, position: a, reverseDirection: o, tooltipBox: u, useTranslate3d: s, viewBox: l } = e3, c, f, d;
  return u.height > 0 && u.width > 0 && r ? (f = Fp({ allowEscapeViewBox: t, coordinate: r, key: "x", offset: i, position: a, reverseDirection: o, tooltipDimension: u.width, viewBox: l, viewBoxDimension: l.width }), d = Fp({ allowEscapeViewBox: t, coordinate: r, key: "y", offset: n, position: a, reverseDirection: o, tooltipDimension: u.height, viewBox: l, viewBoxDimension: l.height }), c = SC({ translateX: f, translateY: d, useTranslate3d: s })) : c = OC, { cssProperties: c, cssClasses: PC({ translateX: f, translateY: d, coordinate: r }) };
}
var AC = () => !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout), da = { isSsr: AC() };
function Db() {
  var [e3, t] = p.useState(() => da.isSsr || !window.matchMedia ? false : window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  return p.useEffect(() => {
    if (window.matchMedia) {
      var r = window.matchMedia("(prefers-reduced-motion: reduce)"), n = () => {
        t(r.matches);
      };
      return r.addEventListener("change", n), () => {
        r.removeEventListener("change", n);
      };
    }
  }, []), e3;
}
function Bp(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jn(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bp(Object(r), true).forEach(function(n) {
      CC(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Bp(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function CC(e3, t, r) {
  return (t = TC(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function TC(e3) {
  var t = IC(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function IC(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function _C(e3) {
  if (!(e3.prefersReducedMotion && e3.isAnimationActive === "auto") && e3.isAnimationActive && e3.active) return "transform ".concat(e3.animationDuration, "ms ").concat(e3.animationEasing);
}
function MC(e3) {
  var t, r, n, i, a, o, u = Db(), [s, l] = p.useState(() => ({ dismissed: false, dismissedAtCoordinate: { x: 0, y: 0 } }));
  p.useEffect(() => {
    var v = (g) => {
      if (g.key === "Escape") {
        var m, y, x, b;
        l({ dismissed: true, dismissedAtCoordinate: { x: (m = (y = e3.coordinate) === null || y === void 0 ? void 0 : y.x) !== null && m !== void 0 ? m : 0, y: (x = (b = e3.coordinate) === null || b === void 0 ? void 0 : b.y) !== null && x !== void 0 ? x : 0 } });
      }
    };
    return document.addEventListener("keydown", v), () => {
      document.removeEventListener("keydown", v);
    };
  }, [(t = e3.coordinate) === null || t === void 0 ? void 0 : t.x, (r = e3.coordinate) === null || r === void 0 ? void 0 : r.y]), s.dismissed && (((n = (i = e3.coordinate) === null || i === void 0 ? void 0 : i.x) !== null && n !== void 0 ? n : 0) !== s.dismissedAtCoordinate.x || ((a = (o = e3.coordinate) === null || o === void 0 ? void 0 : o.y) !== null && a !== void 0 ? a : 0) !== s.dismissedAtCoordinate.y) && l(jn(jn({}, s), {}, { dismissed: false }));
  var { cssClasses: c, cssProperties: f } = EC({ allowEscapeViewBox: e3.allowEscapeViewBox, coordinate: e3.coordinate, offsetLeft: typeof e3.offset == "number" ? e3.offset : e3.offset.x, offsetTop: typeof e3.offset == "number" ? e3.offset : e3.offset.y, position: e3.position, reverseDirection: e3.reverseDirection, tooltipBox: { height: e3.lastBoundingBox.height, width: e3.lastBoundingBox.width }, useTranslate3d: e3.useTranslate3d, viewBox: e3.viewBox }), d = e3.hasPortalFromProps ? {} : jn(jn({ transition: _C({ prefersReducedMotion: u, isAnimationActive: e3.isAnimationActive, active: e3.active, animationDuration: e3.animationDuration, animationEasing: e3.animationEasing }) }, f), {}, { pointerEvents: "none", position: "absolute", top: 0, left: 0 }), h = jn(jn({}, d), {}, { visibility: !s.dismissed && e3.active && e3.hasPayload ? "visible" : "hidden" }, e3.wrapperStyle);
  return p.createElement("div", { xmlns: "http://www.w3.org/1999/xhtml", tabIndex: -1, className: c, style: h, ref: e3.innerRef }, e3.children);
}
var kC = p.memo(MC), Nb = () => {
  var e3;
  return (e3 = se((t) => t.rootProps.accessibilityLayer)) !== null && e3 !== void 0 ? e3 : true;
};
function Oc() {
  return Oc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Oc.apply(null, arguments);
}
function zp(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wp(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zp(Object(r), true).forEach(function(n) {
      jC(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : zp(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function jC(e3, t, r) {
  return (t = RC(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function RC(e3) {
  var t = DC(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function DC(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var Up = { curveBasisClosed: o1, curveBasisOpen: u1, curveBasis: a1, curveBumpX: KP, curveBumpY: VP, curveLinearClosed: s1, curveLinear: fu, curveMonotoneX: l1, curveMonotoneY: c1, curveNatural: f1, curveStep: d1, curveStepAfter: p1, curveStepBefore: h1 }, Co = (e3) => Oe(e3.x) && Oe(e3.y), qp = (e3) => e3.base != null && Co(e3.base) && Co(e3), bi = (e3) => e3.x, wi = (e3) => e3.y, NC = (e3, t) => {
  if (typeof e3 == "function") return e3;
  var r = "curve".concat(oa(e3));
  if ((r === "curveMonotone" || r === "curveBump") && t) {
    var n = Up["".concat(r).concat(t === "vertical" ? "Y" : "X")];
    if (n) return n;
  }
  return Up[r] || fu;
}, Kp = { connectNulls: false, type: "linear" }, LC = (e3) => {
  var { type: t = Kp.type, points: r = [], baseLine: n, layout: i, connectNulls: a = Kp.connectNulls } = e3, o = NC(t, i), u = a ? r.filter(Co) : r;
  if (Array.isArray(n)) {
    var s, l = r.map((v, g) => Wp(Wp({}, v), {}, { base: n[g] }));
    i === "vertical" ? s = Aa().y(wi).x1(bi).x0((v) => v.base.x) : s = Aa().x(bi).y1(wi).y0((v) => v.base.y);
    var c = s.defined(qp).curve(o), f = a ? l.filter(qp) : l;
    return c(f);
  }
  var d;
  i === "vertical" && ue(n) ? d = Aa().y(wi).x1(bi).x0(n) : ue(n) ? d = Aa().x(bi).y1(wi).y0(n) : d = dy().x(bi).y(wi);
  var h = d.defined(Co).curve(o);
  return h(u);
}, Lb = (e3) => {
  var { className: t, points: r, path: n, pathRef: i } = e3, a = oi();
  if ((!r || !r.length) && !n) return null;
  var o = { type: e3.type, points: e3.points, baseLine: e3.baseLine, layout: e3.layout || a, connectNulls: e3.connectNulls }, u = r && r.length ? LC(o) : n;
  return p.createElement("path", Oc({}, xr(e3), vf(e3), { className: Ee("recharts-curve", t), d: u === null ? void 0 : u, ref: i }));
}, $C = ["x", "y", "top", "left", "width", "height", "className"];
function Pc() {
  return Pc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Pc.apply(null, arguments);
}
function Vp(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function FC(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vp(Object(r), true).forEach(function(n) {
      BC(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Vp(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function BC(e3, t, r) {
  return (t = zC(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function zC(e3) {
  var t = WC(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function WC(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function UC(e3, t) {
  if (e3 == null) return {};
  var r, n, i = qC(e3, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function qC(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var KC = (e3, t, r, n, i, a) => "M".concat(e3, ",").concat(i, "v").concat(n, "M").concat(a, ",").concat(t, "h").concat(r), VC = (e3) => {
  var { x: t = 0, y: r = 0, top: n = 0, left: i = 0, width: a = 0, height: o = 0, className: u } = e3, s = UC(e3, $C), l = FC({ x: t, y: r, top: n, left: i, width: a, height: o }, s);
  return !ue(t) || !ue(r) || !ue(a) || !ue(o) || !ue(n) || !ue(i) ? null : p.createElement("path", Pc({}, vt(l), { className: Ee("recharts-cross", u), d: KC(t, r, a, o, n, i) }));
};
function HC(e3, t, r, n) {
  var i = n / 2;
  return { stroke: "none", fill: "#ccc", x: e3 === "horizontal" ? t.x - i : r.left + 0.5, y: e3 === "horizontal" ? r.top + 0.5 : t.y - i, width: e3 === "horizontal" ? n : r.width - 1, height: e3 === "horizontal" ? r.height - 1 : n };
}
function Hp(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yp(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hp(Object(r), true).forEach(function(n) {
      YC(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Hp(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function YC(e3, t, r) {
  return (t = GC(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function GC(e3) {
  var t = XC(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function XC(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var ZC = (e3) => e3.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())), $b = (e3, t, r) => e3.map((n) => "".concat(ZC(n), " ").concat(t, "ms ").concat(r)).join(","), QC = (e3, t) => [Object.keys(e3), Object.keys(t)].reduce((r, n) => r.filter((i) => n.includes(i))), Gi = (e3, t) => Object.keys(t).reduce((r, n) => Yp(Yp({}, r), {}, { [n]: e3(n, t[n]) }), {});
function Gp(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function We(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gp(Object(r), true).forEach(function(n) {
      JC(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Gp(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function JC(e3, t, r) {
  return (t = eT(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function eT(e3) {
  var t = tT(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function tT(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var To = (e3, t, r) => e3 + (t - e3) * r, Sc = (e3) => {
  var { from: t, to: r } = e3;
  return t !== r;
}, Fb = (e3, t, r) => {
  var n = Gi((i, a) => {
    if (Sc(a)) {
      var [o, u] = e3(a.from, a.to, a.velocity);
      return We(We({}, a), {}, { from: o, velocity: u });
    }
    return a;
  }, t);
  return r < 1 ? Gi((i, a) => Sc(a) && n[i] != null ? We(We({}, a), {}, { velocity: To(a.velocity, n[i].velocity, r), from: To(a.from, n[i].from, r) }) : a, t) : Fb(e3, n, r - 1);
};
function rT(e3, t, r, n, i, a) {
  var o, u = n.reduce((d, h) => We(We({}, d), {}, { [h]: { from: e3[h], velocity: 0, to: t[h] } }), {}), s = () => Gi((d, h) => h.from, u), l = () => !Object.values(u).filter(Sc).length, c = null, f = (d) => {
    o || (o = d);
    var h = d - o, v = h / r.dt;
    u = Fb(r, u, v), i(We(We(We({}, e3), t), s())), o = d, l() || (c = a.setTimeout(f));
  };
  return () => (c = a.setTimeout(f), () => {
    var d;
    (d = c) === null || d === void 0 || d();
  });
}
function nT(e3, t, r, n, i, a, o) {
  var u = null, s = i.reduce((f, d) => {
    var h = e3[d], v = t[d];
    return h == null || v == null ? f : We(We({}, f), {}, { [d]: [h, v] });
  }, {}), l, c = (f) => {
    l || (l = f);
    var d = (f - l) / n, h = Gi((g, m) => To(...m, r(d)), s);
    if (a(We(We(We({}, e3), t), h)), d < 1) u = o.setTimeout(c);
    else {
      var v = Gi((g, m) => To(...m, r(1)), s);
      a(We(We(We({}, e3), t), v));
    }
  };
  return () => (u = o.setTimeout(c), () => {
    var f;
    (f = u) === null || f === void 0 || f();
  });
}
const iT = (e3, t, r, n, i, a) => {
  var o = QC(e3, t);
  return r == null ? () => (i(We(We({}, e3), t)), () => {
  }) : r.isStepper === true ? rT(e3, t, r, o, i, a) : nT(e3, t, r, n, o, i, a);
};
var Io = 1e-4, Bb = (e3, t) => [0, 3 * e3, 3 * t - 6 * e3, 3 * e3 - 3 * t + 1], zb = (e3, t) => e3.map((r, n) => r * t ** n).reduce((r, n) => r + n), Xp = (e3, t) => (r) => {
  var n = Bb(e3, t);
  return zb(n, r);
}, aT = (e3, t) => (r) => {
  var n = Bb(e3, t), i = [...n.map((a, o) => a * o).slice(1), 0];
  return zb(i, r);
}, oT = (e3) => {
  var t, r = e3.split("(");
  if (r.length !== 2 || r[0] !== "cubic-bezier") return null;
  var n = (t = r[1]) === null || t === void 0 || (t = t.split(")")[0]) === null || t === void 0 ? void 0 : t.split(",");
  if (n == null || n.length !== 4) return null;
  var i = n.map((a) => parseFloat(a));
  return [i[0], i[1], i[2], i[3]];
}, uT = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  if (r.length === 1) switch (r[0]) {
    case "linear":
      return [0, 0, 1, 1];
    case "ease":
      return [0.25, 0.1, 0.25, 1];
    case "ease-in":
      return [0.42, 0, 1, 1];
    case "ease-out":
      return [0.42, 0, 0.58, 1];
    case "ease-in-out":
      return [0, 0, 0.58, 1];
    default: {
      var i = oT(r[0]);
      if (i) return i;
    }
  }
  return r.length === 4 ? r : [0, 0, 1, 1];
}, sT = (e3, t, r, n) => {
  var i = Xp(e3, r), a = Xp(t, n), o = aT(e3, r), u = (l) => l > 1 ? 1 : l < 0 ? 0 : l, s = (l) => {
    for (var c = l > 1 ? 1 : l, f = c, d = 0; d < 8; ++d) {
      var h = i(f) - c, v = o(f);
      if (Math.abs(h - c) < Io || v < Io) return a(f);
      f = u(f - h / v);
    }
    return a(f);
  };
  return s.isStepper = false, s;
}, Zp = function() {
  return sT(...uT(...arguments));
}, lT = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, { stiff: r = 100, damping: n = 8, dt: i = 17 } = t, a = (o, u, s) => {
    var l = -(o - u) * r, c = s * n, f = s + (l - c) * i / 1e3, d = s * i / 1e3 + o;
    return Math.abs(d - u) < Io && Math.abs(f) < Io ? [u, 0] : [d, f];
  };
  return a.isStepper = true, a.dt = i, a;
}, cT = (e3) => {
  if (typeof e3 == "string") switch (e3) {
    case "ease":
    case "ease-in-out":
    case "ease-out":
    case "ease-in":
    case "linear":
      return Zp(e3);
    case "spring":
      return lT();
    default:
      if (e3.split("(")[0] === "cubic-bezier") return Zp(e3);
  }
  return typeof e3 == "function" ? e3 : null;
};
function fT(e3) {
  var t, r = () => null, n = false, i = null, a = (o) => {
    if (!n) {
      if (Array.isArray(o)) {
        if (!o.length) return;
        var u = o, [s, ...l] = u;
        if (typeof s == "number") {
          i = e3.setTimeout(a.bind(null, l), s);
          return;
        }
        a(s), i = e3.setTimeout(a.bind(null, l));
        return;
      }
      typeof o == "string" && (t = o, r(t)), typeof o == "object" && (t = o, r(t)), typeof o == "function" && o();
    }
  };
  return { stop: () => {
    n = true;
  }, start: (o) => {
    n = false, i && (i(), i = null), a(o);
  }, subscribe: (o) => (r = o, () => {
    r = () => null;
  }), getTimeoutController: () => e3 };
}
class dT {
  setTimeout(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = performance.now(), i = null, a = (o) => {
      o - n >= r ? t(o) : typeof requestAnimationFrame == "function" && (i = requestAnimationFrame(a));
    };
    return i = requestAnimationFrame(a), () => {
      i != null && cancelAnimationFrame(i);
    };
  }
}
function hT() {
  return fT(new dT());
}
var pT = p.createContext(hT);
function vT(e3, t) {
  var r = p.useContext(pT);
  return p.useMemo(() => t ?? r(e3), [e3, t, r]);
}
var mT = { begin: 0, duration: 1e3, easing: "ease", isActive: true, canBegin: true, onAnimationEnd: () => {
}, onAnimationStart: () => {
} }, Qp = { t: 0 }, pl = { t: 1 };
function Tf(e3) {
  var t = Tt(e3, mT), { isActive: r, canBegin: n, duration: i, easing: a, begin: o, onAnimationEnd: u, onAnimationStart: s, children: l } = t, c = Db(), f = r === "auto" ? !da.isSsr && !c : r, d = vT(t.animationId, t.animationManager), [h, v] = p.useState(f ? Qp : pl), g = p.useRef(null);
  return p.useEffect(() => {
    f || v(pl);
  }, [f]), p.useEffect(() => {
    if (!f || !n) return ai;
    var m = iT(Qp, pl, cT(a), i, v, d.getTimeoutController()), y = () => {
      g.current = m();
    };
    return d.start([s, o, y, i, u]), () => {
      d.stop(), g.current && g.current(), u();
    };
  }, [f, n, i, a, o, s, u, d]), l(h.t);
}
function If(e3) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", r = p.useRef(Wi(t)), n = p.useRef(e3);
  return n.current !== e3 && (r.current = Wi(t), n.current = e3), r.current;
}
var gT = ["radius"], yT = ["radius"], Jp, ev, tv, rv, nv, iv, av, ov, uv, sv;
function lv(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cv(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lv(Object(r), true).forEach(function(n) {
      bT(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : lv(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function bT(e3, t, r) {
  return (t = wT(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function wT(e3) {
  var t = xT(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function xT(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function _o() {
  return _o = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, _o.apply(null, arguments);
}
function fv(e3, t) {
  if (e3 == null) return {};
  var r, n, i = OT(e3, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function OT(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function Zt(e3, t) {
  return t || (t = e3.slice(0)), Object.freeze(Object.defineProperties(e3, { raw: { value: Object.freeze(t) } }));
}
var dv = (e3, t, r, n, i) => {
  var a = Kr(r), o = Kr(n), u = Math.min(Math.abs(a) / 2, Math.abs(o) / 2), s = o >= 0 ? 1 : -1, l = a >= 0 ? 1 : -1, c = o >= 0 && a >= 0 || o < 0 && a < 0 ? 1 : 0, f;
  if (u > 0 && Array.isArray(i)) {
    for (var d = [0, 0, 0, 0], h = 0, v = 4; h < v; h++) {
      var g, m = (g = i[h]) !== null && g !== void 0 ? g : 0;
      d[h] = m > u ? u : m;
    }
    f = De(Jp || (Jp = Zt(["M", ",", ""])), e3, t + s * d[0]), d[0] > 0 && (f += De(ev || (ev = Zt(["A ", ",", ",0,0,", ",", ",", ""])), d[0], d[0], c, e3 + l * d[0], t)), f += De(tv || (tv = Zt(["L ", ",", ""])), e3 + r - l * d[1], t), d[1] > 0 && (f += De(rv || (rv = Zt(["A ", ",", ",0,0,", `,
        `, ",", ""])), d[1], d[1], c, e3 + r, t + s * d[1])), f += De(nv || (nv = Zt(["L ", ",", ""])), e3 + r, t + n - s * d[2]), d[2] > 0 && (f += De(iv || (iv = Zt(["A ", ",", ",0,0,", `,
        `, ",", ""])), d[2], d[2], c, e3 + r - l * d[2], t + n)), f += De(av || (av = Zt(["L ", ",", ""])), e3 + l * d[3], t + n), d[3] > 0 && (f += De(ov || (ov = Zt(["A ", ",", ",0,0,", `,
        `, ",", ""])), d[3], d[3], c, e3, t + n - s * d[3])), f += "Z";
  } else if (u > 0 && i === +i && i > 0) {
    var y = Math.min(u, i);
    f = De(uv || (uv = Zt(["M ", ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", " Z"])), e3, t + s * y, y, y, c, e3 + l * y, t, e3 + r - l * y, t, y, y, c, e3 + r, t + s * y, e3 + r, t + n - s * y, y, y, c, e3 + r - l * y, t + n, e3 + l * y, t + n, y, y, c, e3, t + n - s * y);
  } else f = De(sv || (sv = Zt(["M ", ",", " h ", " v ", " h ", " Z"])), e3, t, r, n, -r);
  return f;
}, hv = { x: 0, y: 0, width: 0, height: 0, radius: 0, isAnimationActive: false, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, Wb = (e3) => {
  var t = Tt(e3, hv), r = p.useRef(null), [n, i] = p.useState(-1);
  p.useEffect(() => {
    if (r.current && r.current.getTotalLength) try {
      var B = r.current.getTotalLength();
      B && i(B);
    } catch {
    }
  }, []);
  var { x: a, y: o, width: u, height: s, radius: l, className: c } = t, { animationEasing: f, animationDuration: d, animationBegin: h, isAnimationActive: v, isUpdateAnimationActive: g } = t, m = p.useRef(u), y = p.useRef(s), x = p.useRef(a), b = p.useRef(o), w = p.useMemo(() => ({ x: a, y: o, width: u, height: s, radius: l }), [a, o, u, s, l]), O = If(w, "rectangle-");
  if (a !== +a || o !== +o || u !== +u || s !== +s || u === 0 || s === 0) return null;
  var P = Ee("recharts-rectangle", c);
  if (!g) {
    var S = vt(t), { radius: E } = S, N = fv(S, gT);
    return p.createElement("path", _o({}, N, { x: Kr(a), y: Kr(o), width: Kr(u), height: Kr(s), radius: typeof l == "number" ? l : void 0, className: P, d: dv(a, o, u, s, l) }));
  }
  var k = m.current, R = y.current, C = x.current, F = b.current, L = "0px ".concat(n === -1 ? 1 : n, "px"), M = "".concat(n, "px ").concat(n, "px"), $ = $b(["strokeDasharray"], d, typeof f == "string" ? f : hv.animationEasing);
  return p.createElement(Tf, { animationId: O, key: O, canBegin: n > 0, duration: d, easing: f, isActive: g, begin: h }, (B) => {
    var D = bt(k, u, B), K = bt(R, s, B), W = bt(C, a, B), fe = bt(F, o, B);
    r.current && (m.current = D, y.current = K, x.current = W, b.current = fe);
    var te;
    v ? B > 0 ? te = { transition: $, strokeDasharray: M } : te = { strokeDasharray: L } : te = { strokeDasharray: M };
    var ae = vt(t), { radius: re } = ae, X = fv(ae, yT);
    return p.createElement("path", _o({}, X, { radius: typeof l == "number" ? l : void 0, className: P, d: dv(W, fe, D, K, l), ref: r, style: cv(cv({}, te), t.style) }));
  });
};
function pv(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vv(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pv(Object(r), true).forEach(function(n) {
      PT(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : pv(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function PT(e3, t, r) {
  return (t = ST(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function ST(e3) {
  var t = ET(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ET(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var Mo = Math.PI / 180, AT = (e3) => e3 * 180 / Math.PI, it = (e3, t, r, n) => ({ x: e3 + Math.cos(-Mo * n) * r, y: t + Math.sin(-Mo * n) * r }), CT = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { top: 0, right: 0, bottom: 0, left: 0 };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, TT = (e3, t) => {
  var { x: r, y: n } = e3, { x: i, y: a } = t;
  return Math.sqrt((r - i) ** 2 + (n - a) ** 2);
}, IT = (e3, t) => {
  var { x: r, y: n } = e3, { cx: i, cy: a } = t, o = TT({ x: r, y: n }, { x: i, y: a });
  if (o <= 0) return { radius: o, angle: 0 };
  var u = (r - i) / o, s = Math.acos(u);
  return n > a && (s = 2 * Math.PI - s), { radius: o, angle: AT(s), angleInRadian: s };
}, _T = (e3) => {
  var { startAngle: t, endAngle: r } = e3, n = Math.floor(t / 360), i = Math.floor(r / 360), a = Math.min(n, i);
  return { startAngle: t - a * 360, endAngle: r - a * 360 };
}, MT = (e3, t) => {
  var { startAngle: r, endAngle: n } = t, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return e3 + o * 360;
}, kT = (e3, t) => {
  var { relativeX: r, relativeY: n } = e3, { radius: i, angle: a } = IT({ x: r, y: n }, t), { innerRadius: o, outerRadius: u } = t;
  if (i < o || i > u || i === 0) return null;
  var { startAngle: s, endAngle: l } = _T(t), c = a, f;
  if (s <= l) {
    for (; c > l; ) c -= 360;
    for (; c < s; ) c += 360;
    f = c >= s && c <= l;
  } else {
    for (; c > s; ) c -= 360;
    for (; c < l; ) c += 360;
    f = c >= l && c <= s;
  }
  return f ? vv(vv({}, t), {}, { radius: i, angle: MT(c, t) }) : null;
};
function Ub(e3) {
  var { cx: t, cy: r, radius: n, startAngle: i, endAngle: a } = e3, o = it(t, r, n, i), u = it(t, r, n, a);
  return { points: [o, u], cx: t, cy: r, radius: n, startAngle: i, endAngle: a };
}
var mv, gv, yv, bv, wv, xv, Ov;
function Ec() {
  return Ec = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Ec.apply(null, arguments);
}
function hn(e3, t) {
  return t || (t = e3.slice(0)), Object.freeze(Object.defineProperties(e3, { raw: { value: Object.freeze(t) } }));
}
var jT = (e3, t) => {
  var r = Kt(t - e3), n = Math.min(Math.abs(t - e3), 359.999);
  return r * n;
}, Ra = (e3) => {
  var { cx: t, cy: r, radius: n, angle: i, sign: a, isExternal: o, cornerRadius: u, cornerIsExternal: s } = e3, l = u * (o ? 1 : -1) + n, c = Math.asin(u / l) / Mo, f = s ? i : i + a * c, d = it(t, r, l, f), h = it(t, r, n, f), v = s ? i - a * c : i, g = it(t, r, l * Math.cos(c * Mo), v);
  return { center: d, circleTangency: h, lineTangency: g, theta: c };
}, qb = (e3) => {
  var { cx: t, cy: r, innerRadius: n, outerRadius: i, startAngle: a, endAngle: o } = e3, u = jT(a, o), s = a + u, l = it(t, r, i, a), c = it(t, r, i, s), f = De(mv || (mv = hn(["M ", ",", `
    A `, ",", `,0,
    `, ",", `,
    `, ",", `
  `])), l.x, l.y, i, i, +(Math.abs(u) > 180), +(a > s), c.x, c.y);
  if (n > 0) {
    var d = it(t, r, n, a), h = it(t, r, n, s);
    f += De(gv || (gv = hn(["L ", ",", `
            A `, ",", `,0,
            `, ",", `,
            `, ",", " Z"])), h.x, h.y, n, n, +(Math.abs(u) > 180), +(a <= s), d.x, d.y);
  } else f += De(yv || (yv = hn(["L ", ",", " Z"])), t, r);
  return f;
}, RT = (e3) => {
  var { cx: t, cy: r, innerRadius: n, outerRadius: i, cornerRadius: a, forceCornerRadius: o, cornerIsExternal: u, startAngle: s, endAngle: l } = e3, c = Kt(l - s), { circleTangency: f, lineTangency: d, theta: h } = Ra({ cx: t, cy: r, radius: i, angle: s, sign: c, cornerRadius: a, cornerIsExternal: u }), { circleTangency: v, lineTangency: g, theta: m } = Ra({ cx: t, cy: r, radius: i, angle: l, sign: -c, cornerRadius: a, cornerIsExternal: u }), y = u ? Math.abs(s - l) : Math.abs(s - l) - h - m;
  if (y < 0) return o ? De(bv || (bv = hn(["M ", ",", `
        a`, ",", ",0,0,1,", `,0
        a`, ",", ",0,0,1,", `,0
      `])), d.x, d.y, a, a, a * 2, a, a, -a * 2) : qb({ cx: t, cy: r, innerRadius: n, outerRadius: i, startAngle: s, endAngle: l });
  var x = De(wv || (wv = hn(["M ", ",", `
    A`, ",", ",0,0,", ",", ",", `
    A`, ",", ",0,", ",", ",", ",", `
    A`, ",", ",0,0,", ",", ",", `
  `])), d.x, d.y, a, a, +(c < 0), f.x, f.y, i, i, +(y > 180), +(c < 0), v.x, v.y, a, a, +(c < 0), g.x, g.y);
  if (n > 0) {
    var { circleTangency: b, lineTangency: w, theta: O } = Ra({ cx: t, cy: r, radius: n, angle: s, sign: c, isExternal: true, cornerRadius: a, cornerIsExternal: u }), { circleTangency: P, lineTangency: S, theta: E } = Ra({ cx: t, cy: r, radius: n, angle: l, sign: -c, isExternal: true, cornerRadius: a, cornerIsExternal: u }), N = u ? Math.abs(s - l) : Math.abs(s - l) - O - E;
    if (N < 0 && a === 0) return "".concat(x, "L").concat(t, ",").concat(r, "Z");
    x += De(xv || (xv = hn(["L", ",", `
      A`, ",", ",0,0,", ",", ",", `
      A`, ",", ",0,", ",", ",", ",", `
      A`, ",", ",0,0,", ",", ",", "Z"])), S.x, S.y, a, a, +(c < 0), P.x, P.y, n, n, +(N > 180), +(c > 0), b.x, b.y, a, a, +(c < 0), w.x, w.y);
  } else x += De(Ov || (Ov = hn(["L", ",", "Z"])), t, r);
  return x;
}, DT = { cx: 0, cy: 0, innerRadius: 0, outerRadius: 0, startAngle: 0, endAngle: 0, cornerRadius: 0, forceCornerRadius: false, cornerIsExternal: false }, Kb = (e3) => {
  var t = Tt(e3, DT), { cx: r, cy: n, innerRadius: i, outerRadius: a, cornerRadius: o, forceCornerRadius: u, cornerIsExternal: s, startAngle: l, endAngle: c, className: f } = t;
  if (a < i || l === c) return null;
  var d = Ee("recharts-sector", f), h = a - i, v = Zr(o, h, 0, true), g;
  return v > 0 && Math.abs(l - c) < 360 ? g = RT({ cx: r, cy: n, innerRadius: i, outerRadius: a, cornerRadius: Math.min(v, h / 2), forceCornerRadius: u, cornerIsExternal: s, startAngle: l, endAngle: c }) : g = qb({ cx: r, cy: n, innerRadius: i, outerRadius: a, startAngle: l, endAngle: c }), p.createElement("path", Ec({}, vt(t), { className: d, d: g }));
};
function NT(e3, t, r) {
  if (e3 === "horizontal") return [{ x: t.x, y: r.top }, { x: t.x, y: r.top + r.height }];
  if (e3 === "vertical") return [{ x: r.left, y: t.y }, { x: r.left + r.width, y: t.y }];
  if (Ty(t)) {
    if (e3 === "centric") {
      var { cx: n, cy: i, innerRadius: a, outerRadius: o, angle: u } = t, s = it(n, i, a, u), l = it(n, i, o, u);
      return [{ x: s.x, y: s.y }, { x: l.x, y: l.y }];
    }
    return Ub(t);
  }
}
var vl = {}, ml = {}, gl = {}, Pv;
function LT() {
  return Pv || (Pv = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = zy();
    function r(n) {
      return t.isSymbol(n) ? NaN : Number(n);
    }
    e3.toNumber = r;
  })(gl)), gl;
}
var Sv;
function $T() {
  return Sv || (Sv = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = LT();
    function r(n) {
      return n ? (n = t.toNumber(n), n === 1 / 0 || n === -1 / 0 ? (n < 0 ? -1 : 1) * Number.MAX_VALUE : n === n ? n : 0) : n === 0 ? n : 0;
    }
    e3.toFinite = r;
  })(ml)), ml;
}
var Ev;
function FT() {
  return Ev || (Ev = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    const t = Wy(), r = $T();
    function n(i, a, o) {
      o && typeof o != "number" && t.isIterateeCall(i, a, o) && (a = o = void 0), i = r.toFinite(i), a === void 0 ? (a = i, i = 0) : a = r.toFinite(a), o = o === void 0 ? i < a ? 1 : -1 : r.toFinite(o);
      const u = Math.max(Math.ceil((a - i) / (o || 1)), 0), s = new Array(u);
      for (let l = 0; l < u; l++) s[l] = i, i += o;
      return s;
    }
    e3.range = n;
  })(vl)), vl;
}
var yl, Av;
function BT() {
  return Av || (Av = 1, yl = FT().range), yl;
}
var zT = BT();
const Vb = Tn(zT);
var fr = (e3) => e3.chartData, Hb = T([fr], (e3) => {
  var t = e3.chartData != null ? e3.chartData.length - 1 : 0;
  return { chartData: e3.chartData, computedData: e3.computedData, dataEndIndex: t, dataStartIndex: 0 };
}), ha = (e3, t, r, n) => n ? Hb(e3) : fr(e3), WT = T([ha], (e3) => {
  var { chartData: t, dataStartIndex: r, dataEndIndex: n } = e3;
  return t != null ? t.slice(r, n + 1) : [];
});
T([Hb], (e3) => {
  var { chartData: t, dataStartIndex: r, dataEndIndex: n } = e3;
  return t != null ? t.slice(r, n + 1) : [];
});
var UT = T([fr], (e3) => {
  var { chartData: t, dataStartIndex: r, dataEndIndex: n } = e3;
  return t != null ? t.slice(r, n + 1) : [];
});
function or(e3) {
  if (Array.isArray(e3) && e3.length === 2) {
    var [t, r] = e3;
    if (Oe(t) && Oe(r)) return true;
  }
  return false;
}
function Cv(e3, t, r) {
  return r ? e3 : [Math.min(e3[0], t[0]), Math.max(e3[1], t[1])];
}
function Yb(e3, t) {
  if (t && typeof e3 != "function" && Array.isArray(e3) && e3.length === 2) {
    var [r, n] = e3, i, a;
    if (Oe(r)) i = r;
    else if (typeof r == "function") return;
    if (Oe(n)) a = n;
    else if (typeof n == "function") return;
    var o = [i, a];
    if (or(o)) return o;
  }
}
function qT(e3, t, r) {
  if (!(!r && t == null)) {
    if (typeof e3 == "function" && t != null) try {
      var n = e3(t, r);
      if (or(n)) return Cv(n, t, r);
    } catch {
    }
    if (Array.isArray(e3) && e3.length === 2) {
      var [i, a] = e3, o, u;
      if (i === "auto") t != null && (o = Math.min(...t));
      else if (ue(i)) o = i;
      else if (typeof i == "function") try {
        t != null && (o = i(t == null ? void 0 : t[0]));
      } catch {
      }
      else if (typeof i == "string" && gp.test(i)) {
        var s = gp.exec(i);
        if (s == null || s[1] == null || t == null) o = void 0;
        else {
          var l = +s[1];
          o = t[0] - l;
        }
      } else o = t == null ? void 0 : t[0];
      if (a === "auto") t != null && (u = Math.max(...t));
      else if (ue(a)) u = a;
      else if (typeof a == "function") try {
        t != null && (u = a(t == null ? void 0 : t[1]));
      } catch {
      }
      else if (typeof a == "string" && yp.test(a)) {
        var c = yp.exec(a);
        if (c == null || c[1] == null || t == null) u = void 0;
        else {
          var f = +c[1];
          u = t[1] + f;
        }
      } else u = t == null ? void 0 : t[1];
      var d = [o, u];
      if (or(d)) return t == null ? d : Cv(d, t, r);
    }
  }
}
var ui = 1e9, KT = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" }, Mf, Me = true, Lt = "[DecimalError] ", gn = Lt + "Invalid argument: ", _f = Lt + "Exponent out of range: ", si = Math.floor, fn = Math.pow, VT = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Ot, Ye = 1e7, Te = 7, Gb = 9007199254740991, ko = si(Gb / Te), Q = {};
Q.absoluteValue = Q.abs = function() {
  var e3 = new this.constructor(this);
  return e3.s && (e3.s = 1), e3;
};
Q.comparedTo = Q.cmp = function(e3) {
  var t, r, n, i, a = this;
  if (e3 = new a.constructor(e3), a.s !== e3.s) return a.s || -e3.s;
  if (a.e !== e3.e) return a.e > e3.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e3.d.length, t = 0, r = n < i ? n : i; t < r; ++t) if (a.d[t] !== e3.d[t]) return a.d[t] > e3.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
Q.decimalPlaces = Q.dp = function() {
  var e3 = this, t = e3.d.length - 1, r = (t - e3.e) * Te;
  if (t = e3.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
Q.dividedBy = Q.div = function(e3) {
  return br(this, new this.constructor(e3));
};
Q.dividedToIntegerBy = Q.idiv = function(e3) {
  var t = this, r = t.constructor;
  return Se(br(t, new r(e3), 0, 1), r.precision);
};
Q.equals = Q.eq = function(e3) {
  return !this.cmp(e3);
};
Q.exponent = function() {
  return Ne(this);
};
Q.greaterThan = Q.gt = function(e3) {
  return this.cmp(e3) > 0;
};
Q.greaterThanOrEqualTo = Q.gte = function(e3) {
  return this.cmp(e3) >= 0;
};
Q.isInteger = Q.isint = function() {
  return this.e > this.d.length - 2;
};
Q.isNegative = Q.isneg = function() {
  return this.s < 0;
};
Q.isPositive = Q.ispos = function() {
  return this.s > 0;
};
Q.isZero = function() {
  return this.s === 0;
};
Q.lessThan = Q.lt = function(e3) {
  return this.cmp(e3) < 0;
};
Q.lessThanOrEqualTo = Q.lte = function(e3) {
  return this.cmp(e3) < 1;
};
Q.logarithm = Q.log = function(e3) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e3 === void 0) e3 = new n(10);
  else if (e3 = new n(e3), e3.s < 1 || e3.eq(Ot)) throw Error(Lt + "NaN");
  if (r.s < 1) throw Error(Lt + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Ot) ? new n(0) : (Me = false, t = br(Xi(r, a), Xi(e3, a), a), Me = true, Se(t, i));
};
Q.minus = Q.sub = function(e3) {
  var t = this;
  return e3 = new t.constructor(e3), t.s == e3.s ? Qb(t, e3) : Xb(t, (e3.s = -e3.s, e3));
};
Q.modulo = Q.mod = function(e3) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e3 = new n(e3), !e3.s) throw Error(Lt + "NaN");
  return r.s ? (Me = false, t = br(r, e3, 0, 1).times(e3), Me = true, r.minus(t)) : Se(new n(r), i);
};
Q.naturalExponential = Q.exp = function() {
  return Zb(this);
};
Q.naturalLogarithm = Q.ln = function() {
  return Xi(this);
};
Q.negated = Q.neg = function() {
  var e3 = new this.constructor(this);
  return e3.s = -e3.s || 0, e3;
};
Q.plus = Q.add = function(e3) {
  var t = this;
  return e3 = new t.constructor(e3), t.s == e3.s ? Xb(t, e3) : Qb(t, (e3.s = -e3.s, e3));
};
Q.precision = Q.sd = function(e3) {
  var t, r, n, i = this;
  if (e3 !== void 0 && e3 !== !!e3 && e3 !== 1 && e3 !== 0) throw Error(gn + e3);
  if (t = Ne(i) + 1, n = i.d.length - 1, r = n * Te + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e3 && t > r ? t : r;
};
Q.squareRoot = Q.sqrt = function() {
  var e3, t, r, n, i, a, o, u = this, s = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new s(0);
    throw Error(Lt + "NaN");
  }
  for (e3 = Ne(u), Me = false, i = Math.sqrt(+u), i == 0 || i == 1 / 0 ? (t = ar(u.d), (t.length + e3) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e3 = si((e3 + 1) / 2) - (e3 < 0 || e3 % 2), i == 1 / 0 ? t = "5e" + e3 : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e3), n = new s(t)) : n = new s(i.toString()), r = s.precision, i = o = r + 3; ; ) if (a = n, n = a.plus(br(u, a, o + 2)).times(0.5), ar(a.d).slice(0, o) === (t = ar(n.d)).slice(0, o)) {
    if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
      if (Se(a, r + 1, 0), a.times(a).eq(u)) {
        n = a;
        break;
      }
    } else if (t != "9999") break;
    o += 4;
  }
  return Me = true, Se(n, r);
};
Q.times = Q.mul = function(e3) {
  var t, r, n, i, a, o, u, s, l, c = this, f = c.constructor, d = c.d, h = (e3 = new f(e3)).d;
  if (!c.s || !e3.s) return new f(0);
  for (e3.s *= c.s, r = c.e + e3.e, s = d.length, l = h.length, s < l && (a = d, d = h, h = a, o = s, s = l, l = o), a = [], o = s + l, n = o; n--; ) a.push(0);
  for (n = l; --n >= 0; ) {
    for (t = 0, i = s + n; i > n; ) u = a[i] + h[n] * d[i - n - 1] + t, a[i--] = u % Ye | 0, t = u / Ye | 0;
    a[i] = (a[i] + t) % Ye | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e3.d = a, e3.e = r, Me ? Se(e3, f.precision) : e3;
};
Q.toDecimalPlaces = Q.todp = function(e3, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e3 === void 0 ? r : (lr(e3, 0, ui), t === void 0 ? t = n.rounding : lr(t, 0, 8), Se(r, e3 + Ne(r) + 1, t));
};
Q.toExponential = function(e3, t) {
  var r, n = this, i = n.constructor;
  return e3 === void 0 ? r = En(n, true) : (lr(e3, 0, ui), t === void 0 ? t = i.rounding : lr(t, 0, 8), n = Se(new i(n), e3 + 1, t), r = En(n, true, e3 + 1)), r;
};
Q.toFixed = function(e3, t) {
  var r, n, i = this, a = i.constructor;
  return e3 === void 0 ? En(i) : (lr(e3, 0, ui), t === void 0 ? t = a.rounding : lr(t, 0, 8), n = Se(new a(i), e3 + Ne(i) + 1, t), r = En(n.abs(), false, e3 + Ne(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
Q.toInteger = Q.toint = function() {
  var e3 = this, t = e3.constructor;
  return Se(new t(e3), Ne(e3) + 1, t.rounding);
};
Q.toNumber = function() {
  return +this;
};
Q.toPower = Q.pow = function(e3) {
  var t, r, n, i, a, o, u = this, s = u.constructor, l = 12, c = +(e3 = new s(e3));
  if (!e3.s) return new s(Ot);
  if (u = new s(u), !u.s) {
    if (e3.s < 1) throw Error(Lt + "Infinity");
    return u;
  }
  if (u.eq(Ot)) return u;
  if (n = s.precision, e3.eq(Ot)) return Se(u, n);
  if (t = e3.e, r = e3.d.length - 1, o = t >= r, a = u.s, o) {
    if ((r = c < 0 ? -c : c) <= Gb) {
      for (i = new s(Ot), t = Math.ceil(n / Te + 4), Me = false; r % 2 && (i = i.times(u), Iv(i.d, t)), r = si(r / 2), r !== 0; ) u = u.times(u), Iv(u.d, t);
      return Me = true, e3.s < 0 ? new s(Ot).div(i) : Se(i, n);
    }
  } else if (a < 0) throw Error(Lt + "NaN");
  return a = a < 0 && e3.d[Math.max(t, r)] & 1 ? -1 : 1, u.s = 1, Me = false, i = e3.times(Xi(u, n + l)), Me = true, i = Zb(i), i.s = a, i;
};
Q.toPrecision = function(e3, t) {
  var r, n, i = this, a = i.constructor;
  return e3 === void 0 ? (r = Ne(i), n = En(i, r <= a.toExpNeg || r >= a.toExpPos)) : (lr(e3, 1, ui), t === void 0 ? t = a.rounding : lr(t, 0, 8), i = Se(new a(i), e3, t), r = Ne(i), n = En(i, e3 <= r || r <= a.toExpNeg, e3)), n;
};
Q.toSignificantDigits = Q.tosd = function(e3, t) {
  var r = this, n = r.constructor;
  return e3 === void 0 ? (e3 = n.precision, t = n.rounding) : (lr(e3, 1, ui), t === void 0 ? t = n.rounding : lr(t, 0, 8)), Se(new n(r), e3, t);
};
Q.toString = Q.valueOf = Q.val = Q.toJSON = Q[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e3 = this, t = Ne(e3), r = e3.constructor;
  return En(e3, t <= r.toExpNeg || t >= r.toExpPos);
};
function Xb(e3, t) {
  var r, n, i, a, o, u, s, l, c = e3.constructor, f = c.precision;
  if (!e3.s || !t.s) return t.s || (t = new c(e3)), Me ? Se(t, f) : t;
  if (s = e3.d, l = t.d, o = e3.e, i = t.e, s = s.slice(), a = o - i, a) {
    for (a < 0 ? (n = s, a = -a, u = l.length) : (n = l, i = o, u = s.length), o = Math.ceil(f / Te), u = o > u ? o + 1 : u + 1, a > u && (a = u, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (u = s.length, a = l.length, u - a < 0 && (a = u, n = l, l = s, s = n), r = 0; a; ) r = (s[--a] = s[a] + l[a] + r) / Ye | 0, s[a] %= Ye;
  for (r && (s.unshift(r), ++i), u = s.length; s[--u] == 0; ) s.pop();
  return t.d = s, t.e = i, Me ? Se(t, f) : t;
}
function lr(e3, t, r) {
  if (e3 !== ~~e3 || e3 < t || e3 > r) throw Error(gn + e3);
}
function ar(e3) {
  var t, r, n, i = e3.length - 1, a = "", o = e3[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++) n = e3[t] + "", r = Te - n.length, r && (a += zr(r)), a += n;
    o = e3[t], n = o + "", r = Te - n.length, r && (a += zr(r));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var br = /* @__PURE__ */ (function() {
  function e3(n, i) {
    var a, o = 0, u = n.length;
    for (n = n.slice(); u--; ) a = n[u] * i + o, n[u] = a % Ye | 0, o = a / Ye | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var u, s;
    if (a != o) s = a > o ? 1 : -1;
    else for (u = s = 0; u < a; u++) if (n[u] != i[u]) {
      s = n[u] > i[u] ? 1 : -1;
      break;
    }
    return s;
  }
  function r(n, i, a) {
    for (var o = 0; a--; ) n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * Ye + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var u, s, l, c, f, d, h, v, g, m, y, x, b, w, O, P, S, E, N = n.constructor, k = n.s == i.s ? 1 : -1, R = n.d, C = i.d;
    if (!n.s) return new N(n);
    if (!i.s) throw Error(Lt + "Division by zero");
    for (s = n.e - i.e, S = C.length, O = R.length, h = new N(k), v = h.d = [], l = 0; C[l] == (R[l] || 0); ) ++l;
    if (C[l] > (R[l] || 0) && --s, a == null ? x = a = N.precision : o ? x = a + (Ne(n) - Ne(i)) + 1 : x = a, x < 0) return new N(0);
    if (x = x / Te + 2 | 0, l = 0, S == 1) for (c = 0, C = C[0], x++; (l < O || c) && x--; l++) b = c * Ye + (R[l] || 0), v[l] = b / C | 0, c = b % C | 0;
    else {
      for (c = Ye / (C[0] + 1) | 0, c > 1 && (C = e3(C, c), R = e3(R, c), S = C.length, O = R.length), w = S, g = R.slice(0, S), m = g.length; m < S; ) g[m++] = 0;
      E = C.slice(), E.unshift(0), P = C[0], C[1] >= Ye / 2 && ++P;
      do
        c = 0, u = t(C, g, S, m), u < 0 ? (y = g[0], S != m && (y = y * Ye + (g[1] || 0)), c = y / P | 0, c > 1 ? (c >= Ye && (c = Ye - 1), f = e3(C, c), d = f.length, m = g.length, u = t(f, g, d, m), u == 1 && (c--, r(f, S < d ? E : C, d))) : (c == 0 && (u = c = 1), f = C.slice()), d = f.length, d < m && f.unshift(0), r(g, f, m), u == -1 && (m = g.length, u = t(C, g, S, m), u < 1 && (c++, r(g, S < m ? E : C, m))), m = g.length) : u === 0 && (c++, g = [0]), v[l++] = c, u && g[0] ? g[m++] = R[w] || 0 : (g = [R[w]], m = 1);
      while ((w++ < O || g[0] !== void 0) && x--);
    }
    return v[0] || v.shift(), h.e = s, Se(h, o ? a + Ne(h) + 1 : a);
  };
})();
function Zb(e3, t) {
  var r, n, i, a, o, u, s = 0, l = 0, c = e3.constructor, f = c.precision;
  if (Ne(e3) > 16) throw Error(_f + Ne(e3));
  if (!e3.s) return new c(Ot);
  for (Me = false, u = f, o = new c(0.03125); e3.abs().gte(0.1); ) e3 = e3.times(o), l += 5;
  for (n = Math.log(fn(2, l)) / Math.LN10 * 2 + 5 | 0, u += n, r = i = a = new c(Ot), c.precision = u; ; ) {
    if (i = Se(i.times(e3), u), r = r.times(++s), o = a.plus(br(i, r, u)), ar(o.d).slice(0, u) === ar(a.d).slice(0, u)) {
      for (; l--; ) a = Se(a.times(a), u);
      return c.precision = f, t == null ? (Me = true, Se(a, f)) : a;
    }
    a = o;
  }
}
function Ne(e3) {
  for (var t = e3.e * Te, r = e3.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function bl(e3, t, r) {
  if (t > e3.LN10.sd()) throw Me = true, r && (e3.precision = r), Error(Lt + "LN10 precision limit exceeded");
  return Se(new e3(e3.LN10), t);
}
function zr(e3) {
  for (var t = ""; e3--; ) t += "0";
  return t;
}
function Xi(e3, t) {
  var r, n, i, a, o, u, s, l, c, f = 1, d = 10, h = e3, v = h.d, g = h.constructor, m = g.precision;
  if (h.s < 1) throw Error(Lt + (h.s ? "NaN" : "-Infinity"));
  if (h.eq(Ot)) return new g(0);
  if (t == null ? (Me = false, l = m) : l = t, h.eq(10)) return t == null && (Me = true), bl(g, l);
  if (l += d, g.precision = l, r = ar(v), n = r.charAt(0), a = Ne(h), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; ) h = h.times(e3), r = ar(h.d), n = r.charAt(0), f++;
    a = Ne(h), n > 1 ? (h = new g("0." + r), a++) : h = new g(n + "." + r.slice(1));
  } else return s = bl(g, l + 2, m).times(a + ""), h = Xi(new g(n + "." + r.slice(1)), l - d).plus(s), g.precision = m, t == null ? (Me = true, Se(h, m)) : h;
  for (u = o = h = br(h.minus(Ot), h.plus(Ot), l), c = Se(h.times(h), l), i = 3; ; ) {
    if (o = Se(o.times(c), l), s = u.plus(br(o, new g(i), l)), ar(s.d).slice(0, l) === ar(u.d).slice(0, l)) return u = u.times(2), a !== 0 && (u = u.plus(bl(g, l + 2, m).times(a + ""))), u = br(u, new g(f), l), g.precision = m, t == null ? (Me = true, Se(u, m)) : u;
    u = s, i += 2;
  }
}
function Tv(e3, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e3.e = si(r / Te), e3.d = [], n = (r + 1) % Te, r < 0 && (n += Te), n < i) {
      for (n && e3.d.push(+t.slice(0, n)), i -= Te; n < i; ) e3.d.push(+t.slice(n, n += Te));
      t = t.slice(n), n = Te - t.length;
    } else n -= i;
    for (; n--; ) t += "0";
    if (e3.d.push(+t), Me && (e3.e > ko || e3.e < -ko)) throw Error(_f + r);
  } else e3.s = 0, e3.e = 0, e3.d = [0];
  return e3;
}
function Se(e3, t, r) {
  var n, i, a, o, u, s, l, c, f = e3.d;
  for (o = 1, a = f[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0) n += Te, i = t, l = f[c = 0];
  else {
    if (c = Math.ceil((n + 1) / Te), a = f.length, c >= a) return e3;
    for (l = a = f[c], o = 1; a >= 10; a /= 10) o++;
    n %= Te, i = n - Te + o;
  }
  if (r !== void 0 && (a = fn(10, o - i - 1), u = l / a % 10 | 0, s = t < 0 || f[c + 1] !== void 0 || l % a, s = r < 4 ? (u || s) && (r == 0 || r == (e3.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || s || r == 6 && (n > 0 ? i > 0 ? l / fn(10, o - i) : 0 : f[c - 1]) % 10 & 1 || r == (e3.s < 0 ? 8 : 7))), t < 1 || !f[0]) return s ? (a = Ne(e3), f.length = 1, t = t - a - 1, f[0] = fn(10, (Te - t % Te) % Te), e3.e = si(-t / Te) || 0) : (f.length = 1, f[0] = e3.e = e3.s = 0), e3;
  if (n == 0 ? (f.length = c, a = 1, c--) : (f.length = c + 1, a = fn(10, Te - n), f[c] = i > 0 ? (l / fn(10, o - i) % fn(10, i) | 0) * a : 0), s) for (; ; ) if (c == 0) {
    (f[0] += a) == Ye && (f[0] = 1, ++e3.e);
    break;
  } else {
    if (f[c] += a, f[c] != Ye) break;
    f[c--] = 0, a = 1;
  }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (Me && (e3.e > ko || e3.e < -ko)) throw Error(_f + Ne(e3));
  return e3;
}
function Qb(e3, t) {
  var r, n, i, a, o, u, s, l, c, f, d = e3.constructor, h = d.precision;
  if (!e3.s || !t.s) return t.s ? t.s = -t.s : t = new d(e3), Me ? Se(t, h) : t;
  if (s = e3.d, f = t.d, n = t.e, l = e3.e, s = s.slice(), o = l - n, o) {
    for (c = o < 0, c ? (r = s, o = -o, u = f.length) : (r = f, n = l, u = s.length), i = Math.max(Math.ceil(h / Te), u) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = s.length, u = f.length, c = i < u, c && (u = i), i = 0; i < u; i++) if (s[i] != f[i]) {
      c = s[i] < f[i];
      break;
    }
    o = 0;
  }
  for (c && (r = s, s = f, f = r, t.s = -t.s), u = s.length, i = f.length - u; i > 0; --i) s[u++] = 0;
  for (i = f.length; i > o; ) {
    if (s[--i] < f[i]) {
      for (a = i; a && s[--a] === 0; ) s[a] = Ye - 1;
      --s[a], s[i] += Ye;
    }
    s[i] -= f[i];
  }
  for (; s[--u] === 0; ) s.pop();
  for (; s[0] === 0; s.shift()) --n;
  return s[0] ? (t.d = s, t.e = n, Me ? Se(t, h) : t) : new d(0);
}
function En(e3, t, r) {
  var n, i = Ne(e3), a = ar(e3.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + zr(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + zr(-i - 1) + a, r && (n = r - o) > 0 && (a += zr(n))) : i >= o ? (a += zr(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + zr(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += zr(n))), e3.s < 0 ? "-" + a : a;
}
function Iv(e3, t) {
  if (e3.length > t) return e3.length = t, true;
}
function Jb(e3) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0) throw Error(gn + a);
      if (a > 0) o.s = 1;
      else if (a < 0) a = -a, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        o.e = 0, o.d = [a];
        return;
      }
      return Tv(o, a.toString());
    } else if (typeof a != "string") throw Error(gn + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, VT.test(a)) Tv(o, a);
    else throw Error(gn + a);
  }
  if (i.prototype = Q, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = Jb, i.config = i.set = HT, e3 === void 0 && (e3 = {}), e3) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e3.hasOwnProperty(r = n[t++]) || (e3[r] = this[r]);
  return i.config(e3), i;
}
function HT(e3) {
  if (!e3 || typeof e3 != "object") throw Error(Lt + "Object expected");
  var t, r, n, i = ["precision", 1, ui, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
  for (t = 0; t < i.length; t += 3) if ((n = e3[r = i[t]]) !== void 0) if (si(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
  else throw Error(gn + r + ": " + n);
  if ((n = e3[r = "LN10"]) !== void 0) if (n == Math.LN10) this[r] = new this(n);
  else throw Error(gn + r + ": " + n);
  return this;
}
var Mf = Jb(KT);
Ot = new Mf(1);
const me = Mf;
function e0(e3) {
  var t;
  return e3 === 0 ? t = 1 : t = Math.floor(new me(e3).abs().log(10).toNumber()) + 1, t;
}
function t0(e3, t, r) {
  for (var n = new me(e3), i = 0, a = []; n.lt(t) && i < 1e5; ) a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var r0 = (e3) => {
  var [t, r] = e3, [n, i] = [t, r];
  return t > r && ([n, i] = [r, t]), [n, i];
}, kf = (e3, t, r) => {
  if (e3.lte(0)) return new me(0);
  var n = e0(e3.toNumber()), i = new me(10).pow(n), a = e3.div(i), o = n !== 1 ? 0.05 : 0.1, u = new me(Math.ceil(a.div(o).toNumber())).add(r).mul(o), s = u.mul(i);
  return t ? new me(s.toNumber()) : new me(Math.ceil(s.toNumber()));
}, n0 = (e3, t, r) => {
  var n;
  if (e3.lte(0)) return new me(0);
  var i = [1, 2, 2.5, 5], a = e3.toNumber(), o = Math.floor(new me(a).abs().log(10).toNumber()), u = new me(10).pow(o), s = e3.div(u).toNumber(), l = i.findIndex((h) => h >= s - 1e-10);
  if (l === -1 && (u = u.mul(10), l = 0), l += r, l >= i.length) {
    var c = Math.floor(l / i.length);
    l %= i.length, u = u.mul(new me(10).pow(c));
  }
  var f = (n = i[l]) !== null && n !== void 0 ? n : 1, d = new me(f).mul(u);
  return t ? d : new me(Math.ceil(d.toNumber()));
}, YT = (e3, t, r) => {
  var n = new me(1), i = new me(e3);
  if (!i.isint() && r) {
    var a = Math.abs(e3);
    a < 1 ? (n = new me(10).pow(e0(e3) - 1), i = new me(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new me(Math.floor(e3)));
  } else e3 === 0 ? i = new me(Math.floor((t - 1) / 2)) : r || (i = new me(Math.floor(e3)));
  for (var o = Math.floor((t - 1) / 2), u = [], s = 0; s < t; s++) u.push(i.add(new me(s - o).mul(n)).toNumber());
  return u;
}, i0 = function(t, r, n, i) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : kf;
  if (!Number.isFinite((r - t) / (n - 1))) return { step: new me(0), tickMin: new me(0), tickMax: new me(0) };
  var u = o(new me(r).sub(t).div(n - 1), i, a), s;
  t <= 0 && r >= 0 ? s = new me(0) : (s = new me(t).add(r).div(2), s = s.sub(new me(s).mod(u)));
  var l = Math.ceil(s.sub(t).div(u).toNumber()), c = Math.ceil(new me(r).sub(s).div(u).toNumber()), f = l + c + 1;
  return f > n ? i0(t, r, n, i, a + 1, o) : (f < n && (c = r > 0 ? c + (n - f) : c, l = r > 0 ? l : l + (n - f)), { step: u, tickMin: s.sub(new me(l).mul(u)), tickMax: s.add(new me(c).mul(u)) });
}, _v = function(t) {
  var [r, n] = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", u = Math.max(i, 2), [s, l] = r0([r, n]);
  if (s === -1 / 0 || l === 1 / 0) {
    var c = l === 1 / 0 ? [s, ...Array(i - 1).fill(1 / 0)] : [...Array(i - 1).fill(-1 / 0), l];
    return r > n ? c.reverse() : c;
  }
  if (s === l) return YT(s, i, a);
  var f = o === "snap125" ? n0 : kf, { step: d, tickMin: h, tickMax: v } = i0(s, l, u, a, 0, f), g = t0(h, v.add(new me(0.1).mul(d)), d);
  return r > n ? g.reverse() : g;
}, Mv = function(t, r) {
  var [n, i] = t, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", [u, s] = r0([n, i]);
  if (u === -1 / 0 || s === 1 / 0) return [n, i];
  if (u === s) return [u];
  var l = o === "snap125" ? n0 : kf, c = Math.max(r, 2), f = l(new me(s).sub(u).div(c - 1), a, 0), d = [...t0(new me(u), new me(s), f), s];
  return a === false && (d = d.map((h) => Math.round(h))), n > i ? d.reverse() : d;
}, GT = (e3) => e3.rootProps.barCategoryGap, ju = (e3) => e3.rootProps.stackOffset, a0 = (e3) => e3.rootProps.reverseStackOrder, jf = (e3) => e3.options.chartName, Rf = (e3) => e3.rootProps.syncId, o0 = (e3) => e3.rootProps.syncMethod, Df = (e3) => e3.options.eventEmitter, wt = { grid: -100, barBackground: -50, area: 100, cursorRectangle: 200, bar: 300, line: 400, axis: 500, scatter: 600, activeBar: 1e3, cursorLine: 1100, activeDot: 1200, label: 2e3 }, an = { allowDecimals: false, allowDataOverflow: false, angleAxisId: 0, reversed: false, scale: "auto", tick: true, type: "auto" }, Qt = { allowDataOverflow: false, allowDecimals: false, allowDuplicatedCategory: true, includeHidden: false, radiusAxisId: 0, reversed: false, scale: "auto", tick: true, tickCount: 5, type: "auto" }, Ru = (e3, t) => {
  if (!(!e3 || !t)) return e3 != null && e3.reversed ? [t[1], t[0]] : t;
};
function Du(e3, t, r) {
  if (r !== "auto") return r;
  if (e3 != null) return Ir(e3, t) ? "category" : "number";
}
function kv(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jo(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kv(Object(r), true).forEach(function(n) {
      XT(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : kv(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function XT(e3, t, r) {
  return (t = ZT(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function ZT(e3) {
  var t = QT(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function QT(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var jv = { allowDataOverflow: an.allowDataOverflow, allowDecimals: an.allowDecimals, allowDuplicatedCategory: false, dataKey: void 0, domain: void 0, id: an.angleAxisId, includeHidden: false, name: void 0, reversed: an.reversed, scale: an.scale, tick: an.tick, tickCount: void 0, ticks: void 0, type: an.type, unit: void 0, niceTicks: "auto" }, Rv = { allowDataOverflow: Qt.allowDataOverflow, allowDecimals: Qt.allowDecimals, allowDuplicatedCategory: Qt.allowDuplicatedCategory, dataKey: void 0, domain: void 0, id: Qt.radiusAxisId, includeHidden: Qt.includeHidden, name: void 0, reversed: Qt.reversed, scale: Qt.scale, tick: Qt.tick, tickCount: Qt.tickCount, ticks: void 0, type: Qt.type, unit: void 0, niceTicks: "auto" }, JT = (e3, t) => {
  if (t != null) return e3.polarAxis.angleAxis[t];
}, Nf = T([JT, Cb], (e3, t) => {
  var r;
  if (e3 != null) return e3;
  var n = (r = Du(t, "angleAxis", jv.type)) !== null && r !== void 0 ? r : "category";
  return jo(jo({}, jv), {}, { type: n });
}), eI = (e3, t) => e3.polarAxis.radiusAxis[t], Lf = T([eI, Cb], (e3, t) => {
  var r;
  if (e3 != null) return e3;
  var n = (r = Du(t, "radiusAxis", Rv.type)) !== null && r !== void 0 ? r : "category";
  return jo(jo({}, Rv), {}, { type: n });
}), Nu = (e3) => e3.polarOptions, $f = T([_r, Mr, at], CT), u0 = T([Nu, $f], (e3, t) => {
  if (e3 != null) return Zr(e3.innerRadius, t, 0);
}), s0 = T([Nu, $f], (e3, t) => {
  if (e3 != null) return Zr(e3.outerRadius, t, t * 0.8);
}), tI = (e3) => {
  if (e3 == null) return [0, 0];
  var { startAngle: t, endAngle: r } = e3;
  return [t, r];
}, l0 = T([Nu], tI);
T([Nf, l0], Ru);
var c0 = T([$f, u0, s0], (e3, t, r) => {
  if (!(e3 == null || t == null || r == null)) return [t, r];
});
T([Lf, c0], Ru);
var f0 = T([je, Nu, u0, s0, _r, Mr], (e3, t, r, n, i, a) => {
  if (!(e3 !== "centric" && e3 !== "radial" || t == null || r == null || n == null)) {
    var { cx: o, cy: u, startAngle: s, endAngle: l } = t;
    return { cx: Zr(o, i, i / 2), cy: Zr(u, a, a / 2), innerRadius: r, outerRadius: n, startAngle: s, endAngle: l, clockWise: false };
  }
}), Ze = (e3, t) => t, Lu = (e3, t, r) => r;
function d0(e3) {
  return e3 == null ? void 0 : e3.id;
}
function h0(e3, t, r) {
  var { chartData: n = [] } = t, { allowDuplicatedCategory: i, dataKey: a } = r, o = /* @__PURE__ */ new Map();
  return e3.forEach((u) => {
    var s, l = (s = u.data) !== null && s !== void 0 ? s : n;
    if (!(l == null || l.length === 0)) {
      var c = d0(u);
      l.forEach((f, d) => {
        var h = a == null || i ? d : String(Ge(f, a, null)), v = Ge(f, u.dataKey, 0), g;
        o.has(h) ? g = o.get(h) : g = {}, Object.assign(g, { [c]: v }), o.set(h, g);
      });
    }
  }), Array.from(o.values());
}
function Ff(e3) {
  return "stackId" in e3 && e3.stackId != null && e3.dataKey != null;
}
var $u = (e3, t) => e3 === t ? true : e3 == null || t == null ? false : e3[0] === t[0] && e3[1] === t[1];
function Fu(e3, t) {
  return Array.isArray(e3) && Array.isArray(t) && e3.length === 0 && t.length === 0 ? true : e3 === t;
}
function rI(e3, t) {
  if (e3.length === t.length) {
    for (var r = 0; r < e3.length; r++) if (e3[r] !== t[r]) return false;
    return true;
  }
  return false;
}
var Qe = (e3) => {
  var t = je(e3);
  return t === "horizontal" ? "xAxis" : t === "vertical" ? "yAxis" : t === "centric" ? "angleAxis" : "radiusAxis";
}, li = (e3) => e3.tooltip.settings.axisId;
function Bf(e3) {
  if (e3 != null) {
    var t = e3.ticks, r = e3.bandwidth, n = e3.range(), i = [Math.min(...n), Math.max(...n)];
    return { domain: () => e3.domain(), range: (function(a) {
      function o() {
        return a.apply(this, arguments);
      }
      return o.toString = function() {
        return a.toString();
      }, o;
    })(() => i), rangeMin: () => i[0], rangeMax: () => i[1], isInRange(a) {
      var o = i[0], u = i[1];
      return o <= u ? a >= o && a <= u : a >= u && a <= o;
    }, bandwidth: r ? () => r.call(e3) : void 0, ticks: t ? (a) => t.call(e3, a) : void 0, map: (a, o) => {
      var u = e3(a);
      if (u != null) {
        if (e3.bandwidth && o !== null && o !== void 0 && o.position) {
          var s = e3.bandwidth();
          switch (o.position) {
            case "middle":
              u += s / 2;
              break;
            case "end":
              u += s;
              break;
          }
        }
        return u;
      }
    } };
  }
}
var nI = (e3, t) => {
  if (t != null) switch (e3) {
    case "linear": {
      if (!or(t)) {
        for (var r, n, i = 0; i < t.length; i++) {
          var a = t[i];
          Oe(a) && ((r === void 0 || a < r) && (r = a), (n === void 0 || a > n) && (n = a));
        }
        return r !== void 0 && n !== void 0 ? [r, n] : void 0;
      }
      return t;
    }
    default:
      return t;
  }
};
function Hr(e3, t) {
  return e3 == null || t == null ? NaN : e3 < t ? -1 : e3 > t ? 1 : e3 >= t ? 0 : NaN;
}
function iI(e3, t) {
  return e3 == null || t == null ? NaN : t < e3 ? -1 : t > e3 ? 1 : t >= e3 ? 0 : NaN;
}
function zf(e3) {
  let t, r, n;
  e3.length !== 2 ? (t = Hr, r = (u, s) => Hr(e3(u), s), n = (u, s) => e3(u) - s) : (t = e3 === Hr || e3 === iI ? e3 : aI, r = e3, n = e3);
  function i(u, s, l = 0, c = u.length) {
    if (l < c) {
      if (t(s, s) !== 0) return c;
      do {
        const f = l + c >>> 1;
        r(u[f], s) < 0 ? l = f + 1 : c = f;
      } while (l < c);
    }
    return l;
  }
  function a(u, s, l = 0, c = u.length) {
    if (l < c) {
      if (t(s, s) !== 0) return c;
      do {
        const f = l + c >>> 1;
        r(u[f], s) <= 0 ? l = f + 1 : c = f;
      } while (l < c);
    }
    return l;
  }
  function o(u, s, l = 0, c = u.length) {
    const f = i(u, s, l, c - 1);
    return f > l && n(u[f - 1], s) > -n(u[f], s) ? f - 1 : f;
  }
  return { left: i, center: o, right: a };
}
function aI() {
  return 0;
}
function p0(e3) {
  return e3 === null ? NaN : +e3;
}
function* oI(e3, t) {
  for (let r of e3) r != null && (r = +r) >= r && (yield r);
}
const uI = zf(Hr), pa = uI.right;
zf(p0).center;
class Dv extends Map {
  constructor(t, r = cI) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(Nv(this, t));
  }
  has(t) {
    return super.has(Nv(this, t));
  }
  set(t, r) {
    return super.set(sI(this, t), r);
  }
  delete(t) {
    return super.delete(lI(this, t));
  }
}
function Nv({ _intern: e3, _key: t }, r) {
  const n = t(r);
  return e3.has(n) ? e3.get(n) : r;
}
function sI({ _intern: e3, _key: t }, r) {
  const n = t(r);
  return e3.has(n) ? e3.get(n) : (e3.set(n, r), r);
}
function lI({ _intern: e3, _key: t }, r) {
  const n = t(r);
  return e3.has(n) && (r = e3.get(n), e3.delete(n)), r;
}
function cI(e3) {
  return e3 !== null && typeof e3 == "object" ? e3.valueOf() : e3;
}
function fI(e3 = Hr) {
  if (e3 === Hr) return v0;
  if (typeof e3 != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e3(t, r);
    return n || n === 0 ? n : (e3(r, r) === 0) - (e3(t, t) === 0);
  };
}
function v0(e3, t) {
  return (e3 == null || !(e3 >= e3)) - (t == null || !(t >= t)) || (e3 < t ? -1 : e3 > t ? 1 : 0);
}
const dI = Math.sqrt(50), hI = Math.sqrt(10), pI = Math.sqrt(2);
function Ro(e3, t, r) {
  const n = (t - e3) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= dI ? 10 : a >= hI ? 5 : a >= pI ? 2 : 1;
  let u, s, l;
  return i < 0 ? (l = Math.pow(10, -i) / o, u = Math.round(e3 * l), s = Math.round(t * l), u / l < e3 && ++u, s / l > t && --s, l = -l) : (l = Math.pow(10, i) * o, u = Math.round(e3 / l), s = Math.round(t / l), u * l < e3 && ++u, s * l > t && --s), s < u && 0.5 <= r && r < 2 ? Ro(e3, t, r * 2) : [u, s, l];
}
function Ac(e3, t, r) {
  if (t = +t, e3 = +e3, r = +r, !(r > 0)) return [];
  if (e3 === t) return [e3];
  const n = t < e3, [i, a, o] = n ? Ro(t, e3, r) : Ro(e3, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1, s = new Array(u);
  if (n) if (o < 0) for (let l = 0; l < u; ++l) s[l] = (a - l) / -o;
  else for (let l = 0; l < u; ++l) s[l] = (a - l) * o;
  else if (o < 0) for (let l = 0; l < u; ++l) s[l] = (i + l) / -o;
  else for (let l = 0; l < u; ++l) s[l] = (i + l) * o;
  return s;
}
function Cc(e3, t, r) {
  return t = +t, e3 = +e3, r = +r, Ro(e3, t, r)[2];
}
function Tc(e3, t, r) {
  t = +t, e3 = +e3, r = +r;
  const n = t < e3, i = n ? Cc(t, e3, r) : Cc(e3, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Lv(e3, t) {
  let r;
  for (const n of e3) n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function $v(e3, t) {
  let r;
  for (const n of e3) n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function m0(e3, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e3.length - 1, n)), !(r <= t && t <= n)) return e3;
  for (i = i === void 0 ? v0 : fI(i); n > r; ) {
    if (n - r > 600) {
      const s = n - r + 1, l = t - r + 1, c = Math.log(s), f = 0.5 * Math.exp(2 * c / 3), d = 0.5 * Math.sqrt(c * f * (s - f) / s) * (l - s / 2 < 0 ? -1 : 1), h = Math.max(r, Math.floor(t - l * f / s + d)), v = Math.min(n, Math.floor(t + (s - l) * f / s + d));
      m0(e3, t, h, v, i);
    }
    const a = e3[t];
    let o = r, u = n;
    for (xi(e3, r, t), i(e3[n], a) > 0 && xi(e3, r, n); o < u; ) {
      for (xi(e3, o, u), ++o, --u; i(e3[o], a) < 0; ) ++o;
      for (; i(e3[u], a) > 0; ) --u;
    }
    i(e3[r], a) === 0 ? xi(e3, r, u) : (++u, xi(e3, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1);
  }
  return e3;
}
function xi(e3, t, r) {
  const n = e3[t];
  e3[t] = e3[r], e3[r] = n;
}
function vI(e3, t, r) {
  if (e3 = Float64Array.from(oI(e3)), !(!(n = e3.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return $v(e3);
    if (t >= 1) return Lv(e3);
    var n, i = (n - 1) * t, a = Math.floor(i), o = Lv(m0(e3, a).subarray(0, a + 1)), u = $v(e3.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function mI(e3, t, r = p0) {
  if (!(!(n = e3.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e3[0], 0, e3);
    if (t >= 1) return +r(e3[n - 1], n - 1, e3);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e3[a], a, e3), u = +r(e3[a + 1], a + 1, e3);
    return o + (u - o) * (i - a);
  }
}
function gI(e3, t, r) {
  e3 = +e3, t = +t, r = (i = arguments.length) < 2 ? (t = e3, e3 = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e3) / r)) | 0, a = new Array(i); ++n < i; ) a[n] = e3 + n * r;
  return a;
}
function $t(e3, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e3);
      break;
    default:
      this.range(t).domain(e3);
      break;
  }
  return this;
}
function kr(e3, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e3 == "function" ? this.interpolator(e3) : this.range(e3);
      break;
    }
    default: {
      this.domain(e3), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const Ic = Symbol("implicit");
function Wf() {
  var e3 = new Dv(), t = [], r = [], n = Ic;
  function i(a) {
    let o = e3.get(a);
    if (o === void 0) {
      if (n !== Ic) return n;
      e3.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e3 = new Dv();
    for (const o of a) e3.has(o) || e3.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Wf(t, r).unknown(n);
  }, $t.apply(i, arguments), i;
}
function Uf() {
  var e3 = Wf().unknown(void 0), t = e3.domain, r = e3.range, n = 0, i = 1, a, o, u = false, s = 0, l = 0, c = 0.5;
  delete e3.unknown;
  function f() {
    var d = t().length, h = i < n, v = h ? i : n, g = h ? n : i;
    a = (g - v) / Math.max(1, d - s + l * 2), u && (a = Math.floor(a)), v += (g - v - a * (d - s)) * c, o = a * (1 - s), u && (v = Math.round(v), o = Math.round(o));
    var m = gI(d).map(function(y) {
      return v + a * y;
    });
    return r(h ? m.reverse() : m);
  }
  return e3.domain = function(d) {
    return arguments.length ? (t(d), f()) : t();
  }, e3.range = function(d) {
    return arguments.length ? ([n, i] = d, n = +n, i = +i, f()) : [n, i];
  }, e3.rangeRound = function(d) {
    return [n, i] = d, n = +n, i = +i, u = true, f();
  }, e3.bandwidth = function() {
    return o;
  }, e3.step = function() {
    return a;
  }, e3.round = function(d) {
    return arguments.length ? (u = !!d, f()) : u;
  }, e3.padding = function(d) {
    return arguments.length ? (s = Math.min(1, l = +d), f()) : s;
  }, e3.paddingInner = function(d) {
    return arguments.length ? (s = Math.min(1, d), f()) : s;
  }, e3.paddingOuter = function(d) {
    return arguments.length ? (l = +d, f()) : l;
  }, e3.align = function(d) {
    return arguments.length ? (c = Math.max(0, Math.min(1, d)), f()) : c;
  }, e3.copy = function() {
    return Uf(t(), [n, i]).round(u).paddingInner(s).paddingOuter(l).align(c);
  }, $t.apply(f(), arguments);
}
function g0(e3) {
  var t = e3.copy;
  return e3.padding = e3.paddingOuter, delete e3.paddingInner, delete e3.paddingOuter, e3.copy = function() {
    return g0(t());
  }, e3;
}
function yI() {
  return g0(Uf.apply(null, arguments).paddingInner(1));
}
function qf(e3, t, r) {
  e3.prototype = t.prototype = r, r.constructor = e3;
}
function y0(e3, t) {
  var r = Object.create(e3.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function va() {
}
var Zi = 0.7, Do = 1 / Zi, Un = "\\s*([+-]?\\d+)\\s*", Qi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ur = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", bI = /^#([0-9a-f]{3,8})$/, wI = new RegExp(`^rgb\\(${Un},${Un},${Un}\\)$`), xI = new RegExp(`^rgb\\(${ur},${ur},${ur}\\)$`), OI = new RegExp(`^rgba\\(${Un},${Un},${Un},${Qi}\\)$`), PI = new RegExp(`^rgba\\(${ur},${ur},${ur},${Qi}\\)$`), SI = new RegExp(`^hsl\\(${Qi},${ur},${ur}\\)$`), EI = new RegExp(`^hsla\\(${Qi},${ur},${ur},${Qi}\\)$`), Fv = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
qf(va, Ji, { copy(e3) {
  return Object.assign(new this.constructor(), this, e3);
}, displayable() {
  return this.rgb().displayable();
}, hex: Bv, formatHex: Bv, formatHex8: AI, formatHsl: CI, formatRgb: zv, toString: zv });
function Bv() {
  return this.rgb().formatHex();
}
function AI() {
  return this.rgb().formatHex8();
}
function CI() {
  return b0(this).formatHsl();
}
function zv() {
  return this.rgb().formatRgb();
}
function Ji(e3) {
  var t, r;
  return e3 = (e3 + "").trim().toLowerCase(), (t = bI.exec(e3)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Wv(t) : r === 3 ? new xt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Da(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Da(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = wI.exec(e3)) ? new xt(t[1], t[2], t[3], 1) : (t = xI.exec(e3)) ? new xt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = OI.exec(e3)) ? Da(t[1], t[2], t[3], t[4]) : (t = PI.exec(e3)) ? Da(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = SI.exec(e3)) ? Kv(t[1], t[2] / 100, t[3] / 100, 1) : (t = EI.exec(e3)) ? Kv(t[1], t[2] / 100, t[3] / 100, t[4]) : Fv.hasOwnProperty(e3) ? Wv(Fv[e3]) : e3 === "transparent" ? new xt(NaN, NaN, NaN, 0) : null;
}
function Wv(e3) {
  return new xt(e3 >> 16 & 255, e3 >> 8 & 255, e3 & 255, 1);
}
function Da(e3, t, r, n) {
  return n <= 0 && (e3 = t = r = NaN), new xt(e3, t, r, n);
}
function TI(e3) {
  return e3 instanceof va || (e3 = Ji(e3)), e3 ? (e3 = e3.rgb(), new xt(e3.r, e3.g, e3.b, e3.opacity)) : new xt();
}
function _c(e3, t, r, n) {
  return arguments.length === 1 ? TI(e3) : new xt(e3, t, r, n ?? 1);
}
function xt(e3, t, r, n) {
  this.r = +e3, this.g = +t, this.b = +r, this.opacity = +n;
}
qf(xt, _c, y0(va, { brighter(e3) {
  return e3 = e3 == null ? Do : Math.pow(Do, e3), new xt(this.r * e3, this.g * e3, this.b * e3, this.opacity);
}, darker(e3) {
  return e3 = e3 == null ? Zi : Math.pow(Zi, e3), new xt(this.r * e3, this.g * e3, this.b * e3, this.opacity);
}, rgb() {
  return this;
}, clamp() {
  return new xt(yn(this.r), yn(this.g), yn(this.b), No(this.opacity));
}, displayable() {
  return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
}, hex: Uv, formatHex: Uv, formatHex8: II, formatRgb: qv, toString: qv }));
function Uv() {
  return `#${pn(this.r)}${pn(this.g)}${pn(this.b)}`;
}
function II() {
  return `#${pn(this.r)}${pn(this.g)}${pn(this.b)}${pn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function qv() {
  const e3 = No(this.opacity);
  return `${e3 === 1 ? "rgb(" : "rgba("}${yn(this.r)}, ${yn(this.g)}, ${yn(this.b)}${e3 === 1 ? ")" : `, ${e3})`}`;
}
function No(e3) {
  return isNaN(e3) ? 1 : Math.max(0, Math.min(1, e3));
}
function yn(e3) {
  return Math.max(0, Math.min(255, Math.round(e3) || 0));
}
function pn(e3) {
  return e3 = yn(e3), (e3 < 16 ? "0" : "") + e3.toString(16);
}
function Kv(e3, t, r, n) {
  return n <= 0 ? e3 = t = r = NaN : r <= 0 || r >= 1 ? e3 = t = NaN : t <= 0 && (e3 = NaN), new Ut(e3, t, r, n);
}
function b0(e3) {
  if (e3 instanceof Ut) return new Ut(e3.h, e3.s, e3.l, e3.opacity);
  if (e3 instanceof va || (e3 = Ji(e3)), !e3) return new Ut();
  if (e3 instanceof Ut) return e3;
  e3 = e3.rgb();
  var t = e3.r / 255, r = e3.g / 255, n = e3.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, u = a - i, s = (a + i) / 2;
  return u ? (t === a ? o = (r - n) / u + (r < n) * 6 : r === a ? o = (n - t) / u + 2 : o = (t - r) / u + 4, u /= s < 0.5 ? a + i : 2 - a - i, o *= 60) : u = s > 0 && s < 1 ? 0 : o, new Ut(o, u, s, e3.opacity);
}
function _I(e3, t, r, n) {
  return arguments.length === 1 ? b0(e3) : new Ut(e3, t, r, n ?? 1);
}
function Ut(e3, t, r, n) {
  this.h = +e3, this.s = +t, this.l = +r, this.opacity = +n;
}
qf(Ut, _I, y0(va, { brighter(e3) {
  return e3 = e3 == null ? Do : Math.pow(Do, e3), new Ut(this.h, this.s, this.l * e3, this.opacity);
}, darker(e3) {
  return e3 = e3 == null ? Zi : Math.pow(Zi, e3), new Ut(this.h, this.s, this.l * e3, this.opacity);
}, rgb() {
  var e3 = this.h % 360 + (this.h < 0) * 360, t = isNaN(e3) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
  return new xt(wl(e3 >= 240 ? e3 - 240 : e3 + 120, i, n), wl(e3, i, n), wl(e3 < 120 ? e3 + 240 : e3 - 120, i, n), this.opacity);
}, clamp() {
  return new Ut(Vv(this.h), Na(this.s), Na(this.l), No(this.opacity));
}, displayable() {
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
}, formatHsl() {
  const e3 = No(this.opacity);
  return `${e3 === 1 ? "hsl(" : "hsla("}${Vv(this.h)}, ${Na(this.s) * 100}%, ${Na(this.l) * 100}%${e3 === 1 ? ")" : `, ${e3})`}`;
} }));
function Vv(e3) {
  return e3 = (e3 || 0) % 360, e3 < 0 ? e3 + 360 : e3;
}
function Na(e3) {
  return Math.max(0, Math.min(1, e3 || 0));
}
function wl(e3, t, r) {
  return (e3 < 60 ? t + (r - t) * e3 / 60 : e3 < 180 ? r : e3 < 240 ? t + (r - t) * (240 - e3) / 60 : t) * 255;
}
const Kf = (e3) => () => e3;
function MI(e3, t) {
  return function(r) {
    return e3 + r * t;
  };
}
function kI(e3, t, r) {
  return e3 = Math.pow(e3, r), t = Math.pow(t, r) - e3, r = 1 / r, function(n) {
    return Math.pow(e3 + n * t, r);
  };
}
function jI(e3) {
  return (e3 = +e3) == 1 ? w0 : function(t, r) {
    return r - t ? kI(t, r, e3) : Kf(isNaN(t) ? r : t);
  };
}
function w0(e3, t) {
  var r = t - e3;
  return r ? MI(e3, r) : Kf(isNaN(e3) ? t : e3);
}
const Hv = (function e(t) {
  var r = jI(t);
  function n(i, a) {
    var o = r((i = _c(i)).r, (a = _c(a)).r), u = r(i.g, a.g), s = r(i.b, a.b), l = w0(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = u(c), i.b = s(c), i.opacity = l(c), i + "";
    };
  }
  return n.gamma = e, n;
})(1);
function RI(e3, t) {
  t || (t = []);
  var r = e3 ? Math.min(t.length, e3.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e3[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function DI(e3) {
  return ArrayBuffer.isView(e3) && !(e3 instanceof DataView);
}
function NI(e3, t) {
  var r = t ? t.length : 0, n = e3 ? Math.min(r, e3.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = ci(e3[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}
function LI(e3, t) {
  var r = /* @__PURE__ */ new Date();
  return e3 = +e3, t = +t, function(n) {
    return r.setTime(e3 * (1 - n) + t * n), r;
  };
}
function Lo(e3, t) {
  return e3 = +e3, t = +t, function(r) {
    return e3 * (1 - r) + t * r;
  };
}
function $I(e3, t) {
  var r = {}, n = {}, i;
  (e3 === null || typeof e3 != "object") && (e3 = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t) i in e3 ? r[i] = ci(e3[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var Mc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, xl = new RegExp(Mc.source, "g");
function FI(e3) {
  return function() {
    return e3;
  };
}
function BI(e3) {
  return function(t) {
    return e3(t) + "";
  };
}
function zI(e3, t) {
  var r = Mc.lastIndex = xl.lastIndex = 0, n, i, a, o = -1, u = [], s = [];
  for (e3 = e3 + "", t = t + ""; (n = Mc.exec(e3)) && (i = xl.exec(t)); ) (a = i.index) > r && (a = t.slice(r, a), u[o] ? u[o] += a : u[++o] = a), (n = n[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, s.push({ i: o, x: Lo(n, i) })), r = xl.lastIndex;
  return r < t.length && (a = t.slice(r), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? s[0] ? BI(s[0].x) : FI(t) : (t = s.length, function(l) {
    for (var c = 0, f; c < t; ++c) u[(f = s[c]).i] = f.x(l);
    return u.join("");
  });
}
function ci(e3, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Kf(t) : (r === "number" ? Lo : r === "string" ? (n = Ji(t)) ? (t = n, Hv) : zI : t instanceof Ji ? Hv : t instanceof Date ? LI : DI(t) ? RI : Array.isArray(t) ? NI : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? $I : Lo)(e3, t);
}
function Vf(e3, t) {
  return e3 = +e3, t = +t, function(r) {
    return Math.round(e3 * (1 - r) + t * r);
  };
}
function WI(e3, t) {
  t === void 0 && (t = e3, e3 = ci);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e3(i, i = t[++r]);
  return function(o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[u](o - u);
  };
}
function UI(e3) {
  return function() {
    return e3;
  };
}
function $o(e3) {
  return +e3;
}
var Yv = [0, 1];
function pt(e3) {
  return e3;
}
function kc(e3, t) {
  return (t -= e3 = +e3) ? function(r) {
    return (r - e3) / t;
  } : UI(isNaN(t) ? NaN : 0.5);
}
function qI(e3, t) {
  var r;
  return e3 > t && (r = e3, e3 = t, t = r), function(n) {
    return Math.max(e3, Math.min(t, n));
  };
}
function KI(e3, t, r) {
  var n = e3[0], i = e3[1], a = t[0], o = t[1];
  return i < n ? (n = kc(i, n), a = r(o, a)) : (n = kc(n, i), a = r(a, o)), function(u) {
    return a(n(u));
  };
}
function VI(e3, t, r) {
  var n = Math.min(e3.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e3[n] < e3[0] && (e3 = e3.slice().reverse(), t = t.slice().reverse()); ++o < n; ) i[o] = kc(e3[o], e3[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(u) {
    var s = pa(e3, u, 1, n) - 1;
    return a[s](i[s](u));
  };
}
function ma(e3, t) {
  return t.domain(e3.domain()).range(e3.range()).interpolate(e3.interpolate()).clamp(e3.clamp()).unknown(e3.unknown());
}
function Bu() {
  var e3 = Yv, t = Yv, r = ci, n, i, a, o = pt, u, s, l;
  function c() {
    var d = Math.min(e3.length, t.length);
    return o !== pt && (o = qI(e3[0], e3[d - 1])), u = d > 2 ? VI : KI, s = l = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? a : (s || (s = u(e3.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(i((l || (l = u(t, e3.map(n), Lo)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e3 = Array.from(d, $o), c()) : e3.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), c()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = Vf, c();
  }, f.clamp = function(d) {
    return arguments.length ? (o = d ? true : pt, c()) : o !== pt;
  }, f.interpolate = function(d) {
    return arguments.length ? (r = d, c()) : r;
  }, f.unknown = function(d) {
    return arguments.length ? (a = d, f) : a;
  }, function(d, h) {
    return n = d, i = h, c();
  };
}
function Hf() {
  return Bu()(pt, pt);
}
function HI(e3) {
  return Math.abs(e3 = Math.round(e3)) >= 1e21 ? e3.toLocaleString("en").replace(/,/g, "") : e3.toString(10);
}
function Fo(e3, t) {
  if (!isFinite(e3) || e3 === 0) return null;
  var r = (e3 = t ? e3.toExponential(t - 1) : e3.toExponential()).indexOf("e"), n = e3.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e3.slice(r + 1)];
}
function Xn(e3) {
  return e3 = Fo(Math.abs(e3)), e3 ? e3[1] : NaN;
}
function YI(e3, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, u = e3[0], s = 0; i > 0 && u > 0 && (s + u + 1 > n && (u = Math.max(1, n - s)), a.push(r.substring(i -= u, i + u)), !((s += u + 1) > n)); ) u = e3[o = (o + 1) % e3.length];
    return a.reverse().join(t);
  };
}
function GI(e3) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e3[+r];
    });
  };
}
var XI = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ea(e3) {
  if (!(t = XI.exec(e3))) throw new Error("invalid format: " + e3);
  var t;
  return new Yf({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
}
ea.prototype = Yf.prototype;
function Yf(e3) {
  this.fill = e3.fill === void 0 ? " " : e3.fill + "", this.align = e3.align === void 0 ? ">" : e3.align + "", this.sign = e3.sign === void 0 ? "-" : e3.sign + "", this.symbol = e3.symbol === void 0 ? "" : e3.symbol + "", this.zero = !!e3.zero, this.width = e3.width === void 0 ? void 0 : +e3.width, this.comma = !!e3.comma, this.precision = e3.precision === void 0 ? void 0 : +e3.precision, this.trim = !!e3.trim, this.type = e3.type === void 0 ? "" : e3.type + "";
}
Yf.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function ZI(e3) {
  e: for (var t = e3.length, r = 1, n = -1, i; r < t; ++r) switch (e3[r]) {
    case ".":
      n = i = r;
      break;
    case "0":
      n === 0 && (n = r), i = r;
      break;
    default:
      if (!+e3[r]) break e;
      n > 0 && (n = 0);
      break;
  }
  return n > 0 ? e3.slice(0, n) + e3.slice(i + 1) : e3;
}
var Bo;
function QI(e3, t) {
  var r = Fo(e3, t);
  if (!r) return Bo = void 0, e3.toPrecision(t);
  var n = r[0], i = r[1], a = i - (Bo = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Fo(e3, Math.max(0, t + a - 1))[0];
}
function Gv(e3, t) {
  var r = Fo(e3, t);
  if (!r) return e3 + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Xv = { "%": (e3, t) => (e3 * 100).toFixed(t), b: (e3) => Math.round(e3).toString(2), c: (e3) => e3 + "", d: HI, e: (e3, t) => e3.toExponential(t), f: (e3, t) => e3.toFixed(t), g: (e3, t) => e3.toPrecision(t), o: (e3) => Math.round(e3).toString(8), p: (e3, t) => Gv(e3 * 100, t), r: Gv, s: QI, X: (e3) => Math.round(e3).toString(16).toUpperCase(), x: (e3) => Math.round(e3).toString(16) };
function Zv(e3) {
  return e3;
}
var Qv = Array.prototype.map, Jv = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function JI(e3) {
  var t = e3.grouping === void 0 || e3.thousands === void 0 ? Zv : YI(Qv.call(e3.grouping, Number), e3.thousands + ""), r = e3.currency === void 0 ? "" : e3.currency[0] + "", n = e3.currency === void 0 ? "" : e3.currency[1] + "", i = e3.decimal === void 0 ? "." : e3.decimal + "", a = e3.numerals === void 0 ? Zv : GI(Qv.call(e3.numerals, String)), o = e3.percent === void 0 ? "%" : e3.percent + "", u = e3.minus === void 0 ? "\u2212" : e3.minus + "", s = e3.nan === void 0 ? "NaN" : e3.nan + "";
  function l(f, d) {
    f = ea(f);
    var h = f.fill, v = f.align, g = f.sign, m = f.symbol, y = f.zero, x = f.width, b = f.comma, w = f.precision, O = f.trim, P = f.type;
    P === "n" ? (b = true, P = "g") : Xv[P] || (w === void 0 && (w = 12), O = true, P = "g"), (y || h === "0" && v === "=") && (y = true, h = "0", v = "=");
    var S = (d && d.prefix !== void 0 ? d.prefix : "") + (m === "$" ? r : m === "#" && /[boxX]/.test(P) ? "0" + P.toLowerCase() : ""), E = (m === "$" ? n : /[%p]/.test(P) ? o : "") + (d && d.suffix !== void 0 ? d.suffix : ""), N = Xv[P], k = /[defgprs%]/.test(P);
    w = w === void 0 ? 6 : /[gprs]/.test(P) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w));
    function R(C) {
      var F = S, L = E, M, $, B;
      if (P === "c") L = N(C) + L, C = "";
      else {
        C = +C;
        var D = C < 0 || 1 / C < 0;
        if (C = isNaN(C) ? s : N(Math.abs(C), w), O && (C = ZI(C)), D && +C == 0 && g !== "+" && (D = false), F = (D ? g === "(" ? g : u : g === "-" || g === "(" ? "" : g) + F, L = (P === "s" && !isNaN(C) && Bo !== void 0 ? Jv[8 + Bo / 3] : "") + L + (D && g === "(" ? ")" : ""), k) {
          for (M = -1, $ = C.length; ++M < $; ) if (B = C.charCodeAt(M), 48 > B || B > 57) {
            L = (B === 46 ? i + C.slice(M + 1) : C.slice(M)) + L, C = C.slice(0, M);
            break;
          }
        }
      }
      b && !y && (C = t(C, 1 / 0));
      var K = F.length + C.length + L.length, W = K < x ? new Array(x - K + 1).join(h) : "";
      switch (b && y && (C = t(W + C, W.length ? x - L.length : 1 / 0), W = ""), v) {
        case "<":
          C = F + C + L + W;
          break;
        case "=":
          C = F + W + C + L;
          break;
        case "^":
          C = W.slice(0, K = W.length >> 1) + F + C + L + W.slice(K);
          break;
        default:
          C = W + F + C + L;
          break;
      }
      return a(C);
    }
    return R.toString = function() {
      return f + "";
    }, R;
  }
  function c(f, d) {
    var h = Math.max(-8, Math.min(8, Math.floor(Xn(d) / 3))) * 3, v = Math.pow(10, -h), g = l((f = ea(f), f.type = "f", f), { suffix: Jv[8 + h / 3] });
    return function(m) {
      return g(v * m);
    };
  }
  return { format: l, formatPrefix: c };
}
var La, Gf, x0;
e_({ thousands: ",", grouping: [3], currency: ["$", ""] });
function e_(e3) {
  return La = JI(e3), Gf = La.format, x0 = La.formatPrefix, La;
}
function t_(e3) {
  return Math.max(0, -Xn(Math.abs(e3)));
}
function r_(e3, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Xn(t) / 3))) * 3 - Xn(Math.abs(e3)));
}
function n_(e3, t) {
  return e3 = Math.abs(e3), t = Math.abs(t) - e3, Math.max(0, Xn(t) - Xn(e3)) + 1;
}
function O0(e3, t, r, n) {
  var i = Tc(e3, t, r), a;
  switch (n = ea(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e3), Math.abs(t));
      return n.precision == null && !isNaN(a = r_(i, o)) && (n.precision = a), x0(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = n_(i, Math.max(Math.abs(e3), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = t_(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Gf(n);
}
function en(e3) {
  var t = e3.domain;
  return e3.ticks = function(r) {
    var n = t();
    return Ac(n[0], n[n.length - 1], r ?? 10);
  }, e3.tickFormat = function(r, n) {
    var i = t();
    return O0(i[0], i[i.length - 1], r ?? 10, n);
  }, e3.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], u = n[a], s, l, c = 10;
    for (u < o && (l = o, o = u, u = l, l = i, i = a, a = l); c-- > 0; ) {
      if (l = Cc(o, u, r), l === s) return n[i] = o, n[a] = u, t(n);
      if (l > 0) o = Math.floor(o / l) * l, u = Math.ceil(u / l) * l;
      else if (l < 0) o = Math.ceil(o * l) / l, u = Math.floor(u * l) / l;
      else break;
      s = l;
    }
    return e3;
  }, e3;
}
function P0() {
  var e3 = Hf();
  return e3.copy = function() {
    return ma(e3, P0());
  }, $t.apply(e3, arguments), en(e3);
}
function S0(e3) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e3 = Array.from(n, $o), r) : e3.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return S0(e3).unknown(t);
  }, e3 = arguments.length ? Array.from(e3, $o) : [0, 1], en(r);
}
function E0(e3, t) {
  e3 = e3.slice();
  var r = 0, n = e3.length - 1, i = e3[r], a = e3[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e3[r] = t.floor(i), e3[n] = t.ceil(a), e3;
}
function em(e3) {
  return Math.log(e3);
}
function tm(e3) {
  return Math.exp(e3);
}
function i_(e3) {
  return -Math.log(-e3);
}
function a_(e3) {
  return -Math.exp(-e3);
}
function o_(e3) {
  return isFinite(e3) ? +("1e" + e3) : e3 < 0 ? 0 : e3;
}
function u_(e3) {
  return e3 === 10 ? o_ : e3 === Math.E ? Math.exp : (t) => Math.pow(e3, t);
}
function s_(e3) {
  return e3 === Math.E ? Math.log : e3 === 10 && Math.log10 || e3 === 2 && Math.log2 || (e3 = Math.log(e3), (t) => Math.log(t) / e3);
}
function rm(e3) {
  return (t, r) => -e3(-t, r);
}
function Xf(e3) {
  const t = e3(em, tm), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = s_(n), a = u_(n), r()[0] < 0 ? (i = rm(i), a = rm(a), e3(i_, a_)) : e3(em, tm), t;
  }
  return t.base = function(u) {
    return arguments.length ? (n = +u, o()) : n;
  }, t.domain = function(u) {
    return arguments.length ? (r(u), o()) : r();
  }, t.ticks = (u) => {
    const s = r();
    let l = s[0], c = s[s.length - 1];
    const f = c < l;
    f && ([l, c] = [c, l]);
    let d = i(l), h = i(c), v, g;
    const m = u == null ? 10 : +u;
    let y = [];
    if (!(n % 1) && h - d < m) {
      if (d = Math.floor(d), h = Math.ceil(h), l > 0) {
        for (; d <= h; ++d) for (v = 1; v < n; ++v) if (g = d < 0 ? v / a(-d) : v * a(d), !(g < l)) {
          if (g > c) break;
          y.push(g);
        }
      } else for (; d <= h; ++d) for (v = n - 1; v >= 1; --v) if (g = d > 0 ? v / a(-d) : v * a(d), !(g < l)) {
        if (g > c) break;
        y.push(g);
      }
      y.length * 2 < m && (y = Ac(l, c, m));
    } else y = Ac(d, h, Math.min(h - d, m)).map(a);
    return f ? y.reverse() : y;
  }, t.tickFormat = (u, s) => {
    if (u == null && (u = 10), s == null && (s = n === 10 ? "s" : ","), typeof s != "function" && (!(n % 1) && (s = ea(s)).precision == null && (s.trim = true), s = Gf(s)), u === 1 / 0) return s;
    const l = Math.max(1, n * u / t.ticks().length);
    return (c) => {
      let f = c / a(Math.round(i(c)));
      return f * n < n - 0.5 && (f *= n), f <= l ? s(c) : "";
    };
  }, t.nice = () => r(E0(r(), { floor: (u) => a(Math.floor(i(u))), ceil: (u) => a(Math.ceil(i(u))) })), t;
}
function A0() {
  const e3 = Xf(Bu()).domain([1, 10]);
  return e3.copy = () => ma(e3, A0()).base(e3.base()), $t.apply(e3, arguments), e3;
}
function nm(e3) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e3));
  };
}
function im(e3) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e3;
  };
}
function Zf(e3) {
  var t = 1, r = e3(nm(t), im(t));
  return r.constant = function(n) {
    return arguments.length ? e3(nm(t = +n), im(t)) : t;
  }, en(r);
}
function C0() {
  var e3 = Zf(Bu());
  return e3.copy = function() {
    return ma(e3, C0()).constant(e3.constant());
  }, $t.apply(e3, arguments);
}
function am(e3) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e3) : Math.pow(t, e3);
  };
}
function l_(e3) {
  return e3 < 0 ? -Math.sqrt(-e3) : Math.sqrt(e3);
}
function c_(e3) {
  return e3 < 0 ? -e3 * e3 : e3 * e3;
}
function Qf(e3) {
  var t = e3(pt, pt), r = 1;
  function n() {
    return r === 1 ? e3(pt, pt) : r === 0.5 ? e3(l_, c_) : e3(am(r), am(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, en(t);
}
function Jf() {
  var e3 = Qf(Bu());
  return e3.copy = function() {
    return ma(e3, Jf()).exponent(e3.exponent());
  }, $t.apply(e3, arguments), e3;
}
function f_() {
  return Jf.apply(null, arguments).exponent(0.5);
}
function om(e3) {
  return Math.sign(e3) * e3 * e3;
}
function d_(e3) {
  return Math.sign(e3) * Math.sqrt(Math.abs(e3));
}
function T0() {
  var e3 = Hf(), t = [0, 1], r = false, n;
  function i(a) {
    var o = d_(e3(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e3.invert(om(a));
  }, i.domain = function(a) {
    return arguments.length ? (e3.domain(a), i) : e3.domain();
  }, i.range = function(a) {
    return arguments.length ? (e3.range((t = Array.from(a, $o)).map(om)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(true);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e3.clamp(a), i) : e3.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return T0(e3.domain(), t).round(r).clamp(e3.clamp()).unknown(n);
  }, $t.apply(i, arguments), en(i);
}
function I0() {
  var e3 = [], t = [], r = [], n;
  function i() {
    var o = 0, u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = mI(e3, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[pa(r, o)];
  }
  return a.invertExtent = function(o) {
    var u = t.indexOf(o);
    return u < 0 ? [NaN, NaN] : [u > 0 ? r[u - 1] : e3[0], u < r.length ? r[u] : e3[e3.length - 1]];
  }, a.domain = function(o) {
    if (!arguments.length) return e3.slice();
    e3 = [];
    for (let u of o) u != null && !isNaN(u = +u) && e3.push(u);
    return e3.sort(Hr), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return I0().domain(e3).range(t).unknown(n);
  }, $t.apply(a, arguments);
}
function _0() {
  var e3 = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(s) {
    return s != null && s <= s ? i[pa(n, s, 0, r)] : a;
  }
  function u() {
    var s = -1;
    for (n = new Array(r); ++s < r; ) n[s] = ((s + 1) * t - (s - r) * e3) / (r + 1);
    return o;
  }
  return o.domain = function(s) {
    return arguments.length ? ([e3, t] = s, e3 = +e3, t = +t, u()) : [e3, t];
  }, o.range = function(s) {
    return arguments.length ? (r = (i = Array.from(s)).length - 1, u()) : i.slice();
  }, o.invertExtent = function(s) {
    var l = i.indexOf(s);
    return l < 0 ? [NaN, NaN] : l < 1 ? [e3, n[0]] : l >= r ? [n[r - 1], t] : [n[l - 1], n[l]];
  }, o.unknown = function(s) {
    return arguments.length && (a = s), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return _0().domain([e3, t]).range(i).unknown(a);
  }, $t.apply(en(o), arguments);
}
function M0() {
  var e3 = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[pa(e3, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e3 = Array.from(a), n = Math.min(e3.length, t.length - 1), i) : e3.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e3.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e3[o - 1], e3[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return M0().domain(e3).range(t).unknown(r);
  }, $t.apply(i, arguments);
}
const Ol = /* @__PURE__ */ new Date(), Pl = /* @__PURE__ */ new Date();
function Ue(e3, t, r, n) {
  function i(a) {
    return e3(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e3(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e3(a = new Date(a - 1)), t(a, 1), e3(a), a), i.round = (a) => {
    const o = i(a), u = i.ceil(a);
    return a - o < u - a ? o : u;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, u) => {
    const s = [];
    if (a = i.ceil(a), u = u == null ? 1 : Math.floor(u), !(a < o) || !(u > 0)) return s;
    let l;
    do
      s.push(l = /* @__PURE__ */ new Date(+a)), t(a, u), e3(a);
    while (l < a && a < o);
    return s;
  }, i.filter = (a) => Ue((o) => {
    if (o >= o) for (; e3(o), !a(o); ) o.setTime(o - 1);
  }, (o, u) => {
    if (o >= o) if (u < 0) for (; ++u <= 0; ) for (; t(o, -1), !a(o); ) ;
    else for (; --u >= 0; ) for (; t(o, 1), !a(o); ) ;
  }), r && (i.count = (a, o) => (Ol.setTime(+a), Pl.setTime(+o), e3(Ol), e3(Pl), Math.floor(r(Ol, Pl))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const zo = Ue(() => {
}, (e3, t) => {
  e3.setTime(+e3 + t);
}, (e3, t) => t - e3);
zo.every = (e3) => (e3 = Math.floor(e3), !isFinite(e3) || !(e3 > 0) ? null : e3 > 1 ? Ue((t) => {
  t.setTime(Math.floor(t / e3) * e3);
}, (t, r) => {
  t.setTime(+t + r * e3);
}, (t, r) => (r - t) / e3) : zo);
zo.range;
const gr = 1e3, Nt = gr * 60, yr = Nt * 60, Er = yr * 24, ed = Er * 7, um = Er * 30, Sl = Er * 365, vn = Ue((e3) => {
  e3.setTime(e3 - e3.getMilliseconds());
}, (e3, t) => {
  e3.setTime(+e3 + t * gr);
}, (e3, t) => (t - e3) / gr, (e3) => e3.getUTCSeconds());
vn.range;
const td = Ue((e3) => {
  e3.setTime(e3 - e3.getMilliseconds() - e3.getSeconds() * gr);
}, (e3, t) => {
  e3.setTime(+e3 + t * Nt);
}, (e3, t) => (t - e3) / Nt, (e3) => e3.getMinutes());
td.range;
const rd = Ue((e3) => {
  e3.setUTCSeconds(0, 0);
}, (e3, t) => {
  e3.setTime(+e3 + t * Nt);
}, (e3, t) => (t - e3) / Nt, (e3) => e3.getUTCMinutes());
rd.range;
const nd = Ue((e3) => {
  e3.setTime(e3 - e3.getMilliseconds() - e3.getSeconds() * gr - e3.getMinutes() * Nt);
}, (e3, t) => {
  e3.setTime(+e3 + t * yr);
}, (e3, t) => (t - e3) / yr, (e3) => e3.getHours());
nd.range;
const id = Ue((e3) => {
  e3.setUTCMinutes(0, 0, 0);
}, (e3, t) => {
  e3.setTime(+e3 + t * yr);
}, (e3, t) => (t - e3) / yr, (e3) => e3.getUTCHours());
id.range;
const ga = Ue((e3) => e3.setHours(0, 0, 0, 0), (e3, t) => e3.setDate(e3.getDate() + t), (e3, t) => (t - e3 - (t.getTimezoneOffset() - e3.getTimezoneOffset()) * Nt) / Er, (e3) => e3.getDate() - 1);
ga.range;
const zu = Ue((e3) => {
  e3.setUTCHours(0, 0, 0, 0);
}, (e3, t) => {
  e3.setUTCDate(e3.getUTCDate() + t);
}, (e3, t) => (t - e3) / Er, (e3) => e3.getUTCDate() - 1);
zu.range;
const k0 = Ue((e3) => {
  e3.setUTCHours(0, 0, 0, 0);
}, (e3, t) => {
  e3.setUTCDate(e3.getUTCDate() + t);
}, (e3, t) => (t - e3) / Er, (e3) => Math.floor(e3 / Er));
k0.range;
function In(e3) {
  return Ue((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e3) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Nt) / ed);
}
const Wu = In(0), Wo = In(1), h_ = In(2), p_ = In(3), Zn = In(4), v_ = In(5), m_ = In(6);
Wu.range;
Wo.range;
h_.range;
p_.range;
Zn.range;
v_.range;
m_.range;
function _n(e3) {
  return Ue((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e3) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / ed);
}
const Uu = _n(0), Uo = _n(1), g_ = _n(2), y_ = _n(3), Qn = _n(4), b_ = _n(5), w_ = _n(6);
Uu.range;
Uo.range;
g_.range;
y_.range;
Qn.range;
b_.range;
w_.range;
const ad = Ue((e3) => {
  e3.setDate(1), e3.setHours(0, 0, 0, 0);
}, (e3, t) => {
  e3.setMonth(e3.getMonth() + t);
}, (e3, t) => t.getMonth() - e3.getMonth() + (t.getFullYear() - e3.getFullYear()) * 12, (e3) => e3.getMonth());
ad.range;
const od = Ue((e3) => {
  e3.setUTCDate(1), e3.setUTCHours(0, 0, 0, 0);
}, (e3, t) => {
  e3.setUTCMonth(e3.getUTCMonth() + t);
}, (e3, t) => t.getUTCMonth() - e3.getUTCMonth() + (t.getUTCFullYear() - e3.getUTCFullYear()) * 12, (e3) => e3.getUTCMonth());
od.range;
const Ar = Ue((e3) => {
  e3.setMonth(0, 1), e3.setHours(0, 0, 0, 0);
}, (e3, t) => {
  e3.setFullYear(e3.getFullYear() + t);
}, (e3, t) => t.getFullYear() - e3.getFullYear(), (e3) => e3.getFullYear());
Ar.every = (e3) => !isFinite(e3 = Math.floor(e3)) || !(e3 > 0) ? null : Ue((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e3) * e3), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e3);
});
Ar.range;
const Cr = Ue((e3) => {
  e3.setUTCMonth(0, 1), e3.setUTCHours(0, 0, 0, 0);
}, (e3, t) => {
  e3.setUTCFullYear(e3.getUTCFullYear() + t);
}, (e3, t) => t.getUTCFullYear() - e3.getUTCFullYear(), (e3) => e3.getUTCFullYear());
Cr.every = (e3) => !isFinite(e3 = Math.floor(e3)) || !(e3 > 0) ? null : Ue((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e3) * e3), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e3);
});
Cr.range;
function j0(e3, t, r, n, i, a) {
  const o = [[vn, 1, gr], [vn, 5, 5 * gr], [vn, 15, 15 * gr], [vn, 30, 30 * gr], [a, 1, Nt], [a, 5, 5 * Nt], [a, 15, 15 * Nt], [a, 30, 30 * Nt], [i, 1, yr], [i, 3, 3 * yr], [i, 6, 6 * yr], [i, 12, 12 * yr], [n, 1, Er], [n, 2, 2 * Er], [r, 1, ed], [t, 1, um], [t, 3, 3 * um], [e3, 1, Sl]];
  function u(l, c, f) {
    const d = c < l;
    d && ([l, c] = [c, l]);
    const h = f && typeof f.range == "function" ? f : s(l, c, f), v = h ? h.range(l, +c + 1) : [];
    return d ? v.reverse() : v;
  }
  function s(l, c, f) {
    const d = Math.abs(c - l) / f, h = zf(([, , m]) => m).right(o, d);
    if (h === o.length) return e3.every(Tc(l / Sl, c / Sl, f));
    if (h === 0) return zo.every(Math.max(Tc(l, c, f), 1));
    const [v, g] = o[d / o[h - 1][2] < o[h][2] / d ? h - 1 : h];
    return v.every(g);
  }
  return [u, s];
}
const [x_, O_] = j0(Cr, od, Uu, k0, id, rd), [P_, S_] = j0(Ar, ad, Wu, ga, nd, td);
function El(e3) {
  if (0 <= e3.y && e3.y < 100) {
    var t = new Date(-1, e3.m, e3.d, e3.H, e3.M, e3.S, e3.L);
    return t.setFullYear(e3.y), t;
  }
  return new Date(e3.y, e3.m, e3.d, e3.H, e3.M, e3.S, e3.L);
}
function Al(e3) {
  if (0 <= e3.y && e3.y < 100) {
    var t = new Date(Date.UTC(-1, e3.m, e3.d, e3.H, e3.M, e3.S, e3.L));
    return t.setUTCFullYear(e3.y), t;
  }
  return new Date(Date.UTC(e3.y, e3.m, e3.d, e3.H, e3.M, e3.S, e3.L));
}
function Oi(e3, t, r) {
  return { y: e3, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function E_(e3) {
  var t = e3.dateTime, r = e3.date, n = e3.time, i = e3.periods, a = e3.days, o = e3.shortDays, u = e3.months, s = e3.shortMonths, l = Pi(i), c = Si(i), f = Pi(a), d = Si(a), h = Pi(o), v = Si(o), g = Pi(u), m = Si(u), y = Pi(s), x = Si(s), b = { a: B, A: D, b: K, B: W, c: null, d: hm, e: hm, f: Y_, g: iM, G: oM, H: K_, I: V_, j: H_, L: R0, m: G_, M: X_, p: fe, q: te, Q: mm, s: gm, S: Z_, u: Q_, U: J_, V: eM, w: tM, W: rM, x: null, X: null, y: nM, Y: aM, Z: uM, "%": vm }, w = { a: ae, A: re, b: X, B: oe, c: null, d: pm, e: pm, f: fM, g: xM, G: PM, H: sM, I: lM, j: cM, L: N0, m: dM, M: hM, p: ne, q: A, Q: mm, s: gm, S: pM, u: vM, U: mM, V: gM, w: yM, W: bM, x: null, X: null, y: wM, Y: OM, Z: SM, "%": vm }, O = { a: k, A: R, b: C, B: F, c: L, d: fm, e: fm, f: z_, g: cm, G: lm, H: dm, I: dm, j: L_, L: B_, m: N_, M: $_, p: N, q: D_, Q: U_, s: q_, S: F_, u: __, U: M_, V: k_, w: I_, W: j_, x: M, X: $, y: cm, Y: lm, Z: R_, "%": W_ };
  b.x = P(r, b), b.X = P(n, b), b.c = P(t, b), w.x = P(r, w), w.X = P(n, w), w.c = P(t, w);
  function P(j, I) {
    return function(Z) {
      var _ = [], ie = -1, ee = 0, pe = j.length, V, z, U;
      for (Z instanceof Date || (Z = /* @__PURE__ */ new Date(+Z)); ++ie < pe; ) j.charCodeAt(ie) === 37 && (_.push(j.slice(ee, ie)), (z = sm[V = j.charAt(++ie)]) != null ? V = j.charAt(++ie) : z = V === "e" ? " " : "0", (U = I[V]) && (V = U(Z, z)), _.push(V), ee = ie + 1);
      return _.push(j.slice(ee, ie)), _.join("");
    };
  }
  function S(j, I) {
    return function(Z) {
      var _ = Oi(1900, void 0, 1), ie = E(_, j, Z += "", 0), ee, pe;
      if (ie != Z.length) return null;
      if ("Q" in _) return new Date(_.Q);
      if ("s" in _) return new Date(_.s * 1e3 + ("L" in _ ? _.L : 0));
      if (I && !("Z" in _) && (_.Z = 0), "p" in _ && (_.H = _.H % 12 + _.p * 12), _.m === void 0 && (_.m = "q" in _ ? _.q : 0), "V" in _) {
        if (_.V < 1 || _.V > 53) return null;
        "w" in _ || (_.w = 1), "Z" in _ ? (ee = Al(Oi(_.y, 0, 1)), pe = ee.getUTCDay(), ee = pe > 4 || pe === 0 ? Uo.ceil(ee) : Uo(ee), ee = zu.offset(ee, (_.V - 1) * 7), _.y = ee.getUTCFullYear(), _.m = ee.getUTCMonth(), _.d = ee.getUTCDate() + (_.w + 6) % 7) : (ee = El(Oi(_.y, 0, 1)), pe = ee.getDay(), ee = pe > 4 || pe === 0 ? Wo.ceil(ee) : Wo(ee), ee = ga.offset(ee, (_.V - 1) * 7), _.y = ee.getFullYear(), _.m = ee.getMonth(), _.d = ee.getDate() + (_.w + 6) % 7);
      } else ("W" in _ || "U" in _) && ("w" in _ || (_.w = "u" in _ ? _.u % 7 : "W" in _ ? 1 : 0), pe = "Z" in _ ? Al(Oi(_.y, 0, 1)).getUTCDay() : El(Oi(_.y, 0, 1)).getDay(), _.m = 0, _.d = "W" in _ ? (_.w + 6) % 7 + _.W * 7 - (pe + 5) % 7 : _.w + _.U * 7 - (pe + 6) % 7);
      return "Z" in _ ? (_.H += _.Z / 100 | 0, _.M += _.Z % 100, Al(_)) : El(_);
    };
  }
  function E(j, I, Z, _) {
    for (var ie = 0, ee = I.length, pe = Z.length, V, z; ie < ee; ) {
      if (_ >= pe) return -1;
      if (V = I.charCodeAt(ie++), V === 37) {
        if (V = I.charAt(ie++), z = O[V in sm ? I.charAt(ie++) : V], !z || (_ = z(j, Z, _)) < 0) return -1;
      } else if (V != Z.charCodeAt(_++)) return -1;
    }
    return _;
  }
  function N(j, I, Z) {
    var _ = l.exec(I.slice(Z));
    return _ ? (j.p = c.get(_[0].toLowerCase()), Z + _[0].length) : -1;
  }
  function k(j, I, Z) {
    var _ = h.exec(I.slice(Z));
    return _ ? (j.w = v.get(_[0].toLowerCase()), Z + _[0].length) : -1;
  }
  function R(j, I, Z) {
    var _ = f.exec(I.slice(Z));
    return _ ? (j.w = d.get(_[0].toLowerCase()), Z + _[0].length) : -1;
  }
  function C(j, I, Z) {
    var _ = y.exec(I.slice(Z));
    return _ ? (j.m = x.get(_[0].toLowerCase()), Z + _[0].length) : -1;
  }
  function F(j, I, Z) {
    var _ = g.exec(I.slice(Z));
    return _ ? (j.m = m.get(_[0].toLowerCase()), Z + _[0].length) : -1;
  }
  function L(j, I, Z) {
    return E(j, t, I, Z);
  }
  function M(j, I, Z) {
    return E(j, r, I, Z);
  }
  function $(j, I, Z) {
    return E(j, n, I, Z);
  }
  function B(j) {
    return o[j.getDay()];
  }
  function D(j) {
    return a[j.getDay()];
  }
  function K(j) {
    return s[j.getMonth()];
  }
  function W(j) {
    return u[j.getMonth()];
  }
  function fe(j) {
    return i[+(j.getHours() >= 12)];
  }
  function te(j) {
    return 1 + ~~(j.getMonth() / 3);
  }
  function ae(j) {
    return o[j.getUTCDay()];
  }
  function re(j) {
    return a[j.getUTCDay()];
  }
  function X(j) {
    return s[j.getUTCMonth()];
  }
  function oe(j) {
    return u[j.getUTCMonth()];
  }
  function ne(j) {
    return i[+(j.getUTCHours() >= 12)];
  }
  function A(j) {
    return 1 + ~~(j.getUTCMonth() / 3);
  }
  return { format: function(j) {
    var I = P(j += "", b);
    return I.toString = function() {
      return j;
    }, I;
  }, parse: function(j) {
    var I = S(j += "", false);
    return I.toString = function() {
      return j;
    }, I;
  }, utcFormat: function(j) {
    var I = P(j += "", w);
    return I.toString = function() {
      return j;
    }, I;
  }, utcParse: function(j) {
    var I = S(j += "", true);
    return I.toString = function() {
      return j;
    }, I;
  } };
}
var sm = { "-": "", _: " ", 0: "0" }, Je = /^\s*\d+/, A_ = /^%/, C_ = /[\\^$*+?|[\]().{}]/g;
function we(e3, t, r) {
  var n = e3 < 0 ? "-" : "", i = (n ? -e3 : e3) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function T_(e3) {
  return e3.replace(C_, "\\$&");
}
function Pi(e3) {
  return new RegExp("^(?:" + e3.map(T_).join("|") + ")", "i");
}
function Si(e3) {
  return new Map(e3.map((t, r) => [t.toLowerCase(), r]));
}
function I_(e3, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e3.w = +n[0], r + n[0].length) : -1;
}
function __(e3, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e3.u = +n[0], r + n[0].length) : -1;
}
function M_(e3, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e3.U = +n[0], r + n[0].length) : -1;
}
function k_(e3, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e3.V = +n[0], r + n[0].length) : -1;
}
function j_(e3, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e3.W = +n[0], r + n[0].length) : -1;
}
function lm(e3, t, r) {
  var n = Je.exec(t.slice(r, r + 4));
  return n ? (e3.y = +n[0], r + n[0].length) : -1;
}
function cm(e3, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e3.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function R_(e3, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e3.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function D_(e3, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e3.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function N_(e3, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e3.m = n[0] - 1, r + n[0].length) : -1;
}
function fm(e3, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e3.d = +n[0], r + n[0].length) : -1;
}
function L_(e3, t, r) {
  var n = Je.exec(t.slice(r, r + 3));
  return n ? (e3.m = 0, e3.d = +n[0], r + n[0].length) : -1;
}
function dm(e3, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e3.H = +n[0], r + n[0].length) : -1;
}
function $_(e3, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e3.M = +n[0], r + n[0].length) : -1;
}
function F_(e3, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e3.S = +n[0], r + n[0].length) : -1;
}
function B_(e3, t, r) {
  var n = Je.exec(t.slice(r, r + 3));
  return n ? (e3.L = +n[0], r + n[0].length) : -1;
}
function z_(e3, t, r) {
  var n = Je.exec(t.slice(r, r + 6));
  return n ? (e3.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function W_(e3, t, r) {
  var n = A_.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function U_(e3, t, r) {
  var n = Je.exec(t.slice(r));
  return n ? (e3.Q = +n[0], r + n[0].length) : -1;
}
function q_(e3, t, r) {
  var n = Je.exec(t.slice(r));
  return n ? (e3.s = +n[0], r + n[0].length) : -1;
}
function hm(e3, t) {
  return we(e3.getDate(), t, 2);
}
function K_(e3, t) {
  return we(e3.getHours(), t, 2);
}
function V_(e3, t) {
  return we(e3.getHours() % 12 || 12, t, 2);
}
function H_(e3, t) {
  return we(1 + ga.count(Ar(e3), e3), t, 3);
}
function R0(e3, t) {
  return we(e3.getMilliseconds(), t, 3);
}
function Y_(e3, t) {
  return R0(e3, t) + "000";
}
function G_(e3, t) {
  return we(e3.getMonth() + 1, t, 2);
}
function X_(e3, t) {
  return we(e3.getMinutes(), t, 2);
}
function Z_(e3, t) {
  return we(e3.getSeconds(), t, 2);
}
function Q_(e3) {
  var t = e3.getDay();
  return t === 0 ? 7 : t;
}
function J_(e3, t) {
  return we(Wu.count(Ar(e3) - 1, e3), t, 2);
}
function D0(e3) {
  var t = e3.getDay();
  return t >= 4 || t === 0 ? Zn(e3) : Zn.ceil(e3);
}
function eM(e3, t) {
  return e3 = D0(e3), we(Zn.count(Ar(e3), e3) + (Ar(e3).getDay() === 4), t, 2);
}
function tM(e3) {
  return e3.getDay();
}
function rM(e3, t) {
  return we(Wo.count(Ar(e3) - 1, e3), t, 2);
}
function nM(e3, t) {
  return we(e3.getFullYear() % 100, t, 2);
}
function iM(e3, t) {
  return e3 = D0(e3), we(e3.getFullYear() % 100, t, 2);
}
function aM(e3, t) {
  return we(e3.getFullYear() % 1e4, t, 4);
}
function oM(e3, t) {
  var r = e3.getDay();
  return e3 = r >= 4 || r === 0 ? Zn(e3) : Zn.ceil(e3), we(e3.getFullYear() % 1e4, t, 4);
}
function uM(e3) {
  var t = e3.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + we(t / 60 | 0, "0", 2) + we(t % 60, "0", 2);
}
function pm(e3, t) {
  return we(e3.getUTCDate(), t, 2);
}
function sM(e3, t) {
  return we(e3.getUTCHours(), t, 2);
}
function lM(e3, t) {
  return we(e3.getUTCHours() % 12 || 12, t, 2);
}
function cM(e3, t) {
  return we(1 + zu.count(Cr(e3), e3), t, 3);
}
function N0(e3, t) {
  return we(e3.getUTCMilliseconds(), t, 3);
}
function fM(e3, t) {
  return N0(e3, t) + "000";
}
function dM(e3, t) {
  return we(e3.getUTCMonth() + 1, t, 2);
}
function hM(e3, t) {
  return we(e3.getUTCMinutes(), t, 2);
}
function pM(e3, t) {
  return we(e3.getUTCSeconds(), t, 2);
}
function vM(e3) {
  var t = e3.getUTCDay();
  return t === 0 ? 7 : t;
}
function mM(e3, t) {
  return we(Uu.count(Cr(e3) - 1, e3), t, 2);
}
function L0(e3) {
  var t = e3.getUTCDay();
  return t >= 4 || t === 0 ? Qn(e3) : Qn.ceil(e3);
}
function gM(e3, t) {
  return e3 = L0(e3), we(Qn.count(Cr(e3), e3) + (Cr(e3).getUTCDay() === 4), t, 2);
}
function yM(e3) {
  return e3.getUTCDay();
}
function bM(e3, t) {
  return we(Uo.count(Cr(e3) - 1, e3), t, 2);
}
function wM(e3, t) {
  return we(e3.getUTCFullYear() % 100, t, 2);
}
function xM(e3, t) {
  return e3 = L0(e3), we(e3.getUTCFullYear() % 100, t, 2);
}
function OM(e3, t) {
  return we(e3.getUTCFullYear() % 1e4, t, 4);
}
function PM(e3, t) {
  var r = e3.getUTCDay();
  return e3 = r >= 4 || r === 0 ? Qn(e3) : Qn.ceil(e3), we(e3.getUTCFullYear() % 1e4, t, 4);
}
function SM() {
  return "+0000";
}
function vm() {
  return "%";
}
function mm(e3) {
  return +e3;
}
function gm(e3) {
  return Math.floor(+e3 / 1e3);
}
var Rn, $0, F0;
EM({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
function EM(e3) {
  return Rn = E_(e3), $0 = Rn.format, Rn.parse, F0 = Rn.utcFormat, Rn.utcParse, Rn;
}
function AM(e3) {
  return new Date(e3);
}
function CM(e3) {
  return e3 instanceof Date ? +e3 : +/* @__PURE__ */ new Date(+e3);
}
function ud(e3, t, r, n, i, a, o, u, s, l) {
  var c = Hf(), f = c.invert, d = c.domain, h = l(".%L"), v = l(":%S"), g = l("%I:%M"), m = l("%I %p"), y = l("%a %d"), x = l("%b %d"), b = l("%B"), w = l("%Y");
  function O(P) {
    return (s(P) < P ? h : u(P) < P ? v : o(P) < P ? g : a(P) < P ? m : n(P) < P ? i(P) < P ? y : x : r(P) < P ? b : w)(P);
  }
  return c.invert = function(P) {
    return new Date(f(P));
  }, c.domain = function(P) {
    return arguments.length ? d(Array.from(P, CM)) : d().map(AM);
  }, c.ticks = function(P) {
    var S = d();
    return e3(S[0], S[S.length - 1], P ?? 10);
  }, c.tickFormat = function(P, S) {
    return S == null ? O : l(S);
  }, c.nice = function(P) {
    var S = d();
    return (!P || typeof P.range != "function") && (P = t(S[0], S[S.length - 1], P ?? 10)), P ? d(E0(S, P)) : c;
  }, c.copy = function() {
    return ma(c, ud(e3, t, r, n, i, a, o, u, s, l));
  }, c;
}
function TM() {
  return $t.apply(ud(P_, S_, Ar, ad, Wu, ga, nd, td, vn, $0).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function IM() {
  return $t.apply(ud(x_, O_, Cr, od, Uu, zu, id, rd, vn, F0).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function qu() {
  var e3 = 0, t = 1, r, n, i, a, o = pt, u = false, s;
  function l(f) {
    return f == null || isNaN(f = +f) ? s : o(i === 0 ? 0.5 : (f = (a(f) - r) * i, u ? Math.max(0, Math.min(1, f)) : f));
  }
  l.domain = function(f) {
    return arguments.length ? ([e3, t] = f, r = a(e3 = +e3), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), l) : [e3, t];
  }, l.clamp = function(f) {
    return arguments.length ? (u = !!f, l) : u;
  }, l.interpolator = function(f) {
    return arguments.length ? (o = f, l) : o;
  };
  function c(f) {
    return function(d) {
      var h, v;
      return arguments.length ? ([h, v] = d, o = f(h, v), l) : [o(0), o(1)];
    };
  }
  return l.range = c(ci), l.rangeRound = c(Vf), l.unknown = function(f) {
    return arguments.length ? (s = f, l) : s;
  }, function(f) {
    return a = f, r = f(e3), n = f(t), i = r === n ? 0 : 1 / (n - r), l;
  };
}
function tn(e3, t) {
  return t.domain(e3.domain()).interpolator(e3.interpolator()).clamp(e3.clamp()).unknown(e3.unknown());
}
function B0() {
  var e3 = en(qu()(pt));
  return e3.copy = function() {
    return tn(e3, B0());
  }, kr.apply(e3, arguments);
}
function z0() {
  var e3 = Xf(qu()).domain([1, 10]);
  return e3.copy = function() {
    return tn(e3, z0()).base(e3.base());
  }, kr.apply(e3, arguments);
}
function W0() {
  var e3 = Zf(qu());
  return e3.copy = function() {
    return tn(e3, W0()).constant(e3.constant());
  }, kr.apply(e3, arguments);
}
function sd() {
  var e3 = Qf(qu());
  return e3.copy = function() {
    return tn(e3, sd()).exponent(e3.exponent());
  }, kr.apply(e3, arguments);
}
function _M() {
  return sd.apply(null, arguments).exponent(0.5);
}
function U0() {
  var e3 = [], t = pt;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((pa(e3, n, 1) - 1) / (e3.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e3.slice();
    e3 = [];
    for (let i of n) i != null && !isNaN(i = +i) && e3.push(i);
    return e3.sort(Hr), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e3.map((n, i) => t(i / (e3.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => vI(e3, a / n));
  }, r.copy = function() {
    return U0(t).domain(e3);
  }, kr.apply(r, arguments);
}
function Ku() {
  var e3 = 0, t = 0.5, r = 1, n = 1, i, a, o, u, s, l = pt, c, f = false, d;
  function h(g) {
    return isNaN(g = +g) ? d : (g = 0.5 + ((g = +c(g)) - a) * (n * g < n * a ? u : s), l(f ? Math.max(0, Math.min(1, g)) : g));
  }
  h.domain = function(g) {
    return arguments.length ? ([e3, t, r] = g, i = c(e3 = +e3), a = c(t = +t), o = c(r = +r), u = i === a ? 0 : 0.5 / (a - i), s = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, h) : [e3, t, r];
  }, h.clamp = function(g) {
    return arguments.length ? (f = !!g, h) : f;
  }, h.interpolator = function(g) {
    return arguments.length ? (l = g, h) : l;
  };
  function v(g) {
    return function(m) {
      var y, x, b;
      return arguments.length ? ([y, x, b] = m, l = WI(g, [y, x, b]), h) : [l(0), l(0.5), l(1)];
    };
  }
  return h.range = v(ci), h.rangeRound = v(Vf), h.unknown = function(g) {
    return arguments.length ? (d = g, h) : d;
  }, function(g) {
    return c = g, i = g(e3), a = g(t), o = g(r), u = i === a ? 0 : 0.5 / (a - i), s = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, h;
  };
}
function q0() {
  var e3 = en(Ku()(pt));
  return e3.copy = function() {
    return tn(e3, q0());
  }, kr.apply(e3, arguments);
}
function K0() {
  var e3 = Xf(Ku()).domain([0.1, 1, 10]);
  return e3.copy = function() {
    return tn(e3, K0()).base(e3.base());
  }, kr.apply(e3, arguments);
}
function V0() {
  var e3 = Zf(Ku());
  return e3.copy = function() {
    return tn(e3, V0()).constant(e3.constant());
  }, kr.apply(e3, arguments);
}
function ld() {
  var e3 = Qf(Ku());
  return e3.copy = function() {
    return tn(e3, ld()).exponent(e3.exponent());
  }, kr.apply(e3, arguments);
}
function MM() {
  return ld.apply(null, arguments).exponent(0.5);
}
const H0 = Object.freeze(Object.defineProperty({ __proto__: null, scaleBand: Uf, scaleDiverging: q0, scaleDivergingLog: K0, scaleDivergingPow: ld, scaleDivergingSqrt: MM, scaleDivergingSymlog: V0, scaleIdentity: S0, scaleImplicit: Ic, scaleLinear: P0, scaleLog: A0, scaleOrdinal: Wf, scalePoint: yI, scalePow: Jf, scaleQuantile: I0, scaleQuantize: _0, scaleRadial: T0, scaleSequential: B0, scaleSequentialLog: z0, scaleSequentialPow: sd, scaleSequentialQuantile: U0, scaleSequentialSqrt: _M, scaleSequentialSymlog: W0, scaleSqrt: f_, scaleSymlog: C0, scaleThreshold: M0, scaleTime: TM, scaleUtc: IM, tickFormat: O0 }, Symbol.toStringTag, { value: "Module" }));
function kM(e3) {
  var t = H0;
  if (e3 in t && typeof t[e3] == "function") return t[e3]();
  var r = "scale".concat(oa(e3));
  if (r in t && typeof t[r] == "function") return t[r]();
}
function ym(e3, t, r) {
  if (typeof e3 == "function") return e3.copy().domain(t).range(r);
  if (e3 != null) {
    var n = kM(e3);
    if (n != null) return n.domain(t).range(r), n;
  }
}
function cd(e3, t, r, n) {
  if (!(r == null || n == null)) return typeof e3.scale == "function" ? ym(e3.scale, r, n) : ym(t, r, n);
}
function jM(e3) {
  return "scale".concat(oa(e3));
}
function RM(e3) {
  return jM(e3) in H0;
}
var Y0 = (e3, t, r) => {
  if (e3 != null) {
    var { scale: n, type: i } = e3;
    if (n === "auto") return i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !t) ? "point" : i === "category" ? "band" : "linear";
    if (typeof n == "string") return RM(n) ? n : "point";
  }
};
function DM(e3, t) {
  for (var r = 0, n = e3.length, i = e3[0] < e3[e3.length - 1]; r < n; ) {
    var a = Math.floor((r + n) / 2);
    (i ? e3[a] < t : e3[a] > t) ? r = a + 1 : n = a;
  }
  return r;
}
function G0(e3, t) {
  if (e3) {
    var r = t ?? e3.domain(), n = r.map((a) => {
      var o;
      return (o = e3(a)) !== null && o !== void 0 ? o : 0;
    }), i = e3.range();
    if (!(r.length === 0 || i.length < 2)) return (a) => {
      var o, u, s = DM(n, a);
      if (s <= 0) return r[0];
      if (s >= r.length) return r[r.length - 1];
      var l = (o = n[s - 1]) !== null && o !== void 0 ? o : 0, c = (u = n[s]) !== null && u !== void 0 ? u : 0;
      return Math.abs(a - l) <= Math.abs(a - c) ? r[s - 1] : r[s];
    };
  }
}
function NM(e3) {
  if (e3 != null) return "invert" in e3 && typeof e3.invert == "function" ? e3.invert.bind(e3) : G0(e3, void 0);
}
function bm(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qo(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bm(Object(r), true).forEach(function(n) {
      LM(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : bm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function LM(e3, t, r) {
  return (t = $M(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function $M(e3) {
  var t = FM(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function FM(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var jc = [0, "auto"], Fe = { allowDataOverflow: false, allowDecimals: true, allowDuplicatedCategory: true, angle: 0, dataKey: void 0, domain: void 0, height: 30, hide: true, id: 0, includeHidden: false, interval: "preserveEnd", minTickGap: 5, mirror: false, name: void 0, orientation: "bottom", padding: { left: 0, right: 0 }, reversed: false, scale: "auto", tick: true, tickCount: 5, tickFormatter: void 0, ticks: void 0, type: "category", unit: void 0, niceTicks: "auto" }, X0 = (e3, t) => e3.cartesianAxis.xAxis[t], jr = (e3, t) => {
  var r = X0(e3, t);
  return r ?? Fe;
}, Be = { allowDataOverflow: false, allowDecimals: true, allowDuplicatedCategory: true, angle: 0, dataKey: void 0, domain: jc, hide: true, id: 0, includeHidden: false, interval: "preserveEnd", minTickGap: 5, mirror: false, name: void 0, orientation: "left", padding: { top: 0, bottom: 0 }, reversed: false, scale: "auto", tick: true, tickCount: 5, tickFormatter: void 0, ticks: void 0, type: "number", unit: void 0, niceTicks: "auto", width: la }, Z0 = (e3, t) => e3.cartesianAxis.yAxis[t], Rr = (e3, t) => {
  var r = Z0(e3, t);
  return r ?? Be;
}, BM = { domain: [0, "auto"], includeHidden: false, reversed: false, allowDataOverflow: false, allowDuplicatedCategory: false, dataKey: void 0, id: 0, name: "", range: [64, 64], scale: "auto", type: "number", unit: "" }, fd = (e3, t) => {
  var r = e3.cartesianAxis.zAxis[t];
  return r ?? BM;
}, gt = (e3, t, r) => {
  switch (t) {
    case "xAxis":
      return jr(e3, r);
    case "yAxis":
      return Rr(e3, r);
    case "zAxis":
      return fd(e3, r);
    case "angleAxis":
      return Nf(e3, r);
    case "radiusAxis":
      return Lf(e3, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, zM = (e3, t, r) => {
  switch (t) {
    case "xAxis":
      return jr(e3, r);
    case "yAxis":
      return Rr(e3, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, ya = (e3, t, r) => {
  switch (t) {
    case "xAxis":
      return jr(e3, r);
    case "yAxis":
      return Rr(e3, r);
    case "angleAxis":
      return Nf(e3, r);
    case "radiusAxis":
      return Lf(e3, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, Q0 = (e3) => e3.graphicalItems.cartesianItems.some((t) => t.type === "bar") || e3.graphicalItems.polarItems.some((t) => t.type === "radialBar");
function J0(e3, t) {
  return (r) => {
    switch (e3) {
      case "xAxis":
        return "xAxisId" in r && r.xAxisId === t;
      case "yAxis":
        return "yAxisId" in r && r.yAxisId === t;
      case "zAxis":
        return "zAxisId" in r && r.zAxisId === t;
      case "angleAxis":
        return "angleAxisId" in r && r.angleAxisId === t;
      case "radiusAxis":
        return "radiusAxisId" in r && r.radiusAxisId === t;
      default:
        return false;
    }
  };
}
var ew = (e3) => e3.graphicalItems.cartesianItems, WM = T([Ze, Lu], J0), tw = (e3, t, r) => e3.filter(r).filter((n) => (t == null ? void 0 : t.includeHidden) === true ? true : !n.hide), fi = T([ew, gt, WM], tw, { memoizeOptions: { resultEqualityCheck: Fu } }), rw = T([fi], (e3) => e3.filter((t) => t.type === "area" || t.type === "bar").filter(Ff)), nw = (e3) => e3.filter((t) => !("stackId" in t) || t.stackId === void 0), UM = T([fi], nw), iw = (e3) => e3.map((t) => t.data).filter(Boolean).flat(1), qM = T([fi], (e3) => e3.some((t) => !t.data)), aw = T([fi], iw, { memoizeOptions: { resultEqualityCheck: Fu } }), ow = (e3, t) => {
  var { chartData: r = [], dataStartIndex: n, dataEndIndex: i } = t;
  return e3.length > 0 ? e3 : r.slice(n, i + 1);
}, dd = T([aw, ha], ow), KM = (e3, t, r) => (t == null ? void 0 : t.dataKey) != null ? e3.map((n) => ({ value: Ge(n, t.dataKey) })) : r.length > 0 ? r.map((n) => n.dataKey).flatMap((n) => e3.map((i) => ({ value: Ge(i, n) }))) : e3.map((n) => ({ value: n })), uw = (e3, t, r, n, i, a) => {
  var { chartData: o = [], dataStartIndex: u, dataEndIndex: s } = n, l = KM(e3, t, r);
  if (i && (t == null ? void 0 : t.dataKey) != null && a.length > 0) {
    var c = o.slice(u, s + 1), f = c.map((d) => ({ value: Ge(d, t.dataKey) })).filter((d) => d.value != null);
    return [...f, ...l];
  }
  return l;
}, ba = T([dd, gt, fi, ha, qM, aw], uw);
function qn(e3) {
  if (sr(e3) || e3 instanceof Date) {
    var t = Number(e3);
    if (Oe(t)) return t;
  }
}
function wm(e3) {
  if (Array.isArray(e3)) {
    var t = [qn(e3[0]), qn(e3[1])];
    return or(t) ? t : void 0;
  }
  var r = qn(e3);
  if (r != null) return [r, r];
}
function cr(e3) {
  return e3.map(qn).filter(nr);
}
function VM(e3, t) {
  var r = qn(e3), n = qn(t);
  return r == null && n == null ? 0 : r == null ? -1 : n == null ? 1 : r - n;
}
var HM = T([ba], (e3) => e3 == null ? void 0 : e3.map((t) => t.value).sort(VM));
function sw(e3, t) {
  switch (e3) {
    case "xAxis":
      return t.direction === "x";
    case "yAxis":
      return t.direction === "y";
    default:
      return false;
  }
}
function YM(e3, t, r) {
  if (!r) return [];
  if (!r.length) return [];
  var n;
  if (typeof t == "number" && !Pr(t)) n = t;
  else if (Array.isArray(t)) {
    var i = cr(t);
    i.length > 0 && (n = Math.max(...i));
  }
  return n == null ? [] : cr(r.flatMap((a) => {
    var o = Ge(e3, a.dataKey), u, s;
    if (Array.isArray(o) ? [u, s] = o : u = s = o, !(!Oe(u) || !Oe(s))) return [n - u, n + s];
  }));
}
var qe = (e3) => {
  var t = Qe(e3), r = li(e3);
  return ya(e3, t, r);
}, Jn = T([qe], (e3) => e3 == null ? void 0 : e3.dataKey), GM = T([rw, ha, qe], h0), lw = (e3, t, r, n) => {
  var i = {}, a = t.reduce((o, u) => {
    if (u.stackId == null) return o;
    var s = o[u.stackId];
    return s == null && (s = []), s.push(u), o[u.stackId] = s, o;
  }, i);
  return Object.fromEntries(Object.entries(a).map((o) => {
    var [u, s] = o, l = n ? [...s].reverse() : s, c = l.map(d0);
    return [u, { stackedData: VE(e3, c, r), graphicalItems: l }];
  }));
}, XM = T([GM, rw, ju, a0], lw), cw = (e3, t, r, n) => {
  var { dataStartIndex: i, dataEndIndex: a } = t;
  if (n == null && r !== "zAxis") {
    var o = GE(e3, i, a);
    if (!(o != null && o[0] === 0 && o[1] === 0)) return o;
  }
}, ZM = T([gt], (e3) => e3.allowDataOverflow), hd = (e3) => {
  var t;
  if (e3 == null || !("domain" in e3)) return jc;
  if (e3.domain != null) return e3.domain;
  if ("ticks" in e3 && e3.ticks != null) {
    if (e3.type === "number") {
      var r = cr(e3.ticks);
      return [Math.min(...r), Math.max(...r)];
    }
    if (e3.type === "category") return e3.ticks.map(String);
  }
  return (t = e3 == null ? void 0 : e3.domain) !== null && t !== void 0 ? t : jc;
}, fw = T([gt], hd), dw = T([fw, ZM], Yb), QM = T([XM, fr, Ze, dw], cw, { memoizeOptions: { resultEqualityCheck: $u } }), pd = (e3) => e3.errorBars, JM = (e3, t, r) => e3.flatMap((n) => t[n.id]).filter(Boolean).filter((n) => sw(r, n)), Ko = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  var i = r.filter(Boolean);
  if (i.length !== 0) {
    var a = i.flat(), o = Math.min(...a), u = Math.max(...a);
    return [o, u];
  }
}, hw = function(t, r, n, i, a) {
  var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [], u, s;
  if (n.length > 0 && n.forEach((l) => {
    var c, f = l.data != null ? [...l.data] : o, d = (c = i[l.id]) === null || c === void 0 ? void 0 : c.filter((h) => sw(a, h));
    f.forEach((h) => {
      var v, g = Ge(h, (v = r.dataKey) !== null && v !== void 0 ? v : l.dataKey), m = YM(h, g, d);
      if (m.length >= 2) {
        var y = Math.min(...m), x = Math.max(...m);
        (u == null || y < u) && (u = y), (s == null || x > s) && (s = x);
      }
      var b = wm(g);
      b != null && (u = u == null ? b[0] : Math.min(u, b[0]), s = s == null ? b[1] : Math.max(s, b[1]));
    });
  }), (r == null ? void 0 : r.dataKey) != null && n.length === 0 && t.forEach((l) => {
    var c = wm(Ge(l, r.dataKey));
    c != null && (u = u == null ? c[0] : Math.min(u, c[0]), s = s == null ? c[1] : Math.max(s, c[1]));
  }), Oe(u) && Oe(s)) return [u, s];
}, ek = T([dd, gt, UM, pd, Ze, WT], hw, { memoizeOptions: { resultEqualityCheck: $u } });
function tk(e3) {
  var { value: t } = e3;
  if (sr(t) || t instanceof Date) return t;
}
var rk = (e3, t, r) => {
  var n = e3.map(tk).filter((i) => i != null);
  return r && (t.dataKey == null || t.allowDuplicatedCategory && Sy(n)) ? Vb(0, e3.length) : t.allowDuplicatedCategory ? n : Array.from(new Set(n));
}, pw = (e3) => e3.referenceElements.dots, di = (e3, t, r) => e3.filter((n) => n.ifOverflow === "extendDomain").filter((n) => t === "xAxis" ? n.xAxisId === r : n.yAxisId === r), nk = T([pw, Ze, Lu], di), vw = (e3) => e3.referenceElements.areas, ik = T([vw, Ze, Lu], di), mw = (e3) => e3.referenceElements.lines, ak = T([mw, Ze, Lu], di), gw = (e3, t) => {
  if (e3 != null) {
    var r = cr(e3.map((n) => t === "xAxis" ? n.x : n.y));
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  }
}, ok = T(nk, Ze, gw), yw = (e3, t) => {
  if (e3 != null) {
    var r = cr(e3.flatMap((n) => [t === "xAxis" ? n.x1 : n.y1, t === "xAxis" ? n.x2 : n.y2]));
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  }
}, uk = T([ik, Ze], yw);
function sk(e3) {
  var t;
  if (e3.x != null) return cr([e3.x]);
  var r = (t = e3.segment) === null || t === void 0 ? void 0 : t.map((n) => n.x);
  return r == null || r.length === 0 ? [] : cr(r);
}
function lk(e3) {
  var t;
  if (e3.y != null) return cr([e3.y]);
  var r = (t = e3.segment) === null || t === void 0 ? void 0 : t.map((n) => n.y);
  return r == null || r.length === 0 ? [] : cr(r);
}
var bw = (e3, t) => {
  if (e3 != null) {
    var r = e3.flatMap((n) => t === "xAxis" ? sk(n) : lk(n));
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  }
}, ck = T([ak, Ze], bw), fk = T(ok, ck, uk, (e3, t, r) => Ko(e3, r, t)), ww = (e3, t, r, n, i, a, o, u) => {
  if (r != null) return r;
  var s = o === "vertical" && u === "xAxis" || o === "horizontal" && u === "yAxis", l = s ? Ko(n, a, i) : Ko(a, i);
  return qT(t, l, e3.allowDataOverflow);
}, dk = T([gt, fw, dw, QM, ek, fk, je, Ze], ww, { memoizeOptions: { resultEqualityCheck: $u } }), hk = [0, 1], xw = (e3, t, r, n, i, a, o) => {
  if (!((e3 == null || r == null || r.length === 0) && o === void 0)) {
    var { dataKey: u, type: s } = e3, l = Ir(t, a);
    if (l && u == null) {
      var c;
      return Vb(0, (c = r == null ? void 0 : r.length) !== null && c !== void 0 ? c : 0);
    }
    return s === "category" ? rk(n, e3, l) : i === "expand" && !l ? hk : o;
  }
}, vd = T([gt, je, dd, ba, ju, Ze, dk], xw), hi = T([gt, Q0, jf], Y0), Ow = (e3, t, r) => {
  var { niceTicks: n } = t;
  if (n !== "none") {
    var i = hd(t), a = Array.isArray(i) && (i[0] === "auto" || i[1] === "auto");
    if ((n === "snap125" || n === "adaptive") && t != null && t.tickCount && or(e3)) {
      if (a) return _v(e3, t.tickCount, t.allowDecimals, n);
      if (t.type === "number") return Mv(e3, t.tickCount, t.allowDecimals, n);
    }
    if (n === "auto" && r === "linear" && t != null && t.tickCount) {
      if (a && or(e3)) return _v(e3, t.tickCount, t.allowDecimals, "adaptive");
      if (t.type === "number" && or(e3)) return Mv(e3, t.tickCount, t.allowDecimals, "adaptive");
    }
  }
}, md = T([vd, ya, hi], Ow), Pw = (e3, t, r, n) => {
  if (n !== "angleAxis" && (e3 == null ? void 0 : e3.type) === "number" && or(t) && Array.isArray(r) && r.length > 0) {
    var i, a, o = t[0], u = (i = r[0]) !== null && i !== void 0 ? i : 0, s = t[1], l = (a = r[r.length - 1]) !== null && a !== void 0 ? a : 0;
    return [Math.min(o, u), Math.max(s, l)];
  }
  return t;
}, pk = T([gt, vd, md, Ze], Pw), vk = T(ba, gt, (e3, t) => {
  if (!(!t || t.type !== "number")) {
    var r = 1 / 0, n = Array.from(cr(e3.map((f) => f.value))).sort((f, d) => f - d), i = n[0], a = n[n.length - 1];
    if (i == null || a == null) return 1 / 0;
    var o = a - i;
    if (o === 0) return 1 / 0;
    for (var u = 0; u < n.length - 1; u++) {
      var s = n[u], l = n[u + 1];
      if (!(s == null || l == null)) {
        var c = l - s;
        r = Math.min(r, c);
      }
    }
    return r / o;
  }
}), Sw = T(vk, je, GT, at, (e3, t, r, n, i) => i, (e3, t, r, n, i) => {
  if (!Oe(e3)) return 0;
  var a = t === "vertical" ? n.height : n.width;
  if (i === "gap") return e3 * a / 2;
  if (i === "no-gap") {
    var o = Zr(r, e3 * a), u = e3 * a / 2;
    return u - o - (u - o) / a * o;
  }
  return 0;
}), mk = (e3, t, r) => {
  var n = jr(e3, t);
  return n == null || typeof n.padding != "string" ? 0 : Sw(e3, "xAxis", t, r, n.padding);
}, gk = (e3, t, r) => {
  var n = Rr(e3, t);
  return n == null || typeof n.padding != "string" ? 0 : Sw(e3, "yAxis", t, r, n.padding);
}, yk = T(jr, mk, (e3, t) => {
  var r, n;
  if (e3 == null) return { left: 0, right: 0 };
  var { padding: i } = e3;
  return typeof i == "string" ? { left: t, right: t } : { left: ((r = i.left) !== null && r !== void 0 ? r : 0) + t, right: ((n = i.right) !== null && n !== void 0 ? n : 0) + t };
}), bk = T(Rr, gk, (e3, t) => {
  var r, n;
  if (e3 == null) return { top: 0, bottom: 0 };
  var { padding: i } = e3;
  return typeof i == "string" ? { top: t, bottom: t } : { top: ((r = i.top) !== null && r !== void 0 ? r : 0) + t, bottom: ((n = i.bottom) !== null && n !== void 0 ? n : 0) + t };
}), wk = T([at, yk, Cu, Au, (e3, t, r) => r], (e3, t, r, n, i) => {
  var { padding: a } = n;
  return i ? [a.left, r.width - a.right] : [e3.left + t.left, e3.left + e3.width - t.right];
}), xk = T([at, je, bk, Cu, Au, (e3, t, r) => r], (e3, t, r, n, i, a) => {
  var { padding: o } = i;
  return a ? [n.height - o.bottom, o.top] : t === "horizontal" ? [e3.top + e3.height - r.bottom, e3.top + r.top] : [e3.top + r.top, e3.top + e3.height - r.bottom];
}), wa = (e3, t, r, n) => {
  var i;
  switch (t) {
    case "xAxis":
      return wk(e3, r, n);
    case "yAxis":
      return xk(e3, r, n);
    case "zAxis":
      return (i = fd(e3, r)) === null || i === void 0 ? void 0 : i.range;
    case "angleAxis":
      return l0(e3);
    case "radiusAxis":
      return c0(e3, r);
    default:
      return;
  }
}, Ew = T([gt, wa], Ru), Ok = T([hi, pk], nI), gd = T([gt, hi, Ok, Ew], cd), Aw = (e3, t, r, n) => {
  if (!(r == null || r.dataKey == null)) {
    var { type: i, scale: a } = r, o = Ir(e3, n);
    if (o && (i === "number" || a !== "auto")) return t.map((u) => u.value);
  }
}, yd = T([je, ba, ya, Ze], Aw), Vu = T([gd], Bf);
T([gd], NM);
T([gd, HM], G0);
T([fi, pd, Ze], JM);
function Cw(e3, t) {
  return e3.id < t.id ? -1 : e3.id > t.id ? 1 : 0;
}
var Hu = (e3, t) => t, Yu = (e3, t, r) => r, Pk = T(Su, Hu, Yu, (e3, t, r) => e3.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(Cw)), Sk = T(Eu, Hu, Yu, (e3, t, r) => e3.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(Cw)), Tw = (e3, t) => ({ width: e3.width, height: t.height }), Ek = (e3, t) => {
  var r = typeof t.width == "number" ? t.width : la;
  return { width: r, height: e3.height };
}, Ak = T(at, jr, Tw), Ck = (e3, t, r) => {
  switch (t) {
    case "top":
      return e3.top;
    case "bottom":
      return r - e3.bottom;
    default:
      return 0;
  }
}, Tk = (e3, t, r) => {
  switch (t) {
    case "left":
      return e3.left;
    case "right":
      return r - e3.right;
    default:
      return 0;
  }
}, Ik = T(Mr, at, Pk, Hu, Yu, (e3, t, r, n, i) => {
  var a = {}, o;
  return r.forEach((u) => {
    var s = Tw(t, u);
    o == null && (o = Ck(t, n, e3));
    var l = n === "top" && !i || n === "bottom" && i;
    a[u.id] = o - Number(l) * s.height, o += (l ? -1 : 1) * s.height;
  }), a;
}), _k = T(_r, at, Sk, Hu, Yu, (e3, t, r, n, i) => {
  var a = {}, o;
  return r.forEach((u) => {
    var s = Ek(t, u);
    o == null && (o = Tk(t, n, e3));
    var l = n === "left" && !i || n === "right" && i;
    a[u.id] = o - Number(l) * s.width, o += (l ? -1 : 1) * s.width;
  }), a;
}), Mk = (e3, t) => {
  var r = jr(e3, t);
  if (r != null) return Ik(e3, r.orientation, r.mirror);
}, kk = T([at, jr, Mk, (e3, t) => t], (e3, t, r, n) => {
  if (t != null) {
    var i = r == null ? void 0 : r[n];
    return i == null ? { x: e3.left, y: 0 } : { x: e3.left, y: i };
  }
}), jk = (e3, t) => {
  var r = Rr(e3, t);
  if (r != null) return _k(e3, r.orientation, r.mirror);
}, Rk = T([at, Rr, jk, (e3, t) => t], (e3, t, r, n) => {
  if (t != null) {
    var i = r == null ? void 0 : r[n];
    return i == null ? { x: 0, y: e3.top } : { x: i, y: e3.top };
  }
}), Dk = T(at, Rr, (e3, t) => {
  var r = typeof t.width == "number" ? t.width : la;
  return { width: r, height: e3.height };
}), Iw = (e3, t, r, n) => {
  if (r != null) {
    var { allowDuplicatedCategory: i, type: a, dataKey: o } = r, u = Ir(e3, n), s = t.map((c) => c.value), l = s.filter((c) => c != null);
    if (o && u && a === "category" && i && Sy(l)) return s;
  }
}, bd = T([je, ba, gt, Ze], Iw);
T([je, zM, hi, Vu, bd, yd, wa, md, Ze], (e3, t, r, n, i, a, o, u, s) => {
  if (t != null) {
    var l = Ir(e3, s);
    return { angle: t.angle, interval: t.interval, minTickGap: t.minTickGap, orientation: t.orientation, tick: t.tick, tickCount: t.tickCount, tickFormatter: t.tickFormatter, ticks: t.ticks, type: t.type, unit: t.unit, axisType: s, categoricalDomain: a, duplicateDomain: i, isCategorical: l, niceTicks: u, range: o, realScaleType: r, scale: n };
  }
});
var Nk = (e3, t, r, n, i, a, o, u, s) => {
  if (!(t == null || n == null)) {
    var l = Ir(e3, s), { type: c, ticks: f, tickCount: d } = t, h = r === "scaleBand" && typeof n.bandwidth == "function" ? n.bandwidth() / 2 : 2, v = c === "category" && n.bandwidth ? n.bandwidth() / h : 0;
    v = s === "angleAxis" && a != null && a.length >= 2 ? Kt(a[0] - a[1]) * 2 * v : v;
    var g = f || i;
    return g ? g.map((m, y) => {
      var x = o ? o.indexOf(m) : m, b = n.map(x);
      return Oe(b) ? { index: y, coordinate: b + v, value: m, offset: v } : null;
    }).filter(nr) : l && u ? u.map((m, y) => {
      var x = n.map(m);
      return Oe(x) ? { coordinate: x + v, value: m, index: y, offset: v } : null;
    }).filter(nr) : n.ticks ? n.ticks(d).map((m, y) => {
      var x = n.map(m);
      return Oe(x) ? { coordinate: x + v, value: m, index: y, offset: v } : null;
    }).filter(nr) : n.domain().map((m, y) => {
      var x = n.map(m);
      return Oe(x) ? { coordinate: x + v, value: o ? o[m] : m, index: y, offset: v } : null;
    }).filter(nr);
  }
}, _w = T([je, ya, hi, Vu, md, wa, bd, yd, Ze], Nk), Lk = (e3, t, r, n, i, a, o) => {
  if (!(t == null || r == null || n == null || n[0] === n[1])) {
    var u = Ir(e3, o), { tickCount: s } = t, l = 0;
    return l = o === "angleAxis" && (n == null ? void 0 : n.length) >= 2 ? Kt(n[0] - n[1]) * 2 * l : l, u && a ? a.map((c, f) => {
      var d = r.map(c);
      return Oe(d) ? { coordinate: d + l, value: c, index: f, offset: l } : null;
    }).filter(nr) : r.ticks ? r.ticks(s).map((c, f) => {
      var d = r.map(c);
      return Oe(d) ? { coordinate: d + l, value: c, index: f, offset: l } : null;
    }).filter(nr) : r.domain().map((c, f) => {
      var d = r.map(c);
      return Oe(d) ? { coordinate: d + l, value: i ? i[c] : c, index: f, offset: l } : null;
    }).filter(nr);
  }
}, Mw = T([je, ya, Vu, wa, bd, yd, Ze], Lk), kw = T(gt, Vu, (e3, t) => {
  if (!(e3 == null || t == null)) return qo(qo({}, e3), {}, { scale: t });
}), $k = T([gt, hi, vd, Ew], cd), Fk = T([$k], Bf);
T((e3, t, r) => fd(e3, r), Fk, (e3, t) => {
  if (!(e3 == null || t == null)) return qo(qo({}, e3), {}, { scale: t });
});
var Bk = T([je, Su, Eu], (e3, t, r) => {
  switch (e3) {
    case "horizontal":
      return t.some((n) => n.reversed) ? "right-to-left" : "left-to-right";
    case "vertical":
      return r.some((n) => n.reversed) ? "bottom-to-top" : "top-to-bottom";
    case "centric":
    case "radial":
      return "left-to-right";
    default:
      return;
  }
}), zk = (e3, t, r) => {
  var n;
  return (n = e3.renderedTicks[t]) === null || n === void 0 ? void 0 : n[r];
};
T([zk], (e3) => {
  if (!(!e3 || e3.length === 0)) return (t) => {
    var r, n = 1 / 0, i = e3[0];
    for (var a of e3) {
      var o = Math.abs(a.coordinate - t);
      o < n && (n = o, i = a);
    }
    return (r = i) === null || r === void 0 ? void 0 : r.value;
  };
});
var jw = (e3) => e3.options.defaultTooltipEventType, Rw = (e3) => e3.options.validateTooltipEventTypes;
function Dw(e3, t, r) {
  if (e3 == null) return t;
  var n = e3 ? "axis" : "item";
  return r == null ? t : r.includes(n) ? n : t;
}
function xa(e3, t) {
  var r = jw(e3), n = Rw(e3);
  return Dw(t, r, n);
}
function Wk(e3) {
  return se((t) => xa(t, e3));
}
var Nw = (e3, t) => {
  var r, n = Number(t);
  if (!(Pr(n) || t == null)) return n >= 0 ? e3 == null || (r = e3[n]) === null || r === void 0 ? void 0 : r.value : void 0;
}, Uk = (e3) => e3.tooltip.settings, Ur = { active: false, index: null, dataKey: void 0, graphicalItemId: void 0, coordinate: void 0 }, qk = { itemInteraction: { click: Ur, hover: Ur }, axisInteraction: { click: Ur, hover: Ur }, keyboardInteraction: Ur, syncInteraction: { active: false, index: null, dataKey: void 0, label: void 0, coordinate: void 0, sourceViewBox: void 0, graphicalItemId: void 0 }, tooltipItemPayloads: [], settings: { shared: void 0, trigger: "hover", axisId: 0, active: false, defaultIndex: void 0 } }, Lw = ft({ name: "tooltip", initialState: qk, reducers: { addTooltipEntrySettings: { reducer(e3, t) {
  e3.tooltipItemPayloads.push(t.payload);
}, prepare: Ce() }, replaceTooltipEntrySettings: { reducer(e3, t) {
  var { prev: r, next: n } = t.payload, i = Dt(e3).tooltipItemPayloads.indexOf(r);
  i > -1 && (e3.tooltipItemPayloads[i] = n);
}, prepare: Ce() }, removeTooltipEntrySettings: { reducer(e3, t) {
  var r = Dt(e3).tooltipItemPayloads.indexOf(t.payload);
  r > -1 && e3.tooltipItemPayloads.splice(r, 1);
}, prepare: Ce() }, setTooltipSettingsState(e3, t) {
  e3.settings = t.payload;
}, setActiveMouseOverItemIndex(e3, t) {
  e3.syncInteraction.active = false, e3.syncInteraction.sourceViewBox = void 0, e3.keyboardInteraction.active = false, e3.itemInteraction.hover.active = true, e3.itemInteraction.hover.index = t.payload.activeIndex, e3.itemInteraction.hover.dataKey = t.payload.activeDataKey, e3.itemInteraction.hover.graphicalItemId = t.payload.activeGraphicalItemId, e3.itemInteraction.hover.coordinate = t.payload.activeCoordinate;
}, mouseLeaveChart(e3) {
  e3.itemInteraction.hover.active = false, e3.axisInteraction.hover.active = false;
}, mouseLeaveItem(e3) {
  e3.itemInteraction.hover.active = false;
}, setActiveClickItemIndex(e3, t) {
  e3.syncInteraction.active = false, e3.syncInteraction.sourceViewBox = void 0, e3.itemInteraction.click.active = true, e3.keyboardInteraction.active = false, e3.itemInteraction.click.index = t.payload.activeIndex, e3.itemInteraction.click.dataKey = t.payload.activeDataKey, e3.itemInteraction.click.graphicalItemId = t.payload.activeGraphicalItemId, e3.itemInteraction.click.coordinate = t.payload.activeCoordinate;
}, setMouseOverAxisIndex(e3, t) {
  e3.syncInteraction.active = false, e3.syncInteraction.sourceViewBox = void 0, e3.axisInteraction.hover.active = true, e3.keyboardInteraction.active = false, e3.axisInteraction.hover.index = t.payload.activeIndex, e3.axisInteraction.hover.dataKey = t.payload.activeDataKey, e3.axisInteraction.hover.coordinate = t.payload.activeCoordinate;
}, setMouseClickAxisIndex(e3, t) {
  e3.syncInteraction.active = false, e3.syncInteraction.sourceViewBox = void 0, e3.keyboardInteraction.active = false, e3.axisInteraction.click.active = true, e3.axisInteraction.click.index = t.payload.activeIndex, e3.axisInteraction.click.dataKey = t.payload.activeDataKey, e3.axisInteraction.click.coordinate = t.payload.activeCoordinate;
}, setSyncInteraction(e3, t) {
  e3.syncInteraction = t.payload;
}, setKeyboardInteraction(e3, t) {
  e3.keyboardInteraction.active = t.payload.active, e3.keyboardInteraction.index = t.payload.activeIndex, e3.keyboardInteraction.coordinate = t.payload.activeCoordinate;
} } }), { addTooltipEntrySettings: Kk, replaceTooltipEntrySettings: Vk, removeTooltipEntrySettings: Hk, setTooltipSettingsState: Yk, setActiveMouseOverItemIndex: Gk, mouseLeaveItem: SW, mouseLeaveChart: $w, setActiveClickItemIndex: EW, setMouseOverAxisIndex: Fw, setMouseClickAxisIndex: Xk, setSyncInteraction: _i, setKeyboardInteraction: Vo } = Lw.actions, Zk = Lw.reducer;
function xm(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $a(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xm(Object(r), true).forEach(function(n) {
      Qk(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : xm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function Qk(e3, t, r) {
  return (t = Jk(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function Jk(e3) {
  var t = ej(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ej(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function tj(e3, t, r) {
  return t === "axis" ? r === "click" ? e3.axisInteraction.click : e3.axisInteraction.hover : r === "click" ? e3.itemInteraction.click : e3.itemInteraction.hover;
}
function rj(e3) {
  return e3.index != null;
}
var Bw = (e3, t, r, n) => {
  if (t == null) return Ur;
  var i = tj(e3, t, r);
  if (i == null) return Ur;
  if (i.active) return i;
  if (e3.keyboardInteraction.active) return e3.keyboardInteraction;
  if (e3.syncInteraction.active && e3.syncInteraction.index != null) return e3.syncInteraction;
  var a = e3.settings.active === true;
  if (rj(i)) {
    if (a) return $a($a({}, i), {}, { active: true });
  } else if (n != null) return { active: true, coordinate: void 0, dataKey: void 0, index: n, graphicalItemId: void 0 };
  return $a($a({}, Ur), {}, { coordinate: i.coordinate });
};
function nj(e3) {
  if (typeof e3 == "number") return Number.isFinite(e3) ? e3 : void 0;
  if (e3 instanceof Date) {
    var t = e3.valueOf();
    return Number.isFinite(t) ? t : void 0;
  }
  var r = Number(e3);
  return Number.isFinite(r) ? r : void 0;
}
function ij(e3, t) {
  var r = nj(e3), n = t[0], i = t[1];
  if (r === void 0) return false;
  var a = Math.min(n, i), o = Math.max(n, i);
  return r >= a && r <= o;
}
function aj(e3, t, r) {
  if (r == null || t == null) return true;
  var n = Ge(e3, t);
  return n == null || !or(r) ? true : ij(n, r);
}
var Ri = (e3, t, r, n) => {
  var i = e3 == null ? void 0 : e3.index;
  if (i == null) return null;
  var a = Number(i);
  if (!Oe(a)) return i;
  var o = 0, u = 1 / 0;
  t.length > 0 && (u = t.length - 1);
  var s = Math.max(o, Math.min(a, u)), l = t[s];
  return l == null || aj(l, r, n) ? String(s) : null;
}, zw = (e3, t, r, n, i, a, o) => {
  if (a != null) {
    var u = o[0], s = u == null ? void 0 : u.getPosition(a);
    if (s != null) return s;
    var l = i == null ? void 0 : i[Number(a)];
    if (l) switch (r) {
      case "horizontal":
        return { x: l.coordinate, y: (n.top + t) / 2 };
      default:
        return { x: (n.left + e3) / 2, y: l.coordinate };
    }
  }
}, Ww = (e3, t, r, n) => {
  if (t === "axis") return e3.tooltipItemPayloads;
  if (e3.tooltipItemPayloads.length === 0) return [];
  var i;
  if (r === "hover" ? i = e3.itemInteraction.hover.graphicalItemId : i = e3.itemInteraction.click.graphicalItemId, e3.syncInteraction.active && i == null) return e3.tooltipItemPayloads;
  if (i == null && (n != null || e3.keyboardInteraction.active)) {
    var a = e3.tooltipItemPayloads[0];
    return a != null ? [a] : [];
  }
  return e3.tooltipItemPayloads.filter((o) => {
    var u;
    return ((u = o.settings) === null || u === void 0 ? void 0 : u.graphicalItemId) === i;
  });
}, Uw = (e3) => e3.options.tooltipPayloadSearcher, pi = (e3) => e3.tooltip;
function Om(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pm(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Om(Object(r), true).forEach(function(n) {
      oj(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Om(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function oj(e3, t, r) {
  return (t = uj(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function uj(e3) {
  var t = sj(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function sj(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function lj(e3) {
  if (typeof e3 == "string" || typeof e3 == "number") return e3;
}
function cj(e3) {
  if (typeof e3 == "string" || typeof e3 == "number" || typeof e3 == "boolean") return e3;
}
function fj(e3) {
  if (typeof e3 == "string" || typeof e3 == "number") return e3;
  if (typeof e3 == "function") return (t) => e3(t);
}
function Sm(e3) {
  if (typeof e3 == "string") return e3;
}
function dj(e3) {
  if (!(e3 == null || typeof e3 != "object")) {
    var t = "name" in e3 ? lj(e3.name) : void 0, r = "unit" in e3 ? cj(e3.unit) : void 0, n = "dataKey" in e3 ? fj(e3.dataKey) : void 0, i = "payload" in e3 ? e3.payload : void 0, a = "color" in e3 ? Sm(e3.color) : void 0, o = "fill" in e3 ? Sm(e3.fill) : void 0;
    return { name: t, unit: r, dataKey: n, payload: i, color: a, fill: o };
  }
}
function hj(e3, t) {
  return e3 ?? t;
}
var qw = (e3, t, r, n, i, a, o) => {
  if (!(t == null || a == null)) {
    var { chartData: u, computedData: s, dataStartIndex: l, dataEndIndex: c } = r, f = [];
    return e3.reduce((d, h) => {
      var v, { dataDefinedOnItem: g, settings: m } = h, y = hj(g, u), x = Array.isArray(y) ? bb(y, l, c) : y, b = (v = m == null ? void 0 : m.dataKey) !== null && v !== void 0 ? v : n, w = m == null ? void 0 : m.nameKey, O;
      if (n && Array.isArray(x) && !Array.isArray(x[0]) && o === "axis" ? O = Ey(x, n, i) : O = a(x, t, s, w), Array.isArray(O)) O.forEach((S) => {
        var E, N, k = dj(S), R = k == null ? void 0 : k.name, C = k == null ? void 0 : k.dataKey, F = k == null ? void 0 : k.payload, L = Pm(Pm({}, m), {}, { name: R, unit: k == null ? void 0 : k.unit, color: (E = k == null ? void 0 : k.color) !== null && E !== void 0 ? E : m == null ? void 0 : m.color, fill: (N = k == null ? void 0 : k.fill) !== null && N !== void 0 ? N : m == null ? void 0 : m.fill });
        d.push(bp({ tooltipEntrySettings: L, dataKey: C, payload: F, value: Ge(F, C), name: R == null ? void 0 : String(R) }));
      });
      else {
        var P;
        d.push(bp({ tooltipEntrySettings: m, dataKey: b, payload: O, value: Ge(O, b), name: (P = Ge(O, w)) !== null && P !== void 0 ? P : m == null ? void 0 : m.name }));
      }
      return d;
    }, f);
  }
}, wd = T([qe, Q0, jf], Y0), pj = T([(e3) => e3.graphicalItems.cartesianItems, (e3) => e3.graphicalItems.polarItems], (e3, t) => [...e3, ...t]), vj = T([Qe, li], J0), Mn = T([pj, qe, vj], tw, { memoizeOptions: { resultEqualityCheck: Fu } }), mj = T([Mn], (e3) => e3.filter(Ff)), Kw = T([Mn], iw, { memoizeOptions: { resultEqualityCheck: Fu } }), gj = T([Mn], (e3) => e3.some((t) => !t.data)), An = T([Kw, fr], ow), yj = T([mj, fr, qe], h0), xd = T([An, qe, Mn, fr, gj, Kw], uw), Vw = T([qe], hd), bj = T([qe], (e3) => e3.allowDataOverflow), Hw = T([Vw, bj], Yb), wj = T([Mn], (e3) => e3.filter(Ff)), xj = T([yj, wj, ju, a0], lw), Oj = T([xj, fr, Qe, Hw], cw), Pj = T([Mn], nw), Sj = T([An, qe, Pj, pd, Qe, UT], hw, { memoizeOptions: { resultEqualityCheck: $u } }), Ej = T([pw, Qe, li], di), Aj = T([Ej, Qe], gw), Cj = T([vw, Qe, li], di), Tj = T([Cj, Qe], yw), Ij = T([mw, Qe, li], di), _j = T([Ij, Qe], bw), Mj = T([Aj, _j, Tj], Ko), kj = T([qe, Vw, Hw, Oj, Sj, Mj, je, Qe], ww), ei = T([qe, je, An, xd, ju, Qe, kj], xw), jj = T([ei, qe, wd], Ow), Rj = T([qe, ei, jj, Qe], Pw), Yw = (e3) => {
  var t = Qe(e3), r = li(e3), n = false;
  return wa(e3, t, r, n);
}, Gw = T([qe, Yw], Ru), Dj = T([qe, wd, Rj, Gw], cd), Xw = T([Dj], Bf), Nj = T([je, xd, qe, Qe], Iw), Lj = T([je, xd, qe, Qe], Aw), $j = (e3, t, r, n, i, a, o, u) => {
  if (t) {
    var { type: s } = t, l = Ir(e3, u);
    if (n) {
      var c = r === "scaleBand" && n.bandwidth ? n.bandwidth() / 2 : 2, f = s === "category" && n.bandwidth ? n.bandwidth() / c : 0;
      return f = u === "angleAxis" && i != null && (i == null ? void 0 : i.length) >= 2 ? Kt(i[0] - i[1]) * 2 * f : f, l && o ? o.map((d, h) => {
        var v = n.map(d);
        return Oe(v) ? { coordinate: v + f, value: d, index: h, offset: f } : null;
      }).filter(nr) : n.domain().map((d, h) => {
        var v = n.map(d);
        return Oe(v) ? { coordinate: v + f, value: a ? a[d] : d, index: h, offset: f } : null;
      }).filter(nr);
    }
  }
}, Dr = T([je, qe, wd, Xw, Yw, Nj, Lj, Qe], $j), Od = T([jw, Rw, Uk], (e3, t, r) => Dw(r.shared, e3, t)), Zw = (e3) => e3.tooltip.settings.trigger, Pd = (e3) => e3.tooltip.settings.defaultIndex, Oa = T([pi, Od, Zw, Pd], Bw), ta = T([Oa, An, Jn, ei], Ri), Qw = T([Dr, ta], Nw), Fj = T([Oa], (e3) => {
  if (e3) return e3.dataKey;
}), Bj = T([Oa], (e3) => {
  if (e3) return e3.graphicalItemId;
}), Jw = T([pi, Od, Zw, Pd], Ww), zj = T([_r, Mr, je, at, Dr, Pd, Jw], zw), Wj = T([Oa, zj], (e3, t) => e3 != null && e3.coordinate ? e3.coordinate : t), Uj = T([Oa], (e3) => {
  var t;
  return (t = e3 == null ? void 0 : e3.active) !== null && t !== void 0 ? t : false;
}), qj = T([Jw, ta, fr, Jn, Qw, Uw, Od], qw), Kj = T([qj], (e3) => {
  if (e3 != null) {
    var t = e3.map((r) => r.payload).filter((r) => r != null);
    return Array.from(new Set(t));
  }
});
function Em(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Am(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Em(Object(r), true).forEach(function(n) {
      Vj(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Em(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function Vj(e3, t, r) {
  return (t = Hj(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function Hj(e3) {
  var t = Yj(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Yj(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var Gj = () => se(qe), Xj = () => {
  var e3 = Gj(), t = se(Dr), r = se(Xw);
  return Po(!e3 || !r ? void 0 : Am(Am({}, e3), {}, { scale: r }), t);
};
function Cm(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Dn(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cm(Object(r), true).forEach(function(n) {
      Zj(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Cm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function Zj(e3, t, r) {
  return (t = Qj(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function Qj(e3) {
  var t = Jj(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Jj(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var eR = (e3, t, r, n) => {
  var i = t.find((a) => a && a.index === r);
  if (i) {
    if (e3 === "horizontal") return { x: i.coordinate, y: n.relativeY };
    if (e3 === "vertical") return { x: n.relativeX, y: i.coordinate };
  }
  return { x: 0, y: 0 };
}, tR = (e3, t, r, n) => {
  var i = t.find((l) => l && l.index === r);
  if (i) {
    if (e3 === "centric") {
      var a = i.coordinate, { radius: o } = n;
      return Dn(Dn(Dn({}, n), it(n.cx, n.cy, o, a)), {}, { angle: a, radius: o });
    }
    var u = i.coordinate, { angle: s } = n;
    return Dn(Dn(Dn({}, n), it(n.cx, n.cy, u, s)), {}, { angle: s, radius: u });
  }
  return { angle: 0, clockWise: false, cx: 0, cy: 0, endAngle: 0, innerRadius: 0, outerRadius: 0, radius: 0, startAngle: 0, x: 0, y: 0 };
};
function rR(e3, t) {
  var { relativeX: r, relativeY: n } = e3;
  return r >= t.left && r <= t.left + t.width && n >= t.top && n <= t.top + t.height;
}
var ex = (e3, t, r, n, i) => {
  var a, o = (a = t == null ? void 0 : t.length) !== null && a !== void 0 ? a : 0;
  if (o <= 1 || e3 == null) return 0;
  if (n === "angleAxis" && i != null && Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6) for (var u = 0; u < o; u++) {
    var s, l, c, f, d, h = u > 0 ? (s = r[u - 1]) === null || s === void 0 ? void 0 : s.coordinate : (l = r[o - 1]) === null || l === void 0 ? void 0 : l.coordinate, v = (c = r[u]) === null || c === void 0 ? void 0 : c.coordinate, g = u >= o - 1 ? (f = r[0]) === null || f === void 0 ? void 0 : f.coordinate : (d = r[u + 1]) === null || d === void 0 ? void 0 : d.coordinate, m = void 0;
    if (!(h == null || v == null || g == null)) if (Kt(v - h) !== Kt(g - v)) {
      var y = [];
      if (Kt(g - v) === Kt(i[1] - i[0])) {
        m = g;
        var x = v + i[1] - i[0];
        y[0] = Math.min(x, (x + h) / 2), y[1] = Math.max(x, (x + h) / 2);
      } else {
        m = h;
        var b = g + i[1] - i[0];
        y[0] = Math.min(v, (b + v) / 2), y[1] = Math.max(v, (b + v) / 2);
      }
      var w = [Math.min(v, (m + v) / 2), Math.max(v, (m + v) / 2)];
      if (e3 > w[0] && e3 <= w[1] || e3 >= y[0] && e3 <= y[1]) {
        var O;
        return (O = r[u]) === null || O === void 0 ? void 0 : O.index;
      }
    } else {
      var P = Math.min(h, g), S = Math.max(h, g);
      if (e3 > (P + v) / 2 && e3 <= (S + v) / 2) {
        var E;
        return (E = r[u]) === null || E === void 0 ? void 0 : E.index;
      }
    }
  }
  else if (t) for (var N = 0; N < o; N++) {
    var k = t[N];
    if (k != null) {
      var R = t[N + 1], C = t[N - 1];
      if (N === 0 && R != null && e3 <= (k.coordinate + R.coordinate) / 2 || N === o - 1 && C != null && e3 > (k.coordinate + C.coordinate) / 2 || N > 0 && N < o - 1 && C != null && R != null && e3 > (k.coordinate + C.coordinate) / 2 && e3 <= (k.coordinate + R.coordinate) / 2) return k.index;
    }
  }
  return -1;
}, nR = () => se(jf), Sd = (e3, t) => t, tx = (e3, t, r) => r, Ed = (e3, t, r, n) => n, iR = T(Dr, (e3) => pu(e3, (t) => t.coordinate)), Ad = T([pi, Sd, tx, Ed], Bw), Cd = T([Ad, An, Jn, ei], Ri), aR = (e3, t, r) => {
  if (t != null) {
    var n = pi(e3);
    return t === "axis" ? r === "hover" ? n.axisInteraction.hover.dataKey : n.axisInteraction.click.dataKey : r === "hover" ? n.itemInteraction.hover.dataKey : n.itemInteraction.click.dataKey;
  }
}, rx = T([pi, Sd, tx, Ed], Ww), Ho = T([_r, Mr, je, at, Dr, Ed, rx], zw), oR = T([Ad, Ho], (e3, t) => {
  var r;
  return (r = e3.coordinate) !== null && r !== void 0 ? r : t;
}), nx = T([Dr, Cd], Nw), uR = T([rx, Cd, fr, Jn, nx, Uw, Sd], qw), sR = T([Ad, Cd], (e3, t) => ({ isActive: e3.active && t != null, activeIndex: t })), lR = (e3, t, r, n, i, a, o) => {
  if (!(!e3 || !r || !n || !i) && rR(e3, o)) {
    var u = XE(e3, t), s = ex(u, a, i, r, n), l = eR(t, i, s, e3);
    return { activeIndex: String(s), activeCoordinate: l };
  }
}, cR = (e3, t, r, n, i, a, o) => {
  if (!(!e3 || !n || !i || !a || !r)) {
    var u = kT(e3, r);
    if (u) {
      var s = ZE(u, t), l = ex(s, o, a, n, i), c = tR(t, a, l, u);
      return { activeIndex: String(l), activeCoordinate: c };
    }
  }
}, fR = (e3, t, r, n, i, a, o, u) => {
  if (!(!e3 || !t || !n || !i || !a)) return t === "horizontal" || t === "vertical" ? lR(e3, t, n, i, a, o, u) : cR(e3, t, r, n, i, a, o);
}, dR = T((e3) => e3.zIndex.zIndexMap, (e3, t) => t, (e3, t, r) => r, (e3, t, r) => {
  if (t != null) {
    var n = e3[t];
    if (n != null) return r ? n.panoramaElement : n.element;
  }
}), hR = T((e3) => e3.zIndex.zIndexMap, (e3) => {
  var t = Object.keys(e3).map((n) => parseInt(n, 10)).concat(Object.values(wt)), r = Array.from(new Set(t));
  return r.sort((n, i) => n - i);
}, { memoizeOptions: { resultEqualityCheck: rI } });
function Tm(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Im(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tm(Object(r), true).forEach(function(n) {
      pR(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Tm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function pR(e3, t, r) {
  return (t = vR(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function vR(e3) {
  var t = mR(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function mR(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var gR = {}, yR = { zIndexMap: Object.values(wt).reduce((e3, t) => Im(Im({}, e3), {}, { [t]: { element: void 0, panoramaElement: void 0, consumers: 0 } }), gR) }, bR = new Set(Object.values(wt));
function wR(e3) {
  return bR.has(e3);
}
var ix = ft({ name: "zIndex", initialState: yR, reducers: { registerZIndexPortal: { reducer: (e3, t) => {
  var { zIndex: r } = t.payload;
  e3.zIndexMap[r] ? e3.zIndexMap[r].consumers += 1 : e3.zIndexMap[r] = { consumers: 1, element: void 0, panoramaElement: void 0 };
}, prepare: Ce() }, unregisterZIndexPortal: { reducer: (e3, t) => {
  var { zIndex: r } = t.payload;
  e3.zIndexMap[r] && (e3.zIndexMap[r].consumers -= 1, e3.zIndexMap[r].consumers <= 0 && !wR(r) && delete e3.zIndexMap[r]);
}, prepare: Ce() }, registerZIndexPortalElement: { reducer: (e3, t) => {
  var { zIndex: r, element: n, isPanorama: i } = t.payload;
  e3.zIndexMap[r] ? i ? e3.zIndexMap[r].panoramaElement = n : e3.zIndexMap[r].element = n : e3.zIndexMap[r] = { consumers: 0, element: i ? void 0 : n, panoramaElement: i ? n : void 0 };
}, prepare: Ce() }, unregisterZIndexPortalElement: { reducer: (e3, t) => {
  var { zIndex: r } = t.payload;
  e3.zIndexMap[r] && (t.payload.isPanorama ? e3.zIndexMap[r].panoramaElement = void 0 : e3.zIndexMap[r].element = void 0);
}, prepare: Ce() } } }), { registerZIndexPortal: xR, unregisterZIndexPortal: Cl, registerZIndexPortalElement: OR, unregisterZIndexPortalElement: PR } = ix.actions, SR = ix.reducer;
function rn(e3) {
  var { zIndex: t, children: r } = e3, n = jA(), i = n && t !== void 0 && t !== 0, a = It(), o = p.useRef(void 0), u = p.useRef(/* @__PURE__ */ new Set()), s = Le(), l = se((f) => dR(f, t, a));
  if (p.useLayoutEffect(() => {
    if (!i) {
      var f = u.current;
      f.forEach((h) => {
        s(Cl({ zIndex: h }));
      }), f.clear(), o.current = void 0;
      return;
    }
    if (u.current.has(t) || (s(xR({ zIndex: t })), u.current.add(t)), l) {
      o.current = l;
      var d = u.current;
      d.forEach((h) => {
        h !== t && (s(Cl({ zIndex: h })), d.delete(h));
      });
    }
  }, [s, t, i, l]), p.useLayoutEffect(() => {
    var f = u.current;
    return () => {
      f.forEach((d) => {
        s(Cl({ zIndex: d }));
      }), f.clear();
    };
  }, [s]), !i) return r;
  var c = l ?? o.current;
  return c ? wr.createPortal(r, c) : null;
}
function Rc() {
  return Rc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Rc.apply(null, arguments);
}
function _m(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fa(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _m(Object(r), true).forEach(function(n) {
      ER(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : _m(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function ER(e3, t, r) {
  return (t = AR(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function AR(e3) {
  var t = CR(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function CR(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function TR(e3) {
  var { cursor: t, cursorComp: r, cursorProps: n } = e3;
  return p.isValidElement(t) ? p.cloneElement(t, n) : p.createElement(r, n);
}
function IR(e3) {
  var t, { coordinate: r, payload: n, index: i, offset: a, tooltipAxisBandSize: o, layout: u, cursor: s, tooltipEventType: l, chartName: c } = e3, f = r, d = n, h = i;
  if (!s || !f || c !== "ScatterChart" && l !== "axis") return null;
  var v, g, m;
  if (c === "ScatterChart") v = f, g = VC, m = wt.cursorLine;
  else if (c === "BarChart") v = HC(u, f, a, o), g = Wb, m = wt.cursorRectangle;
  else if (u === "radial" && Ty(f)) {
    var { cx: y, cy: x, radius: b, startAngle: w, endAngle: O } = Ub(f);
    v = { cx: y, cy: x, startAngle: w, endAngle: O, innerRadius: b, outerRadius: b }, g = Kb, m = wt.cursorLine;
  } else v = { points: NT(u, f, a) }, g = Lb, m = wt.cursorLine;
  var P = typeof s == "object" && "className" in s ? s.className : void 0, S = Fa(Fa(Fa(Fa({ stroke: "#ccc", pointerEvents: "none" }, a), v), lu(s)), {}, { payload: d, payloadIndex: h, className: Ee("recharts-tooltip-cursor", P) });
  return p.createElement(rn, { zIndex: (t = e3.zIndex) !== null && t !== void 0 ? t : m }, p.createElement(TR, { cursor: s, cursorComp: g, cursorProps: S }));
}
function _R(e3) {
  var t = Xj(), r = _A(), n = oi(), i = nR();
  return t == null || r == null || n == null || i == null ? null : p.createElement(IR, Rc({}, e3, { offset: r, layout: n, tooltipAxisBandSize: t, chartName: i }));
}
var ax = p.createContext(null), MR = () => p.useContext(ax), Tl = { exports: {} }, Mm;
function kR() {
  return Mm || (Mm = 1, (function(e3) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = false));
    function i(s, l, c) {
      this.fn = s, this.context = l, this.once = c || false;
    }
    function a(s, l, c, f, d) {
      if (typeof c != "function") throw new TypeError("The listener must be a function");
      var h = new i(c, f || s, d), v = r ? r + l : l;
      return s._events[v] ? s._events[v].fn ? s._events[v] = [s._events[v], h] : s._events[v].push(h) : (s._events[v] = h, s._eventsCount++), s;
    }
    function o(s, l) {
      --s._eventsCount === 0 ? s._events = new n() : delete s._events[l];
    }
    function u() {
      this._events = new n(), this._eventsCount = 0;
    }
    u.prototype.eventNames = function() {
      var l = [], c, f;
      if (this._eventsCount === 0) return l;
      for (f in c = this._events) t.call(c, f) && l.push(r ? f.slice(1) : f);
      return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(c)) : l;
    }, u.prototype.listeners = function(l) {
      var c = r ? r + l : l, f = this._events[c];
      if (!f) return [];
      if (f.fn) return [f.fn];
      for (var d = 0, h = f.length, v = new Array(h); d < h; d++) v[d] = f[d].fn;
      return v;
    }, u.prototype.listenerCount = function(l) {
      var c = r ? r + l : l, f = this._events[c];
      return f ? f.fn ? 1 : f.length : 0;
    }, u.prototype.emit = function(l, c, f, d, h, v) {
      var g = r ? r + l : l;
      if (!this._events[g]) return false;
      var m = this._events[g], y = arguments.length, x, b;
      if (m.fn) {
        switch (m.once && this.removeListener(l, m.fn, void 0, true), y) {
          case 1:
            return m.fn.call(m.context), true;
          case 2:
            return m.fn.call(m.context, c), true;
          case 3:
            return m.fn.call(m.context, c, f), true;
          case 4:
            return m.fn.call(m.context, c, f, d), true;
          case 5:
            return m.fn.call(m.context, c, f, d, h), true;
          case 6:
            return m.fn.call(m.context, c, f, d, h, v), true;
        }
        for (b = 1, x = new Array(y - 1); b < y; b++) x[b - 1] = arguments[b];
        m.fn.apply(m.context, x);
      } else {
        var w = m.length, O;
        for (b = 0; b < w; b++) switch (m[b].once && this.removeListener(l, m[b].fn, void 0, true), y) {
          case 1:
            m[b].fn.call(m[b].context);
            break;
          case 2:
            m[b].fn.call(m[b].context, c);
            break;
          case 3:
            m[b].fn.call(m[b].context, c, f);
            break;
          case 4:
            m[b].fn.call(m[b].context, c, f, d);
            break;
          default:
            if (!x) for (O = 1, x = new Array(y - 1); O < y; O++) x[O - 1] = arguments[O];
            m[b].fn.apply(m[b].context, x);
        }
      }
      return true;
    }, u.prototype.on = function(l, c, f) {
      return a(this, l, c, f, false);
    }, u.prototype.once = function(l, c, f) {
      return a(this, l, c, f, true);
    }, u.prototype.removeListener = function(l, c, f, d) {
      var h = r ? r + l : l;
      if (!this._events[h]) return this;
      if (!c) return o(this, h), this;
      var v = this._events[h];
      if (v.fn) v.fn === c && (!d || v.once) && (!f || v.context === f) && o(this, h);
      else {
        for (var g = 0, m = [], y = v.length; g < y; g++) (v[g].fn !== c || d && !v[g].once || f && v[g].context !== f) && m.push(v[g]);
        m.length ? this._events[h] = m.length === 1 ? m[0] : m : o(this, h);
      }
      return this;
    }, u.prototype.removeAllListeners = function(l) {
      var c;
      return l ? (c = r ? r + l : l, this._events[c] && o(this, c)) : (this._events = new n(), this._eventsCount = 0), this;
    }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e3.exports = u;
  })(Tl)), Tl.exports;
}
var jR = kR();
const RR = Tn(jR);
var ra = new RR(), Dc = "recharts.syncEvent.tooltip", km = "recharts.syncEvent.brush", DR = (e3, t) => {
  if (t && Array.isArray(e3)) {
    var r = Number.parseInt(t, 10);
    if (!Pr(r)) return e3[r];
  }
}, NR = { chartName: "", tooltipPayloadSearcher: () => {
}, eventEmitter: void 0, defaultTooltipEventType: "axis" }, ox = ft({ name: "options", initialState: NR, reducers: { createEventEmitter: (e3) => {
  e3.eventEmitter == null && (e3.eventEmitter = Symbol("rechartsEventEmitter"));
} } }), LR = ox.reducer, { createEventEmitter: $R } = ox.actions;
function FR(e3) {
  return e3.tooltip.syncInteraction;
}
var BR = { chartData: void 0, computedData: void 0, dataStartIndex: 0, dataEndIndex: 0 }, ux = ft({ name: "chartData", initialState: BR, reducers: { setChartData(e3, t) {
  if (e3.chartData = t.payload, t.payload == null) {
    e3.dataStartIndex = 0, e3.dataEndIndex = 0;
    return;
  }
  t.payload.length > 0 && e3.dataEndIndex !== t.payload.length - 1 && (e3.dataEndIndex = t.payload.length - 1);
}, setComputedData(e3, t) {
  e3.computedData = t.payload;
}, setDataStartEndIndexes(e3, t) {
  var { startIndex: r, endIndex: n } = t.payload;
  r != null && (e3.dataStartIndex = r), n != null && (e3.dataEndIndex = n);
} } }), { setChartData: jm, setDataStartEndIndexes: zR, setComputedData: AW } = ux.actions, WR = ux.reducer, UR = ["x", "y"];
function Rm(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Nn(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rm(Object(r), true).forEach(function(n) {
      qR(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Rm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function qR(e3, t, r) {
  return (t = KR(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function KR(e3) {
  var t = VR(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function VR(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function HR(e3, t) {
  if (e3 == null) return {};
  var r, n, i = YR(e3, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function YR(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function GR() {
  var e3 = se(Rf), t = se(Df), r = Le(), n = se(o0), i = se(Dr), a = oi(), o = Tu(), u = se((s) => s.rootProps.className);
  p.useEffect(() => {
    if (e3 == null) return ai;
    var s = (l, c, f) => {
      if (t !== f && e3 === l) {
        if (c.payload.active === false) {
          r(_i({ active: false, coordinate: void 0, dataKey: void 0, index: null, label: void 0, sourceViewBox: void 0, graphicalItemId: void 0 }));
          return;
        }
        if (n === "index") {
          var d;
          if (o && c !== null && c !== void 0 && (d = c.payload) !== null && d !== void 0 && d.coordinate && c.payload.sourceViewBox) {
            var h = c.payload.coordinate, { x: v, y: g } = h, m = HR(h, UR), { x: y, y: x, width: b, height: w } = c.payload.sourceViewBox, O = Nn(Nn({}, m), {}, { x: o.x + (b ? (v - y) / b : 0) * o.width, y: o.y + (w ? (g - x) / w : 0) * o.height });
            r(Nn(Nn({}, c), {}, { payload: Nn(Nn({}, c.payload), {}, { coordinate: O }) }));
          } else r(c);
          return;
        }
        if (i != null) {
          var P;
          if (typeof n == "function") {
            var S = { activeTooltipIndex: c.payload.index == null ? void 0 : Number(c.payload.index), isTooltipActive: c.payload.active, activeIndex: c.payload.index == null ? void 0 : Number(c.payload.index), activeLabel: c.payload.label, activeDataKey: c.payload.dataKey, activeCoordinate: c.payload.coordinate }, E = n(i, S);
            P = i[E];
          } else n === "value" && (P = i.find(($) => String($.value) === c.payload.label));
          var { coordinate: N } = c.payload;
          if (N == null || o == null) {
            r(_i({ active: false, coordinate: void 0, dataKey: void 0, index: null, label: void 0, sourceViewBox: void 0, graphicalItemId: void 0 }));
            return;
          }
          if (P == null) {
            r(_i({ active: false, coordinate: void 0, dataKey: void 0, index: null, label: void 0, sourceViewBox: c.payload.sourceViewBox, graphicalItemId: void 0 }));
            return;
          }
          var { x: k, y: R } = N, C = Math.min(k, o.x + o.width), F = Math.min(R, o.y + o.height), L = { x: a === "horizontal" ? P.coordinate : C, y: a === "horizontal" ? F : P.coordinate }, M = _i({ active: c.payload.active, coordinate: L, dataKey: c.payload.dataKey, index: String(P.index), label: c.payload.label, sourceViewBox: c.payload.sourceViewBox, graphicalItemId: c.payload.graphicalItemId });
          r(M);
        }
      }
    };
    return ra.on(Dc, s), () => {
      ra.off(Dc, s);
    };
  }, [u, r, t, e3, n, i, a, o]);
}
function XR() {
  var e3 = se(Rf), t = se(Df), r = Le();
  p.useEffect(() => {
    if (e3 == null) return ai;
    var n = (i, a, o) => {
      t !== o && e3 === i && r(zR(a));
    };
    return ra.on(km, n), () => {
      ra.off(km, n);
    };
  }, [r, t, e3]);
}
function ZR() {
  var e3 = Le();
  p.useEffect(() => {
    e3($R());
  }, [e3]), GR(), XR();
}
function QR(e3, t, r, n, i, a) {
  var o = se((v) => aR(v, e3, t)), u = se(Bj), s = se(Df), l = se(Rf), c = se(o0), f = se(FR), d = (f == null ? void 0 : f.sourceViewBox) != null, h = Tu();
  p.useEffect(() => {
    if (!d && l != null && s != null) {
      var v = _i({ active: a, coordinate: r, dataKey: o, index: i, label: typeof n == "number" ? String(n) : n, sourceViewBox: h, graphicalItemId: u });
      ra.emit(Dc, l, v, s);
    }
  }, [d, r, o, u, i, n, s, l, c, a, h]);
}
function Dm(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Nm(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dm(Object(r), true).forEach(function(n) {
      JR(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Dm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function JR(e3, t, r) {
  return (t = eD(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function eD(e3) {
  var t = tD(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function tD(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function rD(e3) {
  return e3.dataKey;
}
function nD(e3, t) {
  return p.isValidElement(e3) ? p.cloneElement(e3, t) : typeof e3 == "function" ? p.createElement(e3, t) : p.createElement(xC, t);
}
var Lm = [], iD = { allowEscapeViewBox: { x: false, y: false }, animationDuration: 400, animationEasing: "ease", axisId: 0, contentStyle: {}, cursor: true, filterNull: true, includeHidden: false, isAnimationActive: "auto", itemSorter: "name", itemStyle: {}, labelStyle: {}, offset: 10, reverseDirection: { x: false, y: false }, separator: " : ", trigger: "hover", useTranslate3d: false, wrapperStyle: {} };
function aD(e3) {
  var t, r, n = Tt(e3, iD), { active: i, allowEscapeViewBox: a, animationDuration: o, animationEasing: u, content: s, filterNull: l, isAnimationActive: c, offset: f, payloadUniqBy: d, position: h, reverseDirection: v, useTranslate3d: g, wrapperStyle: m, cursor: y, shared: x, trigger: b, defaultIndex: w, portal: O, axisId: P } = n, S = Le(), E = typeof w == "number" ? String(w) : w;
  p.useEffect(() => {
    S(Yk({ shared: x, trigger: b, axisId: P, active: i, defaultIndex: E }));
  }, [S, x, b, P, i, E]);
  var N = Tu(), k = Nb(), R = Wk(x), { activeIndex: C, isActive: F } = (t = se((A) => sR(A, R, b, E))) !== null && t !== void 0 ? t : {}, L = se((A) => uR(A, R, b, E)), M = se((A) => nx(A, R, b, E)), $ = se((A) => oR(A, R, b, E)), B = L, D = MR(), K = (r = i ?? F) !== null && r !== void 0 ? r : false, [W, fe] = $S([B, K]), te = R === "axis" ? M : void 0;
  QR(R, b, $, te, C, K);
  var ae = O ?? D;
  if (ae == null || N == null || R == null) return null;
  var re = B ?? Lm;
  K || (re = Lm), l && re.length && (re = lS(re.filter((A) => A.value != null && (A.hide !== true || n.includeHidden)), d, rD));
  var X = re.length > 0, oe = Nm(Nm({}, n), {}, { payload: re, label: te, active: K, activeIndex: C, coordinate: $, accessibilityLayer: k }), ne = p.createElement(kC, { allowEscapeViewBox: a, animationDuration: o, animationEasing: u, isAnimationActive: c, active: K, coordinate: $, hasPayload: X, offset: f, position: h, reverseDirection: v, useTranslate3d: g, viewBox: N, wrapperStyle: m, lastBoundingBox: W, innerRef: fe, hasPortalFromProps: !!O }, nD(s, oe));
  return p.createElement(p.Fragment, null, wr.createPortal(ne, ae), K && p.createElement(_R, { cursor: y, tooltipEventType: R, coordinate: $, payload: re, index: C }));
}
function oD(e3, t, r) {
  return (t = uD(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function uD(e3) {
  var t = sD(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function sD(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
class lD {
  constructor(t) {
    oD(this, "cache", /* @__PURE__ */ new Map()), this.maxSize = t;
  }
  get(t) {
    var r = this.cache.get(t);
    return r !== void 0 && (this.cache.delete(t), this.cache.set(t, r)), r;
  }
  set(t, r) {
    if (this.cache.has(t)) this.cache.delete(t);
    else if (this.cache.size >= this.maxSize) {
      var n = this.cache.keys().next().value;
      n != null && this.cache.delete(n);
    }
    this.cache.set(t, r);
  }
  clear() {
    this.cache.clear();
  }
  size() {
    return this.cache.size;
  }
}
function $m(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cD(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $m(Object(r), true).forEach(function(n) {
      fD(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : $m(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function fD(e3, t, r) {
  return (t = dD(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function dD(e3) {
  var t = hD(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function hD(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var pD = { cacheSize: 2e3, enableCache: true }, sx = cD({}, pD), Fm = new lD(sx.cacheSize), vD = { position: "absolute", top: "-20000px", left: 0, padding: 0, margin: 0, border: "none", whiteSpace: "pre" }, Bm = "recharts_measurement_span";
function mD(e3, t) {
  var r = t.fontSize || "", n = t.fontFamily || "", i = t.fontWeight || "", a = t.fontStyle || "", o = t.letterSpacing || "", u = t.textTransform || "";
  return "".concat(e3, "|").concat(r, "|").concat(n, "|").concat(i, "|").concat(a, "|").concat(o, "|").concat(u);
}
var zm = (e3, t) => {
  try {
    var r = document.getElementById(Bm);
    r || (r = document.createElement("span"), r.setAttribute("id", Bm), r.setAttribute("aria-hidden", "true"), document.body.appendChild(r)), Object.assign(r.style, vD, t), r.textContent = "".concat(e3);
    var n = r.getBoundingClientRect();
    return { width: n.width, height: n.height };
  } catch {
    return { width: 0, height: 0 };
  }
}, Di = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || da.isSsr) return { width: 0, height: 0 };
  if (!sx.enableCache) return zm(t, r);
  var n = mD(t, r), i = Fm.get(n);
  if (i) return i;
  var a = zm(t, r);
  return Fm.set(n, a), a;
}, lx;
function gD(e3, t, r) {
  return (t = yD(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function yD(e3) {
  var t = bD(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function bD(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var Wm = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Um = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, wD = /^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/, xD = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, OD = { cm: 96 / 2.54, mm: 96 / 25.4, pt: 96 / 72, pc: 96 / 6, in: 96, Q: 96 / (2.54 * 40), px: 1 }, PD = ["cm", "mm", "pt", "pc", "in", "Q", "px"];
function SD(e3) {
  return PD.includes(e3);
}
var zn = "NaN";
function ED(e3, t) {
  return e3 * OD[t];
}
class nt {
  static parse(t) {
    var r, [, n, i] = (r = xD.exec(t)) !== null && r !== void 0 ? r : [];
    return n == null ? nt.NaN : new nt(parseFloat(n), i ?? "");
  }
  constructor(t, r) {
    this.num = t, this.unit = r, this.num = t, this.unit = r, Pr(t) && (this.unit = ""), r !== "" && !wD.test(r) && (this.num = NaN, this.unit = ""), SD(r) && (this.num = ED(t, r), this.unit = "px");
  }
  add(t) {
    return this.unit !== t.unit ? new nt(NaN, "") : new nt(this.num + t.num, this.unit);
  }
  subtract(t) {
    return this.unit !== t.unit ? new nt(NaN, "") : new nt(this.num - t.num, this.unit);
  }
  multiply(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new nt(NaN, "") : new nt(this.num * t.num, this.unit || t.unit);
  }
  divide(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new nt(NaN, "") : new nt(this.num / t.num, this.unit || t.unit);
  }
  toString() {
    return "".concat(this.num).concat(this.unit);
  }
  isNaN() {
    return Pr(this.num);
  }
}
lx = nt;
gD(nt, "NaN", new lx(NaN, ""));
function cx(e3) {
  if (e3 == null || e3.includes(zn)) return zn;
  for (var t = e3; t.includes("*") || t.includes("/"); ) {
    var r, [, n, i, a] = (r = Wm.exec(t)) !== null && r !== void 0 ? r : [], o = nt.parse(n ?? ""), u = nt.parse(a ?? ""), s = i === "*" ? o.multiply(u) : o.divide(u);
    if (s.isNaN()) return zn;
    t = t.replace(Wm, s.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var l, [, c, f, d] = (l = Um.exec(t)) !== null && l !== void 0 ? l : [], h = nt.parse(c ?? ""), v = nt.parse(d ?? ""), g = f === "+" ? h.add(v) : h.subtract(v);
    if (g.isNaN()) return zn;
    t = t.replace(Um, g.toString());
  }
  return t;
}
var qm = /\(([^()]*)\)/;
function AD(e3) {
  for (var t = e3, r; (r = qm.exec(t)) != null; ) {
    var [, n] = r;
    t = t.replace(qm, cx(n));
  }
  return t;
}
function CD(e3) {
  var t = e3.replace(/\s+/g, "");
  return t = AD(t), t = cx(t), t;
}
function TD(e3) {
  try {
    return CD(e3);
  } catch {
    return zn;
  }
}
function Il(e3) {
  var t = TD(e3.slice(5, -1));
  return t === zn ? "" : t;
}
var ID = ["x", "y", "lineHeight", "capHeight", "fill", "scaleToFit", "textAnchor", "verticalAnchor"], _D = ["dx", "dy", "angle", "className", "breakAll"];
function Nc() {
  return Nc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Nc.apply(null, arguments);
}
function Km(e3, t) {
  if (e3 == null) return {};
  var r, n, i = MD(e3, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function MD(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var fx = /[ \f\n\r\t\v\u2028\u2029]+/, dx = (e3) => {
  var { children: t, breakAll: r, style: n } = e3;
  try {
    var i = [];
    Xe(t) || (r ? i = t.toString().split("") : i = t.toString().split(fx));
    var a = i.map((u) => ({ word: u, width: Di(u, n).width })), o = r ? 0 : Di("\xA0", n).width;
    return { wordsWithComputedWidth: a, spaceWidth: o };
  } catch {
    return null;
  }
};
function hx(e3) {
  return e3 === "start" || e3 === "middle" || e3 === "end" || e3 === "inherit";
}
function kD(e3) {
  return Xe(e3) || typeof e3 == "string" || typeof e3 == "number" || typeof e3 == "boolean";
}
var px = (e3, t, r, n) => e3.reduce((i, a) => {
  var { word: o, width: u } = a, s = i[i.length - 1];
  if (s && u != null && (t == null || n || s.width + u + r < Number(t))) s.words.push(o), s.width += u + r;
  else {
    var l = { words: [o], width: u };
    i.push(l);
  }
  return i;
}, []), vx = (e3) => e3.reduce((t, r) => t.width > r.width ? t : r), jD = "\u2026", Vm = (e3, t, r, n, i, a, o, u) => {
  var s = e3.slice(0, t), l = dx({ breakAll: r, style: n, children: s + jD });
  if (!l) return [false, []];
  var c = px(l.wordsWithComputedWidth, a, o, u), f = c.length > i || vx(c).width > Number(a);
  return [f, c];
}, RD = (e3, t, r, n, i) => {
  var { maxLines: a, children: o, style: u, breakAll: s } = e3, l = ue(a), c = String(o), f = px(t, n, r, i);
  if (!l || i) return f;
  var d = f.length > a || vx(f).width > Number(n);
  if (!d) return f;
  for (var h = 0, v = c.length - 1, g = 0, m; h <= v && g <= c.length - 1; ) {
    var y = Math.floor((h + v) / 2), x = y - 1, [b, w] = Vm(c, x, s, u, a, n, r, i), [O] = Vm(c, y, s, u, a, n, r, i);
    if (!b && !O && (h = y + 1), b && O && (v = y - 1), !b && O) {
      m = w;
      break;
    }
    g++;
  }
  return m || f;
}, Hm = (e3) => {
  var t = Xe(e3) ? [] : e3.toString().split(fx);
  return [{ words: t, width: void 0 }];
}, DD = (e3) => {
  var { width: t, scaleToFit: r, children: n, style: i, breakAll: a, maxLines: o } = e3;
  if ((t || r) && !da.isSsr) {
    var u, s, l = dx({ breakAll: a, children: n, style: i });
    if (l) {
      var { wordsWithComputedWidth: c, spaceWidth: f } = l;
      u = c, s = f;
    } else return Hm(n);
    return RD({ breakAll: a, children: n, maxLines: o, style: i }, u, s, t, !!r);
  }
  return Hm(n);
}, mx = "#808080", ND = { angle: 0, breakAll: false, capHeight: "0.71em", fill: mx, lineHeight: "1em", scaleToFit: false, textAnchor: "start", verticalAnchor: "end", x: 0, y: 0 }, Td = p.forwardRef((e3, t) => {
  var r = Tt(e3, ND), { x: n, y: i, lineHeight: a, capHeight: o, fill: u, scaleToFit: s, textAnchor: l, verticalAnchor: c } = r, f = Km(r, ID), d = p.useMemo(() => DD({ breakAll: f.breakAll, children: f.children, maxLines: f.maxLines, scaleToFit: s, style: f.style, width: f.width }), [f.breakAll, f.children, f.maxLines, s, f.style, f.width]), { dx: h, dy: v, angle: g, className: m, breakAll: y } = f, x = Km(f, _D);
  if (!sr(n) || !sr(i) || d.length === 0) return null;
  var b = Number(n) + (ue(h) ? h : 0), w = Number(i) + (ue(v) ? v : 0);
  if (!Oe(b) || !Oe(w)) return null;
  var O;
  switch (c) {
    case "start":
      O = Il("calc(".concat(o, ")"));
      break;
    case "middle":
      O = Il("calc(".concat((d.length - 1) / 2, " * -").concat(a, " + (").concat(o, " / 2))"));
      break;
    default:
      O = Il("calc(".concat(d.length - 1, " * -").concat(a, ")"));
      break;
  }
  var P = [], S = d[0];
  if (s && S != null) {
    var E = S.width, { width: N } = f;
    P.push("scale(".concat(ue(N) && ue(E) ? N / E : 1, ")"));
  }
  return g && P.push("rotate(".concat(g, ", ").concat(b, ", ").concat(w, ")")), P.length && (x.transform = P.join(" ")), p.createElement("text", Nc({}, vt(x), { ref: t, x: b, y: w, className: Ee("recharts-text", m), textAnchor: l, fill: u.includes("url") ? mx : u }), d.map((k, R) => {
    var C = k.words.join(y ? "" : " ");
    return p.createElement("tspan", { x: b, dy: R === 0 ? O : a, key: "".concat(C, "-").concat(R) }, C);
  }));
});
Td.displayName = "Text";
function Ym(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jt(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ym(Object(r), true).forEach(function(n) {
      LD(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Ym(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function LD(e3, t, r) {
  return (t = $D(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function $D(e3) {
  var t = FD(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function FD(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var BD = (e3) => {
  var { viewBox: t, position: r, offset: n = 0, parentViewBox: i } = e3, { x: a, y: o, height: u, upperWidth: s, lowerWidth: l } = Ef(t), c = a, f = a + (s - l) / 2, d = (c + f) / 2, h = (s + l) / 2, v = c + s / 2, g = u >= 0 ? 1 : -1, m = g * n, y = g > 0 ? "end" : "start", x = g > 0 ? "start" : "end", b = s >= 0 ? 1 : -1, w = b * n, O = b > 0 ? "end" : "start", P = b > 0 ? "start" : "end", S = i;
  if (r === "top") {
    var E = { x: c + s / 2, y: o - m, horizontalAnchor: "middle", verticalAnchor: y };
    return S && (E.height = Math.max(o - S.y, 0), E.width = s), E;
  }
  if (r === "bottom") {
    var N = { x: f + l / 2, y: o + u + m, horizontalAnchor: "middle", verticalAnchor: x };
    return S && (N.height = Math.max(S.y + S.height - (o + u), 0), N.width = l), N;
  }
  if (r === "left") {
    var k = { x: d - w, y: o + u / 2, horizontalAnchor: O, verticalAnchor: "middle" };
    return S && (k.width = Math.max(k.x - S.x, 0), k.height = u), k;
  }
  if (r === "right") {
    var R = { x: d + h + w, y: o + u / 2, horizontalAnchor: P, verticalAnchor: "middle" };
    return S && (R.width = Math.max(S.x + S.width - R.x, 0), R.height = u), R;
  }
  var C = S ? { width: h, height: u } : {};
  return r === "insideLeft" ? Jt({ x: d + w, y: o + u / 2, horizontalAnchor: P, verticalAnchor: "middle" }, C) : r === "insideRight" ? Jt({ x: d + h - w, y: o + u / 2, horizontalAnchor: O, verticalAnchor: "middle" }, C) : r === "insideTop" ? Jt({ x: c + s / 2, y: o + m, horizontalAnchor: "middle", verticalAnchor: x }, C) : r === "insideBottom" ? Jt({ x: f + l / 2, y: o + u - m, horizontalAnchor: "middle", verticalAnchor: y }, C) : r === "insideTopLeft" ? Jt({ x: c + w, y: o + m, horizontalAnchor: P, verticalAnchor: x }, C) : r === "insideTopRight" ? Jt({ x: c + s - w, y: o + m, horizontalAnchor: O, verticalAnchor: x }, C) : r === "insideBottomLeft" ? Jt({ x: f + w, y: o + u - m, horizontalAnchor: P, verticalAnchor: y }, C) : r === "insideBottomRight" ? Jt({ x: f + l - w, y: o + u - m, horizontalAnchor: O, verticalAnchor: y }, C) : r && typeof r == "object" && (ue(r.x) || xn(r.x)) && (ue(r.y) || xn(r.y)) ? Jt({ x: a + Zr(r.x, h), y: o + Zr(r.y, u), horizontalAnchor: "end", verticalAnchor: "end" }, C) : Jt({ x: v, y: o + u / 2, horizontalAnchor: "middle", verticalAnchor: "middle" }, C);
}, zD = ["labelRef"], WD = ["content"];
function Gm(e3, t) {
  if (e3 == null) return {};
  var r, n, i = UD(e3, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function UD(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function Xm(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mi(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xm(Object(r), true).forEach(function(n) {
      qD(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Xm(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function qD(e3, t, r) {
  return (t = KD(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function KD(e3) {
  var t = VD(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function VD(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function mr() {
  return mr = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, mr.apply(null, arguments);
}
var gx = p.createContext(null), HD = (e3) => {
  var { x: t, y: r, upperWidth: n, lowerWidth: i, width: a, height: o, children: u } = e3, s = p.useMemo(() => ({ x: t, y: r, upperWidth: n, lowerWidth: i, width: a, height: o }), [t, r, n, i, a, o]);
  return p.createElement(gx.Provider, { value: s }, u);
}, yx = () => {
  var e3 = p.useContext(gx), t = Tu();
  return e3 || (t ? Ef(t) : void 0);
}, YD = p.createContext(null), GD = () => {
  var e3 = p.useContext(YD), t = se(f0);
  return e3 || t;
}, XD = (e3) => {
  var { value: t, formatter: r } = e3, n = Xe(e3.children) ? t : e3.children;
  return typeof r == "function" ? r(n) : n;
}, Id = (e3) => e3 != null && typeof e3 == "function", ZD = (e3, t) => {
  var r = Kt(t - e3), n = Math.min(Math.abs(t - e3), 360);
  return r * n;
}, QD = (e3, t, r, n, i) => {
  var { offset: a, className: o } = e3, { cx: u, cy: s, innerRadius: l, outerRadius: c, startAngle: f, endAngle: d, clockWise: h } = i, v = (l + c) / 2, g = ZD(f, d), m = g >= 0 ? 1 : -1, y, x;
  switch (t) {
    case "insideStart":
      y = f + m * a, x = h;
      break;
    case "insideEnd":
      y = d - m * a, x = !h;
      break;
    case "end":
      y = d + m * a, x = h;
      break;
    default:
      throw new Error("Unsupported position ".concat(t));
  }
  x = g <= 0 ? x : !x;
  var b = it(u, s, v, y), w = it(u, s, v, y + (x ? 1 : -1) * 359), O = "M".concat(b.x, ",").concat(b.y, `
    A`).concat(v, ",").concat(v, ",0,1,").concat(x ? 0 : 1, `,
    `).concat(w.x, ",").concat(w.y), P = Xe(e3.id) ? Wi("recharts-radial-line-") : e3.id;
  return p.createElement("text", mr({}, n, { dominantBaseline: "central", className: Ee("recharts-radial-bar-label", o) }), p.createElement("defs", null, p.createElement("path", { id: P, d: O })), p.createElement("textPath", { xlinkHref: "#".concat(P) }, r));
}, JD = (e3, t, r) => {
  var { cx: n, cy: i, innerRadius: a, outerRadius: o, startAngle: u, endAngle: s } = e3, l = (u + s) / 2;
  if (r === "outside") {
    var { x: c, y: f } = it(n, i, o + t, l);
    return { x: c, y: f, textAnchor: c >= n ? "start" : "end", verticalAnchor: "middle" };
  }
  if (r === "center") return { x: n, y: i, textAnchor: "middle", verticalAnchor: "middle" };
  if (r === "centerTop") return { x: n, y: i, textAnchor: "middle", verticalAnchor: "start" };
  if (r === "centerBottom") return { x: n, y: i, textAnchor: "middle", verticalAnchor: "end" };
  var d = (a + o) / 2, { x: h, y: v } = it(n, i, d, l);
  return { x: h, y: v, textAnchor: "middle", verticalAnchor: "middle" };
}, ro = (e3) => e3 != null && "cx" in e3 && ue(e3.cx), eN = { angle: 0, offset: 5, zIndex: wt.label, position: "middle", textBreakAll: false };
function tN(e3) {
  if (!ro(e3)) return e3;
  var { cx: t, cy: r, outerRadius: n } = e3, i = n * 2;
  return { x: t - n, y: r - n, width: i, upperWidth: i, lowerWidth: i, height: i };
}
function Wr(e3) {
  var t = Tt(e3, eN), { viewBox: r, parentViewBox: n, position: i, value: a, children: o, content: u, className: s = "", textBreakAll: l, labelRef: c } = t, f = GD(), d = yx(), h = i === "center" ? d : f ?? d, v, g, m;
  r == null ? v = h : ro(r) ? v = r : v = Ef(r);
  var y = tN(v);
  if (!v || Xe(a) && Xe(o) && !p.isValidElement(u) && typeof u != "function") return null;
  var x = Mi(Mi({}, t), {}, { viewBox: v });
  if (p.isValidElement(u)) {
    var { labelRef: b } = x, w = Gm(x, zD);
    return p.cloneElement(u, w);
  }
  if (typeof u == "function") {
    var { content: O } = x, P = Gm(x, WD);
    if (g = p.createElement(u, P), p.isValidElement(g)) return g;
  } else g = XD(t);
  var S = vt(t);
  if (ro(v)) {
    if (i === "insideStart" || i === "insideEnd" || i === "end") return QD(t, i, g, S, v);
    m = JD(v, t.offset, t.position);
  } else {
    if (!y) return null;
    var E = BD({ viewBox: y, position: i, offset: t.offset, parentViewBox: ro(n) ? void 0 : n });
    m = Mi(Mi({ x: E.x, y: E.y, textAnchor: E.horizontalAnchor, verticalAnchor: E.verticalAnchor }, E.width !== void 0 ? { width: E.width } : {}), E.height !== void 0 ? { height: E.height } : {});
  }
  return p.createElement(rn, { zIndex: t.zIndex }, p.createElement(Td, mr({ ref: c, className: Ee("recharts-label", s) }, S, m, { textAnchor: hx(S.textAnchor) ? S.textAnchor : m.textAnchor, breakAll: l }), g));
}
Wr.displayName = "Label";
var rN = (e3, t, r) => {
  if (!e3) return null;
  var n = { viewBox: t, labelRef: r };
  return e3 === true ? p.createElement(Wr, mr({ key: "label-implicit" }, n)) : sr(e3) ? p.createElement(Wr, mr({ key: "label-implicit", value: e3 }, n)) : p.isValidElement(e3) ? e3.type === Wr ? p.cloneElement(e3, Mi({ key: "label-implicit" }, n)) : p.createElement(Wr, mr({ key: "label-implicit", content: e3 }, n)) : Id(e3) ? p.createElement(Wr, mr({ key: "label-implicit", content: e3 }, n)) : e3 && typeof e3 == "object" ? p.createElement(Wr, mr({}, e3, { key: "label-implicit" }, n)) : null;
};
function nN(e3) {
  var { label: t, labelRef: r } = e3, n = yx();
  return rN(t, n, r) || null;
}
var iN = ["valueAccessor"], aN = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
function Yo() {
  return Yo = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Yo.apply(null, arguments);
}
function Zm(e3, t) {
  if (e3 == null) return {};
  var r, n, i = oN(e3, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function oN(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var uN = (e3) => {
  var t = Array.isArray(e3.value) ? e3.value[e3.value.length - 1] : e3.value;
  if (kD(t)) return t;
}, bx = p.createContext(void 0), sN = bx.Provider, wx = p.createContext(void 0);
wx.Provider;
function lN() {
  return p.useContext(bx);
}
function cN() {
  return p.useContext(wx);
}
function no(e3) {
  var { valueAccessor: t = uN } = e3, r = Zm(e3, iN), { dataKey: n, clockWise: i, id: a, textBreakAll: o, zIndex: u } = r, s = Zm(r, aN), l = lN(), c = cN(), f = l || c;
  return !f || !f.length ? null : p.createElement(rn, { zIndex: u ?? wt.label }, p.createElement(Or, { className: "recharts-label-list" }, f.map((d, h) => {
    var v, g = Xe(n) ? t(d, h) : Ge(d.payload, n), m = Xe(a) ? {} : { id: "".concat(a, "-").concat(h) };
    return p.createElement(Wr, Yo({ key: "label-".concat(h) }, vt(d), s, m, { fill: (v = r.fill) !== null && v !== void 0 ? v : d.fill, parentViewBox: d.parentViewBox, value: g, textBreakAll: o, viewBox: d.viewBox, index: h, zIndex: 0 }));
  })));
}
no.displayName = "LabelList";
function fN(e3) {
  var { label: t } = e3;
  return t ? t === true ? p.createElement(no, { key: "labelList-implicit" }) : p.isValidElement(t) || Id(t) ? p.createElement(no, { key: "labelList-implicit", content: t }) : typeof t == "object" ? p.createElement(no, Yo({ key: "labelList-implicit" }, t, { type: String(t.type) })) : null : null;
}
function Lc() {
  return Lc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Lc.apply(null, arguments);
}
var xx = (e3) => {
  var { cx: t, cy: r, r: n, className: i } = e3, a = Ee("recharts-dot", i);
  return ue(t) && ue(r) && ue(n) ? p.createElement("circle", Lc({}, xr(e3), vf(e3), { className: a, cx: t, cy: r, r: n })) : null;
}, dN = { radiusAxis: {}, angleAxis: {} }, Ox = ft({ name: "polarAxis", initialState: dN, reducers: { addRadiusAxis(e3, t) {
  e3.radiusAxis[t.payload.id] = t.payload;
}, removeRadiusAxis(e3, t) {
  delete e3.radiusAxis[t.payload.id];
}, addAngleAxis(e3, t) {
  e3.angleAxis[t.payload.id] = t.payload;
}, removeAngleAxis(e3, t) {
  delete e3.angleAxis[t.payload.id];
} } }), { addRadiusAxis: CW, removeRadiusAxis: TW, addAngleAxis: IW, removeAngleAxis: _W } = Ox.actions, hN = Ox.reducer;
function pN(e3) {
  return e3 && typeof e3 == "object" && "className" in e3 && typeof e3.className == "string" ? e3.className : "";
}
var Px = (e3) => e3 && typeof e3 == "object" && "clipDot" in e3 ? !!e3.clipDot : true, _l = {}, Qm;
function vN() {
  return Qm || (Qm = 1, (function(e3) {
    Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      var _a2;
      if (typeof r != "object" || r == null) return false;
      if (Object.getPrototypeOf(r) === null) return true;
      if (Object.prototype.toString.call(r) !== "[object Object]") {
        const i = r[Symbol.toStringTag];
        return i == null || !((_a2 = Object.getOwnPropertyDescriptor(r, Symbol.toStringTag)) == null ? void 0 : _a2.writable) ? false : r.toString() === `[object ${i}]`;
      }
      let n = r;
      for (; Object.getPrototypeOf(n) !== null; ) n = Object.getPrototypeOf(n);
      return Object.getPrototypeOf(r) === n;
    }
    e3.isPlainObject = t;
  })(_l)), _l;
}
var Ml, Jm;
function mN() {
  return Jm || (Jm = 1, Ml = vN().isPlainObject), Ml;
}
var gN = mN();
const yN = Tn(gN);
var eg, tg, rg, ng, ig;
function ag(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function og(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ag(Object(r), true).forEach(function(n) {
      bN(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : ag(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function bN(e3, t, r) {
  return (t = wN(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function wN(e3) {
  var t = xN(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function xN(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function Go() {
  return Go = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Go.apply(null, arguments);
}
function Ei(e3, t) {
  return t || (t = e3.slice(0)), Object.freeze(Object.defineProperties(e3, { raw: { value: Object.freeze(t) } }));
}
var ug = (e3, t, r, n, i) => {
  var a = r - n, o;
  return o = De(eg || (eg = Ei(["M ", ",", ""])), e3, t), o += De(tg || (tg = Ei(["L ", ",", ""])), e3 + r, t), o += De(rg || (rg = Ei(["L ", ",", ""])), e3 + r - a / 2, t + i), o += De(ng || (ng = Ei(["L ", ",", ""])), e3 + r - a / 2 - n, t + i), o += De(ig || (ig = Ei(["L ", ",", " Z"])), e3, t), o;
}, ON = { x: 0, y: 0, upperWidth: 0, lowerWidth: 0, height: 0, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, PN = (e3) => {
  var t = Tt(e3, ON), { x: r, y: n, upperWidth: i, lowerWidth: a, height: o, className: u } = t, { animationEasing: s, animationDuration: l, animationBegin: c, isUpdateAnimationActive: f } = t, d = p.useRef(null), [h, v] = p.useState(-1), g = p.useRef(i), m = p.useRef(a), y = p.useRef(o), x = p.useRef(r), b = p.useRef(n), w = If(e3, "trapezoid-");
  if (p.useEffect(() => {
    if (d.current && d.current.getTotalLength) try {
      var L = d.current.getTotalLength();
      L && v(L);
    } catch {
    }
  }, []), r !== +r || n !== +n || i !== +i || a !== +a || o !== +o || i === 0 && a === 0 || o === 0) return null;
  var O = Ee("recharts-trapezoid", u);
  if (!f) return p.createElement("g", null, p.createElement("path", Go({}, vt(t), { className: O, d: ug(r, n, i, a, o) })));
  var P = g.current, S = m.current, E = y.current, N = x.current, k = b.current, R = "0px ".concat(h === -1 ? 1 : h, "px"), C = "".concat(h, "px ").concat(h, "px"), F = $b(["strokeDasharray"], l, s);
  return p.createElement(Tf, { animationId: w, key: w, canBegin: h > 0, duration: l, easing: s, isActive: f, begin: c }, (L) => {
    var M = bt(P, i, L), $ = bt(S, a, L), B = bt(E, o, L), D = bt(N, r, L), K = bt(k, n, L);
    d.current && (g.current = M, m.current = $, y.current = B, x.current = D, b.current = K);
    var W = L > 0 ? { transition: F, strokeDasharray: C } : { strokeDasharray: R };
    return p.createElement("path", Go({}, vt(t), { className: O, d: ug(D, K, M, $, B), ref: d, style: og(og({}, W), t.style) }));
  });
}, SN = ["option", "shapeType", "activeClassName", "inActiveClassName"];
function EN(e3, t) {
  if (e3 == null) return {};
  var r, n, i = AN(e3, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function AN(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function sg(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xo(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sg(Object(r), true).forEach(function(n) {
      CN(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : sg(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function CN(e3, t, r) {
  return (t = TN(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function TN(e3) {
  var t = IN(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function IN(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function _N(e3, t) {
  return Xo(Xo({}, t), e3);
}
function MN(e3, t) {
  return e3 === "symbols";
}
function lg(e3) {
  var { shapeType: t, elementProps: r } = e3;
  switch (t) {
    case "rectangle":
      return p.createElement(Wb, r);
    case "trapezoid":
      return p.createElement(PN, r);
    case "sector":
      return p.createElement(Kb, r);
    case "symbols":
      if (MN(t)) return p.createElement(Cy, r);
      break;
    case "curve":
      return p.createElement(Lb, r);
    default:
      return null;
  }
}
function kN(e3) {
  return p.isValidElement(e3) ? e3.props : e3;
}
function jN(e3) {
  var { option: t, shapeType: r, activeClassName: n = "recharts-active-shape", inActiveClassName: i = "recharts-shape" } = e3, a = EN(e3, SN), o;
  if (p.isValidElement(t)) o = p.cloneElement(t, Xo(Xo({}, a), kN(t)));
  else if (typeof t == "function") o = t(a, a.index);
  else if (yN(t) && typeof t != "boolean") {
    var u = _N(t, a);
    o = p.createElement(lg, { shapeType: r, elementProps: u });
  } else {
    var s = a;
    o = p.createElement(lg, { shapeType: r, elementProps: s });
  }
  return a.isActive ? p.createElement(Or, { className: n }, o) : p.createElement(Or, { className: i }, o);
}
function RN(e3) {
  var { tooltipEntrySettings: t } = e3, r = Le(), n = It(), i = p.useRef(null);
  return p.useLayoutEffect(() => {
    n || (i.current === null ? r(Kk(t)) : i.current !== t && r(Vk({ prev: i.current, next: t })), i.current = t);
  }, [t, r, n]), p.useLayoutEffect(() => () => {
    i.current && (r(Hk(i.current)), i.current = null);
  }, [r]), null;
}
function DN(e3) {
  var { legendPayload: t } = e3, r = Le(), n = It(), i = p.useRef(null);
  return p.useLayoutEffect(() => {
    n || (i.current === null ? r(VA(t)) : i.current !== t && r(HA({ prev: i.current, next: t })), i.current = t);
  }, [r, n, t]), p.useLayoutEffect(() => () => {
    i.current && (r(YA(i.current)), i.current = null);
  }, [r]), null;
}
var kl, NN = () => {
  var [e3] = p.useState(() => Wi("uid-"));
  return e3;
}, LN = (kl = of.useId) !== null && kl !== void 0 ? kl : NN;
function $N(e3, t) {
  var r = LN();
  return t || (e3 ? "".concat(e3, "-").concat(r) : r);
}
var FN = p.createContext(void 0), BN = (e3) => {
  var { id: t, type: r, children: n } = e3, i = $N("recharts-".concat(r), t);
  return p.createElement(FN.Provider, { value: i }, n(i));
}, zN = { cartesianItems: [], polarItems: [] }, Sx = ft({ name: "graphicalItems", initialState: zN, reducers: { addCartesianGraphicalItem: { reducer(e3, t) {
  e3.cartesianItems.push(t.payload);
}, prepare: Ce() }, replaceCartesianGraphicalItem: { reducer(e3, t) {
  var { prev: r, next: n } = t.payload, i = Dt(e3).cartesianItems.indexOf(r);
  i > -1 && (e3.cartesianItems[i] = n);
}, prepare: Ce() }, removeCartesianGraphicalItem: { reducer(e3, t) {
  var r = Dt(e3).cartesianItems.indexOf(t.payload);
  r > -1 && e3.cartesianItems.splice(r, 1);
}, prepare: Ce() }, addPolarGraphicalItem: { reducer(e3, t) {
  e3.polarItems.push(t.payload);
}, prepare: Ce() }, removePolarGraphicalItem: { reducer(e3, t) {
  var r = Dt(e3).polarItems.indexOf(t.payload);
  r > -1 && e3.polarItems.splice(r, 1);
}, prepare: Ce() }, replacePolarGraphicalItem: { reducer(e3, t) {
  var { prev: r, next: n } = t.payload, i = Dt(e3).polarItems.indexOf(r);
  i > -1 && (e3.polarItems[i] = n);
}, prepare: Ce() } } }), { addCartesianGraphicalItem: WN, replaceCartesianGraphicalItem: UN, removeCartesianGraphicalItem: qN, addPolarGraphicalItem: MW, removePolarGraphicalItem: kW, replacePolarGraphicalItem: jW } = Sx.actions, KN = Sx.reducer, VN = (e3) => {
  var t = Le(), r = p.useRef(null);
  return p.useLayoutEffect(() => {
    r.current === null ? t(WN(e3)) : r.current !== e3 && t(UN({ prev: r.current, next: e3 })), r.current = e3;
  }, [t, e3]), p.useLayoutEffect(() => () => {
    r.current && (t(qN(r.current)), r.current = null);
  }, [t]), null;
}, HN = p.memo(VN), YN = ["points"];
function cg(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jl(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cg(Object(r), true).forEach(function(n) {
      GN(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : cg(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function GN(e3, t, r) {
  return (t = XN(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function XN(e3) {
  var t = ZN(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ZN(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function Zo() {
  return Zo = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Zo.apply(null, arguments);
}
function QN(e3, t) {
  if (e3 == null) return {};
  var r, n, i = JN(e3, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function JN(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function eL(e3) {
  var { option: t, dotProps: r, className: n } = e3;
  if (p.isValidElement(t)) return p.cloneElement(t, r);
  if (typeof t == "function") return t(r);
  var i = Ee(n, typeof t != "boolean" ? t.className : ""), a = r ?? {}, { points: o } = a, u = QN(a, YN);
  return p.createElement(xx, Zo({}, u, { className: i }));
}
function tL(e3, t) {
  return e3 == null ? false : t ? true : e3.length === 1;
}
function rL(e3) {
  var { points: t, dot: r, className: n, dotClassName: i, dataKey: a, baseProps: o, needClip: u, clipPathId: s, zIndex: l = wt.scatter } = e3;
  if (!tL(t, r)) return null;
  var c = Px(r), f = RP(r), d = t.map((v, g) => {
    var m, y, x = jl(jl(jl({ r: 3 }, o), f), {}, { index: g, cx: (m = v.x) !== null && m !== void 0 ? m : void 0, cy: (y = v.y) !== null && y !== void 0 ? y : void 0, dataKey: a, value: v.value, payload: v.payload, points: t });
    return p.createElement(eL, { key: "dot-".concat(g), option: r, dotProps: x, className: i });
  }), h = {};
  return u && s != null && (h.clipPath = "url(#clipPath-".concat(c ? "" : "dots-").concat(s, ")")), p.createElement(rn, { zIndex: l }, p.createElement(Or, Zo({ className: n }, h), d));
}
function fg(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dg(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fg(Object(r), true).forEach(function(n) {
      nL(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : fg(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function nL(e3, t, r) {
  return (t = iL(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function iL(e3) {
  var t = aL(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function aL(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var oL = { xAxis: {}, yAxis: {}, zAxis: {} }, Ex = ft({ name: "cartesianAxis", initialState: oL, reducers: { addXAxis: { reducer(e3, t) {
  e3.xAxis[t.payload.id] = t.payload;
}, prepare: Ce() }, replaceXAxis: { reducer(e3, t) {
  var { prev: r, next: n } = t.payload;
  e3.xAxis[r.id] !== void 0 && (r.id !== n.id && delete e3.xAxis[r.id], e3.xAxis[n.id] = n);
}, prepare: Ce() }, removeXAxis: { reducer(e3, t) {
  delete e3.xAxis[t.payload.id];
}, prepare: Ce() }, addYAxis: { reducer(e3, t) {
  e3.yAxis[t.payload.id] = t.payload;
}, prepare: Ce() }, replaceYAxis: { reducer(e3, t) {
  var { prev: r, next: n } = t.payload;
  e3.yAxis[r.id] !== void 0 && (r.id !== n.id && delete e3.yAxis[r.id], e3.yAxis[n.id] = n);
}, prepare: Ce() }, removeYAxis: { reducer(e3, t) {
  delete e3.yAxis[t.payload.id];
}, prepare: Ce() }, addZAxis: { reducer(e3, t) {
  e3.zAxis[t.payload.id] = t.payload;
}, prepare: Ce() }, replaceZAxis: { reducer(e3, t) {
  var { prev: r, next: n } = t.payload;
  e3.zAxis[r.id] !== void 0 && (r.id !== n.id && delete e3.zAxis[r.id], e3.zAxis[n.id] = n);
}, prepare: Ce() }, removeZAxis: { reducer(e3, t) {
  delete e3.zAxis[t.payload.id];
}, prepare: Ce() }, updateYAxisWidth(e3, t) {
  var { id: r, width: n } = t.payload, i = e3.yAxis[r];
  if (i) {
    var a, o = i.widthHistory || [];
    if (o.length === 3 && o[0] === o[2] && n === o[1] && n !== i.width && Math.abs(n - ((a = o[0]) !== null && a !== void 0 ? a : 0)) <= 1) return;
    var u = [...o, n].slice(-3);
    e3.yAxis[r] = dg(dg({}, i), {}, { width: n, widthHistory: u });
  }
} } }), { addXAxis: uL, replaceXAxis: sL, removeXAxis: lL, addYAxis: cL, replaceYAxis: fL, removeYAxis: dL, addZAxis: RW, replaceZAxis: DW, removeZAxis: NW, updateYAxisWidth: hL } = Ex.actions, pL = Ex.reducer, vL = T([at], (e3) => ({ top: e3.top, bottom: e3.bottom, left: e3.left, right: e3.right })), mL = T([vL, _r, Mr], (e3, t, r) => {
  if (!(!e3 || t == null || r == null)) return { x: e3.left, y: e3.top, width: Math.max(0, t - e3.left - e3.right), height: Math.max(0, r - e3.top - e3.bottom) };
}), _d = () => se(mL), gL = () => se(Kj);
function hg(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rl(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hg(Object(r), true).forEach(function(n) {
      yL(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : hg(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function yL(e3, t, r) {
  return (t = bL(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function bL(e3) {
  var t = wL(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function wL(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var xL = (e3) => {
  var { point: t, childIndex: r, mainColor: n, activeDot: i, dataKey: a, clipPath: o } = e3;
  if (i === false || t.x == null || t.y == null) return null;
  var u = { index: r, dataKey: a, cx: t.x, cy: t.y, r: 4, fill: n ?? "none", strokeWidth: 2, stroke: "#fff", payload: t.payload, value: t.value }, s = Rl(Rl(Rl({}, u), lu(i)), vf(i)), l;
  return p.isValidElement(i) ? l = p.cloneElement(i, s) : typeof i == "function" ? l = i(s) : l = p.createElement(xx, s), p.createElement(Or, { className: "recharts-active-dot", clipPath: o }, l);
};
function OL(e3) {
  var { points: t, mainColor: r, activeDot: n, itemDataKey: i, clipPath: a, zIndex: o = wt.activeDot } = e3, u = se(ta), s = gL();
  if (t == null || s == null) return null;
  var l = t.find((c) => s.includes(c.payload));
  return Xe(l) ? null : p.createElement(rn, { zIndex: o }, p.createElement(xL, { point: l, childIndex: Number(u), mainColor: r, dataKey: i, activeDot: n, clipPath: a }));
}
var PL = (e3) => {
  var { chartData: t } = e3, r = Le(), n = It();
  return p.useEffect(() => n ? () => {
  } : (r(jm(t)), () => {
    r(jm(void 0));
  }), [t, r, n]), null;
}, pg = { x: 0, y: 0, width: 0, height: 0, padding: { top: 0, right: 0, bottom: 0, left: 0 } }, Ax = ft({ name: "brush", initialState: pg, reducers: { setBrushSettings(e3, t) {
  return t.payload == null ? pg : t.payload;
} } }), { setBrushSettings: LW } = Ax.actions, SL = Ax.reducer;
function EL(e3) {
  return (e3 % 180 + 180) % 180;
}
var AL = function(t) {
  var { width: r, height: n } = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = EL(i), o = a * Math.PI / 180, u = Math.atan(n / r), s = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(s);
}, CL = { dots: [], areas: [], lines: [] }, Cx = ft({ name: "referenceElements", initialState: CL, reducers: { addDot: (e3, t) => {
  e3.dots.push(t.payload);
}, removeDot: (e3, t) => {
  var r = Dt(e3).dots.findIndex((n) => n === t.payload);
  r !== -1 && e3.dots.splice(r, 1);
}, addArea: (e3, t) => {
  e3.areas.push(t.payload);
}, removeArea: (e3, t) => {
  var r = Dt(e3).areas.findIndex((n) => n === t.payload);
  r !== -1 && e3.areas.splice(r, 1);
}, addLine: (e3, t) => {
  e3.lines.push(t.payload);
}, removeLine: (e3, t) => {
  var r = Dt(e3).lines.findIndex((n) => n === t.payload);
  r !== -1 && e3.lines.splice(r, 1);
} } }), { addDot: $W, removeDot: FW, addArea: BW, removeArea: zW, addLine: WW, removeLine: UW } = Cx.actions, TL = Cx.reducer, IL = p.createContext(void 0), _L = (e3) => {
  var { children: t } = e3, [r] = p.useState("".concat(Wi("recharts"), "-clip")), n = _d();
  if (n == null) return null;
  var { x: i, y: a, width: o, height: u } = n;
  return p.createElement(IL.Provider, { value: r }, p.createElement("defs", null, p.createElement("clipPath", { id: r }, p.createElement("rect", { x: i, y: a, height: u, width: o }))), t);
};
function Tx(e3, t) {
  if (t < 1) return [];
  if (t === 1) return e3;
  for (var r = [], n = 0; n < e3.length; n += t) {
    var i = e3[n];
    i !== void 0 && r.push(i);
  }
  return r;
}
function ML(e3, t, r) {
  var n = { width: e3.width + t.width, height: e3.height + t.height };
  return AL(n, r);
}
function kL(e3, t, r) {
  var n = r === "width", { x: i, y: a, width: o, height: u } = e3;
  return t === 1 ? { start: n ? i : a, end: n ? i + o : a + u } : { start: n ? i + o : a + u, end: n ? i : a };
}
function na(e3, t, r, n, i) {
  if (e3 * t < e3 * n || e3 * t > e3 * i) return false;
  var a = r();
  return e3 * (t - e3 * a / 2 - n) >= 0 && e3 * (t + e3 * a / 2 - i) <= 0;
}
function jL(e3, t) {
  return Tx(e3, t + 1);
}
function RL(e3, t, r, n, i) {
  for (var a = (n || []).slice(), { start: o, end: u } = t, s = 0, l = 1, c = o, f = function() {
    var v = n == null ? void 0 : n[s];
    if (v === void 0) return { v: Tx(n, l) };
    var g = s, m, y = () => (m === void 0 && (m = r(v, g)), m), x = v.coordinate, b = s === 0 || na(e3, x, y, c, u);
    b || (s = 0, c = o, l += 1), b && (c = x + e3 * (y() / 2 + i), s += l);
  }, d; l <= a.length; ) if (d = f(), d) return d.v;
  return [];
}
function DL(e3, t, r, n, i) {
  var a = (n || []).slice(), o = a.length;
  if (o === 0) return [];
  for (var { start: u, end: s } = t, l = 1; l <= o; l++) {
    for (var c = (o - 1) % l, f = u, d = true, h = function() {
      var w = n[g];
      if (w == null) return 0;
      var O = g, P, S = () => (P === void 0 && (P = r(w, O)), P), E = w.coordinate, N = g === c || na(e3, E, S, f, s);
      if (!N) return d = false, 1;
      N && (f = E + e3 * (S() / 2 + i));
    }, v, g = c; g < o && (v = h(), !(v !== 0 && v === 1)); g += l) ;
    if (d) {
      for (var m = [], y = c; y < o; y += l) {
        var x = n[y];
        x != null && m.push(x);
      }
      return m;
    }
  }
  return [];
}
function vg(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ut(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vg(Object(r), true).forEach(function(n) {
      NL(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : vg(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function NL(e3, t, r) {
  return (t = LL(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function LL(e3) {
  var t = $L(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function $L(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function FL(e3, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, { start: u } = t, { end: s } = t, l = function(d) {
    var h = a[d];
    if (h == null) return 1;
    var v = h, g, m = () => (g === void 0 && (g = r(h, d)), g);
    if (d === o - 1) {
      var y = e3 * (v.coordinate + e3 * m() / 2 - s);
      a[d] = v = ut(ut({}, v), {}, { tickCoord: y > 0 ? v.coordinate - y * e3 : v.coordinate });
    } else a[d] = v = ut(ut({}, v), {}, { tickCoord: v.coordinate });
    if (v.tickCoord != null) {
      var x = na(e3, v.tickCoord, m, u, s);
      x && (s = v.tickCoord - e3 * (m() / 2 + i), a[d] = ut(ut({}, v), {}, { isShow: true }));
    }
  }, c = o - 1; c >= 0; c--) l(c);
  return a;
}
function BL(e3, t, r, n, i, a) {
  var o = (n || []).slice(), u = o.length, { start: s, end: l } = t;
  if (a) {
    var c = n[u - 1];
    if (c != null) {
      var f = r(c, u - 1), d = e3 * (c.coordinate + e3 * f / 2 - l);
      if (o[u - 1] = c = ut(ut({}, c), {}, { tickCoord: d > 0 ? c.coordinate - d * e3 : c.coordinate }), c.tickCoord != null) {
        var h = na(e3, c.tickCoord, () => f, s, l);
        h && (l = c.tickCoord - e3 * (f / 2 + i), o[u - 1] = ut(ut({}, c), {}, { isShow: true }));
      }
    }
  }
  for (var v = a ? u - 1 : u, g = function(x) {
    var b = o[x];
    if (b == null) return 1;
    var w = b, O, P = () => (O === void 0 && (O = r(b, x)), O);
    if (x === 0) {
      var S = e3 * (w.coordinate - e3 * P() / 2 - s);
      o[x] = w = ut(ut({}, w), {}, { tickCoord: S < 0 ? w.coordinate - S * e3 : w.coordinate });
    } else o[x] = w = ut(ut({}, w), {}, { tickCoord: w.coordinate });
    if (w.tickCoord != null) {
      var E = na(e3, w.tickCoord, P, s, l);
      E && (s = w.tickCoord + e3 * (P() / 2 + i), o[x] = ut(ut({}, w), {}, { isShow: true }));
    }
  }, m = 0; m < v; m++) g(m);
  return o;
}
function zL(e3, t, r) {
  var { tick: n, ticks: i, viewBox: a, minTickGap: o, orientation: u, interval: s, tickFormatter: l, unit: c, angle: f } = e3;
  if (!i || !i.length || !n) return [];
  if (ue(s) || da.isSsr) {
    var d;
    return (d = jL(i, ue(s) ? s : 0)) !== null && d !== void 0 ? d : [];
  }
  var h = [], v = u === "top" || u === "bottom" ? "width" : "height", g = c && v === "width" ? Di(c, { fontSize: t, letterSpacing: r }) : { width: 0, height: 0 }, m = (O, P) => {
    var S = typeof l == "function" ? l(O.value, P) : O.value;
    return v === "width" ? ML(Di(S, { fontSize: t, letterSpacing: r }), g, f) : Di(S, { fontSize: t, letterSpacing: r })[v];
  }, y = i[0], x = i[1], b = i.length >= 2 && y != null && x != null ? Kt(x.coordinate - y.coordinate) : 1, w = kL(a, b, v);
  return s === "equidistantPreserveStart" ? RL(b, w, m, i, o) : s === "equidistantPreserveEnd" ? DL(b, w, m, i, o) : (s === "preserveStart" || s === "preserveStartEnd" ? h = BL(b, w, m, i, o, s === "preserveStartEnd") : h = FL(b, w, m, i, o), h.filter((O) => O.isShow));
}
var WL = (e3) => {
  var { ticks: t, label: r, labelGapWithTick: n = 5, tickSize: i = 0, tickMargin: a = 0 } = e3, o = 0;
  if (t) {
    Array.from(t).forEach((c) => {
      if (c) {
        var f = c.getBoundingClientRect();
        f.width > o && (o = f.width);
      }
    });
    var u = r ? r.getBoundingClientRect().width : 0, s = i + a, l = o + s + u + (r ? n : 0);
    return Math.round(l);
  }
  return 0;
}, UL = { xAxis: {}, yAxis: {} }, Ix = ft({ name: "renderedTicks", initialState: UL, reducers: { setRenderedTicks: (e3, t) => {
  var { axisType: r, axisId: n, ticks: i } = t.payload;
  e3[r][n] = i;
}, removeRenderedTicks: (e3, t) => {
  var { axisType: r, axisId: n } = t.payload;
  delete e3[r][n];
} } }), { setRenderedTicks: qL, removeRenderedTicks: KL } = Ix.actions, VL = Ix.reducer, HL = ["axisLine", "width", "height", "className", "hide", "ticks", "axisType", "axisId"];
function YL(e3, t) {
  if (e3 == null) return {};
  var r, n, i = GL(e3, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function GL(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function Cn() {
  return Cn = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Cn.apply(null, arguments);
}
function mg(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Re(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mg(Object(r), true).forEach(function(n) {
      XL(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : mg(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function XL(e3, t, r) {
  return (t = ZL(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function ZL(e3) {
  var t = QL(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function QL(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var bn = { x: 0, y: 0, width: 0, height: 0, viewBox: { x: 0, y: 0, width: 0, height: 0 }, orientation: "bottom", ticks: [], stroke: "#666", tickLine: true, axisLine: true, tick: true, mirror: false, minTickGap: 5, tickSize: 6, tickMargin: 2, interval: "preserveEnd", zIndex: wt.axis };
function JL(e3) {
  var { x: t, y: r, width: n, height: i, orientation: a, mirror: o, axisLine: u, otherSvgProps: s } = e3;
  if (!u) return null;
  var l = Re(Re(Re({}, s), xr(u)), {}, { fill: "none" });
  if (a === "top" || a === "bottom") {
    var c = +(a === "top" && !o || a === "bottom" && o);
    l = Re(Re({}, l), {}, { x1: t, y1: r + c * i, x2: t + n, y2: r + c * i });
  } else {
    var f = +(a === "left" && !o || a === "right" && o);
    l = Re(Re({}, l), {}, { x1: t + f * n, y1: r, x2: t + f * n, y2: r + i });
  }
  return p.createElement("line", Cn({}, l, { className: Ee("recharts-cartesian-axis-line", hu(u, "className")) }));
}
function e2(e3, t, r, n, i, a, o, u, s) {
  var l, c, f, d, h, v, g = u ? -1 : 1, m = e3.tickSize || o, y = ue(e3.tickCoord) ? e3.tickCoord : e3.coordinate;
  switch (a) {
    case "top":
      l = c = e3.coordinate, d = r + +!u * i, f = d - g * m, v = f - g * s, h = y;
      break;
    case "left":
      f = d = e3.coordinate, c = t + +!u * n, l = c - g * m, h = l - g * s, v = y;
      break;
    case "right":
      f = d = e3.coordinate, c = t + +u * n, l = c + g * m, h = l + g * s, v = y;
      break;
    default:
      l = c = e3.coordinate, d = r + +u * i, f = d + g * m, v = f + g * s, h = y;
      break;
  }
  return { line: { x1: l, y1: f, x2: c, y2: d }, tick: { x: h, y: v } };
}
function t2(e3, t) {
  switch (e3) {
    case "left":
      return t ? "start" : "end";
    case "right":
      return t ? "end" : "start";
    default:
      return "middle";
  }
}
function r2(e3, t) {
  switch (e3) {
    case "left":
    case "right":
      return "middle";
    case "top":
      return t ? "start" : "end";
    default:
      return t ? "end" : "start";
  }
}
function n2(e3) {
  var { option: t, tickProps: r, value: n } = e3, i, a = Ee(r.className, "recharts-cartesian-axis-tick-value");
  if (p.isValidElement(t)) i = p.cloneElement(t, Re(Re({}, r), {}, { className: a }));
  else if (typeof t == "function") i = t(Re(Re({}, r), {}, { className: a }));
  else {
    var o = "recharts-cartesian-axis-tick-value";
    typeof t != "boolean" && (o = Ee(o, pN(t))), i = p.createElement(Td, Cn({}, r, { className: o }), n);
  }
  return i;
}
function i2(e3) {
  var { ticks: t, axisType: r, axisId: n } = e3, i = Le();
  return p.useEffect(() => {
    if (n == null || r == null) return ai;
    var a = t.map((o) => ({ value: o.value, coordinate: o.coordinate, offset: o.offset, index: o.index }));
    return i(qL({ ticks: a, axisId: n, axisType: r })), () => {
      i(KL({ axisId: n, axisType: r }));
    };
  }, [i, t, n, r]), null;
}
var a2 = p.forwardRef((e3, t) => {
  var { ticks: r = [], tick: n, tickLine: i, stroke: a, tickFormatter: o, unit: u, padding: s, tickTextProps: l, orientation: c, mirror: f, x: d, y: h, width: v, height: g, tickSize: m, tickMargin: y, fontSize: x, letterSpacing: b, getTicksConfig: w, events: O, axisType: P, axisId: S } = e3, E = zL(Re(Re({}, w), {}, { ticks: r }), x, b), N = xr(w), k = lu(n), R = hx(N.textAnchor) ? N.textAnchor : t2(c, f), C = r2(c, f), F = {};
  typeof i == "object" && (F = i);
  var L = Re(Re({}, N), {}, { fill: "none" }, F), M = E.map((D) => Re({ entry: D }, e2(D, d, h, v, g, c, m, f, y))), $ = M.map((D) => {
    var { entry: K, line: W } = D;
    return p.createElement(Or, { className: "recharts-cartesian-axis-tick", key: "tick-".concat(K.value, "-").concat(K.coordinate, "-").concat(K.tickCoord) }, i && p.createElement("line", Cn({}, L, W, { className: Ee("recharts-cartesian-axis-tick-line", hu(i, "className")) })));
  }), B = M.map((D, K) => {
    var W, fe, { entry: te, tick: ae } = D, re = Re(Re(Re(Re({ verticalAnchor: C }, N), {}, { textAnchor: R, stroke: "none", fill: a }, ae), {}, { index: K, payload: te, visibleTicksCount: E.length, tickFormatter: o, padding: s }, l), {}, { angle: (W = (fe = l == null ? void 0 : l.angle) !== null && fe !== void 0 ? fe : N.angle) !== null && W !== void 0 ? W : 0 }), X = Re(Re({}, re), k);
    return p.createElement(Or, Cn({ className: "recharts-cartesian-axis-tick-label", key: "tick-label-".concat(te.value, "-").concat(te.coordinate, "-").concat(te.tickCoord) }, $1(O, te, K)), n && p.createElement(n2, { option: n, tickProps: X, value: "".concat(typeof o == "function" ? o(te.value, K) : te.value).concat(u || "") }));
  });
  return p.createElement("g", { className: "recharts-cartesian-axis-ticks recharts-".concat(P, "-ticks") }, p.createElement(i2, { ticks: E, axisId: S, axisType: P }), B.length > 0 && p.createElement(rn, { zIndex: wt.label }, p.createElement("g", { className: "recharts-cartesian-axis-tick-labels recharts-".concat(P, "-tick-labels"), ref: t }, B)), $.length > 0 && p.createElement("g", { className: "recharts-cartesian-axis-tick-lines recharts-".concat(P, "-tick-lines") }, $));
}), o2 = p.forwardRef((e3, t) => {
  var { axisLine: r, width: n, height: i, className: a, hide: o, ticks: u, axisType: s, axisId: l } = e3, c = YL(e3, HL), [f, d] = p.useState(""), [h, v] = p.useState(""), g = p.useRef(null);
  p.useImperativeHandle(t, () => ({ getCalculatedWidth: () => {
    var y;
    return WL({ ticks: g.current, label: (y = e3.labelRef) === null || y === void 0 ? void 0 : y.current, labelGapWithTick: 5, tickSize: e3.tickSize, tickMargin: e3.tickMargin });
  } }));
  var m = p.useCallback((y) => {
    if (y) {
      var x = y.getElementsByClassName("recharts-cartesian-axis-tick-value");
      g.current = x;
      var b = x[0];
      if (b) {
        var w = window.getComputedStyle(b), O = w.fontSize, P = w.letterSpacing;
        (O !== f || P !== h) && (d(O), v(P));
      }
    }
  }, [f, h]);
  return o || n != null && n <= 0 || i != null && i <= 0 ? null : p.createElement(rn, { zIndex: e3.zIndex }, p.createElement(Or, { className: Ee("recharts-cartesian-axis", a) }, p.createElement(JL, { x: e3.x, y: e3.y, width: n, height: i, orientation: e3.orientation, mirror: e3.mirror, axisLine: r, otherSvgProps: xr(e3) }), p.createElement(a2, { ref: m, axisType: s, events: c, fontSize: f, getTicksConfig: e3, height: e3.height, letterSpacing: h, mirror: e3.mirror, orientation: e3.orientation, padding: e3.padding, stroke: e3.stroke, tick: e3.tick, tickFormatter: e3.tickFormatter, tickLine: e3.tickLine, tickMargin: e3.tickMargin, tickSize: e3.tickSize, tickTextProps: e3.tickTextProps, ticks: u, unit: e3.unit, width: e3.width, x: e3.x, y: e3.y, axisId: l }), p.createElement(HD, { x: e3.x, y: e3.y, width: e3.width, height: e3.height, lowerWidth: e3.width, upperWidth: e3.width }, p.createElement(nN, { label: e3.label, labelRef: e3.labelRef }), e3.children)));
}), Md = p.forwardRef((e3, t) => {
  var r = Tt(e3, bn);
  return p.createElement(o2, Cn({}, r, { ref: t }));
});
Md.displayName = "CartesianAxis";
var u2 = {}, _x = ft({ name: "errorBars", initialState: u2, reducers: { addErrorBar: (e3, t) => {
  var { itemId: r, errorBar: n } = t.payload;
  e3[r] || (e3[r] = []), e3[r].push(n);
}, replaceErrorBar: (e3, t) => {
  var { itemId: r, prev: n, next: i } = t.payload;
  e3[r] && (e3[r] = e3[r].map((a) => a.dataKey === n.dataKey && a.direction === n.direction ? i : a));
}, removeErrorBar: (e3, t) => {
  var { itemId: r, errorBar: n } = t.payload;
  e3[r] && (e3[r] = e3[r].filter((i) => i.dataKey !== n.dataKey || i.direction !== n.direction));
} } }), { addErrorBar: qW, replaceErrorBar: KW, removeErrorBar: VW } = _x.actions, s2 = _x.reducer, l2 = ["children"];
function c2(e3, t) {
  if (e3 == null) return {};
  var r, n, i = f2(e3, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function f2(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var d2 = { data: [], xAxisId: "xAxis-0", yAxisId: "yAxis-0", dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }), errorBarOffset: 0 }, h2 = p.createContext(d2);
function p2(e3) {
  var { children: t } = e3, r = c2(e3, l2);
  return p.createElement(h2.Provider, { value: r }, t);
}
function Mx(e3, t) {
  var r, n, i = se((l) => jr(l, e3)), a = se((l) => Rr(l, t)), o = (r = i == null ? void 0 : i.allowDataOverflow) !== null && r !== void 0 ? r : Fe.allowDataOverflow, u = (n = a == null ? void 0 : a.allowDataOverflow) !== null && n !== void 0 ? n : Be.allowDataOverflow, s = o || u;
  return { needClip: s, needClipX: o, needClipY: u };
}
function v2(e3) {
  var { xAxisId: t, yAxisId: r, clipPathId: n } = e3, i = _d(), { needClipX: a, needClipY: o, needClip: u } = Mx(t, r);
  if (!u || !i) return null;
  var { x: s, y: l, width: c, height: f } = i;
  return p.createElement("clipPath", { id: "clipPath-".concat(n) }, p.createElement("rect", { x: a ? s : s - c / 2, y: o ? l : l - f / 2, width: a ? c : c * 2, height: o ? f : f * 2 }));
}
var kx = (e3, t, r, n) => kw(e3, "xAxis", t, n), jx = (e3, t, r, n) => Mw(e3, "xAxis", t, n), Rx = (e3, t, r, n) => kw(e3, "yAxis", r, n), Dx = (e3, t, r, n) => Mw(e3, "yAxis", r, n), m2 = T([je, kx, Rx, jx, Dx], (e3, t, r, n, i) => Ir(e3, "xAxis") ? Po(t, n, false) : Po(r, i, false)), g2 = (e3, t, r, n, i) => i;
function y2(e3) {
  return e3.type === "line";
}
var b2 = T([ew, g2], (e3, t) => e3.filter(y2).find((r) => r.id === t)), w2 = T([je, kx, Rx, jx, Dx, b2, m2, ha], (e3, t, r, n, i, a, o, u) => {
  var { chartData: s, dataStartIndex: l, dataEndIndex: c } = u;
  if (!(a == null || t == null || r == null || n == null || i == null || n.length === 0 || i.length === 0 || o == null || e3 !== "horizontal" && e3 !== "vertical")) {
    var { dataKey: f, data: d } = a, h;
    if (d != null && d.length > 0 ? h = d : h = s == null ? void 0 : s.slice(l, c + 1), h != null) return z2({ layout: e3, xAxis: t, yAxis: r, xAxisTicks: n, yAxisTicks: i, dataKey: f, bandSize: o, displayedData: h });
  }
});
function x2(e3) {
  var t = lu(e3), r = 3, n = 2;
  if (t != null) {
    var { r: i, strokeWidth: a } = t, o = Number(i), u = Number(a);
    return (Number.isNaN(o) || o < 0) && (o = r), (Number.isNaN(u) || u < 0) && (u = n), { r: o, strokeWidth: u };
  }
  return { r, strokeWidth: n };
}
var O2 = ["id"], P2 = ["type", "layout", "connectNulls", "needClip", "shape"], S2 = ["activeDot", "animateNewValues", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "hide", "isAnimationActive", "label", "legendType", "xAxisId", "yAxisId", "id"];
function ia() {
  return ia = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, ia.apply(null, arguments);
}
function gg(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function er(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gg(Object(r), true).forEach(function(n) {
      E2(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : gg(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function E2(e3, t, r) {
  return (t = A2(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function A2(e3) {
  var t = C2(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function C2(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function kd(e3, t) {
  if (e3 == null) return {};
  var r, n, i = T2(e3, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function T2(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var I2 = (e3) => {
  var { dataKey: t, name: r, stroke: n, legendType: i, hide: a } = e3;
  return [{ inactive: a, dataKey: t, type: i, color: n, value: wb(r, t), payload: e3 }];
}, _2 = p.memo((e3) => {
  var { dataKey: t, data: r, stroke: n, strokeWidth: i, fill: a, name: o, hide: u, unit: s, tooltipType: l, id: c } = e3, f = { dataDefinedOnItem: r, getPosition: ai, settings: { stroke: n, strokeWidth: i, fill: a, dataKey: t, nameKey: void 0, name: wb(o, t), hide: u, type: l, color: n, unit: s, graphicalItemId: c } };
  return p.createElement(RN, { tooltipEntrySettings: f });
}), Nx = (e3, t) => "".concat(t, "px ").concat(e3, "px");
function M2(e3, t) {
  for (var r = e3.length % 2 !== 0 ? [...e3, 0] : e3, n = [], i = 0; i < t; ++i) n.push(...r);
  return n;
}
var k2 = (e3, t, r) => {
  var n = r.reduce((d, h) => d + h, 0);
  if (!n) return Nx(t, e3);
  for (var i = Math.floor(e3 / n), a = e3 % n, o = [], u = 0, s = 0; u < r.length; s += (l = r[u]) !== null && l !== void 0 ? l : 0, ++u) {
    var l, c = r[u];
    if (c != null && s + c > a) {
      o = [...r.slice(0, u), a - s];
      break;
    }
  }
  var f = o.length % 2 === 0 ? [0, t] : [t];
  return [...M2(r, i), ...o, ...f].map((d) => "".concat(d, "px")).join(", ");
};
function j2(e3) {
  var { clipPathId: t, points: r, props: n } = e3, { dot: i, dataKey: a, needClip: o } = n, { id: u } = n, s = kd(n, O2), l = xr(s);
  return p.createElement(rL, { points: r, dot: i, className: "recharts-line-dots", dotClassName: "recharts-line-dot", dataKey: a, baseProps: l, needClip: o, clipPathId: t });
}
function R2(e3) {
  var { showLabels: t, children: r, points: n } = e3, i = p.useMemo(() => n == null ? void 0 : n.map((a) => {
    var o, u, s = { x: (o = a.x) !== null && o !== void 0 ? o : 0, y: (u = a.y) !== null && u !== void 0 ? u : 0, width: 0, lowerWidth: 0, upperWidth: 0, height: 0 };
    return er(er({}, s), {}, { value: a.value, payload: a.payload, viewBox: s, parentViewBox: void 0, fill: void 0 });
  }), [n]);
  return p.createElement(sN, { value: t ? i : void 0 }, r);
}
function yg(e3) {
  var { clipPathId: t, pathRef: r, points: n, strokeDasharray: i, props: a } = e3, { type: o, layout: u, connectNulls: s, needClip: l, shape: c } = a, f = kd(a, P2), d = er(er({}, vt(f)), {}, { fill: "none", className: "recharts-line-curve", clipPath: l ? "url(#clipPath-".concat(t, ")") : void 0, points: n, type: o, layout: u, connectNulls: s, strokeDasharray: i ?? a.strokeDasharray });
  return p.createElement(p.Fragment, null, (n == null ? void 0 : n.length) > 1 && p.createElement(jN, ia({ shapeType: "curve", option: c }, d, { pathRef: r })), p.createElement(j2, { points: n, clipPathId: t, props: a }));
}
function D2(e3) {
  try {
    return e3 && e3.getTotalLength && e3.getTotalLength() || 0;
  } catch {
    return 0;
  }
}
function N2(e3) {
  var { clipPathId: t, props: r, pathRef: n, previousPointsRef: i, longestAnimatedLengthRef: a } = e3, { points: o, strokeDasharray: u, isAnimationActive: s, animationBegin: l, animationDuration: c, animationEasing: f, animateNewValues: d, width: h, height: v, onAnimationEnd: g, onAnimationStart: m } = r, y = i.current, x = If(o, "recharts-line-"), b = p.useRef(x), [w, O] = p.useState(false), P = !w, S = p.useCallback(() => {
    typeof g == "function" && g(), O(false);
  }, [g]), E = p.useCallback(() => {
    typeof m == "function" && m(), O(true);
  }, [m]), N = D2(n.current), k = p.useRef(0);
  b.current !== x && (k.current = a.current, b.current = x);
  var R = k.current;
  return p.createElement(R2, { points: o, showLabels: P }, r.children, p.createElement(Tf, { animationId: x, begin: l, duration: c, isActive: s, easing: f, onAnimationEnd: S, onAnimationStart: E, key: x }, (C) => {
    var F = bt(R, N + R, C), L = Math.min(F, N), M;
    if (s) if (u) {
      var $ = "".concat(u).split(/[,\s]+/gim).map((K) => parseFloat(K));
      M = k2(L, N, $);
    } else M = Nx(N, L);
    else M = u == null ? void 0 : String(u);
    if (C > 0 && N > 0 && (i.current = o, a.current = Math.max(a.current, L)), y) {
      var B = y.length / o.length, D = C === 1 ? o : o.map((K, W) => {
        var fe = Math.floor(W * B);
        if (y[fe]) {
          var te = y[fe];
          return er(er({}, K), {}, { x: bt(te.x, K.x, C), y: bt(te.y, K.y, C) });
        }
        return d ? er(er({}, K), {}, { x: bt(h * 2, K.x, C), y: bt(v / 2, K.y, C) }) : er(er({}, K), {}, { x: K.x, y: K.y });
      });
      return i.current = D, p.createElement(yg, { props: r, points: D, clipPathId: t, pathRef: n, strokeDasharray: M });
    }
    return p.createElement(yg, { props: r, points: o, clipPathId: t, pathRef: n, strokeDasharray: M });
  }), p.createElement(fN, { label: r.label }));
}
function L2(e3) {
  var { clipPathId: t, props: r } = e3, n = p.useRef(null), i = p.useRef(0), a = p.useRef(null);
  return p.createElement(N2, { props: r, clipPathId: t, previousPointsRef: n, longestAnimatedLengthRef: i, pathRef: a });
}
var $2 = (e3, t) => {
  var r, n;
  return { x: (r = e3.x) !== null && r !== void 0 ? r : void 0, y: (n = e3.y) !== null && n !== void 0 ? n : void 0, value: e3.value, errorVal: Ge(e3.payload, t) };
};
class F2 extends p.Component {
  render() {
    var { hide: t, dot: r, points: n, className: i, xAxisId: a, yAxisId: o, top: u, left: s, width: l, height: c, id: f, needClip: d, zIndex: h } = this.props;
    if (t) return null;
    var v = Ee("recharts-line", i), g = f, { r: m, strokeWidth: y } = x2(r), x = Px(r), b = m * 2 + y, w = d ? "url(#clipPath-".concat(x ? "" : "dots-").concat(g, ")") : void 0;
    return p.createElement(rn, { zIndex: h }, p.createElement(Or, { className: v }, d && p.createElement("defs", null, p.createElement(v2, { clipPathId: g, xAxisId: a, yAxisId: o }), !x && p.createElement("clipPath", { id: "clipPath-dots-".concat(g) }, p.createElement("rect", { x: s - b / 2, y: u - b / 2, width: l + b, height: c + b }))), p.createElement(p2, { xAxisId: a, yAxisId: o, data: n, dataPointFormatter: $2, errorBarOffset: 0 }, p.createElement(L2, { props: this.props, clipPathId: g }))), p.createElement(OL, { activeDot: this.props.activeDot, points: n, mainColor: this.props.stroke, itemDataKey: this.props.dataKey, clipPath: w }));
  }
}
var Lx = { activeDot: true, animateNewValues: true, animationBegin: 0, animationDuration: 1500, animationEasing: "ease", connectNulls: false, dot: true, fill: "#fff", hide: false, isAnimationActive: "auto", label: false, legendType: "line", stroke: "#3182bd", strokeWidth: 1, xAxisId: 0, yAxisId: 0, zIndex: wt.line, type: "linear" };
function B2(e3) {
  var t = Tt(e3, Lx), { activeDot: r, animateNewValues: n, animationBegin: i, animationDuration: a, animationEasing: o, connectNulls: u, dot: s, hide: l, isAnimationActive: c, label: f, legendType: d, xAxisId: h, yAxisId: v, id: g } = t, m = kd(t, S2), { needClip: y } = Mx(h, v), x = _d(), b = oi(), w = It(), O = se((k) => w2(k, h, v, w, g));
  if (b !== "horizontal" && b !== "vertical" || O == null || x == null) return null;
  var { height: P, width: S, x: E, y: N } = x;
  return p.createElement(F2, ia({}, m, { id: g, connectNulls: u, dot: s, activeDot: r, animateNewValues: n, animationBegin: i, animationDuration: a, animationEasing: o, isAnimationActive: c, hide: l, label: f, legendType: d, xAxisId: h, yAxisId: v, points: O, layout: b, height: P, width: S, left: E, top: N, needClip: y }));
}
function z2(e3) {
  var { layout: t, xAxis: r, yAxis: n, xAxisTicks: i, yAxisTicks: a, dataKey: o, bandSize: u, displayedData: s } = e3;
  return s.map((l, c) => {
    var f = Ge(l, o);
    if (t === "horizontal") {
      var d = mp({ axis: r, ticks: i, bandSize: u, entry: l, index: c }), h = Xe(f) ? null : n.scale.map(f);
      return { x: d, y: h ?? null, value: f, payload: l };
    }
    var v = Xe(f) ? null : r.scale.map(f), g = mp({ axis: n, ticks: a, bandSize: u, entry: l, index: c });
    return v == null || g == null ? null : { x: v, y: g, value: f, payload: l };
  }).filter(Boolean);
}
function W2(e3) {
  var t = Tt(e3, Lx), r = It();
  return p.createElement(BN, { id: t.id, type: "line" }, (n) => p.createElement(p.Fragment, null, p.createElement(DN, { legendPayload: I2(t) }), p.createElement(_2, { dataKey: t.dataKey, data: t.data, stroke: t.stroke, strokeWidth: t.strokeWidth, fill: t.fill, name: t.name, hide: t.hide, unit: t.unit, tooltipType: t.tooltipType, id: n }), p.createElement(HN, { type: "line", id: n, data: t.data, xAxisId: t.xAxisId, yAxisId: t.yAxisId, zAxisId: 0, dataKey: t.dataKey, hide: t.hide, isPanorama: r }), p.createElement(B2, ia({}, t, { id: n }))));
}
var $x = p.memo(W2, ku);
$x.displayName = "Line";
var U2 = ["domain", "range"], q2 = ["domain", "range"];
function bg(e3, t) {
  if (e3 == null) return {};
  var r, n, i = K2(e3, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function K2(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function wg(e3, t) {
  return e3 === t ? true : Array.isArray(e3) && e3.length === 2 && Array.isArray(t) && t.length === 2 ? e3[0] === t[0] && e3[1] === t[1] : false;
}
function Fx(e3, t) {
  if (e3 === t) return true;
  var { domain: r, range: n } = e3, i = bg(e3, U2), { domain: a, range: o } = t, u = bg(t, q2);
  return !wg(r, a) || !wg(n, o) ? false : ku(i, u);
}
var V2 = ["type"], H2 = ["dangerouslySetInnerHTML", "ticks", "scale"], Y2 = ["id", "scale"];
function $c() {
  return $c = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, $c.apply(null, arguments);
}
function xg(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Og(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xg(Object(r), true).forEach(function(n) {
      G2(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : xg(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function G2(e3, t, r) {
  return (t = X2(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function X2(e3) {
  var t = Z2(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Z2(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function Fc(e3, t) {
  if (e3 == null) return {};
  var r, n, i = Q2(e3, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function Q2(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function J2(e3) {
  var t = Le(), r = p.useRef(null), n = Ab(), { type: i } = e3, a = Fc(e3, V2), o = Du(n, "xAxis", i), u = p.useMemo(() => {
    if (o != null) return Og(Og({}, a), {}, { type: o });
  }, [a, o]);
  return p.useLayoutEffect(() => {
    u != null && (r.current === null ? t(uL(u)) : r.current !== u && t(sL({ prev: r.current, next: u })), r.current = u);
  }, [u, t]), p.useLayoutEffect(() => () => {
    r.current && (t(lL(r.current)), r.current = null);
  }, [t]), null;
}
var e$ = (e3) => {
  var { xAxisId: t, className: r } = e3, n = se(Ob), i = It(), a = "xAxis", o = se((y) => _w(y, a, t, i)), u = se((y) => Ak(y, t)), s = se((y) => kk(y, t)), l = se((y) => X0(y, t));
  if (u == null || s == null || l == null) return null;
  var { dangerouslySetInnerHTML: c, ticks: f, scale: d } = e3, h = Fc(e3, H2), { id: v, scale: g } = l, m = Fc(l, Y2);
  return p.createElement(Md, $c({}, h, m, { x: s.x, y: s.y, width: u.width, height: u.height, className: Ee("recharts-".concat(a, " ").concat(a), r), viewBox: n, ticks: o, axisType: a, axisId: t }));
}, t$ = { allowDataOverflow: Fe.allowDataOverflow, allowDecimals: Fe.allowDecimals, allowDuplicatedCategory: Fe.allowDuplicatedCategory, angle: Fe.angle, axisLine: bn.axisLine, height: Fe.height, hide: false, includeHidden: Fe.includeHidden, interval: Fe.interval, label: false, minTickGap: Fe.minTickGap, mirror: Fe.mirror, orientation: Fe.orientation, padding: Fe.padding, reversed: Fe.reversed, scale: Fe.scale, tick: Fe.tick, tickCount: Fe.tickCount, tickLine: bn.tickLine, tickSize: bn.tickSize, type: Fe.type, niceTicks: Fe.niceTicks, xAxisId: 0 }, r$ = (e3) => {
  var t = Tt(e3, t$);
  return p.createElement(p.Fragment, null, p.createElement(J2, { allowDataOverflow: t.allowDataOverflow, allowDecimals: t.allowDecimals, allowDuplicatedCategory: t.allowDuplicatedCategory, angle: t.angle, dataKey: t.dataKey, domain: t.domain, height: t.height, hide: t.hide, id: t.xAxisId, includeHidden: t.includeHidden, interval: t.interval, minTickGap: t.minTickGap, mirror: t.mirror, name: t.name, orientation: t.orientation, padding: t.padding, reversed: t.reversed, scale: t.scale, tick: t.tick, tickCount: t.tickCount, tickFormatter: t.tickFormatter, ticks: t.ticks, type: t.type, unit: t.unit, niceTicks: t.niceTicks }), p.createElement(e$, t));
}, Bx = p.memo(r$, Fx);
Bx.displayName = "XAxis";
var n$ = ["type"], i$ = ["dangerouslySetInnerHTML", "ticks", "scale"], a$ = ["id", "scale"];
function Bc() {
  return Bc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Bc.apply(null, arguments);
}
function Pg(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sg(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pg(Object(r), true).forEach(function(n) {
      o$(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Pg(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function o$(e3, t, r) {
  return (t = u$(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function u$(e3) {
  var t = s$(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function s$(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function zc(e3, t) {
  if (e3 == null) return {};
  var r, n, i = l$(e3, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function l$(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function c$(e3) {
  var t = Le(), r = p.useRef(null), n = Ab(), { type: i } = e3, a = zc(e3, n$), o = Du(n, "yAxis", i), u = p.useMemo(() => {
    if (o != null) return Sg(Sg({}, a), {}, { type: o });
  }, [o, a]);
  return p.useLayoutEffect(() => {
    u != null && (r.current === null ? t(cL(u)) : r.current !== u && t(fL({ prev: r.current, next: u })), r.current = u);
  }, [u, t]), p.useLayoutEffect(() => () => {
    r.current && (t(dL(r.current)), r.current = null);
  }, [t]), null;
}
function f$(e3) {
  var { yAxisId: t, className: r, width: n, label: i } = e3, a = p.useRef(null), o = p.useRef(null), u = se(Ob), s = It(), l = Le(), c = "yAxis", f = se((P) => Dk(P, t)), d = se((P) => Rk(P, t)), h = se((P) => _w(P, c, t, s)), v = se((P) => Z0(P, t));
  if (p.useLayoutEffect(() => {
    if (!(n !== "auto" || !f || Id(i) || p.isValidElement(i) || v == null)) {
      var P = a.current;
      if (P) {
        var S = P.getCalculatedWidth();
        Math.round(f.width) !== Math.round(S) && l(hL({ id: t, width: S }));
      }
    }
  }, [h, f, l, i, t, n, v]), f == null || d == null || v == null) return null;
  var { dangerouslySetInnerHTML: g, ticks: m, scale: y } = e3, x = zc(e3, i$), { id: b, scale: w } = v, O = zc(v, a$);
  return p.createElement(Md, Bc({}, x, O, { ref: a, labelRef: o, x: d.x, y: d.y, tickTextProps: n === "auto" ? { width: void 0 } : { width: n }, width: f.width, height: f.height, className: Ee("recharts-".concat(c, " ").concat(c), r), viewBox: u, ticks: h, axisType: c, axisId: t }));
}
var d$ = { allowDataOverflow: Be.allowDataOverflow, allowDecimals: Be.allowDecimals, allowDuplicatedCategory: Be.allowDuplicatedCategory, angle: Be.angle, axisLine: bn.axisLine, hide: false, includeHidden: Be.includeHidden, interval: Be.interval, label: false, minTickGap: Be.minTickGap, mirror: Be.mirror, orientation: Be.orientation, padding: Be.padding, reversed: Be.reversed, scale: Be.scale, tick: Be.tick, tickCount: Be.tickCount, tickLine: bn.tickLine, tickSize: bn.tickSize, type: Be.type, niceTicks: Be.niceTicks, width: Be.width, yAxisId: 0 }, h$ = (e3) => {
  var t = Tt(e3, d$);
  return p.createElement(p.Fragment, null, p.createElement(c$, { interval: t.interval, id: t.yAxisId, scale: t.scale, type: t.type, domain: t.domain, allowDataOverflow: t.allowDataOverflow, dataKey: t.dataKey, allowDuplicatedCategory: t.allowDuplicatedCategory, allowDecimals: t.allowDecimals, tickCount: t.tickCount, padding: t.padding, includeHidden: t.includeHidden, reversed: t.reversed, ticks: t.ticks, width: t.width, orientation: t.orientation, mirror: t.mirror, hide: t.hide, unit: t.unit, name: t.name, angle: t.angle, minTickGap: t.minTickGap, tick: t.tick, tickFormatter: t.tickFormatter, niceTicks: t.niceTicks }), p.createElement(f$, t));
}, zx = p.memo(h$, Fx);
zx.displayName = "YAxis";
var p$ = (e3, t) => t, jd = T([p$, je, f0, Qe, Gw, Dr, iR, at], fR);
function v$(e3) {
  return "getBBox" in e3.currentTarget && typeof e3.currentTarget.getBBox == "function";
}
function Rd(e3) {
  var t = e3.currentTarget.getBoundingClientRect(), r, n;
  if (v$(e3)) {
    var i = e3.currentTarget.getBBox();
    r = i.width > 0 ? t.width / i.width : 1, n = i.height > 0 ? t.height / i.height : 1;
  } else {
    var a = e3.currentTarget;
    r = a.offsetWidth > 0 ? t.width / a.offsetWidth : 1, n = a.offsetHeight > 0 ? t.height / a.offsetHeight : 1;
  }
  var o = (u, s) => ({ relativeX: Math.round((u - t.left) / r), relativeY: Math.round((s - t.top) / n) });
  return "touches" in e3 ? Array.from(e3.touches).map((u) => o(u.clientX, u.clientY)) : o(e3.clientX, e3.clientY);
}
var Wx = At("mouseClick"), Ux = sa();
Ux.startListening({ actionCreator: Wx, effect: (e3, t) => {
  var r = e3.payload, n = jd(t.getState(), Rd(r));
  (n == null ? void 0 : n.activeIndex) != null && t.dispatch(Xk({ activeIndex: n.activeIndex, activeDataKey: void 0, activeCoordinate: n.activeCoordinate }));
} });
var Wc = At("mouseMove"), qx = sa(), Ln = null, on = null, Dl = null;
qx.startListening({ actionCreator: Wc, effect: (e3, t) => {
  var r = e3.payload, n = t.getState(), { throttleDelay: i, throttledEvents: a } = n.eventSettings, o = a === "all" || (a == null ? void 0 : a.includes("mousemove"));
  Ln !== null && (cancelAnimationFrame(Ln), Ln = null), on !== null && (typeof i != "number" || !o) && (clearTimeout(on), on = null), Dl = Rd(r);
  var u = () => {
    var s = t.getState(), l = xa(s, s.tooltip.settings.shared);
    if (!Dl) {
      Ln = null, on = null;
      return;
    }
    if (l === "axis") {
      var c = jd(s, Dl);
      (c == null ? void 0 : c.activeIndex) != null ? t.dispatch(Fw({ activeIndex: c.activeIndex, activeDataKey: void 0, activeCoordinate: c.activeCoordinate })) : t.dispatch($w());
    }
    Ln = null, on = null;
  };
  if (!o) {
    u();
    return;
  }
  i === "raf" ? Ln = requestAnimationFrame(u) : typeof i == "number" && on === null && (on = setTimeout(u, i));
} });
function m$(e3, t) {
  return t instanceof HTMLElement ? "HTMLElement <".concat(t.tagName, ' class="').concat(t.className, '">') : t === window ? "global.window" : e3 === "children" && typeof t == "object" && t !== null ? "<<CHILDREN>>" : t;
}
var Eg = { accessibilityLayer: true, barCategoryGap: "10%", barGap: 4, barSize: void 0, className: void 0, maxBarSize: void 0, stackOffset: "none", syncId: void 0, syncMethod: "index", baseValue: void 0, reverseStackOrder: false }, Kx = ft({ name: "rootProps", initialState: Eg, reducers: { updateOptions: (e3, t) => {
  var r;
  e3.accessibilityLayer = t.payload.accessibilityLayer, e3.barCategoryGap = t.payload.barCategoryGap, e3.barGap = (r = t.payload.barGap) !== null && r !== void 0 ? r : Eg.barGap, e3.barSize = t.payload.barSize, e3.maxBarSize = t.payload.maxBarSize, e3.stackOffset = t.payload.stackOffset, e3.syncId = t.payload.syncId, e3.syncMethod = t.payload.syncMethod, e3.className = t.payload.className, e3.baseValue = t.payload.baseValue, e3.reverseStackOrder = t.payload.reverseStackOrder;
} } }), g$ = Kx.reducer, { updateOptions: y$ } = Kx.actions, b$ = null, w$ = { updatePolarOptions: (e3, t) => e3 === null ? t.payload : (e3.startAngle = t.payload.startAngle, e3.endAngle = t.payload.endAngle, e3.cx = t.payload.cx, e3.cy = t.payload.cy, e3.innerRadius = t.payload.innerRadius, e3.outerRadius = t.payload.outerRadius, e3) }, Vx = ft({ name: "polarOptions", initialState: b$, reducers: w$ }), { updatePolarOptions: HW } = Vx.actions, x$ = Vx.reducer, Hx = At("keyDown"), Yx = At("focus"), Gx = At("blur"), Gu = sa(), $n = null, un = null, Ba = null;
Gu.startListening({ actionCreator: Hx, effect: (e3, t) => {
  Ba = e3.payload, $n !== null && (cancelAnimationFrame($n), $n = null);
  var r = t.getState(), { throttleDelay: n, throttledEvents: i } = r.eventSettings, a = i === "all" || i.includes("keydown");
  un !== null && (typeof n != "number" || !a) && (clearTimeout(un), un = null);
  var o = () => {
    try {
      var u = t.getState(), s = u.rootProps.accessibilityLayer !== false;
      if (!s) return;
      var { keyboardInteraction: l } = u.tooltip, c = Ba;
      if (c !== "ArrowRight" && c !== "ArrowLeft" && c !== "Enter") return;
      var f = Ri(l, An(u), Jn(u), ei(u)), d = f == null ? -1 : Number(f), h = !Number.isFinite(d) || d < 0, v = Dr(u), g = An(u), m = xa(u, u.tooltip.settings.shared);
      if (c === "Enter") {
        if (h) return;
        var y = Ho(u, m, "hover", String(l.index));
        t.dispatch(Vo({ active: !l.active, activeIndex: l.index, activeCoordinate: y }));
        return;
      }
      var x = Bk(u), b = x === "left-to-right" ? 1 : -1, w = c === "ArrowRight" ? 1 : -1, O;
      if (h) {
        var P = Jn(u), S = ei(u), E = w * b, N = (L) => ({ active: false, index: String(L), dataKey: void 0, graphicalItemId: void 0, coordinate: void 0 });
        if (O = -1, E > 0) {
          for (var k = 0; k < g.length; k++) if (Ri(N(k), g, P, S) != null) {
            O = k;
            break;
          }
        } else for (var R = g.length - 1; R >= 0; R--) if (Ri(N(R), g, P, S) != null) {
          O = R;
          break;
        }
        if (O < 0) return;
      } else {
        O = d + w * b;
        var C = (v == null ? void 0 : v.length) || g.length;
        if (C === 0 || O >= C || O < 0) return;
      }
      var F = Ho(u, m, "hover", String(O));
      t.dispatch(Vo({ active: true, activeIndex: O.toString(), activeCoordinate: F }));
    } finally {
      $n = null, un = null;
    }
  };
  if (!a) {
    o();
    return;
  }
  n === "raf" ? $n = requestAnimationFrame(o) : typeof n == "number" && un === null && (o(), Ba = null, un = setTimeout(() => {
    Ba ? o() : (un = null, $n = null);
  }, n));
} });
Gu.startListening({ actionCreator: Yx, effect: (e3, t) => {
  var r = t.getState(), n = r.rootProps.accessibilityLayer !== false;
  if (n) {
    var { keyboardInteraction: i } = r.tooltip;
    if (!i.active && i.index == null) {
      var a = "0", o = xa(r, r.tooltip.settings.shared), u = Ho(r, o, "hover", String(a));
      t.dispatch(Vo({ active: true, activeIndex: a, activeCoordinate: u }));
    }
  }
} });
Gu.startListening({ actionCreator: Gx, effect: (e3, t) => {
  var r = t.getState(), n = r.rootProps.accessibilityLayer !== false;
  if (n) {
    var { keyboardInteraction: i } = r.tooltip;
    i.active && t.dispatch(Vo({ active: false, activeIndex: i.index, activeCoordinate: i.coordinate }));
  }
} });
function Xx(e3) {
  e3.persist();
  var { currentTarget: t } = e3;
  return new Proxy(e3, { get: (r, n) => {
    if (n === "currentTarget") return t;
    var i = Reflect.get(r, n);
    return typeof i == "function" ? i.bind(r) : i;
  } });
}
var jt = At("externalEvent"), Zx = sa(), za = /* @__PURE__ */ new Map(), Ai = /* @__PURE__ */ new Map(), Nl = /* @__PURE__ */ new Map();
Zx.startListening({ actionCreator: jt, effect: (e3, t) => {
  var { handler: r, reactEvent: n } = e3.payload;
  if (r != null) {
    var i = n.type, a = Xx(n);
    Nl.set(i, { handler: r, reactEvent: a });
    var o = za.get(i);
    o !== void 0 && (cancelAnimationFrame(o), za.delete(i));
    var u = t.getState(), { throttleDelay: s, throttledEvents: l } = u.eventSettings, c = l, f = c === "all" || (c == null ? void 0 : c.includes(i)), d = Ai.get(i);
    d !== void 0 && (typeof s != "number" || !f) && (clearTimeout(d), Ai.delete(i));
    var h = () => {
      var m = Nl.get(i);
      try {
        if (!m) return;
        var { handler: y, reactEvent: x } = m, b = t.getState(), w = { activeCoordinate: Wj(b), activeDataKey: Fj(b), activeIndex: ta(b), activeLabel: Qw(b), activeTooltipIndex: ta(b), isTooltipActive: Uj(b) };
        y && y(w, x);
      } finally {
        za.delete(i), Ai.delete(i), Nl.delete(i);
      }
    };
    if (!f) {
      h();
      return;
    }
    if (s === "raf") {
      var v = requestAnimationFrame(h);
      za.set(i, v);
    } else if (typeof s == "number") {
      if (!Ai.has(i)) {
        h();
        var g = setTimeout(h, s);
        Ai.set(i, g);
      }
    } else h();
  }
} });
var O$ = T([pi], (e3) => e3.tooltipItemPayloads), P$ = T([O$, (e3, t) => t, (e3, t, r) => r], (e3, t, r) => {
  if (t != null) {
    var n = e3.find((a) => a.settings.graphicalItemId === r);
    if (n != null) {
      var { getPosition: i } = n;
      if (i != null) return i(t);
    }
  }
}), Qx = At("touchMove"), Jx = sa(), sn = null, Br = null, Ag = null, Ci = null;
Jx.startListening({ actionCreator: Qx, effect: (e3, t) => {
  var r = e3.payload;
  if (!(r.touches == null || r.touches.length === 0)) {
    Ci = Xx(r);
    var n = t.getState(), { throttleDelay: i, throttledEvents: a } = n.eventSettings, o = a === "all" || a.includes("touchmove");
    sn !== null && (cancelAnimationFrame(sn), sn = null), Br !== null && (typeof i != "number" || !o) && (clearTimeout(Br), Br = null), Ag = Array.from(r.touches).map((s) => Rd({ clientX: s.clientX, clientY: s.clientY, currentTarget: r.currentTarget }));
    var u = () => {
      if (Ci != null) {
        var s = t.getState(), l = xa(s, s.tooltip.settings.shared);
        if (l === "axis") {
          var c, f = (c = Ag) === null || c === void 0 ? void 0 : c[0];
          if (f == null) {
            sn = null, Br = null;
            return;
          }
          var d = jd(s, f);
          (d == null ? void 0 : d.activeIndex) != null && t.dispatch(Fw({ activeIndex: d.activeIndex, activeDataKey: void 0, activeCoordinate: d.activeCoordinate }));
        } else if (l === "item") {
          var h, v = Ci.touches[0];
          if (document.elementFromPoint == null || v == null) return;
          var g = document.elementFromPoint(v.clientX, v.clientY);
          if (!g || !g.getAttribute) return;
          var m = g.getAttribute(JE), y = (h = g.getAttribute(eA)) !== null && h !== void 0 ? h : void 0, x = Mn(s).find((O) => O.id === y);
          if (m == null || x == null || y == null) return;
          var { dataKey: b } = x, w = P$(s, m, y);
          t.dispatch(Gk({ activeDataKey: b, activeIndex: m, activeCoordinate: w, activeGraphicalItemId: y }));
        }
        sn = null, Br = null;
      }
    };
    if (!o) {
      u();
      return;
    }
    i === "raf" ? sn = requestAnimationFrame(u) : typeof i == "number" && Br === null && (u(), Ci = null, Br = setTimeout(() => {
      Ci ? u() : (Br = null, sn = null);
    }, i));
  }
} });
var eO = { throttleDelay: "raf", throttledEvents: ["mousemove", "touchmove", "pointermove", "scroll", "wheel"] }, tO = ft({ name: "eventSettings", initialState: eO, reducers: { setEventSettings: (e3, t) => {
  t.payload.throttleDelay != null && (e3.throttleDelay = t.payload.throttleDelay), t.payload.throttledEvents != null && (e3.throttledEvents = t.payload.throttledEvents);
} } }), { setEventSettings: S$ } = tO.actions, E$ = tO.reducer, A$ = Ky({ brush: SL, cartesianAxis: pL, chartData: WR, errorBars: s2, eventSettings: E$, graphicalItems: KN, layout: $E, legend: GA, options: LR, polarAxis: hN, polarOptions: x$, referenceElements: TL, renderedTicks: VL, rootProps: g$, tooltip: Zk, zIndex: SR }), C$ = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Chart";
  return lE({ reducer: A$, preloadedState: t, middleware: (n) => {
    var i;
    return n({ serializableCheck: false, immutableCheck: !["commonjs", "es6", "production"].includes((i = "es6") !== null && i !== void 0 ? i : "") }).concat([Ux.middleware, qx.middleware, Gu.middleware, Zx.middleware, Jx.middleware]);
  }, enhancers: (n) => {
    var i = n;
    return typeof n == "function" && (i = n()), i.concat(ob({ type: "raf" }));
  }, devTools: { serialize: { replacer: m$ }, name: "recharts-".concat(r) } });
};
function T$(e3) {
  var { preloadedState: t, children: r, reduxStoreName: n } = e3, i = It(), a = p.useRef(null);
  if (i) return r;
  a.current == null && (a.current = C$(t, n));
  var o = gf;
  return p.createElement(hC, { context: o, store: a.current }, r);
}
function I$(e3) {
  var { layout: t, margin: r } = e3, n = Le(), i = It();
  return p.useEffect(() => {
    i || (n(DE(t)), n(RE(r)));
  }, [n, i, t, r]), null;
}
var _$ = p.memo(I$, ku);
function M$(e3) {
  var t = Le();
  return p.useEffect(() => {
    t(y$(e3));
  }, [t, e3]), null;
}
var k$ = (e3) => {
  var t = Le();
  return p.useEffect(() => {
    t(S$(e3));
  }, [t, e3]), null;
}, j$ = p.memo(k$, ku);
function Cg(e3) {
  var { zIndex: t, isPanorama: r } = e3, n = p.useRef(null), i = Le();
  return p.useLayoutEffect(() => (n.current && i(OR({ zIndex: t, element: n.current, isPanorama: r })), () => {
    i(PR({ zIndex: t, isPanorama: r }));
  }), [i, t, r]), p.createElement("g", { tabIndex: -1, ref: n, className: "recharts-zIndex-layer_".concat(t) });
}
function Tg(e3) {
  var { children: t, isPanorama: r } = e3, n = se(hR);
  if (!n || n.length === 0) return t;
  var i = n.filter((o) => o < 0), a = n.filter((o) => o > 0);
  return p.createElement(p.Fragment, null, i.map((o) => p.createElement(Cg, { key: o, zIndex: o, isPanorama: r })), t, a.map((o) => p.createElement(Cg, { key: o, zIndex: o, isPanorama: r })));
}
var R$ = ["children"];
function D$(e3, t) {
  if (e3 == null) return {};
  var r, n, i = N$(e3, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function N$(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
function Qo() {
  return Qo = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Qo.apply(null, arguments);
}
var L$ = { width: "100%", height: "100%", display: "block" }, $$ = p.forwardRef((e3, t) => {
  var r = MA(), n = kA(), i = Nb();
  if (!Qr(r) || !Qr(n)) return null;
  var { children: a, otherAttributes: o, title: u, desc: s } = e3, l, c;
  return o != null && (typeof o.tabIndex == "number" ? l = o.tabIndex : l = i ? 0 : void 0, typeof o.role == "string" ? c = o.role : c = i ? "application" : void 0), p.createElement(oy, Qo({}, o, { title: u, desc: s, role: c, tabIndex: l, width: r, height: n, style: L$, ref: t }), a);
}), F$ = (e3) => {
  var { children: t } = e3, r = se(Cu);
  if (!r) return null;
  var { width: n, height: i, y: a, x: o } = r;
  return p.createElement(oy, { width: n, height: i, x: o, y: a }, t);
}, Ig = p.forwardRef((e3, t) => {
  var { children: r } = e3, n = D$(e3, R$), i = It();
  return i ? p.createElement(F$, null, p.createElement(Tg, { isPanorama: true }, r)) : p.createElement($$, Qo({ ref: t }, n), p.createElement(Tg, { isPanorama: false }, r));
});
function B$() {
  var e3 = Le(), [t, r] = p.useState(null), n = se(QE);
  return p.useEffect(() => {
    if (t != null) {
      var i = t.getBoundingClientRect(), a = i.width / t.offsetWidth;
      Oe(a) && a !== n && e3(LE(a));
    }
  }, [t, e3, n]), r;
}
function _g(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function z$(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _g(Object(r), true).forEach(function(n) {
      W$(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : _g(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function W$(e3, t, r) {
  return (t = U$(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function U$(e3) {
  var t = q$(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function q$(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
function Yr() {
  return Yr = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Yr.apply(null, arguments);
}
var K$ = () => (ZR(), null);
function Jo(e3) {
  if (typeof e3 == "number") return e3;
  if (typeof e3 == "string") {
    var t = parseFloat(e3);
    if (!Number.isNaN(t)) return t;
  }
  return 0;
}
var V$ = p.forwardRef((e3, t) => {
  var r, n, i = p.useRef(null), [a, o] = p.useState({ containerWidth: Jo((r = e3.style) === null || r === void 0 ? void 0 : r.width), containerHeight: Jo((n = e3.style) === null || n === void 0 ? void 0 : n.height) }), u = p.useCallback((l, c) => {
    o((f) => {
      var d = Math.round(l), h = Math.round(c);
      return f.containerWidth === d && f.containerHeight === h ? f : { containerWidth: d, containerHeight: h };
    });
  }, []), s = p.useCallback((l) => {
    if (typeof t == "function" && t(l), i.current != null && (i.current.disconnect(), i.current = null), l != null && typeof ResizeObserver < "u") {
      var { width: c, height: f } = l.getBoundingClientRect();
      u(c, f);
      var d = (v) => {
        var g = v[0];
        if (g != null) {
          var { width: m, height: y } = g.contentRect;
          u(m, y);
        }
      }, h = new ResizeObserver(d);
      h.observe(l), i.current = h;
    }
  }, [t, u]);
  return p.useEffect(() => () => {
    var l = i.current;
    l == null ? void 0 : l.disconnect();
  }, [u]), p.createElement(p.Fragment, null, p.createElement(ca, { width: a.containerWidth, height: a.containerHeight }), p.createElement("div", Yr({ ref: s }, e3)));
}), H$ = p.forwardRef((e3, t) => {
  var { width: r, height: n } = e3, [i, a] = p.useState({ containerWidth: Jo(r), containerHeight: Jo(n) }), o = p.useCallback((s, l) => {
    a((c) => {
      var f = Math.round(s), d = Math.round(l);
      return c.containerWidth === f && c.containerHeight === d ? c : { containerWidth: f, containerHeight: d };
    });
  }, []), u = p.useCallback((s) => {
    if (typeof t == "function" && t(s), s != null) {
      var { width: l, height: c } = s.getBoundingClientRect();
      o(l, c);
    }
  }, [t, o]);
  return p.createElement(p.Fragment, null, p.createElement(ca, { width: i.containerWidth, height: i.containerHeight }), p.createElement("div", Yr({ ref: u }, e3)));
}), Y$ = p.forwardRef((e3, t) => {
  var { width: r, height: n } = e3;
  return p.createElement(p.Fragment, null, p.createElement(ca, { width: r, height: n }), p.createElement("div", Yr({ ref: t }, e3)));
}), G$ = p.forwardRef((e3, t) => {
  var { width: r, height: n } = e3;
  return typeof r == "string" || typeof n == "string" ? p.createElement(H$, Yr({}, e3, { ref: t })) : typeof r == "number" && typeof n == "number" ? p.createElement(Y$, Yr({}, e3, { width: r, height: n, ref: t })) : p.createElement(p.Fragment, null, p.createElement(ca, { width: r, height: n }), p.createElement("div", Yr({ ref: t }, e3)));
});
function X$(e3) {
  return e3 ? V$ : G$;
}
var Z$ = p.forwardRef((e3, t) => {
  var { children: r, className: n, height: i, onClick: a, onContextMenu: o, onDoubleClick: u, onMouseDown: s, onMouseEnter: l, onMouseLeave: c, onMouseMove: f, onMouseUp: d, onTouchEnd: h, onTouchMove: v, onTouchStart: g, style: m, width: y, responsive: x, dispatchTouchEvents: b = true } = e3, w = p.useRef(null), O = Le(), [P, S] = p.useState(null), [E, N] = p.useState(null), k = B$(), R = Sf(), C = (R == null ? void 0 : R.width) > 0 ? R.width : y, F = (R == null ? void 0 : R.height) > 0 ? R.height : i, L = p.useCallback((I) => {
    k(I), typeof t == "function" && t(I), S(I), N(I), I != null && (w.current = I);
  }, [k, t, S, N]), M = p.useCallback((I) => {
    O(Wx(I)), O(jt({ handler: a, reactEvent: I }));
  }, [O, a]), $ = p.useCallback((I) => {
    O(Wc(I)), O(jt({ handler: l, reactEvent: I }));
  }, [O, l]), B = p.useCallback((I) => {
    O($w()), O(jt({ handler: c, reactEvent: I }));
  }, [O, c]), D = p.useCallback((I) => {
    O(Wc(I)), O(jt({ handler: f, reactEvent: I }));
  }, [O, f]), K = p.useCallback(() => {
    O(Yx());
  }, [O]), W = p.useCallback(() => {
    O(Gx());
  }, [O]), fe = p.useCallback((I) => {
    O(Hx(I.key));
  }, [O]), te = p.useCallback((I) => {
    O(jt({ handler: o, reactEvent: I }));
  }, [O, o]), ae = p.useCallback((I) => {
    O(jt({ handler: u, reactEvent: I }));
  }, [O, u]), re = p.useCallback((I) => {
    O(jt({ handler: s, reactEvent: I }));
  }, [O, s]), X = p.useCallback((I) => {
    O(jt({ handler: d, reactEvent: I }));
  }, [O, d]), oe = p.useCallback((I) => {
    O(jt({ handler: g, reactEvent: I }));
  }, [O, g]), ne = p.useCallback((I) => {
    b && O(Qx(I)), O(jt({ handler: v, reactEvent: I }));
  }, [O, b, v]), A = p.useCallback((I) => {
    O(jt({ handler: h, reactEvent: I }));
  }, [O, h]), j = X$(x);
  return p.createElement(ax.Provider, { value: P }, p.createElement(zP.Provider, { value: E }, p.createElement(j, { width: C ?? (m == null ? void 0 : m.width), height: F ?? (m == null ? void 0 : m.height), className: Ee("recharts-wrapper", n), style: z$({ position: "relative", cursor: "default", width: C, height: F }, m), onClick: M, onContextMenu: te, onDoubleClick: ae, onFocus: K, onBlur: W, onKeyDown: fe, onMouseDown: re, onMouseEnter: $, onMouseLeave: B, onMouseMove: D, onMouseUp: X, onTouchEnd: A, onTouchMove: ne, onTouchStart: oe, ref: L }, p.createElement(K$, null), r)));
}), Q$ = ["width", "height", "responsive", "children", "className", "style", "compact", "title", "desc"];
function J$(e3, t) {
  if (e3 == null) return {};
  var r, n, i = eF(e3, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e3);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e3, r) && (i[r] = e3[r]);
  }
  return i;
}
function eF(e3, t) {
  if (e3 == null) return {};
  var r = {};
  for (var n in e3) if ({}.hasOwnProperty.call(e3, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e3[n];
  }
  return r;
}
var tF = p.forwardRef((e3, t) => {
  var { width: r, height: n, responsive: i, children: a, className: o, style: u, compact: s, title: l, desc: c } = e3, f = J$(e3, Q$), d = xr(f);
  return s ? p.createElement(p.Fragment, null, p.createElement(ca, { width: r, height: n }), p.createElement(Ig, { otherAttributes: d, title: l, desc: c }, a)) : p.createElement(Z$, { className: o, style: u, width: r, height: n, responsive: i ?? false, onClick: e3.onClick, onMouseLeave: e3.onMouseLeave, onMouseEnter: e3.onMouseEnter, onMouseMove: e3.onMouseMove, onMouseDown: e3.onMouseDown, onMouseUp: e3.onMouseUp, onContextMenu: e3.onContextMenu, onDoubleClick: e3.onDoubleClick, onTouchStart: e3.onTouchStart, onTouchMove: e3.onTouchMove, onTouchEnd: e3.onTouchEnd }, p.createElement(Ig, { otherAttributes: d, title: l, desc: c, ref: t }, p.createElement(_L, null, a)));
});
function Uc() {
  return Uc = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e3[n] = r[n]);
    }
    return e3;
  }, Uc.apply(null, arguments);
}
function Mg(e3, t) {
  var r = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e3);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e3, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rF(e3) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mg(Object(r), true).forEach(function(n) {
      nF(e3, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r)) : Mg(Object(r)).forEach(function(n) {
      Object.defineProperty(e3, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e3;
}
function nF(e3, t, r) {
  return (t = iF(t)) in e3 ? Object.defineProperty(e3, t, { value: r, enumerable: true, configurable: true, writable: true }) : e3[t] = r, e3;
}
function iF(e3) {
  var t = aF(e3, "string");
  return typeof t == "symbol" ? t : t + "";
}
function aF(e3, t) {
  if (typeof e3 != "object" || !e3) return e3;
  var r = e3[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e3, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e3);
}
var oF = { top: 5, right: 5, bottom: 5, left: 5 }, uF = rF({ accessibilityLayer: true, barCategoryGap: "10%", barGap: 4, layout: "horizontal", margin: oF, responsive: false, reverseStackOrder: false, stackOffset: "none", syncMethod: "index" }, eO), sF = p.forwardRef(function(t, r) {
  var n, i = Tt(t.categoricalChartProps, uF), { chartName: a, defaultTooltipEventType: o, validateTooltipEventTypes: u, tooltipPayloadSearcher: s, categoricalChartProps: l } = t, c = { chartName: a, defaultTooltipEventType: o, validateTooltipEventTypes: u, tooltipPayloadSearcher: s, eventEmitter: void 0 };
  return p.createElement(T$, { preloadedState: { options: c }, reduxStoreName: (n = l.id) !== null && n !== void 0 ? n : a }, p.createElement(PL, { chartData: l.data }), p.createElement(_$, { layout: i.layout, margin: i.margin }), p.createElement(j$, { throttleDelay: i.throttleDelay, throttledEvents: i.throttledEvents }), p.createElement(M$, { baseValue: i.baseValue, accessibilityLayer: i.accessibilityLayer, barCategoryGap: i.barCategoryGap, maxBarSize: i.maxBarSize, stackOffset: i.stackOffset, barGap: i.barGap, barSize: i.barSize, syncId: i.syncId, syncMethod: i.syncMethod, className: i.className, reverseStackOrder: i.reverseStackOrder }), p.createElement(tF, Uc({}, i, { ref: r })));
}), lF = ["axis"], cF = p.forwardRef((e3, t) => p.createElement(sF, { chartName: "LineChart", defaultTooltipEventType: "axis", validateTooltipEventTypes: lF, tooltipPayloadSearcher: DR, categoricalChartProps: e3, ref: t }));
const Xu = { clip: "rect(0 0 0 0)", overflow: "hidden", whiteSpace: "nowrap", position: "fixed", top: 0, left: 0, border: 0, padding: 0, width: 1, height: 1, margin: -1 }, kg = {};
function Tr(e3, t) {
  const r = p.useRef(kg);
  return r.current === kg && (r.current = e3(t)), r;
}
function ti(e3, t, r, n) {
  const i = Tr(rO).current;
  return dF(i, e3, t, r, n) && nO(i, [e3, t, r, n]), i.callback;
}
function fF(e3) {
  const t = Tr(rO).current;
  return hF(t, e3) && nO(t, e3), t.callback;
}
function rO() {
  return { callback: null, cleanup: null, refs: [] };
}
function dF(e3, t, r, n, i) {
  return e3.refs[0] !== t || e3.refs[1] !== r || e3.refs[2] !== n || e3.refs[3] !== i;
}
function hF(e3, t) {
  return e3.refs.length !== t.length || e3.refs.some((r, n) => r !== t[n]);
}
function nO(e3, t) {
  if (e3.refs = t, t.every((r) => r == null)) {
    e3.callback = null;
    return;
  }
  e3.callback = (r) => {
    if (e3.cleanup && (e3.cleanup(), e3.cleanup = null), r != null) {
      const n = Array(t.length).fill(null);
      for (let i = 0; i < t.length; i += 1) {
        const a = t[i];
        if (a != null) switch (typeof a) {
          case "function": {
            const o = a(r);
            typeof o == "function" && (n[i] = o);
            break;
          }
          case "object": {
            a.current = r;
            break;
          }
        }
      }
      e3.cleanup = () => {
        for (let i = 0; i < t.length; i += 1) {
          const a = t[i];
          if (a != null) switch (typeof a) {
            case "function": {
              const o = n[i];
              typeof o == "function" ? o() : a(null);
              break;
            }
            case "object": {
              a.current = null;
              break;
            }
          }
        }
      };
    }
  };
}
function pF(e3) {
  const t = p.useRef(true);
  t.current && (t.current = false, e3());
}
function jg({ controlled: e3, default: t, name: r, state: n = "value" }) {
  const { current: i } = p.useRef(e3 !== void 0), [a, o] = p.useState(t), u = i ? e3 : a, s = p.useCallback((l) => {
    i || o(l);
  }, []);
  return [u, s];
}
const vF = () => {
}, le = typeof document < "u" ? p.useLayoutEffect : vF, Ll = of[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0, -3)], mF = Ll && Ll !== p.useLayoutEffect ? Ll : (e3) => e3();
function ce(e3) {
  const t = Tr(gF).current;
  return t.next = e3, mF(t.effect), t.trampoline;
}
function gF() {
  const e3 = { next: void 0, callback: yF, trampoline: (...t) => {
    var _a2;
    return (_a2 = e3.callback) == null ? void 0 : _a2.call(e3, ...t);
  }, effect: () => {
    e3.callback = e3.next;
  } };
  return e3;
}
function yF() {
}
function ct(e3) {
  const t = Tr(bF, e3).current;
  return t.next = e3, le(t.effect), t;
}
function bF(e3) {
  const t = { current: e3, next: e3, effect: () => {
    t.current = t.next;
  } };
  return t;
}
function nn(e3, ...t) {
  const r = new URL(`https://base-ui.com/production-error/${e3}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Base UI error #${e3}; visit ${r} for the full message.`;
}
By({ memoize: SS, memoizeOptions: { maxSize: 1, equalityCheck: Object.is } });
const Pe = (e3, t, r, n, i, a, ...o) => {
  if (o.length > 0) throw new Error(nn(1));
  let u;
  if (e3) u = e3;
  else throw new Error("Missing arguments");
  return u;
};
function he(e3, t, r, n, i) {
  const a = (o) => t(o, r, n, i);
  return $y.useSyncExternalStoreWithSelector(e3.subscribe, e3.getSnapshot, e3.getSnapshot, a);
}
class Ni {
  constructor(t) {
    __publicField(this, "subscribe", (t) => (this.listeners.add(t), () => {
      this.listeners.delete(t);
    }));
    __publicField(this, "getSnapshot", () => this.state);
    this.state = t, this.listeners = /* @__PURE__ */ new Set(), this.updateTick = 0;
  }
  setState(t) {
    if (this.state === t) return;
    this.state = t, this.updateTick += 1;
    const r = this.updateTick;
    for (const n of this.listeners) {
      if (r !== this.updateTick) return;
      n(t);
    }
  }
  update(t) {
    for (const r in t) if (!Object.is(this.state[r], t[r])) {
      Ni.prototype.setState.call(this, { ...this.state, ...t });
      return;
    }
  }
  set(t, r) {
    Object.is(this.state[t], r) || Ni.prototype.setState.call(this, { ...this.state, [t]: r });
  }
  notifyAll() {
    const t = { ...this.state };
    Ni.prototype.setState.call(this, t);
  }
}
function Rt() {
}
const qc = Object.freeze([]), qt = Object.freeze({}), wF = [];
function iO(e3) {
  p.useEffect(e3, wF);
}
const Wa = null;
class xF {
  constructor() {
    __publicField(this, "callbacks", []);
    __publicField(this, "callbacksCount", 0);
    __publicField(this, "nextId", 1);
    __publicField(this, "startId", 1);
    __publicField(this, "isScheduled", false);
    __publicField(this, "tick", (t) => {
      var _a2;
      this.isScheduled = false;
      const r = this.callbacks, n = this.callbacksCount;
      if (this.callbacks = [], this.callbacksCount = 0, this.startId = this.nextId, n > 0) for (let i = 0; i < r.length; i += 1) (_a2 = r[i]) == null ? void 0 : _a2.call(r, t);
    });
  }
  request(t) {
    const r = this.nextId;
    return this.nextId += 1, this.callbacks.push(t), this.callbacksCount += 1, (!this.isScheduled || false) && (requestAnimationFrame(this.tick), this.isScheduled = true), r;
  }
  cancel(t) {
    const r = t - this.startId;
    r < 0 || r >= this.callbacks.length || (this.callbacks[r] = null, this.callbacksCount -= 1);
  }
}
const Ua = new xF();
class tr {
  constructor() {
    __publicField(this, "currentId", Wa);
    __publicField(this, "cancel", () => {
      this.currentId !== Wa && (Ua.cancel(this.currentId), this.currentId = Wa);
    });
    __publicField(this, "disposeEffect", () => this.cancel);
  }
  static create() {
    return new tr();
  }
  static request(t) {
    return Ua.request(t);
  }
  static cancel(t) {
    return Ua.cancel(t);
  }
  request(t) {
    this.cancel(), this.currentId = Ua.request(() => {
      this.currentId = Wa, t();
    });
  }
}
function Zu() {
  const e3 = Tr(tr.create).current;
  return iO(e3.disposeEffect), e3;
}
const Ti = 0;
class ri {
  constructor() {
    __publicField(this, "currentId", Ti);
    __publicField(this, "clear", () => {
      this.currentId !== Ti && (clearTimeout(this.currentId), this.currentId = Ti);
    });
    __publicField(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new ri();
  }
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = Ti, r();
    }, t);
  }
  isStarted() {
    return this.currentId !== Ti;
  }
}
function St() {
  const e3 = Tr(ri.create).current;
  return iO(e3.disposeEffect), e3;
}
const vi = typeof navigator < "u", $l = EF(), aO = CF(), oO = AF(), uO = typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter:none"), OF = $l.platform === "MacIntel" && $l.maxTouchPoints > 1 ? true : /iP(hone|ad|od)|iOS/.test($l.platform), PF = vi && /apple/i.test(navigator.vendor), Kc = vi && /android/i.test(aO) || /android/i.test(oO);
vi && aO.toLowerCase().startsWith("mac") && navigator.maxTouchPoints;
const SF = oO.includes("jsdom/");
function EF() {
  if (!vi) return { platform: "", maxTouchPoints: -1 };
  const e3 = navigator.userAgentData;
  return (e3 == null ? void 0 : e3.platform) ? { platform: e3.platform, maxTouchPoints: navigator.maxTouchPoints } : { platform: navigator.platform ?? "", maxTouchPoints: navigator.maxTouchPoints ?? -1 };
}
function AF() {
  if (!vi) return "";
  const e3 = navigator.userAgentData;
  return e3 && Array.isArray(e3.brands) ? e3.brands.map(({ brand: t, version: r }) => `${t}/${r}`).join(" ") : navigator.userAgent;
}
function CF() {
  if (!vi) return "";
  const e3 = navigator.userAgentData;
  return (e3 == null ? void 0 : e3.platform) ? e3.platform : navigator.platform ?? "";
}
const Vc = "data-base-ui-focusable", sO = "active", lO = "selected", TF = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])", Gr = "ArrowLeft", Xr = "ArrowRight", Dd = "ArrowUp", Pa = "ArrowDown";
function qr(e3) {
  var _a2;
  let t = e3.activeElement;
  for (; ((_a2 = t == null ? void 0 : t.shadowRoot) == null ? void 0 : _a2.activeElement) != null; ) t = t.shadowRoot.activeElement;
  return t;
}
function ze(e3, t) {
  var _a2;
  if (!e3 || !t) return false;
  const r = (_a2 = t.getRootNode) == null ? void 0 : _a2.call(t);
  if (e3.contains(t)) return true;
  if (r && iP(r)) {
    let n = t;
    for (; n; ) {
      if (e3 === n) return true;
      n = n.parentNode || n.host;
    }
  }
  return false;
}
function vr(e3) {
  return "composedPath" in e3 ? e3.composedPath()[0] : e3.target;
}
function Ft(e3, t) {
  if (t == null) return false;
  if ("composedPath" in e3) return e3.composedPath().includes(t);
  const r = e3;
  return r.target != null && t.contains(r.target);
}
function IF(e3) {
  return e3.matches("html,body");
}
function ht(e3) {
  return (e3 == null ? void 0 : e3.ownerDocument) || document;
}
function cO(e3) {
  return rr(e3) && e3.matches(TF);
}
function Hc(e3) {
  return e3 ? e3.getAttribute("role") === "combobox" && cO(e3) : false;
}
function eu(e3) {
  return e3 ? e3.hasAttribute(Vc) ? e3 : e3.querySelector(`[${Vc}]`) || e3 : null;
}
function Kn(e3, t, r = true) {
  return e3.filter((i) => {
    var _a2;
    return i.parentId === t && (!r || ((_a2 = i.context) == null ? void 0 : _a2.open));
  }).flatMap((i) => [i, ...Kn(e3, i.id, r)]);
}
function Rg(e3, t) {
  var _a2;
  let r = [], n = (_a2 = e3.find((i) => i.id === t)) == null ? void 0 : _a2.parentId;
  for (; n; ) {
    const i = e3.find((a) => a.id === n);
    n = i == null ? void 0 : i.parentId, i && (r = r.concat(i));
  }
  return r;
}
function lt(e3) {
  e3.preventDefault(), e3.stopPropagation();
}
function _F(e3) {
  return "nativeEvent" in e3;
}
function fO(e3) {
  return e3.mozInputSource === 0 && e3.isTrusted ? true : Kc && e3.pointerType ? e3.type === "click" && e3.buttons === 1 : e3.detail === 0 && !e3.pointerType;
}
function dO(e3) {
  return SF ? false : !Kc && e3.width === 0 && e3.height === 0 || Kc && e3.width === 1 && e3.height === 1 && e3.pressure === 0 && e3.detail === 0 && e3.pointerType === "mouse" || e3.width < 1 && e3.height < 1 && e3.pressure === 0 && e3.detail === 0 && e3.pointerType === "touch";
}
function Dg(e3, t) {
  return ["mouse", "pen"].includes(e3);
}
function qa(e3, t, r) {
  return Math.floor(e3 / t) !== r;
}
function Li(e3, t) {
  return t < 0 || t >= e3.current.length;
}
function Fl(e3, t) {
  return st(e3, { disabledIndices: t });
}
function Ng(e3, t) {
  return st(e3, { decrement: true, startingIndex: e3.current.length, disabledIndices: t });
}
function st(e3, { startingIndex: t = -1, decrement: r = false, disabledIndices: n, amount: i = 1 } = {}) {
  let a = t;
  do
    a += r ? -i : i;
  while (a >= 0 && a <= e3.current.length - 1 && $i(e3, a, n));
  return a;
}
function MF(e3, { event: t, orientation: r, loopFocus: n, rtl: i, cols: a, disabledIndices: o, minIndex: u, maxIndex: s, prevIndex: l, stopEvent: c = false }) {
  let f = l;
  const d = [], h = {};
  let v = false;
  {
    let y = null, x = -1;
    e3.current.forEach((b, w) => {
      if (b == null) return;
      const O = b.closest('[role="row"]');
      O && (v = true), (O !== y || x === -1) && (y = O, x += 1, d[x] = []), d[x].push(w), h[w] = x;
    });
  }
  const g = v && d.length > 0 && d.some((y) => y.length !== a);
  function m(y) {
    if (!g || l === -1) return;
    const x = h[l];
    if (x == null) return;
    const b = d[x].indexOf(l);
    let w = y === "up" ? x - 1 : x + 1;
    n && (w < 0 ? w = d.length - 1 : w >= d.length && (w = 0));
    const O = /* @__PURE__ */ new Set();
    for (; w >= 0 && w < d.length && !O.has(w); ) {
      O.add(w);
      const P = d[w];
      if (P.length === 0) {
        w = y === "up" ? w - 1 : w + 1;
        continue;
      }
      const S = Math.min(b, P.length - 1);
      for (let E = S; E >= 0; E -= 1) {
        const N = P[E];
        if (!$i(e3, N, o)) return N;
      }
      w = y === "up" ? w - 1 : w + 1, n && (w < 0 ? w = d.length - 1 : w >= d.length && (w = 0));
    }
  }
  if (t.key === Dd) {
    const y = m("up");
    if (y !== void 0) c && lt(t), f = y;
    else {
      if (c && lt(t), l === -1) f = s;
      else if (f = st(e3, { startingIndex: f, amount: a, decrement: true, disabledIndices: o }), n && (l - a < u || f < 0)) {
        const x = l % a, b = s % a, w = s - (b - x);
        b === x ? f = s : f = b > x ? w : w - a;
      }
      Li(e3, f) && (f = l);
    }
  }
  if (t.key === Pa) {
    const y = m("down");
    y !== void 0 ? (c && lt(t), f = y) : (c && lt(t), l === -1 ? f = u : (f = st(e3, { startingIndex: l, amount: a, disabledIndices: o }), n && l + a > s && (f = st(e3, { startingIndex: l % a - a, amount: a, disabledIndices: o }))), Li(e3, f) && (f = l));
  }
  if (r === "both") {
    const y = Hd(l / a);
    t.key === (i ? Gr : Xr) && (c && lt(t), l % a !== a - 1 ? (f = st(e3, { startingIndex: l, disabledIndices: o }), n && qa(f, a, y) && (f = st(e3, { startingIndex: l - l % a - 1, disabledIndices: o }))) : n && (f = st(e3, { startingIndex: l - l % a - 1, disabledIndices: o })), qa(f, a, y) && (f = l)), t.key === (i ? Xr : Gr) && (c && lt(t), l % a !== 0 ? (f = st(e3, { startingIndex: l, decrement: true, disabledIndices: o }), n && qa(f, a, y) && (f = st(e3, { startingIndex: l + (a - l % a), decrement: true, disabledIndices: o }))) : n && (f = st(e3, { startingIndex: l + (a - l % a), decrement: true, disabledIndices: o })), qa(f, a, y) && (f = l));
    const x = Hd(s / a) === y;
    Li(e3, f) && (n && x ? f = t.key === (i ? Xr : Gr) ? s : st(e3, { startingIndex: l - l % a - 1, disabledIndices: o }) : f = l);
  }
  return f;
}
function kF(e3, t, r) {
  const n = [];
  let i = 0;
  return e3.forEach(({ width: a, height: o }, u) => {
    let s = false;
    for (r && (i = 0); !s; ) {
      const l = [];
      for (let c = 0; c < a; c += 1) for (let f = 0; f < o; f += 1) l.push(i + c + f * t);
      i % t + a <= t && l.every((c) => n[c] == null) ? (l.forEach((c) => {
        n[c] = u;
      }), s = true) : i += 1;
    }
  }), [...n];
}
function jF(e3, t, r, n, i) {
  if (e3 === -1) return -1;
  const a = r.indexOf(e3), o = t[e3];
  switch (i) {
    case "tl":
      return a;
    case "tr":
      return o ? a + o.width - 1 : a;
    case "bl":
      return o ? a + (o.height - 1) * n : a;
    case "br":
      return r.lastIndexOf(e3);
    default:
      return -1;
  }
}
function RF(e3, t) {
  return t.flatMap((r, n) => e3.includes(r) ? [n] : []);
}
function $i(e3, t, r) {
  if (typeof r == "function") return r(t);
  if (r) return r.includes(t);
  const n = e3.current[t];
  return n ? n.hasAttribute("disabled") || n.getAttribute("aria-disabled") === "true" : false;
}
var DF = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], tu = DF.join(","), hO = typeof Element > "u", ni = hO ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ru = !hO && Element.prototype.getRootNode ? function(e3) {
  var t;
  return e3 == null || (t = e3.getRootNode) === null || t === void 0 ? void 0 : t.call(e3);
} : function(e3) {
  return e3 == null ? void 0 : e3.ownerDocument;
}, aa = function(t, r) {
  var n;
  r === void 0 && (r = true);
  var i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), a = i === "" || i === "true", o = a || r && t && aa(t.parentNode);
  return o;
}, NF = function(t) {
  var r, n = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "contenteditable");
  return n === "" || n === "true";
}, pO = function(t, r, n) {
  if (aa(t)) return [];
  var i = Array.prototype.slice.apply(t.querySelectorAll(tu));
  return r && ni.call(t, tu) && i.unshift(t), i = i.filter(n), i;
}, nu = function(t, r, n) {
  for (var i = [], a = Array.from(t); a.length; ) {
    var o = a.shift();
    if (!aa(o, false)) if (o.tagName === "SLOT") {
      var u = o.assignedElements(), s = u.length ? u : o.children, l = nu(s, true, n);
      n.flatten ? i.push.apply(i, l) : i.push({ scopeParent: o, candidates: l });
    } else {
      var c = ni.call(o, tu);
      c && n.filter(o) && (r || !t.includes(o)) && i.push(o);
      var f = o.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(o), d = !aa(f, false) && (!n.shadowRootFilter || n.shadowRootFilter(o));
      if (f && d) {
        var h = nu(f === true ? o.children : f.children, true, n);
        n.flatten ? i.push.apply(i, h) : i.push({ scopeParent: o, candidates: h });
      } else a.unshift.apply(a, o.children);
    }
  }
  return i;
}, vO = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, mO = function(t) {
  if (!t) throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || NF(t)) && !vO(t) ? 0 : t.tabIndex;
}, LF = function(t, r) {
  var n = mO(t);
  return n < 0 && r && !vO(t) ? 0 : n;
}, $F = function(t, r) {
  return t.tabIndex === r.tabIndex ? t.documentOrder - r.documentOrder : t.tabIndex - r.tabIndex;
}, gO = function(t) {
  return t.tagName === "INPUT";
}, FF = function(t) {
  return gO(t) && t.type === "hidden";
}, BF = function(t) {
  var r = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return r;
}, zF = function(t, r) {
  for (var n = 0; n < t.length; n++) if (t[n].checked && t[n].form === r) return t[n];
}, WF = function(t) {
  if (!t.name) return true;
  var r = t.form || ru(t), n = function(u) {
    return r.querySelectorAll('input[type="radio"][name="' + u + '"]');
  }, i;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") i = n(window.CSS.escape(t.name));
  else try {
    i = n(t.name);
  } catch (o) {
    return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message), false;
  }
  var a = zF(i, t.form);
  return !a || a === t;
}, UF = function(t) {
  return gO(t) && t.type === "radio";
}, qF = function(t) {
  return UF(t) && !WF(t);
}, KF = function(t) {
  var r, n = t && ru(t), i = (r = n) === null || r === void 0 ? void 0 : r.host, a = false;
  if (n && n !== t) {
    var o, u, s;
    for (a = !!((o = i) !== null && o !== void 0 && (u = o.ownerDocument) !== null && u !== void 0 && u.contains(i) || t != null && (s = t.ownerDocument) !== null && s !== void 0 && s.contains(t)); !a && i; ) {
      var l, c, f;
      n = ru(i), i = (l = n) === null || l === void 0 ? void 0 : l.host, a = !!((c = i) !== null && c !== void 0 && (f = c.ownerDocument) !== null && f !== void 0 && f.contains(i));
    }
  }
  return a;
}, Lg = function(t) {
  var r = t.getBoundingClientRect(), n = r.width, i = r.height;
  return n === 0 && i === 0;
}, VF = function(t, r) {
  var n = r.displayCheck, i = r.getShadowRoot;
  if (n === "full-native" && "checkVisibility" in t) {
    var a = t.checkVisibility({ checkOpacity: false, opacityProperty: false, contentVisibilityAuto: true, visibilityProperty: true, checkVisibilityCSS: true });
    return !a;
  }
  if (getComputedStyle(t).visibility === "hidden") return true;
  var o = ni.call(t, "details>summary:first-of-type"), u = o ? t.parentElement : t;
  if (ni.call(u, "details:not([open]) *")) return true;
  if (!n || n === "full" || n === "full-native" || n === "legacy-full") {
    if (typeof i == "function") {
      for (var s = t; t; ) {
        var l = t.parentElement, c = ru(t);
        if (l && !l.shadowRoot && i(l) === true) return Lg(t);
        t.assignedSlot ? t = t.assignedSlot : !l && c !== t.ownerDocument ? t = c.host : t = l;
      }
      t = s;
    }
    if (KF(t)) return !t.getClientRects().length;
    if (n !== "legacy-full") return true;
  } else if (n === "non-zero-area") return Lg(t);
  return false;
}, HF = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName)) for (var r = t.parentElement; r; ) {
    if (r.tagName === "FIELDSET" && r.disabled) {
      for (var n = 0; n < r.children.length; n++) {
        var i = r.children.item(n);
        if (i.tagName === "LEGEND") return ni.call(r, "fieldset[disabled] *") ? true : !i.contains(t);
      }
      return true;
    }
    r = r.parentElement;
  }
  return false;
}, Yc = function(t, r) {
  return !(r.disabled || aa(r) || FF(r) || VF(r, t) || BF(r) || HF(r));
}, Gc = function(t, r) {
  return !(qF(r) || mO(r) < 0 || !Yc(t, r));
}, YF = function(t) {
  var r = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(r) || r >= 0);
}, yO = function(t) {
  var r = [], n = [];
  return t.forEach(function(i, a) {
    var o = !!i.scopeParent, u = o ? i.scopeParent : i, s = LF(u, o), l = o ? yO(i.candidates) : u;
    s === 0 ? o ? r.push.apply(r, l) : r.push(u) : n.push({ documentOrder: a, tabIndex: s, item: i, isScope: o, content: l });
  }), n.sort($F).reduce(function(i, a) {
    return a.isScope ? i.push.apply(i, a.content) : i.push(a.content), i;
  }, []).concat(r);
}, Qu = function(t, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = nu([t], r.includeContainer, { filter: Gc.bind(null, r), flatten: false, getShadowRoot: r.getShadowRoot, shadowRootFilter: YF }) : n = pO(t, r.includeContainer, Gc.bind(null, r)), yO(n);
}, GF = function(t, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = nu([t], r.includeContainer, { filter: Yc.bind(null, r), flatten: true, getShadowRoot: r.getShadowRoot }) : n = pO(t, r.includeContainer, Yc.bind(null, r)), n;
}, bO = function(t, r) {
  if (r = r || {}, !t) throw new Error("No node provided");
  return ni.call(t, tu) === false ? false : Gc(r, t);
};
const Sa = () => ({ getShadowRoot: true, displayCheck: typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none" });
function wO(e3, t) {
  const r = Qu(e3, Sa()), n = r.length;
  if (n === 0) return;
  const i = qr(ht(e3)), a = r.indexOf(i), o = a === -1 ? t === 1 ? 0 : n - 1 : a + t;
  return r[o];
}
function xO(e3) {
  return wO(ht(e3).body, 1) || e3;
}
function OO(e3) {
  return wO(ht(e3).body, -1) || e3;
}
function Fi(e3, t) {
  const r = t || e3.currentTarget, n = e3.relatedTarget;
  return !n || !ze(r, n);
}
function XF(e3) {
  Qu(e3, Sa()).forEach((r) => {
    r.dataset.tabindex = r.getAttribute("tabindex") || "", r.setAttribute("tabindex", "-1");
  });
}
function $g(e3) {
  e3.querySelectorAll("[data-tabindex]").forEach((r) => {
    const n = r.dataset.tabindex;
    delete r.dataset.tabindex, n ? r.setAttribute("tabindex", n) : r.removeAttribute("tabindex");
  });
}
const ZF = { ...of };
let Fg = 0;
function QF(e3, t = "mui") {
  const [r, n] = p.useState(e3), i = e3 || r;
  return p.useEffect(() => {
    r == null && (Fg += 1, n(`${t}-${Fg}`));
  }, [r, t]), i;
}
const Bg = ZF.useId;
function Nd(e3, t) {
  if (Bg !== void 0) {
    const r = Bg();
    return e3 ?? (t ? `${t}-${r}` : r);
  }
  return QF(e3, t);
}
function JF() {
  const e3 = /* @__PURE__ */ new Map();
  return { emit(t, r) {
    var _a2;
    (_a2 = e3.get(t)) == null ? void 0 : _a2.forEach((n) => n(r));
  }, on(t, r) {
    e3.has(t) || e3.set(t, /* @__PURE__ */ new Set()), e3.get(t).add(r);
  }, off(t, r) {
    var _a2;
    (_a2 = e3.get(t)) == null ? void 0 : _a2.delete(r);
  } };
}
const eB = p.createContext(null), tB = p.createContext(null), PO = () => {
  var _a2;
  return ((_a2 = p.useContext(eB)) == null ? void 0 : _a2.id) || null;
}, Ju = (e3) => {
  const t = p.useContext(tB);
  return e3 ?? t;
}, rB = { style: { transition: "none" } }, nB = "data-base-ui-click-trigger", iB = { fallbackAxisSide: "none" }, Ld = "none", Bi = "trigger-press", aB = "trigger-hover", SO = "outside-press", Bl = "item-press", es = "focus-out", oB = "escape-key", zl = "list-navigation", uB = "cancel-open", sB = "window-resize";
function ke(e3, t, r, n) {
  let i = false, a = false;
  const o = qt;
  return { reason: e3, event: t ?? new Event("base-ui"), cancel() {
    i = true;
  }, allowPropagation() {
    a = true;
  }, get isCanceled() {
    return i;
  }, get isPropagationAllowed() {
    return a;
  }, trigger: r, ...o };
}
function iu(e3) {
  return `data-base-ui-${e3}`;
}
function lB() {
  return { open: false, onOpenChange: () => {
  }, dataRef: { current: {} }, elements: { floating: null, reference: null, domReference: null }, events: { on: () => {
  }, off: () => {
  }, emit: () => {
  } }, floatingId: "", refs: { setPositionReference: () => {
  } } };
}
function Jr(e3) {
  return (e3 == null ? void 0 : e3.ownerDocument) || document;
}
const au = p.forwardRef(function(t, r) {
  const [n, i] = p.useState();
  le(() => {
    PF && i("button");
  }, []);
  const a = { tabIndex: 0, role: n };
  return H.jsx("span", { ...t, ref: r, style: Xu, "aria-hidden": n ? void 0 : true, ...a, "data-base-ui-focus-guard": "" });
});
let zg = 0;
function io(e3, t = {}) {
  const { preventScroll: r = false, cancelPrevious: n = true, sync: i = false } = t;
  n && cancelAnimationFrame(zg);
  const a = () => e3 == null ? void 0 : e3.focus({ preventScroll: r });
  i ? a() : zg = requestAnimationFrame(a);
}
const Vn = { inert: /* @__PURE__ */ new WeakMap(), "aria-hidden": /* @__PURE__ */ new WeakMap(), none: /* @__PURE__ */ new WeakMap() };
function Wg(e3) {
  return e3 === "inert" ? Vn.inert : e3 === "aria-hidden" ? Vn["aria-hidden"] : Vn.none;
}
let Ka = /* @__PURE__ */ new WeakSet(), Va = {}, Wl = 0;
const EO = (e3) => e3 && (e3.host || EO(e3.parentNode)), cB = (e3, t) => t.map((r) => {
  if (e3.contains(r)) return r;
  const n = EO(r);
  return e3.contains(n) ? n : null;
}).filter((r) => r != null);
function fB(e3, t, r, n) {
  const i = "data-base-ui-inert", a = n ? "inert" : r ? "aria-hidden" : null, o = cB(t, e3), u = /* @__PURE__ */ new Set(), s = new Set(o), l = [];
  Va[i] || (Va[i] = /* @__PURE__ */ new WeakMap());
  const c = Va[i];
  o.forEach(f), d(t), u.clear();
  function f(h) {
    !h || u.has(h) || (u.add(h), h.parentNode && f(h.parentNode));
  }
  function d(h) {
    !h || s.has(h) || [].forEach.call(h.children, (v) => {
      if (ry(v) !== "script") if (u.has(v)) d(v);
      else {
        const g = a ? v.getAttribute(a) : null, m = g !== null && g !== "false", y = Wg(a), x = (y.get(v) || 0) + 1, b = (c.get(v) || 0) + 1;
        y.set(v, x), c.set(v, b), l.push(v), x === 1 && m && Ka.add(v), b === 1 && v.setAttribute(i, ""), !m && a && v.setAttribute(a, a === "inert" ? "" : "true");
      }
    });
  }
  return Wl += 1, () => {
    l.forEach((h) => {
      const v = Wg(a), m = (v.get(h) || 0) - 1, y = (c.get(h) || 0) - 1;
      v.set(h, m), c.set(h, y), m || (!Ka.has(h) && a && h.removeAttribute(a), Ka.delete(h)), y || h.removeAttribute(i);
    }), Wl -= 1, Wl || (Vn.inert = /* @__PURE__ */ new WeakMap(), Vn["aria-hidden"] = /* @__PURE__ */ new WeakMap(), Vn.none = /* @__PURE__ */ new WeakMap(), Ka = /* @__PURE__ */ new WeakSet(), Va = {});
  };
}
function dB(e3, t = false, r = false) {
  const n = ht(e3[0]).body;
  return fB(e3.concat(Array.from(n.querySelectorAll("[aria-live]"))), n, t, r);
}
function Ug(e3) {
  var _a2;
  if (!p.isValidElement(e3)) return null;
  const t = e3;
  return ((_a2 = t.props) == null ? void 0 : _a2.ref) ?? t.ref ?? null;
}
function Xc(e3, t) {
  if (e3 && !t) return e3;
  if (!e3 && t) return t;
  if (e3 || t) return { ...e3, ...t };
}
function hB(e3, t) {
  const r = {};
  for (const n in e3) {
    const i = e3[n];
    if (t == null ? void 0 : t.hasOwnProperty(n)) {
      const a = t[n](i);
      a != null && Object.assign(r, a);
      continue;
    }
    i === true ? r[`data-${n.toLowerCase()}`] = "" : i && (r[`data-${n.toLowerCase()}`] = i.toString());
  }
  return r;
}
function pB(e3, t) {
  return typeof e3 == "function" ? e3(t) : e3;
}
function vB(e3, t) {
  return typeof e3 == "function" ? e3(t) : e3;
}
const zi = {};
function $d(e3, t, r, n, i) {
  let a = { ...Zc(e3, zi) };
  return t && (a = ki(a, t)), r && (a = ki(a, r)), n && (a = ki(a, n)), i && (a = ki(a, i)), a;
}
function mB(e3) {
  if (e3.length === 0) return zi;
  if (e3.length === 1) return Zc(e3[0], zi);
  let t = { ...Zc(e3[0], zi) };
  for (let r = 1; r < e3.length; r += 1) t = ki(t, e3[r]);
  return t;
}
function ki(e3, t) {
  return AO(t) ? t(e3) : gB(e3, t);
}
function gB(e3, t) {
  if (!t) return e3;
  for (const r in t) {
    const n = t[r];
    switch (r) {
      case "style": {
        e3[r] = Xc(e3.style, n);
        break;
      }
      case "className": {
        e3[r] = CO(e3.className, n);
        break;
      }
      default:
        yB(r, n) ? e3[r] = bB(e3[r], n) : e3[r] = n;
    }
  }
  return e3;
}
function yB(e3, t) {
  const r = e3.charCodeAt(0), n = e3.charCodeAt(1), i = e3.charCodeAt(2);
  return r === 111 && n === 110 && i >= 65 && i <= 90 && (typeof t == "function" || typeof t > "u");
}
function AO(e3) {
  return typeof e3 == "function";
}
function Zc(e3, t) {
  return AO(e3) ? e3(t) : e3 ?? zi;
}
function bB(e3, t) {
  return t ? e3 ? (r) => {
    if (wB(r)) {
      const i = r;
      Qc(i);
      const a = t(i);
      return i.baseUIHandlerPrevented || (e3 == null ? void 0 : e3(i)), a;
    }
    const n = t(r);
    return e3 == null ? void 0 : e3(r), n;
  } : t : e3;
}
function Qc(e3) {
  return e3.preventBaseUIHandler = () => {
    e3.baseUIHandlerPrevented = true;
  }, e3;
}
function CO(e3, t) {
  return t ? e3 ? t + " " + e3 : t : e3;
}
function wB(e3) {
  return e3 != null && typeof e3 == "object" && "nativeEvent" in e3;
}
function Yt(e3, t, r = {}) {
  const n = t.render, i = xB(t, r);
  if (r.enabled === false) return null;
  const a = r.state ?? qt;
  return OB(e3, n, i, a);
}
function xB(e3, t = {}) {
  const { className: r, style: n, render: i } = e3, { state: a = qt, ref: o, props: u, stateAttributesMapping: s, enabled: l = true } = t, c = l ? pB(r, a) : void 0, f = l ? vB(n, a) : void 0, d = l ? hB(a, s) : qt, h = l ? Xc(d, Array.isArray(u) ? mB(u) : u) ?? qt : qt;
  return typeof document < "u" && (l ? Array.isArray(o) ? h.ref = fF([h.ref, Ug(i), ...o]) : h.ref = ti(h.ref, Ug(i), o) : ti(null, null)), l ? (c !== void 0 && (h.className = CO(h.className, c)), f !== void 0 && (h.style = Xc(h.style, f)), h) : qt;
}
function OB(e3, t, r, n) {
  if (t) {
    if (typeof t == "function") return t(r, n);
    const i = $d(r, t.props);
    return i.ref = r.ref, p.cloneElement(t, i);
  }
  if (e3 && typeof e3 == "string") return PB(e3, r);
  throw new Error(nn(8));
}
function PB(e3, t) {
  return e3 === "button" ? p.createElement("button", { type: "button", ...t, key: t.key }) : e3 === "img" ? p.createElement("img", { alt: "", ...t, key: t.key }) : p.createElement(e3, t);
}
const TO = p.createContext(null), IO = () => p.useContext(TO), SB = iu("portal");
function EB(e3 = {}) {
  var _a2;
  const { ref: t, container: r, componentProps: n = qt, elementProps: i, elementState: a } = e3, o = Nd(), s = (_a2 = IO()) == null ? void 0 : _a2.portalNode, [l, c] = p.useState(null), [f, d] = p.useState(null), h = p.useRef(null), v = p.useCallback((y) => {
    d(y);
  }, []);
  le(() => {
    if (r === null) {
      h.current && (h.current = null, d(null), c(null));
      return;
    }
    if (o == null) return;
    const y = (r && (aP(r) ? r : r.current)) ?? s ?? document.body;
    if (y == null) {
      h.current && (h.current = null, d(null), c(null));
      return;
    }
    h.current !== y && (h.current = y, d(null), c(y));
  }, [r, s, o]);
  const g = Yt("div", n, { ref: [t, v], state: a, props: [{ id: o, [SB]: "" }, i] });
  return { portalNode: f, portalSubtree: l && g ? wr.createPortal(g, l) : null };
}
const AB = p.forwardRef(function(t, r) {
  const { children: n, container: i, className: a, render: o, renderGuards: u, ...s } = t, { portalNode: l, portalSubtree: c } = EB({ container: i, ref: r, componentProps: t, elementProps: s }), f = p.useRef(null), d = p.useRef(null), h = p.useRef(null), v = p.useRef(null), [g, m] = p.useState(null), y = g == null ? void 0 : g.modal, x = g == null ? void 0 : g.open, b = typeof u == "boolean" ? u : !!g && !g.modal && g.open && !!l;
  p.useEffect(() => {
    if (!l || y) return;
    function O(P) {
      l && Fi(P) && (P.type === "focusin" ? $g : XF)(l);
    }
    return l.addEventListener("focusin", O, true), l.addEventListener("focusout", O, true), () => {
      l.removeEventListener("focusin", O, true), l.removeEventListener("focusout", O, true);
    };
  }, [l, y]), p.useEffect(() => {
    !l || x || $g(l);
  }, [x, l]);
  const w = p.useMemo(() => ({ beforeOutsideRef: f, afterOutsideRef: d, beforeInsideRef: h, afterInsideRef: v, portalNode: l, setFocusManagerState: m }), [l]);
  return H.jsxs(p.Fragment, { children: [c, H.jsxs(TO.Provider, { value: w, children: [b && l && H.jsx(au, { "data-type": "outside", ref: f, onFocus: (O) => {
    var _a2, _b2;
    if (Fi(O, l)) (_a2 = h.current) == null ? void 0 : _a2.focus();
    else {
      const P = g ? g.domReference : null;
      (_b2 = OO(P)) == null ? void 0 : _b2.focus();
    }
  } }), b && l && H.jsx("span", { "aria-owns": l.id, style: Xu }), l && wr.createPortal(n, l), b && l && H.jsx(au, { "data-type": "outside", ref: d, onFocus: (O) => {
    var _a2, _b2;
    if (Fi(O, l)) (_a2 = v.current) == null ? void 0 : _a2.focus();
    else {
      const P = g ? g.domReference : null;
      (_b2 = xO(P)) == null ? void 0 : _b2.focus(), (g == null ? void 0 : g.closeOnFocusOut) && (g == null ? void 0 : g.onOpenChange(false, ke(es, O.nativeEvent)));
    }
  } })] })] });
});
function dn(e3) {
  return e3 == null ? e3 : "current" in e3 ? e3.current : e3;
}
function CB(e3, t) {
  const r = Hn(e3.target);
  return e3 instanceof r.KeyboardEvent ? "keyboard" : e3 instanceof r.FocusEvent ? t || "keyboard" : "pointerType" in e3 ? e3.pointerType || "keyboard" : "touches" in e3 ? "touch" : e3 instanceof r.MouseEvent ? t || (e3.detail === 0 ? "keyboard" : "mouse") : "";
}
const qg = 20;
let Vr = [];
function Fd() {
  Vr = Vr.filter((e3) => e3.isConnected);
}
function TB(e3) {
  Fd(), e3 && ry(e3) !== "body" && (Vr.push(e3), Vr.length > qg && (Vr = Vr.slice(-qg)));
}
function Ul() {
  return Fd(), Vr[Vr.length - 1];
}
function IB(e3) {
  if (!e3) return null;
  const t = Sa();
  return bO(e3, t) ? e3 : Qu(e3, t)[0] || e3;
}
function Kg(e3, t) {
  var _a2;
  if (!t.current.includes("floating") && !((_a2 = e3.getAttribute("role")) == null ? void 0 : _a2.includes("dialog"))) return;
  const r = Sa(), i = GF(e3, r).filter((o) => {
    const u = o.getAttribute("data-tabindex") || "";
    return bO(o, r) || o.hasAttribute("data-tabindex") && !u.startsWith("-");
  }), a = e3.getAttribute("tabindex");
  t.current.includes("floating") || i.length === 0 ? a !== "0" && e3.setAttribute("tabindex", "0") : (a !== "-1" || e3.hasAttribute("data-tabindex") && e3.getAttribute("data-tabindex") !== "-1") && (e3.setAttribute("tabindex", "-1"), e3.setAttribute("data-tabindex", "-1"));
}
function _B(e3) {
  const { context: t, children: r, disabled: n = false, order: i = ["content"], initialFocus: a = true, returnFocus: o = true, restoreFocus: u = false, modal: s = true, closeOnFocusOut: l = true, openInteractionType: c = "", getInsideElements: f = () => [], nextFocusableElement: d, previousFocusableElement: h, beforeContentFocusGuardRef: v, externalTree: g } = e3, { open: m, onOpenChange: y, events: x, dataRef: b, elements: { domReference: w, floating: O, triggers: P } } = t, S = ce(() => {
    var _a2;
    return (_a2 = b.current.floatingContext) == null ? void 0 : _a2.nodeId;
  }), E = ce(f), N = a === false, k = Hc(w) && N, R = ct(i), C = ct(a), F = ct(o), L = ct(c), M = Ju(g), $ = IO(), B = p.useRef(null), D = p.useRef(null), K = p.useRef(false), W = p.useRef(false), fe = p.useRef(-1), te = p.useRef(""), ae = p.useRef(""), re = St(), X = St(), oe = Zu(), ne = $ != null, A = eu(O), j = ce((V = A) => V ? Qu(V, Sa()) : []), I = ce((V) => {
    const z = j(V);
    return R.current.map(() => z).filter(Boolean).flat();
  });
  p.useEffect(() => {
    if (n || !s) return;
    function V(U) {
      U.key === "Tab" && ze(A, qr(ht(A))) && j().length === 0 && !k && lt(U);
    }
    const z = ht(A);
    return z.addEventListener("keydown", V), () => {
      z.removeEventListener("keydown", V);
    };
  }, [n, w, A, s, R, k, j, I]), p.useEffect(() => {
    if (n || !O) return;
    function V(z) {
      const U = vr(z), q = j().indexOf(U);
      q !== -1 && (fe.current = q);
    }
    return O.addEventListener("focusin", V), () => {
      O.removeEventListener("focusin", V);
    };
  }, [n, O, j]), p.useEffect(() => {
    if (n || !m) return;
    const V = ht(A);
    function z(G) {
      ae.current = G.pointerType || "keyboard";
    }
    function U() {
      ae.current = "keyboard";
    }
    return V.addEventListener("pointerdown", z, true), V.addEventListener("keydown", U, true), () => {
      V.removeEventListener("pointerdown", z, true), V.removeEventListener("keydown", U, true);
    };
  }, [n, O, w, A, m]), p.useEffect(() => {
    if (n || !l) return;
    function V() {
      W.current = true, X.start(0, () => {
        W.current = false;
      });
    }
    function z(Y) {
      const J = Y.relatedTarget, ge = Y.currentTarget, be = vr(Y);
      queueMicrotask(() => {
        const ye = S(), et = !(ze(w, J) || ze(O, J) || ze(J, O) || ze($ == null ? void 0 : $.portalNode, J) || (P == null ? void 0 : P.some((xe) => ze(xe, J))) || (J == null ? void 0 : J.hasAttribute(iu("focus-guard"))) || M && (Kn(M.nodesRef.current, ye).find((xe) => {
          var _a2, _b2;
          return ze((_a2 = xe.context) == null ? void 0 : _a2.elements.floating, J) || ze((_b2 = xe.context) == null ? void 0 : _b2.elements.domReference, J);
        }) || Rg(M.nodesRef.current, ye).find((xe) => {
          var _a2, _b2, _c2;
          return [(_a2 = xe.context) == null ? void 0 : _a2.elements.floating, eu((_b2 = xe.context) == null ? void 0 : _b2.elements.floating)].includes(J) || ((_c2 = xe.context) == null ? void 0 : _c2.elements.domReference) === J;
        })));
        if (ge === w && A && Kg(A, R), u && ge !== w && !(be == null ? void 0 : be.isConnected) && qr(ht(A)) === ht(A).body) {
          if (rr(A) && (A.focus(), u === "popup")) {
            oe.request(() => {
              A.focus();
            });
            return;
          }
          const xe = fe.current, Ke = j(), Ve = Ke[xe] || Ke[Ke.length - 1] || A;
          rr(Ve) && Ve.focus();
        }
        if (b.current.insideReactTree) {
          b.current.insideReactTree = false;
          return;
        }
        (k || !s) && J && et && (k || J !== Ul()) && (K.current = true, y(false, ke(es, Y)));
      });
    }
    function U() {
      b.current.insideReactTree = true, re.start(0, () => {
        b.current.insideReactTree = false;
      });
    }
    const G = rr(w) ? w : null, q = [];
    if (!(!O && !G)) return G && (G.addEventListener("focusout", z), G.addEventListener("pointerdown", V), q.push(() => {
      G.removeEventListener("focusout", z), G.removeEventListener("pointerdown", V);
    })), O && (O.addEventListener("focusout", z), $ && (O.addEventListener("focusout", U, true), q.push(() => {
      O.removeEventListener("focusout", U, true);
    })), q.push(() => {
      O.removeEventListener("focusout", z);
    })), () => {
      q.forEach((Y) => {
        Y();
      });
    };
  }, [n, w, O, A, s, M, $, y, l, u, j, k, S, R, b, re, X, oe, P]);
  const Z = p.useRef(null), _ = p.useRef(null), ie = ti(Z, v, $ == null ? void 0 : $.beforeInsideRef), ee = ti(_, $ == null ? void 0 : $.afterInsideRef);
  p.useEffect(() => {
    var _a2, _b2, _c2;
    if (n || !O || !m) return;
    const V = Array.from(((_a2 = $ == null ? void 0 : $.portalNode) == null ? void 0 : _a2.querySelectorAll(`[${iu("portal")}]`)) || []), U = (_c2 = (_b2 = (M ? Rg(M.nodesRef.current, S()) : []).find((Y) => {
      var _a3;
      return Hc(((_a3 = Y.context) == null ? void 0 : _a3.elements.domReference) || null);
    })) == null ? void 0 : _b2.context) == null ? void 0 : _c2.elements.domReference, G = [O, U, ...V, ...E(), B.current, D.current, Z.current, _.current, $ == null ? void 0 : $.beforeOutsideRef.current, $ == null ? void 0 : $.afterOutsideRef.current, dn(h), dn(d), k ? w : null].filter((Y) => Y != null), q = dB(G, s || k);
    return () => {
      q();
    };
  }, [m, n, w, O, s, R, $, k, M, S, E, d, h]), le(() => {
    if (!m || n || !rr(A)) return;
    const V = ht(A), z = qr(V);
    queueMicrotask(() => {
      const U = I(A), G = C.current, q = typeof G == "function" ? G(L.current || "") : G;
      if (q === void 0 || q === false) return;
      let Y;
      q === true || q === null ? Y = U[0] || A : Y = dn(q), Y = Y || U[0] || A, !ze(A, z) && io(Y, { preventScroll: Y === A });
    });
  }, [n, m, A, N, I, C, L]), le(() => {
    if (n || !A) return;
    const V = ht(A), z = qr(V);
    TB(z);
    function U(Y) {
      if (Y.open || (te.current = CB(Y.nativeEvent, ae.current)), Y.reason === aB && Y.nativeEvent.type === "mouseleave" && (K.current = true), Y.reason === SO) if (Y.nested) K.current = false;
      else if (fO(Y.nativeEvent) || dO(Y.nativeEvent)) K.current = false;
      else {
        let J = false;
        document.createElement("div").focus({ get preventScroll() {
          return J = true, false;
        } }), J ? K.current = false : K.current = true;
      }
    }
    x.on("openchange", U);
    const G = V.createElement("span");
    G.setAttribute("tabindex", "-1"), G.setAttribute("aria-hidden", "true"), Object.assign(G.style, Xu), ne && w && w.insertAdjacentElement("afterend", G);
    function q() {
      const Y = F.current;
      let J = typeof Y == "function" ? Y(te.current) : Y;
      if (J === void 0 || J === false) return null;
      if (J === null && (J = true), typeof J == "boolean") {
        const be = w || Ul();
        return be && be.isConnected ? be : G;
      }
      const ge = w || Ul() || G;
      return dn(J) || ge;
    }
    return () => {
      x.off("openchange", U);
      const Y = qr(V), J = ze(O, Y) || M && Kn(M.nodesRef.current, S(), false).some((be) => {
        var _a2;
        return ze((_a2 = be.context) == null ? void 0 : _a2.elements.floating, Y);
      }), ge = q();
      queueMicrotask(() => {
        const be = IB(ge), ye = typeof F.current != "boolean";
        F.current && !K.current && rr(be) && (!(!ye && be !== Y && Y !== V.body) || J) && be.focus({ preventScroll: true }), G.remove();
      });
    };
  }, [n, O, A, F, b, x, M, ne, w, S]), p.useEffect(() => {
    queueMicrotask(() => {
      K.current = false;
    });
  }, [n]), p.useEffect(() => {
    if (n || !m) return;
    function V(U) {
      var _a2;
      ((_a2 = vr(U)) == null ? void 0 : _a2.closest(`[${nB}]`)) && (W.current = true);
    }
    const z = ht(A);
    return z.addEventListener("pointerdown", V, true), () => {
      z.removeEventListener("pointerdown", V, true);
    };
  }, [n, m, A]), le(() => {
    if (!n && $) return $.setFocusManagerState({ modal: s, closeOnFocusOut: l, open: m, onOpenChange: y, domReference: w }), () => {
      $.setFocusManagerState(null);
    };
  }, [n, $, s, m, y, l, w]), le(() => {
    if (!(n || !A)) return Kg(A, R), () => {
      queueMicrotask(Fd);
    };
  }, [n, A, R]);
  const pe = !n && (s ? !k : true) && (ne || s);
  return H.jsxs(p.Fragment, { children: [pe && H.jsx(au, { "data-type": "inside", ref: ie, onFocus: (V) => {
    var _a2, _b2;
    if (s) {
      const z = I();
      io(z[z.length - 1]);
    } else ($ == null ? void 0 : $.portalNode) && (K.current = false, Fi(V, $.portalNode) ? (_a2 = xO(w)) == null ? void 0 : _a2.focus() : (_b2 = dn(h ?? $.beforeOutsideRef)) == null ? void 0 : _b2.focus());
  } }), r, pe && H.jsx(au, { "data-type": "inside", ref: ee, onFocus: (V) => {
    var _a2, _b2;
    s ? io(I()[0]) : ($ == null ? void 0 : $.portalNode) && (l && (K.current = true), Fi(V, $.portalNode) ? (_a2 = OO(w)) == null ? void 0 : _a2.focus() : (_b2 = dn(d ?? $.afterOutsideRef)) == null ? void 0 : _b2.focus());
  } })] });
}
function MB(e3, t = {}) {
  const { open: r, onOpenChange: n, dataRef: i, elements: a } = e3 ?? lB(), { enabled: o = true, event: u = "click", toggle: s = true, ignoreMouse: l = false, stickIfOpen: c = true, touchOpenDelay: f = 0 } = t, d = p.useRef(void 0), h = Zu(), v = St(), g = p.useMemo(() => ({ onPointerDown(m) {
    d.current = m.pointerType;
  }, onMouseDown(m) {
    const y = d.current, x = m.nativeEvent;
    if (m.button !== 0 || u === "click" || Dg(y) && l) return;
    const b = i.current.openEvent, w = b == null ? void 0 : b.type, O = a.domReference !== m.currentTarget, P = r && O || !(r && s && (!(b && c) || w === "click" || w === "mousedown"));
    if (cO(x.target)) {
      const E = ke(Bi, x, x.target);
      P && y === "touch" && f > 0 ? v.start(f, () => {
        n(true, E);
      }) : n(P, E);
      return;
    }
    const S = m.currentTarget;
    h.request(() => {
      const E = ke(Bi, x, S);
      P && y === "touch" && f > 0 ? v.start(f, () => {
        n(true, E);
      }) : n(P, E);
    });
  }, onClick(m) {
    if (u === "mousedown-only") return;
    const y = d.current;
    if (u === "mousedown" && y) {
      d.current = void 0;
      return;
    }
    if (Dg(y) && l) return;
    const x = i.current.openEvent, b = x == null ? void 0 : x.type, w = a.domReference !== m.currentTarget, O = r && w || !(r && s && (!(x && c) || b === "click" || b === "mousedown" || b === "keydown" || b === "keyup")), P = ke(Bi, m.nativeEvent, m.currentTarget);
    O && y === "touch" && f > 0 ? v.start(f, () => {
      n(true, P);
    }) : n(O, P);
  }, onKeyDown() {
    d.current = void 0;
  } }), [i, u, l, n, r, c, s, h, v, f, a.domReference]);
  return p.useMemo(() => o ? { reference: g } : qt, [o, g]);
}
const kB = { intentional: "onClick", sloppy: "onPointerDown" };
function jB(e3) {
  return { escapeKey: typeof e3 == "boolean" ? e3 : (e3 == null ? void 0 : e3.escapeKey) ?? false, outsidePress: typeof e3 == "boolean" ? e3 : (e3 == null ? void 0 : e3.outsidePress) ?? true };
}
function RB(e3, t = {}) {
  const { open: r, onOpenChange: n, elements: i, dataRef: a } = e3, { enabled: o = true, escapeKey: u = true, outsidePress: s = true, outsidePressEvent: l = "sloppy", referencePress: c = false, referencePressEvent: f = "sloppy", ancestorScroll: d = false, bubbles: h, externalTree: v } = t, g = Ju(v), m = ce(typeof s == "function" ? s : () => false), y = typeof s == "function" ? m : s, x = p.useRef(false), { escapeKey: b, outsidePress: w } = jB(h), O = p.useRef(null), P = St(), S = St(), E = ce(() => {
    S.clear(), a.current.insideReactTree = false;
  }), N = p.useRef(false), k = p.useRef(""), R = ce((A) => {
    k.current = A.pointerType;
  }), C = ce(() => {
    const A = k.current, j = A === "pen" || !A ? "mouse" : A, I = typeof l == "function" ? l() : l;
    return typeof I == "string" ? I : I[j];
  }), F = ce((A) => {
    var _a2;
    if (!r || !o || !u || A.key !== "Escape" || N.current) return;
    const j = (_a2 = a.current.floatingContext) == null ? void 0 : _a2.nodeId, I = g ? Kn(g.nodesRef.current, j) : [];
    if (!b && I.length > 0) {
      let ie = true;
      if (I.forEach((ee) => {
        var _a3;
        ((_a3 = ee.context) == null ? void 0 : _a3.open) && !ee.context.dataRef.current.__escapeKeyBubbles && (ie = false);
      }), !ie) return;
    }
    const Z = _F(A) ? A.nativeEvent : A, _ = ke(oB, Z);
    n(false, _), !b && !_.isPropagationAllowed && A.stopPropagation();
  }), L = ce((A) => {
    const j = C();
    return j === "intentional" && A.type !== "click" || j === "sloppy" && A.type === "click";
  }), M = ce(() => {
    a.current.insideReactTree = true, S.start(0, E);
  }), $ = ce((A, j = false) => {
    var _a2, _b2;
    if (L(A)) {
      E();
      return;
    }
    if (a.current.insideReactTree) {
      E();
      return;
    }
    if (C() === "intentional" && j || typeof y == "function" && !y(A)) return;
    const I = vr(A), Z = `[${iu("inert")}]`, _ = ht(i.floating).querySelectorAll(Z);
    if (I && ((_a2 = i.triggers) == null ? void 0 : _a2.some((z) => ze(z, I)))) return;
    let ie = Bt(I) ? I : null;
    for (; ie && !as(ie); ) {
      const z = oP(ie);
      if (as(z) || !Bt(z)) break;
      ie = z;
    }
    if (_.length && Bt(I) && !IF(I) && !ze(I, i.floating) && Array.from(_).every((z) => !ze(ie, z))) return;
    if (rr(I) && !("touches" in A)) {
      const z = as(I), U = uP(I), G = /auto|scroll/, q = z || G.test(U.overflowX), Y = z || G.test(U.overflowY), J = q && I.clientWidth > 0 && I.scrollWidth > I.clientWidth, ge = Y && I.clientHeight > 0 && I.scrollHeight > I.clientHeight, be = U.direction === "rtl", ye = ge && (be ? A.offsetX <= I.offsetWidth - I.clientWidth : A.offsetX > I.clientWidth), et = J && A.offsetY > I.clientHeight;
      if (ye || et) return;
    }
    const ee = (_b2 = a.current.floatingContext) == null ? void 0 : _b2.nodeId, pe = g && Kn(g.nodesRef.current, ee).some((z) => {
      var _a3;
      return Ft(A, (_a3 = z.context) == null ? void 0 : _a3.elements.floating);
    });
    if (Ft(A, i.floating) || Ft(A, i.domReference) || pe) return;
    const V = g ? Kn(g.nodesRef.current, ee) : [];
    if (V.length > 0) {
      let z = true;
      if (V.forEach((U) => {
        var _a3;
        ((_a3 = U.context) == null ? void 0 : _a3.open) && !U.context.dataRef.current.__outsidePressBubbles && (z = false);
      }), !z) return;
    }
    n(false, ke(SO, A)), E();
  }), B = ce((A) => {
    C() !== "sloppy" || A.pointerType === "touch" || !r || !o || Ft(A, i.floating) || Ft(A, i.domReference) || $(A);
  }), D = ce((A) => {
    if (C() !== "sloppy" || !r || !o || Ft(A, i.floating) || Ft(A, i.domReference)) return;
    const j = A.touches[0];
    j && (O.current = { startTime: Date.now(), startX: j.clientX, startY: j.clientY, dismissOnTouchEnd: false, dismissOnMouseDown: true }, P.start(1e3, () => {
      O.current && (O.current.dismissOnTouchEnd = false, O.current.dismissOnMouseDown = false);
    }));
  }), K = ce((A) => {
    const j = vr(A);
    function I() {
      D(A), j == null ? void 0 : j.removeEventListener(A.type, I);
    }
    j == null ? void 0 : j.addEventListener(A.type, I);
  }), W = ce((A) => {
    const j = x.current;
    if (x.current = false, P.clear(), A.type === "mousedown" && O.current && !O.current.dismissOnMouseDown) return;
    const I = vr(A);
    function Z() {
      A.type === "pointerdown" ? B(A) : $(A, j), I == null ? void 0 : I.removeEventListener(A.type, Z);
    }
    I == null ? void 0 : I.addEventListener(A.type, Z);
  }), fe = ce((A) => {
    if (C() !== "sloppy" || !O.current || Ft(A, i.floating) || Ft(A, i.domReference)) return;
    const j = A.touches[0];
    if (!j) return;
    const I = Math.abs(j.clientX - O.current.startX), Z = Math.abs(j.clientY - O.current.startY), _ = Math.sqrt(I * I + Z * Z);
    _ > 5 && (O.current.dismissOnTouchEnd = true), _ > 10 && ($(A), P.clear(), O.current = null);
  }), te = ce((A) => {
    const j = vr(A);
    function I() {
      fe(A), j == null ? void 0 : j.removeEventListener(A.type, I);
    }
    j == null ? void 0 : j.addEventListener(A.type, I);
  }), ae = ce((A) => {
    C() !== "sloppy" || !O.current || Ft(A, i.floating) || Ft(A, i.domReference) || (O.current.dismissOnTouchEnd && $(A), P.clear(), O.current = null);
  }), re = ce((A) => {
    const j = vr(A);
    function I() {
      ae(A), j == null ? void 0 : j.removeEventListener(A.type, I);
    }
    j == null ? void 0 : j.addEventListener(A.type, I);
  });
  p.useEffect(() => {
    if (!r || !o) return;
    a.current.__escapeKeyBubbles = b, a.current.__outsidePressBubbles = w;
    const A = new ri();
    function j(ee) {
      n(false, ke(Ld, ee));
    }
    function I() {
      A.clear(), N.current = true;
    }
    function Z() {
      A.start(sP() ? 5 : 0, () => {
        N.current = false;
      });
    }
    const _ = ht(i.floating);
    _.addEventListener("pointerdown", R, true), u && (_.addEventListener("keydown", F), _.addEventListener("compositionstart", I), _.addEventListener("compositionend", Z)), y && (_.addEventListener("click", W, true), _.addEventListener("pointerdown", W, true), _.addEventListener("touchstart", K, true), _.addEventListener("touchmove", te, true), _.addEventListener("touchend", re, true), _.addEventListener("mousedown", W, true));
    let ie = [];
    return d && (Bt(i.domReference) && (ie = os(i.domReference)), Bt(i.floating) && (ie = ie.concat(os(i.floating))), !Bt(i.reference) && i.reference && i.reference.contextElement && (ie = ie.concat(os(i.reference.contextElement)))), ie = ie.filter((ee) => {
      var _a2;
      return ee !== ((_a2 = _.defaultView) == null ? void 0 : _a2.visualViewport);
    }), ie.forEach((ee) => {
      ee.addEventListener("scroll", j, { passive: true });
    }), () => {
      _.removeEventListener("pointerdown", R, true), u && (_.removeEventListener("keydown", F), _.removeEventListener("compositionstart", I), _.removeEventListener("compositionend", Z)), y && (_.removeEventListener("click", W, true), _.removeEventListener("pointerdown", W, true), _.removeEventListener("touchstart", K, true), _.removeEventListener("touchmove", te, true), _.removeEventListener("touchend", re, true), _.removeEventListener("mousedown", W, true)), ie.forEach((ee) => {
        ee.removeEventListener("scroll", j);
      }), A.clear();
    };
  }, [a, i, u, y, r, n, d, o, b, w, F, $, W, B, K, te, re, R]), p.useEffect(E, [y, E]);
  const X = p.useMemo(() => ({ onKeyDown: F, ...c && { [kB[f]]: (A) => {
    n(false, ke(Bi, A.nativeEvent));
  }, ...f !== "intentional" && { onClick(A) {
    n(false, ke(Bi, A.nativeEvent));
  } } } }), [F, n, c, f]), oe = ce((A) => {
    const j = vr(A.nativeEvent);
    !ze(i.floating, j) || A.button !== 0 || (x.current = true);
  }), ne = p.useMemo(() => ({ onKeyDown: F, onMouseDown: oe, onMouseUp: oe, onPointerDownCapture: M, onMouseDownCapture: M, onClickCapture: M, onMouseUpCapture: M, onTouchEndCapture: M, onTouchMoveCapture: M }), [F, oe, M]);
  return p.useMemo(() => o ? { reference: X, floating: ne, trigger: X } : {}, [o, X, ne]);
}
function _O(e3) {
  const { open: t = false, onOpenChange: r, elements: n } = e3, i = Nd(), a = p.useRef({}), [o] = p.useState(() => JF()), u = PO() != null, [s, l] = p.useState(n.reference), c = ce((h, v) => {
    if (a.current.openEvent = h ? v.event : void 0, !e3.noEmit) {
      const g = { open: h, reason: v.reason, nativeEvent: v.event, nested: u, triggerElement: v.trigger };
      o.emit("openchange", g);
    }
    r == null ? void 0 : r(h, v);
  }), f = p.useMemo(() => ({ setPositionReference: l }), []), d = p.useMemo(() => ({ reference: s || n.reference || null, floating: n.floating || null, domReference: n.reference, triggers: n.triggers ?? [] }), [s, n.reference, n.floating, n.triggers]);
  return p.useMemo(() => ({ dataRef: a, open: t, onOpenChange: c, elements: d, events: o, floatingId: i, refs: f }), [t, c, d, o, i, f]);
}
function DB(e3 = {}) {
  const { nodeId: t, externalTree: r } = e3, n = _O({ ...e3, elements: { reference: null, floating: null, ...e3.elements } }), i = e3.rootContext || n, a = i.elements, [o, u] = p.useState(null), [s, l] = p.useState(null), f = (a == null ? void 0 : a.domReference) || o, d = p.useRef(null), h = Ju(r);
  le(() => {
    f && (d.current = f);
  }, [f]);
  const v = lP({ ...e3, elements: { ...a, ...s && { reference: s } } }), g = p.useCallback((w) => {
    const O = Bt(w) ? { getBoundingClientRect: () => w.getBoundingClientRect(), getClientRects: () => w.getClientRects(), contextElement: w } : w;
    l(O), v.refs.setReference(O);
  }, [v.refs]), m = p.useCallback((w) => {
    (Bt(w) || w === null) && (d.current = w, u(w)), (Bt(v.refs.reference.current) || v.refs.reference.current === null || w !== null && !Bt(w)) && v.refs.setReference(w);
  }, [v.refs]), y = p.useMemo(() => ({ ...v.refs, setReference: m, setPositionReference: g, domReference: d }), [v.refs, m, g]), x = p.useMemo(() => ({ ...v.elements, domReference: f, triggers: a == null ? void 0 : a.triggers }), [v.elements, f, a == null ? void 0 : a.triggers]), b = p.useMemo(() => ({ ...v, ...i, refs: y, elements: x, nodeId: t }), [v, y, x, t, i]);
  return le(() => {
    i.dataRef.current.floatingContext = b;
    const w = h == null ? void 0 : h.nodesRef.current.find((O) => O.id === t);
    w && (w.context = b);
  }), p.useMemo(() => ({ ...v, context: b, refs: y, elements: x }), [v, y, x, b]);
}
function NB(e3 = []) {
  const t = e3.map((l) => l == null ? void 0 : l.reference), r = e3.map((l) => l == null ? void 0 : l.floating), n = e3.map((l) => l == null ? void 0 : l.item), i = e3.map((l) => l == null ? void 0 : l.trigger), a = p.useCallback((l) => Ha(l, e3, "reference"), t), o = p.useCallback((l) => Ha(l, e3, "floating"), r), u = p.useCallback((l) => Ha(l, e3, "item"), n), s = p.useCallback((l) => Ha(l, e3, "trigger"), i);
  return p.useMemo(() => ({ getReferenceProps: a, getFloatingProps: o, getItemProps: u, getTriggerProps: s }), [a, o, u, s]);
}
function Ha(e3, t, r) {
  var _a2;
  const n = /* @__PURE__ */ new Map(), i = r === "item", a = {};
  r === "floating" && (a.tabIndex = -1, a[Vc] = "");
  for (const o in e3) i && e3 && (o === sO || o === lO) || (a[o] = e3[o]);
  for (let o = 0; o < t.length; o += 1) {
    let u;
    const s = (_a2 = t[o]) == null ? void 0 : _a2[r];
    typeof s == "function" ? u = e3 ? s(e3) : null : u = s, u && Vg(a, u, i, n);
  }
  return Vg(a, e3, i, n), a;
}
function Vg(e3, t, r, n) {
  var _a2;
  for (const i in t) {
    const a = t[i];
    r && (i === sO || i === lO) || (i.startsWith("on") ? (n.has(i) || n.set(i, []), typeof a == "function" && ((_a2 = n.get(i)) == null ? void 0 : _a2.push(a), e3[i] = (...o) => {
      var _a3;
      return (_a3 = n.get(i)) == null ? void 0 : _a3.map((u) => u(...o)).find((u) => u !== void 0);
    })) : e3[i] = a);
  }
}
const LB = "Escape";
function ts(e3, t, r) {
  switch (e3) {
    case "vertical":
      return t;
    case "horizontal":
      return r;
    default:
      return t || r;
  }
}
function Ya(e3, t) {
  return ts(t, e3 === Dd || e3 === Pa, e3 === Gr || e3 === Xr);
}
function ql(e3, t, r) {
  return ts(t, e3 === Pa, r ? e3 === Gr : e3 === Xr) || e3 === "Enter" || e3 === " " || e3 === "";
}
function $B(e3, t, r) {
  return ts(t, r ? e3 === Gr : e3 === Xr, e3 === Pa);
}
function FB(e3, t, r, n) {
  const i = r ? e3 === Xr : e3 === Gr, a = e3 === Dd;
  return t === "both" || t === "horizontal" && n && n > 1 ? e3 === LB : ts(t, i, a);
}
function BB(e3, t) {
  const { open: r, onOpenChange: n, elements: i } = e3, { listRef: a, activeIndex: o, onNavigate: u = () => {
  }, enabled: s = true, selectedIndex: l = null, allowEscape: c = false, loopFocus: f = false, nested: d = false, rtl: h = false, virtual: v = false, focusItemOnOpen: g = "auto", focusItemOnHover: m = true, openOnArrowKeyDown: y = true, disabledIndices: x = void 0, orientation: b = "vertical", parentOrientation: w, cols: O = 1, scrollItemIntoView: P = true, itemSizes: S, dense: E = false, id: N, externalTree: k } = t, R = eu(i.floating), C = ct(R), F = PO(), L = Ju(k);
  le(() => {
    e3.dataRef.current.orientation = b;
  }, [e3, b]);
  const M = Hc(i.domReference), $ = p.useRef(g), B = p.useRef(l ?? -1), D = p.useRef(null), K = p.useRef(true), W = ce((U) => {
    u(B.current === -1 ? null : B.current, U);
  }), fe = p.useRef(W), te = p.useRef(!!i.floating), ae = p.useRef(r), re = p.useRef(false), X = p.useRef(false), oe = ct(x), ne = ct(r), A = ct(P), j = ct(l), I = ce(() => {
    function U(J) {
      v ? L == null ? void 0 : L.events.emit("virtualfocus", J) : io(J, { sync: re.current, preventScroll: true });
    }
    const G = a.current[B.current], q = X.current;
    G && U(G), (re.current ? (J) => J() : requestAnimationFrame)(() => {
      var _a2;
      const J = a.current[B.current] || G;
      if (!J) return;
      G || U(J);
      const ge = A.current;
      ge && _ && (q || !K.current) && ((_a2 = J.scrollIntoView) == null ? void 0 : _a2.call(J, typeof ge == "boolean" ? { block: "nearest", inline: "nearest" } : ge));
    });
  });
  le(() => {
    s && (r && i.floating ? (B.current = l ?? -1, $.current && l != null && (X.current = true, W())) : te.current && (B.current = -1, fe.current()));
  }, [s, r, i.floating, l, W]), le(() => {
    if (s) {
      if (!r) {
        re.current = false;
        return;
      }
      if (i.floating) if (o == null) {
        if (re.current = false, j.current != null) return;
        if (te.current && (B.current = -1, I()), (!ae.current || !te.current) && $.current && (D.current != null || $.current === true && D.current == null)) {
          let U = 0;
          const G = () => {
            a.current[0] == null ? (U < 2 && (U ? requestAnimationFrame : queueMicrotask)(G), U += 1) : (B.current = D.current == null || ql(D.current, b, h) || d ? Fl(a) : Ng(a), D.current = null, W());
          };
          G();
        }
      } else Li(a, o) || (B.current = o, I(), X.current = false);
    }
  }, [s, r, i.floating, o, j, d, a, b, h, W, I, oe]), le(() => {
    var _a2, _b2;
    if (!s || i.floating || !L || v || !te.current) return;
    const U = L.nodesRef.current, G = (_b2 = (_a2 = U.find((J) => J.id === F)) == null ? void 0 : _a2.context) == null ? void 0 : _b2.elements.floating, q = qr(ht(i.floating)), Y = U.some((J) => J.context && ze(J.context.elements.floating, q));
    G && !Y && K.current && G.focus({ preventScroll: true });
  }, [s, i.floating, L, F, v]), le(() => {
    fe.current = W, ae.current = r, te.current = !!i.floating;
  }), le(() => {
    r || (D.current = null, $.current = g);
  }, [r, g]);
  const Z = o != null, _ = p.useMemo(() => {
    function U(q) {
      if (!ne.current) return;
      const Y = a.current.indexOf(q.currentTarget);
      Y !== -1 && B.current !== Y && (B.current = Y, W(q));
    }
    return { onFocus(q) {
      re.current = true, U(q);
    }, onClick: ({ currentTarget: q }) => q.focus({ preventScroll: true }), onMouseMove(q) {
      re.current = true, X.current = false, m && U(q);
    }, onPointerLeave(q) {
      var _a2;
      if (!ne.current || !K.current || q.pointerType === "touch") return;
      re.current = true;
      const Y = q.relatedTarget;
      !m || a.current.includes(Y) || (B.current = -1, W(q), v || ((_a2 = C.current) == null ? void 0 : _a2.focus({ preventScroll: true })));
    } };
  }, [ne, C, m, a, W, v]), ie = p.useCallback(() => {
    var _a2, _b2, _c2;
    return w ?? ((_c2 = (_b2 = (_a2 = L == null ? void 0 : L.nodesRef.current.find((U) => U.id === F)) == null ? void 0 : _a2.context) == null ? void 0 : _b2.dataRef) == null ? void 0 : _c2.current.orientation);
  }, [F, L, w]), ee = ce((U) => {
    if (K.current = false, re.current = true, U.which === 229 || !ne.current && U.currentTarget === C.current) return;
    if (d && FB(U.key, b, h, O)) {
      Ya(U.key, ie()) || lt(U), n(false, ke(zl, U.nativeEvent)), rr(i.domReference) && (v ? L == null ? void 0 : L.events.emit("virtualfocus", i.domReference) : i.domReference.focus());
      return;
    }
    const G = B.current, q = Fl(a, x), Y = Ng(a, x);
    if (M || (U.key === "Home" && (lt(U), B.current = q, W(U)), U.key === "End" && (lt(U), B.current = Y, W(U))), O > 1) {
      const J = S || Array.from({ length: a.current.length }, () => ({ width: 1, height: 1 })), ge = kF(J, O, E), be = ge.findIndex((xe) => xe != null && !$i(a, xe, x)), ye = ge.reduce((xe, Ke, Ve) => Ke != null && !$i(a, Ke, x) ? Ve : xe, -1), et = ge[MF({ current: ge.map((xe) => xe != null ? a.current[xe] : null) }, { event: U, orientation: b, loopFocus: f, rtl: h, cols: O, disabledIndices: RF([...(typeof x != "function" ? x : null) || a.current.map((xe, Ke) => $i(a, Ke, x) ? Ke : void 0), void 0], ge), minIndex: be, maxIndex: ye, prevIndex: jF(B.current > Y ? q : B.current, J, ge, O, U.key === Pa ? "bl" : U.key === (h ? Gr : Xr) ? "tr" : "tl"), stopEvent: true })];
      if (et != null && (B.current = et, W(U)), b === "both") return;
    }
    if (Ya(U.key, b)) {
      if (lt(U), r && !v && qr(U.currentTarget.ownerDocument) === U.currentTarget) {
        B.current = ql(U.key, b, h) ? q : Y, W(U);
        return;
      }
      ql(U.key, b, h) ? f ? G >= Y ? c && G !== a.current.length ? B.current = -1 : (re.current = false, B.current = q) : B.current = st(a, { startingIndex: G, disabledIndices: x }) : B.current = Math.min(Y, st(a, { startingIndex: G, disabledIndices: x })) : f ? G <= q ? c && G !== -1 ? B.current = a.current.length : (re.current = false, B.current = Y) : B.current = st(a, { startingIndex: G, decrement: true, disabledIndices: x }) : B.current = Math.max(q, st(a, { startingIndex: G, decrement: true, disabledIndices: x })), Li(a, B.current) && (B.current = -1), W(U);
    }
  }), pe = p.useMemo(() => v && r && Z && { "aria-activedescendant": `${N}-${o}` }, [v, r, Z, N, o]), V = p.useMemo(() => ({ "aria-orientation": b === "both" ? void 0 : b, ...M ? {} : pe, onKeyDown(U) {
    if (U.key === "Tab" && U.shiftKey && r && !v) {
      lt(U), n(false, ke(es, U.nativeEvent)), rr(i.domReference) && i.domReference.focus();
      return;
    }
    ee(U);
  }, onPointerMove() {
    K.current = true;
  } }), [pe, ee, b, M, n, r, v, i.domReference]), z = p.useMemo(() => {
    function U(q) {
      g === "auto" && fO(q.nativeEvent) && ($.current = !v);
    }
    function G(q) {
      $.current = g, g === "auto" && dO(q.nativeEvent) && ($.current = true);
    }
    return { ...pe, onKeyDown(q) {
      K.current = false;
      const Y = q.key.startsWith("Arrow"), J = $B(q.key, ie(), h), ge = Ya(q.key, b), be = (d ? J : ge) || q.key === "Enter" || q.key.trim() === "";
      if (v && r) return ee(q);
      if (!(!r && !y && Y)) {
        if (be) {
          const ye = Ya(q.key, ie());
          D.current = d && ye ? null : q.key;
        }
        if (d) {
          J && (lt(q), r ? (B.current = Fl(a, oe.current), W(q)) : n(true, ke(zl, q.nativeEvent, q.currentTarget)));
          return;
        }
        ge && (l != null && (B.current = l), lt(q), !r && y ? n(true, ke(zl, q.nativeEvent, q.currentTarget)) : ee(q), r && W(q));
      }
    }, onFocus(q) {
      r && !v && (B.current = -1, W(q));
    }, onPointerDown: G, onPointerEnter: G, onMouseDown: U, onClick: U };
  }, [pe, ee, oe, g, a, d, W, n, r, y, b, ie, h, l, v]);
  return p.useMemo(() => s ? { reference: z, floating: V, item: _, trigger: z } : {}, [s, z, V, _]);
}
function zB(e3, t) {
  const { open: r, dataRef: n } = e3, { listRef: i, activeIndex: a, onMatch: o, onTypingChange: u, enabled: s = true, findMatch: l = null, resetMs: c = 750, ignoreKeys: f = qc, selectedIndex: d = null } = t, h = St(), v = p.useRef(""), g = p.useRef(d ?? a ?? -1), m = p.useRef(null);
  le(() => {
    r && (h.clear(), m.current = null, v.current = "");
  }, [r, h]), le(() => {
    r && v.current === "" && (g.current = d ?? a ?? -1);
  }, [r, d, a]);
  const y = ce((O) => {
    O ? n.current.typing || (n.current.typing = O, u == null ? void 0 : u(O)) : n.current.typing && (n.current.typing = O, u == null ? void 0 : u(O));
  }), x = ce((O) => {
    function P(R, C, F) {
      const L = l ? l(C, F) : C.find((M) => (M == null ? void 0 : M.toLocaleLowerCase().indexOf(F.toLocaleLowerCase())) === 0);
      return L ? R.indexOf(L) : -1;
    }
    const S = i.current;
    if (v.current.length > 0 && v.current[0] !== " " && (P(S, S, v.current) === -1 ? y(false) : O.key === " " && lt(O)), S == null || f.includes(O.key) || O.key.length !== 1 || O.ctrlKey || O.metaKey || O.altKey) return;
    r && O.key !== " " && (lt(O), y(true)), S.every((R) => {
      var _a2, _b2;
      return R ? ((_a2 = R[0]) == null ? void 0 : _a2.toLocaleLowerCase()) !== ((_b2 = R[1]) == null ? void 0 : _b2.toLocaleLowerCase()) : true;
    }) && v.current === O.key && (v.current = "", g.current = m.current), v.current += O.key, h.start(c, () => {
      v.current = "", g.current = m.current, y(false);
    });
    const N = g.current, k = P(S, [...S.slice((N || 0) + 1), ...S.slice(0, (N || 0) + 1)], v.current);
    k !== -1 ? (o == null ? void 0 : o(k), m.current = k) : O.key !== " " && (v.current = "", y(false));
  }), b = p.useMemo(() => ({ onKeyDown: x }), [x]), w = p.useMemo(() => ({ onKeyDown: x, onKeyUp(O) {
    O.key === " " && y(false);
  } }), [x, y]);
  return p.useMemo(() => s ? { reference: b, floating: w } : {}, [s, b, w]);
}
const MO = p.createContext(null), kO = p.createContext(null);
function dr() {
  const e3 = p.useContext(MO);
  if (e3 === null) throw new Error(nn(60));
  return e3;
}
function WB() {
  const e3 = p.useContext(kO);
  if (e3 === null) throw new Error(nn(61));
  return e3;
}
let Hg = (function(e3) {
  return e3.disabled = "data-disabled", e3.valid = "data-valid", e3.invalid = "data-invalid", e3.touched = "data-touched", e3.dirty = "data-dirty", e3.filled = "data-filled", e3.focused = "data-focused", e3;
})({});
const UB = { badInput: false, customError: false, patternMismatch: false, rangeOverflow: false, rangeUnderflow: false, stepMismatch: false, tooLong: false, tooShort: false, typeMismatch: false, valid: null, valueMissing: false }, qB = { valid(e3) {
  return e3 === null ? null : e3 ? { [Hg.valid]: "" } : { [Hg.invalid]: "" };
} }, KB = p.createContext({ invalid: void 0, name: void 0, validityData: { state: UB, errors: [], error: "", value: "", initialValue: null }, setValidityData: Rt, disabled: void 0, touched: false, setTouched: Rt, dirty: false, setDirty: Rt, filled: false, setFilled: Rt, focused: false, setFocused: Rt, validate: () => null, validationMode: "onSubmit", validationDebounceTime: 0, shouldValidateOnChange: () => false, state: { disabled: false, valid: null, touched: false, dirty: false, filled: false, focused: false }, markedDirtyRef: { current: false }, validation: { getValidationProps: (e3 = qt) => e3, getInputValidationProps: (e3 = qt) => e3, inputRef: { current: null }, commit: async () => {
} } });
function Bd(e3 = true) {
  const t = p.useContext(KB);
  if (t.setValidityData === Rt && !e3) throw new Error(nn(28));
  return t;
}
const VB = p.createContext({ controlId: void 0, setControlId: Rt, labelId: void 0, setLabelId: Rt, messageIds: [], setMessageIds: Rt, labelableControlRef: { current: null }, registerLabelableControlRef: null, getDescriptionProps: (e3) => e3 });
function zd() {
  return p.useContext(VB);
}
function HB(e3) {
  return Nd(e3, "base-ui");
}
function YB(e3 = {}) {
  const { id: t, implicit: r = false, controlRef: n } = e3, { controlId: i, setControlId: a } = zd(), o = HB(t);
  return le(() => {
    if (!(!r && !t || a === Rt)) {
      if (r) {
        const u = n == null ? void 0 : n.current;
        Bt(u) && u.closest("label") != null ? a(t ?? null) : a(i ?? o);
      } else t && a(t);
      return () => {
        t && a(void 0);
      };
    }
  }, [t, n, i, a, r, o]), i ?? o;
}
function Wd(e3, t = false, r = false) {
  const [n, i] = p.useState(e3 && t ? "idle" : void 0), [a, o] = p.useState(e3);
  return e3 && !a && (o(true), i("starting")), !e3 && a && n !== "ending" && !r && i("ending"), !e3 && !a && n === "ending" && i(void 0), le(() => {
    if (!e3 && a && n !== "ending" && r) {
      const u = tr.request(() => {
        i("ending");
      });
      return () => {
        tr.cancel(u);
      };
    }
  }, [e3, a, n, r]), le(() => {
    if (!e3 || t) return;
    const u = tr.request(() => {
      wr.flushSync(() => {
        i(void 0);
      });
    });
    return () => {
      tr.cancel(u);
    };
  }, [t, e3]), le(() => {
    if (!e3 || !t) return;
    e3 && a && n !== "idle" && i("starting");
    const u = tr.request(() => {
      i("idle");
    });
    return () => {
      tr.cancel(u);
    };
  }, [t, e3, a, i, n]), p.useMemo(() => ({ mounted: a, setMounted: o, transitionStatus: n }), [a, n]);
}
const GB = (e3, t) => Object.is(e3, t);
function ii(e3, t, r) {
  return e3 == null || t == null ? Object.is(e3, t) : r(e3, t);
}
function Kl(e3, t, r) {
  return !e3 || e3.length === 0 ? false : e3.some((n) => n === void 0 ? false : ii(n, t, r));
}
function Jc(e3, t, r) {
  return !e3 || e3.length === 0 ? -1 : e3.findIndex((n) => n === void 0 ? false : ii(n, t, r));
}
function XB(e3, t, r) {
  return e3.filter((n) => !ii(n, t, r));
}
function ef(e3) {
  if (e3 == null) return "";
  if (typeof e3 == "string") return e3;
  try {
    return JSON.stringify(e3);
  } catch {
    return String(e3);
  }
}
function ZB(e3) {
  return e3 != null && e3.length > 0 && typeof e3[0] == "object" && e3[0] != null && "items" in e3[0];
}
function ji(e3, t) {
  if (t && e3 != null) return t(e3) ?? "";
  if (e3 && typeof e3 == "object") {
    if ("label" in e3 && e3.label != null) return String(e3.label);
    if ("value" in e3) return String(e3.value);
  }
  return ef(e3);
}
function ao(e3, t) {
  return t && e3 != null ? t(e3) ?? "" : e3 && typeof e3 == "object" && "value" in e3 && "label" in e3 ? ef(e3.value) : ef(e3);
}
function QB(e3, t, r) {
  if (r && e3 != null) return r(e3);
  if (e3 && typeof e3 == "object" && "label" in e3 && e3.label != null) return e3.label;
  if (t && !Array.isArray(t)) return t[e3] ?? ji(e3, r);
  if (Array.isArray(t)) {
    const n = ZB(t) ? t.flatMap((i) => i.items) : t;
    if (e3 == null) {
      const i = n.find((a) => a.value == null);
      return i && i.label != null ? i.label : ji(e3, r);
    }
    if (typeof e3 != "object") {
      const i = n.find((a) => a && a.value === e3);
      return i && i.label != null ? i.label : ji(e3, r);
    }
    if ("value" in e3) {
      const i = n.find((a) => a && a.value === e3.value);
      if (i && i.label != null) return i.label;
    }
  }
  return ji(e3, r);
}
function JB(e3, t) {
  return !Array.isArray(e3) || e3.length === 0 ? "" : e3.map((r) => ji(r, t)).join(", ");
}
const de = { id: Pe((e3) => e3.id), modal: Pe((e3) => e3.modal), multiple: Pe((e3) => e3.multiple), items: Pe((e3) => e3.items), itemToStringLabel: Pe((e3) => e3.itemToStringLabel), itemToStringValue: Pe((e3) => e3.itemToStringValue), isItemEqualToValue: Pe((e3) => e3.isItemEqualToValue), value: Pe((e3) => e3.value), open: Pe((e3) => e3.open), mounted: Pe((e3) => e3.mounted), forceMount: Pe((e3) => e3.forceMount), transitionStatus: Pe((e3) => e3.transitionStatus), touchModality: Pe((e3) => e3.touchModality), activeIndex: Pe((e3) => e3.activeIndex), selectedIndex: Pe((e3) => e3.selectedIndex), isActive: Pe((e3, t) => e3.activeIndex === t), isSelected: Pe((e3, t, r) => {
  const n = e3.isItemEqualToValue, i = e3.value;
  return e3.multiple ? Array.isArray(i) && i.some((a) => ii(a, r, n)) : e3.selectedIndex === t && e3.selectedIndex !== null ? true : ii(i, r, n);
}), isSelectedByFocus: Pe((e3, t) => e3.selectedIndex === t), popupProps: Pe((e3) => e3.popupProps), triggerProps: Pe((e3) => e3.triggerProps), triggerElement: Pe((e3) => e3.triggerElement), positionerElement: Pe((e3) => e3.positionerElement), listElement: Pe((e3) => e3.listElement), scrollUpArrowVisible: Pe((e3) => e3.scrollUpArrowVisible), scrollDownArrowVisible: Pe((e3) => e3.scrollDownArrowVisible), hasScrollArrows: Pe((e3) => e3.hasScrollArrows), serializedValue: Pe((e3) => {
  const { multiple: t, value: r, itemToStringValue: n } = e3;
  return t && Array.isArray(r) && r.length === 0 ? "" : ao(r, n);
}) };
function ez(e3, t = false, r = true) {
  const n = Zu();
  return ce((i, a = null) => {
    n.cancel();
    const o = dn(e3);
    o != null && (typeof o.getAnimations != "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED ? i() : n.request(() => {
      function u() {
        o && Promise.all(o.getAnimations().map((s) => s.finished)).then(() => {
          a != null && a.aborted || wr.flushSync(i);
        }).catch(() => {
          if (r) {
            if (a != null && a.aborted) return;
            wr.flushSync(i);
          } else o.getAnimations().length > 0 && o.getAnimations().some((s) => s.pending || s.playState !== "finished") && u();
        });
      }
      t ? n.request(u) : u();
    }));
  });
}
function rs(e3) {
  const { enabled: t = true, open: r, ref: n, onComplete: i } = e3, a = ct(r), o = ce(i), u = ez(n, r);
  p.useEffect(() => {
    t && u(() => {
      r === a.current && o();
    });
  }, [t, r, o, u, a]);
}
const tz = p.createContext({ formRef: { current: { fields: /* @__PURE__ */ new Map() } }, errors: {}, clearErrors: Rt, validationMode: "onSubmit", submitAttemptedRef: { current: false } });
function jO() {
  return p.useContext(tz);
}
function rz(e3, t) {
  return { ...e3, state: { ...e3.state, valid: !t && e3.state.valid } };
}
function nz(e3) {
  const { enabled: t = true, value: r, id: n, name: i, controlRef: a, commit: o } = e3, { formRef: u } = jO(), { invalid: s, markedDirtyRef: l, validityData: c, setValidityData: f } = Bd(), d = ce(e3.getValue);
  le(() => {
    if (!t) return;
    let h = r;
    h === void 0 && (h = d()), c.initialValue === null && h !== null && f((v) => ({ ...v, initialValue: h }));
  }, [t, f, r, c.initialValue, d]), le(() => {
    !t || !n || u.current.fields.set(n, { getValue: d, name: i, controlRef: a, validityData: rz(c, s), validate() {
      let h = r;
      h === void 0 && (h = d()), l.current = true, wr.flushSync(() => o(h));
    } });
  }, [o, a, t, u, d, n, s, l, i, c, r]), le(() => {
    const h = u.current.fields;
    return () => {
      n && h.delete(n);
    };
  }, [u, n]);
}
function iz(e3, t) {
  const r = p.useRef(e3), n = ce(t);
  le(() => {
    r.current !== e3 && n(r.current);
  }, [e3, n]), le(() => {
    r.current = e3;
  }, [e3]);
}
function az(e3) {
  const { id: t, value: r, defaultValue: n = null, onValueChange: i, open: a, defaultOpen: o = false, onOpenChange: u, name: s, disabled: l = false, readOnly: c = false, required: f = false, modal: d = true, actionsRef: h, inputRef: v, onOpenChangeComplete: g, items: m, multiple: y = false, itemToStringLabel: x, itemToStringValue: b, isItemEqualToValue: w = GB, children: O } = e3, { clearErrors: P } = jO(), { setDirty: S, shouldValidateOnChange: E, validityData: N, setFilled: k, name: R, disabled: C, validation: F } = Bd(), { controlId: L } = zd(), M = YB({ id: t }), $ = C || l, B = R ?? s, [D, K] = jg({ controlled: r, default: y ? n ?? qc : n, name: "Select", state: "value" }), [W, fe] = jg({ controlled: a, default: o, name: "Select", state: "open" }), te = p.useRef([]), ae = p.useRef([]), re = p.useRef(null), X = p.useRef(null), oe = p.useRef(0), ne = p.useRef(null), A = p.useRef([]), j = p.useRef(false), I = p.useRef(false), Z = p.useRef(null), _ = p.useRef({ allowSelectedMouseUp: false, allowUnselectedMouseUp: false }), ie = p.useRef(false), { mounted: ee, setMounted: pe, transitionStatus: V } = Wd(W), z = Tr(() => new Ni({ id: M, modal: d, multiple: y, itemToStringLabel: x, itemToStringValue: b, isItemEqualToValue: w, value: D, open: W, mounted: ee, transitionStatus: V, items: m, forceMount: false, touchModality: false, activeIndex: null, selectedIndex: null, popupProps: {}, triggerProps: {}, triggerElement: null, positionerElement: null, listElement: null, scrollUpArrowVisible: false, scrollDownArrowVisible: false, hasScrollArrows: false })).current, U = he(z, de.activeIndex), G = he(z, de.selectedIndex), q = he(z, de.triggerElement), Y = he(z, de.positionerElement), J = p.useMemo(() => y && Array.isArray(D) && D.length === 0 ? "" : ao(D, b), [y, D, b]), ge = ct(z.state.triggerElement);
  nz({ id: M, commit: F.commit, value: D, controlRef: ge, name: B, getValue: () => D });
  const be = p.useRef(D);
  le(() => {
    D !== be.current && z.set("forceMount", true);
  }, [z, D]), le(() => {
    k(D !== null);
  }, [D, k]), le(function() {
    if (W) return;
    const _e = A.current;
    if (y) {
      const ot = Array.isArray(D) ? D : [];
      if (ot.length === 0) {
        z.set("selectedIndex", null);
        return;
      }
      const yt = ot[ot.length - 1], Fr = Jc(_e, yt, w);
      z.set("selectedIndex", Fr === -1 ? null : Fr);
      return;
    }
    const $e = Jc(_e, D, w);
    z.set("selectedIndex", $e === -1 ? null : $e);
  }, [y, W, D, A, w, z]), iz(D, () => {
    P(B), S(D !== N.initialValue), E() ? F.commit(D) : F.commit(D, true);
  });
  const ye = ce((ve, _e) => {
    if (u == null ? void 0 : u(ve, _e), !_e.isCanceled && (fe(ve), !ve && z.state.activeIndex !== null)) {
      const $e = te.current[z.state.activeIndex];
      queueMicrotask(() => {
        $e == null ? void 0 : $e.setAttribute("tabindex", "-1");
      });
    }
  }), et = ce(() => {
    pe(false), z.set("activeIndex", null), g == null ? void 0 : g(false);
  });
  rs({ enabled: !h, open: W, ref: re, onComplete() {
    W || et();
  } }), p.useImperativeHandle(h, () => ({ unmount: et }), [et]);
  const xe = ce((ve, _e) => {
    i == null ? void 0 : i(ve, _e), !_e.isCanceled && K(ve);
  }), Ke = ce(() => {
    const ve = z.state.listElement || re.current;
    if (!ve) return;
    const _e = ve.scrollTop, $e = ve.scrollTop + ve.clientHeight, ot = _e > 1, yt = $e < ve.scrollHeight - 1;
    z.state.scrollUpArrowVisible !== ot && z.set("scrollUpArrowVisible", ot), z.state.scrollDownArrowVisible !== yt && z.set("scrollDownArrowVisible", yt);
  }), Ve = _O({ open: W, onOpenChange: ye, elements: { reference: q, floating: Y } }), hr = MB(Ve, { enabled: !c && !$, event: "mousedown" }), Gt = RB(Ve, { bubbles: false }), Nr = BB(Ve, { enabled: !c && !$, listRef: te, activeIndex: U, selectedIndex: G, disabledIndices: qc, onNavigate(ve) {
    ve === null && !W || z.set("activeIndex", ve);
  }, focusItemOnHover: false }), _t = zB(Ve, { enabled: !c && !$ && (W || !y), listRef: ae, activeIndex: U, selectedIndex: G, onMatch(ve) {
    W ? z.set("activeIndex", ve) : xe(A.current[ve], ke("none"));
  }, onTypingChange(ve) {
    j.current = ve;
  } }), { getReferenceProps: Lr, getFloatingProps: Xt, getItemProps: $r } = NB([hr, Gt, Nr, _t]);
  pF(() => {
    z.update({ popupProps: Xt(), triggerProps: Lr() });
  }), le(() => {
    z.update({ id: M, modal: d, multiple: y, value: D, open: W, mounted: ee, transitionStatus: V, popupProps: Xt(), triggerProps: Lr(), items: m, itemToStringLabel: x, itemToStringValue: b, isItemEqualToValue: w });
  }, [z, M, d, y, D, W, ee, V, Xt, Lr, m, x, b, w]);
  const Ie = p.useMemo(() => ({ store: z, name: B, required: f, disabled: $, readOnly: c, multiple: y, itemToStringLabel: x, itemToStringValue: b, setValue: xe, setOpen: ye, listRef: te, popupRef: re, scrollHandlerRef: X, handleScrollArrowVisibility: Ke, scrollArrowsMountedCountRef: oe, getItemProps: $r, events: Ve.events, valueRef: ne, valuesRef: A, labelsRef: ae, typingRef: j, selectionRef: _, selectedItemTextRef: Z, validation: F, onOpenChangeComplete: g, keyboardActiveRef: I, alignItemWithTriggerActiveRef: ie, initialValueRef: be }), [z, B, f, $, c, y, x, b, xe, ye, $r, Ve.events, F, g, Ke]), He = ti(v, F.inputRef), dt = y && Array.isArray(D) && D.length > 0, tt = p.useMemo(() => !y || !Array.isArray(D) || !B ? null : D.map((ve) => {
    const _e = ao(ve, b);
    return H.jsx("input", { type: "hidden", name: B, value: _e }, _e);
  }), [y, D, B, b]);
  return H.jsx(MO.Provider, { value: Ie, children: H.jsxs(kO.Provider, { value: Ve, children: [O, H.jsx("input", { ...F.getInputValidationProps({ onFocus() {
    var _a2;
    (_a2 = z.state.triggerElement) == null ? void 0 : _a2.focus();
  }, onChange(ve) {
    if (ve.nativeEvent.defaultPrevented) return;
    const _e = ve.target.value, $e = ke(Ld, ve.nativeEvent);
    function ot() {
      if (y) return;
      const yt = A.current.find((Fr) => ao(Fr, b).toLowerCase() === _e.toLowerCase());
      yt != null && (S(yt !== N.initialValue), xe(yt, $e), E() && F.commit(yt));
    }
    z.set("forceMount", true), queueMicrotask(ot);
  } }), id: t || L || void 0, name: y ? void 0 : B, value: J, disabled: $, required: f && !dt, readOnly: c, ref: He, style: Xu, tabIndex: -1, "aria-hidden": true }), tt] }) });
}
let ou = (function(e3) {
  return e3.startingStyle = "data-starting-style", e3.endingStyle = "data-ending-style", e3;
})({});
const oz = { [ou.startingStyle]: "" }, uz = { [ou.endingStyle]: "" }, RO = { transitionStatus(e3) {
  return e3 === "starting" ? oz : e3 === "ending" ? uz : null;
} };
let Ud = (function(e3) {
  return e3.open = "data-open", e3.closed = "data-closed", e3[e3.startingStyle = ou.startingStyle] = "startingStyle", e3[e3.endingStyle = ou.endingStyle] = "endingStyle", e3.anchorHidden = "data-anchor-hidden", e3;
})({}), tf = (function(e3) {
  return e3.popupOpen = "data-popup-open", e3.pressed = "data-pressed", e3;
})({});
const sz = { [tf.popupOpen]: "" }, lz = { [tf.popupOpen]: "", [tf.pressed]: "" }, cz = { [Ud.open]: "" }, fz = { [Ud.closed]: "" }, dz = { [Ud.anchorHidden]: "" }, hz = { open(e3) {
  return e3 ? sz : null;
} }, pz = { open(e3) {
  return e3 ? lz : null;
} }, DO = { open(e3) {
  return e3 ? cz : fz;
}, anchorHidden(e3) {
  return e3 ? dz : null;
} };
function vz(e3) {
  const t = e3.getBoundingClientRect(), r = window.getComputedStyle(e3, "::before"), n = window.getComputedStyle(e3, "::after");
  if (!(r.content !== "none" || n.content !== "none")) return t;
  const a = parseFloat(r.width) || 0, o = parseFloat(r.height) || 0, u = parseFloat(n.width) || 0, s = parseFloat(n.height) || 0, l = Math.max(t.width, a, u), c = Math.max(t.height, o, s), f = l - t.width, d = c - t.height;
  return { left: t.left - f / 2, right: t.right + f / 2, top: t.top - d / 2, bottom: t.bottom + d / 2 };
}
const mz = p.createContext(void 0);
function gz(e3 = false) {
  const t = p.useContext(mz);
  if (t === void 0 && !e3) throw new Error(nn(16));
  return t;
}
function yz(e3) {
  const { focusableWhenDisabled: t, disabled: r, composite: n = false, tabIndex: i = 0, isNativeButton: a } = e3, o = n && t !== false, u = n && t === false;
  return { props: p.useMemo(() => {
    const l = { onKeyDown(c) {
      r && t && c.key !== "Tab" && c.preventDefault();
    } };
    return n || (l.tabIndex = i, !a && r && (l.tabIndex = t ? i : -1)), (a && (t || o) || !a && r) && (l["aria-disabled"] = r), a && (!t || u) && (l.disabled = r), l;
  }, [n, r, t, o, u, a, i]) };
}
function NO(e3 = {}) {
  const { disabled: t = false, focusableWhenDisabled: r, tabIndex: n = 0, native: i = true } = e3, a = p.useRef(null), o = gz(true) !== void 0, u = ce(() => {
    const d = a.current;
    return !!((d == null ? void 0 : d.tagName) === "A" && (d == null ? void 0 : d.href));
  }), { props: s } = yz({ focusableWhenDisabled: r, disabled: t, composite: o, tabIndex: n, isNativeButton: i }), l = p.useCallback(() => {
    const d = a.current;
    bz(d) && o && t && s.disabled === void 0 && d.disabled && (d.disabled = false);
  }, [t, s.disabled, o]);
  le(l, [l]);
  const c = p.useCallback((d = {}) => {
    const { onClick: h, onMouseDown: v, onKeyUp: g, onKeyDown: m, onPointerDown: y, ...x } = d;
    return $d({ type: i ? "button" : void 0, onClick(w) {
      if (t) {
        w.preventDefault();
        return;
      }
      h == null ? void 0 : h(w);
    }, onMouseDown(w) {
      t || (v == null ? void 0 : v(w));
    }, onKeyDown(w) {
      if (t || (Qc(w), m == null ? void 0 : m(w)), w.baseUIHandlerPrevented) return;
      const O = w.target === w.currentTarget && !i && !u() && !t, P = w.key === "Enter", S = w.key === " ";
      O && ((S || P) && w.preventDefault(), P && (h == null ? void 0 : h(w)));
    }, onKeyUp(w) {
      t || (Qc(w), g == null ? void 0 : g(w)), !w.baseUIHandlerPrevented && w.target === w.currentTarget && !i && !t && w.key === " " && (h == null ? void 0 : h(w));
    }, onPointerDown(w) {
      if (t) {
        w.preventDefault();
        return;
      }
      y == null ? void 0 : y(w);
    } }, i ? void 0 : { role: "button" }, s, x);
  }, [t, s, i, u]), f = ce((d) => {
    a.current = d, l();
  });
  return { getButtonProps: c, buttonRef: f };
}
function bz(e3) {
  return rr(e3) && e3.tagName === "BUTTON";
}
const Ga = 2, wz = { ...pz, ...qB, value: () => null }, xz = p.forwardRef(function(t, r) {
  const { render: n, className: i, disabled: a = false, nativeButton: o = true, ...u } = t, { setTouched: s, setFocused: l, validationMode: c, state: f, disabled: d } = Bd(), { labelId: h } = zd(), { store: v, setOpen: g, selectionRef: m, validation: y, readOnly: x, alignItemWithTriggerActiveRef: b, disabled: w, keyboardActiveRef: O } = dr(), P = d || w || a, S = he(v, de.open), E = he(v, de.value), N = he(v, de.triggerProps), k = he(v, de.positionerElement), R = he(v, de.listElement), C = he(v, de.serializedValue), F = ct(k), L = p.useRef(null), M = St(), $ = St(), { getButtonProps: B, buttonRef: D } = NO({ disabled: P, native: o }), K = ce((oe) => {
    v.set("triggerElement", oe);
  }), W = ti(r, L, D, K), fe = St(), te = St();
  p.useEffect(() => {
    if (S) return te.start(200, () => {
      m.current.allowUnselectedMouseUp = true, fe.start(200, () => {
        m.current.allowSelectedMouseUp = true;
      });
    }), () => {
      fe.clear(), te.clear();
    };
    m.current = { allowSelectedMouseUp: false, allowUnselectedMouseUp: false }, $.clear();
  }, [S, m, $, fe, te]);
  const ae = p.useMemo(() => {
    var _a2;
    return (R == null ? void 0 : R.id) ?? ((_a2 = eu(k)) == null ? void 0 : _a2.id);
  }, [R, k]), re = $d(N, { role: "combobox", "aria-expanded": S ? "true" : "false", "aria-haspopup": "listbox", "aria-controls": S ? ae : void 0, "aria-labelledby": h, "aria-readonly": x || void 0, tabIndex: P ? -1 : 0, ref: W, onFocus(oe) {
    l(true), S && b.current && g(false, ke(es, oe.nativeEvent)), M.start(0, () => {
      v.set("forceMount", true);
    });
  }, onBlur() {
    s(true), l(false), c === "onBlur" && y.commit(E);
  }, onPointerMove({ pointerType: oe }) {
    O.current = false, v.set("touchModality", oe === "touch");
  }, onPointerDown({ pointerType: oe }) {
    v.set("touchModality", oe === "touch");
  }, onKeyDown() {
    O.current = true;
  }, onMouseDown(oe) {
    if (S) return;
    const ne = Jr(oe.currentTarget);
    function A(j) {
      if (!L.current) return;
      const I = j.target;
      if (ze(L.current, I) || ze(F.current, I) || I === L.current) return;
      const Z = vz(L.current);
      j.clientX >= Z.left - Ga && j.clientX <= Z.right + Ga && j.clientY >= Z.top - Ga && j.clientY <= Z.bottom + Ga || g(false, ke(uB, j));
    }
    $.start(0, () => {
      ne.addEventListener("mouseup", A, { once: true });
    });
  } }, y.getValidationProps, u, B);
  re.role = "combobox";
  const X = p.useMemo(() => ({ ...f, open: S, disabled: P, value: E, readOnly: x, placeholder: !C }), [f, S, P, E, x, C]);
  return Yt("button", t, { ref: [r, L], state: X, stateAttributesMapping: wz, props: re });
}), Oz = { value: () => null }, Pz = p.forwardRef(function(t, r) {
  const { className: n, render: i, children: a, ...o } = t, { store: u, valueRef: s } = dr(), l = he(u, de.value), c = he(u, de.items), f = he(u, de.itemToStringLabel), d = he(u, de.serializedValue), h = p.useMemo(() => ({ value: l, placeholder: !d }), [l, d]), v = typeof a == "function" ? a(l) : a ?? (Array.isArray(l) ? JB(l, f) : QB(l, c, f));
  return Yt("span", t, { state: h, ref: [r, s], props: [{ children: v }, o], stateAttributesMapping: Oz });
}), Sz = p.forwardRef(function(t, r) {
  const { className: n, render: i, ...a } = t, { store: o } = dr(), u = he(o, de.open), s = p.useMemo(() => ({ open: u }), [u]);
  return Yt("span", t, { state: s, ref: r, props: [{ "aria-hidden": true, children: "\u25BC" }, a], stateAttributesMapping: hz });
}), Ez = p.createContext(void 0), Az = p.forwardRef(function(t, r) {
  const { store: n } = dr(), i = he(n, de.mounted), a = he(n, de.forceMount);
  return i || a ? H.jsx(Ez.Provider, { value: true, children: H.jsx(AB, { ref: r, ...t }) }) : null;
}), Cz = parseInt(p.version, 10);
function Tz(e3) {
  return Cz >= e3;
}
function Iz(e3) {
  return Tz(19) ? e3 : e3 ? "true" : void 0;
}
let Yg = {}, Gg = {}, Xg = "";
function _z(e3) {
  if (typeof document > "u") return false;
  const t = Jr(e3);
  return Hn(t).innerWidth - t.documentElement.clientWidth > 0;
}
function Mz(e3) {
  const t = Jr(e3), r = t.documentElement, n = t.body, i = ny(r) ? r : n, a = i.style.overflow;
  return i.style.overflow = "hidden", () => {
    i.style.overflow = a;
  };
}
function kz(e3) {
  var _a2, _b2;
  const t = Jr(e3), r = t.documentElement, n = t.body, i = Hn(r);
  let a = 0, o = 0;
  const u = tr.create(), s = typeof CSS < "u" && ((_a2 = CSS.supports) == null ? void 0 : _a2.call(CSS, "scrollbar-gutter", "stable"));
  if (uO && (((_b2 = i.visualViewport) == null ? void 0 : _b2.scale) ?? 1) !== 1) return () => {
  };
  function l() {
    const d = i.getComputedStyle(r), h = i.getComputedStyle(n), m = (d.scrollbarGutter || "").includes("both-edges") ? "stable both-edges" : "stable";
    a = r.scrollTop, o = r.scrollLeft, Yg = { scrollbarGutter: r.style.scrollbarGutter, overflowY: r.style.overflowY, overflowX: r.style.overflowX }, Xg = r.style.scrollBehavior, Gg = { position: n.style.position, height: n.style.height, width: n.style.width, boxSizing: n.style.boxSizing, overflowY: n.style.overflowY, overflowX: n.style.overflowX, scrollBehavior: n.style.scrollBehavior };
    const y = r.scrollHeight > r.clientHeight, x = r.scrollWidth > r.clientWidth, b = d.overflowY === "scroll" || h.overflowY === "scroll", w = d.overflowX === "scroll" || h.overflowX === "scroll", O = Math.max(0, i.innerWidth - r.clientWidth), P = Math.max(0, i.innerHeight - r.clientHeight), S = parseFloat(h.marginTop) + parseFloat(h.marginBottom), E = parseFloat(h.marginLeft) + parseFloat(h.marginRight), N = ny(r) ? r : n;
    if (s) {
      r.style.scrollbarGutter = m, N.style.overflowY = "hidden", N.style.overflowX = "hidden";
      return;
    }
    Object.assign(r.style, { scrollbarGutter: m, overflowY: "hidden", overflowX: "hidden" }), (y || b) && (r.style.overflowY = "scroll"), (x || w) && (r.style.overflowX = "scroll"), Object.assign(n.style, { position: "relative", height: S || P ? `calc(100dvh - ${S + P}px)` : "100dvh", width: E || O ? `calc(100vw - ${E + O}px)` : "100vw", boxSizing: "border-box", overflow: "hidden", scrollBehavior: "unset" }), n.scrollTop = a, n.scrollLeft = o, r.setAttribute("data-base-ui-scroll-locked", ""), r.style.scrollBehavior = "unset";
  }
  function c() {
    Object.assign(r.style, Yg), Object.assign(n.style, Gg), s || (r.scrollTop = a, r.scrollLeft = o, r.removeAttribute("data-base-ui-scroll-locked"), r.style.scrollBehavior = Xg);
  }
  function f() {
    c(), u.request(l);
  }
  return l(), i.addEventListener("resize", f), () => {
    u.cancel(), c(), i.removeEventListener && i.removeEventListener("resize", f);
  };
}
class jz {
  constructor() {
    __publicField(this, "lockCount", 0);
    __publicField(this, "restore", null);
    __publicField(this, "timeoutLock", ri.create());
    __publicField(this, "timeoutUnlock", ri.create());
    __publicField(this, "release", () => {
      this.lockCount -= 1, this.lockCount === 0 && this.restore && this.timeoutUnlock.start(0, this.unlock);
    });
    __publicField(this, "unlock", () => {
      var _a2;
      this.lockCount === 0 && this.restore && ((_a2 = this.restore) == null ? void 0 : _a2.call(this), this.restore = null);
    });
  }
  acquire(t) {
    return this.lockCount += 1, this.lockCount === 1 && this.restore === null && this.timeoutLock.start(0, () => this.lock(t)), this.release;
  }
  lock(t) {
    if (this.lockCount === 0 || this.restore !== null) return;
    const n = Jr(t).documentElement, i = Hn(n).getComputedStyle(n).overflowY;
    if (i === "hidden" || i === "clip") {
      this.restore = Rt;
      return;
    }
    const a = OF || !_z(t);
    this.restore = a ? Mz(t) : kz(t);
  }
}
const Rz = new jz();
function Dz(e3 = true, t = null) {
  le(() => {
    if (e3) return Rz.acquire(t);
  }, [e3, t]);
}
const LO = p.createContext({ register: () => {
}, unregister: () => {
}, subscribeMapChange: () => () => {
}, elementsRef: { current: [] }, nextIndexRef: { current: 0 } });
function Nz() {
  return p.useContext(LO);
}
function Lz(e3) {
  const { children: t, elementsRef: r, labelsRef: n, onMapChange: i } = e3, a = ce(i), o = p.useRef(0), u = Tr(Fz).current, s = Tr($z).current, [l, c] = p.useState(0), f = p.useRef(l), d = ce((y, x) => {
    s.set(y, x ?? null), f.current += 1, c(f.current);
  }), h = ce((y) => {
    s.delete(y), f.current += 1, c(f.current);
  }), v = p.useMemo(() => {
    const y = /* @__PURE__ */ new Map();
    return Array.from(s.keys()).sort(Bz).forEach((b, w) => {
      const O = s.get(b) ?? {};
      y.set(b, { ...O, index: w });
    }), y;
  }, [s, l]);
  le(() => {
    if (typeof MutationObserver != "function" || v.size === 0) return;
    const y = new MutationObserver((x) => {
      const b = /* @__PURE__ */ new Set(), w = (O) => b.has(O) ? b.delete(O) : b.add(O);
      x.forEach((O) => {
        O.removedNodes.forEach(w), O.addedNodes.forEach(w);
      }), b.size === 0 && (f.current += 1, c(f.current));
    });
    return v.forEach((x, b) => {
      b.parentElement && y.observe(b.parentElement, { childList: true });
    }), () => {
      y.disconnect();
    };
  }, [v]), le(() => {
    f.current === l && (r.current.length !== v.size && (r.current.length = v.size), n && n.current.length !== v.size && (n.current.length = v.size), o.current = v.size), a(v);
  }, [a, v, r, n, l]), le(() => () => {
    r.current = [];
  }, [r]), le(() => () => {
    n && (n.current = []);
  }, [n]);
  const g = ce((y) => (u.add(y), () => {
    u.delete(y);
  }));
  le(() => {
    u.forEach((y) => y(v));
  }, [u, v]);
  const m = p.useMemo(() => ({ register: d, unregister: h, subscribeMapChange: g, elementsRef: r, labelsRef: n, nextIndexRef: o }), [d, h, g, r, n, o]);
  return H.jsx(LO.Provider, { value: m, children: t });
}
function $z() {
  return /* @__PURE__ */ new Map();
}
function Fz() {
  return /* @__PURE__ */ new Set();
}
function Bz(e3, t) {
  const r = e3.compareDocumentPosition(t);
  return r & Node.DOCUMENT_POSITION_FOLLOWING || r & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING || r & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
const zz = p.createContext(void 0);
function Wz() {
  var _a2;
  return ((_a2 = p.useContext(zz)) == null ? void 0 : _a2.direction) ?? "ltr";
}
const Uz = (e3) => ({ name: "arrow", options: e3, async fn(t) {
  var _a2, _b2;
  const { x: r, y: n, placement: i, rects: a, platform: o, elements: u, middlewareData: s } = t, { element: l, padding: c = 0, offsetParent: f = "real" } = cP(e3, t) || {};
  if (l == null) return {};
  const d = fP(c), h = { x: r, y: n }, v = dP(i), g = pP(v), m = await o.getDimensions(l), y = v === "y", x = y ? "top" : "left", b = y ? "bottom" : "right", w = y ? "clientHeight" : "clientWidth", O = a.reference[g] + a.reference[v] - h[v] - a.floating[g], P = h[v] - a.reference[v], S = f === "real" ? await ((_a2 = o.getOffsetParent) == null ? void 0 : _a2.call(o, l)) : u.floating;
  let E = u.floating[w] || a.floating[g];
  (!E || !await ((_b2 = o.isElement) == null ? void 0 : _b2.call(o, S))) && (E = u.floating[w] || a.floating[g]);
  const N = O / 2 - P / 2, k = E / 2 - m[g] / 2 - 1, R = Math.min(d[x], k), C = Math.min(d[b], k), F = R, L = E - m[g] - C, M = E / 2 - m[g] / 2 + N, $ = hP(F, M, L), B = !s.arrow && uf(i) != null && M !== $ && a.reference[g] / 2 - (M < F ? R : C) - m[g] / 2 < 0, D = B ? M < F ? M - F : M - L : 0;
  return { [v]: h[v] + D, data: { [v]: $, centerOffset: M - $ - D, ...B && { alignmentOffset: D } }, reset: B };
} }), qz = (e3, t) => ({ ...Uz(e3), options: [e3, t] });
function $O(e3, t, r) {
  const n = e3 === "inline-start" || e3 === "inline-end";
  return { top: "top", right: n ? r ? "inline-start" : "inline-end" : "right", bottom: "bottom", left: n ? r ? "inline-end" : "inline-start" : "left" }[t];
}
function Zg(e3, t, r) {
  const { rects: n, placement: i } = e3;
  return { side: $O(t, Qa(i), r), align: uf(i) || "center", anchor: { width: n.reference.width, height: n.reference.height }, positioner: { width: n.floating.width, height: n.floating.height } };
}
function Kz(e3) {
  var _a2, _b2;
  const { anchor: t, positionMethod: r = "absolute", side: n = "bottom", sideOffset: i = 0, align: a = "center", alignOffset: o = 0, collisionBoundary: u, collisionPadding: s = 5, sticky: l = false, arrowPadding: c = 5, disableAnchorTracking: f = false, keepMounted: d = false, floatingRootContext: h, mounted: v, collisionAvoidance: g, shiftCrossAxis: m = false, nodeId: y, adaptiveOrigin: x, lazyFlip: b = false, externalTree: w } = e3, [O, P] = p.useState(null);
  !v && O !== null && P(null);
  const S = g.side || "flip", E = g.align || "flip", N = g.fallbackAxisSide || "end", k = typeof t == "function" ? t : void 0, R = ce(k), C = k ? R : t, F = ct(t), M = Wz() === "rtl", $ = O || { top: "top", right: "right", bottom: "bottom", left: "left", "inline-end": M ? "left" : "right", "inline-start": M ? "right" : "left" }[n], B = a === "center" ? $ : `${$}-${a}`;
  let D = s;
  const K = 1, W = n === "bottom" ? K : 0, fe = n === "top" ? K : 0, te = n === "right" ? K : 0, ae = n === "left" ? K : 0;
  typeof D == "number" ? D = { top: D + W, right: D + ae, bottom: D + fe, left: D + te } : D && (D = { top: (D.top || 0) + W, right: (D.right || 0) + ae, bottom: (D.bottom || 0) + fe, left: (D.left || 0) + te });
  const re = { boundary: u === "clipping-ancestors" ? "clippingAncestors" : u, padding: D }, X = p.useRef(null), oe = ct(i), ne = ct(o), I = [mP((Ie) => {
    const He = Zg(Ie, n, M), dt = typeof oe.current == "function" ? oe.current(He) : oe.current, tt = typeof ne.current == "function" ? ne.current(He) : ne.current;
    return { mainAxis: dt, crossAxis: tt, alignmentAxis: tt };
  }, [typeof i != "function" ? i : 0, typeof o != "function" ? o : 0, M, n])], Z = E === "none" && S !== "shift", _ = !Z && (l || m || S === "shift"), ie = S === "none" ? null : vP({ ...re, padding: { top: D.top + K, right: D.right + K, bottom: D.bottom + K, left: D.left + K }, mainAxis: !m && S === "flip", crossAxis: E === "flip" ? "alignment" : false, fallbackAxisSideDirection: N }), ee = Z ? null : bP((Ie) => {
    const He = Jr(Ie.elements.floating).documentElement;
    return { ...re, rootBoundary: m ? { x: 0, y: 0, width: He.clientWidth, height: He.clientHeight } : void 0, mainAxis: E !== "none", crossAxis: _, limiter: l || m ? void 0 : wP((dt) => {
      if (!X.current) return {};
      const { width: tt, height: ve } = X.current.getBoundingClientRect(), _e = Yd(Qa(dt.placement)), $e = _e === "y" ? tt : ve, ot = _e === "y" ? D.left + D.right : D.top + D.bottom;
      return { offset: $e / 2 + ot / 2 };
    }) };
  }, [re, l, m, D, E]);
  S === "shift" || E === "shift" || a === "center" ? I.push(ee, ie) : I.push(ie, ee), I.push(gP({ ...re, apply({ elements: { floating: Ie }, rects: { reference: He }, availableWidth: dt, availableHeight: tt }) {
    Object.entries({ "--available-width": `${dt}px`, "--available-height": `${tt}px`, "--anchor-width": `${He.width}px`, "--anchor-height": `${He.height}px` }).forEach(([ve, _e]) => {
      Ie.style.setProperty(ve, _e);
    });
  } }), qz(() => ({ element: X.current || document.createElement("div"), padding: c, offsetParent: "floating" }), [c]), yP(), { name: "transformOrigin", fn(Ie) {
    var _a3, _b3, _c2;
    const { elements: He, middlewareData: dt, placement: tt, rects: ve, y: _e } = Ie, $e = Qa(tt), ot = Yd($e), yt = X.current, Fr = ((_a3 = dt.arrow) == null ? void 0 : _a3.x) || 0, Ea = ((_b3 = dt.arrow) == null ? void 0 : _b3.y) || 0, ns = (yt == null ? void 0 : yt.clientWidth) || 0, QO = (yt == null ? void 0 : yt.clientHeight) || 0, is = Fr + ns / 2, Vd = Ea + QO / 2, JO = Math.abs(((_c2 = dt.shift) == null ? void 0 : _c2.y) || 0), eP = ve.reference.height / 2, mi = typeof i == "function" ? i(Zg(Ie, n, M)) : i, tP = JO > mi, rP = { top: `${is}px calc(100% + ${mi}px)`, bottom: `${is}px ${-mi}px`, left: `calc(100% + ${mi}px) ${Vd}px`, right: `${-mi}px ${Vd}px` }[$e], nP = `${is}px ${ve.reference.y + eP - _e}px`;
    return He.floating.style.setProperty("--transform-origin", _ && ot === "y" && tP ? nP : rP), {};
  } }, x);
  let pe = h;
  !v && h && (pe = { ...h, elements: { reference: null, floating: null, domReference: null } });
  const V = p.useMemo(() => ({ elementResize: !f && typeof ResizeObserver < "u", layoutShift: !f && typeof IntersectionObserver < "u" }), [f]), { refs: z, elements: U, x: G, y: q, middlewareData: Y, update: J, placement: ge, context: be, isPositioned: ye, floatingStyles: et } = DB({ rootContext: pe, placement: B, middleware: I, strategy: r, whileElementsMounted: d ? void 0 : (...Ie) => Gd(...Ie, V), nodeId: y, externalTree: w }), { sideX: xe, sideY: Ke } = Y.adaptiveOrigin || {}, Ve = p.useMemo(() => x ? { position: r, [xe]: `${G}px`, [Ke]: `${q}px` } : et, [x, xe, Ke, r, G, q, et]), hr = p.useRef(null);
  le(() => {
    if (!v) return;
    const Ie = F.current, He = typeof Ie == "function" ? Ie() : Ie, tt = (Qg(He) ? He.current : He) || null || null;
    tt !== hr.current && (z.setPositionReference(tt), hr.current = tt);
  }, [v, z, C, F]), p.useEffect(() => {
    if (!v) return;
    const Ie = F.current;
    typeof Ie != "function" && Qg(Ie) && Ie.current !== hr.current && (z.setPositionReference(Ie.current), hr.current = Ie.current);
  }, [v, z, C, F]), p.useEffect(() => {
    if (d && v && U.domReference && U.floating) return Gd(U.domReference, U.floating, J, V);
  }, [d, v, U, J, V]);
  const Gt = Qa(ge), Nr = $O(n, Gt, M), _t = uf(ge) || "center", Lr = !!((_a2 = Y.hide) == null ? void 0 : _a2.referenceHidden);
  le(() => {
    b && v && ye && P(Gt);
  }, [b, v, ye, Gt]);
  const Xt = p.useMemo(() => {
    var _a3, _b3;
    return { position: "absolute", top: (_a3 = Y.arrow) == null ? void 0 : _a3.y, left: (_b3 = Y.arrow) == null ? void 0 : _b3.x };
  }, [Y.arrow]), $r = ((_b2 = Y.arrow) == null ? void 0 : _b2.centerOffset) !== 0;
  return p.useMemo(() => ({ positionerStyles: Ve, arrowStyles: Xt, arrowRef: X, arrowUncentered: $r, side: Nr, align: _t, physicalSide: Gt, anchorHidden: Lr, refs: z, context: be, isPositioned: ye, update: J }), [Ve, Xt, X, $r, Nr, _t, Gt, Lr, z, be, ye, J]);
}
function Qg(e3) {
  return e3 != null && "current" in e3;
}
const FO = p.createContext(void 0);
function qd() {
  const e3 = p.useContext(FO);
  if (!e3) throw new Error(nn(59));
  return e3;
}
const Vz = p.forwardRef(function(t, r) {
  const { cutout: n, ...i } = t;
  let a;
  if (n) {
    const o = n == null ? void 0 : n.getBoundingClientRect();
    a = `polygon(
      0% 0%,
      100% 0%,
      100% 100%,
      0% 100%,
      0% 0%,
      ${o.left}px ${o.top}px,
      ${o.left}px ${o.bottom}px,
      ${o.right}px ${o.bottom}px,
      ${o.right}px ${o.top}px,
      ${o.left}px ${o.top}px
    )`;
  }
  return H.jsx("div", { ref: r, role: "presentation", "data-base-ui-inert": "", ...i, style: { position: "fixed", inset: 0, userSelect: "none", WebkitUserSelect: "none", clipPath: a } });
});
function uu(e3, t) {
  e3 && Object.assign(e3.style, t);
}
const BO = { position: "relative", maxHeight: "100%", overflowX: "hidden", overflowY: "auto" }, Hz = { position: "fixed" }, Yz = p.forwardRef(function(t, r) {
  const { anchor: n, positionMethod: i = "absolute", className: a, render: o, side: u = "bottom", align: s = "center", sideOffset: l = 0, alignOffset: c = 0, collisionBoundary: f = "clipping-ancestors", collisionPadding: d, arrowPadding: h = 5, sticky: v = false, disableAnchorTracking: g, alignItemWithTrigger: m = true, collisionAvoidance: y = iB, ...x } = t, { store: b, listRef: w, labelsRef: O, alignItemWithTriggerActiveRef: P, selectedItemTextRef: S, valuesRef: E, initialValueRef: N, popupRef: k, setValue: R } = dr(), C = WB(), F = he(b, de.open), L = he(b, de.mounted), M = he(b, de.modal), $ = he(b, de.value), B = he(b, de.touchModality), D = he(b, de.positionerElement), K = he(b, de.triggerElement), W = he(b, de.isItemEqualToValue), fe = p.useRef(null), te = p.useRef(null), [ae, re] = p.useState(m), X = L && ae && !B;
  !L && ae !== m && re(m), le(() => {
    L || (de.scrollUpArrowVisible(b.state) && b.set("scrollUpArrowVisible", false), de.scrollDownArrowVisible(b.state) && b.set("scrollDownArrowVisible", false));
  }, [b, L]), p.useImperativeHandle(P, () => X), Dz((X || M) && F && !B, K);
  const oe = Kz({ anchor: n, floatingRootContext: C, positionMethod: i, mounted: L, side: u, sideOffset: l, align: s, alignOffset: c, arrowPadding: h, collisionBoundary: f, collisionPadding: d, sticky: v, disableAnchorTracking: g ?? X, collisionAvoidance: y, keepMounted: true }), ne = X ? "none" : oe.side, A = X ? Hz : oe.positionerStyles, j = p.useMemo(() => {
    const V = {};
    return F || (V.pointerEvents = "none"), { role: "presentation", hidden: !L, style: { ...A, ...V } };
  }, [F, L, A]), I = p.useMemo(() => ({ open: F, side: ne, align: oe.align, anchorHidden: oe.anchorHidden }), [F, ne, oe.align, oe.anchorHidden]), Z = ce((V) => {
    b.set("positionerElement", V);
  }), _ = Yt("div", t, { ref: [r, Z], state: I, stateAttributesMapping: DO, props: [j, x] }), ie = p.useRef(0), ee = ce((V) => {
    if (V.size === 0 && ie.current === 0 || E.current.length === 0) return;
    const z = ie.current;
    if (ie.current = V.size, V.size === z) return;
    const U = ke(Ld);
    if (z !== 0 && !b.state.multiple && $ !== null && Jc(E.current, $, W) === -1) {
      const q = N.current, J = q != null && Kl(E.current, q, W) ? q : null;
      R(J, U), J === null && (b.set("selectedIndex", null), S.current = null);
    }
    if (z !== 0 && b.state.multiple && Array.isArray($)) {
      const G = $.filter((q) => Kl(E.current, q, W));
      (G.length !== $.length || G.some((q) => !Kl($, q, W))) && (R(G, U), G.length === 0 && (b.set("selectedIndex", null), S.current = null));
    }
    if (F && X) {
      b.update({ scrollUpArrowVisible: false, scrollDownArrowVisible: false });
      const G = { height: "" };
      uu(D, G), uu(k.current, G);
    }
  }), pe = p.useMemo(() => ({ ...oe, side: ne, alignItemWithTriggerActive: X, setControlledAlignItemWithTrigger: re, scrollUpArrowRef: fe, scrollDownArrowRef: te }), [oe, ne, X, re]);
  return H.jsx(Lz, { elementsRef: w, labelsRef: O, onMapChange: ee, children: H.jsxs(FO.Provider, { value: pe, children: [L && M && H.jsx(Vz, { inert: Iz(!F), cutout: K }), _] }) });
});
function zO(e3) {
  const t = e3.currentTarget.getBoundingClientRect();
  return t.top + 1 <= e3.clientY && e3.clientY <= t.bottom - 1 && t.left + 1 <= e3.clientX && e3.clientX <= t.right - 1;
}
const Xa = "base-ui-disable-scrollbar", rf = { className: Xa, element: H.jsx("style", { href: Xa, precedence: "base-ui:low", children: `.${Xa}{scrollbar-width:none}.${Xa}::-webkit-scrollbar{display:none}` }) }, Gz = p.createContext(void 0);
function Xz(e3) {
  return p.useContext(Gz);
}
const WO = "ArrowUp", UO = "ArrowDown", qO = "ArrowLeft", KO = "ArrowRight", VO = "Home", HO = "End", Zz = /* @__PURE__ */ new Set([qO, KO]), Qz = /* @__PURE__ */ new Set([WO, UO]), Jz = /* @__PURE__ */ new Set([...Zz, ...Qz]);
[...Jz];
const eW = /* @__PURE__ */ new Set([WO, UO, qO, KO, VO, HO]), tW = { ...DO, ...RO }, rW = p.forwardRef(function(t, r) {
  const { render: n, className: i, ...a } = t, { store: o, popupRef: u, onOpenChangeComplete: s, setOpen: l, valueRef: c, selectedItemTextRef: f, keyboardActiveRef: d, multiple: h, handleScrollArrowVisibility: v, scrollHandlerRef: g } = dr(), { side: m, align: y, context: x, alignItemWithTriggerActive: b, setControlledAlignItemWithTrigger: w, scrollDownArrowRef: O, scrollUpArrowRef: P } = qd(), S = Xz() != null, E = St(), N = he(o, de.id), k = he(o, de.open), R = he(o, de.mounted), C = he(o, de.popupProps), F = he(o, de.transitionStatus), L = he(o, de.triggerElement), M = he(o, de.positionerElement), $ = he(o, de.listElement), B = p.useRef(0), D = p.useRef(false), K = p.useRef(0), W = p.useRef(false), fe = p.useRef({}), te = Zu(), ae = ce((ne) => {
    if (!M || !u.current || !W.current) return;
    if (D.current || !b) {
      v();
      return;
    }
    const A = M.style.top === "0px", j = M.style.bottom === "0px", I = M.getBoundingClientRect().height, Z = Jr(M), _ = getComputedStyle(M), ie = parseFloat(_.marginTop), ee = parseFloat(_.marginBottom), pe = Z.documentElement.clientHeight - ie - ee, V = ne.scrollTop, z = ne.scrollHeight, U = ne.clientHeight, G = z - U;
    let q = null, Y = null, J = false;
    if (A) {
      const ge = G - V, be = I + ge, ye = Math.min(be, pe);
      q = ye, ye !== pe ? Y = G : J = true;
    } else if (j) {
      const ge = V - 0, be = I + ge, ye = Math.min(be, pe), et = be - pe;
      q = ye, ye !== pe ? Y = 0 : (J = true, V < G && (Y = V - (ge - et)));
    }
    q != null && (M.style.height = `${q}px`), Y != null && (ne.scrollTop = Y), J && (D.current = true), v();
  });
  p.useImperativeHandle(g, () => ae, [ae]), rs({ open: k, ref: u, onComplete() {
    k && (s == null ? void 0 : s(true));
  } });
  const re = p.useMemo(() => ({ open: k, transitionStatus: F, side: m, align: y }), [k, F, m, y]);
  le(() => {
    !M || !u.current || Object.keys(fe.current).length || (fe.current = { top: M.style.top || "0", left: M.style.left || "0", right: M.style.right, height: M.style.height, bottom: M.style.bottom, minHeight: M.style.minHeight, maxHeight: M.style.maxHeight, marginTop: M.style.marginTop, marginBottom: M.style.marginBottom });
  }, [u, M]), le(() => {
    R || b || (W.current = false, D.current = false, B.current = 0, K.current = 0, uu(M, fe.current));
  }, [R, b, M, u]), le(() => {
    const ne = u.current;
    if (!(!R || !L || !M || !ne)) {
      if (!b) {
        W.current = true, te.request(v);
        return;
      }
      queueMicrotask(() => {
        var _a2;
        const A = getComputedStyle(M), j = getComputedStyle(ne), I = Jr(L), Z = Hn(M), _ = L.getBoundingClientRect(), ie = M.getBoundingClientRect(), ee = _.left, pe = _.height, V = $ || ne, z = V.scrollHeight, U = parseFloat(j.borderBottomWidth), G = parseFloat(A.marginTop) || 10, q = parseFloat(A.marginBottom) || 10, Y = parseFloat(A.minHeight) || 100, J = 5, ge = 5, be = 20, ye = I.documentElement.clientHeight - G - q, et = I.documentElement.clientWidth, xe = ye - _.bottom + pe, Ke = f.current, Ve = c.current;
        let hr = 0, Gt = 0;
        if (Ke && Ve) {
          const $e = Ve.getBoundingClientRect(), ot = Ke.getBoundingClientRect(), yt = $e.left - ee, Fr = ot.left - ie.left, Ea = $e.top - _.top + $e.height / 2, ns = ot.top - ie.top + ot.height / 2;
          hr = yt - Fr, Gt = ns - Ea;
        }
        const Nr = xe + Gt + q + U;
        let _t = Math.min(ye, Nr);
        const Lr = ye - G - q, Xt = Nr - _t, $r = Math.max(J, ee + hr), Ie = et - ge, He = Math.max(0, $r + ie.width - Ie);
        M.style.left = `${$r - He}px`, M.style.height = `${_t}px`, M.style.maxHeight = "auto", M.style.marginTop = `${G}px`, M.style.marginBottom = `${q}px`, ne.style.height = "100%";
        const dt = V.scrollHeight - V.clientHeight, tt = Xt >= dt;
        tt && (_t = Math.min(ye, ie.height) - (Xt - dt));
        const ve = _.top < be || _.bottom > ye - be || _t < Math.min(z, Y), _e = (((_a2 = Z.visualViewport) == null ? void 0 : _a2.scale) ?? 1) !== 1 && uO;
        if (ve || _e) {
          W.current = true, uu(M, fe.current), wr.flushSync(() => w(false));
          return;
        }
        if (tt) {
          const $e = Math.max(0, ye - Nr);
          M.style.top = ie.height >= Lr ? "0" : `${$e}px`, M.style.height = `${_t}px`, V.scrollTop = V.scrollHeight - V.clientHeight, B.current = Math.max(Y, _t);
        } else M.style.bottom = "0", B.current = Math.max(Y, _t), V.scrollTop = Xt;
        B.current === ye && (D.current = true), v(), setTimeout(() => {
          W.current = true;
        });
      });
    }
  }, [o, R, M, L, c, f, u, v, b, w, te, O, P, $]), p.useEffect(() => {
    if (!b || !M || !R) return;
    const ne = Hn(M);
    function A(j) {
      l(false, ke(sB, j));
    }
    return ne.addEventListener("resize", A), () => {
      ne.removeEventListener("resize", A);
    };
  }, [l, b, M, R]);
  const X = { ...$ ? { role: "presentation", "aria-orientation": void 0 } : { role: "listbox", "aria-multiselectable": h || void 0, id: `${N}-list` }, onKeyDown(ne) {
    d.current = true, S && eW.has(ne.key) && ne.stopPropagation();
  }, onMouseMove() {
    d.current = false;
  }, onPointerLeave(ne) {
    if (zO(ne) || ne.pointerType === "touch") return;
    const A = ne.currentTarget;
    E.start(0, () => {
      o.set("activeIndex", null), A.focus({ preventScroll: true });
    });
  }, onScroll(ne) {
    var _a2;
    $ || ((_a2 = g.current) == null ? void 0 : _a2.call(g, ne.currentTarget));
  }, ...b && { style: $ ? { height: "100%" } : BO } }, oe = Yt("div", t, { ref: [r, u], state: re, stateAttributesMapping: tW, props: [C, X, { style: F === "starting" ? rB.style : void 0, className: !$ && b ? rf.className : void 0 }, a] });
  return H.jsxs(p.Fragment, { children: [rf.element, H.jsx(_B, { context: x, modal: false, disabled: !R, restoreFocus: true, children: oe })] });
}), nW = p.forwardRef(function(t, r) {
  const { className: n, render: i, ...a } = t, { store: o, scrollHandlerRef: u } = dr(), { alignItemWithTriggerActive: s } = qd(), l = he(o, de.hasScrollArrows), c = he(o, de.touchModality), f = he(o, de.multiple), h = { id: `${he(o, de.id)}-list`, role: "listbox", "aria-multiselectable": f || void 0, onScroll(g) {
    var _a2;
    (_a2 = u.current) == null ? void 0 : _a2.call(u, g.currentTarget);
  }, ...s && { style: BO }, className: l && !c ? rf.className : void 0 }, v = ce((g) => {
    o.set("listElement", g);
  });
  return Yt("div", t, { ref: [r, v], props: [h, a] });
});
let YO = (function(e3) {
  return e3[e3.None = 0] = "None", e3[e3.GuessFromOrder = 1] = "GuessFromOrder", e3;
})({});
function iW(e3 = {}) {
  const { label: t, metadata: r, textRef: n, indexGuessBehavior: i, index: a } = e3, { register: o, unregister: u, subscribeMapChange: s, elementsRef: l, labelsRef: c, nextIndexRef: f } = Nz(), d = p.useRef(-1), [h, v] = p.useState(a ?? (i === YO.GuessFromOrder ? () => {
    if (d.current === -1) {
      const y = f.current;
      f.current += 1, d.current = y;
    }
    return d.current;
  } : -1)), g = p.useRef(null), m = p.useCallback((y) => {
    var _a2;
    if (g.current = y, h !== -1 && y !== null && (l.current[h] = y, c)) {
      const x = t !== void 0;
      c.current[h] = x ? t : ((_a2 = n == null ? void 0 : n.current) == null ? void 0 : _a2.textContent) ?? y.textContent;
    }
  }, [h, l, c, t, n]);
  return le(() => {
    if (a != null) return;
    const y = g.current;
    if (y) return o(y, r), () => {
      u(y);
    };
  }, [a, o, u, r]), le(() => {
    if (a == null) return s((y) => {
      var _a2;
      const x = g.current ? (_a2 = y.get(g.current)) == null ? void 0 : _a2.index : null;
      x != null && v(x);
    });
  }, [a, s, v]), p.useMemo(() => ({ ref: m, index: h }), [h, m]);
}
const GO = p.createContext(void 0);
function Kd() {
  const e3 = p.useContext(GO);
  if (!e3) throw new Error(nn(57));
  return e3;
}
const aW = p.memo(p.forwardRef(function(t, r) {
  const { render: n, className: i, value: a = null, label: o, disabled: u = false, nativeButton: s = false, ...l } = t, c = p.useRef(null), f = iW({ label: o, textRef: c, indexGuessBehavior: YO.GuessFromOrder }), { store: d, getItemProps: h, setOpen: v, setValue: g, selectionRef: m, typingRef: y, valuesRef: x, keyboardActiveRef: b, multiple: w } = dr(), O = St(), P = he(d, de.isActive, f.index), S = he(d, de.isSelected, f.index, a), E = he(d, de.isSelectedByFocus, f.index), N = he(d, de.isItemEqualToValue), k = f.index, R = k !== -1, C = p.useRef(null), F = ct(k);
  le(() => {
    if (!R) return;
    const X = x.current;
    return X[k] = a, () => {
      delete X[k];
    };
  }, [R, k, a, x]), le(() => {
    if (!R) return;
    const X = d.state.value;
    let oe = X;
    w && Array.isArray(X) && X.length > 0 && (oe = X[X.length - 1]), oe !== void 0 && ii(oe, a, N) && d.set("selectedIndex", k);
  }, [R, k, w, N, d, a]);
  const L = p.useMemo(() => ({ disabled: u, selected: S, highlighted: P }), [u, S, P]), M = h({ active: P, selected: S });
  M.onFocus = void 0, M.id = void 0;
  const $ = p.useRef(null), B = p.useRef("mouse"), D = p.useRef(false), { getButtonProps: K, buttonRef: W } = NO({ disabled: u, focusableWhenDisabled: true, native: s });
  function fe(X) {
    const oe = d.state.value;
    if (w) {
      const ne = Array.isArray(oe) ? oe : [], A = S ? XB(ne, a, N) : [...ne, a];
      g(A, ke(Bl, X));
    } else g(a, ke(Bl, X)), v(false, ke(Bl, X));
  }
  const te = { role: "option", "aria-selected": S, "aria-disabled": u || void 0, tabIndex: P ? 0 : -1, onFocus() {
    d.set("activeIndex", k);
  }, onMouseEnter() {
    !b.current && d.state.selectedIndex === null && d.set("activeIndex", k);
  }, onMouseMove() {
    d.set("activeIndex", k);
  }, onMouseLeave(X) {
    b.current || zO(X) || O.start(0, () => {
      d.state.activeIndex === k && d.set("activeIndex", null);
    });
  }, onTouchStart() {
    m.current = { allowSelectedMouseUp: false, allowUnselectedMouseUp: false };
  }, onKeyDown(X) {
    $.current = X.key, d.set("activeIndex", k);
  }, onClick(X) {
    D.current = false, !(X.type === "keydown" && $.current === null) && (u || $.current === " " && y.current || B.current !== "touch" && !P || ($.current = null, fe(X.nativeEvent)));
  }, onPointerEnter(X) {
    B.current = X.pointerType;
  }, onPointerDown(X) {
    B.current = X.pointerType, D.current = true;
  }, onMouseUp(X) {
    if (u) return;
    if (D.current) {
      D.current = false;
      return;
    }
    const oe = !m.current.allowSelectedMouseUp && S, ne = !m.current.allowUnselectedMouseUp && !S;
    oe || ne || B.current !== "touch" && !P || fe(X.nativeEvent);
  } }, ae = Yt("div", t, { ref: [W, r, f.ref, C], state: L, props: [M, te, l, K] }), re = p.useMemo(() => ({ selected: S, indexRef: F, textRef: c, selectedByFocus: E, hasRegistered: R }), [S, F, c, E, R]);
  return H.jsx(GO.Provider, { value: re, children: ae });
})), oW = p.forwardRef(function(t, r) {
  const n = t.keepMounted ?? false, { selected: i } = Kd();
  return n || i ? H.jsx(uW, { ...t, ref: r }) : null;
}), uW = p.memo(p.forwardRef((e3, t) => {
  const { render: r, className: n, keepMounted: i, ...a } = e3, { selected: o } = Kd(), u = p.useRef(null), { transitionStatus: s, setMounted: l } = Wd(o), c = p.useMemo(() => ({ selected: o, transitionStatus: s }), [o, s]), f = Yt("span", e3, { ref: [t, u], state: c, props: [{ "aria-hidden": true, children: "\u2714\uFE0F" }, a], stateAttributesMapping: RO });
  return rs({ open: o, ref: u, onComplete() {
    o || l(false);
  } }), f;
})), sW = p.memo(p.forwardRef(function(t, r) {
  const { indexRef: n, textRef: i, selectedByFocus: a, hasRegistered: o } = Kd(), { selectedItemTextRef: u } = dr(), { className: s, render: l, ...c } = t, f = p.useCallback((h) => {
    if (!h || !o) return;
    const v = u.current === null || !u.current.isConnected;
    (a || v && n.current === 0) && (u.current = h);
  }, [u, n, a, o]);
  return Yt("div", t, { ref: [f, r, i], props: c });
})), XO = p.forwardRef(function(t, r) {
  const { render: n, className: i, direction: a, keepMounted: o = false, ...u } = t, { store: s, popupRef: l, listRef: c, handleScrollArrowVisibility: f, scrollArrowsMountedCountRef: d } = dr(), { side: h, scrollDownArrowRef: v, scrollUpArrowRef: g } = qd(), m = a === "up" ? de.scrollUpArrowVisible : de.scrollDownArrowVisible, y = he(s, m), x = he(s, de.touchModality), b = y && !x, w = St(), O = a === "up" ? g : v, { transitionStatus: P, setMounted: S } = Wd(b);
  le(() => (d.current += 1, s.state.hasScrollArrows || s.set("hasScrollArrows", true), () => {
    d.current = Math.max(0, d.current - 1), d.current === 0 && s.state.hasScrollArrows && s.set("hasScrollArrows", false);
  }), [s, d]), rs({ open: b, ref: O, onComplete() {
    b || S(false);
  } });
  const E = p.useMemo(() => ({ direction: a, visible: b, side: h, transitionStatus: P }), [a, b, h, P]), k = Yt("div", t, { ref: [r, O], state: E, props: [{ "aria-hidden": true, children: a === "up" ? "\u25B2" : "\u25BC", style: { position: "absolute" }, onMouseMove(C) {
    if (C.movementX === 0 && C.movementY === 0 || w.isStarted()) return;
    s.set("activeIndex", null);
    function F() {
      var _a2;
      const L = s.state.listElement ?? l.current;
      if (!L) return;
      s.set("activeIndex", null), f();
      const M = L.scrollTop === 0, $ = Math.round(L.scrollTop + L.clientHeight) >= L.scrollHeight;
      if (c.current.length === 0 && (a === "up" ? s.set("scrollUpArrowVisible", !M) : s.set("scrollDownArrowVisible", !$)), a === "up" && M || a === "down" && $) {
        w.clear();
        return;
      }
      if ((s.state.listElement || l.current) && c.current && c.current.length > 0) {
        const D = c.current, K = ((_a2 = O.current) == null ? void 0 : _a2.offsetHeight) || 0;
        if (a === "up") {
          let W = 0;
          const fe = L.scrollTop + K;
          for (let ae = 0; ae < D.length; ae += 1) {
            const re = D[ae];
            if (re && re.offsetTop >= fe) {
              W = ae;
              break;
            }
          }
          const te = Math.max(0, W - 1);
          if (te < W) {
            const ae = D[te];
            ae && (L.scrollTop = Math.max(0, ae.offsetTop - K));
          } else L.scrollTop = 0;
        } else {
          let W = D.length - 1;
          const fe = L.scrollTop + L.clientHeight - K;
          for (let ae = 0; ae < D.length; ae += 1) {
            const re = D[ae];
            if (re && re.offsetTop + re.offsetHeight > fe) {
              W = Math.max(0, ae - 1);
              break;
            }
          }
          const te = Math.min(D.length - 1, W + 1);
          if (te > W) {
            const ae = D[te];
            ae && (L.scrollTop = ae.offsetTop + ae.offsetHeight - L.clientHeight + K);
          } else L.scrollTop = L.scrollHeight - L.clientHeight;
        }
      }
      w.start(40, F);
    }
    w.start(40, F);
  }, onMouseLeave() {
    w.clear();
  } }, u] });
  return b || o ? k : null;
}), lW = p.forwardRef(function(t, r) {
  return H.jsx(XO, { ...t, ref: r, direction: "down" });
}), cW = p.forwardRef(function(t, r) {
  return H.jsx(XO, { ...t, ref: r, direction: "up" });
}), Vl = az;
function Hl({ className: e3, size: t = "default", children: r, ...n }) {
  return H.jsxs(xz, { className: su("relative inline-flex w-full min-w-36 select-none items-center justify-between gap-2 rounded-lg border border-input bg-background bg-clip-padding px-[calc(--spacing(3)-1px)] py-[calc(--spacing(1.5)-1px)] in-data-[slot=field]:not-data-filled:text-muted-foreground text-base/5 shadow-xs outline-none ring-ring/24 transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-data-disabled:not-focus-visible:not-aria-invalid:not-data-pressed:before:shadow-[0_1px_--theme(--color-black/4%)] pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:border-destructive/36 focus-visible:aria-invalid:border-destructive/64 focus-visible:aria-invalid:ring-destructive/16 data-disabled:pointer-events-none data-disabled:opacity-64 sm:text-sm dark:bg-input/32 dark:not-in-data-[slot=group]:bg-clip-border dark:aria-invalid:ring-destructive/24 dark:not-data-disabled:not-focus-visible:not-aria-invalid:not-data-pressed:before:shadow-[0_-1px_--theme(--color-white/8%)] [&:is([data-disabled],:focus-visible,[aria-invalid],[data-pressed])]:shadow-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:opacity-72", t === "sm" && "gap-1.5 px-[calc(--spacing(2.5)-1px)] py-[calc(--spacing(1)-1px)]", t === "lg" && "py-[calc(--spacing(2)-1px)]", e3), "data-slot": "select-trigger", ...n, children: [r, H.jsx(Sz, { "data-slot": "select-icon", children: H.jsx(TP, { className: "-me-1 size-4 opacity-72" }) })] });
}
function Yl({ className: e3, ...t }) {
  return H.jsx(Pz, { className: su("flex-1 truncate", e3), "data-slot": "select-value", ...t });
}
function Gl({ className: e3, children: t, sideOffset: r = 4, alignItemWithTrigger: n = true, ...i }) {
  return H.jsx(Az, { children: H.jsx(Yz, { alignItemWithTrigger: n, className: "z-50 select-none", "data-slot": "select-positioner", sideOffset: r, children: H.jsxs(rW, { className: "origin-(--transform-origin) transition-[scale,opacity] has-data-[side=none]:scale-100 has-data-starting-style:scale-98 has-data-starting-style:opacity-0 has-data-[side=none]:transition-none", "data-slot": "select-popup", ...i, children: [H.jsx(cW, { className: "top-0 z-50 flex h-6 w-full cursor-default items-center justify-center before:pointer-events-none before:absolute before:inset-x-px before:top-px before:h-[200%] before:rounded-t-[calc(var(--radius-lg)-1px)] before:bg-gradient-to-b before:from-50% before:from-popover", "data-slot": "select-scroll-up-arrow", children: H.jsx(AP, { className: "relative size-4" }) }), H.jsx("span", { className: "relative block h-full rounded-lg border bg-popover bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-lg dark:not-in-data-[slot=group]:bg-clip-border", children: H.jsx(nW, { className: su("max-h-(--available-height) min-w-(--anchor-width) overflow-y-auto p-1", e3), "data-slot": "select-list", children: t }) }), H.jsx(lW, { className: "bottom-0 z-50 flex h-6 w-full cursor-default items-center justify-center before:pointer-events-none before:absolute before:inset-x-px before:bottom-px before:h-[200%] before:rounded-b-[calc(var(--radius-lg)-1px)] before:bg-gradient-to-t before:from-50% before:from-popover", "data-slot": "select-scroll-down-arrow", children: H.jsx(SP, { className: "relative size-4" }) })] }) }) });
}
function Xl({ className: e3, children: t, ...r }) {
  return H.jsxs(aW, { className: su("grid in-data-[side=none]:min-w-[calc(var(--anchor-width)+1.25rem)] cursor-default grid-cols-[1rem_1fr] items-center gap-2 rounded-sm py-1 ps-2 pe-4 text-base outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:text-sm [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", e3), "data-slot": "select-item", ...r, children: [H.jsx(oW, { className: "col-start-1", children: H.jsx("svg", { fill: "none", height: "24", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/1500/svg", children: H.jsx("path", { d: "M5.252 12.7 10.2 18.63 18.748 5.37" }) }) }), H.jsx(sW, { className: "col-start-2 min-w-0", children: t })] });
}
const fW = "/grower-dashboard/", dW = { AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California", CO: "Colorado", CT: "Connecticut", DE: "Delaware", FL: "Florida", GA: "Georgia", HI: "Hawaii", ID: "Idaho", IL: "Illinois", IN: "Indiana", IA: "Iowa", KS: "Kansas", KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland", MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MS: "Mississippi", MO: "Missouri", MT: "Montana", NE: "Nebraska", NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey", NM: "New Mexico", NY: "New York", NC: "North Carolina", ND: "North Dakota", OH: "Ohio", OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina", SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont", VA: "Virginia", WA: "Washington", WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming" }, ZO = OP.historical, Jg = Object.keys(ZO).map((e3) => ({ label: dW[e3] || e3, value: e3 })).sort((e3, t) => e3.label.localeCompare(t.label)), ey = [{ label: "1 week", value: "7" }, { label: "1 month", value: "30" }, { label: "3 months", value: "90" }, { label: "6 months", value: "180" }, { label: "1 year", value: "365" }, { label: "All", value: "all" }], hW = ["SAIDI", "SAIFI"];
function ty(e3) {
  return e3 ? e3.startsWith("<") ? Number(e3.slice(1)) || 0 : Number(e3) || 0 : 0;
}
function pW(e3) {
  const t = e3.split(/\r?\n/).filter(Boolean);
  if (t.length < 2) return [];
  const n = t[0].split(",").reduce((i, a, o) => (i[a.trim()] = o, i), {});
  return t.slice(1).map((i) => {
    var _a2, _b2, _c2, _d2, _e;
    const a = i.split(","), o = (_a2 = a[n.Date]) == null ? void 0 : _a2.trim(), u = (_b2 = a[n.County]) == null ? void 0 : _b2.trim(), s = (_c2 = a[n.State]) == null ? void 0 : _c2.trim();
    return !o || !u || !s ? null : { county: u, state: s, date: o, timestamp: new Date(o).getTime(), SAIDI: ty((_d2 = a[n.SAIDI]) == null ? void 0 : _d2.trim()), SAIFI: ty((_e = a[n.SAIFI]) == null ? void 0 : _e.trim()) };
  }).filter(Boolean);
}
const vW = 1440 * 60 * 1e3;
function mW(e3, t) {
  if (t === "all" || !e3.length) return e3;
  const [r, n] = e3[e3.length - 1].split("_").map(Number), i = Date.UTC(r, n - 1, 1) - Number(t) * vW;
  return e3.filter((a) => {
    const [o, u] = a.split("_").map(Number);
    return Date.UTC(o, u, 1) > i;
  });
}
const Za = /* @__PURE__ */ new Map();
function gW(e3) {
  if (!Za.has(e3)) {
    const t = fetch(`${fW}${e3}`).then((r) => r.ok ? r.text() : "").then(pW).catch(() => (Za.delete(e3), []));
    Za.set(e3, t);
  }
  return Za.get(e3);
}
async function yW(e3, t) {
  const r = mW(ZO[e3] || [], t), n = await Promise.all(r.map((a) => gW(`historical/${e3}/${a}.csv`))), i = /* @__PURE__ */ new Map();
  for (const a of n) a.forEach((o) => {
    i.set(`${o.county}|${o.date}`, o);
  });
  return Array.from(i.values()).sort((a, o) => a.timestamp - o.timestamp);
}
function bW(e3) {
  return new Date(e3).toLocaleDateString(void 0, { month: "short", day: "numeric" });
}
function YW() {
  const [e3, t] = p.useState(""), [r, n] = p.useState(""), [i, a] = p.useState("30"), [o, u] = p.useState("SAIDI"), [s, l] = p.useState({ key: "", rows: [], error: "" }), c = e3 ? `${e3}|${i}` : "", f = !!c && s.key !== c, d = s.rows, h = f ? "" : s.error;
  p.useEffect(() => {
    if (!e3) return;
    const y = `${e3}|${i}`;
    let x = false;
    return yW(e3, i).then((b) => {
      x || l({ key: y, rows: b, error: b.length ? "" : `No historical files were found for ${e3}.` });
    }).catch(() => {
      x || l({ key: y, rows: [], error: "Failed to load historical data files." });
    }), () => {
      x = true;
    };
  }, [e3, i]);
  const v = p.useMemo(() => e3 ? [...new Set(d.map((y) => y.county))].sort((y, x) => y.localeCompare(x)) : [], [e3, d]), g = v.includes(r) ? r : "", m = p.useMemo(() => {
    if (!e3 || !g) return [];
    const y = d.filter((O) => O.county === g);
    if (!y.length) return [];
    if (i === "all") return y;
    const x = Number(i), w = y[y.length - 1].timestamp - x * 24 * 60 * 60 * 1e3;
    return y.filter((O) => O.timestamp >= w);
  }, [g, e3, d, i]);
  return H.jsxs("main", { className: "flex h-full min-h-0 flex-col gap-6 p-6", children: [H.jsxs("div", { className: "flex flex-wrap items-end gap-3", children: [H.jsxs(Vl, { value: e3, onValueChange: t, items: Jg, children: [H.jsx(Hl, { className: "w-44", children: H.jsx(Yl, { placeholder: "Select state" }) }), H.jsx(Gl, { children: Jg.map((y) => H.jsx(Xl, { value: y.value, children: y.label }, y.value)) })] }), H.jsxs(Vl, { value: g, onValueChange: n, items: v.map((y) => ({ label: y, value: y })), disabled: !e3, children: [H.jsx(Hl, { className: "w-52", children: H.jsx(Yl, { placeholder: "Select county" }) }), H.jsx(Gl, { children: v.map((y) => H.jsx(Xl, { value: y, children: y }, y)) })] }), H.jsxs(Vl, { value: i, onValueChange: a, items: ey, children: [H.jsx(Hl, { className: "w-40", children: H.jsx(Yl, {}) }), H.jsx(Gl, { children: ey.map((y) => H.jsx(Xl, { value: y.value, children: y.label }, y.value)) })] }), H.jsx("div", { className: "ml-auto inline-flex rounded-md border border-border p-1", children: hW.map((y) => H.jsx(xP, { variant: o === y ? "default" : "ghost", size: "sm", onClick: () => u(y), children: y }, y)) })] }), H.jsxs("section", { className: "min-h-0 flex-1 rounded-lg border border-border bg-background p-4", children: [f && H.jsx("div", { className: "flex h-full items-center justify-center text-sm text-muted-foreground", children: "Loading historical data..." }), !f && h && H.jsx("div", { className: "flex h-full items-center justify-center text-sm text-destructive", children: h }), !f && !h && (!e3 || !g) && H.jsx("div", { className: "flex h-full items-center justify-center text-sm text-muted-foreground", children: "Select a state and county to view metrics over time." }), !f && !h && e3 && g && !m.length && H.jsx("div", { className: "flex h-full items-center justify-center text-sm text-muted-foreground", children: "No data available for this selection and timeframe." }), !f && !h && m.length > 0 && H.jsxs("div", { className: "h-full min-h-[350px]", children: [H.jsxs("div", { className: "mb-2 text-sm font-medium", children: [g, ", ", e3, " - ", o] }), H.jsx(TA, { width: "100%", height: "92%", children: H.jsxs(cF, { data: m, children: [H.jsx(Bx, { dataKey: "date", tickFormatter: bW, tick: { fontSize: 12 } }), H.jsx(zx, { tick: { fontSize: 12 } }), H.jsx(aD, { formatter: (y) => [Number(y).toFixed(4), o], labelFormatter: (y) => `Date: ${y}` }), H.jsx($x, { type: "linear", dataKey: o, stroke: "#3b82f6", strokeWidth: 2, dot: { r: 3 }, activeDot: { r: 5 } })] }) })] })] })] });
}
export {
  YW as default
};
