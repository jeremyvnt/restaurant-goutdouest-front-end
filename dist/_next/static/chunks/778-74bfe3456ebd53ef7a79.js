(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [778],
  {
    400: function () {
      "trimStart" in String.prototype ||
        (String.prototype.trimStart = String.prototype.trimLeft),
        "trimEnd" in String.prototype ||
          (String.prototype.trimEnd = String.prototype.trimRight),
        "description" in Symbol.prototype ||
          Object.defineProperty(Symbol.prototype, "description", {
            configurable: !0,
            get: function () {
              var e = /\((.*)\)/.exec(this.toString());
              return e ? e[1] : void 0;
            },
          }),
        Array.prototype.flat ||
          ((Array.prototype.flat = function (e, t) {
            return (
              (t = this.concat.apply([], this)),
              e > 1 && t.some(Array.isArray) ? t.flat(e - 1) : t
            );
          }),
          (Array.prototype.flatMap = function (e, t) {
            return this.map(e, t).flat();
          })),
        Promise.prototype.finally ||
          (Promise.prototype.finally = function (e) {
            if ("function" != typeof e) return this.then(e, e);
            var t = this.constructor || Promise;
            return this.then(
              function (r) {
                return t.resolve(e()).then(function () {
                  return r;
                });
              },
              function (r) {
                return t.resolve(e()).then(function () {
                  throw r;
                });
              }
            );
          });
    },
    2771: function (e, t) {
      "use strict";
      (t.__esModule = !0),
        (t.default = function () {
          var e = null;
          return {
            mountedInstances: new Set(),
            updateHead: function (t) {
              var r = (e = Promise.resolve().then(function () {
                if (r === e) {
                  e = null;
                  var o = {};
                  t.forEach(function (e) {
                    var t = o[e.type] || [];
                    t.push(e), (o[e.type] = t);
                  });
                  var a = o.title ? o.title[0] : null,
                    i = "";
                  if (a) {
                    var u = a.props.children;
                    i =
                      "string" === typeof u
                        ? u
                        : Array.isArray(u)
                        ? u.join("")
                        : "";
                  }
                  i !== document.title && (document.title = i),
                    ["meta", "base", "link", "style", "script"].forEach(
                      function (e) {
                        !(function (e, t) {
                          var r = document.getElementsByTagName("head")[0],
                            o = r.querySelector("meta[name=next-head-count]");
                          0;
                          for (
                            var a = Number(o.content),
                              i = [],
                              u = 0,
                              c = o.previousElementSibling;
                            u < a;
                            u++, c = c.previousElementSibling
                          )
                            c.tagName.toLowerCase() === e && i.push(c);
                          var s = t.map(n).filter(function (e) {
                            for (var t = 0, r = i.length; t < r; t++) {
                              if (i[t].isEqualNode(e))
                                return i.splice(t, 1), !1;
                            }
                            return !0;
                          });
                          i.forEach(function (e) {
                            return e.parentNode.removeChild(e);
                          }),
                            s.forEach(function (e) {
                              return r.insertBefore(e, o);
                            }),
                            (o.content = (a - i.length + s.length).toString());
                        })(e, o[e] || []);
                      }
                    );
                }
              }));
            },
          };
        }),
        (t.DOMAttributeNames = void 0);
      var r = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv",
        noModule: "noModule",
      };
      function n(e) {
        var t = e.type,
          n = e.props,
          o = document.createElement(t);
        for (var a in n)
          if (
            n.hasOwnProperty(a) &&
            "children" !== a &&
            "dangerouslySetInnerHTML" !== a &&
            void 0 !== n[a]
          ) {
            var i = r[a] || a.toLowerCase();
            "script" !== t ||
            ("async" !== i && "defer" !== i && "noModule" !== i)
              ? o.setAttribute(i, n[a])
              : (o[i] = !!n[a]);
          }
        var u = n.children,
          c = n.dangerouslySetInnerHTML;
        return (
          c
            ? (o.innerHTML = c.__html || "")
            : u &&
              (o.textContent =
                "string" === typeof u ? u : Array.isArray(u) ? u.join("") : ""),
          o
        );
      }
      t.DOMAttributeNames = r;
    },
    7403: function (e, t, r) {
      "use strict";
      var n = r(809),
        o = r(8561),
        a = r(2553),
        i = r(2012),
        u = r(9807),
        c = r(7690),
        s = r(9828),
        l = r(3848);
      function f(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = s(e);
          if (t) {
            var o = s(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return c(this, r);
        };
      }
      var d = r(9448),
        p = r(2426);
      (t.__esModule = !0),
        (t.render = ue),
        (t.renderError = se),
        (t.default = t.emitter = t.router = t.version = void 0);
      var m = p(r(9566));
      r(400);
      var h = p(r(7294)),
        v = p(r(3935)),
        y = r(4287),
        g = p(r(7332)),
        b = r(1642),
        S = r(1689),
        _ = r(3288),
        E = d(r(4915)),
        w = d(r(9186)),
        x = r(3937),
        P = r(1567),
        T = p(r(2771)),
        C = p(r(7365)),
        A = p(r(4829)),
        k = r(6975),
        M = r(2441),
        R = JSON.parse(document.getElementById("__NEXT_DATA__").textContent);
      window.__NEXT_DATA__ = R;
      t.version = "10.2.0";
      var N = function (e) {
          return [].slice.call(e);
        },
        L = R.props,
        F = R.err,
        D = R.page,
        I = R.query,
        j = R.buildId,
        O = R.assetPrefix,
        B = R.runtimeConfig,
        q = R.dynamicIds,
        H = R.isFallback,
        X = R.locale,
        U = R.locales,
        G = R.domainLocales,
        V = R.isPreview,
        W = R.defaultLocale,
        J = O || "";
      (r.p = "".concat(J, "/_next/")),
        w.setConfig({ serverRuntimeConfig: {}, publicRuntimeConfig: B || {} });
      var Y = (0, x.getURL)();
      (0, S.hasBasePath)(Y) && (Y = (0, S.delBasePath)(Y));
      var Q = new C.default(j, J),
        $ = function (e) {
          var t = l(e, 2),
            r = t[0],
            n = t[1];
          return Q.routeLoader.onEntrypoint(r, n);
        };
      window.__NEXT_P &&
        window.__NEXT_P.map(function (e) {
          return setTimeout(function () {
            return $(e);
          }, 0);
        }),
        (window.__NEXT_P = []),
        (window.__NEXT_P.push = $);
      var z,
        K,
        Z,
        ee,
        te = (0, T.default)(),
        re = document.getElementById("__next");
      t.router = K;
      var ne,
        oe = (function (e) {
          u(r, e);
          var t = f(r);
          function r() {
            return a(this, r), t.apply(this, arguments);
          }
          return (
            i(r, [
              {
                key: "componentDidCatch",
                value: function (e, t) {
                  this.props.fn(e, t);
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this.scrollToHash(),
                    !K.isSsr ||
                      "/404" === D ||
                      ("/_error" === D &&
                        L &&
                        L.pageProps &&
                        404 === L.pageProps.statusCode) ||
                      !(
                        H ||
                        (R.nextExport &&
                          ((0, _.isDynamicRoute)(K.pathname) ||
                            location.search)) ||
                        (L && L.__N_SSG && location.search)
                      ) ||
                      K.replace(
                        K.pathname +
                          "?" +
                          String(
                            E.assign(
                              E.urlQueryToSearchParams(K.query),
                              new URLSearchParams(location.search)
                            )
                          ),
                        Y,
                        { _h: 1, shallow: !H }
                      );
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.scrollToHash();
                },
              },
              {
                key: "scrollToHash",
                value: function () {
                  var e = location.hash;
                  if ((e = e && e.substring(1))) {
                    var t = document.getElementById(e);
                    t &&
                      setTimeout(function () {
                        return t.scrollIntoView();
                      }, 0);
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            r
          );
        })(h.default.Component),
        ae = (0, g.default)();
      t.emitter = ae;
      var ie = (function () {
        var e = o(
          n.mark(function e() {
            var r,
              o,
              a,
              i,
              u,
              c,
              s = arguments;
            return n.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        s.length > 0 && void 0 !== s[0] ? s[0] : {},
                        (r = F),
                        (e.prev = 3),
                        (e.next = 6),
                        Q.routeLoader.whenEntrypoint("/_app")
                      );
                    case 6:
                      if (!("error" in (o = e.sent))) {
                        e.next = 9;
                        break;
                      }
                      throw o.error;
                    case 9:
                      (a = o.component),
                        (i = o.exports),
                        (Z = a),
                        i &&
                          i.reportWebVitals &&
                          (ee = function (e) {
                            var t,
                              r = e.id,
                              n = e.name,
                              o = e.startTime,
                              a = e.value,
                              u = e.duration,
                              c = e.entryType,
                              s = e.entries,
                              l = ""
                                .concat(Date.now(), "-")
                                .concat(
                                  Math.floor(8999999999999 * Math.random()) +
                                    1e12
                                );
                            s && s.length && (t = s[0].startTime),
                              i.reportWebVitals({
                                id: r || l,
                                name: n,
                                startTime: o || t,
                                value: null == a ? u : a,
                                label:
                                  "mark" === c || "measure" === c
                                    ? "custom"
                                    : "web-vital",
                              });
                          }),
                        (e.next = 16);
                      break;
                    case 16:
                      return (e.next = 18), Q.routeLoader.whenEntrypoint(D);
                    case 18:
                      e.t0 = e.sent;
                    case 19:
                      if (!("error" in (u = e.t0))) {
                        e.next = 22;
                        break;
                      }
                      throw u.error;
                    case 22:
                      (ne = u.component), (e.next = 27);
                      break;
                    case 27:
                      e.next = 32;
                      break;
                    case 29:
                      (e.prev = 29), (e.t1 = e.catch(3)), (r = e.t1);
                    case 32:
                      if (!window.__NEXT_PRELOADREADY) {
                        e.next = 36;
                        break;
                      }
                      return (e.next = 36), window.__NEXT_PRELOADREADY(q);
                    case 36:
                      return (
                        (t.router = K = (0, M.createRouter)(D, I, Y, {
                          initialProps: L,
                          pageLoader: Q,
                          App: Z,
                          Component: ne,
                          wrapApp: ve,
                          err: r,
                          isFallback: Boolean(H),
                          subscription: function (e, t, r) {
                            return ue(
                              Object.assign({}, e, { App: t, scroll: r })
                            );
                          },
                          locale: X,
                          locales: U,
                          defaultLocale: W,
                          domainLocales: G,
                          isPreview: V,
                        })),
                        ue(
                          (c = {
                            App: Z,
                            initial: !0,
                            Component: ne,
                            props: L,
                            err: r,
                          })
                        ),
                        e.abrupt("return", ae)
                      );
                    case 43:
                      return e.abrupt("return", {
                        emitter: ae,
                        render: ue,
                        renderCtx: c,
                      });
                    case 44:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[3, 29]]
            );
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
      function ue(e) {
        return ce.apply(this, arguments);
      }
      function ce() {
        return (ce = o(
          n.mark(function e(t) {
            return n.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!t.err) {
                        e.next = 4;
                        break;
                      }
                      return (e.next = 3), se(t);
                    case 3:
                      return e.abrupt("return");
                    case 4:
                      return (e.prev = 4), (e.next = 7), ye(t);
                    case 7:
                      e.next = 16;
                      break;
                    case 9:
                      if (
                        ((e.prev = 9), (e.t0 = e.catch(4)), !e.t0.cancelled)
                      ) {
                        e.next = 13;
                        break;
                      }
                      throw e.t0;
                    case 13:
                      return (
                        (e.next = 16), se((0, m.default)({}, t, { err: e.t0 }))
                      );
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[4, 9]]
            );
          })
        )).apply(this, arguments);
      }
      function se(e) {
        var t = e.App,
          r = e.err;
        return (
          console.error(r),
          Q.loadPage("/_error").then(function (n) {
            var o = n.page,
              a = n.styleSheets,
              i = ve(t),
              u = {
                Component: o,
                AppTree: i,
                router: K,
                ctx: { err: r, pathname: D, query: I, asPath: Y, AppTree: i },
              };
            return Promise.resolve(
              e.props ? e.props : (0, x.loadGetInitialProps)(t, u)
            ).then(function (t) {
              return ye(
                (0, m.default)({}, e, {
                  err: r,
                  Component: o,
                  styleSheets: a,
                  props: t,
                })
              );
            });
          })
        );
      }
      t.default = ie;
      var le = "function" === typeof v.default.hydrate;
      function fe() {
        x.ST &&
          (performance.mark("afterHydrate"),
          performance.measure(
            "Next.js-before-hydration",
            "navigationStart",
            "beforeRender"
          ),
          performance.measure(
            "Next.js-hydration",
            "beforeRender",
            "afterHydrate"
          ),
          ee && performance.getEntriesByName("Next.js-hydration").forEach(ee),
          pe());
      }
      function de() {
        if (x.ST) {
          performance.mark("afterRender");
          var e = performance.getEntriesByName("routeChange", "mark");
          e.length &&
            (performance.measure(
              "Next.js-route-change-to-render",
              e[0].name,
              "beforeRender"
            ),
            performance.measure(
              "Next.js-render",
              "beforeRender",
              "afterRender"
            ),
            ee &&
              (performance.getEntriesByName("Next.js-render").forEach(ee),
              performance
                .getEntriesByName("Next.js-route-change-to-render")
                .forEach(ee)),
            pe(),
            ["Next.js-route-change-to-render", "Next.js-render"].forEach(
              function (e) {
                return performance.clearMeasures(e);
              }
            ));
        }
      }
      function pe() {
        ["beforeRender", "afterHydrate", "afterRender", "routeChange"].forEach(
          function (e) {
            return performance.clearMarks(e);
          }
        );
      }
      function me(e) {
        var t = e.children;
        return h.default.createElement(
          oe,
          {
            fn: function (e) {
              return se({ App: Z, err: e }).catch(function (e) {
                return console.error("Error rendering page: ", e);
              });
            },
          },
          h.default.createElement(
            b.RouterContext.Provider,
            { value: (0, M.makePublicRouterInstance)(K) },
            h.default.createElement(
              y.HeadManagerContext.Provider,
              { value: te },
              t
            )
          )
        );
      }
      var he,
        ve = function (e) {
          return function (t) {
            var r = (0, m.default)({}, t, { Component: ne, err: F, router: K });
            return h.default.createElement(
              me,
              null,
              h.default.createElement(e, r)
            );
          };
        };
      function ye(e) {
        var t = e.App,
          r = e.Component,
          n = e.props,
          o = e.err,
          a = "initial" in e ? void 0 : e.styleSheets;
        (r = r || he.Component), (n = n || he.props);
        var i = (0, m.default)({}, n, { Component: r, err: o, router: K });
        he = i;
        var u,
          c = !1,
          s = new Promise(function (e, t) {
            z && z(),
              (u = function () {
                (z = null), e();
              }),
              (z = function () {
                (c = !0), (z = null);
                var e = new Error("Cancel rendering route");
                (e.cancelled = !0), t(e);
              });
          });
        function l() {
          u();
        }
        !(function () {
          if (!a) return !1;
          var e = N(document.querySelectorAll("style[data-n-href]")),
            t = new Set(
              e.map(function (e) {
                return e.getAttribute("data-n-href");
              })
            ),
            r = document.querySelector("noscript[data-n-css]"),
            n = null == r ? void 0 : r.getAttribute("data-n-css");
          a.forEach(function (e) {
            var r = e.href,
              o = e.text;
            if (!t.has(r)) {
              var a = document.createElement("style");
              a.setAttribute("data-n-href", r),
                a.setAttribute("media", "x"),
                n && a.setAttribute("nonce", n),
                document.head.appendChild(a),
                a.appendChild(document.createTextNode(o));
            }
          });
        })();
        var f = h.default.createElement(
          h.default.Fragment,
          null,
          h.default.createElement(be, {
            callback: function () {
              if (a && !c) {
                for (
                  var t = new Set(
                      a.map(function (e) {
                        return e.href;
                      })
                    ),
                    r = N(document.querySelectorAll("style[data-n-href]")),
                    n = r.map(function (e) {
                      return e.getAttribute("data-n-href");
                    }),
                    o = 0;
                  o < n.length;
                  ++o
                )
                  t.has(n[o])
                    ? r[o].removeAttribute("media")
                    : r[o].setAttribute("media", "x");
                var i = document.querySelector("noscript[data-n-css]");
                i &&
                  a.forEach(function (e) {
                    var t = e.href,
                      r = document.querySelector(
                        'style[data-n-href="'.concat(t, '"]')
                      );
                    r && (i.parentNode.insertBefore(r, i.nextSibling), (i = r));
                  }),
                  N(document.querySelectorAll("link[data-n-p]")).forEach(
                    function (e) {
                      e.parentNode.removeChild(e);
                    }
                  ),
                  getComputedStyle(document.body, "height");
              }
              e.scroll && window.scrollTo(e.scroll.x, e.scroll.y);
            },
          }),
          h.default.createElement(
            me,
            null,
            h.default.createElement(t, i),
            h.default.createElement(
              P.Portal,
              { type: "next-route-announcer" },
              h.default.createElement(k.RouteAnnouncer, null)
            )
          )
        );
        return (
          (function (e, t) {
            x.ST && performance.mark("beforeRender");
            var r = t(le ? fe : de);
            le ? (v.default.hydrate(r, e), (le = !1)) : v.default.render(r, e);
          })(re, function (e) {
            return h.default.createElement(ge, { callbacks: [e, l] }, f);
          }),
          s
        );
      }
      function ge(e) {
        var t = e.callbacks,
          r = e.children;
        return (
          h.default.useLayoutEffect(
            function () {
              return t.forEach(function (e) {
                return e();
              });
            },
            [t]
          ),
          h.default.useEffect(function () {
            (0, A.default)(ee);
          }, []),
          r
        );
      }
      function be(e) {
        var t = e.callback;
        return (
          h.default.useLayoutEffect(
            function () {
              return t();
            },
            [t]
          ),
          null
        );
      }
    },
    5778: function (e, t, r) {
      "use strict";
      var n = r(9448)(r(7403));
      (window.next = n), (0, n.default)().catch(console.error);
    },
    7365: function (e, t, r) {
      "use strict";
      var n = r(2553),
        o = r(2012),
        a = r(9448),
        i = r(2426);
      (t.__esModule = !0), (t.default = void 0);
      var u = r(1689),
        c = i(r(7892)),
        s = r(3288),
        l = r(4436),
        f = r(6528),
        d = a(r(7599));
      var p = (function () {
        function e(t, r) {
          n(this, e),
            (this.buildId = void 0),
            (this.assetPrefix = void 0),
            (this.promisedSsgManifest = void 0),
            (this.promisedDevPagesManifest = void 0),
            (this.routeLoader = void 0),
            (this.routeLoader = (0, d.default)(r)),
            (this.buildId = t),
            (this.assetPrefix = r),
            (this.promisedSsgManifest = new Promise(function (e) {
              window.__SSG_MANIFEST
                ? e(window.__SSG_MANIFEST)
                : (window.__SSG_MANIFEST_CB = function () {
                    e(window.__SSG_MANIFEST);
                  });
            }));
        }
        return (
          o(e, [
            {
              key: "getPageList",
              value: function () {
                return (0, d.getClientBuildManifest)().then(function (e) {
                  return e.sortedPages;
                });
              },
            },
            {
              key: "getDataHref",
              value: function (e, t, r, n) {
                var o = this,
                  a = (0, l.parseRelativeUrl)(e),
                  i = a.pathname,
                  d = a.query,
                  p = a.search,
                  m = (0, l.parseRelativeUrl)(t).pathname,
                  h = (function (e) {
                    if ("/" !== e[0])
                      throw new Error(
                        'Route name should start with a "/", got "'.concat(
                          e,
                          '"'
                        )
                      );
                    return "/" === e ? e : e.replace(/\/$/, "");
                  })(i),
                  v = function (e) {
                    var t = (0, c.default)(
                      (0, f.removePathTrailingSlash)((0, u.addLocale)(e, n)),
                      ".json"
                    );
                    return (0, u.addBasePath)(
                      "/_next/data/"
                        .concat(o.buildId)
                        .concat(t)
                        .concat(r ? "" : p)
                    );
                  },
                  y = (0, s.isDynamicRoute)(h),
                  g = y ? (0, u.interpolateAs)(i, m, d).result : "";
                return y ? g && v(g) : v(h);
              },
            },
            {
              key: "_isSsg",
              value: function (e) {
                return this.promisedSsgManifest.then(function (t) {
                  return t.has(e);
                });
              },
            },
            {
              key: "loadPage",
              value: function (e) {
                return this.routeLoader.loadRoute(e).then(function (e) {
                  if ("component" in e)
                    return {
                      page: e.component,
                      mod: e.exports,
                      styleSheets: e.styles.map(function (e) {
                        return { href: e.href, text: e.content };
                      }),
                    };
                  throw e.error;
                });
              },
            },
            {
              key: "prefetch",
              value: function (e) {
                return this.routeLoader.prefetch(e);
              },
            },
          ]),
          e
        );
      })();
      t.default = p;
    },
    4829: function (e, t, r) {
      "use strict";
      (t.__esModule = !0), (t.default = void 0);
      var n,
        o = r(5866),
        a = (location.href, !1);
      function i(e) {
        n && n(e);
      }
      t.default = function (e) {
        (n = e),
          a ||
            ((a = !0),
            (0, o.getCLS)(i),
            (0, o.getFID)(i),
            (0, o.getFCP)(i),
            (0, o.getLCP)(i),
            (0, o.getTTFB)(i));
      };
    },
    1567: function (e, t, r) {
      "use strict";
      var n = r(3848),
        o = r(9448);
      (t.__esModule = !0), (t.Portal = void 0);
      var a = o(r(7294)),
        i = r(3935);
      t.Portal = function (e) {
        var t = e.children,
          r = e.type,
          o = a.useRef(null),
          u = a.useState(),
          c = n(u, 2)[1];
        return (
          a.useEffect(
            function () {
              return (
                (o.current = document.createElement(r)),
                document.body.appendChild(o.current),
                c({}),
                function () {
                  o.current && document.body.removeChild(o.current);
                }
              );
            },
            [r]
          ),
          o.current ? (0, i.createPortal)(t, o.current) : null
        );
      };
    },
    6975: function (e, t, r) {
      "use strict";
      var n = r(3848),
        o = r(9448);
      (t.__esModule = !0), (t.RouteAnnouncer = u), (t.default = void 0);
      var a = o(r(7294)),
        i = r(2441);
      function u() {
        var e = (0, i.useRouter)().asPath,
          t = (0, a.useState)(""),
          r = n(t, 2),
          o = r[0],
          u = r[1],
          c = (0, a.useRef)(!1);
        return (
          (0, a.useEffect)(
            function () {
              if (c.current) {
                var t,
                  r = document.querySelector("h1");
                r && (t = r.innerText || r.textContent),
                  t || (t = document.title ? document.title : e),
                  u(t);
              } else c.current = !0;
            },
            [e]
          ),
          a.default.createElement(
            "p",
            {
              "aria-live": "assertive",
              id: "__next-route-announcer__",
              role: "alert",
              style: {
                border: 0,
                clip: "rect(0 0 0 0)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "absolute",
                width: "1px",
                whiteSpace: "nowrap",
                wordWrap: "normal",
              },
            },
            o
          )
        );
      }
      var c = u;
      t.default = c;
    },
    4287: function (e, t, r) {
      "use strict";
      var n;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var o = ((n = r(7294)) && n.__esModule
        ? n
        : { default: n }
      ).default.createContext({});
      t.HeadManagerContext = o;
    },
    9186: function (e, t) {
      "use strict";
      var r;
      (t.__esModule = !0),
        (t.setConfig = function (e) {
          r = e;
        }),
        (t.default = void 0);
      t.default = function () {
        return r;
      };
    },
    5866: function (e) {
      e.exports = (function () {
        var e = {
            599: function (e, t) {
              !(function (e) {
                "use strict";
                var t,
                  r,
                  n = function () {
                    return ""
                      .concat(Date.now(), "-")
                      .concat(Math.floor(8999999999999 * Math.random()) + 1e12);
                  },
                  o = function (e) {
                    return {
                      name: e,
                      value:
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : -1,
                      delta: 0,
                      entries: [],
                      id: n(),
                      isFinal: !1,
                    };
                  },
                  a = function (e, t) {
                    try {
                      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                        var r = new PerformanceObserver(function (e) {
                          return e.getEntries().map(t);
                        });
                        return r.observe({ type: e, buffered: !0 }), r;
                      }
                    } catch (e) {}
                  },
                  i = !1,
                  u = !1,
                  c = function (e) {
                    i = !e.persisted;
                  },
                  s = function () {
                    addEventListener("pagehide", c),
                      addEventListener("beforeunload", function () {});
                  },
                  l = function (e) {
                    var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    u || (s(), (u = !0)),
                      addEventListener(
                        "visibilitychange",
                        function (t) {
                          var r = t.timeStamp;
                          "hidden" === document.visibilityState &&
                            e({ timeStamp: r, isUnloading: i });
                        },
                        { capture: !0, once: t }
                      );
                  },
                  f = function (e, t, r, n) {
                    var o;
                    return function () {
                      r && t.isFinal && r.disconnect(),
                        t.value >= 0 &&
                          (n ||
                            t.isFinal ||
                            "hidden" === document.visibilityState) &&
                          ((t.delta = t.value - (o || 0)),
                          (t.delta || t.isFinal || void 0 === o) &&
                            (e(t), (o = t.value)));
                    };
                  },
                  d = function () {
                    return (
                      void 0 === t &&
                        ((t =
                          "hidden" === document.visibilityState ? 0 : 1 / 0),
                        l(function (e) {
                          var r = e.timeStamp;
                          return (t = r);
                        }, !0)),
                      {
                        get timeStamp() {
                          return t;
                        },
                      }
                    );
                  },
                  p = function () {
                    return (
                      r ||
                        (r = new Promise(function (e) {
                          return ["scroll", "keydown", "pointerdown"].map(
                            function (t) {
                              addEventListener(t, e, {
                                once: !0,
                                passive: !0,
                                capture: !0,
                              });
                            }
                          );
                        })),
                      r
                    );
                  };
                (e.getCLS = function (e) {
                  var t,
                    r =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n = o("CLS", 0),
                    i = function (e) {
                      e.hadRecentInput ||
                        ((n.value += e.value), n.entries.push(e), t());
                    },
                    u = a("layout-shift", i);
                  u &&
                    ((t = f(e, n, u, r)),
                    l(function (e) {
                      var r = e.isUnloading;
                      u.takeRecords().map(i), r && (n.isFinal = !0), t();
                    }));
                }),
                  (e.getFCP = function (e) {
                    var t,
                      r = o("FCP"),
                      n = d(),
                      i = a("paint", function (e) {
                        "first-contentful-paint" === e.name &&
                          e.startTime < n.timeStamp &&
                          ((r.value = e.startTime),
                          (r.isFinal = !0),
                          r.entries.push(e),
                          t());
                      });
                    i && (t = f(e, r, i));
                  }),
                  (e.getFID = function (e) {
                    var t = o("FID"),
                      r = d(),
                      n = function (e) {
                        e.startTime < r.timeStamp &&
                          ((t.value = e.processingStart - e.startTime),
                          t.entries.push(e),
                          (t.isFinal = !0),
                          u());
                      },
                      i = a("first-input", n),
                      u = f(e, t, i);
                    i
                      ? l(function () {
                          i.takeRecords().map(n), i.disconnect();
                        }, !0)
                      : window.perfMetrics &&
                        window.perfMetrics.onFirstInputDelay &&
                        window.perfMetrics.onFirstInputDelay(function (e, n) {
                          n.timeStamp < r.timeStamp &&
                            ((t.value = e),
                            (t.isFinal = !0),
                            (t.entries = [
                              {
                                entryType: "first-input",
                                name: n.type,
                                target: n.target,
                                cancelable: n.cancelable,
                                startTime: n.timeStamp,
                                processingStart: n.timeStamp + e,
                              },
                            ]),
                            u());
                        });
                  }),
                  (e.getLCP = function (e) {
                    var t,
                      r =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      n = o("LCP"),
                      i = d(),
                      u = function (e) {
                        var r = e.startTime;
                        r < i.timeStamp
                          ? ((n.value = r), n.entries.push(e))
                          : (n.isFinal = !0),
                          t();
                      },
                      c = a("largest-contentful-paint", u);
                    if (c) {
                      t = f(e, n, c, r);
                      var s = function () {
                        n.isFinal ||
                          (c.takeRecords().map(u), (n.isFinal = !0), t());
                      };
                      p().then(s), l(s, !0);
                    }
                  }),
                  (e.getTTFB = function (e) {
                    var t,
                      r = o("TTFB");
                    (t = function () {
                      try {
                        var t =
                          performance.getEntriesByType("navigation")[0] ||
                          (function () {
                            var e = performance.timing,
                              t = { entryType: "navigation", startTime: 0 };
                            for (var r in e)
                              "navigationStart" !== r &&
                                "toJSON" !== r &&
                                (t[r] = Math.max(e[r] - e.navigationStart, 0));
                            return t;
                          })();
                        (r.value = r.delta = t.responseStart),
                          (r.entries = [t]),
                          (r.isFinal = !0),
                          e(r);
                      } catch (e) {}
                    }),
                      "complete" === document.readyState
                        ? setTimeout(t, 0)
                        : addEventListener("pageshow", t);
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              })(t);
            },
          },
          t = {};
        function r(n) {
          if (t[n]) return t[n].exports;
          var o = (t[n] = { exports: {} }),
            a = !0;
          try {
            e[n].call(o.exports, o, o.exports, r), (a = !1);
          } finally {
            a && delete t[n];
          }
          return o.exports;
        }
        return (r.ab = "//"), r(599);
      })();
    },
    450: function (e) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    9566: function (e) {
      function t() {
        return (
          (e.exports = t =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          t.apply(this, arguments)
        );
      }
      e.exports = t;
    },
    9828: function (e) {
      function t(r) {
        return (
          (e.exports = t = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          t(r)
        );
      }
      e.exports = t;
    },
    9807: function (e, t, r) {
      var n = r(1914);
      e.exports = function (e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && n(e, t);
      };
    },
    7690: function (e, t, r) {
      var n = r(7917),
        o = r(450);
      e.exports = function (e, t) {
        return !t || ("object" !== n(t) && "function" !== typeof t) ? o(e) : t;
      };
    },
  },
]);
