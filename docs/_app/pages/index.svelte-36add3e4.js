import {
  S as K,
  i as y,
  s as V,
  e as v,
  t as c,
  k as W,
  c as u,
  a as _,
  h,
  d as l,
  m as b,
  b as j,
  g as k,
  J as o,
  K as x,
} from "../chunks/vendor-f0095a1c.js";
function q(E) {
  let e, d, r, a, m, s, f, p;
  return {
    c() {
      (e = v("h1")),
        (d = c("Welcome to SvelteKit")),
        (r = W()),
        (a = v("p")),
        (m = c("Visit ")),
        (s = v("a")),
        (f = c("kit.svelte.dev")),
        (p = c(" to read the documentation")),
        this.h();
    },
    l(t) {
      e = u(t, "H1", {});
      var i = _(e);
      (d = h(i, "Welcome to SvelteKit")),
        i.forEach(l),
        (r = b(t)),
        (a = u(t, "P", {}));
      var n = _(a);
      (m = h(n, "Visit ")), (s = u(n, "A", { href: !0 }));
      var S = _(s);
      (f = h(S, "kit.svelte.dev")),
        S.forEach(l),
        (p = h(n, " to read the documentation")),
        n.forEach(l),
        this.h();
    },
    h() {
      j(s, "href", "https://kit.svelte.dev");
    },
    m(t, i) {
      k(t, e, i),
        o(e, d),
        k(t, r, i),
        k(t, a, i),
        o(a, m),
        o(a, s),
        o(s, f),
        o(a, p);
    },
    p: x,
    i: x,
    o: x,
    d(t) {
      t && l(e), t && l(r), t && l(a);
    },
  };
}
class C extends K {
  constructor(e) {
    super();
    y(this, e, null, q, V, {});
  }
}
export { C as default };
