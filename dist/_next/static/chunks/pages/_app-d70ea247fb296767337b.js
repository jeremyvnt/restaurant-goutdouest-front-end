(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888, 179],
  {
    3367: function (e, t, n) {
      "use strict";
      var r;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var o = ((r = n(7294)) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext({});
      t.AmpStateContext = o;
    },
    7845: function (e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.isInAmpMode = u),
        (t.useAmp = function () {
          return u(o.default.useContext(a.AmpStateContext));
        });
      var r,
        o = (r = n(7294)) && r.__esModule ? r : { default: r },
        a = n(3367);
      function u() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          o = void 0 !== r && r,
          a = e.hasQuery,
          u = void 0 !== a && a;
        return n || (o && u);
      }
    },
    4287: function (e, t, n) {
      "use strict";
      var r;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var o = ((r = n(7294)) && r.__esModule
        ? r
        : { default: r }
      ).default.createContext({});
      t.HeadManagerContext = o;
    },
    7947: function (e, t, n) {
      "use strict";
      var r = n(1682);
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      (t.__esModule = !0), (t.defaultHead = d), (t.default = void 0);
      var a,
        u = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== typeof e && "function" !== typeof e))
            return { default: e };
          var t = p();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(7294)),
        i = (a = n(617)) && a.__esModule ? a : { default: a },
        c = n(3367),
        f = n(4287),
        s = n(7845);
      function p() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [u.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              u.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function l(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === u.default.Fragment
          ? e.concat(
              u.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var h = ["name", "httpEquiv", "charSet", "itemProp"];
      function y(e, t) {
        return e
          .reduce(function (e, t) {
            var n = u.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(l, [])
          .reverse()
          .concat(d(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (o) {
                var a = !0,
                  u = !1;
                if (
                  o.key &&
                  "number" !== typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  u = !0;
                  var i = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(i) ? (a = !1) : e.add(i);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (a = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (var c = 0, f = h.length; c < f; c++) {
                      var s = h[c];
                      if (o.props.hasOwnProperty(s))
                        if ("charSet" === s) n.has(s) ? (a = !1) : n.add(s);
                        else {
                          var p = o.props[s],
                            d = r[s] || new Set();
                          ("name" === s && u) || !d.has(p)
                            ? (d.add(p), (r[s] = d))
                            : (a = !1);
                        }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map(function (e, n) {
            var a = e.key || n;
            if (
              !t.inAmpMode &&
              "link" === e.type &&
              e.props.href &&
              ["https://fonts.googleapis.com/css"].some(function (t) {
                return e.props.href.startsWith(t);
              })
            ) {
              var i = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? o(Object(n), !0).forEach(function (t) {
                        r(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : o(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              })({}, e.props || {});
              return (
                (i["data-href"] = i.href),
                (i.href = void 0),
                u.default.cloneElement(e, i)
              );
            }
            return u.default.cloneElement(e, { key: a });
          });
      }
      function v(e) {
        var t = e.children,
          n = (0, u.useContext)(c.AmpStateContext),
          r = (0, u.useContext)(f.HeadManagerContext);
        return u.default.createElement(
          i.default,
          {
            reduceComponentsToState: y,
            headManager: r,
            inAmpMode: (0, s.isInAmpMode)(n),
          },
          t
        );
      }
      v.rewind = function () {};
      var m = v;
      t.default = m;
    },
    617: function (e, t, n) {
      "use strict";
      var r = n(3115),
        o = n(2553),
        a = n(2012),
        u = (n(450), n(9807)),
        i = n(7690),
        c = n(9828);
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
          var n,
            r = c(e);
          if (t) {
            var o = c(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return i(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var s = n(7294),
        p = (function (e) {
          u(n, e);
          var t = f(n);
          function n(e) {
            var a;
            return (
              o(this, n),
              ((a = t.call(this, e))._hasHeadManager = void 0),
              (a.emitChange = function () {
                a._hasHeadManager &&
                  a.props.headManager.updateHead(
                    a.props.reduceComponentsToState(
                      r(a.props.headManager.mountedInstances),
                      a.props
                    )
                  );
              }),
              (a._hasHeadManager =
                a.props.headManager && a.props.headManager.mountedInstances),
              a
            );
          }
          return (
            a(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange();
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.emitChange();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(s.Component);
      t.default = p;
    },
    1522: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var r = n(6265),
        o = n(5893),
        a = n(7294),
        u = n(9008);
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function f(e) {
        var t = e.Component,
          n = e.pageProps;
        return (
          (0, a.useEffect)(function () {
            var e = document.querySelector("#jss-server-side");
            e && e.parentElement.removeChild(e);
          }, []),
          (0, o.jsxs)(a.Fragment, {
            children: [
              (0, o.jsxs)(u.default, {
                children: [
                  (0, o.jsx)("title", {
                    children: "Restaurant Go\xfbt d'Ouest",
                  }),
                  (0, o.jsx)("meta", {
                    name: "viewport",
                    content:
                      "minimum-scale=1, initial-scale=1, width=device-width",
                  }),
                ],
              }),
              (0, o.jsx)(t, c({}, n)),
            ],
          })
        );
      }
    },
    1780: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(1522);
        },
      ]);
    },
    9008: function (e, t, n) {
      e.exports = n(7947);
    },
    8164: function (e, t, n) {
      var r = n(4360);
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e);
      };
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
    1682: function (e) {
      e.exports = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      };
    },
    6265: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    9828: function (e) {
      function t(n) {
        return (
          (e.exports = t = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          t(n)
        );
      }
      e.exports = t;
    },
    9807: function (e, t, n) {
      var r = n(1914);
      e.exports = function (e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && r(e, t);
      };
    },
    7381: function (e) {
      e.exports = function (e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    5725: function (e) {
      e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    7690: function (e, t, n) {
      var r = n(7917),
        o = n(450);
      e.exports = function (e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? o(e) : t;
      };
    },
    3115: function (e, t, n) {
      var r = n(8164),
        o = n(7381),
        a = n(3585),
        u = n(5725);
      e.exports = function (e) {
        return r(e) || o(e) || a(e) || u();
      };
    },
    4453: function () {},
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 597], function () {
      return t(1780), t(2441);
    });
    var n = e.O();
    _N_E = n;
  },
]);