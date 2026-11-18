import { c as N, N as H, a as u, j as e, P as A, O as B, Q as E, S as J, T as pe, U, V as me, W as m, X as ue, Y as he, K as Y, Z as xe, _ as fe } from "./index-Djq12-hy.js";
const ge = [["path", { d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2", key: "169zse" }]], be = N("activity", ge);
const ve = [["path", { d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z", key: "l5xja" }], ["path", { d: "M9 13a4.5 4.5 0 0 0 3-4", key: "10igwf" }], ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }], ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }], ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }], ["path", { d: "M12 13h4", key: "1ku699" }], ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1", key: "105ag5" }], ["path", { d: "M12 8h8", key: "1lhi5i" }], ["path", { d: "M16 8V5a2 2 0 0 1 2-2", key: "u6izg6" }], ["circle", { cx: "16", cy: "13", r: ".5", key: "ry7gng" }], ["circle", { cx: "18", cy: "3", r: ".5", key: "1aiba7" }], ["circle", { cx: "20", cy: "21", r: ".5", key: "yhc1fs" }], ["circle", { cx: "20", cy: "8", r: ".5", key: "1e43v0" }]], ye = N("brain-circuit", ve);
const Ce = [["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }], ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }], ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]], je = N("code-xml", Ce);
const Ne = [["path", { d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z", key: "1vdc57" }], ["path", { d: "M5 21h14", key: "11awu3" }]], $ = N("crown", Ne);
const Ae = [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "M12 5v14", key: "s699le" }]], we = N("plus", Ae);
var I = "Collapsible", [ke, q] = H(I), [Ie, G] = ke(I), Z = u.forwardRef((a, n) => {
  const { __scopeCollapsible: t, open: r, defaultOpen: s, disabled: o, onOpenChange: i, ...l } = a, [d, p] = E({ prop: r, defaultProp: s ?? false, onChange: i, caller: I });
  return e.jsx(Ie, { scope: t, disabled: o, contentId: J(), open: d, onOpenToggle: u.useCallback(() => p((h) => !h), [p]), children: e.jsx(A.div, { "data-state": K(d), "data-disabled": o ? "" : void 0, ...l, ref: n }) });
});
Z.displayName = I;
var F = "CollapsibleTrigger", W = u.forwardRef((a, n) => {
  const { __scopeCollapsible: t, ...r } = a, s = G(F, t);
  return e.jsx(A.button, { type: "button", "aria-controls": s.contentId, "aria-expanded": s.open || false, "data-state": K(s.open), "data-disabled": s.disabled ? "" : void 0, disabled: s.disabled, ...r, ref: n, onClick: B(a.onClick, s.onOpenToggle) });
});
W.displayName = F;
var T = "CollapsibleContent", X = u.forwardRef((a, n) => {
  const { forceMount: t, ...r } = a, s = G(T, a.__scopeCollapsible);
  return e.jsx(pe, { present: t || s.open, children: ({ present: o }) => e.jsx(Re, { ...r, ref: n, present: o }) });
});
X.displayName = T;
var Re = u.forwardRef((a, n) => {
  const { __scopeCollapsible: t, present: r, children: s, ...o } = a, i = G(T, t), [l, d] = u.useState(r), p = u.useRef(null), h = U(n, p), x = u.useRef(0), C = x.current, g = u.useRef(0), w = g.current, b = i.open || l, v = u.useRef(b), y = u.useRef(void 0);
  return u.useEffect(() => {
    const c = requestAnimationFrame(() => v.current = false);
    return () => cancelAnimationFrame(c);
  }, []), me(() => {
    const c = p.current;
    if (c) {
      y.current = y.current || { transitionDuration: c.style.transitionDuration, animationName: c.style.animationName }, c.style.transitionDuration = "0s", c.style.animationName = "none";
      const j = c.getBoundingClientRect();
      x.current = j.height, g.current = j.width, v.current || (c.style.transitionDuration = y.current.transitionDuration, c.style.animationName = y.current.animationName), d(r);
    }
  }, [i.open, r]), e.jsx(A.div, { "data-state": K(i.open), "data-disabled": i.disabled ? "" : void 0, id: i.contentId, hidden: !b, ...o, ref: h, style: { "--radix-collapsible-content-height": C ? `${C}px` : void 0, "--radix-collapsible-content-width": w ? `${w}px` : void 0, ...a.style }, children: b && s });
});
function K(a) {
  return a ? "open" : "closed";
}
var _e = Z, Pe = W, De = X, f = "Accordion", Me = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [O, Le, Se] = ue(f), [R] = H(f, [Se, q]), V = q(), Q = m.forwardRef((a, n) => {
  const { type: t, ...r } = a, s = r, o = r;
  return e.jsx(O.Provider, { scope: a.__scopeAccordion, children: t === "multiple" ? e.jsx(Ke, { ...o, ref: n }) : e.jsx(Te, { ...s, ref: n }) });
});
Q.displayName = f;
var [ee, Ee] = R(f), [ae, Ge] = R(f, { collapsible: false }), Te = m.forwardRef((a, n) => {
  const { value: t, defaultValue: r, onValueChange: s = () => {
  }, collapsible: o = false, ...i } = a, [l, d] = E({ prop: t, defaultProp: r ?? "", onChange: s, caller: f });
  return e.jsx(ee, { scope: a.__scopeAccordion, value: m.useMemo(() => l ? [l] : [], [l]), onItemOpen: d, onItemClose: m.useCallback(() => o && d(""), [o, d]), children: e.jsx(ae, { scope: a.__scopeAccordion, collapsible: o, children: e.jsx(ne, { ...i, ref: n }) }) });
}), Ke = m.forwardRef((a, n) => {
  const { value: t, defaultValue: r, onValueChange: s = () => {
  }, ...o } = a, [i, l] = E({ prop: t, defaultProp: r ?? [], onChange: s, caller: f }), d = m.useCallback((h) => l((x = []) => [...x, h]), [l]), p = m.useCallback((h) => l((x = []) => x.filter((C) => C !== h)), [l]);
  return e.jsx(ee, { scope: a.__scopeAccordion, value: i, onItemOpen: d, onItemClose: p, children: e.jsx(ae, { scope: a.__scopeAccordion, collapsible: true, children: e.jsx(ne, { ...o, ref: n }) }) });
}), [Oe, _] = R(f), ne = m.forwardRef((a, n) => {
  const { __scopeAccordion: t, disabled: r, dir: s, orientation: o = "vertical", ...i } = a, l = m.useRef(null), d = U(l, n), p = Le(t), x = he(s) === "ltr", C = B(a.onKeyDown, (g) => {
    var _a;
    if (!Me.includes(g.key)) return;
    const w = g.target, b = p().filter((L) => {
      var _a2;
      return !((_a2 = L.ref.current) == null ? void 0 : _a2.disabled);
    }), v = b.findIndex((L) => L.ref.current === w), y = b.length;
    if (v === -1) return;
    g.preventDefault();
    let c = v;
    const j = 0, P = y - 1, D = () => {
      c = v + 1, c > P && (c = j);
    }, M = () => {
      c = v - 1, c < j && (c = P);
    };
    switch (g.key) {
      case "Home":
        c = j;
        break;
      case "End":
        c = P;
        break;
      case "ArrowRight":
        o === "horizontal" && (x ? D() : M());
        break;
      case "ArrowDown":
        o === "vertical" && D();
        break;
      case "ArrowLeft":
        o === "horizontal" && (x ? M() : D());
        break;
      case "ArrowUp":
        o === "vertical" && M();
        break;
    }
    const de = c % y;
    (_a = b[de].ref.current) == null ? void 0 : _a.focus();
  });
  return e.jsx(Oe, { scope: t, disabled: r, direction: s, orientation: o, children: e.jsx(O.Slot, { scope: t, children: e.jsx(A.div, { ...i, "data-orientation": o, ref: d, onKeyDown: r ? void 0 : C }) }) });
}), k = "AccordionItem", [Ve, z] = R(k), te = m.forwardRef((a, n) => {
  const { __scopeAccordion: t, value: r, ...s } = a, o = _(k, t), i = Ee(k, t), l = V(t), d = J(), p = r && i.value.includes(r) || false, h = o.disabled || a.disabled;
  return e.jsx(Ve, { scope: t, open: p, disabled: h, triggerId: d, children: e.jsx(_e, { "data-orientation": o.orientation, "data-state": le(p), ...l, ...s, ref: n, disabled: h, open: p, onOpenChange: (x) => {
    x ? i.onItemOpen(r) : i.onItemClose(r);
  } }) });
});
te.displayName = k;
var oe = "AccordionHeader", re = m.forwardRef((a, n) => {
  const { __scopeAccordion: t, ...r } = a, s = _(f, t), o = z(oe, t);
  return e.jsx(A.h3, { "data-orientation": s.orientation, "data-state": le(o.open), "data-disabled": o.disabled ? "" : void 0, ...r, ref: n });
});
re.displayName = oe;
var S = "AccordionTrigger", se = m.forwardRef((a, n) => {
  const { __scopeAccordion: t, ...r } = a, s = _(f, t), o = z(S, t), i = Ge(S, t), l = V(t);
  return e.jsx(O.ItemSlot, { scope: t, children: e.jsx(Pe, { "aria-disabled": o.open && !i.collapsible || void 0, "data-orientation": s.orientation, id: o.triggerId, ...l, ...r, ref: n }) });
});
se.displayName = S;
var ie = "AccordionContent", ce = m.forwardRef((a, n) => {
  const { __scopeAccordion: t, ...r } = a, s = _(f, t), o = z(ie, t), i = V(t);
  return e.jsx(De, { role: "region", "aria-labelledby": o.triggerId, "data-orientation": s.orientation, ...i, ...r, ref: n, style: { "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", ...a.style } });
});
ce.displayName = ie;
function le(a) {
  return a ? "open" : "closed";
}
var ze = Q, $e = te, He = re, Be = se, Je = ce;
function Ue({ ...a }) {
  return e.jsx(ze, { "data-slot": "accordion", ...a });
}
function Ye({ className: a, ...n }) {
  return e.jsx($e, { "data-slot": "accordion-item", className: Y("border-b last:border-b-0", a), ...n });
}
function qe({ className: a, children: n, ...t }) {
  return e.jsx(Je, { "data-slot": "accordion-content", className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", ...t, children: e.jsx("div", { className: Y("pt-0 pb-4", a), children: n }) });
}
const Ze = [{ id: "group-1", icon: fe, title: "Group 1 \u2014 Data Collection and Cloud Computing", sub: "Data ingestion and cloud infrastructure.", leaders: ["Suryaa", "Rithin", "Padmanaban"], instructors: ["Dr. Brian An", "Tiger Peng", "Sam Duong"], members: [{ name: "Aechan, Rithinteja" }, { name: "Ahuja, Parth" }, { name: "Budida, Anish" }, { name: "Chen, Kevin" }, { name: "Dhanani, Misry Pravinchandra" }, { name: "Gaddy, Channing Kirkwood" }, { name: "Gardiner, Justin Paul" }, { name: "Gautam, Om" }, { name: "Gogi, Rohit Prakash" }, { name: "Guhl, Lauren Alexandra" }, { name: "Kang, Lucas" }, { name: "Kanumuri, Sai Lalith" }, { name: "Liang, Ellen" }, { name: "Mittal, Meghna" }, { name: "Mitte, Nishanth" }, { name: "Narra, Rithik Chowdary" }, { name: "Potula, Tanish" }, { name: "Saravanan, Padmanaban" }, { name: "Shah, Divy Jikin" }] }, { id: "group-2", icon: be, title: "Group 2 \u2014 Measurement & Verification (M&V)", sub: "Metrics, validation, and performance analysis.", leaders: ["Keyang", "Yiming", "Brandon M."], instructors: ["John Kim"], members: [{ name: "Michaels, Brandon Jarett" }, { name: "Zhong, Keyang" }, { name: "Yiming Ye" }, { name: "Gorty, Prasanna Srinivasan" }, { name: "Kunder, Likhit Nagraj" }, { name: "Kuraparthi, Sai Sravya" }] }, { id: "group-3", icon: je, title: "Group 3 \u2014 Visualization & Web Development", sub: "Dashboards, UX, and front-end systems.", leaders: ["Brandon D.", "Rohan"], instructors: ["Dr. Constance Crozier"], members: [{ name: "Davidson, Brandon Lee" }, { name: "Gandham, Rohan Venkat Sai" }, { name: "Jani, Hitanshu J" }, { name: "Kanani, Rudra Chintan" }, { name: "Khanuja, Nimrath" }, { name: "Kim, Nathan Donghyun" }, { name: "Nayar, Neel" }] }, { id: "group-4", icon: ye, title: "Group 4 \u2014 Data Analysis: Physical & Cyber Attacks / Storm Analysis", sub: "Resilience, security, and extreme event analysis.", leaders: ["Hanwen Kang"], instructors: ["Daein Kang"], members: [{ name: "Chery, Lorika Christy" }, { name: "Zhang, Jason" }, { name: "Gunturu, Soham" }] }], Fe = [{ name: "Dr. Brian An", role: "Lab Leadership", groups: ["Group 1 \u2014 Data Collection and Cloud Computing"], isLeadership: true }, { name: "Dr. Constance Crozier", role: "Lab Leadership", groups: ["Group 3 \u2014 Visualization & Web Development"], isLeadership: true }, { name: "Tiger Peng", role: "Instructor", groups: ["Group 1 \u2014 Data Collection and Cloud Computing"], isLeadership: false }, { name: "Sam Duong", role: "Instructor", groups: ["Group 1 \u2014 Data Collection and Cloud Computing"], isLeadership: false }, { name: "John Kim", role: "Instructor", groups: ["Group 2 \u2014 Measurement & Verification (M&V)"], isLeadership: false }, { name: "Daein Kang", role: "Instructor", groups: ["Group 4 \u2014 Data Analysis: Physical & Cyber Attacks / Storm Analysis"], isLeadership: false }];
function We() {
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(xe, { className: "h-5 w-5 text-muted-foreground" }), e.jsx("h2", { className: "text-xl font-bold", children: "Team" })] }), e.jsxs("section", { className: "space-y-2", children: [e.jsx("h3", { className: "text-sm font-semibold text-muted-foreground", children: "Lab Leadership & Instructors" }), e.jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: Fe.map((a) => e.jsxs("div", { className: "flex flex-col justify-between rounded-lg border px-3 py-3 text-sm " + (a.isLeadership ? "border-primary/70 bg-primary/5 shadow-sm" : "border-border bg-background"), children: [e.jsxs("div", { className: "flex items-center justify-between gap-2", children: [e.jsxs("div", { className: "flex flex-col", children: [e.jsx("span", { className: "font-semibold " + (a.isLeadership ? "text-primary" : "text-foreground"), children: a.name }), e.jsx("span", { className: "text-xs text-muted-foreground", children: a.role })] }), a.isLeadership && e.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary", children: [e.jsx($, { className: "h-3 w-3" }), "Leadership"] })] }), e.jsx("div", { className: "mt-2 text-[11px] text-muted-foreground", children: a.groups.map((n) => e.jsxs("div", { children: ["\u2022 ", n] }, n)) })] }, a.name)) })] }), e.jsx(Ue, { type: "single", collapsible: true, className: "w-full", defaultValue: "group-1", children: Ze.map((a) => e.jsxs(Ye, { value: a.id, className: "py-2", children: [e.jsx(He, { className: "flex", children: e.jsxs(Be, { className: "flex flex-1 items-center justify-between rounded-md py-2 text-left text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0", children: [e.jsxs("span", { className: "flex items-center gap-3", children: [e.jsx("span", { className: "flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted/40", "aria-hidden": "true", children: e.jsx(a.icon, { size: 18, className: "opacity-70" }) }), e.jsxs("span", { className: "flex flex-col space-y-1", children: [e.jsx("span", { children: a.title }), a.sub && e.jsx("span", { className: "text-sm font-normal text-muted-foreground", children: a.sub })] })] }), e.jsx(we, { size: 16, className: "pointer-events-none shrink-0 opacity-60 transition-transform duration-200", "aria-hidden": "true" })] }) }), e.jsxs(qe, { className: "ms-3 ps-10 pb-3", children: [e.jsxs("div", { className: "mb-4 space-y-1 text-sm", children: [e.jsxs("div", { children: [e.jsx("span", { className: "font-semibold", children: "Group leaders: " }), e.jsx("span", { children: a.leaders.join(", ") })] }), e.jsxs("div", { className: "flex flex-wrap items-center gap-1", children: [e.jsx("span", { className: "font-semibold", children: "Assigned instructor(s):" }), a.instructors.map((n) => e.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] text-muted-foreground", children: [e.jsx($, { className: "h-3 w-3" }), n] }, n))] })] }), e.jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: a.members.map((n) => e.jsx("div", { className: "flex items-center justify-between rounded-md border px-3 py-2 text-sm bg-background", children: e.jsxs("div", { className: "flex flex-col", children: [e.jsx("span", { className: "font-medium text-foreground", children: n.name }), e.jsx("span", { className: "text-xs text-muted-foreground", children: "Group member" })] }) }, n.name)) })] })] }, a.id)) })] });
}
function Qe() {
  return e.jsx("main", { className: "min-h-screen overflow-y-auto", children: e.jsx("div", { className: "px-6 md:px-12 lg:px-20 py-8", children: e.jsx(We, {}) }) });
}
export {
  Qe as default
};
