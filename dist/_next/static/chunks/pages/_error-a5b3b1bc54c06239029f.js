(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [820],
  {
    6086: function (e) {
      "use strict";
      var t = Object.assign.bind(Object);
      (e.exports = t), (e.exports.default = e.exports);
    },
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
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(o.default.useContext(a.AmpStateContext));
        });
      var r,
        o = (r = n(7294)) && r.__esModule ? r : { default: r },
        a = n(3367);
      function i() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          o = void 0 !== r && r,
          a = e.hasQuery,
          i = void 0 !== a && a;
        return n || (o && i);
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
      (t.__esModule = !0), (t.defaultHead = p), (t.default = void 0);
      var a,
        i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== typeof e && "function" !== typeof e))
            return { default: e };
          var t = l();
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
        u = (a = n(617)) && a.__esModule ? a : { default: a },
        c = n(3367),
        f = n(4287),
        s = n(7845);
      function l() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [i.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              i.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function d(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === i.default.Fragment
          ? e.concat(
              i.default.Children.toArray(t.props.children).reduce(function (
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
            var n = i.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(d, [])
          .reverse()
          .concat(p(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (o) {
                var a = !0,
                  i = !1;
                if (
                  o.key &&
                  "number" !== typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  i = !0;
                  var u = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(u) ? (a = !1) : e.add(u);
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
                          var l = o.props[s],
                            p = r[s] || new Set();
                          ("name" === s && i) || !p.has(l)
                            ? (p.add(l), (r[s] = p))
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
              var u = (function (e) {
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
                (u["data-href"] = u.href),
                (u.href = void 0),
                i.default.cloneElement(e, u)
              );
            }
            return i.default.cloneElement(e, { key: a });
          });
      }
      function v(e) {
        var t = e.children,
          n = (0, i.useContext)(c.AmpStateContext),
          r = (0, i.useContext)(f.HeadManagerContext);
        return i.default.createElement(
          u.default,
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
        i = (n(450), n(9807)),
        u = n(7690),
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
          return u(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var s = n(7294),
        l = (function (e) {
          i(n, e);
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
      t.default = l;
    },
    900: function (e, t, n) {
      "use strict";
      var r = n(2553),
        o = n(2012),
        a = n(9807),
        i = n(7690),
        u = n(9828);
      function c(e) {
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
            r = u(e);
          if (t) {
            var o = u(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return i(this, n);
        };
      }
      var f = n(2426);
      (t.__esModule = !0), (t.default = void 0);
      var s = f(n(7294)),
        l = f(n(7947)),
        p = {
          400: "Bad Request",
          404: "This page could not be found",
          405: "Method Not Allowed",
          500: "Internal Server Error",
        };
      function d(e) {
        var t = e.res,
          n = e.err;
        return {
          statusCode: t && t.statusCode ? t.statusCode : n ? n.statusCode : 404,
        };
      }
      var h = (function (e) {
        a(n, e);
        var t = c(n);
        function n() {
          return r(this, n), t.apply(this, arguments);
        }
        return (
          o(n, [
            {
              key: "render",
              value: function () {
                var e = this.props.statusCode,
                  t =
                    this.props.title ||
                    p[e] ||
                    "An unexpected error has occurred";
                return s.default.createElement(
                  "div",
                  { style: y.error },
                  s.default.createElement(
                    l.default,
                    null,
                    s.default.createElement("title", null, e, ": ", t)
                  ),
                  s.default.createElement(
                    "div",
                    null,
                    s.default.createElement("style", {
                      dangerouslySetInnerHTML: { __html: "body { margin: 0 }" },
                    }),
                    e
                      ? s.default.createElement("h1", { style: y.h1 }, e)
                      : null,
                    s.default.createElement(
                      "div",
                      { style: y.desc },
                      s.default.createElement("h2", { style: y.h2 }, t, ".")
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(s.default.Component);
      (t.default = h),
        (h.displayName = "ErrorPage"),
        (h.getInitialProps = d),
        (h.origGetInitialProps = d);
      var y = {
        error: {
          color: "#000",
          background: "#fff",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
          height: "100vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
        desc: {
          display: "inline-block",
          textAlign: "left",
          lineHeight: "49px",
          height: "49px",
          verticalAlign: "middle",
        },
        h1: {
          display: "inline-block",
          borderRight: "1px solid rgba(0, 0, 0,.3)",
          margin: 0,
          marginRight: "20px",
          padding: "10px 23px 10px 0",
          fontSize: "24px",
          fontWeight: 500,
          verticalAlign: "top",
        },
        h2: {
          fontSize: "14px",
          fontWeight: "normal",
          lineHeight: "inherit",
          margin: 0,
          padding: 0,
        },
      };
    },
    4977: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_error",
        function () {
          return n(900);
        },
      ]);
    },
    4360: function (e) {
      e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      };
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
    2553: function (e) {
      e.exports = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      };
    },
    2012: function (e) {
      function t(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      e.exports = function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
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
    2426: function (e) {
      e.exports = function (e) {
        return e && e.__esModule ? e : { default: e };
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
    1914: function (e) {
      function t(n, r) {
        return (
          (e.exports = t =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          t(n, r)
        );
      }
      e.exports = t;
    },
    3115: function (e, t, n) {
      var r = n(8164),
        o = n(7381),
        a = n(3585),
        i = n(5725);
      e.exports = function (e) {
        return r(e) || o(e) || a(e) || i();
      };
    },
    7917: function (e) {
      function t(n) {
        return (
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? (e.exports = t = function (e) {
                return typeof e;
              })
            : (e.exports = t = function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
          t(n)
        );
      }
      e.exports = t;
    },
    3585: function (e, t, n) {
      var r = n(4360);
      e.exports = function (e, t) {
        if (e) {
          if ("string" === typeof e) return r(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(e, t)
              : void 0
          );
        }
      };
    },
  },
  function (e) {
    e.O(0, [774], function () {
      return (t = 4977), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
