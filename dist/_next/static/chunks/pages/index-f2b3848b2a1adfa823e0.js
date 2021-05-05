(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405, 179],
  {
    6356: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return qe;
          },
        });
      var n = r(5893),
        i = r(8920),
        a = r(3457),
        o = r(282),
        s = r(1749),
        c = r(7748),
        l = r(6010),
        d = r(6265),
        p = r(8347),
        u = r(7294),
        h = r(5517),
        m = r(1120);
      function f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                (0, d.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var b = (0, m.Z)(function (e) {
          var t;
          return {
            root:
              ((t = {
                maxWidth: e.layout.contentWidth,
                width: "100%",
                margin: "0 auto",
                padding: e.spacing(6, 2),
              }),
              (0, d.Z)(t, e.breakpoints.up("sm"), { padding: e.spacing(8, 8) }),
              (0, d.Z)(t, e.breakpoints.up("md"), {
                padding: e.spacing(12, 8),
              }),
              t),
            fullWidth: { maxWidth: "100%" },
            disablePadding: { padding: 0 },
            narrow: { maxWidth: 800 },
          };
        }),
        j = function (e) {
          var t = e.children,
            r = e.fullWidth,
            i = e.narrow,
            a = e.disablePadding,
            o = e.className,
            s = (0, p.Z)(e, [
              "children",
              "fullWidth",
              "narrow",
              "disablePadding",
              "className",
            ]),
            c = b();
          return (0, n.jsx)(
            "section",
            g(
              g(
                {
                  className: (0, l.Z)(
                    "section",
                    c.root,
                    r ? c.fullWidth : {},
                    i ? c.narrow : {},
                    a ? c.disablePadding : {},
                    o
                  ),
                },
                s
              ),
              {},
              { children: t }
            )
          );
        },
        v = (0, m.Z)(function (e) {
          var t;
          return {
            root: { height: "100%", width: "100%", overflow: "hidden" },
            hero: (0, d.Z)(
              {
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                maxWidth: e.layout.contentWidth,
                margin: "0 auto",
              },
              e.breakpoints.down("sm"),
              { flexDirection: "column-reverse" }
            ),
            heroLeftSide:
              ((t = {}),
              (0, d.Z)(t, e.breakpoints.down("sm"), {
                padding: e.spacing(3, 8),
              }),
              (0, d.Z)(t, e.breakpoints.down("xs"), {
                padding: e.spacing(3, 2),
              }),
              t),
            heroRightSide: (0, d.Z)(
              { maxWidth: "50%", flex: "0 0 50%", position: "relative" },
              e.breakpoints.down("sm"),
              { maxWidth: "100%", flex: "0 0 100%", height: "300px" }
            ),
            heroCover: (0, d.Z)(
              { position: "relative", width: "50vw", height: "100%" },
              e.breakpoints.down("sm"),
              { width: "100%" }
            ),
            heroImageContainer: {
              height: "100%",
              width: "100%",
              overflow: "hidden",
            },
            heroImage: (0, d.Z)(
              {
                position: "absolute",
                left: "0%",
                width: "100%",
                height: "100%",
              },
              e.breakpoints.up("md"),
              {
                shapeOutside: "polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)",
                clipPath: "polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)",
              }
            ),
          };
        });
      function x(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? x(Object(r), !0).forEach(function (t) {
                (0, d.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : x(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var O = function (e) {
          var t = e.leftSide,
            r = e.rightSide,
            i = e.className,
            a = (0, p.Z)(e, ["leftSide", "rightSide", "className"]),
            o = v();
          return (0, n.jsxs)(
            "div",
            y(
              y({ className: (0, l.Z)(o.root, "hero-shaped", i) }, a),
              {},
              {
                children: [
                  (0, n.jsxs)("div", {
                    className: (0, l.Z)("hero-shaped__wrapper", o.hero),
                    children: [
                      (0, n.jsx)(j, {
                        className: (0, l.Z)(
                          "hero-shaped__left-side",
                          o.heroLeftSide
                        ),
                        children: t,
                      }),
                      (0, n.jsx)("div", {
                        className: (0, l.Z)(
                          "hero-shaped__right-side",
                          o.heroRightSide
                        ),
                        children: (0, n.jsx)("div", {
                          className: (0, l.Z)(
                            "hero-shaped__cover",
                            o.heroCover
                          ),
                          children: (0, n.jsx)("div", {
                            className: (0, l.Z)(
                              "hero-shaped__image-container",
                              o.heroImageContainer
                            ),
                            children: (0, n.jsx)("div", {
                              className: (0, l.Z)(
                                "hero-shaped__image",
                                o.heroImage
                              ),
                              children: r,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsx)(h.Z, {}),
                ],
              }
            )
          );
        },
        w = r(2318),
        Z = (0, m.Z)(function (e) {
          return {
            root: (0, d.Z)(
              { marginBottom: e.spacing(3) },
              e.breakpoints.up("md"),
              { marginBottom: e.spacing(4) }
            ),
            disableGutter: { marginBottom: 0 },
            title: { fontWeight: "bold" },
            cta: {
              marginLeft: e.spacing(1),
              "&:first-child": { marginLeft: e.spacing(0) },
            },
          };
        });
      function P(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? P(Object(r), !0).forEach(function (t) {
                (0, d.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : P(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var _ = function (e) {
        var t = e.title,
          r = e.titleVariant,
          i = e.subtitleVariant,
          a = e.subtitles,
          o = e.subtitleColor,
          d = e.label,
          u = e.overline,
          h = e.fadeUp,
          m = e.align,
          f = e.ctaGroup,
          g = e.disableGutter,
          b = e.titleClasses,
          j = e.className,
          v = e.labelProps,
          x = e.titleProps,
          y = e.subtitleProps,
          O = (0, p.Z)(e, [
            "title",
            "titleVariant",
            "subtitleVariant",
            "subtitles",
            "subtitleColor",
            "label",
            "overline",
            "fadeUp",
            "align",
            "ctaGroup",
            "disableGutter",
            "titleClasses",
            "className",
            "labelProps",
            "titleProps",
            "subtitleProps",
          ]),
          P = Z(),
          _ = "center";
        return (
          "left" === m ? (_ = "flex-start") : "right" === m && (_ = "flex-end"),
          (0, n.jsxs)(
            s.Z,
            N(
              N(
                {
                  container: !0,
                  spacing: 2,
                  "data-aos": h ? "fade-up" : "",
                  className: (0, l.Z)(
                    "section-header",
                    P.root,
                    g ? P.disableGutter : {},
                    j
                  ),
                },
                O
              ),
              {},
              {
                children: [
                  u &&
                    (0, n.jsx)(s.Z, {
                      item: !0,
                      container: !0,
                      justify: _,
                      xs: 12,
                      className: "section-header__overline-wrapper",
                      children: u,
                    }),
                  d &&
                    (0, n.jsx)(s.Z, {
                      item: !0,
                      xs: 12,
                      className: "section-header__label-wrapper",
                      children: (0, n.jsx)(
                        w.Z,
                        N(
                          N(
                            {
                              variant: "overline",
                              color: "primary",
                              component: "p",
                              align: m || "center",
                            },
                            v
                          ),
                          {},
                          { children: d }
                        )
                      ),
                    }),
                  (0, n.jsx)(s.Z, {
                    item: !0,
                    xs: 12,
                    className: "section-header__title-wrapper",
                    children: (0, n.jsx)(
                      w.Z,
                      N(
                        N(
                          {
                            variant: r,
                            align: m || "center",
                            className: (0, l.Z)(
                              "section-header__title",
                              P.title,
                              b || {}
                            ),
                            color: "textPrimary",
                          },
                          x
                        ),
                        {},
                        { children: t }
                      )
                    ),
                  }),
                  a &&
                    (0, n.jsx)(s.Z, {
                      item: !0,
                      xs: 12,
                      className: "section-header__subtitle-wrapper",
                      children: a.map(function (e) {
                        return (0,
                        n.jsx)(c.Z, { m: 1, children: (0, n.jsx)(w.Z, N(N({ variant: i || "h6", align: m || "center", color: o || "textSecondary", className: "section-header__subtitle" }, y), {}, { children: e })) }, "subtitle-".concat(e));
                      }),
                    }),
                  f &&
                    f.length &&
                    (0, n.jsx)(s.Z, {
                      item: !0,
                      xs: 12,
                      className: "section-header__cta-wrapper",
                      children: (0, n.jsx)(s.Z, {
                        container: !0,
                        justify: _,
                        alignItems: "center",
                        wrap: "nowrap",
                        className: "section-header__cta-container",
                        children: f.map(function (e, t) {
                          return (0,
                          n.jsx)("div", { className: (0, l.Z)("section-header__cta-item-wrapper", P.cta), children: e }, t);
                        }),
                      }),
                    }),
                ],
              }
            )
          )
        );
      };
      _.defaultProps = {
        titleVariant: "h4",
        labelProps: {},
        titleProps: {},
        subtitleProps: {},
      };
      var k = _,
        S = (0, m.Z)(function (e) {
          var t;
          return {
            root: { background: e.palette.alternate.main },
            inner:
              ((t = {
                maxWidth: e.layout.contentWidth,
                width: "100%",
                margin: "0 auto",
                padding: e.spacing(6, 2),
              }),
              (0, d.Z)(t, e.breakpoints.up("sm"), { padding: e.spacing(8, 8) }),
              (0, d.Z)(t, e.breakpoints.up("md"), {
                padding: e.spacing(12, 8),
              }),
              t),
            innerNarrowed: { maxWidth: 800 },
          };
        });
      function D(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? D(Object(r), !0).forEach(function (t) {
                (0, d.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : D(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var C = function (e) {
          var t = e.children,
            r = e.innerNarrowed,
            i = e.className,
            a = (0, p.Z)(e, ["children", "innerNarrowed", "className"]),
            o = S();
          return (0, n.jsx)(
            "section",
            z(
              z({ className: (0, l.Z)("section-alternate", o.root, i) }, a),
              {},
              {
                children: (0, n.jsx)("div", {
                  className: (0, l.Z)(
                    "section-alternate__content",
                    o.inner,
                    r ? o.innerNarrowed : {}
                  ),
                  children: t,
                }),
              }
            )
          );
        },
        I = r(2679);
      function G(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? G(Object(r), !0).forEach(function (t) {
                (0, d.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : G(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var W = (0, m.Z)(function () {
          return {
            root: { width: "100%", height: "100%" },
            dBlock: { display: "block" },
          };
        }),
        V = function (e) {
          var t = e.src,
            r = e.srcSet,
            i = e.alt,
            a = e.lazy,
            o = e.lazyProps,
            s = e.className,
            c = (0, p.Z)(e, [
              "src",
              "srcSet",
              "alt",
              "lazy",
              "lazyProps",
              "className",
            ]),
            d = W();
          return a
            ? (0, n.jsx)(
                I.LazyLoadImage,
                E(
                  E(
                    {
                      className: (0, l.Z)("image", d.root, d.dBlock, s),
                      alt: i,
                      src: t,
                      srcSet: r,
                      effect: "opacity",
                    },
                    o
                  ),
                  c
                )
              )
            : (0, n.jsx)(
                "img",
                E(
                  {
                    className: (0, l.Z)("image", d.root, s),
                    alt: i,
                    src: t,
                    srcSet: r,
                  },
                  c
                )
              );
        };
      V.defaultProps = {
        alt: "...",
        lazy: !0,
        lazyProps: { width: "auto", height: "auto" },
      };
      var L = V,
        B = {
          title: "Restaurant Go\xfbt d'Ouest",
          subtitles: [
            "La gastronomie de notre pays est extr\xeamement riche.",
            "Chaque r\xe9gion est fi\xe8re de ses produits, de ses traditions culinaires.",
            "Nul besoin de partir loin pour se faire plaisir:",
            "De la Normandie aux Pyr\xe9n\xe9es, Go\xfbt d\u2019Ouest vous proposera modestement de petits plaisirs au bout de la fourchette.",
          ],
        },
        M = {
          title: "Notre univers",
          subtitles: [
            "La gastronomie de notre pays est extr\xeamement riche. Chaque r\xe9gion est fi\xe8re de ses produits, de ses traditions culinaires.",
            "Nul besoin de partir loin pour se faire plaisir:",
            "De la Normandie aux Pyr\xe9n\xe9es, Go\xfbt d\u2019Ouest vous proposera modestement de petits plaisirs au bout de la fourchette.",
          ],
        },
        T = {
          title: "Il y a tant \xe0 partager",
          subtitles: [
            "Nos c\xf4tes fournissent poissons et coquillages frais.",
            "Nos campagnes sont mises en valeur par des \xe9leveurs et des mara\xeechers qui privil\xe9gient la qualit\xe9 \xe0 la quantit\xe9.",
            "Notre territoire propose \xe9galement des boissons vari\xe9es et de tradition.",
          ],
        },
        R = {
          title: "Notre carte",
          subtitles: [
            "Une carte simplifi\xe9e, on vous emm\xe8ne \xe0 l\u2019essentiel, au fil des saisons et au plus pr\xe8s des producteurs.",
            "Notre mot d\u2019ordre : le produit...",
            "Votre corps vous dira merci et vos papilles aussi !",
          ],
        },
        F = {
          title: "Nos produits",
          subtitles: [
            "Une carte simplifi\xe9e, on vous emm\xe8ne \xe0 l\u2019essentiel, au fil des saisons et au plus pr\xe8s des producteurs.",
            "Notre mot d\u2019ordre : le produit...",
            "Votre corps vous dira merci et vos papilles aussi !",
          ],
        },
        q = r(8105),
        H = (0, m.Z)(function (e) {
          return {
            fontWeight900: { fontWeight: 900 },
            leftSideContent: {
              "& .section-header__cta-container": (0, d.Z)(
                {},
                e.breakpoints.down("xs"),
                {
                  flexDirection: "column",
                  "& .section-header__cta-item-wrapper": {
                    width: "100%",
                    "&:last-child": { marginLeft: 0, marginTop: e.spacing(1) },
                    "& .MuiButtonBase-root": { width: "100%" },
                  },
                }
              ),
            },
            heroShaped: (0, d.Z)(
              {
                "& .hero-shaped__image": {
                  backgroundColor: e.palette.alternate.main,
                },
              },
              e.breakpoints.down("sm"),
              {
                "& .hero-shaped__image": { position: "relative" },
                "& .hero-shaped__wrapper": { flexDirection: "column" },
              }
            ),
            imageAnimation: (0, d.Z)(
              {
                background: 'url("restaurant.jpeg")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "400px auto",
                width: "600%",
                height: "600%",
                position: "absolute",
              },
              e.breakpoints.up("sm"),
              { backgroundSize: "800px auto" }
            ),
            imageSection: { borderRadius: 10 },
            sectionImageContainer: {
              paddingLeft: "1rem",
              paddingRight: "1rem",
            },
            pagePaddingTop: (0, d.Z)(
              { paddingTop: e.spacing(3) },
              e.breakpoints.up("md"),
              { paddingTop: e.spacing(5) }
            ),
            sectionNoPaddingTop: { paddingTop: 0 },
            shape: {
              background: e.palette.alternate.main,
              borderBottomRightRadius: "45%",
              borderBottom: "1px solid ".concat(q.Z[200]),
            },
          };
        });
      function U() {
        var e = H(),
          t = (0, i.Z)(),
          r = (0, a.Z)(t.breakpoints.up("md"), { defaultMatches: !0 }),
          d = (0, n.jsx)(k, {
            title: null === B || void 0 === B ? void 0 : B.title,
            subtitles: null === B || void 0 === B ? void 0 : B.subtitles,
            align: "left",
            titleProps: { variant: "h2", color: "textPrimary" },
            "data-aos": "fade-right",
            disableGutter: !0,
            className: e.leftSideContent,
          }),
          p = (0, n.jsx)("div", { className: (0, l.Z)(e.imageAnimation) });
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(O, { leftSide: d, rightSide: p }),
            (0, n.jsx)(j, {
              className: e.menuPreview,
              children: (0, n.jsx)(k, {
                title: null === R || void 0 === R ? void 0 : R.title,
                subtitles: null === R || void 0 === R ? void 0 : R.subtitles,
                align: "left",
                label: "Menu",
                titleProps: { variant: "h2", color: "textPrimary" },
                "data-aos": "fade-right",
                disableGutter: !0,
                ctaGroup: [
                  (0, n.jsx)(o.Z, {
                    href: "/menu",
                    color: "primary",
                    variant: "contained",
                    size: "large",
                    children: "D\xe9couvrez notre carte",
                  }),
                ],
                className: e.menuPreview,
              }),
            }),
            (0, n.jsxs)("div", {
              className: e.shape,
              children: [
                (0, n.jsx)(C, {
                  children: (0, n.jsxs)(s.Z, {
                    container: !0,
                    justify: "space-between",
                    spacing: 2,
                    children: [
                      (0, n.jsx)(s.Z, {
                        item: !0,
                        xs: 12,
                        md: 6,
                        "data-aos": "fade-right",
                        children: (0, n.jsx)(k, {
                          title: null === M || void 0 === M ? void 0 : M.title,
                          subtitles:
                            null === M || void 0 === M ? void 0 : M.subtitles,
                          align: r ? "left" : "center",
                          disableGutter: !0,
                          titleVariant: "h3",
                          titleProps: { className: e.fontWeightBold },
                        }),
                      }),
                      (0, n.jsx)(s.Z, {
                        item: !0,
                        container: !0,
                        alignItems: "center",
                        xs: 12,
                        md: 6,
                        "data-aos": "fade-left",
                        children: (0, n.jsx)(c.Z, {
                          className: e.sectionImageContainer,
                          children: (0, n.jsx)(L, {
                            className: e.imageSection,
                            src: "cote.jpeg",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)(j, {
                  className: e.sectionNoPaddingTop,
                  children: (0, n.jsxs)(s.Z, {
                    container: !0,
                    justify: "space-between",
                    spacing: 2,
                    children: [
                      (0, n.jsx)(s.Z, {
                        item: !0,
                        container: !0,
                        alignItems: "center",
                        xs: 12,
                        md: 6,
                        "data-aos": "fade-left",
                        children: (0, n.jsx)(c.Z, {
                          className: e.sectionImageContainer,
                          children: (0, n.jsx)(L, {
                            className: e.imageSection,
                            src: "montagne.jpeg",
                          }),
                        }),
                      }),
                      (0, n.jsx)(s.Z, {
                        item: !0,
                        xs: 12,
                        md: 6,
                        "data-aos": "fade-right",
                        children: (0, n.jsx)(k, {
                          title: null === T || void 0 === T ? void 0 : T.title,
                          subtitles:
                            null === T || void 0 === T ? void 0 : T.subtitles,
                          align: r ? "left" : "center",
                          disableGutter: !0,
                          titleVariant: "h3",
                          titleProps: { className: e.fontWeight900 },
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, n.jsx)(j, {
              children: (0, n.jsxs)(s.Z, {
                container: !0,
                justify: "space-between",
                spacing: 2,
                children: [
                  (0, n.jsx)(s.Z, {
                    item: !0,
                    container: !0,
                    alignItems: "center",
                    xs: 12,
                    md: 6,
                    "data-aos": "fade-left",
                    children: (0, n.jsx)(c.Z, {
                      className: e.sectionImageContainer,
                      children: (0, n.jsx)(L, {
                        className: e.imageSection,
                        src: "epicerie.jpeg",
                      }),
                    }),
                  }),
                  (0, n.jsx)(s.Z, {
                    item: !0,
                    xs: 12,
                    md: 6,
                    "data-aos": "fade-right",
                    children: (0, n.jsx)(k, {
                      title: null === F || void 0 === F ? void 0 : F.title,
                      subtitles:
                        null === F || void 0 === F ? void 0 : F.subtitles,
                      align: r ? "left" : "center",
                      disableGutter: !0,
                      label: "\xc9picerie",
                      titleVariant: "h3",
                      titleProps: { className: e.fontWeight900 },
                      ctaGroup: [
                        (0, n.jsx)(o.Z, {
                          href: "/epicerie",
                          color: "primary",
                          variant: "contained",
                          size: "large",
                          children: "D\xe9couvrez notre \xe9picerie",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var A = r(2822),
        X = r(998),
        K = r(7812),
        J = r(3792),
        Q = r(4363),
        Y = r(8769);
      function $(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? $(Object(r), !0).forEach(function (t) {
                (0, d.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : $(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var te = (0, m.Z)(function () {
          return {
            extraSmall: { fontSize: 10 },
            small: { fontSize: 20 },
            medium: { fontSize: 30 },
            large: { fontSize: 40 },
          };
        }),
        re = function (e) {
          var t = e.fontIconClass,
            r = e.size,
            i = e.fontIconColor,
            a = e.className,
            o = (0, p.Z)(e, [
              "fontIconClass",
              "size",
              "fontIconColor",
              "className",
            ]),
            s = te();
          return (0, n.jsx)(Y.Z, {
            children: (0, n.jsx)(
              "i",
              ee(
                {
                  className: (0, l.Z)("icon", t, s[r], a),
                  style: { color: i },
                },
                o
              )
            ),
          });
        };
      re.defaultProps = { size: "small" };
      var ne = re,
        ie = r(7870);
      function ae(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ae(Object(r), !0).forEach(function (t) {
                (0, d.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ae(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var se = (0, m.Z)(function (e) {
          return {
            root: {
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
            },
            title: { fontWeight: "bold" },
            icon: {
              padding: 0,
              marginLeft: e.spacing(1),
              "&:hover": { background: "transparent" },
            },
          };
        }),
        ce = function (e) {
          var t = e.color,
            r = (e.component, e.variant),
            i = e.title,
            a = e.href,
            o = e.className,
            s = e.iconProps,
            c = e.typographyProps,
            d = (0, p.Z)(e, [
              "color",
              "component",
              "variant",
              "title",
              "href",
              "className",
              "iconProps",
              "typographyProps",
            ]),
            u = se(),
            h = (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(
                  w.Z,
                  oe(
                    oe(
                      {
                        component: "span",
                        className: (0, l.Z)(
                          "learn-more-link__typography",
                          u.title
                        ),
                        variant: r,
                        color: t || "primary",
                      },
                      c
                    ),
                    {},
                    { children: i }
                  )
                ),
                (0, n.jsx)(
                  K.Z,
                  oe(
                    oe(
                      {
                        className: (0, l.Z)(
                          "learn-more-link__icon-button",
                          u.icon
                        ),
                        color: t || "primary",
                      },
                      s
                    ),
                    {},
                    {
                      children: (0, n.jsx)(ie.Z, {
                        className: "learn-more-link__arrow",
                      }),
                    }
                  )
                ),
              ],
            });
          return (0, n.jsx)(
            "a",
            oe(
              oe(
                { href: a, className: (0, l.Z)("learn-more-link", u.root, o) },
                d
              ),
              {},
              { children: h }
            )
          );
        };
      ce.defaultProps = {
        variant: "subtitle1",
        href: "#",
        typographyProps: {},
        iconProps: {},
        component: "a",
      };
      function le(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function de(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? le(Object(r), !0).forEach(function (t) {
                (0, d.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : le(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var pe = (0, m.Z)(function (e) {
          return {
            root: {
              display: "inline-flex",
              flexWrap: "nowrap",
              alignItems: "center",
              width: "100%",
            },
            title: { marginLeft: e.spacing(1) },
          };
        }),
        ue = function (e) {
          var t = e.title,
            r = e.color,
            i = e.fontIconClass,
            a = e.className,
            o = e.iconProps,
            s = e.typographyProps,
            c = (0, p.Z)(e, [
              "title",
              "color",
              "fontIconClass",
              "className",
              "iconProps",
              "typographyProps",
            ]),
            d = pe();
          return (0, n.jsxs)(
            "div",
            de(
              de({ className: (0, l.Z)("icon-text", d.root, a) }, c),
              {},
              {
                children: [
                  (0, n.jsx)(
                    ne,
                    de(
                      {
                        className: "icon-text__icon",
                        size: "small",
                        fontIconClass: i,
                        fontIconColor: r,
                      },
                      o
                    )
                  ),
                  (0, n.jsx)(
                    w.Z,
                    de(
                      de(
                        {
                          noWrap: !0,
                          variant: "subtitle1",
                          color: "textPrimary",
                          className: (0, l.Z)("icon-text__typography", d.title),
                        },
                        s
                      ),
                      {},
                      { children: t }
                    )
                  ),
                ],
              }
            )
          );
        };
      ue.defaultProps = { iconProps: {}, typographyProps: {} };
      (0, m.Z)(function (e) {
        return {
          root: {
            position: "fixed",
            bottom: e.spacing(2),
            right: e.spacing(2),
          },
        };
      });
      var he = (0, m.Z)(function (e) {
          return {
            menuItem: {
              margin: e.spacing(2),
              "&:last-child": { marginBottom: 0 },
            },
            menuGroupItem: {
              paddingTop: 0,
              paddingBottom: e.spacing(0.5),
              "&:last-child": { paddingBottom: 0 },
            },
            menuGroupTitle: { textTransform: "uppercase", color: "white" },
            navLink: { color: "rgba(255,255,255,.6)" },
          };
        }),
        me = function (e) {
          var t = e.section,
            r = he();
          return (0, n.jsxs)(A.Z, {
            disablePadding: !0,
            className: r.menuItem,
            children: [
              (0, n.jsx)(X.Z, {
                disableGutters: !0,
                className: r.menuGroupItem,
                children: (0, n.jsx)(w.Z, {
                  variant: "body2",
                  className: r.menuGroupTitle,
                  children: t.title,
                }),
              }),
              null === t || void 0 === t
                ? void 0
                : t.items.map(function (e, t) {
                    var i = e.href,
                      a = void 0 === i ? null : i,
                      o = e.title;
                    return (0,
                    n.jsx)(X.Z, { disableGutters: !0, className: r.menuGroupItem, children: (0, n.jsx)(w.Z, { variant: "body2", component: "a", href: a, className: (0, l.Z)(r.navLink, "submenu-item"), children: o }) }, t);
                  }),
            ],
          });
        },
        fe = (0, m.Z)(function (e) {
          return {
            root: {
              padding: e.spacing(7, 0),
              background: e.palette.background.footer,
            },
            footerContainer: (0, d.Z)(
              {
                maxWidth: e.layout.contentWidth,
                width: "100%",
                margin: "0 auto",
                padding: e.spacing(0, 2),
              },
              e.breakpoints.up("sm"),
              { padding: e.spacing(0, 8) }
            ),
            logoContainerItem: { paddingTop: 0 },
            logoContainer: { width: 120, height: 32 },
            logoImage: { width: "100%", height: "100%" },
            groupTitle: {
              textTransform: "uppercase",
              color: e.palette.primary.dark,
              marginBottom: e.spacing(1),
            },
            socialIcon: {
              padding: 0,
              marginRight: e.spacing(1),
              color: "rgba(255,255,255,.6)",
              "&:hover": { background: "transparent" },
              "&:last-child": { marginRight: 0 },
            },
            icon: { fontSize: 24 },
            menuListContainer: { padding: "0 !important" },
            divider: { width: "100%" },
            menu: { display: "flex" },
            navLink: { color: "rgba(255,255,255,.6)" },
          };
        });
      function ge(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function be(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ge(Object(r), !0).forEach(function (t) {
                (0, d.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ge(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var je = function (e) {
          var t = e.sections,
            r = e.className,
            i = (0, p.Z)(e, ["sections", "className"]),
            a = fe();
          return (0, n.jsx)(
            "div",
            be(
              be({}, i),
              {},
              {
                className: (0, l.Z)(a.root, r),
                children: (0, n.jsx)("div", {
                  className: a.footerContainer,
                  children: (0, n.jsxs)(s.Z, {
                    container: !0,
                    spacing: 4,
                    children: [
                      (0, n.jsx)(s.Z, {
                        item: !0,
                        xs: 12,
                        md: 2,
                        children: (0, n.jsxs)(A.Z, {
                          disablePadding: !0,
                          children: [
                            (0, n.jsx)(X.Z, {
                              disableGutters: !0,
                              className: a.logoContainerItem,
                              children: (0, n.jsx)("div", {
                                className: a.logoContainer,
                                children: (0, n.jsx)("a", {
                                  href: "/",
                                  title: "Restaurant Go\xfbt d'Ouest",
                                  children: (0, n.jsx)(L, {
                                    className: a.logoImage,
                                    src: "logo-grey-bg-square.svg",
                                    alt: "Logo Go\xfbt d'Ouest",
                                    lazy: !1,
                                  }),
                                }),
                              }),
                            }),
                            (0, n.jsxs)(X.Z, {
                              disableGutters: !0,
                              children: [
                                (0, n.jsx)(K.Z, {
                                  href: "https://www.facebook.com/goutdouest",
                                  className: a.socialIcon,
                                  children: (0, n.jsx)(J.Z, {
                                    className: a.icon,
                                  }),
                                }),
                                (0, n.jsx)(K.Z, {
                                  href:
                                    "https://www.instagram.com/valerieapeche/",
                                  className: a.socialIcon,
                                  children: (0, n.jsx)(Q.Z, {
                                    className: a.icon,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, n.jsx)(s.Z, {
                        item: !0,
                        xs: 12,
                        md: 10,
                        className: a.menuListContainer,
                        children: (0, n.jsxs)(s.Z, {
                          container: !0,
                          spacing: 0,
                          children: [
                            (0, n.jsx)(s.Z, {
                              item: !0,
                              children: (0, n.jsx)("div", {
                                className: a.menu,
                                children: (0, n.jsx)("div", {
                                  children: (0, n.jsx)(me, { section: t[0] }),
                                }),
                              }),
                            }),
                            (0, n.jsx)(s.Z, {
                              item: !0,
                              children: (0, n.jsx)("div", {
                                className: a.menu,
                                children: (0, n.jsx)("div", {
                                  children: (0, n.jsx)(me, { section: t[1] }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }
            )
          );
        },
        ve = r(5258),
        xe = r(8358),
        ye = r(1543),
        Oe = r(1664),
        we = r(8884),
        Ze = function (e) {
          var t = e.width,
            r = e.height;
          return (0, n.jsxs)("svg", {
            x: "0px",
            y: "0px",
            width: t,
            height: r,
            viewBox: "0 0 510.24 141.73",
            xmlSpace: "preserve",
            children: [
              (0, n.jsxs)("g", {
                fill: "#5F666F",
                children: [
                  (0, n.jsx)("path", {
                    d:
                      "M279.492 24.517c-9.895 0-19.021 3.253-26.402 8.728a9.76 9.76 0 00-1.268-1.233 6.55 6.55 0 00-1.02-.667 4.789 4.789 0 00-.617-.253c-.119-.033-.225-.068-.359-.091-.113-.019-.188-.037-.354-.042-1.52-.246-3.072-.564-4.537-.995-.736-.219-1.469-.473-2.08-.795-.301-.152-.564-.362-.639-.465a7.01 7.01 0 00-.916-1.028c-.318-.299-.641-.564-.936-.818-.068-.059-.123-.111-.188-.168l1.117-.284c.793-.218 1.59-.377 2.463-.876.217-.142.459-.3.666-.628.219-.31.26-.854.066-1.212-.211-.385-.486-.545-.709-.67a4.096 4.096 0 00-.65-.272c-.797-.266-1.643-.421-2.096-.737a.605.605 0 01-.094-.084c.008-.005.01-.009.02-.015.221-.149.611-.273.977-.378l1.17-.324c.203-.062.406-.128.627-.229.107-.049.225-.113.35-.208a.911.911 0 00.191-.205l.039-.066.004-.008.008-.017.016-.04a.651.651 0 00.041-.289c-.051-.308-.207-.419-.305-.516a2.124 2.124 0 00-.314-.208 4.927 4.927 0 00-.594-.271 17.26 17.26 0 00-1.168-.394l-1.152-.349c-.182-.06-.383-.126-.502-.194a4.58 4.58 0 01-.465-.333c-.586-.48-1.09-1.11-1.199-1.855-.109-.746.225-1.514.727-2.12.498-.618 1.127-1.132 1.783-1.592-.688.414-1.355.883-1.912 1.482-.555.584-.996 1.384-.934 2.265.068.877.594 1.637 1.215 2.192.156.141.32.275.496.396.221.145.404.208.598.291l1.131.438c.371.145.74.292 1.086.458.172.083.342.171.484.265.031.019.049.037.072.056-.018.008-.025.015-.045.022-.15.06-.332.11-.518.154l-1.17.255c-.408.102-.812.175-1.285.438-.117.066-.25.165-.373.315a.899.899 0 00-.197.681c.047.39.293.673.5.845.869.631 1.672.73 2.369 1.032.236.078.479.228.574.303a.96.96 0 01-.213.144c-.549.271-1.354.439-2.115.601l-1.189.246c-.188.044-.416.08-.711.202a1.48 1.48 0 00-.521.352c-.225.195-.359.702-.266.984.158.55.365.677.523.884.168.179.324.325.477.467.305.281.594.54.852.803.268.272.473.511.66.794.402.55.828.795 1.229 1.028.807.442 1.602.72 2.398.976 1.6.498 3.182.85 4.816 1.143l.201.01c-.115.007-.021.006.002.022.033.007.088.032.133.047.102.043.209.1.318.162.223.132.447.302.666.492.438.382.842.857 1.215 1.362.193.251.357.511.529.766l.529.862c.547.863 1.355 1.36 2.09 1.682 1.502.63 2.951.789 4.363.924.705.062 1.4.092 2.08.127.299.016.615.032.914.054-.02.053-.043.104-.061.157-.24.711-.455 1.421-.539 2.293-.018.447-.088.922.238 1.672.051.097.096.187.17.287l.111.146c.057.064.119.127.184.186l.125.103.051.039.113.073.025.015.053.03.1.054c.242.122.422.19.6.259.689.26 1.279.463 1.836.719 1.117.481 1.947 1.208 2.027 1.824.047.24.031.253-.002.423a2.285 2.285 0 01-.264.565c-.271.46-.711 1.005-1.131 1.68-.418.67-.822 1.564-.871 2.561-.059.996.244 1.923.623 2.672.373.731.902 1.423 1.359 1.951.469.542.955 1.061 1.449 1.566 1.98 2.019 4.131 3.796 6.236 5.531 1.031.863 2.129 1.739 2.934 2.572.094.1.182.199.244.28.049.06.023.037.039.044-.004-.019.031.053.047.08l.012.021v.001c.035.1.094.29.105.54.043.491-.006 1.107-.096 1.722-.18 1.242-.502 2.534-.846 3.836l-1.053 3.959a1.403 1.403 0 00.574 1.518c.268.18.588.418.881.639a25.733 25.733 0 012.539 2.221 20.887 20.887 0 011.496 1.648c.455.576.904 1.158 1.266 1.777.207.309.348.602.502.893.16.254.307.697.461 1.039.172.412.205.938.082 1.58-.031.18-.092.371-.141.559a24.041 24.041 0 00-1.412-2.674 21.553 21.553 0 00-1.014-1.5c-.176-.246-.377-.475-.562-.713a8.866 8.866 0 00-.594-.691l-.623-.668-.674-.621c-.436-.428-.953-.771-1.426-1.156a1.167 1.167 0 00-.473-.229 1.13 1.13 0 00-1.342.863l-.01.049a135.605 135.605 0 01-1.814 7.324c-.359 1.205-.693 2.42-1.1 3.602-.373 1.201-.822 2.357-1.252 3.527l-.016.039a.927.927 0 001.15 1.205c.402-.127 1.018-.158 1.443-.02.156.041.297.113.43.195a3.786 3.786 0 00-2.037 1.031 6.4 6.4 0 00-1.322 1.854 23.746 23.746 0 00-.775 1.953 79.311 79.311 0 00-1.283 3.891c-.797 2.57-1.711 5.109-2.902 7.521-.604 1.199-1.266 2.373-2.049 3.463a10.72 10.72 0 01-1.311 1.525c-.482.467-1.023.883-1.664 1.123.652-.189 1.244-.57 1.768-1.006a11.335 11.335 0 001.449-1.449c.889-1.045 1.637-2.199 2.314-3.387a39.98 39.98 0 001.232-2.381 44.388 44.388 0 0011.613 1.559c24.52 0 44.395-19.877 44.395-44.394.006-24.515-19.869-44.391-44.389-44.391zm-35.93-4.247c.012.016.01.022 0 0zm32.012 70.142l5.924-.217c.053.125.117.244.168.371.199.5.389 1.004.553 1.516a17.67 17.67 0 01.416 1.5c.045.203.148.385.279.543l-8.482-.385.154-.43c.361-.958.674-1.929.988-2.898zm3.293-4.701c.16.213.334.412.484.633.303.439.607.877.875 1.342.254.424.49.861.715 1.305l-4.873-.178c.475-1.564.916-3.139 1.334-4.721l.428.414.527.594c.184.191.348.4.51.611zm-5.146 9.844l.064-.156 18.633-.844-7.635-.346c.186-.184.334-.408.381-.686l.002-.01c.109-.641.326-1.324.584-2.061.154-.449.314-.928.465-1.43l11.518-.42-11.297-.412c.014-.064.035-.117.047-.182.189-.898.229-2.025-.197-3.086-.059-.137-.105-.262-.154-.391l15.049-.883-15.949-.938-.062-.109c-.432-.752-.936-1.436-1.461-2.1-.334-.414-.701-.791-1.059-1.18l20.787-.627-22.033-.666a36.316 36.316 0 00-1.205-1.086 26.28 26.28 0 00-.969-.783c-.07-.055-.141-.107-.211-.16l.412-1.521 25.311-.736-24.912-.723.014-.055c.303-1.119.584-2.271.805-3.471l24.594-.704-24.379-.699a8.96 8.96 0 00.047-1.64 4.56 4.56 0 00-.332-1.45l-.018-.049-.053-.103-.029-.057c-.025-.046-.025-.054-.078-.142l-.064-.101 24.646-.712-25.959-.749c-.846-.798-1.68-1.453-2.516-2.146-.49-.4-.979-.799-1.463-1.199l28.893-.859-30.988-.923a49.064 49.064 0 01-2.492-2.315c-.262-.265-.508-.539-.758-.809l32.297-.906-33.773-.946c-.031-.055-.07-.104-.1-.161-.471-.97-.463-1.545.127-2.528.076-.129.164-.262.258-.397l30.461-.92-29.332-.886c.117-.25.227-.519.303-.83.135-.491.119-1.18.01-1.604a3.949 3.949 0 00-.275-.811l24.688-.822-26.01-.866c-.654-.538-1.344-.898-2.012-1.192-.691-.302-1.4-.529-1.99-.741-.051-.018-.096-.036-.143-.054a1.199 1.199 0 01.006-.187c.021-.298.094-.644.184-.999l22.107-.915-19.684-.814a32.12 32.12 0 0112.674-2.591c17.807 0 32.24 14.435 32.24 32.24 0 17.804-14.434 32.242-32.24 32.242-2.297 0-4.529-.256-6.689-.715.041-.055.084-.102.127-.152l9.041-.777-5.336-.457c.146-.146.264-.361.27-.49.043-.379-.029-.441-.049-.545-.127-.33-.168-.391-.316-.643-.107-.156-.143-.258-.322-.469a3.036 3.036 0 00-.48-.502 3.435 3.435 0 00-1.154-.664 4.884 4.884 0 00-.867-.179zm5.771 16.433c-3.82 0-7.518-.518-11.043-1.453a63.66 63.66 0 001.248-3.025 39.875 39.875 0 009.795 1.232c21.998 0 39.832-17.832 39.832-39.832 0-21.998-17.834-39.831-39.832-39.831a39.629 39.629 0 00-22.955 7.288 6.343 6.343 0 01-.74-.234c-.516-.202-.912-.479-1.109-.777l-.586-.856c-.061-.08-.123-.156-.182-.236 7.154-5.291 15.992-8.434 25.572-8.434 23.793 0 43.08 19.288 43.08 43.08 0 23.791-19.287 43.078-43.08 43.078z",
                  }),
                  (0, n.jsx)("path", {
                    d:
                      "M272.484 70.232c-.082 1.261.354 1.579.885 1.842.246.117.408.195.486.469.109.406.588.891.711 1.352.324 1.271 1.674 1.32 1.404.068l-.348-1.84c.26-.527.496-1.447-.15-1.809a8.558 8.558 0 00-.605-.298c-.432-.203-.969-.449-1.037-.69-.1-.354-.355-.715-.693-.681-.385.043-.586.531-.653 1.587zM273.836 66.844c.814.443 2.426 1.846 2.414 2.156-.012.31 1.166-.684.576-1.637-.588-.953-3.219-2.703-3.641-2.615-.443.813-.158 1.653.651 2.096z",
                  }),
                ],
              }),
              (0, n.jsx)("g", {
                fill: "#5F666F",
                children: (0, n.jsx)("path", {
                  d:
                    "M48.16 68.276h17.888v14.779c0 11.672-5.524 16.574-18.163 16.574s-17.749-4.902-17.749-15.883V62.129c0-11.257 4.903-15.884 17.749-15.884s18.163 4.696 18.163 16.505h-9.53c0-5.18-1.244-8.08-8.633-8.08-6.906 0-8.219 2.9-8.219 7.942v20.649c0 5.041 1.312 7.943 8.219 7.943s8.633-2.902 8.633-8.15v-6.146H48.16v-8.632zM72.26 83.746V62.129c0-11.257 4.902-15.884 17.748-15.884s18.164 4.627 18.164 15.884v21.617c0 10.98-5.525 15.883-18.164 15.883S72.26 94.727 72.26 83.746zm26.381-.484V62.613c0-5.042-1.243-7.942-8.633-7.942-6.906 0-8.219 2.9-8.219 7.942v20.649c0 5.041 1.312 7.943 8.219 7.943s8.633-2.902 8.633-7.943zM142.146 46.384h9.53v37.362c0 10.98-5.524 15.883-18.163 15.883s-17.749-4.902-17.749-15.883V46.384h9.53v36.878c0 5.041 1.312 7.943 8.219 7.943s8.633-2.902 8.633-7.943V46.384zm-14.365-4.835l-4.973-1.52 6.838-11.188h8.84l6.836 11.188-5.248 1.52-6.008-7.39-6.285 7.39zM187.17 55.016h-10.98v44.476h-9.461V55.016h-11.051v-8.495h31.492v8.495zM222.801 46.384c12.846 0 18.164 4.627 18.164 15.884v21.615c0 10.982-5.525 15.746-18.164 15.746H204.57V46.384h18.231zm0 44.475c6.906 0 8.633-2.418 8.633-7.459V62.751c0-5.042-1.104-7.666-8.494-7.666h-8.908v35.774h8.769zM245.795 55.707c4.49-3.384 4.904-6.561 4.904-12.224h9.736c0 11.05-1.863 15.677-10.428 17.749l-4.212-5.525z",
                }),
              }),
              (0, n.jsx)("g", {
                fill: "#5F666F",
                children: (0, n.jsx)("path", {
                  d:
                    "M357.349 44.675h9.53v37.362c0 10.98-5.524 15.883-18.163 15.883-12.638 0-17.749-4.902-17.749-15.883V44.675h9.531v36.878c0 5.041 1.312 7.943 8.218 7.943s8.633-2.902 8.633-7.943V44.675zM383.312 89.15h22.03v8.701H373.78V60.42c0-11.257 4.904-15.884 17.749-15.884h13.397v8.425H391.53c-6.906 0-8.218 2.9-8.218 7.942v5.663h17.955v8.632h-17.955V89.15zM429.027 97.99h-19.199v-8.703h17.956c5.456 0 7.528-2.07 7.528-8.08 0-14.087-25.484 2.211-25.484-21.753 0-10.083 6.492-14.917 17.68-14.917h13.882v8.356c-1.935 0-10.429-.069-12.362-.069-7.39 0-9.6 1.036-9.6 6.561 0 12.914 25.415-2.693 25.415 21.479 0 12.292-4.835 17.126-15.816 17.126zM479.646 53.307h-10.981v44.476h-9.462V53.307h-11.049v-8.495h31.492v8.495z",
                }),
              }),
            ],
          });
        };
      Ze.defaultProps = { width: 200, height: 100 };
      var Pe = (0, m.Z)(function () {
          return {
            grow: { flexGrow: 1 },
            logo: {
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            },
            appBar: { boxShadow: "none" },
          };
        }),
        Ne = function (e) {
          var t = e.pages,
            r = e.openDrawerHandler,
            i = Pe(),
            a = function (e) {
              var t = e.title,
                r = e.href;
              return (0, n.jsx)(
                Oe.default,
                {
                  href: r,
                  children: (0, n.jsx)(o.Z, {
                    size: "large",
                    color: "primary",
                    component: "a",
                    children: t,
                  }),
                },
                "link-".concat(t)
              );
            };
          return (0, n.jsx)("div", {
            className: i.grow,
            children: (0, n.jsx)(ve.Z, {
              position: "static",
              className: i.appBar,
              color: "secondary",
              children: (0, n.jsxs)(xe.Z, {
                children: [
                  (0, n.jsx)(ye.Z, {
                    smUp: !0,
                    children: (0, n.jsx)(K.Z, {
                      edge: "start",
                      color: "inherit",
                      "aria-label": "open drawer",
                      onClick: r,
                      children: (0, n.jsx)(we.Z, {}),
                    }),
                  }),
                  (0, n.jsx)(ye.Z, { xsDown: !0, children: t.map(a) }),
                  (0, n.jsx)("div", {
                    className: i.logo,
                    children: (0, n.jsx)("a", {
                      href: "/",
                      title: "Restaurant Go\xfbt d'Ouest",
                      children: (0, n.jsx)(Ze, { width: 200, height: 75 }),
                    }),
                  }),
                  (0, n.jsx)("div", { className: i.grow }),
                ],
              }),
            }),
          });
        },
        _e = r(5757),
        ke = r(6155),
        Se = (0, m.Z)(function () {
          return { list: { width: 250 }, fullList: { width: "auto" } };
        }),
        De = function (e) {
          var t = e.isOpen,
            r = e.onClose,
            i = e.pages,
            a = Se(),
            o = function (e) {
              var t = e.title,
                r = e.href;
              return (0, n.jsx)(
                X.Z,
                {
                  button: !0,
                  children: (0, n.jsx)(Oe.default, {
                    href: r,
                    children: (0, n.jsx)(_e.Z, { primary: t }),
                  }),
                },
                "drawer-choice-".concat(t)
              );
            };
          return (0, n.jsx)(ke.ZP, {
            open: t,
            onClose: r,
            children: (0, n.jsx)("div", {
              className: a.list,
              role: "presentation",
              onClick: r,
              onKeyDown: r,
              children: (0, n.jsx)(A.Z, { children: i.map(o) }),
            }),
          });
        },
        ze = [
          { title: "Menu", href: "/menu" },
          { title: "\xc9picerie", href: "/epicerie" },
        ],
        Ce = [
          {
            title: "Coordonn\xe9es",
            items: [
              { title: "92 rue Carnot, 17600 Saujon" },
              { title: "05 46 22 98 46" },
              { title: "contact@goutdouest.fr" },
            ],
          },
          {
            title: "Horaires",
            items: [
              { title: "Ouvert du Lundi au Samedi" },
              { title: "de 12:00 \xe0 14:30" },
            ],
          },
        ],
        Ie = (0, m.Z)(function () {
          return { root: { height: "100%" } };
        }),
        Ge = function (e) {
          var t = e.children,
            r = Ie(),
            i = (0, u.useState)(!1),
            a = i[0],
            o = i[1];
          return (0, n.jsxs)("div", {
            className: (0, l.Z)((0, d.Z)({}, r.root, !0)),
            children: [
              (0, n.jsx)(Ne, {
                openDrawerHandler: function () {
                  return o(!0);
                },
                pages: ze,
              }),
              (0, n.jsx)(De, {
                isOpen: a,
                onClose: function () {
                  return o(!1);
                },
                pages: ze,
              }),
              (0, n.jsxs)("main", { children: [(0, n.jsx)(h.Z, {}), t] }),
              (0, n.jsx)(je, { sections: Ce }),
            ],
          });
        },
        Ee = r(1579),
        We = r(9895),
        Ve = r(5834),
        Le = "#5F666F",
        Be = {
          primary: { main: Le },
          secondary: { main: "#fff" },
          alternate: { main: "rgb(247, 249, 250)", dark: "#e8eaf6" },
          text: { primary: "#2d3748", secondary: "#718096" },
          divider: "rgba(0, 0, 0, 0.12)",
          background: {
            paper: "#fff",
            default: "#fff",
            level2: "#f5f5f5",
            level1: "#fff",
            footer: Le,
          },
        },
        Me = (0, r(4406).Z)({
          palette: Be,
          typography: { fontFamily: "Lato", button: { textTransform: "none" } },
          layout: { contentWidth: 1236 },
          zIndex: { appBar: 1200, drawer: 1100 },
        });
      function Te(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Te(Object(r), !0).forEach(function (t) {
                (0, d.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Te(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function Fe(e) {
        var t = e.component,
          r = e.layout,
          i = (0, p.Z)(e, ["component", "layout"]);
        return (
          (0, u.useEffect)(function () {
            var e = document.querySelector("#jss-server-side");
            e && e.parentElement.removeChild(e);
          }, []),
          (0, n.jsxs)(Ee.Z, {
            theme: Me,
            children: [
              (0, n.jsx)(Ve.ZP, {}),
              (0, n.jsx)(We.Z, {
                elevation: 0,
                children: (0, n.jsx)(r, { children: (0, n.jsx)(t, Re({}, i)) }),
              }),
            ],
          })
        );
      }
      var qe = function () {
        return (0, n.jsx)(Fe, { component: U, layout: Ge });
      };
    },
    8581: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return r(6356);
        },
      ]);
    },
    4453: function () {},
  },
  function (e) {
    e.O(0, [774, 597, 410, 501], function () {
      return (t = 8581), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
